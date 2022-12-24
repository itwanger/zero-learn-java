import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,d as a,b as c,e as l,r as o}from"./app.e9e1538d.js";const i={},u=l(`<p>“二哥，听说 Java 变量在以后的日子里经常用，能不能提前给我透露透露？”三妹咪了一口麦香可可奶茶后对我说。</p><p>“三妹啊，搬个凳子坐我旁边，听二哥来给你慢慢说啊。”</p><p>Java 变量就好像一个容器，可以保存程序在运行过程中的值，它在声明的时候会定义对应的数据类型（Java 分为两种数据类型：基本数据类型和引用数据类型）。变量按照作用域的范围又可分为三种类型：局部变量，成员变量和静态变量。</p><p>比如说，<code>int data = 88;</code>，其中 data 就是一个变量，它的值为 88，类型为整型（int）。</p><h2 id="_01、局部变量" tabindex="-1"><a class="header-anchor" href="#_01、局部变量" aria-hidden="true">#</a> 01、局部变量</h2><p>在方法体内声明的变量被称为局部变量，该变量只能在该方法内使用，类中的其他方法并不知道该变量。来看下面这个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 a、b、c 就是局部变量，它们只能在当前这个 main 方法中使用。</p><p>声明局部变量时的注意事项：</p><ul><li>局部变量声明在方法、构造方法或者语句块中。</li><li>局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，将会被销毁。</li><li>访问修饰符不能用于局部变量。</li><li>局部变量只在声明它的方法、构造方法或者语句块中可见。</li><li>局部变量是在栈上分配的。</li><li>局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。</li></ul><h2 id="_02、成员变量" tabindex="-1"><a class="header-anchor" href="#_02、成员变量" aria-hidden="true">#</a> 02、成员变量</h2><p>在类内部但在方法体外声明的变量称为成员变量，或者实例变量。之所以称为实例变量，是因为该变量只能通过类的实例（对象）来访问。来看下面这个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InstanceVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> data <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InstanceVariable</span> iv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InstanceVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iv<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 88</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 iv 是一个变量，它是一个引用类型的变量。<code>new</code> 关键字可以创建一个类的实例（也称为对象），通过“=”操作符赋值给 iv 这个变量，iv 就成了这个对象的引用，通过 <code>iv.data</code> 就可以访问成员变量了。</p><p>声明成员变量时的注意事项：</p><ul><li>成员变量声明在一个类中，但在方法、构造方法和语句块之外。</li><li>当一个对象被实例化之后，每个成员变量的值就跟着确定。</li><li>成员变量在对象创建的时候创建，在对象被销毁的时候销毁。</li><li>成员变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息。</li><li>成员变量可以声明在使用前或者使用后。</li><li>访问修饰符可以修饰成员变量。</li><li>成员变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把成员变量设为私有。通过使用访问修饰符可以使成员变量对子类可见；成员变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。</li></ul><h2 id="_03、静态变量" tabindex="-1"><a class="header-anchor" href="#_03、静态变量" aria-hidden="true">#</a> 03、静态变量</h2><p>通过 static 关键字声明的变量被称为静态变量（类变量），它可以直接被类访问，来看下面这个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> data <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StaticVariable</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 99</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 data 就是静态变量，通过<code>类名.静态变量</code>就可以访问了，不需要创建类的实例。</p><p>声明静态变量时的注意事项：</p><ul><li>静态变量在类中以 static 关键字声明，但必须在方法构造方法和语句块之外。</li><li>无论一个类创建了多少个对象，类只拥有静态变量的一份拷贝。</li><li>静态变量除了被声明为常量外很少使用。</li><li>静态变量储存在静态存储区。</li><li>静态变量在程序开始时创建，在程序结束时销毁。</li><li>与成员变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。</li><li>静态变量的默认值和实例变量相似。</li><li>静态变量还可以在静态语句块中初始化。</li></ul><h2 id="_04、常量" tabindex="-1"><a class="header-anchor" href="#_04、常量" aria-hidden="true">#</a> 04、常量</h2><p>在 Java 中，有些数据的值是不会发生改变的，这些数据被叫做常量——使用 final 关键字修饰的成员变量。常量的值一旦给定就无法改变！</p><p>常量在程序运行过程中主要有 2 个作用：</p><ul><li>代表常数，便于修改（例如：圆周率的值，<code>final double PI = 3.14</code>）</li><li>增强程序的可读性（例如：常量 UP、DOWN 用来代表上和下，<code>final int UP = 0</code>）</li></ul><p>Java 要求常量名必须大写。来看下面这个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">CHEN</span> <span class="token operator">=</span> <span class="token string">&quot;沉&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MO</span> <span class="token operator">=</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FinalVariable</span> fv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinalVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fv<span class="token punctuation">.</span><span class="token constant">CHEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">MO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“好了，三妹，关于 Java 变量就先说这么多吧，你是不是已经清楚了？”转动了一下僵硬的脖子后，我对三妹说。</p><p>“是啊，二哥，我想以后还会再见到它们吧？”</p><p>“那见的次数可就多了，就好像你每天眨眼的次数一样多。”</p><hr>`,32),d=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),r={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,[a("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),a("，回复"),n("strong",null,"111"),a(" 即可免费领取。")],-1),v=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function m(b,h){const s=o("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),d,a(" 等等等等……详情戳："),n("a",r,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),c(s)])]),k,v])}const w=e(i,[["render",m],["__file","var.html.vue"]]);export{w as default};
