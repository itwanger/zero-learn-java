import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,a as n,d as s,b as e,e as t,r as l}from"./app.99eb8281.js";const i={},u=t(`<p>在<code>jdk7</code>之后，提供了<code>Objects</code>工具类，我们可以通过它操作对象。</p><h2 id="对象判空" tabindex="-1"><a class="header-anchor" href="#对象判空" aria-hidden="true">#</a> 对象判空</h2><p>在java中万事万物皆对象，对象的判空可以说无处不在。Objects的<code>isNull</code>方法判断对象是否为空，而<code>nonNull</code>方法判断对象是否不为空。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象不为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象为空抛异常" tabindex="-1"><a class="header-anchor" href="#对象为空抛异常" aria-hidden="true">#</a> 对象为空抛异常</h2><p>如果我们想在对象为空时，抛出空指针异常，可以使用Objects的<code>requireNonNull</code>方法。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> <span class="token string">&quot;参数不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;参数不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断两个对象是否相等" tabindex="-1"><a class="header-anchor" href="#判断两个对象是否相等" aria-hidden="true">#</a> 判断两个对象是否相等</h2><p>我们经常需要判断两个对象是否相等，Objects给我们提供了<code>equals</code>方法，能非常方便的实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> integer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> integer2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但使用这个方法有坑，比如例子改成：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Long</span> integer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> integer2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),r={href:"https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247493176&idx=1&sn=c445625478a7f8122a6715b64fe6770c&chksm=c0e83ed0f79fb7c6cf2992d24e98f60fd78ca89525b5a3cc07f79dc801dd8e381b1fce03bf5c&token=1124974571&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="获取对象的hashcode" tabindex="-1"><a class="header-anchor" href="#获取对象的hashcode" aria-hidden="true">#</a> 获取对象的hashCode</h2><p>如果你想获取某个对象的hashCode，可以使用Objects的<code>hashCode</code>方法。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">96354</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Objects的内容先介绍到这里，有兴趣的小伙们，可以看看下面更多的方法： <img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/common-tool/Objects-83489814-9784-4274-841a-27ee75c046ac.jpg" alt="" loading="lazy"></p><hr>`,7),k=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[s("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),s("，回复"),n("strong",null,"111"),s(" 即可免费领取。")],-1),b=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function g(h,j){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("具体原因不细说了，有兴趣的小伙们可以看看我的另一篇文章《"),n("a",r,[s("Objects.equals有坑"),e(a)]),s("》，里面有非常详细的讲解。")]),d,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),k,s(" 等等等等……详情戳："),n("a",v,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),e(a)])]),m,b])}const x=p(i,[["render",g],["__file","Objects.html.vue"]]);export{x as default};
