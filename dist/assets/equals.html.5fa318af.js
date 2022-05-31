import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.07379250.js";const t={},e=p(`<h1 id="java\u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#java\u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49" aria-hidden="true">#</a> Java\u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49\uFF1F</h1><p>\u201C\u54E5\uFF0C\u5982\u4F55\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u7B49\u554A\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u8FD9\u4E2A\u95EE\u9898\u770B\u4F3C\u7B80\u5355\uFF0C\u5374\u5728 Stack Overflow \u4E0A\u6709\u8D85\u8FC7 370 \u4E07\u7684\u8BBF\u95EE\u91CF\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u8FD9\u4E2A\u95EE\u9898\u4E5F\u53EF\u4EE5\u5F15\u7533\u4E3A <code>.equals()</code> \u548C \u2018==\u2019 \u64CD\u4F5C\u7B26\u6709\u4EC0\u4E48\u533A\u522B\u3002\u201D</p><ul><li>\u201C==\u201D\u64CD\u4F5C\u7B26\u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5730\u5740\u662F\u5426\u76F8\u7B49\u3002</li><li><code>.equals()</code> \u65B9\u6CD5\u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5185\u5BB9\u662F\u5426\u76F8\u7B49\u3002</li></ul><p>\u201C\u4E0D\u662F\u5F88\u7406\u89E3\u3002\u201D\u4E09\u59B9\u611F\u5230\u5F88\u56F0\u60D1\u3002</p><p>\u201C\u6211\u6765\u4E3E\u4E2A\u4E0D\u6070\u5F53\u53C8\u5F88\u6070\u5F53\u7684\u4F8B\u5B50\uFF0C\u4E00\u770B\u4F60\u5C31\u660E\u767D\u4E86\uFF0C\u4E09\u59B9\u3002\u201D</p><p>\u6709\u4E00\u5BF9\u53CC\u80DE\u80CE\uFF0C\u59D0\u59D0\u53EB\u963F\u4E3D\u5854\uFF0C\u59B9\u59B9\u53EB\u6D1B\u4E3D\u5854\u3002\u6211\u4EEC\u666E\u901A\u4EBA\u53EF\u80FD\u5B8C\u5168\u65E0\u6CD5\u5206\u8FA8\u8C01\u662F\u59D0\u59D0\u8C01\u662F\u59B9\u59B9\uFF0C\u53EF\u5979\u4EEC\u7684\u5988\u5988\u5374\u53EF\u4EE5\u8F7B\u800C\u6613\u4E3E\u5730\u8FA8\u8BA4\u51FA\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/equals-01.png" alt=""></p><p><code>.equals()</code> \u5C31\u597D\u50CF\u6211\u4EEC\u666E\u901A\u4EBA\uFF0C\u770B\u89C1\u963F\u4E3D\u5854\u4EE5\u4E3A\u662F\u6D1B\u4E3D\u5854\uFF0C\u770B\u89C1\u6D1B\u4E3D\u5854\u4EE5\u4E3A\u662F\u963F\u4E3D\u5854\uFF0C\u770B\u8D77\u6765\u4E00\u6837\u5C31\u89C9\u5F97\u5979\u4EEC\u662F\u540C\u4E00\u4E2A\u4EBA\uFF1B\u201C==\u201D\u64CD\u4F5C\u7B26\u5C31\u597D\u50CF\u5979\u4EEC\u7684\u5988\u5988\uFF0C\u8981\u6C42\u66F4\u4E25\u683C\uFF0C\u89C2\u5BDF\u66F4\u7EC6\u81F4\uFF0C\u4E00\u773C\u5C31\u80FD\u5206\u8FA8\u51FA\u8C01\u662F\u59D0\u59D0\u8C01\u662F\u59B9\u59B9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> alita <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> luolita <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>alita<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>luolita<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>alita <span class="token operator">==</span> luolita<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C31\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u6765\u8BF4\uFF0C<code>.equals()</code> \u8F93\u51FA\u7684\u7ED3\u679C\u4E3A true\uFF0C\u800C\u201C==\u201D\u64CD\u4F5C\u7B26\u8F93\u51FA\u7684\u7ED3\u679C\u4E3A false\u2014\u2014\u524D\u8005\u8981\u6C42\u5185\u5BB9\u76F8\u7B49\u5C31\u53EF\u4EE5\uFF0C\u540E\u8005\u8981\u6C42\u5FC5\u987B\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u201C\u4E09\u59B9\uFF0C\u4E4B\u524D\u5DF2\u7ECF\u5B66\u8FC7\u4E86\uFF0CJava \u7684\u6240\u6709\u7C7B\u90FD\u9ED8\u8BA4\u5730\u7EE7\u627F Object \u8FD9\u4E2A\u8D85\u7C7B\uFF0C\u8BE5\u7C7B\u6709\u4E00\u4E2A\u540D\u4E3A <code>.equals()</code> \u7684\u65B9\u6CD5\u3002\u201D\u4E00\u8FB9\u8BF4\uFF0C\u6211\u4E00\u8FB9\u6253\u5F00\u4E86 Object \u7C7B\u7684\u6E90\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u770B\uFF0CObject \u7C7B\u7684 <code>.equals()</code> \u65B9\u6CD5\u9ED8\u8BA4\u91C7\u7528\u7684\u662F\u201C==\u201D\u64CD\u4F5C\u7B26\u8FDB\u884C\u6BD4\u8F83\u3002\u5047\u5982\u5B50\u7C7B\u6CA1\u6709\u91CD\u5199\u8BE5\u65B9\u6CD5\u7684\u8BDD\uFF0C\u90A3\u4E48\u201C==\u201D\u64CD\u4F5C\u7B26\u548C <code>.equals()</code> \u65B9\u6CD5\u7684\u529F\u6548\u5C31\u5B8C\u5168\u4E00\u6837\u2014\u2014\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\u662F\u5426\u76F8\u7B49\u3002</p><p>\u4F46\u5B9E\u9645\u60C5\u51B5\u4E2D\uFF0C\u6709\u4E0D\u5C11\u7C7B\u91CD\u5199\u4E86 <code>.equals()</code> \u65B9\u6CD5\uFF0C\u56E0\u4E3A\u6BD4\u8F83\u5185\u5B58\u5730\u5740\u7684\u8981\u6C42\u6BD4\u8F83\u4E25\u683C\uFF0C\u4E0D\u592A\u7B26\u5408\u73B0\u5B9E\u4E2D\u6240\u6709\u7684\u573A\u666F\u9700\u6C42\u3002\u62FF String \u7C7B\u6765\u8BF4\uFF0C\u6211\u4EEC\u5728\u6BD4\u8F83\u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u7684\u786E\u53EA\u60F3\u5224\u65AD\u5B83\u4EEC\u4FE9\u7684\u5185\u5BB9\u662F\u76F8\u7B49\u7684\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5E76\u4E0D\u60F3\u6BD4\u8F83\u5B83\u4EEC\u4FE9\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u51B5\u4E14\uFF0C\u5B57\u7B26\u4E32\u6709\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u7684\u6982\u5FF5\uFF0C\u672C\u8EAB\u5C31\u63A8\u8350\u4F7F\u7528 <code>String s = &quot;\u5B57\u7B26\u4E32&quot;</code> \u8FD9\u79CD\u5F62\u5F0F\u6765\u521B\u5EFA\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7 new \u5173\u952E\u5B57\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u628A\u5B57\u7B26\u4E32\u7F13\u5B58\u5728\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\uFF0C\u65B9\u4FBF\u4E0B\u6B21\u4F7F\u7528\u3002</p><p>\u201C\u54E6\uFF0C\u6211\u660E\u767D\u4E86\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u90A3\u5C31\u6765\u770B\u4E00\u4E0B <code>.equals()</code> \u65B9\u6CD5\u7684\u6E90\u7801\u5427\u3002\u201D\u6211\u8BF4\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>anObject <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> aString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>anObject<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> aString<span class="token punctuation">.</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">isLatin1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">StringLatin1</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> aString<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token operator">:</span> <span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> aString<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\uFF0C\u5982\u679C\u4E24\u4E2A\u5B57\u7B26\u4E32\u5BF9\u8C61\u7684\u53EF\u4EE5\u201C==\u201D\uFF0C\u90A3\u5C31\u76F4\u63A5\u8FD4\u56DE true \u4E86\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B57\u7B26\u4E32\u5185\u5BB9\u662F\u5FC5\u7136\u76F8\u7B49\u7684\u3002\u5426\u5219\u5C31\u6309\u7167\u5B57\u7B26\u7F16\u7801\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5206\u4E3A UTF16 \u548C Latin1\uFF0C\u5DEE\u522B\u4E0D\u662F\u5F88\u5927\uFF0C\u5C31\u62FF Latin1 \u7684\u6765\u8BF4\u5427\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@HotSpotIntrinsicCandidate</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">==</span> other<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> other<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u7684 JDK \u7248\u672C\u662F Java 11\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684 LTS\uFF08\u957F\u671F\u652F\u6301\uFF09\u7248\u672C\u3002\u8BE5\u7248\u672C\u4E2D\uFF0CString \u7C7B\u4F7F\u7528\u5B57\u8282\u6570\u7EC4\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u662F\u5426\u76F8\u7B49\u65F6\uFF0C\u53EF\u4EE5\u5148\u6BD4\u8F83\u5B57\u8282\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u5426\u76F8\u7B49\uFF0C\u4E0D\u76F8\u7B49\u5C31\u76F4\u63A5\u8FD4\u56DE false\uFF1B\u5426\u5219\u5C31\u904D\u5386\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u6570\u7EC4\uFF0C\u53EA\u6709\u6709\u4E00\u4E2A\u5B57\u8282\u4E0D\u76F8\u7B49\uFF0C\u5C31\u8FD4\u56DE false\u3002</p><p>\u201C\u55EF\uFF0C\u4E8C\u54E5\uFF0C\u8FD9\u6BB5\u6E90\u7801\u4E0D\u96BE\u7406\u89E3\u3002\u201D\u4E09\u59B9\u81EA\u4FE1\u5730\u8BF4\u3002</p><p>\u201C\u90A3\u51FA\u51E0\u9053\u9898\u8003\u8003\u4F60\u5427\uFF01\u201D\u6211\u8BF4\u3002</p><p>\u7B2C\u4E00\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u8F93\u51FA\u4EC0\u4E48\u5462\uFF1F\u201D\u6211\u95EE\u3002</p><p>\u201C<code>.equals()</code> \u6BD4\u8F83\u7684\u662F\u4E24\u4E2A\u5B57\u7B26\u4E32\u5BF9\u8C61\u7684\u5185\u5BB9\u662F\u5426\u76F8\u7B49\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A true\u3002\u201D\u4E09\u59B9\u7B54\u3002</p><p>\u7B2C\u4E8C\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C==\u64CD\u4F5C\u7B26\u5DE6\u4FA7\u7684\u662F\u5728\u5806\u4E2D\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u53F3\u4FA7\u662F\u5728\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684\u5BF9\u8C61\uFF0C\u5C3D\u7BA1\u5185\u5BB9\u76F8\u540C\uFF0C\u4F46\u5185\u5B58\u5730\u5740\u4E0D\u540C\uFF0C\u6240\u4EE5\u8FD4\u56DE false\u3002\u201D\u4E09\u59B9\u7B54\u3002</p><p>\u7B2C\u4E09\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201Cnew \u51FA\u6765\u7684\u5BF9\u8C61\u80AF\u5B9A\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u8FD4\u56DE false\u3002\u201D\u4E09\u59B9\u7B54\u3002</p><p>\u7B2C\u56DB\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u53EA\u4F1A\u6709\u4E00\u4E2A\u76F8\u540C\u5185\u5BB9\u7684\u5BF9\u8C61\uFF0C\u6240\u4EE5\u8FD4\u56DE true\u3002\u201D\u4E09\u59B9\u7B54\u3002</p><p>\u7B2C\u4E94\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;\u5C0F&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u841D\u8389&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u7531\u4E8E\u2018\u5C0F\u2019\u548C\u2018\u841D\u8389\u2019\u90FD\u5728\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\uFF0C\u6240\u4EE5\u7F16\u8BD1\u5668\u5728\u9047\u5230\u2018+\u2019\u64CD\u4F5C\u7B26\u7684\u65F6\u5019\u5C06\u5176\u81EA\u52A8\u4F18\u5316\u4E3A\u201C\u5C0F\u841D\u8389\u201D\uFF0C\u6240\u4EE5\u8FD4\u56DE true\u3002\u201D</p><p>\u7B2C\u516D\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C<code>new String(&quot;\u5C0F\u841D\u8389&quot;)</code> \u5728\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u5728\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u521B\u5EFA\u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u5728\u5806\u4E2D\u521B\u5EFA\u5BF9\u8C61\uFF1B\u6267\u884C <code>intern()</code> \u65B9\u6CD5\u7684\u65F6\u5019\u53D1\u73B0\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u5DF2\u7ECF\u6709\u4E86\u2018\u5C0F\u841D\u8389\u2019\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5C31\u76F4\u63A5\u8FD4\u56DE\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684\u5BF9\u8C61\u5F15\u7528\u4E86\uFF0C\u90A3\u518D\u4E0E\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684\u2018\u5C0F\u841D\u8389\u2019\u6BD4\u8F83\uFF0C\u5F53\u7136\u4F1A\u8FD4\u56DE true \u4E86\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><p>\u54C7\uFF0C\u4E0D\u5F97\u4E0D\u8BF4\uFF0C\u4E09\u59B9\u524D\u51E0\u8282\u7684\u5B57\u7B26\u4E32\u76F8\u5173\u5185\u5BB9\u90FD\u5B8C\u5168\u5B66\u4F1A\u4E86\u5440\uFF01</p><p>\u201C\u4E09\u59B9\uFF0C\u54E5\u518D\u7ED9\u4F60\u8865\u5145\u4E00\u70B9\u3002\u201D\u6211\u8BF4\u3002</p><p>\u201C\u5982\u679C\u8981\u8FDB\u884C\u4E24\u4E2A\u5B57\u7B26\u4E32\u5BF9\u8C61\u7684\u5185\u5BB9\u6BD4\u8F83\uFF0C\u9664\u4E86 <code>.equals()</code> \u65B9\u6CD5\uFF0C\u8FD8\u6709\u5176\u4ED6\u4E24\u4E2A\u53EF\u9009\u7684\u65B9\u6848\u3002\u201D</p><p>1\uFF09<code>Objects.equals()</code></p><p><code>Objects.equals()</code> \u8FD9\u4E2A\u9759\u6001\u65B9\u6CD5\u7684\u4F18\u52BF\u5728\u4E8E\u4E0D\u9700\u8981\u5728\u8C03\u7528\u4E4B\u524D\u5224\u7A7A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> a<span class="token punctuation">,</span> <span class="token class-name">Object</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u76F4\u63A5\u4F7F\u7528 <code>a.equals(b)</code>\uFF0C\u5219\u9700\u8981\u5728\u8C03\u7528\u4E4B\u524D\u5BF9 a \u8FDB\u884C\u5224\u7A7A\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u629B\u51FA\u7A7A\u6307\u9488 <code>java.lang.NullPointerException</code>\u3002<code>Objects.equals()</code> \u7528\u8D77\u6765\u5C31\u5B8C\u5168\u6CA1\u6709\u8FD9\u4E2A\u62C5\u5FC3\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u841D\u8389&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// --&gt; true</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// --&gt; false</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// --&gt; true</span>

<span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u841D\u8389&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throw exception</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\uFF09String \u7C7B\u7684 <code>.contentEquals()</code></p><p><code>.contentEquals()</code> \u7684\u4F18\u52BF\u5728\u4E8E\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u4E0E\u4EFB\u4F55\u7684\u5B57\u7B26\u5E8F\u5217\uFF08StringBuffer\u3001StringBuilder\u3001String\u3001CharSequence\uFF09\u8FDB\u884C\u6BD4\u8F83\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contentEquals</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> cs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Argument is a StringBuffer, StringBuilder</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cs <span class="token keyword">instanceof</span> <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cs <span class="token keyword">instanceof</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">nonSyncContentEquals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">)</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">nonSyncContentEquals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">)</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Argument is a String</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cs <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">equals</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Argument is a generic CharSequence</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> cs<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isLatin1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span> <span class="token operator">!=</span> cs<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">contentEquals</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> cs<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6E90\u7801\u4E0A\u53EF\u4EE5\u770B\u5F97\u51FA\uFF0C\u5982\u679C cs \u662F StringBuffer\uFF0C\u8BE5\u65B9\u6CD5\u8FD8\u4F1A\u8FDB\u884C\u540C\u6B65\uFF0C\u975E\u5E38\u7684\u667A\u80FD\u5316\uFF1B\u5982\u679C\u662F String \u7684\u8BDD\uFF0C\u5176\u5B9E\u8C03\u7528\u7684\u8FD8\u662F <code>equals()</code> \u65B9\u6CD5\u3002\u5F53\u7136\u4E86\uFF0C\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u4F7F\u7528\u8BE5\u65B9\u6CD5\u8FDB\u884C\u6BD4\u8F83\u7684\u65F6\u5019\uFF0C\u591A\u51FA\u6765\u4E86\u5F88\u591A\u6B65\u9AA4\uFF0C\u6027\u80FD\u4E0A\u6709\u4E9B\u635F\u5931\u3002</p><p>\u201C\u662F\u7684\uFF0C\u603B\u4F53\u4E0A\u611F\u89C9\u8FD8\u662F <code>Objects.equals()</code> \u6BD4\u8F83\u8212\u670D\u3002\u201D\u4E09\u59B9\u7684\u773C\u775B\u662F\u96EA\u4EAE\u7684\uFF0C\u53D1\u73B0\u4E86\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F18\u70B9\u3002</p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png">`,57),o=[e];function c(l,u){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","equals.html.vue"]]);export{r as default};
