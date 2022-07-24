import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as i,c as s,a as e,b as o,e as n,d as a}from"./app.c8e9fe1d.js";const d={},l=n('<p>\u56E0\u4E3AJava\u7A0B\u5E8F\u5FC5\u987B\u8FD0\u884C\u5728JVM\u4E4B\u4E0A\uFF0C\u6240\u4EE5\u6211\u4EEC Java \u7A0B\u5E8F\u5458\u5728\u5B66\u4E60 Java \u4E4B\u524D\uFF0C\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u5C31\u662F\u5B89\u88C5JDK\u3002</p><p>\u4EC0\u4E48\uFF1F</p><p>\u53C8\u662F JVM \u53C8\u662F JDK \u7684\uFF0C\u80FD\u4E0D\u80FD\u8BB2\u6E05\u695A\u4E00\u70B9\u3002</p><p>\u8981\u626F\u6E05\u695A\u8FD9\u4E24\u8005\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5C31\u5FC5\u987B\u5F97\u518D\u626F\u51FA\u53E6\u5916\u4E00\u4E2A\u540D\u8BCD JRE\uFF0C\u54C8\u54C8\u54C8\u3002</p><p>\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u53EF\u4EE5\u7528\u8FD9\u5E45\u56FE\u6765\u8868\u793A\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-6f6fdb4a-7a44-4e76-b4ea-71c070a5b220.png" alt=""></p><p>\u771F\u7684\u662F\u4EBA\u751F\u65E0\u5E38\uFF0C\u5927\u80A0\u5305\u5C0F\u80A0\u554A\u3002</p><h2 id="jvm\u3001jre\u3001jdk-\u6709\u4EC0\u4E48\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#jvm\u3001jre\u3001jdk-\u6709\u4EC0\u4E48\u5173\u7CFB" aria-hidden="true">#</a> JVM\u3001JRE\u3001JDK \u6709\u4EC0\u4E48\u5173\u7CFB</h2><p>JDK\uFF08Java Development Kit\uFF09\u662F\u7528\u4E8E\u5F00\u53D1 Java \u5E94\u7528\u7A0B\u5E8F\u7684\u8F6F\u4EF6\u73AF\u5883\u3002\u91CC\u9762\u5305\u542B\u8FD0\u884C\u65F6\u73AF\u5883\uFF08JRE\uFF09\u548C\u5176\u4ED6 Java \u5F00\u53D1\u6240\u9700\u7684\u5DE5\u5177\uFF0C\u6BD4\u5982\u8BF4\u89E3\u91CA\u5668\uFF08java\uFF09\u3001\u7F16\u8BD1\u5668\uFF08javac\uFF09\u3001\u6587\u6863\u751F\u6210\u5668\uFF08javadoc\uFF09\u7B49\u7B49\u3002</p><p>JRE\uFF08Java Runtime Environment\uFF09\u662F\u7528\u4E8E\u8FD0\u884C Java \u5E94\u7528\u7A0B\u5E8F\u7684\u8F6F\u4EF6\u73AF\u5883\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u53EA\u60F3\u8FD0\u884C Java \u7A0B\u5E8F\u800C\u4E0D\u9700\u8981\u5F00\u53D1 Java \u7A0B\u5E8F\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u5B89\u88C5 JRE \u5C31\u53EF\u4EE5\u4E86\u3002</p><p>JVM (Java Virtual Machine) \uFF0C\u4E5F\u5C31\u662F Java \u865A\u62DF\u673A\uFF0C\u7531\u4E00\u5957\u5B57\u8282\u7801\u6307\u4EE4\u96C6\u3001\u4E00\u7EC4\u5BC4\u5B58\u5668\u3001\u4E00\u4E2A\u6808\u3001\u4E00\u4E2A\u5783\u573E\u56DE\u6536\u5806\u548C\u4E00\u4E2A\u5B58\u50A8\u65B9\u6CD5\u57DF\u7B49\u7EC4\u6210\uFF0C\u5C4F\u853D\u4E86\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\uFF08macOS\u3001Windows\u3001Linux\uFF09\u7684\u5DEE\u5F02\u6027\uFF0C\u4F7F\u5F97Java\u80FD\u591F\u201C\u4E00\u6B21\u7F16\u8BD1\uFF0C\u5230\u5904\u8FD0\u884C\u201D\u3002</p><p>\u6BD4\u5982\u8BF4\u6211\u7528 macOS \u751F\u6210\u4E86\u4E00\u4E2A jar \u5305\uFF08\u91CC\u9762\u662F\u6253\u5305\u597D\u7684\u5B57\u8282\u7801\u2014\u2014\u53EF\u4EE5\u5728Java\u865A\u62DF\u673A\u4E0A\u8FD0\u884C\u7684\u76EE\u6807\u4EE3\u7801\uFF09\uFF0C\u53EF\u4EE5\u4E22\u7ED9 Windows \u7528\u6237\u76F4\u63A5\u8FD0\u884C\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0A\u4F20\u5230 Linux \u670D\u52A1\u5668\u8FD0\u884C\u3002</p><p>\u8FD9\u662F Oracle \u5B98\u65B9\u7ED9\u51FA\u7684 JDK\u3001JRE\u3001JVM \u5173\u7CFB\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-cbc87f87-6351-4356-936b-77850cc682d5.png" alt=""></p><p>\u90A3\u9488\u5BF9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684 JDK \u5B89\u88C5\u5305\u3002\u5982\u679C\u4F60\u7528\u8C37\u6B4C\u53BB\u641C\u201CJDK\u201D\u5173\u952E\u5B57\uFF0C\u80FD\u641C\u5230\u5B98\u65B9\u7684\u4E0B\u8F7D\u94FE\u63A5\u3002</p>',15),p={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},b=a("https://www.oracle.com/java/technologies/downloads/"),v=n('<p>\u5982\u679C\u4F60\u7528\u767E\u5EA6\u53BB\u641C\uFF0C\u55EF\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-31e739ff-b69f-47b6-9db4-8843cd8a716a.png" alt=""></p><p>\u603B\u4E4B\uFF0C\u662F\u628A\u5B98\u65B9\u7ED9\u5403\u4E86\u3002</p><p>\u597D\uFF0C\u5982\u679C\u4F60\u60F3\u5B89\u88C5 JDK \uFF0C\u5230\u5B98\u65B9\u4E0B\u8F7D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-e5b91a70-2a23-4ebd-896a-5ff19f0075b1.png" alt=""></p><p>\u6700\u65B0\u7248\u662F JDK 18\uFF08\u77ED\u671F\u7248\u672C\uFF09\uFF0C\u4E0A\u4E00\u4E2A\u957F\u671F\u652F\u6301\u7248\u672C\u662F JDK 17\uFF0C\u63A8\u8350\u5B89\u88C5 JDK 8\uFF0C\u54C8\u54C8\u54C8\u54C8\uFF0C\u5B83\u5347\u4EFB\u5B83\u5347\uFF0C\u6211\u7528 Java 8\u3002\u5F80\u4E0B\u7FFB\u5C31\u80FD\u627E\u5230\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a32db267-febe-4852-b528-deaacb43247d.png" alt=""></p><p>\u4E0B\u8F7D\u5B8C\u53CC\u51FB\u5B89\u88C5\uFF0C\u7136\u540E\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C31OK \u4E86\u3002</p><p>\u8FD9\u6CA1\u5565\u6280\u672F\u542B\u91CF\uFF0C\u6240\u4EE5\u4E0B\u9762\u6211\u7ED9\u5927\u5BB6\u63A8\u8350\u4E24\u79CD\u9AD8\u7EA7\u7684\uFF1A</p><h2 id="windows-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#windows-\u7528\u6237" aria-hidden="true">#</a> Windows \u7528\u6237</h2><p>Windows \u7528\u6237\u5EFA\u8BAE\u5148\u5B89\u88C5 Chocolatey\uFF0C\u8FD9\u662F\u4E00\u4E2AWindows\u4E0B\u7684\u547D\u4EE4\u884C\u8F6F\u4EF6\u7BA1\u7406\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5F00\u53D1\u8005\u50CF\u5728Linux\u4E0B\u4F7F\u7528yum\u547D\u4EE4\u6765\u5B89\u88C5\u8F6F\u4EF6\uFF0C\u6216\u8005\u50CF\u5728macOS\u4E0B\u4F7F\u7528brew \u547D\u4EE4\u6765\u5B89\u88C5\u8F6F\u4EF6\uFF0C\u975E\u5E38\u9177\u70AB\u3002</p>',11),m={href:"https://tobebetterjavaer.com/gongju/choco.html",target:"_blank",rel:"noopener noreferrer"},g=a("Chocolatey\uFF1AWindows\u7684\u547D\u4EE4\u884C\u8F6F\u4EF6\u7BA1\u7406\u795E\u5668"),h=e("p",null,[a("\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u6267\u884C "),e("code",null,"choco install jdk8"),a(" \u5C31\u53EF\u4EE5\u5B89\u88C5 JDK 8 \u4E86\uFF0C\u5E76\u4E14\u4F1A\u81EA\u52A8\u5C06Java\u52A0\u5165\u5230\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u4E0D\u7528\u518D\u53BB\u300C\u6211\u7684\u7535\u8111\u300D\u300C\u73AF\u5883\u53D8\u91CF\u300D\u4E2D\u65B0\u5EFA JAVA_HOME \u5E76\u590D\u5236 JDK \u5B89\u88C5\u8DEF\u5F84\u914D\u7F6E PATH \u53D8\u91CF\u4E86")],-1),u=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/choco-80a6ced8-c25d-4371-8096-b95be48af768",alt:""})],-1),j=e("h2",{id:"macos-\u7528\u6237",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos-\u7528\u6237","aria-hidden":"true"},"#"),a(" macOS \u7528\u6237")],-1),J=e("p",null,"macOS \u7528\u6237\u5EFA\u8BAE\u5148\u5B89\u88C5 Homebrew\uFF0C\u8FD9\u662F\u4E00\u4E2A macOS \u4E0B\u7684\u547D\u4EE4\u884C\u8F6F\u4EF6\u7BA1\u7406\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u884C\u547D\u4EE4\u5B89\u88C5 Apple\uFF08\u6216 Linux \u7CFB\u7EDF\uFF09\u6CA1\u6709\u9884\u88C5\u4F46\u4F60\u9700\u8981\u7684\u8F6F\u4EF6\u3002",-1),_={href:"https://tobebetterjavaer.com/gongju/brew.html",target:"_blank",rel:"noopener noreferrer"},f=a("Homebrew\uFF1AmacOS\u7684\u547D\u4EE4\u884C\u8F6F\u4EF6\u7BA1\u7406\u795E\u5668"),x=n(`<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u6267\u884C <code>brew install openjdk@8</code> \u5C31\u53EF\u4EE5\u5B89\u88C5 JDK 8 \u4E86\u3002</p><p>\u5982\u679C\u9700\u8981\u5728 macOS \u5B89\u88C5\u591A\u4E2A\u7248\u672C\u7684 JDK \uFF0C\u6BD4\u5982\u8BF4 JDK 17\uFF0C\u591A\u4E2A\u7248\u672C\u7684 JDK \u600E\u4E48\u7BA1\u7406\u5462\uFF1F\u53EF\u4EE5\u5B89\u88C5\u4E00\u4E0B jEnv\uFF0C\u4E00\u4E2A\u5E2E\u52A9\u6211\u4EEC\u7BA1\u7406 JAVA_HOME \u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5728 GitHub \u4E0A\u5DF2\u7ECF\u6536\u83B7 4.3k \u7684 star\u3002</p><p>\u5B89\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &#39;export PATH=&quot;$HOME/.jenv/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;eval &quot;$(jenv init -)&quot;&#39; &gt;&gt; ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jenv add /usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-b126c35d-edab-48a9-9543-831cfd0a51c6.png" alt=""></p><p>JDK \u7684\u5B89\u88C5\u8DEF\u5F84\u53EF\u4EE5\u901A\u8FC7\u4E0B\u56FE\u7684\u4F4D\u7F6E\u67E5\u627E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-a32accec-4044-480c-a8c8-3781bc5048b5.png" alt=""></p><p>\u7BA1\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jenv versions
jenv global 17.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-cc01fad8-53e9-4474-8923-08e97ac7090a.png" alt=""></p><p>\u662F\u4E0D\u662F\u8D3C\u65B9\u4FBF\uFF1F\u518D\u4E5F\u4E0D\u7528\u6574\u8FD9 <code>echo &#39;export PATH=&quot;/usr/local/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</code> \u73A9\u610F\u4E86\uFF01\u723D\uFF0C\u5B9E\u5728\u662F\u723D\uFF01</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,16);function w(k,K){const t=c("ExternalLinkIcon");return i(),s("div",null,[l,e("blockquote",null,[e("p",null,[e("a",p,[b,o(t)])])]),v,e("p",null,[e("a",m,[g,o(t)])]),h,u,j,J,e("p",null,[e("a",_,[f,o(t)])]),x])}var O=r(d,[["render",w],["__file","jdk-install-config.html.vue"]]);export{O as default};
