import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,a as e,d as n,b as i,e as c,r}from"./app.99eb8281.js";const d={},o=c(`<p>在日常开发中，我们会经常要在类中定义布尔类型的变量，比如在给外部系统提供一个RPC接口的时候，我们一般会定义一个字段表示本次请求是否成功的。</p><p>关于这个”本次请求是否成功”的字段的定义，我见过很多不同的开发者，定义的方式都不同，尤其是在属性的命名上，有人用 success，有人用 isSuccess 表示。</p><p>从语义上面来讲，两种命名方式都可以讲的通，并且也都没有歧义。那么还有什么原则可以参考来让我们做选择呢。</p><p>根据JavaBeans Specification规定，如果是普通的参数propertyName，要以以下方式定义其setter/getter：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public &lt;PropertyType&gt; get&lt;PropertyName&gt;();
public void set&lt;PropertyName&gt;(&lt;PropertyType&gt; a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，布尔类型的变量propertyName则是单独定义的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public boolean is&lt;PropertyName&gt;();
public void set&lt;PropertyName&gt;(boolean m);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>success方法的 getter 应该是isSuccess/getSuccess，而isSuccess的getter 应该是isIsSuccess/getIsSuccess。</p><p>但是很多人，在使用isSuccess作为属性名的时候，还是会采用isSuccess/getSuccess作为 getter 方法名，<strong>尤其是现在的很多 IDE 在默认生成 getter 的时候也是会生成isSuccess。</strong></p><p>在一般情况下，其实是没有影响的。但是有一种特殊情况就会有问题，那就是发生序列化的时候可能会导致参数转换异常。</p><p>我们先来定义一个 JavaBean：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Model implements Serializable {
   private static final long serialVersionUID = 1836697963736227954L;
   private boolean isSuccess;
   public boolean isSuccess() {
       return isSuccess;
   }
   public void setSuccess(boolean success) {
       isSuccess = success;
   }
   public String getHollis(){
       return &quot;hollischuang&quot;;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个 JavaBean 中，有一个成员变量isSuccess，三个方法，分别是IDE帮我们自动生成的isSuccess和setSuccess，另外一个是作者自己增加的一个符合getter命名规范的方法。</p><p>我们分别使用不同的 JSON 序列化工具来对这个类的对象进行序列化和反序列化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class BooleanMainTest {
     public static void main(String[] args) throws IOException {
         //定一个Model类型
         Model model = new Model();
         model.setSuccess(true);
         //使用fastjson(1.2.16)序列化model成字符串并输出
         System.out.println(&quot;Serializable Result With fastjson :&quot; + JSON.toJSONString(model));
         //使用Gson(2.8.5)序列化model成字符串并输出
         Gson gson =new Gson();
         System.out.println(&quot;Serializable Result With Gson :&quot; +gson.toJson(model));
         //使用jackson(2.9.7)序列化model成字符串并输出
         ObjectMapper om = new ObjectMapper();
         System.out.println(&quot;Serializable Result With jackson :&quot; +om.writeValueAsString(model));
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Serializable Result With fastjson :{&quot;hollis&quot;:&quot;hollischuang&quot;,&quot;success&quot;:true}
Serializable Result With Gson :{&quot;isSuccess&quot;:true}
Serializable Result With jackson :{&quot;success&quot;:true,&quot;hollis&quot;:&quot;hollischuang&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在fastjson和jackson的结果中，原来类中的isSuccess字段被序列化成success，并且其中还包含hollis值。而Gson中只有isSuccess字段。</p><p>我们可以得出结论：fastjson和jackson在把对象序列化成json字符串的时候，是通过反射遍历出该类中的所有getter方法，得到getHollis和isSuccess，然后根据JavaBeans规则，他会认为这是两个属性hollis和success的值。直接序列化成json:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{“hollis”:”hollischuang”,”success”:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是Gson并不是这么做的，他是通过反射遍历该类中的所有属性，并把其值序列化成json:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{“isSuccess”:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，<strong>由于不同的序列化工具，在进行序列化的时候使用到的策略是不一样的</strong>，所以，对于同一个类的同一个对象的序列化结果可能是不同的。那么，如果我们把一个对象使用fastjson进行序列化，再使用Gson反序列化会发生什么呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> public class BooleanMainTest {
     public static void main(String[] args) throws IOException {
         Model model = new Model();
         model.setSuccess(true);
         Gson gson =new Gson();
         System.out.println(gson.fromJson(JSON.toJSONString(model),Model.class));
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Model[isSuccess=false]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这和我们预期的结果完全相反，原因是因为JSON框架通过扫描所有的getter后发现有一个isSuccess方法，然后根据JavaBeans的规范，解析出变量名为success，把model对象序列化城字符串后内容为{&quot;success&quot;:true}。</p><p>根据{&quot;success&quot;:true}这个json串，Gson框架在通过解析后，通过反射寻找Model类中的success属性，但是Model类中只有isSuccess属性，所以，最终反序列化后的Model类的对象中，isSuccess则会使用默认值false。</p><p>但是，一旦以上代码发生在生产环境，这绝对是一个致命的问题。</p><p>所以，作为开发者，我们应该想办法尽量避免这种问题的发生。</p><p>所以，<strong>建议大家使用success而不是 isSuccess 这种形式。</strong> 这样，该类里面的成员变量时success，getter方法是isSuccess，这是完全符合JavaBeans规范的。无论哪种序列化框架，执行结果都一样。就从源头避免了这个问题。</p><hr><p><strong>微信8.0将好友放开到了一万，小伙伴可以加我大号了，先到先得，再满就真没了</strong></p><p><strong>扫描下方二维码即可加我微信啦，<code>2022，抱团取暖，一起牛逼。</code></strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xinlgjszjszyisxxxxsdybelxnhfyll-26b896af-468d-471e-a742-5233d276b555.jpg" alt="" loading="lazy"></p><h2 id="推荐阅读" tabindex="-1"><a class="header-anchor" href="#推荐阅读" aria-hidden="true">#</a> 推荐阅读</h2>`,36),u={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497256&idx=1&sn=39ae99dc47facc4132c79fe6f7271a53&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},p={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497242&idx=1&sn=f433ff14184980096fbb8cc8ff41fe68&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497214&idx=1&sn=1c49bbd259abb57ba9639f6f24bb5c63&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247497088&idx=1&sn=27a964ad3ec145693d661b697830aee0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247496969&idx=1&sn=f1f4e9d3cbc6f98ee445545c255b77f7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247496869&idx=1&sn=fb4ecfd5bf48fddc143edd6858b0d532&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486684&idx=1&sn=807fd808adac8019eb2095ba088efe54&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486362&idx=1&sn=fb6d71d328e8eee34976a86135dc6a7d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486362&idx=1&sn=fb6d71d328e8eee34976a86135dc6a7d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xinlgjszjszyisxxxxsdybelxnhfyll-888ea0e6-4ace-468b-892d-a0ddd65130dd.jpg",alt:"",loading:"lazy"})],-1);function S(q,z){const s=r("ExternalLinkIcon");return l(),a("div",null,[o,e("ul",null,[e("li",null,[e("a",u,[n("Spring Boot 3.0 M1 发布，正式弃用 Java 8，最低要求 Java 17。。。"),i(s)])]),e("li",null,[e("a",p,[n("还在用HttpUtil？试试这款优雅的HTTP客户端工具吧，跟SpringBoot绝配！"),i(s)])]),e("li",null,[e("a",v,[n("MySQL模糊查询再也用不着 like+% 了！"),i(s)])]),e("li",null,[e("a",m,[n("再见 Typora ！这款开源的 Markdown 神器界面更炫酷，逼格更高！"),i(s)])]),e("li",null,[e("a",b,[n("5分钟搞定！这款颜值爆表的数据可视化工具，你值得拥有！"),i(s)])]),e("li",null,[e("a",g,[n("SpringBoot 实现 Excel 导入导出，性能爆表，用起来够优雅！"),i(s)])]),e("li",null,[e("a",x,[n("40K+Star！Mall电商实战项目开源回忆录！"),i(s)])]),e("li",null,[e("a",h,[n("mall-swarm 微服务电商项目发布重大更新，打造Spring Cloud最佳实践！"),i(s)])])]),e("p",null,[e("a",_,[i(s)])]),f])}const y=t(d,[["render",S],["__file","xinlgjszjszyisxxxxsdybelxnhfyll.html.vue"]]);export{y as default};
