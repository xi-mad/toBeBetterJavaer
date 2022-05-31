import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.07379250.js";const p={},e=t(`<h1 id="java\u4E2D\u7684iterator\u548Citerable\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#java\u4E2D\u7684iterator\u548Citerable\u533A\u522B" aria-hidden="true">#</a> Java\u4E2D\u7684Iterator\u548CIterable\u533A\u522B</h1><p>\u90A3\u5929\uFF0C\u5C0F\u4E8C\u53BB\u6D77\u5EB7\u5A01\u89C6\u9762\u8BD5\uFF0C\u9762\u8BD5\u5B98\u8001\u738B\u4E00\u4E0A\u6765\u5C31\u7529\u7ED9\u4E86\u4ED6\u4E00\u9053\u9762\u8BD5\u9898\uFF1A\u8BF7\u95EE Iterator\u4E0EIterable\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p><hr><p>\u5728 Java \u4E2D\uFF0C\u6211\u4EEC\u5BF9 List \u8FDB\u884C\u904D\u5386\u7684\u65F6\u5019\uFF0C\u4E3B\u8981\u6709\u8FD9\u4E48\u4E09\u79CD\u65B9\u5F0F\u3002</p><p>\u7B2C\u4E00\u79CD\uFF1Afor \u5FAA\u73AF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\uFF1A\u8FED\u4EE3\u5668\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u79CD\uFF1Afor-each\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u79CD\u6211\u4EEC\u7565\u8FC7\uFF0C\u7B2C\u4E8C\u79CD\u7528\u7684\u662F Iterator\uFF0C\u7B2C\u4E09\u79CD\u770B\u8D77\u6765\u662F for-each\uFF0C\u5176\u5B9E\u80CC\u540E\u4E5F\u662F Iterator\uFF0C\u770B\u4E00\u4E0B\u53CD\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u5C31\u660E\u767D\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterator</span> var3 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span>var3<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>var3<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for-each \u53EA\u4E0D\u8FC7\u662F\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u8BA9\u6211\u4EEC\u5728\u904D\u5386 List \u7684\u65F6\u5019\u4EE3\u7801\u66F4\u7B80\u6D01\u660E\u4E86\u3002</p><p>Iterator \u662F\u4E2A\u63A5\u53E3\uFF0CJDK 1.2 \u7684\u65F6\u5019\u5C31\u6709\u4E86\uFF0C\u7528\u6765\u6539\u8FDB Enumeration\uFF1A</p><ul><li>\u5141\u8BB8\u5220\u9664\u5143\u7D20\uFF08\u589E\u52A0\u4E86 remove \u65B9\u6CD5\uFF09</li><li>\u4F18\u5316\u4E86\u65B9\u6CD5\u540D\uFF08Enumeration \u4E2D\u662F hasMoreElements \u548C nextElement\uFF0C\u4E0D\u7B80\u6D01\uFF09</li></ul><p>\u6765\u770B\u4E00\u4E0B Iterator \u7684\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u4E0B\u4E00\u4E2A\u5BF9\u8C61</span>
    <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u4E0B\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u5C06\u8BBF\u95EE\u6307\u9488\u79FB\u52A8\u4E00\u4F4D</span>
    <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5220\u9664\u96C6\u5408\u4E2D\u8C03\u7528next()\u65B9\u6CD5\u8FD4\u56DE\u7684\u5BF9\u8C61</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token string">&quot;remove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JDK 1.8 \u65F6\uFF0CIterable \u63A5\u53E3\u4E2D\u65B0\u589E\u4E86 forEach \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">T</span> t <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        action<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u5BF9 Iterable \u7684\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u7ED9\u5B9A\u64CD\u4F5C\uFF0C\u5177\u4F53\u6307\u5B9A\u7684\u64CD\u4F5C\u9700\u8981\u81EA\u5DF1\u5199Consumer\u63A5\u53E3\u901A\u8FC7accept\u65B9\u6CD5\u56DE\u8C03\u51FA\u6765\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>integer <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5199\u5F97\u66F4\u6D45\u663E\u6613\u61C2\u70B9\uFF0C\u5C31\u662F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> integer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u4ED4\u7EC6\u89C2\u5BDFArrayList \u6216\u8005 LinkedList \u7684\u201C\u6237\u53E3\u672C\u201D\u5C31\u4F1A\u53D1\u73B0\uFF0C\u5E76\u6CA1\u6709\u76F4\u63A5\u627E\u5230 Iterator \u7684\u5F71\u5B50\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/iterator-iterable-01.png" alt=""></p><p>\u53CD\u800C\u627E\u5230\u4E86 Iterable\uFF01</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0CList \u7684\u5173\u7CFB\u56FE\u8C31\u4E2D\u5E76\u6CA1\u6709\u76F4\u63A5\u4F7F\u7528 Iterator\uFF0C\u800C\u662F\u4F7F\u7528 Iterable \u505A\u4E86\u8FC7\u6E21\u3002</p><p>\u56DE\u5934\u518D\u6765\u770B\u4E00\u4E0B\u7B2C\u4E8C\u79CD\u904D\u5386 List \u7684\u65B9\u5F0F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u73B0\u521A\u597D\u547C\u5E94\u4E0A\u4E86\u3002\u62FF ArrayList \u6765\u8BF4\u5427\uFF0C\u5B83\u91CD\u5199\u4E86 Iterable \u63A5\u53E3\u7684 iterator \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Itr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7684\u5BF9\u8C61 Itr \u662F\u4E2A\u5185\u90E8\u7C7B\uFF0C\u5B9E\u73B0\u4E86 Iterator \u63A5\u53E3\uFF0C\u5E76\u4E14\u6309\u7167\u81EA\u5DF1\u7684\u65B9\u5F0F\u91CD\u5199\u4E86 hasNext\u3001next\u3001remove \u7B49\u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Itr</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cursor <span class="token operator">!=</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData <span class="token operator">=</span> <span class="token class-name">ArrayList</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>elementData<span class="token punctuation">;</span>
        cursor <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> elementData<span class="token punctuation">[</span>lastRet <span class="token operator">=</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ArrayList</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>lastRet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cursor <span class="token operator">=</span> lastRet<span class="token punctuation">;</span>
            lastRet <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            expectedModCount <span class="token operator">=</span> modCount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IndexOutOfBoundsException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u53EF\u80FD\u6709\u4E9B\u5C0F\u4F19\u4F34\u4F1A\u95EE\uFF1A\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u5C06 Iterator \u4E2D\u7684\u6838\u5FC3\u65B9\u6CD5 hasNext\u3001next \u653E\u5230 Iterable \u63A5\u53E3\u4E2D\u5462\uFF1F\u76F4\u63A5\u50CF\u4E0B\u9762\u8FD9\u6837\u4F7F\u7528\u4E0D\u662F\u66F4\u65B9\u4FBF\uFF1F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterable</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u82F1\u6587\u5355\u8BCD\u7684\u540E\u7F00\u8BED\u6CD5\u4E0A\u6765\u770B\uFF0C\uFF08Iterable\uFF09able \u8868\u793A\u8FD9\u4E2A List \u662F\u652F\u6301\u8FED\u4EE3\u7684\uFF0C\u800C \uFF08Iterator\uFF09tor \u8868\u793A\u8FD9\u4E2A List \u662F\u5982\u4F55\u8FED\u4EE3\u7684\u3002</p><p>\u652F\u6301\u8FED\u4EE3\u4E0E\u5177\u4F53\u600E\u4E48\u8FED\u4EE3\u663E\u7136\u4E0D\u80FD\u6DF7\u5728\u4E00\u8D77\uFF0C\u5426\u5219\u5C31\u4E71\u7684\u4E00\u7B14\u3002\u8FD8\u662F\u5404\u53F8\u5176\u804C\u7684\u597D\u3002</p><p>\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u628A Iterator \u548C Iterable \u5408\u5E76\uFF0Cfor-each \u8FD9\u79CD\u904D\u5386 List \u7684\u65B9\u5F0F\u662F\u4E0D\u662F\u5C31\u4E0D\u597D\u529E\u4E86\uFF1F</p><p>\u539F\u5219\u4E0A\uFF0C\u53EA\u8981\u4E00\u4E2A List \u5B9E\u73B0\u4E86 Iterable \u63A5\u53E3\uFF0C\u90A3\u4E48\u5B83\u5C31\u53EF\u4EE5\u4F7F\u7528 for-each \u8FD9\u79CD\u65B9\u5F0F\u6765\u904D\u5386\uFF0C\u90A3\u5177\u4F53\u8BE5\u600E\u4E48\u904D\u5386\uFF0C\u8FD8\u662F\u8981\u770B\u5B83\u81EA\u5DF1\u662F\u600E\u4E48\u5B9E\u73B0 Iterator \u63A5\u53E3\u7684\u3002</p><p>Map \u5C31\u6CA1\u529E\u6CD5\u76F4\u63A5\u4F7F\u7528 for-each\uFF0C\u56E0\u4E3A Map \u6CA1\u6709\u5B9E\u73B0 Iterable \u63A5\u53E3\uFF0C\u53EA\u6709\u901A\u8FC7 <code>map.entrySet()</code>\u3001<code>map.keySet()</code>\u3001<code>map.values()</code> \u8FD9\u79CD\u8FD4\u56DE\u4E00\u4E2A Collection \u7684\u65B9\u5F0F\u624D\u80FD \u4F7F\u7528 for-each\u3002</p><p>\u5982\u679C\u6211\u4EEC\u4ED4\u7EC6\u7814\u7A76 LinkedList \u7684\u6E90\u7801\u5C31\u4F1A\u53D1\u73B0\uFF0CLinkedList \u5E76\u6CA1\u6709\u76F4\u63A5\u91CD\u5199 Iterable \u63A5\u53E3\u7684 iterator \u65B9\u6CD5\uFF0C\u800C\u662F\u7531\u5B83\u7684\u7236\u7C7B AbstractSequentialList \u6765\u5B8C\u6210\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LinkedList \u91CD\u5199\u4E86 listIterator \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPositionIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ListItr</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u53D1\u73B0\u4E86\u4E00\u4E2A\u65B0\u7684\u8FED\u4EE3\u5668 ListIterator\uFF0C\u5B83\u7EE7\u627F\u4E86 Iterator \u63A5\u53E3\uFF0C\u5728\u904D\u5386List \u65F6\u53EF\u4EE5\u4ECE\u4EFB\u610F\u4E0B\u6807\u5F00\u59CB\u904D\u5386\uFF0C\u800C\u4E14\u652F\u6301\u53CC\u5411\u904D\u5386\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">E</span> <span class="token function">previous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u96C6\u5408\uFF08Collection\uFF09\u4E0D\u4EC5\u6709 List\uFF0C\u8FD8\u6709 Map \u548C Set\uFF0C\u90A3 Iterator \u4E0D\u4EC5\u652F\u6301 List\uFF0C\u8FD8\u652F\u6301 Set\uFF0C\u4F46 ListIterator \u5C31\u53EA\u652F\u6301 List\u3002</p><p>\u90A3\u53EF\u80FD\u6709\u4E9B\u5C0F\u4F19\u4F34\u4F1A\u95EE\uFF1A\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u8BA9 List \u5B9E\u73B0 Iterator \u63A5\u53E3\uFF0C\u800C\u662F\u8981\u7528\u5185\u90E8\u7C7B\u6765\u5B9E\u73B0\u5462\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A\u6709\u4E9B List \u53EF\u80FD\u4F1A\u6709\u591A\u79CD\u904D\u5386\u65B9\u5F0F\uFF0C\u6BD4\u5982\u8BF4 LinkedList\uFF0C\u9664\u4E86\u652F\u6301\u6B63\u5E8F\u7684\u904D\u5386\u65B9\u5F0F\uFF0C\u8FD8\u652F\u6301\u9006\u5E8F\u7684\u904D\u5386\u65B9\u5F0F\u2014\u2014DescendingIterator\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">DescendingIterator</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ListItr</span> itr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListItr</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> itr<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> itr<span class="token punctuation">.</span><span class="token function">previous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        itr<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5F97\u5230\uFF0CDescendingIterator \u521A\u597D\u5229\u7528\u4E86 ListIterator \u5411\u524D\u904D\u5386\u7684\u65B9\u5F0F\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u7684\u65B9\u5F0F\u6765\u4F7F\u7528\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">descendingIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u597D\u4E86\uFF0C\u5173\u4E8EIterator\u4E0EIterable\u6211\u4EEC\u5C31\u5148\u804A\u8FD9\u4E48\u591A\uFF0C\u603B\u7ED3\u4E24\u70B9\uFF1A</p><ul><li>\u5B66\u4F1A\u6DF1\u5165\u601D\u8003\uFF0C\u4E00\u70B9\u70B9\u62BD\u4E1D\u5265\u8327\uFF0C\u591A\u60F3\u60F3\u4E3A\u4EC0\u4E48\u8FD9\u6837\u5B9E\u73B0\uFF0C\u5F88\u591A\u95EE\u9898\u6CA1\u6709\u81EA\u5DF1\u60F3\u8C61\u4E2D\u7684\u90A3\u4E48\u590D\u6742\u3002</li><li>\u9047\u5230\u7591\u60D1\u4E0D\u653E\u5F03\uFF0C\u8FD9\u662F\u63D0\u5347\u81EA\u5DF1\u6700\u597D\u7684\u673A\u4F1A\uFF0C\u9047\u5230\u67D0\u4E2A\u7591\u96BE\u7684\u70B9\uFF0C\u89E3\u51B3\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6316\u6398\u51FA\u5F88\u591A\u76F8\u5173\u7684\u4E1C\u897F\u3002</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,57),c=[e];function o(l,i){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","iterator-iterable.html.vue"]]);export{k as default};
