import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,d as a,b as t,e as c,r as l}from"./app.99eb8281.js";const i={},u=c(`<p>首先我们来看看<strong>IO和NIO的区别</strong>：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-90c84f53-f82d-43dd-87c5-4477e540fa57.jpg" alt="" loading="lazy"></p><ul><li><p>可简单认为：<strong>IO是面向流的处理，NIO是面向块(缓冲区)的处理</strong></p></li><li><p>面向流的I/O 系统<strong>一次一个字节地处理数据</strong>。</p></li><li><p>一个面向块(缓冲区)的I/O系统<strong>以块的形式处理数据</strong>。</p></li></ul><p>NIO主要有<strong>三个核心部分组成</strong>：</p><ul><li><strong>buffer缓冲区</strong></li><li><strong>Channel管道</strong></li><li><strong>Selector选择器</strong></li></ul><h2 id="buffer缓冲区和channel管道" tabindex="-1"><a class="header-anchor" href="#buffer缓冲区和channel管道" aria-hidden="true">#</a> buffer缓冲区和Channel管道</h2><p>在NIO中并不是以流的方式来处理数据的，而是以buffer缓冲区和Channel管道<strong>配合使用</strong>来处理数据。</p><p>简单理解一下：</p><ul><li>Channel管道比作成铁路，buffer缓冲区比作成火车(运载着货物)</li></ul><p>而我们的NIO就是<strong>通过Channel管道运输着存储数据的Buffer缓冲区的来实现数据的处理</strong>！</p><ul><li><p>要时刻记住：Channel不与数据打交道，它只负责运输数据。与数据打交道的是Buffer缓冲区</p></li><li><p><strong>Channel--&gt;运输</strong></p></li><li><p><strong>Buffer--&gt;数据</strong></p></li></ul><p>相对于传统IO而言，<strong>流是单向的</strong>。对于NIO而言，有了Channel管道这个概念，我们的<strong>读写都是双向</strong>的(铁路上的火车能从广州去北京、自然就能从北京返还到广州)！</p><h3 id="buffer缓冲区核心要点" tabindex="-1"><a class="header-anchor" href="#buffer缓冲区核心要点" aria-hidden="true">#</a> buffer缓冲区核心要点</h3><p>我们来看看Buffer缓冲区有什么值得我们注意的地方。</p><p>Buffer是缓冲区的抽象类：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-436aa175-3586-4457-b93c-70b21ff122dc.jpg" alt="" loading="lazy"></p><p>其中ByteBuffer是<strong>用得最多的实现类</strong>(在管道中读写字节数据)。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-4bf73cdc-b5e2-4866-ac68-cc57602be5e8.jpg" alt="" loading="lazy"></p><p>拿到一个缓冲区我们往往会做什么？很简单，就是<strong>读取缓冲区的数据/写数据到缓冲区中</strong>。所以，缓冲区的核心方法就是:</p><ul><li>put()</li><li>get()</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-7229ef4c-a27d-4f90-97d0-8abbfda810a0.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-df9f0bdf-3afe-42dc-9e7e-459484d7cb8e.jpg" alt="" loading="lazy"></p><p>Buffer类维护了4个核心变量属性来提供<strong>关于其所包含的数组的信息</strong>。它们是：</p><ul><li><p>容量Capacity</p></li><li><p><strong>缓冲区能够容纳的数据元素的最大数量</strong>。容量在缓冲区创建时被设定，并且永远不能被改变。(不能被改变的原因也很简单，底层是数组嘛)</p></li><li><p>上界Limit</p></li><li><p><strong>缓冲区里的数据的总数</strong>，代表了当前缓冲区中一共有多少数据。</p></li><li><p>位置Position</p></li><li><p><strong>下一个要被读或写的元素的位置</strong>。Position会自动由相应的 <code>get( )</code>和 <code>put( )</code>函数更新。</p></li><li><p>标记Mark</p></li><li><p>一个备忘位置。<strong>用于记录上一次读写的位置</strong>。</p></li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-85991ca3-99bd-4e56-a84e-e58af4d8aac9.jpg" alt="" loading="lazy"></p><h3 id="buffer代码演示" tabindex="-1"><a class="header-anchor" href="#buffer代码演示" aria-hidden="true">#</a> buffer代码演示</h3><p>首先展示一下<strong>是如何创建缓冲区的，核心变量的值是怎么变化的</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 创建一个缓冲区         </span>
        <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 看一下初始时4个核心变量的值         </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始时--&gt;limit---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始时--&gt;position---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始时--&gt;capacity---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始时--&gt;mark---&gt;&quot;</span> <span class="token operator">+</span> byteBuffer<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 添加一些数据到缓冲区中         </span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 看一下初始时4个核心变量的值         </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put完之后--&gt;limit---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put完之后--&gt;position---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put完之后--&gt;capacity---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put完之后--&gt;mark---&gt;&quot;</span> <span class="token operator">+</span> byteBuffer<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-cbf8b617-f71c-47f7-bc20-72d46306349f.jpg" alt="" loading="lazy"></p><p>现在<strong>我想要从缓存区拿数据</strong>，怎么拿呀？？NIO给了我们一个<code>flip()</code>方法。这个方法可以<strong>改动position和limit的位置</strong>！</p><p>还是上面的代码，我们<code>flip()</code>一下后，再看看4个核心属性的值会发生什么变化：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-571a843f-1334-4fcb-bbae-90dbbe31ac8c.jpg" alt="" loading="lazy"></p><p>很明显的是：</p><ul><li><strong>limit变成了position的位置了</strong></li><li><strong>而position变成了0</strong></li></ul><p>看到这里的同学可能就会想到了：当调用完<code>filp()</code>时：<strong>limit是限制读到哪里，而position是从哪里读</strong></p><p>一般我们称<code>filp()</code>为**“切换成读模式”**</p><ul><li>每当要从缓存区的时候读取数据时，就调用<code>filp()</code><strong>“切换成读模式”</strong>。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-b7d1a7d4-f2a7-4635-b5a8-9d10733df5f3.jpg" alt="" loading="lazy"></p><p>切换成读模式之后，我们就可以读取缓冲区的数据了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建一个limit()大小的字节数组(因为就只有limit这么多个数据可读)  </span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 将读取的数据装进我们的字节数组中         </span>
byteBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出数据         </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-40d60cff-e87b-4180-a350-7dc5a5207156.jpg" alt="" loading="lazy"></p><p>随后输出一下核心变量的值看看：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c0fc49ea-bc74-43e8-8f16-d26b93e731bf.jpg" alt="" loading="lazy"></p><p><strong>读完我们还想写数据到缓冲区</strong>，那就使用<code>clear()</code>函数，这个函数会“清空”缓冲区：</p><ul><li>数据没有真正被清空，只是被<strong>遗忘</strong>掉了</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-6567241c-8ca6-492d-a4d1-45e6b275e75e.jpg" alt="" loading="lazy"></p><h3 id="filechannel通道核心要点" tabindex="-1"><a class="header-anchor" href="#filechannel通道核心要点" aria-hidden="true">#</a> FileChannel通道核心要点</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-275c9588-216a-416f-934e-f3fbe54fda43.jpg" alt="" loading="lazy"></p><p>Channel通道<strong>只负责传输数据、不直接操作数据的</strong>。操作数据都是通过Buffer缓冲区来进行操作！</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1. 通过本地IO的方式来获取通道         </span>
<span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\3yBlog\\\\JavaEE常用框架\\\\Elasticsearch就是这么简单.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 得到文件的输入通道         </span>
<span class="token class-name">FileChannel</span> inchannel <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. jdk1.7后通过静态方法.open()获取通道         </span>
<span class="token class-name">FileChannel</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\3yBlog\\\\JavaEE常用框架\\\\Elasticsearch就是这么简单2.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardOpenOption</span><span class="token punctuation">.</span><span class="token constant">WRITE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<strong>FileChannel配合缓冲区</strong>实现文件复制的功能：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-741d14cb-4ea6-43cb-aacc-4fa3297cedba.jpg" alt="" loading="lazy"></p><p>使用<strong>内存映射文件</strong>的方式实现<strong>文件复制</strong>的功能(直接操作缓冲区)：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c8020177-39b4-405b-abc0-c908ab7cf73d.jpg" alt="" loading="lazy"></p><p>通道之间通过<code>transfer()</code>实现数据的传输(直接操作缓冲区)：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-2ce868f7-691e-419e-a443-e25131b2785a.jpg" alt="" loading="lazy"></p><h3 id="直接与非直接缓冲区" tabindex="-1"><a class="header-anchor" href="#直接与非直接缓冲区" aria-hidden="true">#</a> 直接与非直接缓冲区</h3><ul><li>非直接缓冲区是<strong>需要</strong>经过一个：copy的阶段的(从内核空间copy到用户空间)</li><li>直接缓冲区<strong>不需要</strong>经过copy阶段，也可以理解成---&gt;<strong>内存映射文件</strong>，(上面的图片也有过例子)。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c51af71c-759c-40de-9d92-92fffa2d075d.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c6181e11-8960-46f3-a4b5-8233d013499c.jpg" alt="" loading="lazy"></p><p>使用直接缓冲区有两种方式：</p><ul><li>缓冲区创建的时候分配的是直接缓冲区</li><li>在FileChannel上调用<code>map()</code>方法，将文件直接映射到内存中创建</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-16943811-2190-4fc9-82f9-df34c06c22d2.jpg" alt="" loading="lazy"></p><h3 id="scatter和gather、字符集" tabindex="-1"><a class="header-anchor" href="#scatter和gather、字符集" aria-hidden="true">#</a> scatter和gather、字符集</h3><p>这个知识点我感觉用得挺少的，不过很多教程都有说这个知识点，我也拿过来说说吧：</p><ul><li>分散读取(scatter)：将一个通道中的数据分散读取到多个缓冲区中</li><li>聚集写入(gather)：将多个缓冲区中的数据集中写入到一个通道中</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-d2b8a337-3c1b-4bce-ae8d-ed107a3676a2.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-e0916f2c-2ce9-4be6-b071-754301a09642.jpg" alt="" loading="lazy"></p><p>分散读取</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-886e1838-3404-4bfb-84c9-36cffa19aa19.jpg" alt="" loading="lazy"></p><p>聚集写入</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-aba6d233-f294-4d1f-b389-dd174e76d1b0.jpg" alt="" loading="lazy"></p><p>字符集(只要编码格式和解码格式一致，就没问题了)</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-dba55dfc-48df-4111-884d-d67227b7723a.jpg" alt="" loading="lazy"></p>`,75),r={href:"https://www.zhihu.com/question/29005375/answer/667616386",target:"_blank",rel:"noopener noreferrer"},d=n("hr",null,null,-1),g=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),k={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[a("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),a("，回复"),n("strong",null,"111"),a(" 即可免费领取。")],-1),b=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function f(v,h){const s=l("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[n("p",null,[a("参考链接："),n("a",r,[a("https://www.zhihu.com/question/29005375/answer/667616386"),t(s)]),a("，整理：沉默王二")])]),d,n("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),g,a(" 等等等等……详情戳："),n("a",k,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(s)])]),m,b])}const B=e(i,[["render",f],["__file","rumen.html.vue"]]);export{B as default};
