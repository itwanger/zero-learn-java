import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,d as a,b as l,e as i,r as p}from"./app.e9e1538d.js";const c={},r=i(`<h1 id="编写第一个java程序-hello-world" tabindex="-1"><a class="header-anchor" href="#编写第一个java程序-hello-world" aria-hidden="true">#</a> 编写第一个Java程序：Hello World</h1><p>第一个 Java 程序非常简单，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;三妹，少看手机少打游戏，好好学，美美哒。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IDEA 会自动保存，在代码编辑面板中右键，在弹出的菜单中选择「Run &#39;HelloWorld.main()&#39;」，如下图所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/four-01.png" alt="" loading="lazy"></p><p>等代码编译结束后，就可以在 Run 面板里看到下面的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三妹，少看手机少打游戏，好好学，美美哒。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“二哥，上面这段代码的输出结果虽然令我非常开心，但是有好多生疏的关键字令我感到困惑，能给我解释一下吗？”</p><p>“当然没问题啊。”</p><ul><li><p>class 关键字：用于在 Java 中声明一个类。</p></li><li><p>public 关键字：一个表示可见性的访问修饰符。</p></li><li><p>static 关键字：我们可以用它来声明任何一个方法，被 static 修饰后的方法称之为静态方法。静态方法不需要为其创建对象就能调用。</p></li><li><p>void 关键字：表示该方法不返回任何值。</p></li><li><p>main 关键字：表示该方法为主方法，也就是程序运行的入口。<code>main()</code> 方法由 Java 虚拟机执行，配合上 static 关键字后，可以不用创建对象就可以调用，可以节省不少内存空间。</p></li><li><p><code>String [] args</code>：<code>main()</code> 方法的参数，类型为 String 数组，参数名为 args。</p></li><li><p><code>System.out.println()</code>：一个 Java 语句，一般情况下是将传递的参数打印到控制台。System 是 java.lang 包中的一个 final 类，该类提供的设施包括标准输入，标准输出和错误输出流等等。out 是 System 类的静态成员字段，类型为 PrintStream，它与主机的标准输出控制台进行映射。println 是 PrintStream 类的一个方法，通过调用 print 方法并添加一个换行符实现的。</p></li></ul><hr>`,11),d=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),u={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[a("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),a("，回复"),n("strong",null,"111"),a(" 即可免费领取。")],-1),v=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function k(g,b){const s=p("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),d,a(" 等等等等……详情戳："),n("a",u,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),l(s)])]),m,v])}const f=e(c,[["render",k],["__file","hello-world.html.vue"]]);export{f as default};
