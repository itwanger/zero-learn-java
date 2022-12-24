import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a as n,d as a,b as e,e as p,r as c}from"./app.e9e1538d.js";const i={},u=p(`<p>“哥，今天学什么呢？”</p><p>“今天学一个重要的关键字——final。 ”我面带着朴实无华的微笑回答着她，“对了，三妹，你打算考研吗？”</p><p>“还没想过，我今年才大一呢，到时候再说吧，你决定。”</p><p>“好吧。”我摊摊手，表示很无辜，真的是所有的决定都交给我这个哥哥了，如果决定错了，锅得背上。</p><h2 id="_01、final-变量" tabindex="-1"><a class="header-anchor" href="#_01、final-变量" aria-hidden="true">#</a> 01、final 变量</h2><p>“好了，我们先来看 final 修饰的变量吧！”</p><p>“被 final 修饰的变量无法重新赋值。换句话说，final 变量一旦初始化，就无法更改。”</p><p>“来看这行代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“当尝试将 age 的值修改为 30 的时候，编译器就生气了。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-01.png" alt="" loading="lazy"></p><p>“再来看这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“这是一个很普通的 Java 类，它有一个字段 name。”</p><p>“然后，我们创建一个测试类，并声明一个 final 修饰的 Pig 对象。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Pig</span> pig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“如果尝试将 pig 重新赋值的话，编译器同样会生气。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-02.png" alt="" loading="lazy"></p><p>“但我们仍然可以去修改 pig 对象的 name。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Pig</span> pig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pig<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;特立独行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pig<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 特立独行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“另外，final 修饰的成员变量必须有一个默认值，否则编译器将会提醒没有初始化。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-03.png" alt="" loading="lazy"></p><p>“final 和 static 一起修饰的成员变量叫做常量，常量名必须全部大写。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">PRICE</span> <span class="token operator">=</span> <span class="token number">36.5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“有时候，我们还会用 final 关键字来修饰参数，它意味着参数在方法体内不能被再修改。”</p><p>“来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArgFinalTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">arg</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">arg1</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“如果尝试去修改它的话，编译器会提示以下错误。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-04.png" alt="" loading="lazy"></p><h2 id="_02、final-方法" tabindex="-1"><a class="header-anchor" href="#_02、final-方法" aria-hidden="true">#</a> 02、final 方法</h2><p>“被 final 修饰的方法不能被重写。如果我们在设计一个类的时候，认为某些方法不应该被重写，就应该把它设计成 final 的。”</p><p>“Thread 类就是一个例子，它本身不是 final 的，这意味着我们可以扩展它，但它的 <code>isAlive()</code> 方法是 final 的。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Thread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“需要注意的是，该方法是一个本地（native）方法，用于确认线程是否处于活跃状态。而本地方法是由操作系统决定的，因此重写该方法并不容易实现。”</p><p>“来看这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Actor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“当我们想要重写该方法的话，就会出现编译错误。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-05.png" alt="" loading="lazy"></p><p>“三妹，来问你一个问题吧。”正想趁三妹回答问题的时候喝口水。</p><p>“你说吧，哥。”</p><p>“一个类是 final 的，和一个类不是 final，但它所有的方法都是 final 的，考虑一下，它们之间有什么区别？”</p><p>“我能想到的一点，就是前者不能被继承，也就是说方法无法被重写；后者呢，可以被继承，然后追加一些非 final 的方法。”还没等我把水咽下去，三妹就回答好了，着实惊呆了我。</p><p>“嗯嗯嗯，没毛病没毛病，进步很大啊！”</p><p>“那必须啊，谁叫我是你妹呢。”</p><h2 id="_03、final-类" tabindex="-1"><a class="header-anchor" href="#_03、final-类" aria-hidden="true">#</a> 03、final 类</h2><p>“如果一个类使用了 final 关键字修饰，那么它就无法被继承.....”</p><p>“等等，哥，我知道，String 类就是一个 final 类。”还没等我说完，三妹就抢着说到。</p><p>“说得没毛病。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span><span class="token punctuation">,</span>
               <span class="token class-name">Constable</span><span class="token punctuation">,</span> <span class="token class-name">ConstantDesc</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“那三妹你知道为什么 String 类要设计成 final 吗？”</p><p>“这个还真不知道。”三妹的表情透露出这种无奈。</p><p>“原因大致有 3 个。”</p><ul><li>为了实现字符串常量池</li><li>为了线程安全</li><li>为了 HashCode 的不可变性</li></ul><p>“想了解更详细的原因，可以一会看看我之前写的这篇文章。”</p>`,54),r={href:"https://tobebetterjavaer.com/string/immutable.html",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>“任何尝试从 final 类继承的行为将会引发编译错误。来看这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“尝试去继承它，编译器会提示以下错误，Writer 类是 final 的，无法继承。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/keywords/23-06.png" alt="" loading="lazy"></p><p>“不过，类是 final 的，并不意味着该类的对象是不可变的。”</p><p>“来看这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
writer<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>writer<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 沉默王二</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“Writer 的 name 字段的默认值是 null，但可以通过 settter 方法将其更改为沉默王二。也就是说，如果一个类只是 final 的，那么它并不是不可变的全部条件。”</p><p>“关于不可变类，我之前也单独讲过一篇，你一会去看看。”</p>`,9),k={href:"https://tobebetterjavaer.com/basic-extra-meal/immutable.html",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"“把一个类设计成 final 的，有其安全方面的考虑，但不应该故意为之，因为把一个类定义成 final 的，意味着它没办法继承，假如这个类的一些方法存在一些问题的话，我们就无法通过重写的方式去修复它。”",-1),m=n("hr",null,null,-1),b=n("p",null,"“三妹，final 关键字我们就学到这里吧，你一会再学习一下 Java 字符串为什么是不可变的和不可变类。”我揉一揉犯困的双眼，疲惫地给三妹说，“学完这两个知识点，你会对 final 的认知更清晰一些。”",-1),g=n("p",null,"“好的，二哥，我这就去学习去。你去休息会。”",-1),f=n("p",null,"我起身站到阳台上，看着窗外的车水马龙，不一会儿，就发起来呆。",-1),h=n("p",null,"“好想去再看一场周杰伦的演唱会，不知道 2021 有没有这个机会。”",-1),y=n("p",null,"我心里这样想着，天渐渐地暗了下来。",-1),w=n("hr",null,null,-1),_=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),j={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[a("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),a("，回复"),n("strong",null,"111"),a(" 即可免费领取。")],-1),S=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function N(z,P){const s=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[n("a",r,[a("为什么 Java 字符串是不可变的？"),e(s)])]),d,n("p",null,[n("a",k,[a("不可变类"),e(s)])]),v,m,b,g,f,h,y,w,n("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),_,a(" 等等等等……详情戳："),n("a",j,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),e(s)])]),x,S])}const q=t(i,[["render",N],["__file","final.html.vue"]]);export{q as default};
