import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as p,a as e,d as a,b as i,e as o,r as s}from"./app.e9e1538d.js";const d={},h=o('<p><strong>手机号码一键登录</strong>是最近两三年出现的一种新型应用登录方式，比之前常用的短信验证码登录又方便了不少。登陆时，应用首先向用户展示带有本机号码掩码的授权登录页面，用户点击“同意授权”的按钮之后，应用即可获取到完整的本机号码，从而完成用户的登录认证。在这个过程中，应用只要确认登录用的手机号码是在绑定了此号码的手机上发起的即可认证成功，从这一点来看，它和短信验证码登录并无本质区别，都是一种设备认证登录方式。这篇文章就来捋一下其中的技术门道。</p><p>这几年为了保护用户的隐私安全，Android 和 iOS 系统都限制了应用获取本机号码的能力，即使通过某些技术手段获取到了本机号码，这个号码还可能是被篡改的，所以应用直接读取本机号码用于登录是不可行的。那么这些应用是怎么获取到真实的本机号码的呢？答案是电信运营商，手机要打电话、要上网、要计费，运营商肯定能对应到正确的手机号码。国内的运营商就是移动、联通、电信这三家，它们都开放了这种能力。对于在互联网大潮中被管道化的运营商来说，不失为一种十分有意义的积极进取。</p><h2 id="手机流量上网的原理" tabindex="-1"><a class="header-anchor" href="#手机流量上网的原理" aria-hidden="true">#</a> 手机流量上网的原理</h2><p>手机号码一键登录是借助手机流量上网来实现，所以先要搞清楚流量上网的原理。</p><h3 id="五层网络模型" tabindex="-1"><a class="header-anchor" href="#五层网络模型" aria-hidden="true">#</a> 五层网络模型</h3><p>对网络比较熟悉的同学，应该了解五层协议，那么手机流量上网时的五层网络模型有何不同呢？</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/juejin-shifzgdsjhmyjdl-70e6c762-e8a5-49e9-82c9-6e0a9ea2c245.jpg" alt="手机流量上网的五层网络模型" loading="lazy"></p><p>从上图可以看出，手机流量上网的主要区别在数据链路层和物理层。在数据链路层，流量上网没有 MAC 地址的概念，它采用一种点对点协议（PPP），手机端通过拨号方式建立这种 PPP 连接，然后发送数据。在物理层，流量上网通过手机内置的基带模块进行无线信号的调制、解调工作，从而实现与移动基站之间的电磁波通信。</p><h3 id="流量上网的机制" tabindex="-1"><a class="header-anchor" href="#流量上网的机制" aria-hidden="true">#</a> 流量上网的机制</h3><p>点对点协议支持身份验证功能，手机端发起连接时会携带自己的身份证明，一般就是手机卡内置的 IMSI，这个 IMSI 也会保存在运营商的数据库中，因此基站就可以验证连接用户的身份，当然这个验证过程不是简单的对比 IMSI，会有更多安全机制。为了更清楚的了解流量上网机制，下面再来一张 4G 流量上网时手机与运营商的交互示意图：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/juejin-shifzgdsjhmyjdl-644904c8-1a15-4a91-ae99-451538fe95a7.jpg" alt="手机流量上网示意图" loading="lazy"></p><h4 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件" aria-hidden="true">#</a> 核心组件</h4><p><strong>手机</strong>：这其中对流量上网起到关键作用的就是手机卡和基带模块。手机卡中保存了 IMSI，全称 International Mobile Subscriber Identification Number，国际移动用户识别码。IMSI 是手机卡的身份标识。</p><p><strong>基站</strong>：就是外边常见的铁架子信号塔，是一种能覆盖一定范围的无线电收发信息电台，手机会连接到它，然后它再通过光纤连接到运营商网络，从而实现移动通信。</p><p><strong>MME</strong>：Mobility Management Entity，移动控制单元。手机建立连接时会先访问到这里，负责：手机与基站的接入控制，手机卡的鉴权、会话管理、安全传输，漫游控制、跨运营商通信等。</p><p><strong>HSS</strong>：Home Subscriber Server，归属签约用户服务器。保存本地签约的手机卡信息，包括手机卡 IMSI 与手机号的对应关系，手机号的套餐信息、手机号的归属地信息等。</p><p><strong>S-GW</strong>：Service Gateway，服务网关。4G 环境下，用户侧与运营商核心网之间的业务网关。访问能不能进入，能做什么业务，去哪里做业务，是在这里控制的。跨运营商计费、漫游计费等也在这里完成。</p><p><strong>P-GW</strong>：PDN Gateway，PDN 网关。运营商核心网与互联网之间的网关，手机真正上网就是通过它了。它会给手机分配一个 IP 地址，控制上网的速度，对流量进行计费等。</p><p><strong>PCRF</strong>：Policy and Charging Rules Function，策略与计费控制单元，保存每个用户的网络访问策略和计费规则。</p><h4 id="上网过程" tabindex="-1"><a class="header-anchor" href="#上网过程" aria-hidden="true">#</a> 上网过程</h4><p>为了方便理解，这里将上网的过程大致分为两个部分（和上图的 1、2 对应）：</p><ul><li><p><strong>1 接入</strong>：建立连接时，手机携带 IMSI 信息，通过基站访问到 MME，MME 通过 HSS 验证 IMSI 信息，然后 MME 进行一些初始化工作，返回一些鉴权参数给手机，手机再进行一些计算，然后把计算结果返回给 MME，MME 验证手机的计算结果，验证通过则允许接入。这个过程保证了接入的安全，MME 还为后续的数据传输提供了加密传输支持，保护数据不被窃听和篡改，有兴趣的同学可以去详细了解下。</p><p>如果手机卡销售的时候没有写入手机号，手机卡首次注册登记的时候，运营商会从 HSS 中取出手机号，然后再写入手机卡中。</p><p>实际应用中，为了防止跟踪和攻击，不是每次通信时都要携带 IMSI，MME 会生成一个临时的 GUTI 对应到 IMSI，就像 Web 程序中的 SessionId。MME 还有一定的机制控制 GUIT 的重新分配。</p></li><li><p><strong>2 传输</strong>：手机网络流量的传输，还是先要通过基站，然后下一步进入 S-GW，S-GW 会检查用户的授权，就像 Web 程序中检查前端提交过来的 SessionId，再看看用户有没有权限进行其提交的业务，这里就是看看用户有没有开通流量上网，这是 S-GW 通过连接 MME 实现的。S-GW 处理完毕后，数据包会进入 P-GW，P-GW 在手机使用流量上网时会给用户分配一个 IP 地址，然后数据包通过网关进入互联网，访问到相关的资源。P-GW 还会对上网行为进行速率控制、流量计费等操作，这些策略来源于 PCRF，PCRF 中的规则是根据 HSS 中的用户套餐、用户等级等计算出来的。</p><p>对 P-GW 来说 S-GW 屏蔽了用户的移动性，手机在多个基站切换时，S-GW 不变。</p></li></ul><p>以上就是手机流量上网的基本原理了，可以看到，运营商通过 IMSI 或者 GUTI 完全有能力获取到当前上网用户的手机号码。对于运营商的一键登录具体是怎么实现的，我并没有找到相关的介绍，但是可以设想下：手机应用通过运营商的 SDK 发起获取手机号码的业务请求，此时会携带 IMSI 或者 GUTI，业务请求到达 S-GW，S-GW 鉴权通过，然后将这个业务请求路由到运营商核心网中获取手机号码的服务，服务根据业务规则从 HSS 中取出手机号码并进行若干处理。</p><h2 id="一键登录的原理" tabindex="-1"><a class="header-anchor" href="#一键登录的原理" aria-hidden="true">#</a> 一键登录的原理</h2><p>理解了手机流量上网的原理，再来看下一键登录业务是如何实现的，这个部分属于上层应用程序开发，大家应该相对熟悉一些。</p><p>如果你接入过微信的第三方应用登录，或者其他类似的第三方应用登录，过程是差不多的。还是先来看图：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/juejin-shifzgdsjhmyjdl-15c46624-1045-4c05-8e39-da0c7e6da758.jpg" alt="手机号码一键登录时序图" loading="lazy"></p><p>这里对一些关键步骤进行说明：</p><ul><li><p>2 预取手机号掩码：这个手机号掩码需要在请求用户授权的页面展示给用户看，因为获取这个信息要通过电信运营商的网络，所以可能会比较慢，为了提升用户体验，可以在应用启动的时候就去获取，然后缓存一段时间。</p></li><li><p>8 授权请求：因为应用获取用户手机号这个事比较敏感，必须让用户清楚的了解并授权之后才能进行，为了确保这件事，运营商的认证 SDK 提供了这个授权请求页面，用户确认授权后，SDK 直接向运营商认证服务发起请求认证，认证服务会返回一个认证 Token 给应用。应用再通过自己的服务端拿着这个 Token 找运营商获取手机号码。</p></li><li><p>17 生成应用授权 Token：应用要维护自己用户的登录状态，这里可以采用传统的 Session 机制，也可以使用 JWT 机制。</p></li><li><p>3 预取手机号掩码 和 11 请求认证，都需要通过手机蜂窝网络通信，也就说需要通过手机流量上网。如果手机同时开启了流量和 WIFI，认证 SDK 会将手机短暂切换到流量上网模式。如果手机没有开启流量，有些 SDK 还会在上次成功取号之后多缓存一个临时 Token，这样也能成功实现一次一键登录，不过这个限制性很大。</p></li></ul><p>这里其实还有一个<strong>安全问题</strong>：</p><p>14 登录请求：用户如果随便造一个认证 Token，然后就向应用服务提交请求，应用服务再向认证服务提交请求，这属于一种跨站攻击。虽然这个 Token 可以被阻止，但是不免浪费资源，给服务端带来压力。</p><p>这一点微信第三方应用登录做的比较好，用户登录前，应用服务端先生成一个随机数，然后应用前端向应用服务端提交时，带着这个随机数，应用服务端可以验证这个随机数。</p><p><strong>号码验证场景</strong></p><p>除了用于登录，运营商网关的这种取号能力，还可以用在验证手机号上，在某些关键业务上，比如支付过程中，要求用户输入本机手机号码或者其中的某几位，然后通过运营商认证服务验证手机号是否本机号码。</p><h2 id="隐私保护问题" tabindex="-1"><a class="header-anchor" href="#隐私保护问题" aria-hidden="true">#</a> 隐私保护问题</h2><h3 id="设备唯一标识问题" tabindex="-1"><a class="header-anchor" href="#设备唯一标识问题" aria-hidden="true">#</a> 设备唯一标识问题</h3><p>现在大家对隐私问题关注的越来越多了，经常会出现这种情况：你在某电商网站搜索了某个商品，然后访问其它网站时，都向你推荐这类商品的广告。还有一种感觉很恐怖的情况，你刚和某个人谈论了某件事，然后就在某个 App 上看到了关于这件事的推荐，有人猜测是 App 在偷听，不过基于目前的舆论和监督，偷听风险太大，这其中的原因可能真的只是算法太厉害了。</p><p>最近几年 Android 和 iOS 系统都对 App 获取手机唯一标识进行了限制，比如 IMEI、Mac 地址、序列号、广告 Id 等，目的就是防止用户的信息在多个 App 之间进行关联，导致泄漏用户的隐私，产生一些安全问题和法律风险，前述跨 App 的广告行为也自然受到了抑制。</p><p>在了解一键登录的技术原理时，看到某运营商提供了一种和 SIM 卡绑定的设备唯一 Id 服务，宣传语就是为了应对移动操作系统限制访问手机唯一标识的问题，在现今越来越重视隐私保护的前提下，如果这种能力开放给了广告平台，就是开历史的倒车了。</p><h3 id="手机号作为身份标识的问题" tabindex="-1"><a class="header-anchor" href="#手机号作为身份标识的问题" aria-hidden="true">#</a> 手机号作为身份标识的问题</h3><p>对于国内普遍使用手机号登录的方式，从技术上很难限制 App 之间进行手机号关联，然后综合分析用户的行为。比如某家大厂运营了多款不同种类的热门 App，它就有能力更全面的了解某个用户，如果要限制可能就得通过法律层面来解决了。至于不同厂商之间的手机号关联行为，基于商业利益的保护，不太可能会出现。</p><p>在国内这种商业环境下，如果你真的对自己的隐私很关注，最好只使用账号密码的方式登录，否则经常更换手机号可能是一种没办法的办法。</p><h3 id="手机号重新销售问题" tabindex="-1"><a class="header-anchor" href="#手机号重新销售问题" aria-hidden="true">#</a> 手机号重新销售问题</h3><p>手机号的总量是有限的，为了有效利用手机号资源，手机号注销以后，经过一段时间就会被运营商重新销售。如果新的手机号拥有者拿着这个手机号登录某个 APP，而这个手机号之前已经在这个 App 上注册过，产生了大量的使用记录，那么此手机号前拥有者的隐私就会被泄漏。所以大家现在都不太敢随便更换手机号，因为注册过的地方太多了，留下了数不清的使用痕迹。</p><p>在了解一键登录的技术原理时，还看到某运营商提供了一种“手机号更换绑定 SIM 卡通知”的服务，应用可以据此解绑重新销售的手机号与应用账号之间的关系，从而保护用户的隐私。在上文中已经提过手机卡使用 IMSI 进行标识，如果手机号被重新销售，就会绑定新的 IMSI，运营商可以据此产生通知。当然运营商还需要排除手机卡更换和携号转网的情况，这些情况下手机号也会绑定新的 IMSI。</p><p>不得不说运营商的这个服务还是挺赞的 👍。</p>',46),c={href:"https://juejin.cn/post/7059182505101885471",target:"_blank",rel:"noopener noreferrer"};function l(S,I){const r=s("ExternalLinkIcon");return n(),p("div",null,[h,e("blockquote",null,[e("p",null,[a("参考链接："),e("a",c,[a("https://juejin.cn/post/7059182505101885471"),i(r)]),a("，整理：沉默王二")])])])}const b=t(d,[["render",l],["__file","shifzgdsjhmyjdl.html.vue"]]);export{b as default};
