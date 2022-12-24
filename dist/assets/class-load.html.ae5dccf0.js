import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a,d as n,b as o,e as c,r as l}from"./app.e9e1538d.js";const i={},d=c(`<h1 id="我竟然不再抗拒java的类加载机制了" tabindex="-1"><a class="header-anchor" href="#我竟然不再抗拒java的类加载机制了" aria-hidden="true">#</a> 我竟然不再抗拒Java的类加载机制了</h1><h3 id="_01、字节码" tabindex="-1"><a class="header-anchor" href="#_01、字节码" aria-hidden="true">#</a> 01、字节码</h3><p>在聊 Java 类加载机制之前，需要先了解一下 Java 字节码，因为它和类加载机制息息相关。</p><p>计算机只认识 0 和 1，所以任何语言编写的程序都需要编译成机器码才能被计算机理解，然后执行，Java 也不例外。</p><p>Java 在诞生的时候喊出了一个非常牛逼的口号：“Write Once, Run Anywhere”，为了达成这个目的，Sun 公司发布了许多可以在不同平台（Windows、Linux）上运行的 Java 虚拟机（JVM）——负责载入和执行 Java 编译后的字节码。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/class-load-01.png" alt="" loading="lazy"></p><p>到底 Java 字节码是什么样子，我们借助一段简单的代码来看一看。</p><p>源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cmower<span class="token punctuation">.</span>java_demo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码编译通过后，通过 <code>xxd Test.class</code> 命令查看一下这个字节码文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xxd Test.class
00000000: cafe babe 0000 0034 0022 0700 0201 0019  .......4.&quot;......
00000010: 636f 6d2f 636d 6f77 6572 2f6a 6176 615f  com/cmower/java_
00000020: 6465 6d6f 2f54 6573 7407 0004 0100 106a  demo/Test......j
00000030: 6176 612f 6c61 6e67 2f4f 626a 6563 7401  ava/lang/Object.
00000040: 0006 3c69 6e69 743e 0100 0328 2956 0100  ..&lt;init&gt;...()V..
00000050: 0443 6f64 650a 0003 0009 0c00 0500 0601  .Code...........
00000060: 000f 4c69 6e65 4e75 6d62 6572 5461 626c  ..LineNumberTabl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>感觉有点懵逼，对不对？</p><p>懵就对了。</p><p>这段字节码中的 <code>cafe babe</code> 被称为“魔数”，是 JVM 识别 .class 文件的标志。文件格式的定制者可以自由选择魔数值（只要没用过），比如说 .png 文件的魔数是 <code>8950 4e47 </code>。</p><p>至于其他内容嘛，可以选择忘记了。</p><h3 id="_02、类加载过程" tabindex="-1"><a class="header-anchor" href="#_02、类加载过程" aria-hidden="true">#</a> 02、类加载过程</h3><p>了解了 Java 字节码后，我们来聊聊 Java 的类加载过程。</p><p>Java 的类加载过程可以分为 5 个阶段：载入、验证、准备、解析和初始化。这 5 个阶段一般是顺序发生的，但在动态绑定的情况下，解析阶段发生在初始化阶段之后。</p><p>1）Loading（载入）</p><p>JVM 在该阶段的主要目的是将字节码从不同的数据源（可能是 class 文件、也可能是 jar 包，甚至网络）转化为二进制字节流加载到内存中，并生成一个代表该类的 <code>java.lang.Class</code> 对象。</p><p>2）Verification（验证）</p><p>JVM 会在该阶段对二进制字节流进行校验，只有符合 JVM 字节码规范的才能被 JVM 正确执行。该阶段是保证 JVM 安全的重要屏障，下面是一些主要的检查。</p><ul><li>确保二进制字节流格式符合预期（比如说是否以 <code>cafe bene</code> 开头）。</li><li>是否所有方法都遵守访问控制关键字的限定。</li><li>方法调用的参数个数和类型是否正确。</li><li>确保变量在使用之前被正确初始化了。</li><li>检查变量是否被赋予恰当类型的值。</li></ul><p>3）Preparation（准备）</p><p>JVM 会在该阶段对类变量（也称为静态变量，<code>static</code> 关键字修饰的）分配内存并初始化（对应数据类型的默认初始值，如 0、0L、null、false 等）。</p><p>也就是说，假如有这样一段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> chenmo <span class="token operator">=</span> <span class="token string">&quot;沉默&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> wanger <span class="token operator">=</span> <span class="token string">&quot;王二&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chenmo 不会被分配内存，而 wanger 会；但 wanger 的初始值不是“王二”而是 <code>null</code>。</p><p>需要注意的是，<code>static final</code> 修饰的变量被称作为常量，和类变量不同。常量一旦赋值就不会改变了，所以 cmower 在准备阶段的值为“沉默王二”而不是 <code>null</code>。</p><p>4）Resolution（解析）</p><p>该阶段将常量池中的符号引用转化为直接引用。</p><p>what？符号引用，直接引用？</p><p><strong>符号引用</strong>以一组符号（任何形式的字面量，只要在使用时能够无歧义的定位到目标即可）来描述所引用的目标。</p><p>在编译时，Java 类并不知道所引用的类的实际地址，因此只能使用符号引用来代替。比如 <code>com.Wanger</code> 类引用了 <code>com.Chenmo</code> 类，编译时 Wanger 类并不知道 Chenmo 类的实际内存地址，因此只能使用符号 <code>com.Chenmo</code>。</p><p><strong>直接引用</strong>通过对符号引用进行解析，找到引用的实际内存地址。</p><p>5）Initialization（初始化）</p><p>该阶段是类加载过程的最后一步。在准备阶段，类变量已经被赋过默认初始值，而在初始化阶段，类变量将被赋值为代码期望赋的值。换句话说，初始化阶段是执行类构造器方法的过程。</p><p>oh，no，上面这段话说得很抽象，不好理解，对不对，我来举个例子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这段代码使用了 <code>new</code> 关键字来实例化一个字符串对象，那么这时候，就会调用 String 类的构造方法对 cmower 进行实例化。</p><h3 id="_03、类加载器" tabindex="-1"><a class="header-anchor" href="#_03、类加载器" aria-hidden="true">#</a> 03、类加载器</h3><p>聊完类加载过程，就不得不聊聊类加载器。</p><p>一般来说，Java 程序员并不需要直接同类加载器进行交互。JVM 默认的行为就已经足够满足大多数情况的需求了。不过，如果遇到了需要和类加载器进行交互的情况，而对类加载器的机制又不是很了解的话，就不得不花大量的时间去调试 <code>ClassNotFoundException</code> 和 <code>NoClassDefFoundError</code> 等异常。</p><p>对于任意一个类，都需要由它的类加载器和这个类本身一同确定其在 JVM 中的唯一性。也就是说，如果两个类的加载器不同，即使两个类来源于同一个字节码文件，那这两个类就必定不相等（比如两个类的 Class 对象不 <code>equals</code>）。</p><p>站在程序员的角度来看，Java 类加载器可以分为三种。</p><p>1）启动类加载器（Bootstrap Class-Loader），加载 <code>jre/lib</code> 包下面的 jar 文件，比如说常见的 rt.jar。</p><p>2）扩展类加载器（Extension or Ext Class-Loader），加载 <code>jre/lib/ext</code> 包下面的 jar 文件。</p><p>3）应用类加载器（Application or App Clas-Loader），根据程序的类路径（classpath）来加载 Java 类。</p><p>来来来，通过一段简单的代码了解下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ClassLoader</span> loader <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>loader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loader<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			loader <span class="token operator">=</span> loader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 Java 类都维护着一个指向定义它的类加载器的引用，通过 <code>类名.class.getClassLoader()</code> 可以获取到此引用；然后通过 <code>loader.getParent()</code> 可以获取类加载器的上层类加载器。</p><p>这段代码的输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sun.misc.Launcher$AppClassLoader@73d16e93
sun.misc.Launcher$ExtClassLoader@15db9742
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行输出为 Test 的类加载器，即应用类加载器，它是 <code>sun.misc.Launcher$AppClassLoader</code> 类的实例；第二行输出为扩展类加载器，是 <code>sun.misc.Launcher$ExtClassLoader</code> 类的实例。那启动类加载器呢？</p><p>按理说，扩展类加载器的上层类加载器是启动类加载器，但在我这个版本的 JDK 中， 扩展类加载器的 <code>getParent()</code> 返回 <code>null</code>。所以没有输出。</p><h3 id="_04、双亲委派模型" tabindex="-1"><a class="header-anchor" href="#_04、双亲委派模型" aria-hidden="true">#</a> 04、双亲委派模型</h3><p>如果以上三种类加载器不能满足要求的话，程序员还可以自定义类加载器（继承 <code>java.lang.ClassLoader</code> 类），它们之间的层级关系如下图所示。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/class-load-02.png" alt="" loading="lazy"></p><p>这种层次关系被称作为<strong>双亲委派模型</strong>：如果一个类加载器收到了加载类的请求，它会先把请求委托给上层加载器去完成，上层加载器又会委托上上层加载器，一直到最顶层的类加载器；如果上层加载器无法完成类的加载工作时，当前类加载器才会尝试自己去加载这个类。</p><p>PS：双亲委派模型突然让我联想到朱元璋同志，这个同志当上了皇帝之后连宰相都不要了，所有的事情都亲力亲为，只有自己没精力没时间做的事才交给大臣们去干。</p><p>使用双亲委派模型有一个很明显的好处，那就是 Java 类随着它的类加载器一起具备了一种带有优先级的层次关系，这对于保证 Java 程序的稳定运作很重要。</p><p>上文中曾提到，如果两个类的加载器不同，即使两个类来源于同一个字节码文件，那这两个类就必定不相等——双亲委派模型能够保证同一个类最终会被特定的类加载器加载。</p><h3 id="_05、最后" tabindex="-1"><a class="header-anchor" href="#_05、最后" aria-hidden="true">#</a> 05、最后</h3><p>硬着头皮翻看了大量的资料，并且动手去研究以后，我发现自己竟然对 Java 类加载机制（JVM 将类的信息动态添加到内存并使用的一种机制）不那么抗拒了——真是蛮奇妙的一件事啊。</p><p>也许学习就应该是这样，只要你敢于挑战自己，就能收获知识——就像山就在那里，只要你肯攀登，就能到达山顶。</p><hr>`,66),r=a("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),u={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,[n("关注二哥的原创公众号 "),a("strong",null,"沉默王二"),n("，回复"),a("strong",null,"111"),n(" 即可免费领取。")],-1),k=a("p",null,[a("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function m(b,g){const s=l("ExternalLinkIcon");return t(),p("div",null,[d,a("p",null,[n("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),r,n(" 等等等等……详情戳："),a("a",u,[n("可以说是2022年全网最全的学习和找工作的PDF资源了"),o(s)])]),v,k])}const _=e(i,[["render",m],["__file","class-load.html.vue"]]);export{_ as default};
