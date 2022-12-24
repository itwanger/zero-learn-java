import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as t,e as p,r as l}from"./app.e9e1538d.js";const i={},u=p(`<p>“哥，我感觉字符串拆分没什么可讲的呀，直接上 String 类的 <code>split()</code> 方法不就可以了！”三妹毫不客气地说。</p><p>“假如你真的这么觉得，那可要注意了，事情远没这么简单。”我微笑着说。</p><p>假如现在有这样一串字符序列“沉默王二，一枚有趣的程序员”，需要按照中文逗号“，”进行拆分，这意味着第一串字符序列为逗号前面的“沉默王二”，第二串字符序列为逗号后面的“一枚有趣的程序员”。</p><p>“这不等于没说吗？哥！”还没等我说，三妹就打断了我。</p><p>“别着急嘛，等哥说完。”我依然保持着微笑继续说，“在拆分之前，要先进行检查，判断一下这串字符是否包含逗号，否则应该抛出异常。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二，一枚有趣的程序员&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;当前字符串没有包含逗号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“三妹你看，这段代码挺严谨的吧？”我说，“来看一下程序的输出结果。”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一部分：沉默王二 第二部分：一枚有趣的程序员
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“的确和预期完全一致。”三妹说。</p><p>“这是建立在字符串是确定的情况下，最重要的是分隔符是确定的。否则，麻烦就来了。”我说，“大约有 12 种英文特殊符号，如果直接拿这些特殊符号替换上面代码中的分隔符（中文逗号），这段程序在运行的时候就会出现以下提到的错误。”</p><ul><li>反斜杠 <code>\\</code>（ArrayIndexOutOfBoundsException）</li><li>插入符号 <code>^</code>（同上）</li><li>美元符号 <code>$</code>（同上）</li><li>逗点 <code>.</code>（同上）</li><li>竖线 <code>|</code>（正常，没有出错）</li><li>问号 <code>?</code>（PatternSyntaxException）</li><li>星号 <code>*</code>（同上）</li><li>加号 <code>+</code>（同上）</li><li>左小括号或者右小括号 <code>()</code>（同上）</li><li>左方括号或者右方括号 <code>[]</code>（同上）</li><li>左大括号或者右大括号 <code>{}</code>（同上）</li></ul><p>“那遇到这些特殊符号该怎么办呢？”三妹问。</p><p>“用正则表达式。”我说，“正则表达式是一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。”</p><p>我在 GitHub 上找打了一个开源的正则表达式学习文档，非常详细。一开始写正则表达式的时候难免会感觉到非常生疏，你可以查看一下这份文档。记不住没关系，遇到就查。</p>`,14),r={href:"https://github.com/cdoco/learn-regex-zh",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"除了这份文档，还有一份：",-1),d={href:"https://github.com/cdoco/common-regex",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>作者收集了一些在平时项目开发中经常用到的正则表达式，可以直接拿来用。</p><p>“哥，你真周到。”三妹笑着说。</p><p>“好了，来用英文逗点 <code>.</code> 替换一下分隔符。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二.一枚有趣的程序员&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于英文逗点属于特殊符号，所以在使用 <code>split()</code> 方法的时候，就需要使用正则表达式 <code>\\\\.</code> 而不能直接使用 <code>.</code>。</p><p>“为什么用两个反斜杠呢？”三妹问。</p><p>“因为反斜杠本身就是一个特殊字符，需要用反斜杠来转义。”我说。</p><p>当然了，你也可以使用 <code>[]</code> 来包裹住英文逗点“.”，<code>[]</code> 也是一个正则表达式，用来匹配方括号中包含的任意字符。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[.]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除此之外， 还可以使用 Pattern 类的 <code>quote()</code> 方法来包裹英文逗点“.”，该方法会返回一个使用 <code>\\Q\\E</code> 包裹的字符串。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-01.png" alt="" loading="lazy"></p><p>来看示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">quote</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>split()</code> 方法的参数是正则表达式的时候，方法最终会执行下面这行代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也就意味着，拆分字符串有了新的选择，可以不使用 String 类的 <code>split()</code> 方法，直接用下面的方式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPatternSplit</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Pattern</span> twopart <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> twopart<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二.一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“为什么要把 Pattern 表达式声明称 static 的呢？”三妹问。</p><p>“由于模式是确定的，通过 static 的预编译功能可以提高程序的效率。”我说，“除此之外，还可以使用 Pattern 配合 Matcher 类进行字符串拆分，这样做的好处是可以对要拆分的字符串进行一些严格的限制，来看这段示例代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPatternMatch</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 使用预编译功能，提高效率
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Pattern</span> twopart <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(.+)\\\\.(.+)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二.一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;.一枚有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Matcher</span> m <span class="token operator">=</span> twopart<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不匹配&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正则表达式 <code>(.+)\\\\.(.+)</code> 的意思是，不仅要把字符串按照英文标点的方式拆成两部分，并且英文逗点的前后要有内容。</p><p>来看一下程序的输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>第一部分：沉默王二 第二部分：一枚有趣的程序员
不匹配
不匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，使用 Matcher 来匹配一些简单的字符串时相对比较沉重一些，使用 String 类的 <code>split()</code> 仍然是首选，因为该方法还有其他一些牛逼的功能。比如说，如果你想把分隔符包裹在拆分后的字符串的第一部分，可以这样做：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二，一枚有趣的程序员&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;(?&lt;=，)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序输出的结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一部分：沉默王二， 第二部分：一枚有趣的程序员
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到分隔符“，”包裹在了第一部分，如果希望包裹在第二部分，可以这样做：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;(?=，)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“<code>?&lt;=</code> 和 <code>?=</code> 是什么东东啊？”三妹好奇地问。</p><p>“它其实是正则表达式中的断言模式。”我说，“你有时间的话，可以看看前面我推荐的两份开源文档。”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-02.png" alt="" loading="lazy"></p><p>“<code>split()</code> 方法可以传递 2 个参数，第一个为分隔符，第二个为拆分的字符串个数。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;沉默王二，一枚有趣的程序员，宠爱他&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; 第二部分：&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 debug 模式的话，可以看到以下内容：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-03.png" alt="" loading="lazy"></p><p>也就是说，传递 2 个参数的时候，会直接调用 <code>substring()</code> 进行截取，第二个分隔符后的就不再拆分了。</p><p>来看一下程序输出的结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一部分：沉默王二 第二部分：一枚有趣的程序员，宠爱他
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“没想到啊，这个字符串拆分还挺讲究的呀！”三妹感慨地说。</p><p>“是的，其实字符串拆分在实际的工作当中还是挺经常用的。前端经常会按照规则传递一长串字符序列到后端，后端就需要按照规则把字符串拆分再做处理。”我说。</p><p>“嗯，我把今天的内容温习下，二哥，你休息会。”三妹说。</p><hr>`,43),m=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),g={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[s("关注二哥的原创公众号 "),n("strong",null,"沉默王二"),s("，回复"),n("strong",null,"111"),s(" 即可免费领取。")],-1),q=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function h(f,w){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[s("https://github.com/cdoco/learn-regex-zh"),t(a)])])]),k,n("blockquote",null,[n("p",null,[n("a",d,[s("https://github.com/cdoco/common-regex"),t(a)])])]),v,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),m,s(" 等等等等……详情戳："),n("a",g,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),b,q])}const x=e(i,[["render",h],["__file","split.html.vue"]]);export{x as default};
