import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.07379250.js";const i={},l=e(`<h1 id="\u4E3A\u4EC0\u4E48jdk\u6E90\u7801\u4E2D-\u65E0\u9650\u5FAA\u73AF\u5927\u591A\u4F7F\u7528for-\u800C\u4E0D\u662Fwhile-true" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48jdk\u6E90\u7801\u4E2D-\u65E0\u9650\u5FAA\u73AF\u5927\u591A\u4F7F\u7528for-\u800C\u4E0D\u662Fwhile-true" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48JDK\u6E90\u7801\u4E2D\uFF0C\u65E0\u9650\u5FAA\u73AF\u5927\u591A\u4F7F\u7528for(;;)\u800C\u4E0D\u662Fwhile(true)?</h1><p>\u5728\u77E5\u4E4E\u4E0A\u770B\u5230 R \u5927\u7684\u8FD9\u7BC7\u56DE\u7B54\uFF0C\u7740\u5B9E\u611F\u89C9\u9700\u8981\u5206\u4EAB\u7ED9\u5728\u5EA7\u7684\u5404\u4F4D javaer \u4EEC\uFF0C\u771F\u5FC3\u900F\u5F7B\u3002</p><blockquote><p>https://www.zhihu.com/question/52311366/answer/130090347</p></blockquote><hr><p>\u9996\u5148\u662F\u5148\u95EE\u662F\u4E0D\u662F\u518D\u95EE\u4E3A\u4EC0\u4E48\u7CFB\u5217\u3002</p><p>\u5728JDK8u\u7684jdk\u9879\u76EE\u4E0B\u505A\u4E2A\u5F88\u7C97\u7565\u7684\u641C\u7D22\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mymbp:/Users/me/workspace/jdk8u/jdk/src
$ egrep -nr &quot;for \\\\(\\\\s?;\\\\s?;&quot; . | wc -l
     369
mymbp:/Users/me/workspace/jdk8u/jdk/src
$ egrep -nr &quot;while \\\\(true&quot; . | wc -l
     323
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u6CA1\u6709\u5DEE\u591A\u5C11\u3002</p><p>\u5176\u6B21\uFF0Cfor (;\u{1F609} \u5728Java\u4E2D\u7684\u6765\u6E90\u3002\u4E2A\u4EBA\u770B\u6CD5\u662F\u559C\u6B22\u7528\u8FD9\u79CD\u5199\u6CD5\u7684\u4EBA\uFF0C\u8FFD\u6839\u6EAF\u6E90\u662F\u53D7\u5230C\u8BED\u8A00\u91CC\u7684\u5199\u6CD5\u7684\u5F71\u54CD\u3002\u8FD9\u4E9B\u4EBA\u4E0D\u4E00\u5B9A\u662F\u81EA\u5DF1\u4EE5\u524D\u5199C\u4E60\u60EF\u4E86\u8FD9\u6837\u5199\uFF0C\u800C\u53EF\u80FD\u662F\u95F4\u63A5\u53D7\u4EE5\u524D\u5199C\u7684\u8001\u5E08\u3001\u524D\u8F88\u7684\u5F71\u54CD\u800C\u4E60\u60EF\u8FD9\u6837\u5199\u7684\u3002</p><p>\u5728C\u8BED\u8A00\u91CC\uFF0C\u5982\u679C\u4E0Dinclude\u67D0\u4E9B\u5934\u6587\u4EF6\u6216\u8005\u81EA\u5DF1\u58F0\u660E\u7684\u8BDD\uFF0C\u662F\u6CA1\u6709\u5185\u5EFA\u7684_Bool / bool\u7C7B\u578B\uFF0C\u4E5F\u6CA1\u6709TRUE / FALSE / true / false\u8FD9\u4E9B_Bool / bool\u7C7B\u578B\u503C\u7684\u5B57\u9762\u91CF\u7684\u3002</p><p>\u6240\u4EE5\uFF0C\u5047\u5B9A\u6CA1\u6709include\u90A3\u4E9B\u5934\u6587\u4EF6\u6216\u8005\u81EA\u5DF1define\u51FA\u4E0A\u8FF0\u5B57\u9762\u91CF\uFF0C\u4E00\u4E2A\u4E0D\u628A\u5FAA\u73AF\u6761\u4EF6\u5199\u5728while (...)\u62EC\u53F7\u91CC\u7684while\u8BED\u53E5\uFF0C\u6700\u5E38\u89C1\u7684\u662F\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>while (1) {
    /* ... */
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2026\u4F46\u4E0D\u662F\u6240\u6709\u4EBA\u90FD\u559C\u6B22\u770B\u5230\u90A3\u4E2A\u9B54\u6570\u201C1\u201D\u7684\u3002</p><p>\u800C\u7528for (;;)\u6765\u8868\u8FBE\u4E0D\u5199\u5FAA\u73AF\u6761\u4EF6\uFF08\u4E5F\u5C31\u662F\u5FAA\u73AF\u4F53\u5185\u4E0D\u7528break\u6216goto\u5C31\u4F1A\u662F\u65E0\u9650\u5FAA\u73AF\uFF09\u5219\u975E\u5E38\u76F4\u89C2\u2014\u2014\u8FD9\u5C31\u662Ffor\u8BED\u53E5\u672C\u8EAB\u7684\u529F\u80FD\uFF0C\u800C\u4E14\u4E0D\u9700\u8981\u5199\u4EFB\u4F55\u9B54\u6570\u3002\u6240\u4EE5\u8FD9\u4E2A\u5199\u6CD5\u5C31\u6D41\u4F20\u4E0B\u6765\u4E86\u3002</p><p>\u987A\u5E26\u4E00\u63D0\uFF0C\u5728Java\u91CC\u6211\u662F\u503E\u5411\u4E8E\u5199while (true)\u7684\uFF0C\u4E0D\u8FC7\u6211\u4E5F\u4E0D\u4ECB\u610F\u522B\u4EBA\u5728\u4ED6\u4EEC\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u5199for (;\u{1F609}\u3002</p><p>=====================================</p><p>\u81F3\u4E8EJava\u91CCwhile (true)\u4E0Efor (;;)\u54EA\u4E2A\u201C\u6548\u7387\u66F4\u9AD8\u201D\u3002\u8FD9\u79CD\u89C4\u8303\u6CA1\u6709\u89C4\u5B9A\u7684\u95EE\u9898\uFF0C\u7B54\u6848\u90FD\u662F\u201C\u770B\u5B9E\u73B0\u201D\uFF0C\u6BD5\u7ADF\u5B9E\u73B0\u53EA\u8981\u4FDD\u8BC1\u8BED\u4E49\u7B26\u5408\u89C4\u8303\u5C31\u884C\u4E86\uFF0C\u800C\u6548\u7387\u5E76\u4E0D\u5728\u89C4\u8303\u7BA1\u5F97\u7740\u7684\u8303\u7574\u5185\u3002</p><p>\u4EE5Oracle/Sun JDK8u / OpenJDK8u\u7684\u5B9E\u73B0\u6765\u770B\uFF0C\u9996\u5148\u770Bjavac\u5BF9\u4E0B\u9762\u4FE9\u8BED\u53E5\u7684\u7F16\u8BD1\u7ED3\u679C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">/*
  public void foo();
    Code:
      stack=1, locals=2, args_size=1
         0: iconst_0
         1: istore_1
         2: iinc          1, 1
         5: goto          2
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>\`\`\`

<span class="token comment">/*
  public void bar();
    Code:
      stack=1, locals=2, args_size=1
         0: iconst_0
         1: istore_1
         2: iinc          1, 1
         5: goto          2
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDEjavac\u8FD9\u79CD\u51E0\u4E4E\u4EC0\u4E48\u4F18\u5316\u90FD\u4E0D\u505A\uFF08\u53EA\u505A\u4E86Java\u8BED\u8A00\u89C4\u8303\u89C4\u5B9A\u4E00\u5B9A\u8981\u505A\u7684\u5E38\u91CF\u6298\u53E0\uFF0C\u548C\u975E\u5E38\u5C11\u91CF\u522B\u7684\u4F18\u5316\uFF09\u7684\u7F16\u8BD1\u5668\uFF0C\u5BF9\u4E0A\u9762\u4FE9\u7248\u672C\u7684\u4EE3\u7801\u90FD\u751F\u6210\u4E86\u4E00\u6837\u7684\u5B57\u8282\u7801\u3002\u540E\u9762\u5230\u89E3\u91CA\u6267\u884C\u3001JIT\u7F16\u8BD1\u4E4B\u7C7B\u7684\u5C31\u4E0D\u7528\u8BF4\u4E86\uFF0C\u8F93\u5165\u90FD\u4E00\u6837\uFF0C\u8F93\u51FA\u4E5F\u4E0D\u4F1A\u4E0D\u540C\u3002</p><hr><p>\u5206\u4EAB\u7684\u6700\u540E\uFF0C\u4E8C\u54E5\u7B80\u5355\u8BF4\u51E0\u53E5\u3002</p><p>\u53EF\u80FD\u5728\u6211\u4EEC\u666E\u901A\u4EBA\u773C\u4E2D\uFF0C\u8FD9\u79CD\u95EE\u9898\u5B8C\u5168\u6CA1\u6709\u6C42\u771F\u7684\u5FC5\u8981\u6027\uFF0C\u4F46 R\u5927\u8BA4\u771F\u53BB\u7814\u7A76\u4E86\uFF0C\u5E76\u4E14\u5F97\u51FA\u4E86\u975E\u5E38\u4EE4\u4EBA\u4FE1\u670D\u7684\u7B54\u6848\u3002</p><p>\u6240\u4EE5\uFF0C\u725B\u903C\u4E4B\u4EBA\u5FC5\u6709\u4E09\u8FDE\u4E4B\u5904\u554A\u3002</p><p>\u4EE5\u540E\u5C31\u53EF\u4EE5\u653E\u5FC3\u5927\u80C6\u5728\u4EE3\u7801\u91CC\u5199 <code>for(;;) while(true)</code> \u8FD9\u6837\u7684\u6B7B\u5FAA\u73AF\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,28),o=[l];function p(c,t){return s(),a("div",null,o)}var u=n(i,[["render",p],["__file","jdk-while-for-wuxian-xunhuan.html.vue"]]);export{u as default};
