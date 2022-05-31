import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c as p,a as n,b as s,e as c,d as e}from"./app.07379250.js";const i={},r=c(`<h1 id="java\u5E76\u53D1\u7F16\u7A0Bvolatile\u5173\u952E\u5B57\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#java\u5E76\u53D1\u7F16\u7A0Bvolatile\u5173\u952E\u5B57\u89E3\u6790" aria-hidden="true">#</a> Java\u5E76\u53D1\u7F16\u7A0Bvolatile\u5173\u952E\u5B57\u89E3\u6790</h1><h2 id="\u51E0\u4E2A\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u51E0\u4E2A\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u51E0\u4E2A\u57FA\u672C\u6982\u5FF5</h2><p>\u5728\u4ECB\u7ECDvolatile\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u56DE\u987E\u53CA\u4ECB\u7ECD\u51E0\u4E2A\u57FA\u672C\u7684\u6982\u5FF5\u3002</p><h3 id="\u5185\u5B58\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u5185\u5B58\u53EF\u89C1\u6027</h3><p>\u5728Java\u5185\u5B58\u6A21\u578B\u90A3\u4E00\u7AE0\u6211\u4EEC\u4ECB\u7ECD\u4E86JMM\u6709\u4E00\u4E2A\u4E3B\u5185\u5B58\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u6709\u81EA\u5DF1\u79C1\u6709\u7684\u5DE5\u4F5C\u5185\u5B58\uFF0C\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4FDD\u5B58\u4E86\u4E00\u4E9B\u53D8\u91CF\u5728\u4E3B\u5185\u5B58\u7684\u62F7\u8D1D\u3002</p><p><strong>\u5185\u5B58\u53EF\u89C1\u6027\uFF0C\u6307\u7684\u662F\u7EBF\u7A0B\u4E4B\u95F4\u7684\u53EF\u89C1\u6027\uFF0C\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u5171\u4EAB\u53D8\u91CF\u65F6\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u8BFB\u53D6\u5230\u8FD9\u4E2A\u4FEE\u6539\u540E\u7684\u503C</strong>\u3002</p><h3 id="\u91CD\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6392\u5E8F" aria-hidden="true">#</a> \u91CD\u6392\u5E8F</h3><p>\u4E3A\u4F18\u5316\u7A0B\u5E8F\u6027\u80FD\uFF0C\u5BF9\u539F\u6709\u7684\u6307\u4EE4\u6267\u884C\u987A\u5E8F\u8FDB\u884C\u4F18\u5316\u91CD\u65B0\u6392\u5E8F\u3002\u91CD\u6392\u5E8F\u53EF\u80FD\u53D1\u751F\u5728\u591A\u4E2A\u9636\u6BB5\uFF0C\u6BD4\u5982\u7F16\u8BD1\u91CD\u6392\u5E8F\u3001CPU\u91CD\u6392\u5E8F\u7B49\u3002</p><h3 id="happens-before\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#happens-before\u89C4\u5219" aria-hidden="true">#</a> happens-before\u89C4\u5219</h3><p>\u662F\u4E00\u4E2A\u7ED9\u7A0B\u5E8F\u5458\u4F7F\u7528\u7684\u89C4\u5219\uFF0C\u53EA\u8981\u7A0B\u5E8F\u5458\u5728\u5199\u4EE3\u7801\u7684\u65F6\u5019\u9075\u5FAAhappens-before\u89C4\u5219\uFF0CJVM\u5C31\u80FD\u4FDD\u8BC1\u6307\u4EE4\u5728\u591A\u7EBF\u7A0B\u4E4B\u95F4\u7684\u987A\u5E8F\u6027\u7B26\u5408\u7A0B\u5E8F\u5458\u7684\u9884\u671F\u3002</p><h2 id="volatile\u7684\u5185\u5B58\u8BED\u4E49" tabindex="-1"><a class="header-anchor" href="#volatile\u7684\u5185\u5B58\u8BED\u4E49" aria-hidden="true">#</a> volatile\u7684\u5185\u5B58\u8BED\u4E49</h2><p>\u5728Java\u4E2D\uFF0Cvolatile\u5173\u952E\u5B57\u6709\u7279\u6B8A\u7684\u5185\u5B58\u8BED\u4E49\u3002volatile\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u4E2A\u529F\u80FD\uFF1A</p><ul><li>\u4FDD\u8BC1\u53D8\u91CF\u7684<strong>\u5185\u5B58\u53EF\u89C1\u6027</strong></li><li>\u7981\u6B62volatile\u53D8\u91CF\u4E0E\u666E\u901A\u53D8\u91CF<strong>\u91CD\u6392\u5E8F</strong>\uFF08JSR133\u63D0\u51FA\uFF0CJava 5 \u5F00\u59CB\u624D\u6709\u8FD9\u4E2A\u201C\u589E\u5F3A\u7684volatile\u5185\u5B58\u8BED\u4E49\u201D\uFF09</li></ul><h3 id="\u5185\u5B58\u53EF\u89C1\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u53EF\u89C1\u6027-1" aria-hidden="true">#</a> \u5185\u5B58\u53EF\u89C1\u6027</h3><p>\u4EE5\u4E00\u6BB5\u793A\u4F8B\u4EE3\u7801\u5F00\u59CB\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// step 1</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// step 2</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// step 3</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// step 4</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u6BB5\u4EE3\u7801\u91CC\uFF0C\u6211\u4EEC\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u4FEE\u9970\u4E86\u4E00\u4E2A<code>boolean</code>\u7C7B\u578B\u7684\u53D8\u91CF<code>flag</code>\u3002</p><p>\u6240\u8C13\u5185\u5B58\u53EF\u89C1\u6027\uFF0C\u6307\u7684\u662F\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u5BF9<code>volatile</code>\u4FEE\u9970\u7684\u53D8\u91CF\u8FDB\u884C<strong>\u5199\u64CD\u4F5C</strong>\uFF08\u6BD4\u5982step 2\uFF09\u65F6\uFF0CJMM\u4F1A\u7ACB\u5373\u628A\u8BE5\u7EBF\u7A0B\u5BF9\u5E94\u7684\u672C\u5730\u5185\u5B58\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u7684\u503C\u5237\u65B0\u5230\u4E3B\u5185\u5B58\uFF1B\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u5BF9<code>volatile</code>\u4FEE\u9970\u7684\u53D8\u91CF\u8FDB\u884C<strong>\u8BFB\u64CD\u4F5C</strong>\uFF08\u6BD4\u5982step 3\uFF09\u65F6\uFF0CJMM\u4F1A\u628A\u7ACB\u5373\u8BE5\u7EBF\u7A0B\u5BF9\u5E94\u7684\u672C\u5730\u5185\u5B58\u7F6E\u4E3A\u65E0\u6548\uFF0C\u4ECE\u4E3B\u5185\u5B58\u4E2D\u8BFB\u53D6\u5171\u4EAB\u53D8\u91CF\u7684\u503C\u3002</p><blockquote><p>\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0Cvolatile\u4E0E\u9501\u5177\u6709\u76F8\u540C\u7684\u5185\u5B58\u6548\u679C\uFF0Cvolatile\u53D8\u91CF\u7684\u5199\u548C\u9501\u7684\u91CA\u653E\u5177\u6709\u76F8\u540C\u7684\u5185\u5B58\u8BED\u4E49\uFF0Cvolatile\u53D8\u91CF\u7684\u8BFB\u548C\u9501\u7684\u83B7\u53D6\u5177\u6709\u76F8\u540C\u7684\u5185\u5B58\u8BED\u4E49\u3002</p></blockquote><p>\u5047\u8BBE\u5728\u65F6\u95F4\u7EBF\u4E0A\uFF0C\u7EBF\u7A0BA\u5148\u6267\u884C\u65B9\u6CD5<code>writer</code>\u65B9\u6CD5\uFF0C\u7EBF\u7A0BB\u540E\u6267\u884C<code>reader</code>\u65B9\u6CD5\u3002\u90A3\u5FC5\u7136\u4F1A\u6709\u4E0B\u56FE\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/volatile-1f5e263e-dd3e-4fb9-a21f-67e160b3dbf2.jpg" alt="volatile\u5185\u5B58\u793A\u610F\u56FE"></p><p>\u800C\u5982\u679C<code>flag</code>\u53D8\u91CF<strong>\u6CA1\u6709</strong>\u7528<code>volatile</code>\u4FEE\u9970\uFF0C\u5728step 2\uFF0C\u7EBF\u7A0BA\u7684\u672C\u5730\u5185\u5B58\u91CC\u9762\u7684\u53D8\u91CF\u5C31\u4E0D\u4F1A\u7ACB\u5373\u66F4\u65B0\u5230\u4E3B\u5185\u5B58\uFF0C\u90A3\u968F\u540E\u7EBF\u7A0BB\u4E5F\u540C\u6837\u4E0D\u4F1A\u53BB\u4E3B\u5185\u5B58\u62FF\u6700\u65B0\u7684\u503C\uFF0C\u4ECD\u7136\u4F7F\u7528\u7EBF\u7A0BB\u672C\u5730\u5185\u5B58\u7F13\u5B58\u7684\u53D8\u91CF\u7684\u503C<code>a = 0\uFF0Cflag = false</code>\u3002</p><h3 id="\u7981\u6B62\u91CD\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u91CD\u6392\u5E8F" aria-hidden="true">#</a> \u7981\u6B62\u91CD\u6392\u5E8F</h3><p>\u5728JSR-133\u4E4B\u524D\u7684\u65E7\u7684Java\u5185\u5B58\u6A21\u578B\u4E2D\uFF0C\u662F\u5141\u8BB8volatile\u53D8\u91CF\u4E0E\u666E\u901A\u53D8\u91CF\u91CD\u6392\u5E8F\u7684\u3002\u90A3\u4E0A\u9762\u7684\u6848\u4F8B\u4E2D\uFF0C\u53EF\u80FD\u5C31\u4F1A\u88AB\u91CD\u6392\u5E8F\u6210\u4E0B\u5217\u65F6\u5E8F\u6765\u6267\u884C\uFF1A</p><ol><li>\u7EBF\u7A0BA\u5199volatile\u53D8\u91CF\uFF0Cstep 2\uFF0C\u8BBE\u7F6Eflag\u4E3Atrue\uFF1B</li><li>\u7EBF\u7A0BB\u8BFB\u540C\u4E00\u4E2Avolatile\uFF0Cstep 3\uFF0C\u8BFB\u53D6\u5230flag\u4E3Atrue\uFF1B</li><li>\u7EBF\u7A0BB\u8BFB\u666E\u901A\u53D8\u91CF\uFF0Cstep 4\uFF0C\u8BFB\u53D6\u5230 a = 0\uFF1B</li><li>\u7EBF\u7A0BA\u4FEE\u6539\u666E\u901A\u53D8\u91CF\uFF0Cstep 1\uFF0C\u8BBE\u7F6E a = 1\uFF1B</li></ol><p>\u53EF\u89C1\uFF0C\u5982\u679Cvolatile\u53D8\u91CF\u4E0E\u666E\u901A\u53D8\u91CF\u53D1\u751F\u4E86\u91CD\u6392\u5E8F\uFF0C\u867D\u7136volatile\u53D8\u91CF\u80FD\u4FDD\u8BC1\u5185\u5B58\u53EF\u89C1\u6027\uFF0C\u4E5F\u53EF\u80FD\u5BFC\u81F4\u666E\u901A\u53D8\u91CF\u8BFB\u53D6\u9519\u8BEF\u3002</p><p>\u6240\u4EE5\u5728\u65E7\u7684\u5185\u5B58\u6A21\u578B\u4E2D\uFF0Cvolatile\u7684\u5199-\u8BFB\u5C31\u4E0D\u80FD\u4E0E\u9501\u7684\u91CA\u653E-\u83B7\u53D6\u5177\u6709\u76F8\u540C\u7684\u5185\u5B58\u8BED\u4E49\u4E86\u3002\u4E3A\u4E86\u63D0\u4F9B\u4E00\u79CD\u6BD4\u9501\u66F4\u8F7B\u91CF\u7EA7\u7684<strong>\u7EBF\u7A0B\u95F4\u7684\u901A\u4FE1\u673A\u5236</strong>\uFF0C<strong>JSR-133</strong>\u4E13\u5BB6\u7EC4\u51B3\u5B9A\u589E\u5F3Avolatile\u7684\u5185\u5B58\u8BED\u4E49\uFF1A\u4E25\u683C\u9650\u5236\u7F16\u8BD1\u5668\u548C\u5904\u7406\u5668\u5BF9volatile\u53D8\u91CF\u4E0E\u666E\u901A\u53D8\u91CF\u7684\u91CD\u6392\u5E8F\u3002</p><p>\u7F16\u8BD1\u5668\u8FD8\u597D\u8BF4\uFF0CJVM\u662F\u600E\u4E48\u8FD8\u80FD\u9650\u5236\u5904\u7406\u5668\u7684\u91CD\u6392\u5E8F\u7684\u5462\uFF1F\u5B83\u662F\u901A\u8FC7<strong>\u5185\u5B58\u5C4F\u969C</strong>\u6765\u5B9E\u73B0\u7684\u3002</p><p>\u4EC0\u4E48\u662F\u5185\u5B58\u5C4F\u969C\uFF1F\u786C\u4EF6\u5C42\u9762\uFF0C\u5185\u5B58\u5C4F\u969C\u5206\u4E24\u79CD\uFF1A\u8BFB\u5C4F\u969C\uFF08Load Barrier\uFF09\u548C\u5199\u5C4F\u969C\uFF08Store Barrier\uFF09\u3002\u5185\u5B58\u5C4F\u969C\u6709\u4E24\u4E2A\u4F5C\u7528\uFF1A</p><ol><li>\u963B\u6B62\u5C4F\u969C\u4E24\u4FA7\u7684\u6307\u4EE4\u91CD\u6392\u5E8F\uFF1B</li><li>\u5F3A\u5236\u628A\u5199\u7F13\u51B2\u533A/\u9AD8\u901F\u7F13\u5B58\u4E2D\u7684\u810F\u6570\u636E\u7B49\u5199\u56DE\u4E3B\u5185\u5B58\uFF0C\u6216\u8005\u8BA9\u7F13\u5B58\u4E2D\u76F8\u5E94\u7684\u6570\u636E\u5931\u6548\u3002</li></ol><blockquote><p>\u6CE8\u610F\u8FD9\u91CC\u7684\u7F13\u5B58\u4E3B\u8981\u6307\u7684\u662FCPU\u7F13\u5B58\uFF0C\u5982L1\uFF0CL2\u7B49</p></blockquote><p>\u7F16\u8BD1\u5668\u5728<strong>\u751F\u6210\u5B57\u8282\u7801\u65F6</strong>\uFF0C\u4F1A\u5728\u6307\u4EE4\u5E8F\u5217\u4E2D\u63D2\u5165\u5185\u5B58\u5C4F\u969C\u6765\u7981\u6B62\u7279\u5B9A\u7C7B\u578B\u7684\u5904\u7406\u5668\u91CD\u6392\u5E8F\u3002\u7F16\u8BD1\u5668\u9009\u62E9\u4E86\u4E00\u4E2A<strong>\u6BD4\u8F83\u4FDD\u5B88\u7684JMM\u5185\u5B58\u5C4F\u969C\u63D2\u5165\u7B56\u7565</strong>\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u5728\u4EFB\u4F55\u5904\u7406\u5668\u5E73\u53F0\uFF0C\u4EFB\u4F55\u7A0B\u5E8F\u4E2D\u90FD\u80FD\u5F97\u5230\u6B63\u786E\u7684volatile\u5185\u5B58\u8BED\u4E49\u3002\u8FD9\u4E2A\u7B56\u7565\u662F\uFF1A</p><ul><li>\u5728\u6BCF\u4E2Avolatile\u5199\u64CD\u4F5C\u524D\u63D2\u5165\u4E00\u4E2AStoreStore\u5C4F\u969C\uFF1B</li><li>\u5728\u6BCF\u4E2Avolatile\u5199\u64CD\u4F5C\u540E\u63D2\u5165\u4E00\u4E2AStoreLoad\u5C4F\u969C\uFF1B</li><li>\u5728\u6BCF\u4E2Avolatile\u8BFB\u64CD\u4F5C\u540E\u63D2\u5165\u4E00\u4E2ALoadLoad\u5C4F\u969C\uFF1B</li><li>\u5728\u6BCF\u4E2Avolatile\u8BFB\u64CD\u4F5C\u540E\u518D\u63D2\u5165\u4E00\u4E2ALoadStore\u5C4F\u969C\u3002</li></ul><p>\u5927\u6982\u793A\u610F\u56FE\u662F\u8FD9\u4E2A\u6837\u5B50\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/volatile-aaa0fa44-341f-401f-bfb7-03d0c03dc2b1.png" alt="\u5185\u5B58\u5C4F\u969C"></p><blockquote><p>\u518D\u9010\u4E2A\u89E3\u91CA\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u5C4F\u969C\u3002\u6CE8\uFF1A\u4E0B\u8FF0Load\u4EE3\u8868\u8BFB\u64CD\u4F5C\uFF0CStore\u4EE3\u8868\u5199\u64CD\u4F5C</p><p><strong>LoadLoad\u5C4F\u969C</strong>\uFF1A\u5BF9\u4E8E\u8FD9\u6837\u7684\u8BED\u53E5Load1; LoadLoad; Load2\uFF0C\u5728Load2\u53CA\u540E\u7EED\u8BFB\u53D6\u64CD\u4F5C\u8981\u8BFB\u53D6\u7684\u6570\u636E\u88AB\u8BBF\u95EE\u524D\uFF0C\u4FDD\u8BC1Load1\u8981\u8BFB\u53D6\u7684\u6570\u636E\u88AB\u8BFB\u53D6\u5B8C\u6BD5\u3002<br><strong>StoreStore\u5C4F\u969C</strong>\uFF1A\u5BF9\u4E8E\u8FD9\u6837\u7684\u8BED\u53E5Store1; StoreStore; Store2\uFF0C\u5728Store2\u53CA\u540E\u7EED\u5199\u5165\u64CD\u4F5C\u6267\u884C\u524D\uFF0C\u8FD9\u4E2A\u5C4F\u969C\u4F1A\u628AStore1\u5F3A\u5236\u5237\u65B0\u5230\u5185\u5B58\uFF0C\u4FDD\u8BC1Store1\u7684\u5199\u5165\u64CD\u4F5C\u5BF9\u5176\u5B83\u5904\u7406\u5668\u53EF\u89C1\u3002<br><strong>LoadStore\u5C4F\u969C</strong>\uFF1A\u5BF9\u4E8E\u8FD9\u6837\u7684\u8BED\u53E5Load1; LoadStore; Store2\uFF0C\u5728Store2\u53CA\u540E\u7EED\u5199\u5165\u64CD\u4F5C\u88AB\u5237\u51FA\u524D\uFF0C\u4FDD\u8BC1Load1\u8981\u8BFB\u53D6\u7684\u6570\u636E\u88AB\u8BFB\u53D6\u5B8C\u6BD5\u3002<br><strong>StoreLoad\u5C4F\u969C</strong>\uFF1A\u5BF9\u4E8E\u8FD9\u6837\u7684\u8BED\u53E5Store1; StoreLoad; Load2\uFF0C\u5728Load2\u53CA\u540E\u7EED\u6240\u6709\u8BFB\u53D6\u64CD\u4F5C\u6267\u884C\u524D\uFF0C\u4FDD\u8BC1Store1\u7684\u5199\u5165\u5BF9\u6240\u6709\u5904\u7406\u5668\u53EF\u89C1\u3002\u5B83\u7684\u5F00\u9500\u662F\u56DB\u79CD\u5C4F\u969C\u4E2D\u6700\u5927\u7684\uFF08\u51B2\u5237\u5199\u7F13\u51B2\u5668\uFF0C\u6E05\u7A7A\u65E0\u6548\u5316\u961F\u5217\uFF09\u3002\u5728\u5927\u591A\u6570\u5904\u7406\u5668\u7684\u5B9E\u73B0\u4E2D\uFF0C\u8FD9\u4E2A\u5C4F\u969C\u662F\u4E2A\u4E07\u80FD\u5C4F\u969C\uFF0C\u517C\u5177\u5176\u5B83\u4E09\u79CD\u5185\u5B58\u5C4F\u969C\u7684\u529F\u80FD</p></blockquote><p>\u5BF9\u4E8E\u8FDE\u7EED\u591A\u4E2Avolatile\u53D8\u91CF\u8BFB\u6216\u8005\u8FDE\u7EED\u591A\u4E2Avolatile\u53D8\u91CF\u5199\uFF0C\u7F16\u8BD1\u5668\u505A\u4E86\u4E00\u5B9A\u7684\u4F18\u5316\u6765\u63D0\u9AD8\u6027\u80FD\uFF0C\u6BD4\u5982\uFF1A</p><blockquote><p>\u7B2C\u4E00\u4E2Avolatile\u8BFB;</p><p>LoadLoad\u5C4F\u969C\uFF1B</p><p>\u7B2C\u4E8C\u4E2Avolatile\u8BFB\uFF1B</p><p>LoadStore\u5C4F\u969C</p></blockquote><p>\u518D\u4ECB\u7ECD\u4E00\u4E0Bvolatile\u4E0E\u666E\u901A\u53D8\u91CF\u7684\u91CD\u6392\u5E8F\u89C4\u5219:</p><ol><li><p>\u5982\u679C\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u662Fvolatile\u8BFB\uFF0C\u90A3\u65E0\u8BBA\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u662F\u4EC0\u4E48\uFF0C\u90FD\u4E0D\u80FD\u91CD\u6392\u5E8F\uFF1B</p></li><li><p>\u5982\u679C\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u662Fvolatile\u5199\uFF0C\u90A3\u65E0\u8BBA\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u662F\u4EC0\u4E48\uFF0C\u90FD\u4E0D\u80FD\u91CD\u6392\u5E8F\uFF1B</p></li><li><p>\u5982\u679C\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u662Fvolatile\u5199\uFF0C\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u662Fvolatile\u8BFB\uFF0C\u90A3\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002</p></li></ol><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5728\u6848\u4F8B\u4E2Dstep 1\uFF0C\u662F\u666E\u901A\u53D8\u91CF\u7684\u5199\uFF0Cstep 2\u662Fvolatile\u53D8\u91CF\u7684\u5199\uFF0C\u90A3\u7B26\u5408\u7B2C2\u4E2A\u89C4\u5219\uFF0C\u8FD9\u4E24\u4E2Asteps\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002\u800Cstep 3\u662Fvolatile\u53D8\u91CF\u8BFB\uFF0Cstep 4\u662F\u666E\u901A\u53D8\u91CF\u8BFB\uFF0C\u7B26\u5408\u7B2C1\u4E2A\u89C4\u5219\uFF0C\u540C\u6837\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002</p><p>\u4F46\u5982\u679C\u662F\u4E0B\u5217\u60C5\u51B5\uFF1A\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u662F\u666E\u901A\u53D8\u91CF\u8BFB\uFF0C\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u662Fvolatile\u53D8\u91CF\u8BFB\uFF0C\u90A3\u662F\u53EF\u4EE5\u91CD\u6392\u5E8F\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u58F0\u660E\u53D8\u91CF</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u58F0\u660E\u666E\u901A\u53D8\u91CF</span>
<span class="token keyword">volatile</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u58F0\u660Evolatile\u53D8\u91CF</span>

<span class="token comment">// \u4EE5\u4E0B\u4E24\u4E2A\u53D8\u91CF\u7684\u8BFB\u64CD\u4F5C\u662F\u53EF\u4EE5\u91CD\u6392\u5E8F\u7684</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// \u666E\u901A\u53D8\u91CF\u8BFB</span>
<span class="token keyword">boolean</span> j <span class="token operator">=</span> flag<span class="token punctuation">;</span> <span class="token comment">// volatile\u53D8\u91CF\u8BFB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volatile\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#volatile\u7684\u7528\u9014" aria-hidden="true">#</a> volatile\u7684\u7528\u9014</h2><p>\u4ECEvolatile\u7684\u5185\u5B58\u8BED\u4E49\u4E0A\u6765\u770B\uFF0Cvolatile\u53EF\u4EE5\u4FDD\u8BC1\u5185\u5B58\u53EF\u89C1\u6027\u4E14\u7981\u6B62\u91CD\u6392\u5E8F\u3002</p><p>\u5728\u4FDD\u8BC1\u5185\u5B58\u53EF\u89C1\u6027\u8FD9\u4E00\u70B9\u4E0A\uFF0Cvolatile\u6709\u7740\u4E0E\u9501\u76F8\u540C\u7684\u5185\u5B58\u8BED\u4E49\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u201C\u8F7B\u91CF\u7EA7\u201D\u7684\u9501\u6765\u4F7F\u7528\u3002\u4F46\u7531\u4E8Evolatile\u4EC5\u4EC5\u4FDD\u8BC1\u5BF9\u5355\u4E2Avolatile\u53D8\u91CF\u7684\u8BFB/\u5199\u5177\u6709\u539F\u5B50\u6027\uFF0C\u800C\u9501\u53EF\u4EE5\u4FDD\u8BC1\u6574\u4E2A<strong>\u4E34\u754C\u533A\u4EE3\u7801</strong>\u7684\u6267\u884C\u5177\u6709\u539F\u5B50\u6027\u3002\u6240\u4EE5<strong>\u5728\u529F\u80FD\u4E0A\uFF0C\u9501\u6BD4volatile\u66F4\u5F3A\u5927\uFF1B\u5728\u6027\u80FD\u4E0A\uFF0Cvolatile\u66F4\u6709\u4F18\u52BF</strong>\u3002</p><p>\u5728\u7981\u6B62\u91CD\u6392\u5E8F\u8FD9\u4E00\u70B9\u4E0A\uFF0Cvolatile\u4E5F\u662F\u975E\u5E38\u6709\u7528\u7684\u3002\u6BD4\u5982\u6211\u4EEC\u719F\u6089\u7684\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5176\u4E2D\u6709\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u662F\u201C\u53CC\u91CD\u9501\u68C0\u67E5\u201D\uFF0C\u6BD4\u5982\u8FD9\u6837\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u4F7F\u7528volatile\u5173\u952E\u5B57</span>
    
    <span class="token comment">// \u53CC\u91CD\u9501\u68C0\u9A8C</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7B2C7\u884C</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7B2C10\u884C</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8FD9\u91CC\u7684\u53D8\u91CF\u58F0\u660E\u4E0D\u4F7F\u7528volatile\u5173\u952E\u5B57\uFF0C\u662F\u53EF\u80FD\u4F1A\u53D1\u751F\u9519\u8BEF\u7684\u3002\u5B83\u53EF\u80FD\u4F1A\u88AB\u91CD\u6392\u5E8F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7B2C10\u884C</span>

<span class="token comment">// \u53EF\u4EE5\u5206\u89E3\u4E3A\u4EE5\u4E0B\u4E09\u4E2A\u6B65\u9AA4</span>
<span class="token number">1</span> memory<span class="token operator">=</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5206\u914D\u5185\u5B58 \u76F8\u5F53\u4E8Ec\u7684malloc</span>
<span class="token number">2</span> <span class="token function">ctorInstanc</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span> <span class="token comment">//\u521D\u59CB\u5316\u5BF9\u8C61</span>
<span class="token number">3</span> s<span class="token operator">=</span>memory <span class="token comment">//\u8BBE\u7F6Es\u6307\u5411\u521A\u5206\u914D\u7684\u5730\u5740</span>

<span class="token comment">// \u4E0A\u8FF0\u4E09\u4E2A\u6B65\u9AA4\u53EF\u80FD\u4F1A\u88AB\u91CD\u6392\u5E8F\u4E3A 1-3-2\uFF0C\u4E5F\u5C31\u662F\uFF1A</span>
<span class="token number">1</span> memory<span class="token operator">=</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5206\u914D\u5185\u5B58 \u76F8\u5F53\u4E8Ec\u7684malloc</span>
<span class="token number">3</span> s<span class="token operator">=</span>memory <span class="token comment">//\u8BBE\u7F6Es\u6307\u5411\u521A\u5206\u914D\u7684\u5730\u5740</span>
<span class="token number">2</span> <span class="token function">ctorInstanc</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span> <span class="token comment">//\u521D\u59CB\u5316\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u4E00\u65E6\u5047\u8BBE\u53D1\u751F\u4E86\u8FD9\u6837\u7684\u91CD\u6392\u5E8F\uFF0C\u6BD4\u5982\u7EBF\u7A0BA\u5728\u7B2C10\u884C\u6267\u884C\u4E86\u6B65\u9AA41\u548C\u6B65\u9AA43\uFF0C\u4F46\u662F\u6B65\u9AA42\u8FD8\u6CA1\u6709\u6267\u884C\u5B8C\u3002\u8FD9\u4E2A\u65F6\u5019\u53E6\u4E00\u4E2A\u7EBF\u7A0BB\u6267\u884C\u5230\u4E86\u7B2C7\u884C\uFF0C\u5B83\u4F1A\u5224\u5B9Ainstance\u4E0D\u4E3A\u7A7A\uFF0C\u7136\u540E\u76F4\u63A5\u8FD4\u56DE\u4E86\u4E00\u4E2A\u672A\u521D\u59CB\u5316\u5B8C\u6210\u7684instance\uFF01</p><p>\u6240\u4EE5JSR-133\u5BF9volatile\u505A\u4E86\u589E\u5F3A\u540E\uFF0Cvolatile\u7684\u7981\u6B62\u91CD\u6392\u5E8F\u529F\u80FD\u8FD8\u662F\u975E\u5E38\u6709\u7528\u7684\u3002</p><hr>`,53),d=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),u={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},v=e("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),k={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m=e("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),b={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},h=e("Java\u516B\u80A1\u6587"),g=n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png"},null,-1);function f(y,S){const a=t("ExternalLinkIcon");return l(),p("div",null,[r,n("blockquote",null,[d,n("ul",null,[n("li",null,[n("a",u,[v,s(a)])]),n("li",null,[n("a",k,[m,s(a)])]),n("li",null,[n("a",b,[h,s(a)])])])]),g])}var L=o(i,[["render",f],["__file","volatile.html.vue"]]);export{L as default};
