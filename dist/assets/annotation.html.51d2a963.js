import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.07379250.js";const t={},e=p(`<h1 id="\u6DF1\u5165\u7406\u89E3java\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3java\u6CE8\u89E3" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3Java\u6CE8\u89E3</h1><p>\u201C\u4E8C\u54E5\uFF0C\u8FD9\u8282\u8BB2\u6CE8\u89E3\u5417\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u662F\u7684\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u6CE8\u89E3\u662F Java \u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u7ECF\u5E38\u88AB\u5FFD\u89C6\u4E5F\u662F\u771F\u7684\u3002\u4E4B\u6240\u4EE5\u8FD9\u4E48\u8BF4\u662F\u56E0\u4E3A\u6211\u4EEC\u66F4\u503E\u5411\u6210\u4E3A\u4E00\u540D\u6CE8\u89E3\u7684\u4F7F\u7528\u8005\u800C\u4E0D\u662F\u521B\u5EFA\u8005\u3002<code>@Override</code> \u6CE8\u89E3\u7528\u8FC7\u5427\uFF1F\u4F46\u4F60\u77E5\u9053\u600E\u4E48\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6CE8\u89E3\u5417\uFF1F\u201D</p><p>\u4E09\u59B9\u6BEB\u4E0D\u72B9\u8C6B\u5730\u6447\u6447\u5934\uFF0C\u6446\u6446\u624B\uFF0C\u4E0D\u597D\u610F\u601D\u5730\u627F\u8BA4\u81EA\u5DF1\u7684\u786E\u6CA1\u6709\u81EA\u5B9A\u4E49\u8FC7\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/annotation/annotation-01.png" alt=""></p><p>\u201C\u597D\u5427\uFF0C\u54E5\u6765\u544A\u8BC9\u4F60\u5427\u3002\u201D</p><p>\u6CE8\u89E3\uFF08Annotation\uFF09\u662F\u5728 Java 1.5 \u65F6\u5F15\u5165\u7684\u6982\u5FF5\uFF0C\u540C class \u548C interface \u4E00\u6837\uFF0C\u4E5F\u5C5E\u4E8E\u4E00\u79CD\u7C7B\u578B\u3002\u6CE8\u89E3\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u6570\u636E\u7528\u6765\u88C5\u9970\u7A0B\u5E8F\u4EE3\u7801\uFF08\u7C7B\u3001\u65B9\u6CD5\u3001\u5B57\u6BB5\u7B49\uFF09\uFF0C\u4F46\u662F\u6CE8\u89E3\u5E76\u4E0D\u662F\u6240\u88C5\u9970\u4EE3\u7801\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u5BF9\u4EE3\u7801\u7684\u8FD0\u884C\u6548\u679C\u6CA1\u6709\u76F4\u63A5\u5F71\u54CD\uFF0C\u7531\u7F16\u8BD1\u5668\u51B3\u5B9A\u8BE5\u6267\u884C\u54EA\u4E9B\u64CD\u4F5C\u3002</p><p>\u6765\u770B\u4E00\u6BB5\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutowiredTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5230 <code>@Autowired</code> \u8FD9\u4E2A\u6CE8\u89E3\u4E86\u5427\uFF1F\u5B83\u672C\u6765\u662F\u4E3A Spring \u5BB9\u5668\u6CE8\u5165 Bean \u7684\uFF0C\u73B0\u5728\u88AB\u6211\u65E0\u60C5\u5730\u6254\u5728\u4E86\u5B57\u6BB5 name \u7684\u8EAB\u4E0A\uFF0C\u4F46\u8FD9\u6BB5\u4EE3\u7801\u6240\u5728\u7684\u9879\u76EE\u4E2D\u5E76\u6CA1\u6709\u542F\u7528 Spring\uFF0C\u610F\u5473\u7740 <code>@Autowired</code> \u6CE8\u89E3\u6B64\u65F6\u53EA\u662F\u4E00\u4E2A\u6446\u8BBE\u3002</p><p>\u201C\u65E2\u7136\u53EA\u662F\u4E2A\u6446\u8BBE\uFF0C\u90A3\u4F60\u8FD9\u4E2A\u5730\u65B9\u4E3A\u4EC0\u4E48\u8FD8\u8981\u7528 <code>@Autowired</code> \u5462\uFF1F\u201D\u4E09\u59B9\u597D\u5947\u5730\u95EE\u3002</p><p>\u201C\u50BB\u5440\u4F60\uFF0C\u5C31\u662F\u7ED9\u4F60\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u8BC1\u660E\uFF1A\u6CE8\u89E3\u5BF9\u4EE3\u7801\u7684\u8FD0\u884C\u6548\u679C\u6CA1\u6709\u76F4\u63A5\u5F71\u54CD\uFF0C\u660E\u767D\u6211\u7684\u7528\u610F\u4E86\u5427\uFF1F\u201D\u6211\u6BEB\u4E0D\u5BA2\u6C14\u5730\u8BF4\u3002</p><p>\u201C\u54E6\u3002\u201D\u4E09\u59B9\u82E5\u6709\u6240\u601D\u5730\u8BF4\u3002</p><p>\u201C\u8BA4\u771F\u542C\u54C8\uFF0C\u63A5\u4E0B\u6765\u7ED9\u4F60\u8BB2\u8BB2\u6CE8\u89E3\u7684\u751F\u547D\u5468\u671F\u3002\u201D\u6211\u7785\u4E86\u7785\u4E09\u59B9\uFF0C\u770B\u5979\u662F\u5426\u5728\u4E13\u6CE8\u7684\u542C\uFF0C\u7136\u540E\u7EE7\u7EED\u8BF4\uFF0C\u201C\u6CE8\u89E3\u7684\u751F\u547D\u5468\u671F\u6709 3 \u79CD\u7B56\u7565\uFF0C\u5B9A\u4E49\u5728 RetentionPolicy \u679A\u4E3E\u4E2D\u3002\u201D</p><p>1\uFF09SOURCE\uFF1A\u5728\u6E90\u6587\u4EF6\u4E2D\u6709\u6548\uFF0C\u88AB\u7F16\u8BD1\u5668\u4E22\u5F03\u3002</p><p>2\uFF09CLASS\uFF1A\u5728\u7F16\u8BD1\u5668\u751F\u6210\u7684\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u6709\u6548\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u4F1A\u88AB\u5904\u7406\u7C7B\u6587\u4EF6\u7684 JVM \u4E22\u5F03\u3002</p><p>3\uFF09RUNTIME\uFF1A\u5728\u8FD0\u884C\u65F6\u6709\u6548\u3002\u8FD9\u4E5F\u662F\u6CE8\u89E3\u751F\u547D\u5468\u671F\u4E2D\u6700\u5E38\u7528\u7684\u4E00\u79CD\u7B56\u7565\uFF0C\u5B83\u5141\u8BB8\u7A0B\u5E8F\u901A\u8FC7\u53CD\u5C04\u7684\u65B9\u5F0F\u8BBF\u95EE\u6CE8\u89E3\uFF0C\u5E76\u6839\u636E\u6CE8\u89E3\u7684\u5B9A\u4E49\u6267\u884C\u76F8\u5E94\u7684\u4EE3\u7801\u3002</p><p>\u201C\u7136\u540E\u6211\u4EEC\u6765\u8BB2\u6CE8\u89E3\u88C5\u9970\u7684\u76EE\u6807\u3002\u201D\u6211\u770B\u4E09\u59B9\u8FD8\u5728\u7EBF\uFF0C\u5C31\u7EE7\u7EED\u8BF4\u3002</p><p>\u6CE8\u89E3\u7684\u76EE\u6807\u5B9A\u4E49\u4E86\u6CE8\u89E3\u5C06\u9002\u7528\u4E8E\u54EA\u4E00\u79CD\u7EA7\u522B\u7684 Java \u4EE3\u7801\u4E0A\uFF0C\u6709\u4E9B\u6CE8\u89E3\u53EA\u9002\u7528\u4E8E\u65B9\u6CD5\uFF0C\u6709\u4E9B\u53EA\u9002\u7528\u4E8E\u6210\u5458\u53D8\u91CF\uFF0C\u6709\u4E9B\u53EA\u9002\u7528\u4E8E\u7C7B\uFF0C\u6709\u4E9B\u5219\u90FD\u9002\u7528\u3002\u622A\u6B62\u5230 Java 9\uFF0C\u6CE8\u89E3\u7684\u7C7B\u578B\u4E00\u5171\u6709 11 \u79CD\uFF0C\u5B9A\u4E49\u5728 ElementType \u679A\u4E3E\u4E2D\u3002</p><p>1\uFF09TYPE\uFF1A\u7528\u4E8E\u7C7B\u3001\u63A5\u53E3\u3001\u6CE8\u89E3\u3001\u679A\u4E3E</p><p>2\uFF09FIELD\uFF1A\u7528\u4E8E\u5B57\u6BB5\uFF08\u7C7B\u7684\u6210\u5458\u53D8\u91CF\uFF09\uFF0C\u6216\u8005\u679A\u4E3E\u5E38\u91CF</p><p>3\uFF09METHOD\uFF1A\u7528\u4E8E\u65B9\u6CD5</p><p>4\uFF09PARAMETER\uFF1A\u7528\u4E8E\u666E\u901A\u65B9\u6CD5\u6216\u8005\u6784\u9020\u65B9\u6CD5\u7684\u53C2\u6570</p><p>5\uFF09CONSTRUCTOR\uFF1A\u7528\u4E8E\u6784\u9020\u65B9\u6CD5</p><p>6\uFF09LOCAL_VARIABLE\uFF1A\u7528\u4E8E\u53D8\u91CF</p><p>7\uFF09ANNOTATION_TYPE\uFF1A\u7528\u4E8E\u6CE8\u89E3</p><p>8\uFF09PACKAGE\uFF1A\u7528\u4E8E\u5305</p><p>9\uFF09TYPE_PARAMETER\uFF1A\u7528\u4E8E\u6CDB\u578B\u53C2\u6570</p><p>10\uFF09TYPE_USE\uFF1A\u7528\u4E8E\u58F0\u660E\u8BED\u53E5\u3001\u6CDB\u578B\u6216\u8005\u5F3A\u5236\u8F6C\u6362\u8BED\u53E5\u4E2D\u7684\u7C7B\u578B</p><p>11\uFF09MODULE\uFF1A\u7528\u4E8E\u6A21\u5757</p><p>\u201C\u54E5\uFF0C\u4F60\u5C06\u8FD9\u4E9B\u6211\u90FD\u8BB0\u4E0D\u4F4F\uFF0C\u80FD\u4E0D\u80FD\u76F4\u63A5\u5F00\u64B8\u6CE8\u89E3\u5440\uFF01\uFF01\uFF01\uFF01\uFF01\u201D\u4E09\u59B9\u4E0D\u8010\u70E6\u4E86\u3002</p><p>\u201C\u786E\u5B9E\u54C8\uFF0C\u8BF4\u518D\u591A\uFF0C\u90FD\u4E0D\u5982\u64B8\u4E2A\u6CE8\u89E3\u6765\u5F97\u8BA9\u4EBA\u5FC3\u52A8\u3002\u64B8\u4E2A\u4EC0\u4E48\u6837\u7684\u6CE8\u89E3\u5462\uFF1F\u4E00\u4E2A\u5B57\u6BB5\u6CE8\u89E3\u5427\uFF0C\u5B83\u7528\u6765\u6807\u8BB0\u5BF9\u8C61\u5728\u5E8F\u5217\u5316\u6210 JSON \u7684\u65F6\u5019\u8981\u4E0D\u8981\u5305\u542B\u8FD9\u4E2A\u5B57\u6BB5\u3002\u201D\u6211\u7B11\u7740\u5BF9\u4E09\u59B9\u8BF4\uFF0C\u201C\u600E\u4E48\u6837\uFF1F\u201D</p><p>\u201C\u597D\u5440\uFF01\u201D</p><p>\u201C\u6765\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>FIELD<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">JsonField</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\uFF09JsonField \u6CE8\u89E3\u7684\u751F\u547D\u5468\u671F\u662F RUNTIME\uFF0C\u4E5F\u5C31\u662F\u8FD0\u884C\u65F6\u6709\u6548\u3002</p><p>2\uFF09JsonField \u6CE8\u89E3\u88C5\u9970\u7684\u76EE\u6807\u662F FIELD\uFF0C\u4E5F\u5C31\u662F\u9488\u5BF9\u5B57\u6BB5\u7684\u3002</p><p>3\uFF09\u521B\u5EFA\u6CE8\u89E3\u9700\u8981\u7528\u5230 <code>@interface</code> \u5173\u952E\u5B57\u3002</p><p>4\uFF09JsonField \u6CE8\u89E3\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u540D\u5B57\u4E3A value\uFF0C\u7C7B\u578B\u4E3A String\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u3002</p><p>\u201C\u4E3A\u4EC0\u4E48\u53C2\u6570\u540D\u8981\u4E3A value \u5462\uFF1F\u6709\u4EC0\u4E48\u7279\u6B8A\u7684\u542B\u4E49\u5417\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u5F53\u7136\u662F\u6709\u7684\uFF0Cvalue \u5141\u8BB8\u6CE8\u89E3\u7684\u4F7F\u7528\u8005\u63D0\u4F9B\u4E00\u4E2A\u65E0\u9700\u6307\u5B9A\u540D\u5B57\u7684\u53C2\u6570\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u4F7F\u7528 <code>@JsonField(value = &quot;\u6C89\u9ED8\u738B\u4E8C&quot;)</code>\uFF0C\u4E5F\u53EF\u4EE5\u628A <code>value =</code> \u7701\u7565\uFF0C\u53D8\u6210 <code>@JsonField(&quot;\u6C89\u9ED8\u738B\u4E8C&quot;)</code>\u3002\u201D\u6211\u8BF4\u3002</p><p>\u201C\u90A3 <code>default &quot;&quot;</code> \u6709\u4EC0\u4E48\u7279\u6B8A\u542B\u4E49\u5417\uFF1F\u201D\u4E09\u59B9\u7EE7\u7EED\u95EE\u3002</p><p>\u201C\u5F53\u7136\u4E5F\u662F\u6709\u7684\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u5728\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u76F4\u63A5\u4F7F\u7528 <code>@JsonField</code>\uFF0C\u800C\u65E0\u9700\u6307\u5B9A\u53C2\u6570\u7684\u540D\u548C\u503C\u3002\u201D\u6211\u56DE\u7B54\u8BF4\u3002</p><p>\u201C\u660E\u767D\u4E86\uFF0C\u90A3 <code>@JsonField</code> \u6CE8\u89E3\u5DF2\u7ECF\u64B8\u597D\u4E86\uFF0C\u662F\u4E0D\u662F\u53EF\u4EE5\u4F7F\u7528\u5B83\u4E86\u5440\uFF1F\u201D\u4E09\u59B9\u6FC0\u52A8\u5730\u8BF4\u3002</p><p>\u201C\u55EF\uFF0C\u5047\u8BBE\u6709\u4E00\u4E2A Writer \u7C7B\uFF0C\u4ED6\u6709 3 \u4E2A\u5B57\u6BB5\uFF0C\u5206\u522B\u662F age\u3001name \u548C bookName\uFF0C\u540E 2 \u4E2A\u662F\u5FC5\u987B\u5E8F\u5217\u5316\u7684\u5B57\u6BB5\u3002\u5C31\u53EF\u4EE5\u8FD9\u6837\u6765\u7528 <code>@JsonField</code> \u6CE8\u89E3\u3002\u201D\u6211\u8BF4\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JsonField</span><span class="token punctuation">(</span><span class="token string">&quot;writerName&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@JsonField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bookName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> bookName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bookName <span class="token operator">=</span> bookName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// getter / setter</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Writer{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, bookName=&#39;&quot;</span> <span class="token operator">+</span> bookName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\uFF09name \u4E0A\u7684 <code>@JsonField</code> \u6CE8\u89E3\u63D0\u4F9B\u4E86\u663E\u5F0F\u7684\u5B57\u7B26\u4E32\u503C\u3002</p><p>2\uFF09bookName \u4E0A\u7684 <code>@JsonField</code> \u6CE8\u89E3\u4F7F\u7528\u4E86\u7F3A\u7701\u9879\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u7F16\u5199\u5E8F\u5217\u5316\u7C7B JsonSerializer\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonSerializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> objectClass <span class="token operator">=</span> object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> jsonElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> objectClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">JsonField</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                jsonElements<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token function">getSerializedKey</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> field<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">toJsonString</span><span class="token punctuation">(</span>jsonElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getSerializedKey</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> annotationValue <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">JsonField</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationValue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> annotationValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJsonString</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> jsonMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> elementsString <span class="token operator">=</span> jsonMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>entry <span class="token operator">-&gt;</span> <span class="token string">&quot;\\&quot;&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;:\\&quot;&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">joining</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{&quot;</span> <span class="token operator">+</span> elementsString <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201CJsonSerializer \u7C7B\u7684\u5185\u5BB9\u770B\u8D77\u6765\u4F3C\u4E4E\u6709\u70B9\u591A\u554A\uFF0C\u4E8C\u54E5\uFF0C\u6211\u6709\u70B9\u770B\u4E0D\u61C2\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u4E0D\u8981\u6015\uFF0C\u6211\u4E00\u70B9\u70B9\u6765\u89E3\u91CA\uFF0C\u76F4\u5230\u4F60\u641E\u660E\u767D\u4E3A\u6B62\u3002\u201D</p><p>1\uFF09<code>serialize()</code> \u65B9\u6CD5\u662F\u7528\u6765\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A Object \u7C7B\u578B\u7684\u53C2\u6570\u3002<code>objectClass.getDeclaredFields()</code> \u901A\u8FC7\u53CD\u5C04\u7684\u65B9\u5F0F\u83B7\u53D6\u5BF9\u8C61\u58F0\u660E\u7684\u6240\u6709\u5B57\u6BB5\uFF0C\u7136\u540E\u8FDB\u884C for \u5FAA\u73AF\u904D\u5386\u3002\u5728 for \u5FAA\u73AF\u4E2D\uFF0C\u5148\u901A\u8FC7 <code>field.setAccessible(true)</code> \u5C06\u53CD\u5C04\u5BF9\u8C61\u7684\u53EF\u8BBF\u95EE\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u4F9B\u5E8F\u5217\u5316\u4F7F\u7528\uFF08\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6B65\u9AA4\u7684\u8BDD\uFF0Cprivate \u5B57\u6BB5\u662F\u65E0\u6CD5\u83B7\u53D6\u7684\uFF0C\u4F1A\u629B\u51FA IllegalAccessException \u5F02\u5E38\uFF09\uFF1B\u518D\u901A\u8FC7 <code>isAnnotationPresent()</code> \u5224\u65AD\u5B57\u6BB5\u662F\u5426\u88C5\u9970\u4E86 <code>JsonField</code> \u6CE8\u89E3\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u8C03\u7528 <code>getSerializedKey()</code> \u65B9\u6CD5\uFF0C\u4EE5\u53CA\u83B7\u53D6\u8BE5\u5BF9\u8C61\u4E0A\u7531\u6B64\u5B57\u6BB5\u8868\u793A\u7684\u503C\uFF0C\u5E76\u653E\u5165 jsonElements \u4E2D\u3002</p><p>2\uFF09<code>getSerializedKey()</code> \u65B9\u6CD5\u7528\u6765\u83B7\u53D6\u5B57\u6BB5\u4E0A\u6CE8\u89E3\u7684\u503C\uFF0C\u5982\u679C\u6CE8\u89E3\u7684\u503C\u662F\u7A7A\u7684\uFF0C\u5219\u8FD4\u56DE\u5B57\u6BB5\u540D\u3002</p><p>3\uFF09<code>toJsonString()</code> \u65B9\u6CD5\u501F\u52A9 Stream \u6D41\u7684\u65B9\u5F0F\u8FD4\u56DE\u683C\u5F0F\u5316\u540E\u7684 JSON \u5B57\u7B26\u4E32\u3002Stream \u6D41\u4F60\u8FD8\u6CA1\u6709\u63A5\u89E6\u8FC7\uFF0C\u4E0D\u8FC7\u6CA1\u5173\u7CFB\uFF0C\u540E\u9762\u6211\u518D\u7ED9\u4F60\u8BB2\u3002</p><p>\u201C\u73B0\u5728\u662F\u4E0D\u662F\u8C41\u7136\u5F00\u6717\u4E86\uFF1F\u201D\u6211\u95EE\u4E09\u59B9\uFF0C\u770B\u5230\u4E09\u59B9\u70B9\u4E86\u70B9\u5934\uFF0C\u6211\u7EE7\u7EED\u8BF4\uFF0C\u201C\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u5199\u4E00\u4E2A\u6D4B\u8BD5\u7C7B JsonFieldTest\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonFieldTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Writer</span> cmower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Web\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">JsonSerializer</span><span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span>cmower<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;bookName&quot;:&quot;Web\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&quot;,&quot;writerName&quot;:&quot;\u6C89\u9ED8\u738B\u4E8C&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4ECE\u7ED3\u679C\u4E0A\u6765\u770B\uFF1A</p><p>1\uFF09Writer \u7C7B\u7684 age \u5B57\u6BB5\u6CA1\u6709\u88C5\u9970 <code>@JsonField</code> \u6CE8\u89E3\uFF0C\u6240\u4EE5\u6CA1\u6709\u5E8F\u5217\u5316\u3002</p><p>2\uFF09Writer \u7C7B\u7684 name \u5B57\u6BB5\u88C5\u9970\u4E86 <code>@JsonField</code> \u6CE8\u89E3\uFF0C\u5E76\u4E14\u663E\u793A\u6307\u5B9A\u4E86\u5B57\u7B26\u4E32\u201CwriterName\u201D\uFF0C\u6240\u4EE5\u5E8F\u5217\u5316\u540E\u53D8\u6210\u4E86 writerName\u3002</p><p>3\uFF09Writer \u7C7B\u7684 bookName \u5B57\u6BB5\u88C5\u9970\u4E86 <code>@JsonField</code> \u6CE8\u89E3\uFF0C\u4F46\u6CA1\u6709\u663E\u5F0F\u6307\u5B9A\u503C\uFF0C\u6240\u4EE5\u5E8F\u5217\u5316\u540E\u4ECD\u7136\u662F bookName\u3002</p><p>\u201C\u600E\u4E48\u6837\uFF0C\u4E09\u59B9\uFF0C\u662F\u4E0D\u662F\u4E5F\u4E0D\u662F\u7279\u522B\u96BE\uFF1F\u201D\u6211\u5BF9\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u64B8\u4E2A\u6CE8\u89E3\u597D\u50CF\u771F\u6CA1\u4EC0\u4E48\u96BE\u5EA6\uFF0C\u4F46\u4F60\u63A5\u4E0B\u6765\u7684\u90A3\u4E2A JsonSerializer \u6211\u8FD8\u9700\u8981\u518D\u6D88\u5316\u4E00\u4E0B\u3002\u201D\u4E09\u59B9\u5F88\u8BA4\u771F\u5730\u8BF4\u3002</p><p>\u201C\u55EF\uFF0C\u4F60\u597D\u597D\u590D\u4E60\u4E0B\uFF0C\u6211\u770B\u4F1A\u300A\u7F16\u8BD1\u539F\u7406\u300B\u3002\u201D\u8BF4\u5B8C\u6211\u62FF\u8D77\u684C\u5B50\u8FB9\u4E0A\u7684\u4E00\u672C\u4E66\u5C31\u8D70\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,67),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","annotation.html.vue"]]);export{r as default};
