import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as e,d as a,b as r,e as n,r as s}from"./app.e9e1538d.js";const i={},d=n('<h1 id="一次内存溢出排查优化实战" tabindex="-1"><a class="header-anchor" href="#一次内存溢出排查优化实战" aria-hidden="true">#</a> 一次内存溢出排查优化实战</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><code>OutOfMemoryError</code> 问题相信很多朋友都遇到过，相对于常见的业务异常（数组越界、空指针等）来说这类问题是很难定位和解决的。</p><p>本文以最近碰到的一次线上内存溢出的定位、解决问题的方式展开；希望能对碰到类似问题的同学带来思路和帮助。</p><p>主要从<code>表现--&gt;排查--&gt;定位--&gt;解决</code> 四个步骤来分析和解决问题。</p><h2 id="表象" tabindex="-1"><a class="header-anchor" href="#表象" aria-hidden="true">#</a> 表象</h2><p>最近我们生产上的一个应用不断的爆出内存溢出，并且随着业务量的增长出现的频次越来越高。</p><p>该程序的业务逻辑非常简单，就是从 Kafka 中将数据消费下来然后批量的做持久化操作。</p><p>而现象则是随着 Kafka 的消息越多，出现的异常的频次就越快。由于当时还有其他工作所以只能让运维做重启，并且监控好堆内存以及 GC 情况。</p><blockquote><p>重启大法虽好，可是依然不能根本解决问题。</p></blockquote><h2 id="排查" tabindex="-1"><a class="header-anchor" href="#排查" aria-hidden="true">#</a> 排查</h2><p>于是我们想根据运维之前收集到的内存数据、GC 日志尝试判断哪里出现问题。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-81051388-0c35-4de6-a3d9-4f546ef4bfec.jpg" alt="" loading="lazy"></p><p>结果发现老年代的内存使用就算是发生 GC 也一直居高不下，而且随着时间推移也越来越高。</p><p>结合 jstat 的日志发现就算是发生了 FGC 老年代也已经回收不了，内存已经到顶。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-e79d4da0-fbb1-4918-a8d8-e29d2d64323b.jpg" alt="" loading="lazy"></p><p>甚至有几台应用 FGC 达到了上百次，时间也高的可怕。</p><p>这说明应用的内存使用肯定是有问题的，有许多赖皮对象始终回收不掉。</p><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2><p>由于生产上的内存 dump 文件非常大，达到了几十G。也是由于我们的内存设置太大有关。</p><p>所以导致想使用 MAT 分析需要花费大量时间。</p><p>因此我们便想是否可以在本地复现，这样就要好定位的多。</p><p>为了尽快的复现问题，我将本地应用最大堆内存设置为 150M。</p><p>然后在消费 Kafka 那里 Mock 为一个 while 循环一直不断的生成数据。</p><p>同时当应用启动之后利用 VisualVM 连上应用实时监控内存、GC 的使用情况。</p><p>结果跑了 10 几分钟内存使用并没有什么问题。根据图中可以看出，每产生一次 GC 内存都能有效的回收，所以这样并没有复现问题。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-4cf05af0-924f-406b-a8a4-5aa885e38cea.jpg" alt="" loading="lazy"></p><p>没法复现问题就很难定位了。于是我们 review 代码，发现生产的逻辑和我们用 while 循环 Mock 数据还不太一样。</p><p>查看生产的日志发现每次从 Kafka 中取出的都是几百条数据，而我们 Mock 时每次只能产生<strong>一条</strong>。</p><p>为了尽可能的模拟生产情况便在服务器上跑着一个生产者程序，一直源源不断的向 Kafka 中发送数据。</p><p>果然不出意外只跑了一分多钟内存就顶不住了，观察左图发现 GC 的频次非常高，但是内存的回收却是相形见拙。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-a6d6c9cd-e79c-4a76-ba97-032cfefefd5f.jpg" alt="" loading="lazy"></p><p>同时后台也开始打印内存溢出了，这样便复现出问题。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>从目前的表现来看就是内存中有许多对象一直存在强引用关系导致得不到回收。</p><p>于是便想看看到底是什么对象占用了这么多的内存，利用 VisualVM 的 HeapDump 功能可以立即 dump 出当前应用的内存情况。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-49b47ca3-b3e2-49f7-85c9-23f7a3ef6f93.jpg" alt="" loading="lazy"></p><p>结果发现 <code>com.lmax.disruptor.RingBuffer</code> 类型的对象占用了将近 50% 的内存。</p><p>看到这个包自然就想到了 <code>Disruptor</code> 环形队列。</p><p>再次 review 代码发现：从 Kafka 里取出的 700 条数据是直接往 Disruptor 里丢的。</p><p>这里也就能说明为什么第一次模拟数据没复现问题了。</p><p>模拟的时候是一个对象放进队列里，而生产的情况是 700 条数据放进队列里。这个数据量是 700 倍的差距。</p><p>而 Disruptor 作为一个环形队列，再对象没有被覆盖之前是一直存在的。</p><p>我也做了一个实验，证明确实如此。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-dee49da6-905a-4085-b82e-41e136d422e8.jpg" alt="" loading="lazy"></p><p>我设置队列大小为 8 ，从 0~9 往里面写 10 条数据，当写到 8 的时候就会把之前 0 的位置覆盖掉，后面的以此类推（类似于 HashMap 的取模定位）。</p><p>所以在生产上假设我们的队列大小是 1024，那么随着系统的运行最终肯定会导致 1024 个位置上装满了对象，而且每个位置是 700 个！</p><p>于是查看了生产上 Disruptor 的 RingBuffer 配置，结果是：<code>1024*1024</code>。</p><p>这个数量级就非常吓人了。</p><p>为了验证是否是这个问题，我在本地将该值换为 2 ，一个最小值试试。</p><p>同样的 128M 内存，也是通过 Kafka 一直源源不断的取出数据。通过监控如下：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/oom-5529781f-1f68-47a7-a3d2-04eba9e9d52e.jpg" alt="" loading="lazy"></p><p>跑了 20 几分钟系统一切正常，每当一次 GC 都能回收大部分内存，最终呈现锯齿状。</p><p>这样问题就找到了，不过生产上这个值具体设置多少还得根据业务情况测试才能知道，但原有的 1024*1024 是绝对不能再使用了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>虽然到了最后也就改了一行代码(还没改，直接修改配置)，但这排查过程我觉得是有意义的。</p><p>也会让大部分觉得 JVM 这样的黑盒难以下手的同学有一个直观的感受。</p><p><code>同时也得感叹 Disruptor 东西虽好，也不能乱用哦！</code></p><p>相关演示代码查看：</p>',59),l={href:"https://github.com/crossoverJie/JCSprout/tree/master/src/main/java/com/crossoverjie/disruptor",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("strong",null,"你的点赞与转发是最大的支持。")],-1),m={href:"https://crossoverjie.top/2018/08/29/java-senior/OOM-Disruptor/",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),g=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),f={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[a("关注二哥的原创公众号 "),e("strong",null,"沉默王二"),a("，回复"),e("strong",null,"111"),a(" 即可免费领取。")],-1),v=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function j(_,k){const t=s("ExternalLinkIcon");return p(),c("div",null,[d,e("p",null,[e("a",l,[a("https://github.com/crossoverJie/JCSprout/tree/master/src/main/java/com/crossoverjie/disruptor"),r(t)])]),h,e("p",null,[a("原文链接："),e("a",m,[a("https://crossoverjie.top/2018/08/29/java-senior/OOM-Disruptor/"),r(t)])]),b,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),g,a(" 等等等等……详情戳："),e("a",f,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),r(t)])]),u,v])}const C=o(i,[["render",j],["__file","oom.html.vue"]]);export{C as default};
