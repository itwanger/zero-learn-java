import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as s,a as r,d as e,b as t,e as i,r as p}from"./app.e9e1538d.js";const d={},h={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},g=r("strong",null,"560 多名",-1),c={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},l=i('<p>今天来聊聊权限系统的设计以及主流的五种权限模型。</p><p>权限管控可以通俗的理解为权力限制，即不同的人由于拥有不同权力，他所看到的、能使用的可能不一样。对应到一个应用系统，其实就是一个用户可能拥有不同的数据权限（看到的）和操作权限（使用的）。</p><p>主流的权限模型主要分为以下五种：</p><ul><li><strong>ACL模型</strong>：访问控制列表</li><li><strong>DAC模型</strong>：自主访问控制</li><li><strong>MAC模型</strong>：强制访问控制</li><li><strong>ABAC模型</strong>：基于属性的访问控制</li><li><strong>RBAC模型</strong>：基于角色的权限访问控制</li></ul><h2 id="acl模型-访问控制列表" tabindex="-1"><a class="header-anchor" href="#acl模型-访问控制列表" aria-hidden="true">#</a> ACL模型：访问控制列表</h2><p><strong>Access Control List</strong>，ACL是最早的、最基本的一种访问控制机制，是基于客体进行控制的模型，在其他模型中也有ACL的身影。为了解决相同权限的用户挨个配置的问题，后来也采用了用户组的方式。</p><p><strong>原理</strong>：每一个客体都有一个列表，列表中记录的是哪些主体可以对这个客体做哪些行为，非常简单。</p><p><strong>例如</strong>：当用户A要对一篇文章进行编辑时，ACL会先检查一下文章编辑功能的控制列表中有没有用户A，有就可以编辑，无则不能编辑。再例如：不同等级的会员在产品中可使用的功能范围不同。</p><p><strong>缺点</strong>：当主体的数量较多时，配置和维护工作就会成本大、易出错。</p><h2 id="dac模型-自主访问控制" tabindex="-1"><a class="header-anchor" href="#dac模型-自主访问控制" aria-hidden="true">#</a> DAC模型：自主访问控制</h2><p>Discretionary Access Control，DAC是ACL的一种拓展。</p><p><strong>原理</strong>：在ACL模型的基础上，允许主体可以将自己拥有的权限自主地授予其他主体，所以权限可以任意传递。</p><p><strong>例如</strong>：常见于文件系统，LINUX，UNIX、WindowsNT版本的操作系统都提供DAC的支持。</p><p><strong>缺点</strong>：对权限控制比较分散，例如无法简单地将一组文件设置统一的权限开放给指定的一群用户。主体的权限太大，无意间就可能泄露信息。</p><h2 id="mac模型-强制访问控制" tabindex="-1"><a class="header-anchor" href="#mac模型-强制访问控制" aria-hidden="true">#</a> MAC模型：强制访问控制</h2><p><strong>Mandatory Access Control</strong>，MAC模型中主要的是双向验证机制。常见于机密机构或者其他等级观念强烈的行业，如军用和市政安全领域的软件。</p><p><strong>原理</strong>：主体有一个权限标识，客体也有一个权限标识，而主体能否对该客体进行操作取决于双方的权限标识的关系。</p><p><strong>例如</strong>：将军分为上将&gt;中将&gt;少将，军事文件保密等级分为绝密&gt;机密&gt;秘密，规定不同军衔仅能访问不同保密等级的文件，如少将只能访问秘密文件；当某一账号访问某一文件时，系统会验证账号的军衔，也验证文件的保密等级，当军衔和保密等级相对应时才可以访问。</p><p><strong>缺点</strong>：控制太严格，实现工作量大，缺乏灵活性。</p><h2 id="abac模型-基于属性的访问控制" tabindex="-1"><a class="header-anchor" href="#abac模型-基于属性的访问控制" aria-hidden="true">#</a> ABAC模型：基于属性的访问控制</h2><p><strong>Attribute-Based Access Control</strong>，能很好地解决RBAC的缺点，在新增资源时容易维护。</p><p><strong>原理</strong>：通过动态计算一个或一组属性是否满足某种机制来授权，是一种很灵活的权限模型，可以按需实现不同颗粒度的权限控制。</p><p>属性通常有四类：</p><ol><li>主体属性，如用户年龄、性别等；</li><li>客体属性，如一篇文章等；</li><li>环境属性，即空间限制、时间限制、频度限制；</li><li>操作属性，即行为类型，如读写、只读等。</li></ol><p><strong>例如</strong>：早上9:00，11:00期间A、B两个部门一起以考生的身份考试，下午14:00，17:00期间A、B两个部门相互阅卷。</p><p><strong>缺点</strong>：规则复杂，不易看出主体与客体之间的关系，实现非常难，现在应用的很少。</p><h2 id="rbac-基于角色的权限访问控制" tabindex="-1"><a class="header-anchor" href="#rbac-基于角色的权限访问控制" aria-hidden="true">#</a> RBAC，基于角色的权限访问控制</h2><p><strong>Role-Based Access Control</strong>，核心在于用户只和角色关联，而角色代表对了权限，是一系列权限的集合。</p><p>RBAC三要素：</p><ol><li><strong>用户</strong>：系统中所有的账户</li><li><strong>角色</strong>：一系列权限的集合（如：管理员，开发者，审计管理员等）</li><li><strong>权限</strong>：菜单，按钮，数据的增删改查等详细权限。</li></ol><p>在<strong>RBAC</strong>中，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。</p><p>角色是为了完成各种工作而创造，用户则依据它的责任和资格来被指派相应的角色，用户可以很容易地从一个角色被指派到另一个角色。</p><p>角色可依新的需求和系统的合并而赋予新的权限，而权限也可根据需要而从某角色中回收。角色与角色的关系同样也存在继承关系防止越权。</p><p><strong>优点</strong>：便于角色划分，更灵活的授权管理；最小颗粒度授权；</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-08622141-9cdc-46ce-bd9c-584bd267e3d8.jpg" alt="" loading="lazy"></p><h2 id="rbac的深度拓展" tabindex="-1"><a class="header-anchor" href="#rbac的深度拓展" aria-hidden="true">#</a> RBAC的深度拓展</h2><p>RBAC模型可以分为：<strong>RBAC0</strong>、<strong>RBAC1</strong>、<strong>RBAC2</strong>、<strong>RBAC3</strong> 四个阶段，一般公司使用<strong>RBAC0</strong>的模型就可以。另外，<strong>RBAC0</strong>相当于底层逻辑，后三者都是在<strong>RBAC0</strong>模型上的拔高。</p><p>我先简单介绍下这四个RBAC模型：</p><h3 id="_1-rbac0模型" tabindex="-1"><a class="header-anchor" href="#_1-rbac0模型" aria-hidden="true">#</a> 1. RBAC0模型</h3><p>用户和角色、角色和权限多对多关系。</p><p>简单来说就是一个用户拥有多个角色，一个角色可以被多个用户拥有，这是用户和角色的多对多关系；同样的，角色和权限也是如此。</p><p><strong>RBAC0</strong>模型如下图：没有画太多线，但是已经能够看出多对多关系。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-9519e9d7-3145-4b6d-b54e-506034b7db5f.jpg" alt="" loading="lazy"></p><h3 id="_2-rbac1模型" tabindex="-1"><a class="header-anchor" href="#_2-rbac1模型" aria-hidden="true">#</a> 2. RBAC1模型</h3><p>相对于<strong>RBAC0</strong>模型，增加了<strong>角色分级</strong>的逻辑，类似于树形结构，下一节点继承上一节点的所有权限，如<strong>role1</strong>根节点下有<strong>role1.1</strong>和<strong>role1.2</strong>两个子节点</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-86906439-9dcd-4e1c-a8c7-d680d97b9831.jpg" alt="" loading="lazy"></p><p>角色分级的逻辑可以有效的规范角色创建（主要得益于权限继承逻辑），我之前做过BD工具（类CRM），BD之间就有分级（经理、主管、专员），如果采用RBAC0模型做权限系统，我可能需要为经理、主管、专员分别创建一个角色（角色之间权限无继承性），极有可能出现一个问题，由于权限配置错误，主管拥有经理都没有权限。</p><p>而RBAC1模型就很好解决了这个问题，创建完经理角色并配置好权限后，主管角色的权限继承经理角色的权限，并且支持针对性删减主管权限。</p><h3 id="_3-rbac2模型" tabindex="-1"><a class="header-anchor" href="#_3-rbac2模型" aria-hidden="true">#</a> 3. RBAC2模型</h3><p>基于<strong>RBAC0</strong>模型，对角色增加了更多约束条件。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-88ed54f3-233b-48a8-83df-6b783fa6bc10.jpg" alt="" loading="lazy"></p><p>如<strong>角色互斥</strong>，比较经典的案例是财务系统中出纳不得兼管稽核，那么在赋予财务系统操作人员角色时，同一个操作员不能同时拥有出纳和稽核两个角色。</p><p>如<strong>角色数量限制</strong>，例如：一个角色专门为公司CEO创建的，最后发现公司有10个人拥有CEO角色，一个公司有10个CEO？这就是对角色数量的限制，它指的是有多少用户能拥有这个角色。</p><p><strong>RBAC2</strong> 模型主要是为了增加角色赋予的限制条件，这也符合权限系统的目标：权责明确，系统使用安全、保密。</p><h3 id="_4-rbac3模型" tabindex="-1"><a class="header-anchor" href="#_4-rbac3模型" aria-hidden="true">#</a> 4. RBAC3模型</h3><p>同样是基于<strong>RBAC0</strong>模型，但是综合了<strong>RBAC1</strong>和<strong>RBAC2</strong>的所有特点</p><p>这里就不在多描述，读者返回去看<strong>RBAC1</strong>和<strong>RBAC2</strong>模型的描述即可。</p><h2 id="rbac-权限管理的在实际系统中的应用" tabindex="-1"><a class="header-anchor" href="#rbac-权限管理的在实际系统中的应用" aria-hidden="true">#</a> RBAC 权限管理的在实际系统中的应用</h2><p>RBAC 权限模型由三大部分构成，即<strong>用户管理</strong>、<strong>角色管理</strong>、<strong>权限管理</strong>。</p><p>用户管理按照企业架构或业务线架构来划分，这些结构本身比较清晰，扩展性和可读性都非常好。</p><p>角色管理一定要在深入理解业务逻辑后再来设计，一般使用各部门真实的角色作为基础，再根据业务逻辑进行扩展。</p><p>权限管理是前两种管理的再加固，做太细容易太碎片，做太粗又不够安全，这里我们需要根据经验和实际情况来设计。</p><h3 id="_1-用户管理" tabindex="-1"><a class="header-anchor" href="#_1-用户管理" aria-hidden="true">#</a> 1.用户管理</h3><p>用户管理中的用户，是企业里每一位员工，他们本身就有自己的组织架构，我们可以直接使用企业部门架构或者业务线架构来作为线索，构建用户管理系统。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-840538da-9803-4a12-94de-fd696a710968.jpg" alt="" loading="lazy"></p><p><strong>需要特殊注意</strong>：实际业务中的组织架构可能与企业部门架构、业务线架构不同，需要考虑数据共享机制，一般的做法为授权某个人、某个角色组共享某个组织层级的某个对象组数据。</p><h3 id="_2-角色管理" tabindex="-1"><a class="header-anchor" href="#_2-角色管理" aria-hidden="true">#</a> 2.角色管理</h3><p>在设计系统角色时，我们应该深入理解公司架构、业务架构后，再根据需求设计角色及角色内的等级。</p><p>一般角色相对于用户来说是固定不变的，每个角色都有自己明确的权限和限制，这些权限在系统设计之处就确定了，之后也轻易不会再变动。</p><h4 id="_1-自动获得基础角色" tabindex="-1"><a class="header-anchor" href="#_1-自动获得基础角色" aria-hidden="true">#</a> <strong>1. 自动获得基础角色</strong></h4><p>当员工入职到某部门时，该名员工的账号应该自动被加入该部门对应的基础角色中，并拥有对应的基础权限。这种操作是为了保证系统安全的前提下，减少了管理员大量手动操作。使新入职员工能快速使用系统，提高工作效率。</p><h4 id="_2-临时角色与失效时间" tabindex="-1"><a class="header-anchor" href="#_2-临时角色与失效时间" aria-hidden="true">#</a> <strong>2. 临时角色与失效时间</strong></h4><p>公司业务有时需要外援来支持，他们并不属于公司员工，也只是在某个时段在公司做支持。此时我们需要设置临时角色，来应对这种可能跨多部门协作的临时员工。</p><p>如果公司安全级别较高，此类账号默认有固定失效时间，到达失效时间需再次审核才能重新开启。避免临时账号因为流程不完善，遗忘在系统中，引起安全隐患。</p><h4 id="_3-虚拟角色" tabindex="-1"><a class="header-anchor" href="#_3-虚拟角色" aria-hidden="true">#</a> <strong>3. 虚拟角色</strong></h4><p>部门角色中的等级，可以授权同等级的员工拥有相同的权限，但某些员工因工作原因，需要调用角色等级之外的权限，相同等级不同员工需要使用的权限还不相同。</p><p>这种超出角色等级又合理的权限授予，我们可以设置虚拟角色。这一虚拟角色可集成这一工作所需的所有权限，然后将它赋予具体的员工即可。这样即不用调整组织架构和对应的角色，也可以满足工作中特殊情况的权限需求。</p><h4 id="_4-黑白名单" tabindex="-1"><a class="header-anchor" href="#_4-黑白名单" aria-hidden="true">#</a> <strong>4. 黑白名单</strong></h4><p><strong>白名单</strong>：某些用户自身不拥有某部门的顶级角色，但处于业务需求，需要给他角色外的高级权限，那么我们可以设计限制范围的白名单，将需要的用户添加进去即可。</p><p>在安全流程中，我们仅需要对白名单设计安全流程，即可审核在白名单中的特殊用户，做到监控拥有特殊权限的用户，减少安全隐患。</p><p><strong>黑名单</strong>：比较常见的黑名单场景是某些犯了错误的员工，虽然在职，但已经不能给他们任何公司权限了。这种既不能取消角色关联，也不能完全停用账号的情况，可以设置黑名单，让此类用户可以登录账号，查看基本信息，但大多数关键权限已经被黑名单限制。</p><h3 id="_3-权限管理" tabindex="-1"><a class="header-anchor" href="#_3-权限管理" aria-hidden="true">#</a> 3. 权限管理</h3><p>权限管理一般从三个方面来做限制。<strong>页面/菜单权限</strong>，<strong>操作权限</strong>，<strong>数据权限</strong>。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-d798a7f6-a1b9-4b62-84bd-9412ff8610a0.jpg" alt="" loading="lazy"></p><h4 id="_1-页面-菜单权限" tabindex="-1"><a class="header-anchor" href="#_1-页面-菜单权限" aria-hidden="true">#</a> <strong>1. 页面/菜单权限</strong></h4><p>对于没有权限操作的用户，直接隐藏对应的页面入口或菜单选项。这种方法简单快捷直接，对于一些安全不太敏感的权限，使用这种方式非常高效。</p><h4 id="_2-操作权限" tabindex="-1"><a class="header-anchor" href="#_2-操作权限" aria-hidden="true">#</a> <strong>2. 操作权限</strong></h4><p>操作权限通常是指对同一组数据，不同的用户是否可以增删改查。对某些用户来说是只读浏览数据，对某些用户来说是可编辑的数据。</p><h4 id="_3-数据权限" tabindex="-1"><a class="header-anchor" href="#_3-数据权限" aria-hidden="true">#</a> <strong>3. 数据权限</strong></h4><p>对于安全需求高的权限管理，仅从前端限制隐藏菜单，隐藏编辑按钮是不够的，还需要在数接口上做限制。如果用户试图通过非法手段编辑不属于自己权限下的数据，服务器端会识别、记录并限制访问。</p><h4 id="_4-数据权限如何管控" tabindex="-1"><a class="header-anchor" href="#_4-数据权限如何管控" aria-hidden="true">#</a> <strong>4. 数据权限如何管控</strong></h4><p>数据权限可以分为行权限和列权限。行权限控制：看多少条数据。列权限控制：看一条数据的多少个字段</p><p>简单系统中可以通过组织架构来管控行权限，按照角色来配置列权限，但是遇到复杂情况，组织架构是承载不了复杂行权限管控，角色也更不能承载列的特殊化展示。</p><p>目前行业的做法是提供行列级数据权规则配置，把规则当成类似权限点配置赋予某个角色或者某个用户。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-a9c99d87-c5c2-47e7-9c14-99eb536d7789.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-771379da-f2d0-4459-bfcd-8f67661a6694.jpg" alt="" loading="lazy"></p><h2 id="用户管理系统权限设计中的更多实践细节" tabindex="-1"><a class="header-anchor" href="#用户管理系统权限设计中的更多实践细节" aria-hidden="true">#</a> 用户管理系统权限设计中的更多实践细节</h2><h3 id="_1-超级管理员" tabindex="-1"><a class="header-anchor" href="#_1-超级管理员" aria-hidden="true">#</a> 1.超级管理员</h3><p>超级管理员是用来启动系统，配置系统的账号。这个账号应该在配置好系统，创建管理员之后被隐藏起来。超级管理员账号拥有系统中全部权限，可穿梭查看各部门数据，如果使用不恰当，是系统管理的安全隐患。</p><h3 id="_2-互斥角色如何处理" tabindex="-1"><a class="header-anchor" href="#_2-互斥角色如何处理" aria-hidden="true">#</a> 2.互斥角色如何处理</h3><p>当用户已经有用的角色和即将添加的角色互相互斥时，应该在添加新角色时，提示管理员因角色互斥的原因，无法进行新角色添加。如需添加，要先撤销掉前一个角色，再添加新角色。</p><h3 id="_3-用户管理权限系统设计一定要简单清晰" tabindex="-1"><a class="header-anchor" href="#_3-用户管理权限系统设计一定要简单清晰" aria-hidden="true">#</a> 3.用户管理权限系统设计一定要简单清晰</h3><p>在设计权限系统之处，一定要理清思路，一切从简，能不增加的多余角色和权限逻辑，就一定不要增加。因为随着公司业务的扩大，权限和角色也会随之增多，如果初期设计思路不严谨，那么权限系统会随着业务的扩大而无限混乱下去，此时再来整理权限，已经太晚了。所以初期设计就一定要条理清晰，简单明了，能避免后续非常多不必要的麻烦。</p><h3 id="_4-无权提示页" tabindex="-1"><a class="header-anchor" href="#_4-无权提示页" aria-hidden="true">#</a> 4.无权提示页</h3><p>有时员工 A 会直接给员工 B 分享他当下正在操作的页面，但有可能员工 B 无权查看。此时我们应该在这里考虑添加「无权提示页」，避免粗暴的 404 页面让员工 B 以为是系统出错了。</p><hr><p>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。</p><p><strong>推荐阅读</strong>：</p>',108),b={href:"https://mp.weixin.qq.com/s/2IUe50xBhuEWKDzARVd51A",target:"_blank",rel:"noopener noreferrer"},_={href:"https://mp.weixin.qq.com/s/3lqp4x1B5LI1hNjWAi6v1g",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s/ZeA-mEyMkEeSHRtd8Pob9A",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/fNMhpER0tp5RO5TGcgALMQ",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mp.weixin.qq.com/s/IEEkWiI9iN4MEhoHvrTgcg",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/KxUMq2YmlIBMbAeRwUm8JA",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mp.weixin.qq.com/s/PxgZkuA_SnAgG7xfwlKLgw",target:"_blank",rel:"noopener noreferrer"},C={href:"https://mp.weixin.qq.com/s/R13FkPipfEMKjqNaCL3UoA",target:"_blank",rel:"noopener noreferrer"},j=r("p",null,[r("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanxxtjgzysjyyds-33afdc45-d78b-46e0-91c2-1107161496e9.jpg",alt:"",loading:"lazy"})],-1),B={href:"https://mp.weixin.qq.com/s/FnBgM4m593e8M_UkJ_RWSg",target:"_blank",rel:"noopener noreferrer"};function y(R,q){const a=p("ExternalLinkIcon");return o(),s("div",null,[r("blockquote",null,[r("p",null,[r("a",h,[e("二哥的编程星球"),t(a)]),e("已经有 "),g,e(" 小伙伴加入了，如果你也需要一个良好的学习氛围，"),r("a",c,[e("戳链接"),t(a)]),e("加入我们吧！这是一个 Java 学习指南 + 编程实战的私密圈子，你可以向二哥提问、帮你制定学习计划、跟着二哥一起做项目、刷力扣，冲冲冲。")])]),l,r("ul",null,[r("li",null,[r("a",b,[e("新一代开源免费的终端工具，太酷了"),t(a)])]),r("li",null,[r("a",_,[e("最大成就，拿到一等奖学金"),t(a)])]),r("li",null,[r("a",x,[e("银行开发太安逸，奋发图强要跳槽"),t(a)])]),r("li",null,[r("a",A,[e("这个大专生，强的离谱！"),t(a)])]),r("li",null,[r("a",f,[e("一怒之下，退伍转码"),t(a)])]),r("li",null,[r("a",m,[e("没必要为实习碰的头破血流"),t(a)])]),r("li",null,[r("a",u,[e("网站挣了 200 美刀后的感触"),t(a)])]),r("li",null,[r("a",C,[e("在 IDEA 里下五子棋不过分吧？"),t(a)])])]),j,r("blockquote",null,[r("p",null,[e("转载链接："),r("a",B,[e("https://mp.weixin.qq.com/s/FnBgM4m593e8M_UkJ_RWSg"),t(a)]),e("，出处：macrozheng，整理：沉默王二")])])])}const z=n(d,[["render",y],["__file","quanxxtjgzysjyyds.html.vue"]]);export{z as default};
