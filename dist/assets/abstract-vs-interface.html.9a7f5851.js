import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a,d as n,b as e,e as p,r as l}from"./app.e9e1538d.js";const i={},r=p(`<p>通过前面两篇，我们已经深入地了解了 Java 抽象类和 Java 接口，那这篇我们来重点说一下抽象类和接口之间的区别。</p><h2 id="_01、抽象类" tabindex="-1"><a class="header-anchor" href="#_01、抽象类" aria-hidden="true">#</a> 01、抽象类</h2><p>在 Java 中，通过关键字 <code>abstract</code> 定义的类叫做抽象类。Java 是一门面向对象的语言，因此所有的对象都是通过类来描述的；但反过来，并不是所有的类都是用来描述对象的，抽象类就是其中的一种。</p><p>以下示例展示了一个简单的抽象类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 个人认为，一名教练必须攻守兼备</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Coach</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">defend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02、接口" tabindex="-1"><a class="header-anchor" href="#_02、接口" aria-hidden="true">#</a> 02、接口</h2><p>我们知道，有抽象方法的类被称为抽象类，也就意味着抽象类中还能有不是抽象方法的方法。这样的类就不能算作纯粹的接口，尽管它也可以提供接口的功能——只能说抽象类是普通类与接口之间的一种中庸之道。</p><p><strong>接口（英文：Interface），在 Java 中是一个抽象类型，是抽象方法的集合</strong>；接口通过关键字 <code>interface</code> 来定义。接口与抽象类的不同之处在于：</p><p>1、抽象类可以有方法体的方法，但接口没有。 2、接口中的成员变量隐式为 <code>static final</code>，但抽象类不是的。 3、一个类可以实现多个接口，但只能继承一个抽象类。</p><p>以下示例展示了一个简单的接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 隐式的abstract</span>
<span class="token keyword">interface</span> <span class="token class-name">Coach</span> <span class="token punctuation">{</span>
	<span class="token comment">// 隐式的public</span>
	<span class="token keyword">void</span> <span class="token function">defend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口是隐式抽象的，所以声明时没有必要使用 <code>abstract</code> 关键字；</li><li>接口的每个方法都是隐式抽象的，所以同样不需要使用 <code>abstract</code> 关键字；</li><li>接口中的方法都是隐式 <code>public</code> 的。</li></ul><h2 id="_03、两者差别" tabindex="-1"><a class="header-anchor" href="#_03、两者差别" aria-hidden="true">#</a> 03、两者差别</h2><p>“哦，我理解了哥。那我再问一下，抽象类和接口有什么差别呢？”</p><p>“哇，三妹呀，你这个问题恰到好处，问到了点子上。”我不由得为三妹竖起了大拇指。</p><p>1）语法层面上</p><ul><li>抽象类可以提供成员方法的实现细节，而接口中只能存在public abstract 方法；</li><li>抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是public static final类型的；</li><li>接口中不能含有静态代码块以及静态方法，而抽象类可以有静态代码块和静态方法；</li><li>一个类只能继承一个抽象类，而一个类却可以实现多个接口。</li></ul><p>2）设计层面上</p><p>抽象类是对一种事物的抽象，即对类抽象，继承抽象类的子类和抽象类本身是一种 <code>is-a</code> 的关系。而接口是对行为的抽象。抽象类是对整个类整体进行抽象，包括属性、行为，但是接口却是对类局部（行为）进行抽象。</p><p>举个简单的例子，飞机和鸟是不同类的事物，但是它们都有一个共性，就是都会飞。那么在设计的时候，可以将飞机设计为一个类Airplane，将鸟设计为一个类Bird，但是不能将 飞行 这个特性也设计为类，因此它只是一个行为特性，并不是对一类事物的抽象描述。</p><p>此时可以将 飞行 设计为一个接口Fly，包含方法fly()，然后Airplane和Bird分别根据自己的需要实现Fly这个接口。然后至于有不同种类的飞机，比如战斗机、民用飞机等直接继承Airplane即可，对于鸟也是类似的，不同种类的鸟直接继承Bird类即可。从这里可以看出，继承是一个 &quot;是不是&quot;的关系，而 接口 实现则是 &quot;有没有&quot;的关系。如果一个类继承了某个抽象类，则子类必定是抽象类的种类，而接口实现则是有没有、具备不具备的关系，比如鸟是否能飞（或者是否具备飞行这个特点），能飞行则可以实现这个接口，不能飞行就不实现这个接口。</p><p>接口是对类的某种行为的一种抽象，接口和类之间并没有很强的关联关系，举个例子来说，所有的类都可以实现 <code>Serializable</code> 接口，从而具有序列化的功能，但不能说所有的类和 Serializable 之间是 <code>is-a</code> 的关系。</p><p>抽象类作为很多子类的父类，它是一种模板式设计。而接口是一种行为规范，它是一种辐射式设计。什么是模板式设计？最简单例子，大家都用过ppt里面的模板，如果用模板A设计了ppt B和ppt C，ppt B和ppt C公共的部分就是模板A了，如果它们的公共部分需要改动，则只需要改动模板A就可以了，不需要重新对ppt B和ppt C进行改动。而辐射式设计，比如某个电梯都装了某种报警器，一旦要更新报警器，就必须全部更新。也就是说对于抽象类，如果需要添加新的方法，可以直接在抽象类中添加具体的实现，子类可以不进行变更；而对于接口则不行，如果接口进行了变更，则所有实现这个接口的类都必须进行相应的改动。</p>`,23),d={href:"https://www.cnblogs.com/dolphin0520/p/3811437.html",target:"_blank",rel:"noopener noreferrer"},u=a("hr",null,null,-1),k=a("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,[n("关注二哥的原创公众号 "),a("strong",null,"沉默王二"),n("，回复"),a("strong",null,"111"),n(" 即可免费领取。")],-1),m=a("p",null,[a("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function h(_,f){const s=l("ExternalLinkIcon");return o(),c("div",null,[r,a("blockquote",null,[a("p",null,[n("参考链接："),a("a",d,[n("https://www.cnblogs.com/dolphin0520/p/3811437.html"),e(s)])])]),u,a("p",null,[n("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),k,n(" 等等等等……详情戳："),a("a",v,[n("可以说是2022年全网最全的学习和找工作的PDF资源了"),e(s)])]),b,m])}const y=t(i,[["render",h],["__file","abstract-vs-interface.html.vue"]]);export{y as default};
