import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as a,e as i,d as t}from"./app.07379250.js";const l={},r=i(`<h2 id="copyonwritearraylist\u7684\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist\u7684\u7B80\u4ECB" aria-hidden="true">#</a> CopyOnWriteArrayList\u7684\u7B80\u4ECB</h2><p>java\u5B66\u4E60\u8005\u90FD\u6E05\u695AArrayList\u5E76\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u5728\u8BFB\u7EBF\u7A0B\u5728\u8BFB\u53D6ArrayList\u7684\u65F6\u5019\u5982\u679C\u6709\u5199\u7EBF\u7A0B\u5728\u5199\u6570\u636E\u7684\u65F6\u5019\uFF0C\u57FA\u4E8Efast-fail\u673A\u5236\uFF0C\u4F1A\u629B\u51FA<strong>ConcurrentModificationException</strong>\u5F02\u5E38\uFF0C\u4E5F\u5C31\u662F\u8BF4ArrayList\u5E76\u4E0D\u662F\u4E00\u4E2A\u7EBF\u7A0B\u5B89\u5168\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u60A8\u53EF\u4EE5\u7528Vector,\u6216\u8005\u4F7F\u7528Collections\u7684\u9759\u6001\u65B9\u6CD5\u5C06ArrayList\u5305\u88C5\u6210\u4E00\u4E2A\u7EBF\u7A0B\u5B89\u5168\u7684\u7C7B\uFF0C\u4F46\u662F\u8FD9\u4E9B\u65B9\u5F0F\u90FD\u662F\u91C7\u7528java\u5173\u952E\u5B57synchronzied\u5BF9\u65B9\u6CD5\u8FDB\u884C\u4FEE\u9970\uFF0C\u5229\u7528\u72EC\u5360\u5F0F\u9501\u6765\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\u7684\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u72EC\u5360\u5F0F\u9501\u5728\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u80FD\u591F\u83B7\u53D6\u5230\u5BF9\u8C61\u76D1\u89C6\u5668\uFF0C\u5F88\u663E\u7136\u8FD9\u79CD\u65B9\u5F0F\u6548\u7387\u5E76\u4E0D\u662F\u592A\u9AD8\u3002</p><p>\u56DE\u5230\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u6709\u5F88\u591A\u4E1A\u52A1\u5F80\u5F80\u662F\u8BFB\u591A\u5199\u5C11\u7684\uFF0C\u6BD4\u5982\u7CFB\u7EDF\u914D\u7F6E\u7684\u4FE1\u606F\uFF0C\u9664\u4E86\u5728\u521D\u59CB\u8FDB\u884C\u7CFB\u7EDF\u914D\u7F6E\u7684\u65F6\u5019\u9700\u8981\u5199\u5165\u6570\u636E\uFF0C\u5176\u4ED6\u5927\u90E8\u5206\u65F6\u523B\u5176\u4ED6\u6A21\u5757\u4E4B\u540E\u5BF9\u7CFB\u7EDF\u4FE1\u606F\u53EA\u9700\u8981\u8FDB\u884C\u8BFB\u53D6\uFF0C\u53C8\u6BD4\u5982\u767D\u540D\u5355\uFF0C\u9ED1\u540D\u5355\u7B49\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u8BFB\u53D6\u540D\u5355\u914D\u7F6E\u7136\u540E\u68C0\u6D4B\u5F53\u524D\u7528\u6237\u662F\u5426\u5728\u8BE5\u914D\u7F6E\u8303\u56F4\u4EE5\u5185\u3002</p><p>\u7C7B\u4F3C\u7684\u8FD8\u6709\u5F88\u591A\u4E1A\u52A1\u573A\u666F\uFF0C\u5B83\u4EEC\u90FD\u662F\u5C5E\u4E8E<strong>\u8BFB\u591A\u5199\u5C11</strong>\u7684\u573A\u666F\u3002\u5982\u679C\u5728\u8FD9\u79CD\u60C5\u51B5\u7528\u5230\u4E0A\u8FF0\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528Vector,Collections\u8F6C\u6362\u7684\u8FD9\u4E9B\u65B9\u5F0F\u662F\u4E0D\u5408\u7406\u7684\uFF0C\u56E0\u4E3A\u5C3D\u7BA1\u591A\u4E2A\u8BFB\u7EBF\u7A0B\u4ECE\u540C\u4E00\u4E2A\u6570\u636E\u5BB9\u5668\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u4F46\u662F\u8BFB\u7EBF\u7A0B\u5BF9\u6570\u636E\u5BB9\u5668\u7684\u6570\u636E\u5E76\u4E0D\u4F1A\u53D1\u751F\u53D1\u751F\u4FEE\u6539\u3002</p><p>\u5F88\u81EA\u7136\u800C\u7136\u7684\u6211\u4EEC\u4F1A\u8054\u60F3\u5230ReenTrantReadWriteLock\uFF0C\u901A\u8FC7<strong>\u8BFB\u5199\u5206\u79BB</strong>\u7684\u601D\u60F3\uFF0C\u4F7F\u5F97\u8BFB\u8BFB\u4E4B\u95F4\u4E0D\u4F1A\u963B\u585E\uFF0C\u65E0\u7591\u5982\u679C\u4E00\u4E2Alist\u80FD\u591F\u505A\u5230\u88AB\u591A\u4E2A\u8BFB\u7EBF\u7A0B\u8BFB\u53D6\u7684\u8BDD\uFF0C\u6027\u80FD\u4F1A\u5927\u5927\u63D0\u5347\u4E0D\u5C11\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4EC5\u4EC5\u662F\u5C06list\u901A\u8FC7\u8BFB\u5199\u9501\uFF08ReentrantReadWriteLock\uFF09\u8FDB\u884C\u518D\u4E00\u6B21\u5C01\u88C5\u7684\u8BDD\uFF0C\u7531\u4E8E\u8BFB\u5199\u9501\u7684\u7279\u6027\uFF0C\u5F53\u5199\u9501\u88AB\u5199\u7EBF\u7A0B\u83B7\u53D6\u540E\uFF0C\u8BFB\u5199\u7EBF\u7A0B\u90FD\u4F1A\u88AB\u963B\u585E\u3002\u5982\u679C\u4EC5\u4EC5\u4F7F\u7528\u8BFB\u5199\u9501\u5BF9list\u8FDB\u884C\u5C01\u88C5\u7684\u8BDD\uFF0C\u8FD9\u91CC\u4ECD\u7136\u5B58\u5728\u8BFB\u7EBF\u7A0B\u5728\u8BFB\u6570\u636E\u7684\u65F6\u5019\u88AB\u963B\u585E\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u60F3list\u7684\u8BFB\u6548\u7387\u66F4\u9AD8\u7684\u8BDD\uFF0C\u8FD9\u91CC\u5C31\u662F\u6211\u4EEC\u7684\u7A81\u7834\u53E3\uFF0C\u5982\u679C\u6211\u4EEC\u4FDD\u8BC1\u8BFB\u7EBF\u7A0B\u65E0\u8BBA\u4EC0\u4E48\u65F6\u5019\u90FD\u4E0D\u88AB\u963B\u585E\uFF0C\u6548\u7387\u5C82\u4E0D\u662F\u4F1A\u66F4\u9AD8\uFF1F</p><p>Doug Lea\u5927\u5E08\u5C31\u4E3A\u6211\u4EEC\u63D0\u4F9BCopyOnWriteArrayList\u5BB9\u5668\u53EF\u4EE5\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\uFF0C\u4FDD\u8BC1\u8BFB\u8BFB\u4E4B\u95F4\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u4E0D\u4F1A\u88AB\u963B\u585E\uFF0CCopyOnWriteArrayList\u4E5F\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5F88\u591A\u4E1A\u52A1\u573A\u666F\u4E4B\u4E2D\uFF0CCopyOnWriteArrayList\u503C\u5F97\u88AB\u6211\u4EEC\u597D\u597D\u8BA4\u8BC6\u4E00\u756A\u3002</p><h2 id="cow\u7684\u8BBE\u8BA1\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#cow\u7684\u8BBE\u8BA1\u601D\u60F3" aria-hidden="true">#</a> COW\u7684\u8BBE\u8BA1\u601D\u60F3</h2><p>\u56DE\u5230\u4E0A\u9762\u6240\u8BF4\u7684\uFF0C\u5982\u679C\u7B80\u5355\u7684\u4F7F\u7528\u8BFB\u5199\u9501\u7684\u8BDD\uFF0C\u5728\u5199\u9501\u88AB\u83B7\u53D6\u4E4B\u540E\uFF0C\u8BFB\u5199\u7EBF\u7A0B\u88AB\u963B\u585E\uFF0C\u53EA\u6709\u5F53\u5199\u9501\u88AB\u91CA\u653E\u540E\u8BFB\u7EBF\u7A0B\u624D\u6709\u673A\u4F1A\u83B7\u53D6\u5230\u9501\u4ECE\u800C\u8BFB\u5230\u6700\u65B0\u7684\u6570\u636E\uFF0C\u7AD9\u5728<strong>\u8BFB\u7EBF\u7A0B\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u5373\u8BFB\u7EBF\u7A0B\u4EFB\u4F55\u65F6\u5019\u90FD\u662F\u83B7\u53D6\u5230\u6700\u65B0\u7684\u6570\u636E\uFF0C\u6EE1\u8DB3\u6570\u636E\u5B9E\u65F6\u6027</strong>\u3002</p><p>\u65E2\u7136\u6211\u4EEC\u8BF4\u5230\u8981\u8FDB\u884C\u4F18\u5316\uFF0C\u5FC5\u7136\u6709trade-off,\u6211\u4EEC\u5C31\u53EF\u4EE5<strong>\u727A\u7272\u6570\u636E\u5B9E\u65F6\u6027\u6EE1\u8DB3\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u5373\u53EF</strong>\u3002\u800CCopyOnWriteArrayList\u5C31\u662F\u901A\u8FC7Copy-On-Write(COW)\uFF0C\u5373\u5199\u65F6\u590D\u5236\u7684\u601D\u60F3\u6765\u901A\u8FC7\u5EF6\u65F6\u66F4\u65B0\u7684\u7B56\u7565\u6765\u5B9E\u73B0\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u5E76\u4E14\u80FD\u591F\u4FDD\u8BC1\u8BFB\u7EBF\u7A0B\u95F4\u4E0D\u963B\u585E\u3002</p><p>COW\u901A\u4FD7\u7684\u7406\u89E3\u662F\u5F53\u6211\u4EEC\u5F80\u4E00\u4E2A\u5BB9\u5668\u6DFB\u52A0\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u4E0D\u76F4\u63A5\u5F80\u5F53\u524D\u5BB9\u5668\u6DFB\u52A0\uFF0C\u800C\u662F\u5148\u5C06\u5F53\u524D\u5BB9\u5668\u8FDB\u884CCopy\uFF0C\u590D\u5236\u51FA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\uFF0C\u7136\u540E\u65B0\u7684\u5BB9\u5668\u91CC\u6DFB\u52A0\u5143\u7D20\uFF0C\u6DFB\u52A0\u5B8C\u5143\u7D20\u4E4B\u540E\uFF0C\u518D\u5C06\u539F\u5BB9\u5668\u7684\u5F15\u7528\u6307\u5411\u65B0\u7684\u5BB9\u5668\u3002</p><p>\u5BF9CopyOnWrite\u5BB9\u5668\u8FDB\u884C\u5E76\u53D1\u7684\u8BFB\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u52A0\u9501\uFF0C\u56E0\u4E3A\u5F53\u524D\u5BB9\u5668\u4E0D\u4F1A\u6DFB\u52A0\u4EFB\u4F55\u5143\u7D20\u3002\u6240\u4EE5CopyOnWrite\u5BB9\u5668\u4E5F\u662F\u4E00\u79CD\u8BFB\u5199\u5206\u79BB\u7684\u601D\u60F3\uFF0C\u5EF6\u65F6\u66F4\u65B0\u7684\u7B56\u7565\u662F\u901A\u8FC7\u5728\u5199\u7684\u65F6\u5019\u9488\u5BF9\u7684\u662F\u4E0D\u540C\u7684\u6570\u636E\u5BB9\u5668\u6765\u5B9E\u73B0\u7684\uFF0C\u653E\u5F03\u6570\u636E\u5B9E\u65F6\u6027\u8FBE\u5230\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002</p><h2 id="copyonwritearraylist\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> CopyOnWriteArrayList\u7684\u5B9E\u73B0\u539F\u7406</h2><p>\u73B0\u5728\u6211\u4EEC\u6765\u901A\u8FC7\u770B\u6E90\u7801\u7684\u65B9\u5F0F\u6765\u7406\u89E3CopyOnWriteArrayList\uFF0C\u5B9E\u9645\u4E0ACopyOnWriteArrayList\u5185\u90E8\u7EF4\u62A4\u7684\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/** The array, accessed only via getArray/setArray. */</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u8BE5\u6570\u7EC4\u5F15\u7528\u662F\u88ABvolatile\u4FEE\u9970\uFF0C\u6CE8\u610F\u8FD9\u91CC<strong>\u4EC5\u4EC5\u662F\u4FEE\u9970\u7684\u662F\u6570\u7EC4\u5F15\u7528</strong>\uFF0C\u5176\u4E2D\u53E6\u6709\u7384\u673A\uFF0C\u7A0D\u540E\u63ED\u6653\u3002\u5173\u4E8Evolatile\u5F88\u91CD\u8981\u7684\u4E00\u6761\u6027\u8D28\u662F\u5B83\u80FD\u591F\u591F\u4FDD\u8BC1\u53EF\u89C1\u6027\u3002\u5BF9list\u6765\u8BF4\uFF0C\u6211\u4EEC\u81EA\u7136\u800C\u7136\u6700\u5173\u5FC3\u7684\u5C31\u662F\u8BFB\u5199\u7684\u65F6\u5019\uFF0C\u5206\u522B\u4E3Aget\u548Cadd\u65B9\u6CD5\u7684\u5B9E\u73B0\u3002</p><h3 id="get\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#get\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> get\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406</h3><p>get\u65B9\u6CD5\u7684\u6E90\u7801\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Gets the array.  Non-private so as to also be accessible
 * from CopyOnWriteArraySet class.
 */</span>
<span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u51FA\u6765get\u65B9\u6CD5\u5B9E\u73B0\u975E\u5E38\u7B80\u5355\uFF0C\u51E0\u4E4E\u5C31\u662F\u4E00\u4E2A\u201C\u5355\u7EBF\u7A0B\u201D\u7A0B\u5E8F\uFF0C\u6CA1\u6709\u5BF9\u591A\u7EBF\u7A0B\u6DFB\u52A0\u4EFB\u4F55\u7684\u7EBF\u7A0B\u5B89\u5168\u63A7\u5236\uFF0C\u4E5F\u6CA1\u6709\u52A0\u9501\u4E5F\u6CA1\u6709CAS\u64CD\u4F5C\u7B49\u7B49\uFF0C\u539F\u56E0\u662F\uFF0C\u6240\u6709\u7684\u8BFB\u7EBF\u7A0B\u53EA\u662F\u4F1A\u8BFB\u53D6\u6570\u636E\u5BB9\u5668\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u4E0D\u4F1A\u8FDB\u884C\u4FEE\u6539\u3002</p><h3 id="add\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#add\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> add\u65B9\u6CD5\u5B9E\u73B0\u539F\u7406</h3><p>\u518D\u6765\u770B\u4E0B\u5982\u4F55\u8FDB\u884C\u6DFB\u52A0\u6570\u636E\u7684\uFF1Fadd\u65B9\u6CD5\u7684\u6E90\u7801\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
	  <span class="token comment">//1. \u4F7F\u7528Lock,\u4FDD\u8BC1\u5199\u7EBF\u7A0B\u5728\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A</span>
    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">//2. \u83B7\u53D6\u65E7\u6570\u7EC4\u5F15\u7528</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

				<span class="token comment">//3. \u521B\u5EFA\u65B0\u7684\u6570\u7EC4\uFF0C\u5E76\u5C06\u65E7\u6570\u7EC4\u7684\u6570\u636E\u590D\u5236\u5230\u65B0\u6570\u7EC4\u4E2D</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">//4. \u5F80\u65B0\u6570\u7EC4\u4E2D\u6DFB\u52A0\u65B0\u7684\u6570\u636E	        </span>
				newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>

				<span class="token comment">//5. \u5C06\u65E7\u6570\u7EC4\u5F15\u7528\u6307\u5411\u65B0\u7684\u6570\u7EC4</span>
        <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add\u65B9\u6CD5\u7684\u903B\u8F91\u4E5F\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0C\u8BF7\u770B\u4E0A\u9762\u7684\u6CE8\u91CA\u3002\u9700\u8981\u6CE8\u610F\u8FD9\u4E48\u51E0\u70B9\uFF1A</p><ol><li>\u91C7\u7528ReentrantLock\uFF0C\u4FDD\u8BC1\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u5199\u7EBF\u7A0B\u6B63\u5728\u8FDB\u884C\u6570\u7EC4\u7684\u590D\u5236\uFF0C\u5426\u5219\u7684\u8BDD\u5185\u5B58\u4E2D\u4F1A\u6709\u591A\u4EFD\u88AB\u590D\u5236\u7684\u6570\u636E\uFF1B</li><li>\u524D\u9762\u8BF4\u8FC7\u6570\u7EC4\u5F15\u7528\u662Fvolatile\u4FEE\u9970\u7684\uFF0C\u56E0\u6B64\u5C06\u65E7\u7684\u6570\u7EC4\u5F15\u7528\u6307\u5411\u65B0\u7684\u6570\u7EC4\uFF0C\u6839\u636Evolatile\u7684happens-before\u89C4\u5219\uFF0C\u5199\u7EBF\u7A0B\u5BF9\u6570\u7EC4\u5F15\u7528\u7684\u4FEE\u6539\u5BF9\u8BFB\u7EBF\u7A0B\u662F\u53EF\u89C1\u7684\u3002</li><li>\u7531\u4E8E\u5728\u5199\u6570\u636E\u7684\u65F6\u5019\uFF0C\u662F\u5728\u65B0\u7684\u6570\u7EC4\u4E2D\u63D2\u5165\u6570\u636E\u7684\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u8BFB\u5199\u5B9E\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u5BB9\u5668\u4E2D\u8FDB\u884C\u64CD\u4F5C\u3002</li></ol><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6211\u4EEC\u77E5\u9053COW\u548C\u8BFB\u5199\u9501\u90FD\u662F\u901A\u8FC7\u8BFB\u5199\u5206\u79BB\u7684\u601D\u60F3\u5B9E\u73B0\u7684\uFF0C\u4F46\u4E24\u8005\u8FD8\u662F\u6709\u4E9B\u4E0D\u540C\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6BD4\u8F83\uFF1A</p><h3 id="cow-vs-\u8BFB\u5199\u9501" tabindex="-1"><a class="header-anchor" href="#cow-vs-\u8BFB\u5199\u9501" aria-hidden="true">#</a> <strong>COW vs \u8BFB\u5199\u9501</strong></h3><p>\u76F8\u540C\u70B9\uFF1A</p><ol><li>\u4E24\u8005\u90FD\u662F\u901A\u8FC7\u8BFB\u5199\u5206\u79BB\u7684\u601D\u60F3\u5B9E\u73B0\uFF1B</li><li>\u8BFB\u7EBF\u7A0B\u95F4\u662F\u4E92\u4E0D\u963B\u585E\u7684</li></ol><p>\u4E0D\u540C\u70B9\uFF1A</p><p>\u5BF9\u8BFB\u7EBF\u7A0B\u800C\u8A00\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u6570\u636E\u5B9E\u65F6\u6027\uFF0C\u5728\u5199\u9501\u88AB\u83B7\u53D6\u540E\uFF0C\u8BFB\u7EBF\u7A0B\u4F1A\u7B49\u5F85\u6216\u8005\u5F53\u8BFB\u9501\u88AB\u83B7\u53D6\u540E\uFF0C\u5199\u7EBF\u7A0B\u4F1A\u7B49\u5F85\uFF0C\u4ECE\u800C\u89E3\u51B3\u201C\u810F\u8BFB\u201D\u7B49\u95EE\u9898\u3002\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u4F7F\u7528\u8BFB\u5199\u9501\u4F9D\u7136\u4F1A\u51FA\u73B0\u8BFB\u7EBF\u7A0B\u963B\u585E\u7B49\u5F85\u7684\u60C5\u51B5\u3002</p><p>\u800CCOW\u5219\u5B8C\u5168\u653E\u5F00\u4E86\u727A\u7272\u6570\u636E\u5B9E\u65F6\u6027\u800C\u4FDD\u8BC1\u6570\u636E\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u5373\u8BFB\u7EBF\u7A0B\u5BF9\u6570\u636E\u7684\u66F4\u65B0\u662F\u5EF6\u65F6\u611F\u77E5\u7684\uFF0C\u56E0\u6B64\u8BFB\u7EBF\u7A0B\u4E0D\u4F1A\u5B58\u5728\u7B49\u5F85\u7684\u60C5\u51B5\u3002</p><p>\u5BF9\u8FD9\u4E00\u70B9\u4ECE\u6587\u5B57\u4E0A\u8FD8\u662F\u5F88\u96BE\u7406\u89E3\uFF0C\u6211\u4EEC\u6765\u901A\u8FC7debug\u770B\u4E00\u4E0B\uFF0Cadd\u65B9\u6CD5\u6838\u5FC3\u4EE3\u7801\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2.</span><span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token number">3.</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4.</span>newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
<span class="token number">5.</span><span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBECOW\u7684\u53D8\u5316\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/CopyOnWriteArrayList-01.png" alt="\u6700\u7EC8\u4E00\u81F4\u6027\u7684\u5206\u6790"></p><p>\u6570\u7EC4\u4E2D\u5DF2\u6709\u6570\u636E1,2,3\uFF0C\u73B0\u5728\u5199\u7EBF\u7A0B\u60F3\u5F80\u6570\u7EC4\u4E2D\u6DFB\u52A0\u6570\u636E4\uFF0C\u6211\u4EEC\u5728\u7B2C5\u884C\u5904\u6253\u4E0A\u65AD\u70B9\uFF0C\u8BA9\u5199\u7EBF\u7A0B\u6682\u505C\u3002\u8BFB\u7EBF\u7A0B\u4F9D\u7136\u4F1A\u201C\u4E0D\u53D7\u5F71\u54CD\u201D\u7684\u80FD\u4ECE\u6570\u7EC4\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u53EF\u662F\u8FD8\u662F\u53EA\u80FD\u8BFB\u52301,2,3\u3002<strong>\u5982\u679C\u8BFB\u7EBF\u7A0B\u80FD\u591F\u7ACB\u5373\u8BFB\u5230\u65B0\u6DFB\u52A0\u7684\u6570\u636E\u7684\u8BDD\u5C31\u53EB\u505A\u80FD\u4FDD\u8BC1\u6570\u636E\u5B9E\u65F6\u6027</strong>\u3002\u5F53\u5BF9\u7B2C5\u884C\u7684\u65AD\u70B9\u653E\u5F00\u540E\uFF0C\u8BFB\u7EBF\u7A0B\u624D\u80FD\u611F\u77E5\u5230\u6570\u636E\u53D8\u5316\uFF0C\u8BFB\u5230\u5B8C\u6574\u7684\u6570\u636E1,2,3,4\uFF0C\u800C\u4FDD\u8BC1<strong>\u6570\u636E\u6700\u7EC8\u4E00\u81F4\u6027</strong>\uFF0C\u5C3D\u7BA1\u6709\u53EF\u80FD\u4E2D\u95F4\u95F4\u9694\u4E86\u597D\u51E0\u79D2\u624D\u611F\u77E5\u5230\u3002</p><p>\u8FD9\u91CC\u8FD8\u6709\u8FD9\u6837\u4E00\u4E2A\u95EE\u9898\uFF1A <strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u590D\u5236\u5462\uFF1F \u5982\u679C\u5C06array \u6570\u7EC4\u8BBE\u5B9A\u4E3Avolitile\u7684\uFF0C \u5BF9volatile\u53D8\u91CF\u5199happens-before\u8BFB\uFF0C\u8BFB\u7EBF\u7A0B\u4E0D\u662F\u80FD\u591F\u611F\u77E5\u5230volatile\u53D8\u91CF\u7684\u53D8\u5316</strong>\u3002</p><p>\u539F\u56E0\u662F\uFF0C\u8FD9\u91CCvolatile\u7684\u4FEE\u9970\u7684<strong>\u4EC5\u4EC5</strong>\u53EA\u662F<strong>\u6570\u7EC4\u5F15\u7528</strong>\uFF0C<strong>\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7684\u4FEE\u6539\u662F\u4E0D\u80FD\u4FDD\u8BC1\u53EF\u89C1\u6027\u7684</strong>\u3002\u56E0\u6B64COW\u91C7\u7528\u7684\u662F\u65B0\u65E7\u4E24\u4E2A\u6570\u636E\u5BB9\u5668\uFF0C\u901A\u8FC7\u7B2C5\u884C\u4EE3\u7801\u5C06\u6570\u7EC4\u5F15\u7528\u6307\u5411\u65B0\u7684\u6570\u7EC4\u3002</p><h3 id="cow\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#cow\u7684\u7F3A\u70B9" aria-hidden="true">#</a> <strong>COW\u7684\u7F3A\u70B9</strong></h3><p>CopyOnWrite\u5BB9\u5668\u6709\u5F88\u591A\u4F18\u70B9\uFF0C\u4F46\u662F\u540C\u65F6\u4E5F\u5B58\u5728\u4E24\u4E2A\u95EE\u9898\uFF0C\u5373\u5185\u5B58\u5360\u7528\u95EE\u9898\u548C\u6570\u636E\u4E00\u81F4\u6027\u95EE\u9898\u3002\u6240\u4EE5\u5728\u5F00\u53D1\u7684\u65F6\u5019\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\u3002</p><ol><li><strong>\u5185\u5B58\u5360\u7528\u95EE\u9898</strong>\uFF1A\u56E0\u4E3ACopyOnWrite\u7684\u5199\u65F6\u590D\u5236\u673A\u5236\uFF0C\u6240\u4EE5\u5728\u8FDB\u884C\u5199\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5185\u5B58\u91CC\u4F1A\u540C\u65F6\u9A7B\u624E\u4E24\u4E2A\u5BF9 \u8C61\u7684\u5185\u5B58\uFF0C\u65E7\u7684\u5BF9\u8C61\u548C\u65B0\u5199\u5165\u7684\u5BF9\u8C61\uFF08\u6CE8\u610F:\u5728\u590D\u5236\u7684\u65F6\u5019\u53EA\u662F\u590D\u5236\u5BB9\u5668\u91CC\u7684\u5F15\u7528\uFF0C\u53EA\u662F\u5728\u5199\u7684\u65F6\u5019\u4F1A\u521B\u5EFA\u65B0\u5BF9 \u8C61\u6DFB\u52A0\u5230\u65B0\u5BB9\u5668\u91CC\uFF0C\u800C\u65E7\u5BB9\u5668\u7684\u5BF9\u8C61\u8FD8\u5728\u4F7F\u7528\uFF0C\u6240\u4EE5\u6709\u4E24\u4EFD\u5BF9\u8C61\u5185\u5B58\uFF09\u3002</li></ol><p>\u5982\u679C\u8FD9\u4E9B\u5BF9\u8C61\u5360\u7528\u7684\u5185\u5B58\u6BD4\u8F83\u5927\uFF0C\u6BD4 \u5982\u8BF4200M\u5DE6\u53F3\uFF0C\u90A3\u4E48\u518D\u5199\u5165100M\u6570\u636E\u8FDB\u53BB\uFF0C\u5185\u5B58\u5C31\u4F1A\u5360\u7528300M\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u5F88\u6709\u53EF\u80FD\u9020\u6210\u9891\u7E41\u7684minor GC\u548Cmajor GC\u3002</p><ol start="2"><li><strong>\u6570\u636E\u4E00\u81F4\u6027\u95EE\u9898</strong>\uFF1ACopyOnWrite\u5BB9\u5668\u53EA\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u5B9E\u65F6\u4E00\u81F4\u6027\u3002\u6240\u4EE5\u5982\u679C\u4F60\u5E0C\u671B\u5199\u5165\u7684\u7684\u6570\u636E\uFF0C\u9A6C\u4E0A\u80FD\u8BFB\u5230\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528CopyOnWrite\u5BB9\u5668\u3002</li></ol><hr>`,45),u=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),d={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},k=t("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),v={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m=t("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),b={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},h=t("Java\u516B\u80A1\u6587"),y=n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png"},null,-1);function g(f,C){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("blockquote",null,[u,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),n("li",null,[n("a",v,[m,a(s)])]),n("li",null,[n("a",b,[h,a(s)])])])]),y])}var _=e(l,[["render",g],["__file","CopyOnWriteArrayList.html.vue"]]);export{_ as default};
