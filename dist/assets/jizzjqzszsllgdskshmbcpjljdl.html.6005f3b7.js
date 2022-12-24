import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a as e,d as t,b as l,e as c,r as n}from"./app.e9e1538d.js";const d={},s=c('<p>在我们平时做项目的时候，经常会遇到做可视化面板的需求，今天我们就以电商项目为例子，来聊聊电商项目的可视化面板需要包含哪些数据指标！</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-a826109e-3371-4630-9466-b6d5834d6127.jpg" alt="" loading="lazy"></p><p>不知道你的日常是否经历过这样的场景——</p><ul><li>产品：我们这期要上线巴拉巴拉……</li><li>开发：为什么要做这个需求呢？</li><li>产品：因为这个需求，能给我们带来**收益……总之，好处大大地有！</li><li>开发：……</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-6d27b9bf-0661-4d25-a68d-3d91224e5dac.jpg" alt="" loading="lazy"></p><p>放心，有你好果子吃</p><p>对于我们开发而言，很多时候想的的是写很吊的代码，收益也似乎很好衡量：</p><ul><li>接口平均响应时间降低了30%</li><li>QPS提升了10%</li><li>节约了15%的机器</li><li>界面渲染时间降低20%</li><li>系统可用性提升一个9</li></ul><p>……</p><p>但是更多时候，写的都是业务需求，一阵CRUD之后，只余深深的空虚……</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-ac753160-e356-48cb-b261-dac757c7f2ee.jpg" alt="" loading="lazy"></p><p>秃然懵比</p><p>这节我们就来看看，电商的数据指标，了解我们肝的业务，收益在哪。</p><h2 id="电商数据概览" tabindex="-1"><a class="header-anchor" href="#电商数据概览" aria-hidden="true">#</a> 电商数据概览</h2><blockquote><p>事情是这样的，你是一个平平无奇的靓仔，某天窝在沙发上，刷着某音，突然一个漂亮的小姐姐映入眼帘，你忍不住点了进去，小姐姐的一顿操作让你头晕目眩，突然，视频的最后：“想要同款XX吗？点击评论区置顶链接！”</p><p>恰饭啊，你还是忍不住点开了链接，点击进去，原来是一家新的电商网站，模特还不错，刷刷看。</p><p>你浏览了首页的商品列表，没有找到想要的，你又在检索框，搜索“**”，嘿嘿，这个好，你又忍不住点进详情页看了一下，刷了一下评论，你又发现有新人优惠券，买了！哦，还没注册，先注册，再购买，下单，付款，一气呵成，等着宝贝到了。</p><p>没什么其它事情，你又刷了一会，发现有些东西有点想买，但又不是特别想买，嗯，先加购物车吧。</p><p>过两天，你想起来，看看你的宝贝到哪了，哎，快到了，物流挺给力。看看购物车，你发现有些东西挺想要，选中购物车里的商品，下单、付款、躺平，你又接着刷小姐姐去了，嗯，这个小姐姐也有个链接，点进去看看……</p></blockquote><p>看到上面这个，大家应该都知道对于电商而言，一个新用户购物的完整流程了。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-f7b782d2-6a97-49f4-80fa-03793a45e154.jpg" alt="" loading="lazy"></p><p>电商新用户购物</p><p>那么从数据指标的角度来看这一套业务的流程，它又是什么样子呢？</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-b29d77a7-1ca6-450f-bf19-1cbd4fc143d7.jpg" alt="" loading="lazy"></p><p>电商业务流程数据看点</p><ol><li><strong>拉新</strong></li></ol><p>拉新，最主要的方式就是广告，通过在各个渠道投放广告，像搜索引擎、抖音红人、公众号、微博等等。</p><p>通常需要关注每个渠道的拉新数量，和获客成本，比如CPA（单个注册成本）。</p><p>当然，拉新数据，更多的是市场部门在关注，产品关注更多的是人拉到网站后的数据。 2. <strong>流量</strong></p><p>用户来了之后，就会浏览各个页面，比如从渠道进来的落地页，商城的首页，商品分类的列表页，搜索的结果页，商品的详情页。</p><p>这里需要关注，每个页面的UV、PV、浏览时长、点击率等等。 3. <strong>转化</strong></p><p>用户光看看没啥用，挣不到钱，得看看用户是不是掏钱买，掏钱买的情况。</p><p>购买的几个关键点是：加购、下单、支付。</p><p>需要关注每个环节的人数，和从上一级下来的转化率，加购人数、加购率、下单人数、下单金额、支付单量、支付金额、客单价等等。</p><p>对于流量和转化，其实是呈一个漏斗形的，也就是所谓的<code>流量漏斗转化模型</code>：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-1d7104ba-5f2a-4917-8d43-ae79ee29805a.jpg" alt="" loading="lazy"></p><p>流量漏斗转化模型</p><p>可以看到，每一级往下，都会过滤掉一些流量，所以也可以注意看一下，各个电商平台都在想法设法地缩减用户的购买流程，甚至抖音电商可以做到“一键购买”。 4. <strong>复购</strong></p><p>好不容易，拉来一个新用户，当然是希望用户多复购，不能做一锤子买卖。这时候，就要关注用户活跃度、复购率这些指标。</p><p>除了这个主线上的流程，我们还得关注一些其它的指标，例如营销活动的触达率，风险订单的拦截率，用户的满意度等等，接下来我们来详细看看电商的数据指标。</p><h2 id="电商数据详览" tabindex="-1"><a class="header-anchor" href="#电商数据详览" aria-hidden="true">#</a> 电商数据详览</h2><h3 id="用户指标" tabindex="-1"><a class="header-anchor" href="#用户指标" aria-hidden="true">#</a> 用户指标</h3><p>用户是电商的核心，有人来了，把人留住，电商才能生存和发展。</p><p>我们来看看，有哪些需要关注的用户指标：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-0f8d11c3-83dd-4d34-9486-736f6dc4c6c0.jpg" alt="" loading="lazy"></p><p>主要用户指标</p><ul><li><strong>注册用户数</strong>：注册电商平台用户数</li><li><strong>日增新用户</strong>：每天注册用户的数量</li><li><strong>活跃用户数</strong>：登录了电商平台的用户，可以分为<code>日活跃用户</code>（日活：DAU）、<code>周活跃用户数</code>（周活：WAU）、月活跃用户（月活：MAU）</li><li><strong>活跃率</strong>：活跃用户/总用户数。</li><li><strong>新用户数</strong>：历史成交订单数为0的用户数</li><li><strong>老用户数</strong>：历史成交订单数大于0的用户数</li><li><strong>复购用户数</strong>：历史成交订单数大于1的用户数</li><li><strong>沉默用户数</strong>：距离上次登录平台大于30天，小于90天的用户数</li><li><strong>流失用户数</strong>：距离上次登录平台大于等于90天的用户数</li><li><strong>留存率</strong>：（第1天新增的用户中，第N天还在登录浏览的用户数）/第1天新增用户数</li></ul><p>根据时间，留存率又分为次日留存率、第7日留存率、第30日留存率。</p><p>根据不同用户的区分，可以对用户进行分层精细化运营，比如新用户可以通过新人优惠券和push，促使其尽快完成首单，沉默用户可以通过邮件、优惠等等尝试召回。</p><p>留存率可以评估电商产品功能对用户的黏性，如果留存率过低，那就说明用户对电商产品的粘性低，就得想办法提高留存了。</p><h3 id="流量指标" tabindex="-1"><a class="header-anchor" href="#流量指标" aria-hidden="true">#</a> 流量指标</h3><p>流量规模指标，就是看看用户浏览了什么，多少用户浏览了。</p><p>关于流量，首先要知道两个指标的定义：</p><ul><li><strong>PV</strong>：访问次数，Page View，页面浏览次数，用户每打开一个网页可以看作一个PV，用户看了十个网页，那么PV为10。</li><li><strong>UV</strong>：独立访客数，Unique Visitor，值得的是不重复访问电商平台的人数，一个用户一天之内看了十个界面，也之算一个UV。</li></ul><p>电商平台分为多级页面，包括首页、活动页、列表页、搜索页、商详页等等，需要关注这些页面的流量，来观测各个页面对用户的吸引度、流量漏斗中哪一环流失比较多等等。</p><ul><li>首页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-b5f84f7b-dc6e-4583-8af6-c9139fa355d8.jpg" alt="" loading="lazy"></p><p>首页</p><ul><li>活动页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-45ec832f-92a1-4dad-b0a7-e1a17b461fc2.jpg" alt="" loading="lazy"></p><p>活动页</p><ul><li>搜索页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-9e6109e9-ec6e-4c5b-a0e9-aa27a9058a67.jpg" alt="" loading="lazy"></p><p>搜索页</p><ul><li>商详页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-858232e5-c52c-4170-ac92-1721e9d4cada.jpg" alt="" loading="lazy"></p><p>商品详情页</p><ul><li>下单页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-052645bb-d5bf-4cb5-b925-d8457d143694.jpg" alt="" loading="lazy"></p><p>下单页</p><ul><li>支付页</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-a168dc42-2620-4524-85fd-1d2df8f0c234.jpg" alt="" loading="lazy"></p><p>支付页</p><p>通常需要关注各个界面的曝光UV、点击UV、页面点击PV、页面UV点击率、页面PV点击率。</p><p>所以大家可以看到，电商的产品经理在提需求的时候，除了UI、业务等等之外，通常都会附加一些埋点的需求，通过埋点上报，来分析流量数据。</p><h3 id="转化-销售指标" tabindex="-1"><a class="header-anchor" href="#转化-销售指标" aria-hidden="true">#</a> 转化/销售指标</h3><p>用户来了，还得看用户买不买，这时候，就需要关注电商主要业务历程：<code>浏览</code>&gt;<code>加车</code>&gt;<code>下单</code>&gt;<code>支付</code> 各个节点的转化率，也就是所谓的<code>加车率</code>、<code>下单转化率</code>、<code>支付转化率</code>。</p><h4 id="购物车类指标" tabindex="-1"><a class="header-anchor" href="#购物车类指标" aria-hidden="true">#</a> 购物车类指标</h4><p>包括一定周期（日、周、月）<code>加入购物车次数</code>、<code>加入购物车用户数</code>、<code>加入购物车商品数</code>，也得关注流失的情况，<code>放弃购物车用户数</code>。</p><p>转化率包括<code>加购下单率</code>、<code>加购支付率</code>等等。</p><h4 id="订单类指标" tabindex="-1"><a class="header-anchor" href="#订单类指标" aria-hidden="true">#</a> 订单类指标</h4><p>订单是电商的核心模块。</p><p>包括基础指标的统计：<code>下单数量</code>、<code>下单用户数</code>、<code>下单金额</code>。</p><p>下单之后，还得关注最终的成交情况：<code>成交数量</code>、<code>成交用户数</code>、<code>成交金额</code>、<code>成交件单价=成交金额/成交数量</code>、<code>成交客单价=成交金额/成交人数</code>、<code>成交人数转化率=成交人数/下单人数</code>、<code>成交订单转化率=成交数量/下单数量</code>。</p><p>也得关注下单过程中的流失情况：<code>关单数量</code>、<code>关单人数</code>、<code>关单金额</code>、<code>自动关单数量</code>、<code>手动关单数量</code>。</p><p>手动关单通常会做一些问卷调查的功能，需要关注用户去掉订单的原因，商品质量、无法支付、价格过高……相当于用户调研，来根据用户的反馈不断迭代。</p><p>自动关单，通常会去做一些挽回，短信、邮件提醒用户支付，这时候也要关注弃单的挽回率。</p><h4 id="支付类指标" tabindex="-1"><a class="header-anchor" href="#支付类指标" aria-hidden="true">#</a> 支付类指标</h4><p>支付是电商业务的最后一环，做好这一环，整个交易才能平稳落地。</p><ul><li><strong>支付方式覆盖度</strong></li></ul><p>国内电商基本不用考虑太多的支付方式，支付宝、微信基本可以涵盖大部分用户的支付需求。跨境电商就不太一样了，支付方式复杂很多，包括信用卡支付、钱包支付、线下转账、本地支付等等，需要定期和竞品对比主要支付方式的覆盖度，来确定还有哪些支付方式要接入。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-27688977-852f-45fa-a0dc-c1a4df901b2c.jpg" alt="" loading="lazy"></p><p>Lazada部分支付方式</p><ul><li><strong>支付成功率</strong></li></ul><p>支付是强依赖第三方的业务，不同支付公司提供的支付产品质量不同，需要关注不同渠道支付成功率，然后刨除正常的业务异常，观察系统级的异常，来判断不同渠道的支付产品质量。</p><p>支付的也涉及到和第三方的交互，例如钱包支付，需要拉起对应的钱包，所以也需要分客户端（APP、PC、WAP）去观测成功率，分析交互是否还有优化的空间。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-9614e30f-fdcb-45a6-9027-1c324d4dc6ad.jpg" alt="" loading="lazy"></p><p>支付成功率</p><ul><li><strong>收款成本</strong></li></ul><p>还需要关注各个支付渠道的收款成本：包括收款费率和现金成本。现金成本包括账扣成本和平台服务费，账扣成本即信用卡等支付方式的拒付损失，账扣损失的原因可能包括欺诈、3DS（无卡支付）、产品问题、未收货、未退款等，可以通过统计账扣额度、原因占比和趋势，尽量减少损失。通过对比各渠道的收款成本优先选择性价比最高的支付渠道。另外可以对欺诈、拒付等风险指标进行监控，制定金额、占比、笔数等数据标准，如果出现超标则进行告警。</p><h4 id="总体指标" tabindex="-1"><a class="header-anchor" href="#总体指标" aria-hidden="true">#</a> 总体指标</h4><p>整个链路下来，我们还得看看整体的数据指标。</p><ul><li><strong>总订单数</strong>：用户完成下单的订单数之和。</li><li><strong>访问到下单转化率</strong>：下单次数/访问次数</li><li><strong>总成交额（GMV）</strong>：总的成交金额，也可以说“流水”，用户下单，就可以算在GMV里，包括下单未支付的金额。</li><li><strong>销售金额</strong>：销售金额就是商品出售的金额综合，销售金额一般只指实际成交金额，所以GMV数字一般比销售金额大。</li><li><strong>客单价</strong>：订单金额/订单数量。</li></ul><h3 id="复购指标" tabindex="-1"><a class="header-anchor" href="#复购指标" aria-hidden="true">#</a> 复购指标</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-a4ed64ec-ca13-40f6-b84b-aaf6314a4431.jpg" alt="" loading="lazy"></p><p>有调查数据显示，一个满意的用户会带来8笔潜在生意，不满意的用户可能会影响25个人的购买意愿，可见回头客多么重要。</p><p>复购率可以分为“用户复购率”和“订单复购率”，此外，“用户回购率”意义与复购率相似，也在此范围内。</p><ul><li><strong>用户复购率</strong>：单位时间内，购买两次及以上的用户数/有购买行为的总用户数</li><li><strong>订单复购率</strong>：单位时间内，第二次及以上购买的订单个数/总订单数</li><li><strong>用户回购率</strong>：单位时间内，有购买行为的老用户数/有购买行为的总用户数</li></ul><p>分析复购是非常重要的：</p><ul><li>可以分析用户黏性，辅助发现复购率问题，制定运营策略。</li><li>横向维度(商品、用户、渠道)对比分析，细化复购率，辅助问题定位。</li></ul><h2 id="电商指标总结" tabindex="-1"><a class="header-anchor" href="#电商指标总结" aria-hidden="true">#</a> 电商指标总结</h2><p>电商平台，主线业务的指标，差不多就是这些了，其实还有很多其它维度的指标，比如商品、物流、营销、风控、会员、满意度等等，以后有机会再讨论吧。</p><p>数据很重要，但不能迷信数据，比如海外的一些电商平台，数据很好看，市场占有率很高，但是用过之后，真心觉得不好用。这里就小声比比一下，做跨境电商的产品和运营，你们能不能不要盯着竞品抄？做的都不怎么样，去抄淘宝、京东啊！</p><p>我的读者应该基本都是开发，为什么我还会写这一篇数据的文章呢？因为说真的，我们的KPI、月报、季报、年报，没有数据支撑，只写一个工作列表，真的不好看，一定要想办法写点收益。</p><blockquote><p>完成xx国际化功能，带来显著流量和转化率提升，xx国家首页PV提升60%，首页UV提升45%…… 访问下单转化率提升50%，累计提升订单量13000单，按客单价50计算，提升GMV$65000……</p></blockquote><p>当然，老三不是专业的产品经理，或者数据分析工程师，文中难免有一些错漏，欢迎指出。</p><p>最最……后，再比比一句👇</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-4e6179a7-6e0e-442a-9bda-2b6e6f5cf981.jpg" alt="" loading="lazy"></p><p>不开心</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',116),p={href:"https://mp.weixin.qq.com/s?__biz=Mzg5NzczMzg3OA==&mid=2247483773&idx=1&sn=d40f7185258ed09e35c31a80faa58bfc&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.woshipm.com/data-analysis/571256.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/HondaHsu/p/14356320.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://new.qq.com/omn/20201107/20201107A0EFDG00.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://cloud.tencent.com/developer/article/1045377",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/82816765",target:"_blank",rel:"noopener noreferrer"},z=e("hr",null,null,-1),f=e("p",null,[e("strong",null,"微信8.0将好友放开到了一万，小伙伴可以加我大号了，先到先得，再满就真没了")],-1),_=e("p",null,[e("strong",null,[t("扫描下方二维码即可加我微信啦，"),e("code",null,"2022，抱团取暖，一起牛逼。")])],-1),u=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-31b23af9-8010-4fd6-992b-a7185bc52016.jpg",alt:"",loading:"lazy"})],-1),w=e("h2",{id:"推荐阅读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐阅读","aria-hidden":"true"},"#"),t(" 推荐阅读")],-1),x={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502723&idx=1&sn=82a1ee739178f5abe69deed34e758951&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},q={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502722&idx=1&sn=f3f457da3b0e07fb21627b2f2a67bf5a&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502595&idx=1&sn=104533503b704a1cbeb02a4b3080b58f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502551&idx=1&sn=5017e6bf5b9aaabebcad8fb9f3fc7d89&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502443&idx=1&sn=cc881653e105e20622faaa67e16d36a7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},M={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502434&idx=1&sn=5d98d82d3772d1a49547b1abaa2ab918&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},N={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247499376&idx=1&sn=3ed28795cdd35fbaa3506e74a56703b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486684&idx=1&sn=807fd808adac8019eb2095ba088efe54&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-jizzjqzszsllgdskshmbcpjljdl-1a01b369-da63-4603-8e87-3886aab664c6.jpg",alt:"",loading:"lazy"})],-1),P={href:"https://mp.weixin.qq.com/s/1nrbGJ5fxNSZ9WqRODcB-A",target:"_blank",rel:"noopener noreferrer"};function A(D,G){const a=n("ExternalLinkIcon");return r(),o("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[t("【长文干货】一文详解电商数据指标体系"),l(a)])]),e("li",null,[t("数据分析逻辑：流量转化漏斗模型详解："),e("a",h,[t("https://www.woshipm.com/data-analysis/571256.html"),l(a)])]),e("li",null,[t("电商数据分析的基本指标体系："),e("a",b,[t("https://www.cnblogs.com/HondaHsu/p/14356320.html"),l(a)])]),e("li",null,[t("电商产品经理需要关注哪些数据指标？:"),e("a",g,[t("https://new.qq.com/omn/20201107/20201107A0EFDG00.html"),l(a)])]),e("li",null,[t("【数据分析】电商数据分析基础指标体系："),e("a",j,[t("https://cloud.tencent.com/developer/article/1045377"),l(a)])]),e("li",null,[t("电商业务常用指标："),e("a",m,[t("https://zhuanlan.zhihu.com/p/82816765"),l(a)])])]),z,f,_,u,w,e("ul",null,[e("li",null,[e("a",x,[t("换掉Typora！这款支持云端同步的开源笔记应用，太炫酷了！"),l(a)])]),e("li",null,[e("a",q,[t("盘点12个yyds的低代码开源项目，一天开发一个系统不是梦！"),l(a)])]),e("li",null,[e("a",k,[t("新同事把工作流引擎运用的炉火纯青，直接干掉几千行if else！"),l(a)])]),e("li",null,[e("a",v,[t("还在手写SQL实现？试试MyBatis-Plus同款IDEA插件吧！"),l(a)])]),e("li",null,[e("a",y,[t("推荐几款开源的数据库管理工具，界面炫酷，功能也很强！"),l(a)])]),e("li",null,[e("a",M,[t("开箱即用的后台管理系统模版，用来撸项目正合适！"),l(a)])]),e("li",null,[e("a",N,[t("重磅更新！Mall实战教程全面升级，瞬间高大上了！"),l(a)])]),e("li",null,[e("a",V,[t("40K+Star！Mall电商实战项目开源回忆录！"),l(a)])])]),U,e("blockquote",null,[e("p",null,[t("参考链接："),e("a",P,[t("https://mp.weixin.qq.com/s/1nrbGJ5fxNSZ9WqRODcB-A"),l(a)]),t("，出处：macrozheng，整理：沉默王二")])])])}const E=i(d,[["render",A],["__file","jizzjqzszsllgdskshmbcpjljdl.html.vue"]]);export{E as default};
