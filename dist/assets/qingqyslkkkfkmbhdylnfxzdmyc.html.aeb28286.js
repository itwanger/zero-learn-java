import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,d as t,b as p,e as c,r as i}from"./app.e9e1538d.js";const s={},d=c('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>最近由于业务需求，需要开发付款码功能，该接口底层将会聚合市面上主流钱包 APP 的付款码功能，如微信支付，支付宝支付。</p><blockquote><p>ps:付款码支付别称有很多，如微信支付端支付产品为<strong>付款码支付（之前的文档叫做刷卡支付）</strong>,而支付宝端产品为<strong>当面付-条支付</strong>,而有些文档会成为<strong>二维码被扫支付</strong>。</p><p>下文统一使用微信的定义方式，统称为付款码支付。</p></blockquote><p>可能有些同学对于付款码支付这个听起来很陌生，其实这个功能我们可能每天都在使用。</p><p>像我们在便利店买个早饭，最后结账时，使用支付宝/微信支付付款。收银员会让我们展示支付宝/微信付款码，然后使用扫码枪获取此码，最后上送给微信/支付宝服务端完成一次扣款。</p><p>以支付宝为例，具体用户端支付流程如下：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-ee8cca5c-9107-451b-9d55-0c613b48e756.jpg" alt="" loading="lazy"></p><p>付款码支付后台调用流程如下：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-5dde8420-8d02-4cab-99e3-e034de8785af.jpg" alt="" loading="lazy"></p><h2 id="付款码支付详细版流程" tabindex="-1"><a class="header-anchor" href="#付款码支付详细版流程" aria-hidden="true">#</a> 付款码支付详细版流程</h2><p>微信/支付宝付款码支付调用流程大同小异，官网写的都比较清楚，这里直接用支付宝的官网的流程。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-202b590d-ce2b-4dd0-a919-a374939636ae.jpg" alt="" loading="lazy"></p><p>从上面的流程可以看到，付款码支付可以说是一个<strong>同步</strong>的接口，即接口同步返回扣款结果，无需通过另外异步通知获取结果。</p><p>不过这里我们需要注意，由于涉及<strong>安全风控</strong>等问题，付款码支付过程用户端可能需要输入密码确认支付，此时付款码接口将会返回等待用户支付。</p><p>接入时务必正确判断返回信息，若返回以下结果，代表此时用户正在输入密码。</p><ul><li>微信支付: <strong>err_code=USERPAYING 或 err_code=SYSTEMERROR</strong></li><li>支付宝：<strong>code=10003 或 code=20000</strong></li></ul><p>微信付款码支付在以下情况需要输入密码二次确认。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-68e3ebb6-3132-4a6d-b821-3e029aa754d9.jpg" alt="" loading="lazy"></p><p>支付宝官方文档暂未找到相关规则，经过测试当支付金额大于 <strong>2000</strong> ，需要输入密码。如果有熟悉其他验密规则的同学，可以在评论区留言一下。</p><p>另外一点需要注意的是，微信/支付宝其他支付接口，支付成功之后，微信/支付宝服务端将会发送消息通知支付结果。但是付款码不一样，该接口是不会有消息通知的。</p><p>所以如果付款码支付若返回等待用户输入密码，商家后台服务必须定时调用调用微信支付/支付宝查询接口，获取支付结果。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-bf673856-9b8e-4431-9a10-a1d7961d5f27.jpg" alt="" loading="lazy"></p><h2 id="撤销支付" tabindex="-1"><a class="header-anchor" href="#撤销支付" aria-hidden="true">#</a> 撤销支付</h2><p>如果在一段时间内比如 <strong>30s</strong>，轮询查询支付结果返回都是等待用户支付，或者支付交易过程返回失败或支付系统超时，这两种情况官方文档都是建议立刻调用撤销接口撤销交易。</p><p>如果此订单用户支付失败，撤销接口将会订单关闭；如果用户支付成功，撤销接口将会订单资金退还给用户。</p><p>也就是说撤销支付接口功能上等同与<strong>关闭订单</strong>加上<strong>退款</strong>。虽然撤销也具有退款功能，但是两者存在比较大的区别：</p><p><strong>支付类型限制</strong></p><p>微信/支付宝撤销支付<strong>仅能撤销付款码支付类型的订单</strong>，而退款可以支持多种支付类型的订单。</p><p><strong>退款金额</strong></p><p>撤销接口只能是<strong>全额退款</strong>，而退款接口支持传入金额，可以全额退款，也可以部分退款。</p><p><strong>时间限制</strong></p><p>撤销接口时间限制比较短，比如微信支付撤销支持 <strong>7 天</strong>内的订单，而支付宝撤销接口仅支持当天的订单。</p><p>但是退款接口可以支持较长时间订单退款，比如微信支付退款支持<strong>一年内</strong>的订单，而支付宝仅支持 <strong>3 个月</strong>内订单。</p><p><strong>基于以上区别，其他正常支付的单如需实现相同功能请调用退款接口，官方文档建议仅在异常的情况下才建议调用撤销支付接口。</strong></p><p>另外再说一点，有些地方这个功能接口称为<strong>冲正接口</strong>，如下面工商二维码支付。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-ad827c55-9452-455c-92ea-24d89c144150.jpg" alt="" loading="lazy"></p><p>实际上提供的功能与微信/支付宝撤销类似，这里需要各家支付公司提供文档具体研究。</p><h2 id="撤销支付相关问题" tabindex="-1"><a class="header-anchor" href="#撤销支付相关问题" aria-hidden="true">#</a> 撤销支付相关问题</h2><p>由于撤销支付，可能导致退款，也可能关闭订单，接入之前一直有些问题弄不清楚，在官方文档处也没有查询到任何资料，没办法只好实测验证相关问题。</p><blockquote><p>由于规定，支付机构不能直连微信/支付宝,所以以下测试基于银联微信/支付宝通道。</p><p>银联提供的接口与直连微信/支付宝存在些许差别，但是主要功能一样。</p></blockquote><h3 id="重复撤销" tabindex="-1"><a class="header-anchor" href="#重复撤销" aria-hidden="true">#</a> 重复撤销</h3><p>通过实测，微信/支付宝撤销接口幂等实现，重复撤销返回结果一致。</p><p>不过需要注意需要正确判断撤销的返回结果。</p><p>比如微信撤销接口成功判断还需要结合 <code>recall</code> 字段，支付宝也有类似字段。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-2991d929-84e9-4f74-b599-40be877c8893.jpg" alt="" loading="lazy"></p><h3 id="订单状态" tabindex="-1"><a class="header-anchor" href="#订单状态" aria-hidden="true">#</a> 订单状态</h3><p>微信/支付宝订单状态处理不太一致，微信订单状态比较复杂：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-0a96570f-46e7-40f6-990f-b4e39c5138b8.jpg" alt="" loading="lazy"></p><p>也就是说，付款码订单一旦被撤销成功，再次查询订单，状态将会返回为<strong>已撤销（REVOKED）</strong>。</p><p>另外微信对于付款码支付订单有限制，是无法调用关闭订单接口关闭订单，所以在付款码的场景中，是不存在订单状态为 <strong>CLOSED—已关闭</strong>。</p><p>接下来说下支付宝的状态，支付宝文档没要给出类似的订单状态机，我根据官方一些文档，以及一些测试结果总结出下方订单状态图。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-68a6cefc-6c10-4984-88f0-d5f008948c40.jpg" alt="" loading="lazy"></p><p>所以支付宝的付款码订单一旦撤销成功，再次查询原单状态将会返回 <strong>TRADE_CLOSED</strong>。</p><h3 id="对账文件数据" tabindex="-1"><a class="header-anchor" href="#对账文件数据" aria-hidden="true">#</a> 对账文件数据</h3><p>当天产生交易之后，次日我们需要拉取微信/支付宝对账文件，逐一核对数据，防止少账，多账问题。</p><blockquote><p>对账系统的设计方案随后会分享出来。</p></blockquote><p>微信/支付宝对账文件只会记录交易成功的订单，所以未支付的订单被撤销是不会出现在对账文件中。但是如果支付成功了，然后又被撤销成功，将会在对账文件中产生<strong>两笔记录</strong>，一笔正交易，一笔反向退款记录。</p><p>正常交易与普通的退款的记录都比较好识别，可以使用我们上送给微信支付宝的订单号。但是撤销导致退款记录，我们无法仅用一个单号识别，我们需要结合另外的字段区分判断。</p><p>微信对账文件撤销产生那笔退款，交易状态为 <strong>REVOKED</strong>，所以我们可以采用商户订单号加交易状态识别出一条记录是否为撤销产生退款记录。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-dfc3b88f-342d-4d62-b345-edcc7f120526.jpg" alt="" loading="lazy"></p><blockquote><p>上面银联订单号可以当做是微信支付宝内部产生订单号</p></blockquote><p>支付宝对账文件比较麻烦，撤销产生的退款记录不能跟微信根据交易状态区分。从对账文件上看支付宝撤销产生退款与普通退款接口产生退款记录是一样的。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-qingqyslkkkfkmbhdylnfxzdmyc-c100c76d-2826-4dee-8445-b7d95d1e87d7.jpg" alt="" loading="lazy"></p><p>仔细研究对账文件可以发现一些区别，撤销导致退款记录退款批次与正交易支付宝内部订单号是一致的。而正常退款记录，退款批次号是由商户自己上送的。所以我们可以以此筛选出撤销产生的退款记录。</p><h3 id="撤销失败" tabindex="-1"><a class="header-anchor" href="#撤销失败" aria-hidden="true">#</a> 撤销失败</h3><p>极端情况下，有可能产生多次撤销都失败的奇葩情况，那怎么办？</p><p>这种情况下就不用往系统自动处理方向考虑了，通过线下人工介入处理吧，毕竟这种概率太低了。</p><p>引用知乎 <strong>@天顺</strong> 的文章中一句话：</p><blockquote><p>很多时候人工保障比你动脑筋想异常中的异常如何系统自动处理来得反而高效和低成本</p></blockquote><p>这句话大家仔细品，越品越有道理！</p>',70),l={href:"https://mp.weixin.qq.com/s/De71w6C49YJJb_VXeLL0vw",target:"_blank",rel:"noopener noreferrer"};function g(b,h){const a=i("ExternalLinkIcon");return n(),o("div",null,[d,e("blockquote",null,[e("p",null,[t("参考链接："),e("a",l,[t("https://mp.weixin.qq.com/s/De71w6C49YJJb_VXeLL0vw"),p(a)]),t("，出处：小黑十一点半，整理：沉默王二")])])])}const f=r(s,[["render",g],["__file","qingqyslkkkfkmbhdylnfxzdmyc.html.vue"]]);export{f as default};
