import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,a as e,d as n,b as t,e as d,r as o}from"./app.e9e1538d.js";const r={},c=e("em",null,"Stack",-1),p=e("em",null,"Queue",-1),u=e("em",null,"Stack",-1),m=e("em",null,"ArrayDeque",-1),v=e("em",null,"Queue",-1),h=e("em",null,"ArrayDeque",-1),b={href:"https://tobebetterjavaer.com/collection/linkedlist.html",target:"_blank",rel:"noopener noreferrer"},g=d('<h2 id="总体介绍" tabindex="-1"><a class="header-anchor" href="#总体介绍" aria-hidden="true">#</a> 总体介绍</h2><p>要讲栈和队列，首先要讲<em>Deque</em>接口。<em>Deque</em>的含义是“double ended queue”，即双端队列，它既可以当作栈使用，也可以当作队列使用。下表列出了<em>Deque</em>与<em>Queue</em>相对应的接口：</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th><th>说明</th></tr></thead><tbody><tr><td>add(e)</td><td>addLast(e)</td><td>向队尾插入元素，失败则抛出异常</td></tr><tr><td>offer(e)</td><td>offerLast(e)</td><td>向队尾插入元素，失败则返回<code>false</code></td></tr><tr><td>remove()</td><td>removeFirst()</td><td>获取并删除队首元素，失败则抛出异常</td></tr><tr><td>poll()</td><td>pollFirst()</td><td>获取并删除队首元素，失败则返回<code>null</code></td></tr><tr><td>element()</td><td>getFirst()</td><td>获取但不删除队首元素，失败则抛出异常</td></tr><tr><td>peek()</td><td>peekFirst()</td><td>获取但不删除队首元素，失败则返回<code>null</code></td></tr></tbody></table><p>下表列出了<em>Deque</em>与<em>Stack</em>对应的接口：</p><table><thead><tr><th>Stack Method</th><th>Equivalent Deque Method</th><th>说明</th></tr></thead><tbody><tr><td>push(e)</td><td>addFirst(e)</td><td>向栈顶插入元素，失败则抛出异常</td></tr><tr><td>无</td><td>offerFirst(e)</td><td>向栈顶插入元素，失败则返回<code>false</code></td></tr><tr><td>pop()</td><td>removeFirst()</td><td>获取并删除栈顶元素，失败则抛出异常</td></tr><tr><td>无</td><td>pollFirst()</td><td>获取并删除栈顶元素，失败则返回<code>null</code></td></tr><tr><td>peek()</td><td>peekFirst()</td><td>获取但不删除栈顶元素，失败则抛出异常</td></tr><tr><td>无</td><td>peekFirst()</td><td>获取但不删除栈顶元素，失败则返回<code>null</code></td></tr></tbody></table><p>上面两个表共定义了<em>Deque</em>的 12 个接口。</p><p>添加，删除，取值都有两套接口，它们功能相同，区别是对失败情况的处理不同。</p><p><strong>一套接口遇到失败就会抛出异常，另一套遇到失败会返回特殊值（<code>false</code>或<code>null</code>）</strong>。除非某种实现对容量有限制，大多数情况下，添加操作是不会失败的。</p><p><strong>虽然<em>Deque</em>的接口有 12 个之多，但无非就是对容器的两端进行操作，或添加，或删除，或查看</strong>。明白了这一点讲解起来就会非常简单。</p>',9),k=e("em",null,"ArrayDeque",-1),_=e("em",null,"LinkedList",-1),f=e("em",null,"Deque",-1),y=e("em",null,"AarryDeque",-1),x={href:"https://tobebetterjavaer.com/collection/linkedlist.html",target:"_blank",rel:"noopener noreferrer"},q=e("em",null,"ArrayDeque",-1),D=d(`<p>从名字可以看出<em>ArrayDeque</em>底层通过数组实现，为了满足可以同时在数组两端插入或删除元素的需求，该数组还必须是循环的，即<strong>循环数组（circular array）</strong>，也就是说数组的任何一点都可能被看作起点或者终点。</p><p><em>ArrayDeque</em>是非线程安全的（not thread-safe），当多个线程同时使用的时候，需要手动同步；另外，该容器不允许放入<code>null</code>元素。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-1e7086a3-3d31-4553-aa16-5eaf2193649e.png" alt="ArrayDeque_base.png" loading="lazy"></p><p>上图中我们看到，<strong><code>head</code>指向首端第一个有效元素，<code>tail</code>指向尾端第一个可以插入元素的空位</strong>。因为是循环数组，所以<code>head</code>不一定总等于 0，<code>tail</code>也不一定总是比<code>head</code>大。</p><h2 id="方法剖析" tabindex="-1"><a class="header-anchor" href="#方法剖析" aria-hidden="true">#</a> 方法剖析</h2><h3 id="addfirst" tabindex="-1"><a class="header-anchor" href="#addfirst" aria-hidden="true">#</a> addFirst()</h3><p><code>addFirst(E e)</code>的作用是在<em>Deque</em>的首端插入元素，也就是在<code>head</code>的前面插入元素，在空间足够且下标没有越界的情况下，只需要将<code>elements[--head] = e</code>即可。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-459afbba-2778-4241-97fb-f01a29b79458.png" alt="ArrayDeque_addFirst.png" loading="lazy"></p><p>实际需要考虑：</p><ol><li>空间是否够用，以及</li><li>下标是否越界的问题。</li></ol><p>上图中，如果<code>head</code>为<code>0</code>之后接着调用<code>addFirst()</code>，虽然空余空间还够用，但<code>head</code>为<code>-1</code>，下标越界了。下列代码很好的解决了这两个问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//addFirst(E e)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//不允许放入null</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>head <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span><span class="token comment">//2.下标是否越界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span><span class="token comment">//1.空间是否够用</span>
        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//扩容</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//addFirst(E e)
public void addFirst(E e) {
    if (e == null)//不允许放入null
        throw new NullPointerException();
    elements\\[head = (head - 1) &amp; (elements.length - 1)\\] = e;//2.下标是否越界
    if (head == tail)//1.空间是否够用
        doubleCapacity();//扩容
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码我们看到，<strong>空间问题是在插入之后解决的</strong>，因为<code>tail</code>总是指向下一个可插入的空位，也就意味着<code>elements</code>数组至少有一个空位，所以插入元素的时候不用考虑空间问题。</p><p>下标越界的处理解决起来非常简单，<code>head = (head - 1) &amp; (elements.length - 1)</code>就可以了，<strong>这段代码相当于取余，同时解决了<code>head</code>为负值的情况</strong>。因为<code>elements.length</code>必需是<code>2</code>的指数倍，<code>elements - 1</code>就是二进制低位全<code>1</code>，跟<code>head - 1</code>相与之后就起到了取模的作用，如果<code>head - 1</code>为负数（其实只可能是-1），则相当于对其取相对于<code>elements.length</code>的补码。</p><p>下面再说说扩容函数<code>doubleCapacity()</code>，其逻辑是申请一个更大的数组（原数组的两倍），然后将原数组复制过去。过程如下图所示：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-f1386b63-10be-4998-bb6d-bf6560cca7ee.png" alt="ArrayDeque_doubleCapacity.png" loading="lazy"></p><p>图中我们看到，复制分两次进行，第一次复制<code>head</code>右边的元素，第二次复制<code>head</code>左边的元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//doubleCapacity()
private void doubleCapacity() {
    assert head == tail;
    int p = head;
    int n = elements.length;
    int r = n - p; // head右边元素的个数
    int newCapacity = n &lt;&lt; 1;//原空间的2倍
    if (newCapacity &lt; 0)
        throw new IllegalStateException(&quot;Sorry, deque too big&quot;);
    Object\\[\\] a = new Object\\[newCapacity\\];
    System.arraycopy(elements, p, a, 0, r);//复制右半部分，对应上图中绿色部分
    System.arraycopy(elements, 0, a, r, p);//复制左半部分，对应上图中灰色部分
    elements = (E\\[\\])a;
    head = 0;
    tail = n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addlast" tabindex="-1"><a class="header-anchor" href="#addlast" aria-hidden="true">#</a> addLast()</h3><p><code>addLast(E e)</code>的作用是在<em>Deque</em>的尾端插入元素，也就是在<code>tail</code>的位置插入元素，由于<code>tail</code>总是指向下一个可以插入的空位，因此只需要<code>elements[tail] = e;</code>即可。插入完成后再检查空间，如果空间已经用光，则调用<code>doubleCapacity()</code>进行扩容。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-832c796a-6c24-4546-9f91-22ed39884363.png" alt="ArrayDeque_addLast.png" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void addLast(E e) {
    if (e == null)//不允许放入null
        throw new NullPointerException();
    elements\\[tail\\] = e;//赋值
    if ( (tail = (tail + 1) &amp; (elements.length - 1)) == head)//下标越界处理
        doubleCapacity();//扩容
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下标越界处理方式<code>addFirt()</code>中已经讲过，不再赘述。</p><h3 id="pollfirst" tabindex="-1"><a class="header-anchor" href="#pollfirst" aria-hidden="true">#</a> pollFirst()</h3><p><code>pollFirst()</code>的作用是删除并返回<em>Deque</em>首端元素，也即是<code>head</code>位置处的元素。如果容器不空，只需要直接返回<code>elements[head]</code>即可，当然还需要处理下标的问题。由于<code>ArrayDeque</code>中不允许放入<code>null</code>，当<code>elements[head] == null</code>时，意味着容器为空。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public E pollFirst() {
    E result = elements\\[head\\];
    if (result == null)//null值意味着deque为空
        return null;
    elements\\[h\\] = null;//let GC work
    head = (head + 1) &amp; (elements.length - 1);//下标越界处理
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="polllast" tabindex="-1"><a class="header-anchor" href="#polllast" aria-hidden="true">#</a> pollLast()</h3><p><code>pollLast()</code>的作用是删除并返回<em>Deque</em>尾端元素，也即是<code>tail</code>位置前面的那个元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public E pollLast() {
    int t = (tail - 1) &amp; (elements.length - 1);//tail的上一个位置是最后一个元素
    E result = elements\\[t\\];
    if (result == null)//null值意味着deque为空
        return null;
    elements\\[t\\] = null;//let GC work
    tail = t;
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="peekfirst" tabindex="-1"><a class="header-anchor" href="#peekfirst" aria-hidden="true">#</a> peekFirst()</h3><p><code>peekFirst()</code>的作用是返回但不删除<em>Deque</em>首端元素，也即是<code>head</code>位置处的元素，直接返回<code>elements[head]</code>即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public E peekFirst() {
    return elements\\[head\\]; // elements\\[head\\] is null if deque empty
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="peeklast" tabindex="-1"><a class="header-anchor" href="#peeklast" aria-hidden="true">#</a> peekLast()</h3><p><code>peekLast()</code>的作用是返回但不删除<em>Deque</em>尾端元素，也即是<code>tail</code>位置前面的那个元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public E peekLast() {
    return elements\\[(tail - 1) &amp; (elements.length - 1)\\];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),F={href:"https://github.com/CarpenterLee/JCFInternals",target:"_blank",rel:"noopener noreferrer"},E=e("hr",null,null,-1),L=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),w={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,[n("关注二哥的原创公众号 "),e("strong",null,"沉默王二"),n("，回复"),e("strong",null,"111"),n(" 即可免费领取。")],-1),C=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function A(S,N){const a=o("ExternalLinkIcon");return l(),i("div",null,[e("p",null,[n("Java 里有一个叫做"),c,n("的类，却没有叫做"),p,n("的类（它是个接口名字）。当需要使用栈时，Java 已不推荐使用"),u,n("，而是推荐使用更高效的"),m,n("；既然"),v,n("只是一个接口，当需要使用队列时也就首选"),h,n("了（次选是"),e("a",b,[n("LinkedList"),t(a)]),n("）。")]),g,e("p",null,[k,n("和"),_,n("是"),f,n("的两个通用实现，由于官方更推荐使用"),y,n("用作栈和队列，加之上一篇已经讲解过"),e("a",x,[n("LinkedList"),t(a)]),n("，本文将着重讲解"),q,n("的具体实现。")]),D,e("blockquote",null,[e("p",null,[n("参考链接："),e("a",F,[n("https://github.com/CarpenterLee/JCFInternals"),t(a)]),n("，作者：李豪，整理：沉默王二")])]),E,e("p",null,[n("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),L,n(" 等等等等……详情戳："),e("a",w,[n("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),j,C])}const I=s(r,[["render",A],["__file","arraydeque.html.vue"]]);export{I as default};
