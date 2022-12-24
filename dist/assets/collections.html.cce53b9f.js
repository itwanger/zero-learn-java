import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as t,e as p,r as l}from"./app.e9e1538d.js";const i={},u=n("p",null,"Collections 是 JDK 提供的一个工具类，位于 java.util 包下，提供了一系列的静态方法，方便我们对集合进行各种骚操作，算是集合框架的一个大管家。",-1),k={href:"https://mp.weixin.qq.com/s/9dYmKXEErZbyPJ_GxwWYug",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>Collections 的用法很简单，在 Intellij IDEA 中敲完 <code>Collections.</code> 之后就可以看到它提供的方法了，大致看一下方法名和参数就能知道这个方法是干嘛的。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/common-tool/collections-01.png" alt="" loading="lazy"></p><p>为了节省大家的学习时间，我将这些方法做了一些分类，并列举了一些简单的例子。</p><h2 id="_01、排序操作" tabindex="-1"><a class="header-anchor" href="#_01、排序操作" aria-hidden="true">#</a> 01、排序操作</h2><ul><li><code>reverse(List list)</code>：反转顺序</li><li><code>shuffle(List list)</code>：洗牌，将顺序打乱</li><li><code>sort(List list)</code>：自然升序</li><li><code>sort(List list, Comparator c)</code>：按照自定义的比较器排序</li><li><code>swap(List list, int i, int j)</code>：将 i 和 j 位置的元素交换位置</li></ul><p>来看例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;原始顺序：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 反转</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反转后：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 洗牌</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;洗牌后：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 自然升序</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自然升序后：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 交换</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;交换后：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始顺序：[沉默王二, 沉默王三, 沉默王四, 沉默王五, 沉默王六]
反转后：[沉默王六, 沉默王五, 沉默王四, 沉默王三, 沉默王二]
洗牌后：[沉默王五, 沉默王二, 沉默王六, 沉默王三, 沉默王四]
自然升序后：[沉默王三, 沉默王二, 沉默王五, 沉默王六, 沉默王四]
交换后：[沉默王三, 沉默王二, 沉默王四, 沉默王六, 沉默王五]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02、查找操作" tabindex="-1"><a class="header-anchor" href="#_02、查找操作" aria-hidden="true">#</a> 02、查找操作</h2><ul><li><code>binarySearch(List list, Object key)</code>：二分查找法，前提是 List 已经排序过了</li><li><code>max(Collection coll)</code>：返回最大元素</li><li><code>max(Collection coll, Comparator comp)</code>：根据自定义比较器，返回最大元素</li><li><code>min(Collection coll)</code>：返回最小元素</li><li><code>min(Collection coll, Comparator comp)</code>：根据自定义比较器，返回最小元素</li><li><code>fill(List list, Object obj)</code>：使用指定对象填充</li><li><code>frequency(Collection c, Object o)</code>：返回指定对象出现的次数</li></ul><p>来看例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最大元素：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最小元素：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出现的次数：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">frequency</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 没有排序直接调用二分查找，结果是不确定的</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序前的二分查找结果：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 排序后，查找结果和预期一致</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;排序后的二分查找结果：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">&quot;沉默王八&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;填充后的结果：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始顺序：[沉默王二, 沉默王三, 沉默王四, 沉默王五, 沉默王六]
最大元素：沉默王四
最小元素：沉默王三
出现的次数：1
排序前的二分查找结果：0
排序后的二分查找结果：1
填充后的结果：[沉默王八, 沉默王八, 沉默王八, 沉默王八, 沉默王八]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03、同步控制" tabindex="-1"><a class="header-anchor" href="#_03、同步控制" aria-hidden="true">#</a> 03、同步控制</h2>`,16),r={href:"https://mp.weixin.qq.com/s/qk_neCdzM3aB6pVWVTHhNw",target:"_blank",rel:"noopener noreferrer"},m=p(`<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/common-tool/collections-02.png" alt="" loading="lazy"></p><p>使用起来也非常的简单：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SynchronizedList</span> synchronizedList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看一眼 SynchronizedList 的源码就明白了，不过是在方法里面使用 synchronized 关键字加了一层锁而已。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">SynchronizedCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">7754090372962971524L</span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

    <span class="token class-name">SynchronizedList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mutex<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mutex<span class="token punctuation">)</span> <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mutex<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那这样的话，其实效率和那些直接在方法上加 synchronized 关键字的 Vector、Hashtable 差不多（JDK 1.0 时期就有了），而这些集合类基本上已经废弃了，几乎不怎么用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> elementCount<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArrayIndexOutOfBoundsException</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">E</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> elementCount<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArrayIndexOutOfBoundsException</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">E</span> oldValue <span class="token operator">=</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> elementCount <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span>
                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span><span class="token operator">--</span>elementCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// Let gc do its work</span>

        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确的做法是使用并发包下的 CopyOnWriteArrayList、ConcurrentHashMap。这些我们放到并发编程时再讲。</p><h2 id="_04、不可变集合" tabindex="-1"><a class="header-anchor" href="#_04、不可变集合" aria-hidden="true">#</a> 04、不可变集合</h2><ul><li><code>emptyXxx()</code>：制造一个空的不可变集合</li><li><code>singletonXxx()</code>：制造一个只有一个元素的不可变集合</li><li><code>unmodifiableXxx()</code>：为指定集合制作一个不可变集合</li></ul><p>举个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span> emptyList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emptyList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;非空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emptyList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码在执行的时候就抛出错误了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Exception in thread &quot;main&quot; java.lang.UnsupportedOperationException
	at java.util.AbstractList.add(AbstractList.java:148)
	at java.util.AbstractList.add(AbstractList.java:108)
	at com.itwanger.s64.Demo.main(Demo.java:61)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 <code>Collections.emptyList()</code> 会返回一个 Collections 的内部类 EmptyList，而 EmptyList 并没有重写父类 AbstractList 的 <code>add(int index, E element)</code> 方法，所以执行的时候就抛出了不支持该操作的 UnsupportedOperationException 了。</p><p>这是从分析 add 方法源码得出的原因。除此之外，emptyList 方法是 final 的，返回的 EMPTY_LIST 也是 final 的，种种迹象表明 emptyList 返回的就是不可变对象，没法进行增伤改查。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token constant">EMPTY_LIST</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">List</span> <span class="token constant">EMPTY_LIST</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmptyList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05、其他" tabindex="-1"><a class="header-anchor" href="#_05、其他" aria-hidden="true">#</a> 05、其他</h2><p>还有两个方法比较常用：</p><ul><li><code>addAll(Collection&lt;? super T&gt; c, T... elements)</code>，往集合中添加元素</li><li><code>disjoint(Collection&lt;?&gt; c1, Collection&lt;?&gt; c2)</code>，判断两个集合是否没有交集</li></ul><p>举个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> allList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>allList<span class="token punctuation">,</span> <span class="token string">&quot;沉默王九&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王十&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;addAll 后：&quot;</span> <span class="token operator">+</span> allList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否没有交集：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">disjoint</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> allList<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;是&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;否&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始顺序：[沉默王二, 沉默王三, 沉默王四, 沉默王五, 沉默王六]
addAll 后：[沉默王九, 沉默王十, 沉默王二]
是否没有交集：否
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体上，Collections 工具类作为集合框架的大管家，提供了一些非常便利的方法供我们调用，也非常容易掌握，没什么难点，看看方法的注释就能大致明白干嘛的。</p><p>不过，工具就放在那里，用是一回事，为什么要这么用就是另外一回事了。能不能提高自己的编码水平，很大程度上取决于你到底有没有去钻一钻源码，看这些设计 JDK 的大师们是如何写代码的，学会一招半式，在工作当中还是能很快脱颖而出的。</p><p>恐怕 JDK 的设计者是这个世界上最好的老师了，文档写得不能再详细了，代码写得不能再优雅了，基本上都达到了性能上的极致。</p><p>可能有人会说，工具类没什么鸟用，不过是调用下方法而已，但这就大错特错了：如果要你来写，你能写出来 Collections 这样一个工具类吗？</p><p>这才是高手要思考的一个问题。</p><hr>`,30),v=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),b={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[s("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),s("，回复"),n("strong",null,"111"),s(" 即可免费领取。")],-1),y=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function h(f,x){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("还记得我们前面讲过的 "),n("a",k,[s("Arrays 工具类"),t(a)]),s("吗？可以回去温习下。")]),d,n("p",null,[n("a",r,[s("HashMap 是线程不安全"),t(a)]),s("的，这个我们前面讲到了。那其实 ArrayList 也是线程不安全的，没法在多线程环境下使用，那 Collections 工具类中提供了多个 synchronizedXxx 方法，这些方法会返回一个同步的对象，从而解决多线程中访问集合时的安全问题。")]),m,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),v,s(" 等等等等……详情戳："),n("a",b,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),g,y])}const L=e(i,[["render",h],["__file","collections.html.vue"]]);export{L as default};
