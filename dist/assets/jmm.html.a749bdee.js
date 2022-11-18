import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,a as e,d as a,b as p,e as t,r as l}from"./app.99eb8281.js";const i={},d=t(`<h1 id="全面理解java的内存模型-jmm" tabindex="-1"><a class="header-anchor" href="#全面理解java的内存模型-jmm" aria-hidden="true">#</a> 全面理解Java的内存模型（JMM）</h1><p>在面试中，面试官经常喜欢问：『说说什么是Java内存模型(JMM)？』</p><p>面试者内心狂喜，这题刚背过：『Java内存主要分为五大块：堆、方法区、虚拟机栈、本地方法栈、PC寄存器，balabala……』</p><p>面试官会心一笑，露出一道光芒：『好了，今天的面试先到这里了，回去等通知吧』</p><p>一般听到等通知这句话，这场面试大概率就是凉凉了。为什么呢？因为面试者弄错了概念，面试官是想考察JMM，但是面试者一听到<code>Java内存</code>这几个关键字就开始背诵八股文了。Java内存模型(JMM)和Java运行时内存区域区别可大了呢，不要走开接着往下看，答应我要看完。</p><h2 id="并发编程模型的两个关键问题" tabindex="-1"><a class="header-anchor" href="#并发编程模型的两个关键问题" aria-hidden="true">#</a> 并发编程模型的两个关键问题</h2><ul><li>线程间如何通信？即：线程之间以何种机制来交换信息</li><li>线程间如何同步？即：线程以何种机制来控制不同线程间操作发生的相对顺序</li></ul><p>有两种并发模型可以解决这两个问题：</p><ul><li>消息传递并发模型</li><li>共享内存并发模型</li></ul><p>这两种模型之间的区别如下表所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-a610752d-ef73-47f2-b02c-6954eb3d62bf.png" alt="两种并发模型的比较" loading="lazy"></p><p><strong>在Java中，使用的是共享内存并发模型</strong>。</p><h2 id="java内存模型的抽象结构" tabindex="-1"><a class="header-anchor" href="#java内存模型的抽象结构" aria-hidden="true">#</a> Java内存模型的抽象结构</h2><h3 id="运行时内存的划分" tabindex="-1"><a class="header-anchor" href="#运行时内存的划分" aria-hidden="true">#</a> 运行时内存的划分</h3><p>先谈一下运行时数据区，下面这张图相信大家一点都不陌生： <img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-0b9e4b1e-90e2-41bb-be89-f65e3a10fa08.png" alt="Java运行时数据区域" loading="lazy"></p><p>对于每一个线程来说，栈都是私有的，而堆是共有的。</p><p>也就是说在栈中的变量（局部变量、方法定义参数、异常处理器参数）不会在线程之间共享，也就不会有内存可见性（下文会说到）的问题，也不受内存模型的影响。而在堆中的变量是共享的，本文称为共享变量。</p><p>所以，内存可见性是针对的<strong>共享变量</strong>。</p><h3 id="既然堆是共享的-为什么在堆中会有内存不可见问题" tabindex="-1"><a class="header-anchor" href="#既然堆是共享的-为什么在堆中会有内存不可见问题" aria-hidden="true">#</a> 既然堆是共享的，为什么在堆中会有内存不可见问题？</h3><p>这是因为现代计算机为了高效，往往会在高速缓存区中缓存共享变量，因为cpu访问缓存区比访问内存要快得多。</p><blockquote><p>线程之间的共享变量存在主内存中，每个线程都有一个私有的本地内存，存储了该线程以读、写共享变量的副本。本地内存是Java内存模型的一个抽象概念，并不真实存在。它涵盖了缓存、写缓冲区、寄存器等。</p></blockquote><p>Java线程之间的通信由Java内存模型（简称JMM）控制，从抽象的角度来说，JMM定义了线程和主内存之间的抽象关系。JMM的抽象示意图如图所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-f02219aa-e762-4df0-ac08-6f4cceb535c2.jpg" alt="JMM抽象示意图" loading="lazy"></p><p>从图中可以看出：</p><ol><li>所有的共享变量都存在主内存中。</li><li>每个线程都保存了一份该线程使用到的共享变量的副本。</li><li>如果线程A与线程B之间要通信的话，必须经历下面2个步骤： <ol><li>线程A将本地内存A中更新过的共享变量刷新到主内存中去。</li><li>线程B到主内存中去读取线程A之前已经更新过的共享变量。</li></ol></li></ol><p><strong>所以，线程A无法直接访问线程B的工作内存，线程间通信必须经过主内存。</strong></p><p>注意，根据JMM的规定，<strong>线程对共享变量的所有操作都必须在自己的本地内存中进行，不能直接从主内存中读取</strong>。</p><p>所以线程B并不是直接去主内存中读取共享变量的值，而是先在本地内存B中找到这个共享变量，发现这个共享变量已经被更新了，然后本地内存B去主内存中读取这个共享变量的新值，并拷贝到本地内存B中，最后线程B再读取本地内存B中的新值。</p><p>那么怎么知道这个共享变量的被其他线程更新了呢？这就是JMM的功劳了，也是JMM存在的必要性之一。<strong>JMM通过控制主内存与每个线程的本地内存之间的交互，来提供内存可见性保证</strong>。</p><blockquote><p>Java中的volatile关键字可以保证多线程操作共享变量的可见性以及禁止指令重排序，synchronized关键字不仅保证可见性，同时也保证了原子性（互斥性）。在更底层，JMM通过内存屏障来实现内存的可见性以及禁止重排序。为了程序员的方便理解，提出了happens-before，它更加的简单易懂，从而避免了程序员为了理解内存可见性而去学习复杂的重排序规则以及这些规则的具体实现方法。这里涉及到的所有内容后面都会有专门的章节介绍。</p></blockquote><h3 id="jmm与java内存区域划分的区别与联系" tabindex="-1"><a class="header-anchor" href="#jmm与java内存区域划分的区别与联系" aria-hidden="true">#</a> JMM与Java内存区域划分的区别与联系</h3><p>上面两小节分别提到了JMM和Java运行时内存区域的划分，这两者既有差别又有联系：</p><ul><li><p>区别</p><p>两者是不同的概念层次。JMM是抽象的，他是用来描述一组规则，通过这个规则来控制各个变量的访问方式，围绕原子性、有序性、可见性等展开的。而Java运行时内存的划分是具体的，是JVM运行Java程序时，必要的内存划分。</p></li><li><p>联系</p><p>都存在私有数据区域和共享数据区域。一般来说，JMM中的主内存属于共享数据区域，他是包含了堆和方法区；同样，JMM中的本地内存属于私有数据区域，包含了程序计数器、本地方法栈、虚拟机栈。</p></li></ul><p><strong>实际上，他们表达的是同一种含义，这里不做区分。</strong></p><h2 id="什么是重排序" tabindex="-1"><a class="header-anchor" href="#什么是重排序" aria-hidden="true">#</a> 什么是重排序？</h2><p>计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令做重排。</p><p><strong>为什么指令重排序可以提高性能？</strong></p><p>简单地说，每一个指令都会包含多个步骤，每个步骤可能使用不同的硬件。因此，<strong>流水线技术</strong>产生了，它的原理是指令1还没有执行完，就可以开始执行指令2，而不用等到指令1执行结束之后再执行指令2，这样就大大提高了效率。</p><p>但是，流水线技术最害怕<strong>中断</strong>，恢复中断的代价是比较大的，所以我们要想尽办法不让流水线中断。指令重排就是减少中断的一种技术。</p><p>我们分析一下下面这个代码的执行情况：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>a <span class="token operator">=</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
d <span class="token operator">=</span> e <span class="token operator">-</span> f <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>先加载b、c（<strong>注意，即有可能先加载b，也有可能先加载c</strong>），但是在执行add(b,c)的时候，需要等待b、c装载结束才能继续执行，也就是增加了停顿，那么后面的指令也会依次有停顿,这降低了计算机的执行效率。</p><p>为了减少这个停顿，我们可以先加载e和f,然后再去加载add(b,c),这样做对程序（串行）是没有影响的,但却减少了停顿。既然add(b,c)需要停顿，那还不如去做一些有意义的事情。</p><p>综上所述，<strong>指令重排对于提高CPU处理性能十分必要。虽然由此带来了乱序的问题，但是这点牺牲是值得的。</strong></p><p>指令重排一般分为以下三种：</p><ul><li><p><strong>编译器优化重排</strong></p><p>编译器在<strong>不改变单线程程序语义</strong>的前提下，可以重新安排语句的执行顺序。</p></li><li><p><strong>指令并行重排</strong></p><p>现代处理器采用了指令级并行技术来将多条指令重叠执行。如果<strong>不存在数据依赖性</strong>(即后一个执行的语句无需依赖前面执行的语句的结果)，处理器可以改变语句对应的机器指令的执行顺序。</p></li><li><p><strong>内存系统重排</strong></p><p>由于处理器使用缓存和读写缓存冲区，这使得加载(load)和存储(store)操作看上去可能是在乱序执行，因为三级缓存的存在，导致内存与缓存的数据同步存在时间差。</p></li></ul><p><strong>指令重排可以保证串行语义一致，但是没有义务保证多线程间的语义也一致</strong>。所以在多线程下，指令重排序可能会导致一些问题。</p><h2 id="顺序一致性模型与jmm的保证" tabindex="-1"><a class="header-anchor" href="#顺序一致性模型与jmm的保证" aria-hidden="true">#</a> 顺序一致性模型与JMM的保证</h2><p>顺序一致性模型是一个<strong>理论参考模型</strong>，内存模型在设计的时候都会以顺序一致性内存模型作为参考。</p><h3 id="数据竞争与顺序一致性" tabindex="-1"><a class="header-anchor" href="#数据竞争与顺序一致性" aria-hidden="true">#</a> 数据竞争与顺序一致性</h3><p>当程序未正确同步的时候，就可能存在数据竞争。</p><blockquote><p>数据竞争：在一个线程中写一个变量，在另一个线程读同一个变量，并且写和读没有通过同步来排序。</p></blockquote><p>如果程序中包含了数据竞争，那么运行的结果往往充满了<strong>不确定性</strong>，比如读发生在了写之前，可能就会读到错误的值；如果一个线程程序能够正确同步，那么就不存在数据竞争。</p><p>Java内存模型（JMM）对于正确同步多线程程序的内存一致性做了以下保证：</p><blockquote><p><strong>如果程序是正确同步的，程序的执行将具有顺序一致性</strong>。 即程序的执行结果和该程序在顺序一致性模型中执行的结果相同。</p></blockquote><p>这里的同步包括了使用<code>volatile</code>、<code>final</code>、<code>synchronized</code>等关键字来实现<strong>多线程下的同步</strong>。</p><p>如果程序员没有正确使用<code>volatile</code>、<code>final</code>、<code>synchronized</code>，那么即便是使用了同步（单线程下的同步），JMM也不会有内存可见性的保证，可能会导致你的程序出错，并且具有不可重现性，很难排查。</p><p>所以如何正确使用<code>volatile</code>、<code>final</code>、<code>synchronized</code>，是程序员应该去了解的。后面会有专门的章节介绍这几个关键字的内存语义及使用。</p><h3 id="顺序一致性模型" tabindex="-1"><a class="header-anchor" href="#顺序一致性模型" aria-hidden="true">#</a> 顺序一致性模型</h3><p>顺序一致性内存模型是一个<strong>理想化的理论参考模型</strong>，它为程序员提供了极强的内存可见性保证。</p><p>顺序一致性模型有两大特性：</p><ul><li><p>一个线程中的所有操作必须按照程序的顺序（即Java代码的顺序）来执行。</p></li><li><p>不管程序是否同步，所有线程都只能看到一个单一的操作执行顺序。即在顺序一致性模型中，每个操作必须是<strong>原子性的，且立刻对所有线程可见</strong>。</p></li></ul><p>为了理解这两个特性，我们举个例子，假设有两个线程A和B并发执行，线程A有3个操作，他们在程序中的顺序是A1-&gt;A2-&gt;A3，线程B也有3个操作，B1-&gt;B2-&gt;B3。</p><p>假设<strong>正确使用了同步</strong>，A线程的3个操作执行后释放锁，B线程获取同一个锁。那么在<strong>顺序一致性模型</strong>中的执行效果如下所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-9ce5973e-6100-41e6-96b8-29ddb738e7f8.png" alt="正确同步图" loading="lazy"></p><p>操作的执行整体上有序，并且两个线程都只能看到这个执行顺序。</p><p>假设<strong>没有使用同步</strong>，那么在<strong>顺序一致性模型</strong>中的执行效果如下所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/jmm-6357c025-a6e0-4c89-939d-040e549fac12.png" alt="没有正确同步图" loading="lazy"></p><p>操作的执行整体上无序，但是两个线程都只能看到这个执行顺序。之所以可以得到这个保证，是因为顺序一致性模型中的<strong>每个操作必须立即对任意线程可见</strong>。</p><p><strong>但是JMM没有这样的保证。</strong></p><p>比如，在当前线程把写过的数据缓存在本地内存中，在没有刷新到主内存之前，这个写操作仅对当前线程可见；从其他线程的角度来观察，这个写操作根本没有被当前线程所执行。只有当前线程把本地内存中写过的数据刷新到主内存之后，这个写操作才对其他线程可见。在这种情况下，当前线程和其他线程看到的执行顺序是不一样的。</p><h3 id="jmm中同步程序的顺序一致性效果" tabindex="-1"><a class="header-anchor" href="#jmm中同步程序的顺序一致性效果" aria-hidden="true">#</a> JMM中同步程序的顺序一致性效果</h3><p>在顺序一致性模型中，所有操作完全按照程序的顺序串行执行。但是JMM中，临界区内（同步块或同步方法中）的代码可以发生重排序（但不允许临界区内的代码“逃逸”到临界区之外，因为会破坏锁的内存语义）。</p><p>虽然线程A在临界区做了重排序，但是因为锁的特性，线程B无法观察到线程A在临界区的重排序。这种重排序既提高了执行效率，又没有改变程序的执行结果。</p><p>同时，JMM会在退出临界区和进入临界区做特殊的处理，使得在临界区内程序获得与顺序一致性模型相同的内存视图。</p><p><strong>由此可见，JMM的具体实现方针是：在不改变（正确同步的）程序执行结果的前提下，尽量为编译期和处理器的优化打开方便之门</strong>。</p><h3 id="jmm中未同步程序的顺序一致性效果" tabindex="-1"><a class="header-anchor" href="#jmm中未同步程序的顺序一致性效果" aria-hidden="true">#</a> JMM中未同步程序的顺序一致性效果</h3><p>对于未同步的多线程程序，JMM只提供<strong>最小安全性</strong>：线程读取到的值，要么是之前某个线程写入的值，要么是默认值，不会无中生有。</p><p>为了实现这个安全性，JVM在堆上分配对象时，首先会对内存空间清零，然后才会在上面分配对象（这两个操作是同步的）。</p><p><strong>JMM没有保证未同步程序的执行结果与该程序在顺序一致性中执行结果一致。因为如果要保证执行结果一致，那么JMM需要禁止大量的优化，对程序的执行性能会产生很大的影响。</strong></p><p>未同步程序在JMM和顺序一致性内存模型中的执行特性有如下差异：</p><ol><li>顺序一致性保证单线程内的操作会按程序的顺序执行；JMM不保证单线程内的操作会按程序的顺序执行。（因为重排序，但是JMM保证单线程下的重排序不影响执行结果）</li><li>顺序一致性模型保证所有线程只能看到一致的操作执行顺序，而JMM不保证所有线程能看到一致的操作执行顺序。（因为JMM不保证所有操作立即可见）</li><li>顺序一致性模型保证对所有的内存读写操作都具有原子性，而JMM不保证对64位的long型和double型变量的写操作具有原子性。</li></ol><h2 id="happens-before" tabindex="-1"><a class="header-anchor" href="#happens-before" aria-hidden="true">#</a> happens-before</h2><h3 id="什么是happens-before" tabindex="-1"><a class="header-anchor" href="#什么是happens-before" aria-hidden="true">#</a> 什么是happens-before?</h3><p>一方面，程序员需要JMM提供一个强的内存模型来编写代码；另一方面，编译器和处理器希望JMM对它们的束缚越少越好，这样它们就可以最可能多的做优化来提高性能，希望的是一个弱的内存模型。</p><p>JMM考虑了这两种需求，并且找到了平衡点，对编译器和处理器来说，<strong>只要不改变程序的执行结果（单线程程序和正确同步了的多线程程序），编译器和处理器怎么优化都行。</strong></p><p>而对于程序员，JMM提供了<strong>happens-before规则</strong>（JSR-133规范），满足了程序员的需求——**简单易懂，并且提供了足够强的内存可见性保证。**换言之，程序员只要遵循happens-before规则，那他写的程序就能保证在JMM中具有强的内存可见性。</p><p>JMM使用happens-before的概念来定制两个操作之间的执行顺序。这两个操作可以在一个线程以内，也可以是不同的线程之间。因此，JMM可以通过happens-before关系向程序员提供跨线程的内存可见性保证。</p><p>happens-before关系的定义如下：</p><ol><li>如果一个操作happens-before另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。</li><li><strong>两个操作之间存在happens-before关系，并不意味着Java平台的具体实现必须要按照happens-before关系指定的顺序来执行。如果重排序之后的执行结果，与按happens-before关系来执行的结果一致，那么JMM也允许这样的重排序。</strong></li></ol><p>happens-before关系本质上和as-if-serial语义是一回事。</p><p>as-if-serial语义保证单线程内重排序后的执行结果和程序代码本身应有的结果是一致的，happens-before关系保证正确同步的多线程程序的执行结果不被重排序改变。</p><p>总之，<strong>如果操作A happens-before操作B，那么操作A在内存上所做的操作对操作B都是可见的，不管它们在不在一个线程。</strong></p><h3 id="天然的happens-before关系" tabindex="-1"><a class="header-anchor" href="#天然的happens-before关系" aria-hidden="true">#</a> 天然的happens-before关系</h3><p>在Java中，有以下天然的happens-before关系：</p><ul><li>程序顺序规则：一个线程中的每一个操作，happens-before于该线程中的任意后续操作。</li><li>监视器锁规则：对一个锁的解锁，happens-before于随后对这个锁的加锁。</li><li>volatile变量规则：对一个volatile域的写，happens-before于任意后续对这个volatile域的读。</li><li>传递性：如果A happens-before B，且B happens-before C，那么A happens-before C。</li><li>start规则：如果线程A执行操作ThreadB.start()启动线程B，那么A线程的ThreadB.start（）操作happens-before于线程B中的任意操作、</li><li>join规则：如果线程A执行操作ThreadB.join（）并成功返回，那么线程B中的任意操作happens-before于线程A从ThreadB.join()操作成功返回。</li></ul><p>举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// A操作</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// B操作</span>
<span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span><span class="token comment">// C 操作</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上介绍的happens-before规则，假如只有一个线程，那么不难得出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1&gt; A happens-before B 
2&gt; B happens-before C 
3&gt; A happens-before C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，真正在执行指令的时候，其实JVM有可能对操作A &amp; B进行重排序，因为无论先执行A还是B，他们都对对方是可见的，并且不影响执行结果。</p><p>如果这里发生了重排序，这在视觉上违背了happens-before原则，但是JMM是允许这样的重排序的。</p><p>所以，我们只关心happens-before规则，不用关心JVM到底是怎样执行的。只要确定操作A happens-before操作B就行了。</p><p>重排序有两类，JMM对这两类重排序有不同的策略：</p><ul><li>会改变程序执行结果的重排序，比如 A -&gt; C，JMM要求编译器和处理器都禁止这种重排序。</li><li>不会改变程序执行结果的重排序，比如 A -&gt; B，JMM对编译器和处理器不做要求，允许这种重排序。</li></ul><hr>`,106),c=e("p",null,"编辑：沉默王二，内容大部分来源以下三个开源仓库：",-1),h={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},u=e("hr",null,null,-1),M=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),m={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[a("关注二哥的原创公众号 "),e("strong",null,"沉默王二"),a("，回复"),e("strong",null,"111"),a(" 即可免费领取。")],-1),f=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function J(k,j){const n=l("ExternalLinkIcon");return o(),r("div",null,[d,e("blockquote",null,[c,e("ul",null,[e("li",null,[e("a",h,[a("深入浅出 Java 多线程"),p(n)])]),e("li",null,[e("a",b,[a("并发编程知识总结"),p(n)])]),e("li",null,[e("a",g,[a("Java八股文"),p(n)])])])]),u,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),M,a(" 等等等等……详情戳："),e("a",m,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),p(n)])]),v,f])}const x=s(i,[["render",J],["__file","jmm.html.vue"]]);export{x as default};
