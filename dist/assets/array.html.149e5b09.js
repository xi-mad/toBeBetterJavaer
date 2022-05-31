import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c,a as s,b as l,e as a,d as n}from"./app.07379250.js";const i={},u=a(`<h1 id="\u6DF1\u5165\u7406\u89E3java\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3java\u6570\u7EC4" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3Java\u6570\u7EC4</h1><p>\u201C\u54E5\uFF0C\u6211\u770B\u4F60\u4E4B\u524D\u7684\u6587\u7AE0\u91CC\u63D0\u5230\uFF0CArrayList \u7684\u5185\u90E8\u662F\u7528\u6570\u7EC4\u5B9E\u73B0\u7684\uFF0C\u6211\u5C31\u5BF9\u6570\u7EC4\u975E\u5E38\u611F\u5174\u8DA3\uFF0C\u60F3\u6DF1\u5165\u5730\u4E86\u89E3\u4E00\u4E0B\uFF0C\u4ECA\u5929\u7EC8\u4E8E\u5230\u8FD9\u4E2A\u73AF\u8282\u4E86\uFF0C\u597D\u671F\u5F85\u5440\uFF01\u201D\u4E09\u59B9\u7684\u8BED\u6C14\u91CC\u663E\u5F97\u5F88\u5174\u594B\u3002</p><p>\u201C\u7684\u786E\u662F\u7684\uFF0C\u770B ArrayList \u7684\u6E90\u7801\u5C31\u4E00\u6E05\u4E8C\u695A\u4E86\u3002\u201D\u6211\u4E00\u8FB9\u8BF4\uFF0C\u4E00\u8FB9\u6253\u5F00 Intellij IDEA\uFF0C\u5E76\u627E\u5230\u4E86 ArrayList \u7684\u6E90\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * The array buffer into which the elements of the ArrayList are stored.
 * The capacity of the ArrayList is the length of this array buffer. Any
 * empty ArrayList with elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA
 * will be expanded to DEFAULT_CAPACITY when the first element is added.
 */</span>
<span class="token keyword">transient</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData<span class="token punctuation">;</span> <span class="token comment">// non-private to simplify nested class access</span>

<span class="token doc-comment comment">/**
 * The size of the ArrayList (the number of elements it contains).
 *
 * <span class="token keyword">@serial</span>
 */</span>
<span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u77A7\u89C1\u6CA1\uFF1F<code>Object[] elementData</code> \u5C31\u662F\u6570\u7EC4\u3002\u201D\u6211\u6307\u7740\u663E\u793A\u5C4F\u4E0A\u8FD9\u4E32\u4EE3\u7801\u7EE7\u7EED\u8BF4\u3002</p><p>\u6570\u7EC4\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u5305\u542B\u4E86\u4E00\u7EC4\u56FA\u5B9A\u6570\u91CF\u7684\u5143\u7D20\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u5143\u7D20\u7684\u7C7B\u578B\u662F\u76F8\u540C\u7684\u3002\u6570\u7EC4\u4F1A\u6309\u7167\u7D22\u5F15\u7684\u65B9\u5F0F\u5C06\u5143\u7D20\u653E\u5728\u6307\u5B9A\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u6765\u8BBF\u95EE\u8FD9\u4E9B\u5143\u7D20\u3002\u5728 Java \u4E2D\uFF0C\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB\u7684\u3002</p><p>\u201C\u54E5\uFF0C\u80FD\u8BF4\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\u5417\uFF1F\u201D\u4E09\u59B9\u7A81\u7136\u8FD9\u4E2A\u8BDD\u9898\u5F88\u611F\u5174\u8DA3\u3002</p><p>\u201C\u54E6\uFF0CJava \u662F\u57FA\u4E8E C/C++ \u8BED\u8A00\u5B9E\u73B0\u7684\uFF0C\u800C C \u8BED\u8A00\u7684\u4E0B\u6807\u662F\u4ECE 0 \u5F00\u59CB\u7684\uFF0C\u6240\u4EE5 Java \u5C31\u7EE7\u627F\u4E86\u8FD9\u4E2A\u826F\u597D\u7684\u4F20\u7EDF\u4E60\u60EF\u3002C\u8BED\u8A00\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u6982\u5FF5\uFF0C\u53EB\u505A\u6307\u9488\uFF0C\u5B83\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u504F\u79FB\u91CF\uFF0C\u8DDD\u79BB\u5F00\u59CB\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u5C31\u5728\u5F00\u59CB\u7684\u4F4D\u7F6E\uFF0C\u5B83\u7684\u504F\u79FB\u91CF\u5C31\u4E3A 0\uFF0C\u6240\u4EE5\u7D22\u5F15\u5C31\u4E3A 0\u3002\u201D\u6B64\u523B\uFF0C\u6211\u5F88\u81EA\u4FE1\u3002</p><p>\u201C\u6B64\u5916\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u8BF4\u6CD5\u3002\u65E9\u671F\u7684\u8BA1\u7B97\u673A\u8D44\u6E90\u6BD4\u8F83\u532E\u4E4F\uFF0C0 \u4F5C\u4E3A\u8D77\u59CB\u4E0B\u6807\u76F8\u6BD4\u8F83\u4E8E 1 \u4F5C\u4E3A\u8D77\u59CB\u4E0B\u6807\uFF0C\u7F16\u8BD1\u7684\u6548\u7387\u66F4\u9AD8\u3002\u201D</p><p>\u201C\u54E6\u3002\u201D\u4E09\u59B9\u610F\u5473\u6DF1\u957F\u5730\u70B9\u4E86\u70B9\u5934\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u6570\u7EC4\u7406\u89E3\u4E3A\u4E00\u4E2A\u4E2A\u6574\u9F50\u6392\u5217\u7684\u5355\u5143\u683C\uFF0C\u6BCF\u4E2A\u5355\u5143\u683C\u91CC\u9762\u5B58\u653E\u7740\u4E00\u4E2A\u5143\u7D20\u3002</p><p>\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\u53EF\u4EE5\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u6BD4\u5982\u8BF4 int\u3001double\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF08\u6BD4\u5982\u8BF4 String\uFF09\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002</p><p>\u6570\u7EC4\u7684\u58F0\u660E\u65B9\u5F0F\u5206\u4E24\u79CD\u3002</p><p>\u5148\u6765\u770B\u7B2C\u4E00\u79CD\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u518D\u6765\u770B\u7B2C\u4E8C\u79CD\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> anOtherArray<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u540C\u4E4B\u5904\u5C31\u5728\u4E8E\u4E2D\u62EC\u53F7\u7684\u4F4D\u7F6E\uFF0C\u662F\u8DDF\u5728\u7C7B\u578B\u5173\u952E\u5B57\u7684\u540E\u9762\uFF0C\u8FD8\u662F\u8DDF\u5728\u53D8\u91CF\u7684\u540D\u79F0\u7684\u540E\u9762\u3002\u524D\u4E00\u79CD\u7684\u4F7F\u7528\u9891\u7387\u66F4\u9AD8\u4E00\u4E9B\uFF0C\u50CF ArrayList \u7684\u6E90\u7801\u4E2D\u5C31\u7528\u4E86\u7B2C\u4E00\u79CD\u65B9\u5F0F\u3002</p><p>\u540C\u6837\u7684\uFF0C\u6570\u7EC4\u7684\u521D\u59CB\u5316\u65B9\u5F0F\u4E5F\u6709\u591A\u79CD\uFF0C\u6700\u5E38\u89C1\u7684\u662F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u770B\u5230\u4E86\u6CA1\uFF1F\u4E0A\u9762\u8FD9\u884C\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86 new \u5173\u952E\u5B57\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u6570\u7EC4\u7684\u786E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EA\u6709\u5BF9\u8C61\u7684\u521B\u5EFA\u624D\u4F1A\u7528\u5230 new \u5173\u952E\u5B57\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u662F\u4E0D\u7528\u7684\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u65B9\u62EC\u53F7\u4E2D\u6307\u5B9A\u6570\u7EC4\u7684\u957F\u5EA6\u3002</p>`,21),r=n("\u8FD9\u65F6\u5019\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u4F1A\u88AB\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C\uFF0Cint \u7C7B\u578B\u7684\u5C31\u4E3A 0\uFF0CObject \u7C7B\u578B\u7684\u5C31\u4E3A null\u3002 \u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C\u4E0D\u540C\uFF0C\u53EF\u4EE5\u53C2\u7167"),k={href:"https://mp.weixin.qq.com/s/twim3w_dp5ctCigjLGIbFw",target:"_blank",rel:"noopener noreferrer"},d=n("\u4E4B\u524D\u7684\u6587\u7AE0"),v=n("\u3002"),m=a(`<p>\u53E6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5927\u62EC\u53F7\u7684\u65B9\u5F0F\uFF0C\u76F4\u63A5\u521D\u59CB\u5316\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> anOtherArray<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u5206\u522B\u662F 1\u30012\u30013\u30014\u30015\uFF0C\u7D22\u5F15\u4F9D\u6B21\u662F 0\u30011\u30012\u30013\u30014\uFF0C\u957F\u5EA6\u662F 5\u3002</p><p>\u201C\u54E5\uFF0C\u600E\u4E48\u8BBF\u95EE\u6570\u7EC4\u5462\uFF1F\u201D\u4E09\u59B9\u53CA\u65F6\u5730\u63D2\u8BDD\u5230\u3002</p><p>\u524D\u9762\u63D0\u5230\u8FC7\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u6765\u8BBF\u95EE\u6570\u7EC4\u7684\u5143\u7D20\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>anArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53D8\u91CF\u540D\uFF0C\u52A0\u4E0A\u4E2D\u62EC\u53F7\uFF0C\u52A0\u4E0A\u5143\u7D20\u7684\u7D22\u5F15\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u6570\u7EC4\uFF0C\u901A\u8FC7\u201C=\u201D\u64CD\u4F5C\u7B26\u53EF\u4EE5\u5BF9\u5143\u7D20\u8FDB\u884C\u8D4B\u503C\u3002</p><p>\u5982\u679C\u7D22\u5F15\u7684\u503C\u8D85\u51FA\u4E86\u6570\u7EC4\u7684\u754C\u9650\uFF0C\u5C31\u4F1A\u629B\u51FA <code>ArrayIndexOutOfBoundException</code>\u3002</p><p>\u65E2\u7136\u6570\u7EC4\u7684\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB\uFF0C\u90A3\u5C31\u662F\u5230\u6570\u7EC4\u7684 <code>length - 1</code> \u7ED3\u675F\uFF0C\u4E0D\u8981\u4F7F\u7528\u8D85\u51FA\u8FD9\u4E2A\u8303\u56F4\u5185\u7684\u7D22\u5F15\u8BBF\u95EE\u6570\u7EC4\uFF0C\u5C31\u4E0D\u4F1A\u629B\u51FA\u6570\u7EC4\u8D8A\u754C\u7684\u5F02\u5E38\u4E86\u3002</p><p>\u5F53\u6570\u7EC4\u7684\u5143\u7D20\u975E\u5E38\u591A\u7684\u65F6\u5019\uFF0C\u9010\u4E2A\u8BBF\u95EE\u6570\u7EC4\u5C31\u592A\u8F9B\u82E6\u4E86\uFF0C\u6240\u4EE5\u9700\u8981\u901A\u8FC7\u904D\u5386\u7684\u65B9\u5F0F\u3002</p><p>\u7B2C\u4E00\u79CD\uFF0C\u4F7F\u7528 for \u5FAA\u73AF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> anOtherArray<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> anOtherArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>anOtherArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 length \u5C5E\u6027\u83B7\u53D6\u5230\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u7136\u540E\u4ECE 0 \u5F00\u59CB\u904D\u5386\uFF0C\u5C31\u5F97\u5230\u4E86\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u3002</p><p>\u7B2C\u4E8C\u79CD\uFF0C\u4F7F\u7528 for-each \u5FAA\u73AF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> anOtherArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u9700\u8981\u5173\u5FC3\u7D22\u5F15\u7684\u8BDD\uFF08\u610F\u5473\u7740\u4E0D\u9700\u8981\u4FEE\u6539\u6570\u7EC4\u7684\u67D0\u4E2A\u5143\u7D20\uFF09\uFF0C\u4F7F\u7528 for-each \u904D\u5386\u66F4\u7B80\u6D01\u4E00\u4E9B\u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 while \u548C do-while \u5FAA\u73AF\u3002</p><p>\u5728 Java \u4E2D\uFF0C\u53EF\u53D8\u53C2\u6570\u7528\u4E8E\u5C06\u4EFB\u610F\u6570\u91CF\u7684\u53C2\u6570\u4F20\u9012\u7ED9\u65B9\u6CD5\uFF0C\u6765\u770B <code>varargsMethod()</code> \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">varargsMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> varargs<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u53EF\u4EE5\u662F 0 \u4E2A\u6216\u8005 N \u4E2A\uFF0C\u672C\u8D28\u4E0A\uFF0C\u53EF\u53D8\u53C2\u6570\u5C31\u662F\u901A\u8FC7\u6570\u7EC4\u5B9E\u73B0\u7684\u3002\u4E3A\u4E86\u8BC1\u660E\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u4E00\u4E0B\u53CD\u7F16\u8BD1\u4E00\u540E\u7684\u5B57\u8282\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VarargsDemo</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">VarargsDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">transient</span> <span class="token keyword">void</span> <span class="token function">varargsMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> as<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u5176\u5B9E\u53EF\u4EE5\u76F4\u63A5\u5C06\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u8BE5\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">VarargsDemo</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VarargsDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
demo<span class="token punctuation">.</span><span class="token function">varargsMethod</span><span class="token punctuation">(</span>anArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F20\u9012\u591A\u4E2A\u5B57\u7B26\u4E32\uFF0C\u901A\u8FC7\u9017\u53F7\u9694\u5F00\u7684\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>demo<span class="token punctuation">.</span><span class="token function">varargsMethod</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 Java \u4E2D\uFF0C\u6570\u7EC4\u4E0E List \u5173\u7CFB\u975E\u5E38\u5BC6\u5207\u3002List \u5C01\u88C5\u4E86\u5F88\u591A\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5BF9\u96C6\u5408\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u800C\u5982\u679C\u76F4\u63A5\u64CD\u4F5C\u6570\u7EC4\u7684\u8BDD\uFF0C\u6709\u5F88\u591A\u4E0D\u4FBF\uFF0C\u56E0\u4E3A\u6570\u7EC4\u672C\u8EAB\u6CA1\u6709\u63D0\u4F9B\u8FD9\u4E9B\u5C01\u88C5\u597D\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u628A\u6570\u7EC4\u8F6C\u6210 List\u3002</p><p>\u201C\u600E\u4E48\u8F6C\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u5230\u3002</p><p>\u6700\u539F\u59CB\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F\u901A\u8FC7\u904D\u5386\u6570\u7EC4\u7684\u65B9\u5F0F\uFF0C\u4E00\u4E2A\u4E2A\u5C06\u6570\u7EC4\u6DFB\u52A0\u5230 List \u4E2D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> aList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> element <span class="token operator">:</span> anArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    aList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u4F18\u96C5\u7684\u65B9\u5F0F\u662F\u901A\u8FC7 Arrays \u7C7B\u7684 <code>asList()</code> \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> aList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>anArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684 ArrayList \u5E76\u4E0D\u662F <code>java.util.ArrayList</code>\uFF0C\u5B83\u5176\u5B9E\u662F Arrays \u7C7B\u7684\u4E00\u4E2A\u5185\u90E8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
        <span class="token keyword">implements</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u6DFB\u52A0\u5143\u7D20\u6216\u8005\u5220\u9664\u5143\u7D20\u7684\u8BDD\uFF0C\u9700\u8981\u628A\u5B83\u8F6C\u6210 <code>java.util.ArrayList</code>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>anArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Java 8 \u65B0\u589E\u4E86 Stream \u6D41\u7684\u6982\u5FF5\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u6570\u7EC4\u8F6C\u6210 Stream \u8FDB\u884C\u64CD\u4F5C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u597D\u597D\u73CD\u91CD\u4ED6&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> aStream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>anArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 Arrays \u7C7B\u63D0\u4F9B\u7684 <code>sort()</code> \u65B9\u6CD5\u3002</p><ul><li>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u6309\u7167\u5347\u5E8F\u6392\u5217</li><li>\u5B9E\u73B0\u4E86 Comparable \u63A5\u53E3\u7684\u5BF9\u8C61\u6309\u7167 <code>compareTo()</code> \u7684\u6392\u5E8F</li></ul><p>\u6765\u770B\u7B2C\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>anArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6765\u770B\u7B2C\u4E8C\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> yetAnotherArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Z&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>yetAnotherArray<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparing</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">::</span><span class="token function">toString</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u5BF9 1-3 \u4F4D\u7F6E\u4E0A\u7684\u5143\u7D20\u8FDB\u884C\u53CD\u5E8F\uFF0C\u6240\u4EE5\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[A, Z, E, B, C]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u4ECE\u6570\u7EC4\u4E2D\u67E5\u627E\u67D0\u4E2A\u5177\u4F53\u7684\u5143\u7D20\uFF0C\u6700\u76F4\u63A5\u7684\u65B9\u5F0F\u5C31\u662F\u901A\u8FC7\u904D\u5386\u7684\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> anArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>anArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u627E\u5230\u4E86 &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\u4ECE\u6570\u7EC4\u4E2D\u67E5\u8BE2\u5143\u7D20 4\uFF0C\u627E\u5230\u540E\u901A\u8FC7 break \u5173\u952E\u5B57\u9000\u51FA\u5FAA\u73AF\u3002</p><p>\u5982\u679C\u6570\u7EC4\u63D0\u524D\u8FDB\u884C\u4E86\u6392\u5E8F\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E8C\u5206\u67E5\u627E\u6CD5\uFF0C\u8FD9\u6837\u6548\u7387\u5C31\u4F1A\u66F4\u9AD8\u4E00\u4E9B\u3002<code>Arrays.binarySearch()</code> \u65B9\u6CD5\u53EF\u4F9B\u6211\u4EEC\u4F7F\u7528\uFF0C\u5B83\u9700\u8981\u4F20\u9012\u4E00\u4E2A\u6570\u7EC4\uFF0C\u548C\u8981\u67E5\u627E\u7684\u5143\u7D20\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> anArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>anArray<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u9664\u4E86\u4E00\u7EF4\u6570\u7EC4\uFF0C\u8FD8\u6709\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u4E09\u59B9\u4F60\u53EF\u4EE5\u53BB\u7814\u7A76\u4E0B\uFF0C\u6BD4\u5982\u8BF4\u7528\u4E8C\u7EF4\u6570\u7EC4\u6253\u5370\u4E00\u4E0B\u6768\u8F89\u4E09\u89D2\u3002\u201D\u8BF4\u5B8C\uFF0C\u6211\u5C31\u53BB\u9633\u53F0\u4E0A\u4F11\u606F\u4E86\uFF0C\u7559\u4E09\u59B9\u5728\u90A3\u91CC\u5B66\u4E60\uFF0C\u4E0D\u80FD\u6253\u6270\u5979\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,53);function b(g,y){const p=t("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[r,s("a",k,[d,l(p)]),v]),m])}var j=e(i,[["render",b],["__file","array.html.vue"]]);export{j as default};
