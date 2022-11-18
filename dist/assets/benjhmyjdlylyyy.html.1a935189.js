import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,d as a,b as n,e as c,r as d}from"./app.99eb8281.js";const o={},h=c('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>很多 APP 目前都支持“本机号码一键登录”功能。本机号码一键登录是基于运营商独有网关认证能力推出的账号认证产品。用户只需一键授权，即可实现以本机号码注册/登录，相比先前的短信验证码流程体验更优。</p><p>目前市面上有很多厂商提供三网验证的服务，只不过是对三大运营商的包装。要了解具体的原理可直接看三大运营商相关的介绍。</p><h2 id="中国移动" tabindex="-1"><a class="header-anchor" href="#中国移动" aria-hidden="true">#</a> 中国移动</h2><p>中国移动号码认证服务支持移动、联通、电信三网号码。主要产品功能：</p><ul><li>一键登录：依托运营商的移动通信网络，采用通信网关取号技术，准确识别用户流量卡归属的手机号码。在获得用户授权后，App 端（适配 iOS 和 Android）可使用本机号码实现一键免密登录。</li><li>本机号码校验：通过 SDK/JSSDK 提供的本机号码校验功能，调用网关鉴权方式，验证用户输入的手机号码或后台绑定的手机号码是否为本机流量卡归属号码，保证机卡不分离，用于快捷登入和安全风控等场景。本机号码校验现已适配 iOS、Android、H5、小程序、快应用。</li></ul><p>获取手机号码（一键登录）：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-d3e6b98a-662e-4bbc-a26d-dbd18e7a5825.png" alt="" loading="lazy"></p><p>本机号码校验：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-2f587845-a8d6-4038-b7b6-012ea87d6ccd.png" alt="" loading="lazy"></p><h2 id="取号方法" tabindex="-1"><a class="header-anchor" href="#取号方法" aria-hidden="true">#</a> 取号方法</h2><p>通过调用安卓的 getPhoneInfo 或 iOS 的 getPhoneNumberCompletion，在用户无感知的情况下进行网络判断、蜂窝数据网络切换和网关取号等操作（以上操作均需消耗一定时间），返回取号是否成功的结果。</p><ul><li>取号所需网络环境：运营商取号能力是通过数据网关实现，取号过程须在数据流量打开的情况下才能进行。因此，用户如果关闭数据流量将无法取号；若当前信号弱或者网络有干扰时，时延会高于平均值，取号成功率降低。</li><li>超时设置：SDK 默认超时设置为 8000ms，同时提供设置取号超的方法：安卓通过 setOverTime 设置，iOS 通过 setTimeoutInterval 设置。</li><li>运营商判断：SDK 提供判断用户当前网络状态和流量卡所属运营商的方法，通过调用安卓 SDK 的 getNetworkType 或 iOS 的 networkInfo 可获得以上信息，以便对不同用户选择不同的运营商的 SDK 进行取号或选择不同的登录方式。</li><li>关于取号缓存：应用取号或者授权成功后，SDK 将取号的一个临时凭证缓存在本地，缓存能有效提高取号成功率、降低时延，并允许用户在未开启蜂窝网络时成功取号。SDK 本身对缓存有处理逻辑，在某些场景下（如换卡）会让缓存提前失效，但若应用对安全性要求较高，也可以通过 SDK 提供的方法（安卓的 delScrip 和 iOS 的 delectScrip）让缓存马上失效。</li></ul><h2 id="本机号码校验" tabindex="-1"><a class="header-anchor" href="#本机号码校验" aria-hidden="true">#</a> 本机号码校验</h2><p>通过调用安卓的 mobileAuth 或 iOS 的 mobileAuthCompletion 方法，可在不拉起授权页的情况下获得 token。此时获得的 token 不能用于兑换用户的完整号码，只能用于校验本机号码与待校验号码的一致性。</p><ul><li>预取号：安卓的 getPhoneInfo 或 iOS 的 getPhoneNumberCompletion 所形成取号缓存 scrip 同样适用于本机号码校验，可提前进行取号以提高后续获取 token 的效率。</li><li>适用场景：可在用户无感知的情况下校验本机号码与待校验号码的一致性，适用于所有基于手机号码进行风控的场景。</li></ul><h2 id="中国电信" tabindex="-1"><a class="header-anchor" href="#中国电信" aria-hidden="true">#</a> 中国电信</h2><p>中国电信天翼账号开放平台提供了：免密登录、手机号码认证、二次卡校验等服务。目前只支持中国电信用户。</p><p>免密认证：天翼账号免密认证方案，依托运营商的移动数据网络，采用“通信网关预登录”及 SIM 卡识别等技术，准确识别用户手机号码，实现一键登录，并可有效规避短信验证码泄露风险</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-747ce8d0-1577-43e1-8daa-922f26ef139c.png" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-cbf66763-aa11-49ad-93f6-cdbca8082154.png" alt="" loading="lazy"></p><p>手机号码校验：确认本机号码信息是否为当前用户本机号码。依托运营商的移动数据网络，采用“通信网关预登录”及 SIM 卡识别等技术，判断用户输入的手机号与本机号码是否一致。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-a885c088-1753-4b8d-9af7-5cfde60fded6.png" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-e89faaa4-3ad3-43f0-a51b-85c900c09fbf.png" alt="" loading="lazy"></p><p>二次卡校验：众所周知，三大运营商每月注销的手机号约有 2000 多万，为避免手机号资源浪费，运营商会先回收已注销的手机号，然后重新销售，重新销售的卡即为二次卡。如果用户更换了手机号，且未与原账号解绑，可能存在安全风险。</p><p>天翼账号二次卡校验方案， 使用独有的运营商二次号数据库，可快速检测用户号码更换状态，保障号码旧用户隐私安全。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-c72b3175-bf04-4a4a-8edf-7d44ed20f79d.png" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-50cb4f6f-6862-4329-8e15-eb4511aac7e9.png" alt="" loading="lazy"></p><h2 id="中国联通" tabindex="-1"><a class="header-anchor" href="#中国联通" aria-hidden="true">#</a> 中国联通</h2><p>中国联通通信创新能力平台提供了号码认证（一键登录）、匿名设备标识、匿名用户标识、空号识别、二次号验证、三要素验证等服务。</p><h3 id="号码认证" tabindex="-1"><a class="header-anchor" href="#号码认证" aria-hidden="true">#</a> 号码认证</h3><p>依托运营商网关认证能力，面向互联网应用提供的本机手机号码一键注册登录及本机手机号码校验服务，支持 APP、H5 页面多场景应用。官方 SDK，支持联通、移动、电信三网，智能化程度高，交互时间短，提升用户体验、提高拉新转化率;专利技术，性能可靠，降低空号注册登录、密码拦截盗取风险。</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景：</h3><ul><li>一键登录</li><li>APP 一键登录。手机在有蜂窝信号的环境中（若 WIFI 接入，SDK 可瞬间切换至蜂窝信号再切回)，可自动获取手机号码，帮助用户实现一键验证快捷登录，无需手动输入号码和短信验证，有利于提升用户体验，提高登录安全性。</li><li>H5 一键登录。适用于手机接入蜂窝信号时，H5 页面登录场景，用户只需输入 4 位本机号码即可实现快捷登录，减少降登录等待时间。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-645434bc-0434-4f3c-b197-c092841276b8.png" alt="" loading="lazy"></p><ul><li>本机校验。自动校验用户手机号与当前本机卡号的一致性，免输登录密码或短信验证码;适用于如手机号绑定、支付确认、积分兑换等需要具备安全校验能力的业务场景，提供仅限本机操作的安全风控机制。支持有蜂窝信号环境下的 APP 及正在使用蜂窝信号下的 H5。</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/cnblog-benjhmyjdlylyyy-a0aaa292-2634-4600-b138-dc10f1a376a6.png" alt="" loading="lazy"></p><h2 id="匿名设备标识" tabindex="-1"><a class="header-anchor" href="#匿名设备标识" aria-hidden="true">#</a> 匿名设备标识</h2><p>通过识别移动设备唯一 ID，为客户提供基于用户和设备的标识方案，支持 IOS 和安卓系统，不依赖设备厂商，具备稳定性和唯一性，可关联安卓设备资产数据，帮助企业找回历史关联资产，实现基于用户画像的精准投放，有效识别设备篡改和营销作假，防止薅羊毛，避免金融风险等。</p><p>应用场景：</p><ul><li>风险识别：企业开展营销活动时，面对薅羊毛、黑产等，通过设备识别可有效识别判断参与用户，防止有限资源被无价值用户占用，支持 APP/H5/小程序等全场景，覆盖安卓/IOS 生态系统。适用于开展各类营销活动的企业，如电商、金融、游戏、生活等。</li><li>场景营销：企业可基于不同营销场景（APP/H5/小程序）下的用户标识，进行跨应用用户分析与画像生成，实现精准营销推送。适用于需分析用户偏好、阅读习惯的企业，如购物、新闻、视频、娱乐、阅读等.</li></ul><h2 id="匿名用户标识" tabindex="-1"><a class="header-anchor" href="#匿名用户标识" aria-hidden="true">#</a> 匿名用户标识</h2><p>通过手机用户的公私网 IP 返回唯一串码，可以在保护用户手机号不泄露的情况下，提供用户唯一标识（即伪码）方案。仅支持联通用户。</p><p>应用场景：</p><ul><li>会员营销：会员营销活动时，用户领取会团优惠，平台方通过联通唯一识别平台将手机号转换成伪码供商户进行维系和发放。适用于入住商户无法获取平台用户手机号的场景。</li></ul><h2 id="空号识别" tabindex="-1"><a class="header-anchor" href="#空号识别" aria-hidden="true">#</a> 空号识别</h2><p>识别号码是否为真实有效的开机使用号码，对于不可达号码（例如关机、养卡等情况）采取相应的运营措施。识别过程一秒以内，支持大规模并发查询，且对用户无感知。帮助企业快速、高效、精准开展营销、维系等商业活动，减少营销成本。</p><p>应用场景：</p><ul><li>外呼中心：用于外呼中心，回访或者推介产品之前先对用户手机状态进行有效识别，关机、离网及不在服务区用户免拨叫，节省人力物力。</li><li>存量用户维系：用于检测用户手机是否处于在网状态，便于企业精准开展后续营销活动。例如优惠券发放、权益下达等，为真实客户送权益，送利益。</li><li>注册用户清洗：对注册会员的号码进行检测，对短期内高频次的注册行为进行监控，对可疑号码进行监控，及时清理批量注册的垃圾用户和数据、被占用数据，将恶意注册用户拒之门外，防止“薅羊毛党”恶意套利现象。使用号码检测功能，可以减少企业客户的营销维护成本，保护真实用户的权益。</li></ul><h2 id="二次号验证" tabindex="-1"><a class="header-anchor" href="#二次号验证" aria-hidden="true">#</a> 二次号验证</h2><p>次号验证产品是指核验手机号码在指定时间之后是否重新开户。</p><p>应用场景：</p><ul><li>注册/登录/密码找回：针对注册/登录/密码找回等场景，企业可通过使用联通二次号码验证产品识别当前注册登录号码是否为二次放号，从而避免二次放号用户使用原号码账号可能带来的用户隐私泄露和经济损失。</li></ul><h2 id="三要素验证" tabindex="-1"><a class="header-anchor" href="#三要素验证" aria-hidden="true">#</a> 三要素验证</h2><p>三要素验证产品提供联通用户的姓名、身份证号、手机号三要素的一致性核验服务。</p><p>应用场景：</p><ul><li>实名认证：针对金融、婚恋等应用系统中的实名注册场景，企业可通过联通三要素验证产品识别用户身份真实性和信息一致性，有助于防范用户风险。</li><li>贷前审核：针对借贷、信用卡申请等金融场景，企业可以通过使用联通三要素验证产品识别申请用户信息真实度，助力用户风险评估和贷款决策。</li></ul>',57),p={href:"https://www.cnblogs.com/Frankada/p/15689036.html",target:"_blank",rel:"noopener noreferrer"};function b(s,y){const t=d("ExternalLinkIcon");return i(),r("div",null,[h,e("blockquote",null,[e("p",null,[a("参考链接1："),e("a",p,[a("https://www.cnblogs.com/Frankada/p/15689036.html"),n(t)]),a("，整理：沉默王二")])])])}const u=l(o,[["render",b],["__file","benjhmyjdlylyyy.html.vue"]]);export{u as default};
