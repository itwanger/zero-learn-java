import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as l,d as i,b as a,e as d,r as t}from"./app.99eb8281.js";const h={},s=l("h1",{id:"精选数据库60道面试题必看",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#精选数据库60道面试题必看","aria-hidden":"true"},"#"),i(" 精选数据库60道面试题必看👍")],-1),c={href:"https://mp.weixin.qq.com/s/c-sy7tM0BmrqMUQFW7C65g",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mp.weixin.qq.com/s/-SqqKmhZcOlQxM-rHiIpKg",target:"_blank",rel:"noopener noreferrer"},g=d(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="_1、关系型和非关系型数据库的区别" tabindex="-1"><a class="header-anchor" href="#_1、关系型和非关系型数据库的区别" aria-hidden="true">#</a> 1、关系型和非关系型数据库的区别？</h3><p>关系型数据库的优点</p><ul><li>容易理解，因为它采用了关系模型来组织数据。</li><li>可以保持数据的一致性。</li><li>数据更新的开销比较小。</li><li>支持复杂查询（带 where 子句的查询）</li></ul><p>非关系型数据库（NOSQL）的优点</p><ul><li>无需经过 SQL 层的解析，读写效率高。</li><li>基于键值对，读写性能很高，易于扩展</li><li>可以支持多种类型数据的存储，如图片，文档等等。</li><li>扩展（可分为内存性数据库以及文档型数据库，比如 Redis，MongoDB，HBase 等，适合场景：数据量大高可用的日志系统/地理位置存储系统）。</li></ul><h3 id="_2、详细说一下一条-mysql-语句执行的步骤" tabindex="-1"><a class="header-anchor" href="#_2、详细说一下一条-mysql-语句执行的步骤" aria-hidden="true">#</a> 2、详细说一下一条 MySQL 语句执行的步骤</h3><p>Server 层按顺序执行 SQL 的步骤为：</p><ul><li>客户端请求 -&gt; 连接器（验证用户身份，给予权限）</li><li>查询缓存（存在缓存则直接返回，不存在则执行后续操作）</li><li>分析器（对 SQL 进行词法分析和语法分析操作）</li><li>优化器（主要对执行的 SQL 优化选择最优的执行方案方法）</li><li>执行器（执行时会先看用户是否有执行权限，有才去使用这个引擎提供的接口）-&gt; 去引擎层获取数据返回（如果开启查询缓存则会缓存查询结果）</li></ul><h2 id="索引相关" tabindex="-1"><a class="header-anchor" href="#索引相关" aria-hidden="true">#</a> 索引相关</h2><h3 id="_3、mysql-使用索引的原因" tabindex="-1"><a class="header-anchor" href="#_3、mysql-使用索引的原因" aria-hidden="true">#</a> 3、MySQL 使用索引的原因？</h3><p>根本原因</p><ul><li>索引的出现，就是为了提高数据查询的效率，就像书的目录一样。</li><li>对于数据库的表而言，索引其实就是它的“目录”。</li></ul><p>扩展</p><ul><li>创建唯一性索引，可以保证数据库表中每一行数据的唯一性。</li><li>帮助引擎层避免排序和临时表</li><li>将随机 IO 变为顺序 IO，加速表和表之间的连接。</li></ul><h3 id="_4、索引的三种常见底层数据结构以及优缺点" tabindex="-1"><a class="header-anchor" href="#_4、索引的三种常见底层数据结构以及优缺点" aria-hidden="true">#</a> 4、索引的三种常见底层数据结构以及优缺点</h3><p>三种常见的索引底层数据结构：分别是哈希表、有序数组和搜索树。</p><ul><li>哈希表这种适用于等值查询的场景，比如 memcached 以及其它一些 NoSQL 引擎，不适合范围查询。</li><li>有序数组索引只适用于静态存储引擎，等值和范围查询性能好，但更新数据成本高。</li><li>N 叉树由于读写上的性能优点以及适配磁盘访问模式以及广泛应用在数据库引擎中。</li><li>扩展（以 InnoDB 的一个整数字段索引为例，这个 N 差不多是 1200。棵树高是 4 的时候，就可以存 1200 的 3 次方个值，这已经 17 亿了。考虑到树根的数据块总是在内存中的，一个 10 亿行的表上一个整数字段的索引，查找一个值最多只需要访问 3 次磁盘。其实，树的第二层也有很大概率在内存中，那么访问磁盘的平均次数就更少了。）</li></ul><h3 id="_5、索引的常见类型以及它是如何发挥作用的" tabindex="-1"><a class="header-anchor" href="#_5、索引的常见类型以及它是如何发挥作用的" aria-hidden="true">#</a> 5、索引的常见类型以及它是如何发挥作用的？</h3><p>根据叶子节点的内容，索引类型分为主键索引和非主键索引。</p><ul><li>主键索引的叶子节点存的整行数据，在InnoDB里也被称为聚簇索引。</li><li>非主键索引叶子节点存的主键的值，在InnoDB里也被称为二级索引。</li></ul><h3 id="_6、myisam-和-innodb-实现-b-树索引方式的区别是什么" tabindex="-1"><a class="header-anchor" href="#_6、myisam-和-innodb-实现-b-树索引方式的区别是什么" aria-hidden="true">#</a> 6、MyISAM 和 InnoDB 实现 B 树索引方式的区别是什么？</h3><ul><li>InnoDB 存储引擎：B+ 树索引的叶子节点保存数据本身，其数据文件本身就是索引文件。</li><li>MyISAM 存储引擎：B+ 树索引的叶子节点保存数据的物理地址，叶节点的 data 域存放的是数据记录的地址，索引文件和数据文件是分离的。</li></ul><h3 id="_7、innodb-为什么设计-b-树索引" tabindex="-1"><a class="header-anchor" href="#_7、innodb-为什么设计-b-树索引" aria-hidden="true">#</a> 7、InnoDB 为什么设计 B+ 树索引？</h3><p>两个考虑因素：</p><ul><li>InnoDB 需要执行的场景和功能需要在特定查询上拥有较强的性能。</li><li>CPU 将磁盘上的数据加载到内存中需要花费大量时间。</li></ul><p>为什么选择 B+ 树：</p><ul><li><p>哈希索引虽然能提供O（1）复杂度查询，但对范围查询和排序却无法很好的支持，最终会导致全表扫描。</p></li><li><p>B 树能够在非叶子节点存储数据，但会导致在查询连续数据可能带来更多的随机 IO。</p></li><li><p>而 B+ 树的所有叶节点可以通过指针来相互连接，减少顺序遍历带来的随机 IO。</p></li><li><p>普通索引还是唯一索引？</p><p>由于唯一索引用不上 change buffer 的优化机制，因此如果业务可以接受，从性能角度出发建议你优先考虑非唯一索引。</p></li></ul><h3 id="_8、什么是覆盖索引和索引下推" tabindex="-1"><a class="header-anchor" href="#_8、什么是覆盖索引和索引下推" aria-hidden="true">#</a> 8、什么是覆盖索引和索引下推？</h3><p>覆盖索引：</p><ul><li><p>在某个查询里面，索引 k 已经“覆盖了”我们的查询需求，称为覆盖索引。</p></li><li><p>覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段。</p></li></ul><p>索引下推：</p><ul><li>MySQL 5.6 引入的索引下推优化（index condition pushdown)， 可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。</li></ul><h3 id="_9、哪些操作会导致索引失效" tabindex="-1"><a class="header-anchor" href="#_9、哪些操作会导致索引失效" aria-hidden="true">#</a> 9、哪些操作会导致索引失效？</h3><ul><li>对索引使用左或者左右模糊匹配，也就是 like %xx 或者 like %xx% 这两种方式都会造成索引失效。原因在于查询的结果可能是多个，不知道从哪个索引值开始比较，于是就只能通过全表扫描的方式来查询。</li><li>对索引进行函数/对索引进行表达式计算，因为索引保持的是索引字段的原始值，而不是经过函数计算的值，自然就没办法走索引。</li><li>对索引进行隐式转换相当于使用了新函数。</li><li>WHERE 子句中的 OR语句，只要有条件列不是索引列，就会进行全表扫描。</li></ul><h3 id="_10、字符串加索引" tabindex="-1"><a class="header-anchor" href="#_10、字符串加索引" aria-hidden="true">#</a> 10、字符串加索引</h3><ul><li>直接创建完整索引，这样可能会比较占用空间。</li><li>创建前缀索引，节省空间，但会增加查询扫描次数，并且不能使用覆盖索引。</li><li>倒序存储，再创建前缀索引，用于绕过字符串本身前缀的区分度不够的问题。</li><li>创建 hash 字段索引，查询性能稳定，有额外的存储和计算消耗，跟第三种方式一样，都不支持范围扫描。</li></ul><h2 id="日志相关" tabindex="-1"><a class="header-anchor" href="#日志相关" aria-hidden="true">#</a> 日志相关</h2><h3 id="_11、mysql-的-change-buffer-是什么" tabindex="-1"><a class="header-anchor" href="#_11、mysql-的-change-buffer-是什么" aria-hidden="true">#</a> 11、MySQL 的 change buffer 是什么？</h3><ul><li>当需要更新一个数据页时，如果数据页在内存中就直接更新；而如果这个数据页还没有在内存中的话，在不影响数据一致性的前提下，InnoDB 会将这些更新操作缓存在 change buffer 中。</li><li>这样就不需要从磁盘中读入这个数据页了，在下次查询需要访问这个数据页的时候，将数据页读入内存，然后执行 change buffer 中与这个页有关的操作。通过这种方式就能保证这个数据逻辑的正确性。</li><li>注意唯一索引的更新就不能使用 change buffer，实际上也只有普通索引可以使用。</li><li>适用场景：</li><li><ul><li>对于写多读少的业务来说，页面在写完以后马上被访问到的概率比较小，此时 change buffer 的使用效果最好。这种业务模型常见的就是账单类、日志类的系统。</li><li>反过来，假设一个业务的更新模式是写入之后马上会做查询，那么即使满足了条件，将更新先记录在 change buffer，但之后由于马上要访问这个数据页，会立即触发 merge 过程。这样随机访问 IO 的次数不会减少，反而增加了 change buffer 的维护代价。</li></ul></li></ul><h3 id="_12、mysql-是如何判断一行扫描数的" tabindex="-1"><a class="header-anchor" href="#_12、mysql-是如何判断一行扫描数的" aria-hidden="true">#</a> 12、MySQL 是如何判断一行扫描数的？</h3><ul><li>MySQL 在真正开始执行语句之前，并不能精确地知道满足这个条件的记录有多少条。</li><li>而只能根据统计信息来估算记录数。这个统计信息就是索引的“区分度。</li></ul><h3 id="_13、mysql-的-redo-log-和-binlog-区别" tabindex="-1"><a class="header-anchor" href="#_13、mysql-的-redo-log-和-binlog-区别" aria-hidden="true">#</a> 13、MySQL 的 redo log 和 binlog 区别？</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/herongwei/mysql-a2b8e123-41cb-4717-9225-3a8b49197004.png" alt="" loading="lazy"></p><h3 id="_14、为什么需要-redo-log" tabindex="-1"><a class="header-anchor" href="#_14、为什么需要-redo-log" aria-hidden="true">#</a> 14、为什么需要 redo log？</h3><ul><li>redo log 主要用于 MySQL 异常重启后的一种数据恢复手段，确保了数据的一致性。</li><li>其实是为了配合 MySQL 的 WAL 机制。因为 MySQL 进行更新操作，为了能够快速响应，所以采用了异步写回磁盘的技术，写入内存后就返回。但是这样，会存在 <strong>crash后</strong> 内存数据丢失的隐患，而 redo log 具备 crash safe 的能力。</li></ul><h3 id="_15、为什么-redo-log-具有-crash-safe-的能力-是-binlog-无法替代的" tabindex="-1"><a class="header-anchor" href="#_15、为什么-redo-log-具有-crash-safe-的能力-是-binlog-无法替代的" aria-hidden="true">#</a> 15、为什么 redo log 具有 crash-safe 的能力，是 binlog 无法替代的？</h3><p>第一点：redo log 可确保 innoDB 判断哪些数据已经刷盘，哪些数据还没有</p><ul><li><p>redo log 和 binlog 有一个很大的区别就是，一个是循环写，一个是追加写。也就是说 redo log 只会记录未刷盘的日志，已经刷入磁盘的数据都会从 redo log 这个有限大小的日志文件里删除。binlog 是追加日志，保存的是全量的日志。</p></li><li><p>当数据库 crash 后，想要恢复<strong>未刷盘但已经写入 redo log 和 binlog 的数据</strong>到内存时，binlog 是无法恢复的。虽然 binlog 拥有全量的日志，但没有一个标志让 innoDB 判断哪些数据已经刷盘，哪些数据还没有。</p></li><li><p>但 redo log 不一样，只要刷入磁盘的数据，都会从 redo log 中抹掉，因为是循环写！数据库重启后，直接把 redo log 中的数据都恢复至内存就可以了。</p></li></ul><p>第二点：如果 redo log 写入失败，说明此次操作失败，事务也不可能提交</p><ul><li>redo log 每次更新操作完成后，就一定会写入日志，如果<strong>写入失败</strong>，说明此次操作失败，事务也不可能提交。</li><li>redo log 内部结构是基于页的，记录了这个页的字段值变化，只要crash后读取redo log进行重放，就可以恢复数据。</li><li>这就是为什么 redo log 具有 crash-safe 的能力，而 binlog 不具备。</li></ul><h3 id="_16、当数据库-crash-后-如何恢复未刷盘的数据到内存中" tabindex="-1"><a class="header-anchor" href="#_16、当数据库-crash-后-如何恢复未刷盘的数据到内存中" aria-hidden="true">#</a> 16、当数据库 crash 后，如何恢复未刷盘的数据到内存中？</h3><p>根据 redo log 和 binlog 的两阶段提交，未持久化的数据分为几种情况：</p><ul><li><p>change buffer 写入，redo log 虽然做了 fsync 但未 commit，binlog 未 fsync 到磁盘，这部分数据丢失。</p></li><li><p>change buffer 写入，redo log fsync 未 commit，binlog 已经 fsync 到磁盘，先从 binlog 恢复 redo log，再从 redo log 恢复 change buffer。</p></li><li><p>change buffer 写入，redo log 和 binlog 都已经 fsync，直接从 redo log 里恢复。</p></li></ul><h3 id="_17、redo-log-写入方式" tabindex="-1"><a class="header-anchor" href="#_17、redo-log-写入方式" aria-hidden="true">#</a> 17、redo log 写入方式？</h3><p>redo log包括两部分内容，分别是内存中的<strong>日志缓冲</strong>(redo log buffer)和磁盘上的<strong>日志文件</strong>(redo log file)。</p><p>MySQL 每执行一条 DML 语句，会先把记录写入 <strong>redo log buffer（用户空间）</strong> ，再保存到内核空间的缓冲区 OS-buffer 中，后续某个时间点再一次性将多个操作记录写到 <strong>redo log file（刷盘）</strong> 。这种先写日志，再写磁盘的技术，就是<strong>WAL</strong>。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/herongwei/mysql-f901a97f-9d82-4d4e-a5be-559a64b3d9b8.png" alt="" loading="lazy"></p><p>可以发现，redo log buffer写入到redo log file，是经过OS buffer中转的。其实可以通过参数innodb_flush_log_at_trx_commit进行配置，参数值含义如下：</p><ul><li>0：称为<strong>延迟写</strong>，事务提交时不会将redo log buffer中日志写入到OS buffer，而是每秒写入OS buffer并调用写入到redo log file中。</li><li>1：称为<strong>实时写</strong>，实时刷”，事务每次提交都会将redo log buffer中的日志写入OS buffer并保存到redo log file中。</li><li>2： 称为<strong>实时写，延迟刷</strong>。每次事务提交写入到OS buffer，然后是每秒将日志写入到redo log file。</li></ul><h3 id="_18、redo-log-的执行流程" tabindex="-1"><a class="header-anchor" href="#_18、redo-log-的执行流程" aria-hidden="true">#</a> 18、redo log 的执行流程?</h3><p>我们来看下Redo log的执行流程，假设执行的 SQL 如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update T set a =1 where id =666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/herongwei/mysql-43fe6587-0cb8-49aa-bd93-0119e46430d7.png" alt="" loading="lazy"></p><ol><li>MySQL 客户端将请求语句 update T set a =1 where id =666，发往 MySQL Server 层。</li><li>MySQL Server 层接收到 SQL 请求后，对其进行分析、优化、执行等处理工作，将生成的 SQL 执行计划发到 InnoDB 存储引擎层执行。</li><li>InnoDB 存储引擎层将<strong>a修改为1</strong>的这个操作记录到内存中。</li><li>记录到内存以后会修改 redo log 的记录，会在添加一行记录，其内容是<strong>需要在哪个数据页上做什么修改</strong>。</li><li>此后，将事务的状态设置为 prepare ，说明已经准备好提交事务了。</li><li>等到 MySQL Server 层处理完事务以后，会将事务的状态设置为 <strong>commit</strong>，也就是提交该事务。</li><li>在收到事务提交的请求以后，<strong>redo log</strong> 会把刚才写入内存中的操作记录写入到磁盘中，从而完成整个日志的记录过程。</li></ol><h3 id="_19、binlog-的概念是什么-起到什么作用-可以保证-crash-safe-吗" tabindex="-1"><a class="header-anchor" href="#_19、binlog-的概念是什么-起到什么作用-可以保证-crash-safe-吗" aria-hidden="true">#</a> 19、binlog 的概念是什么，起到什么作用， 可以保证 crash-safe 吗?</h3><ul><li>binlog 是归档日志，属于 MySQL Server 层的日志。可以实现<strong>主从复制</strong>和<strong>数据恢复</strong>两个作用。</li><li>当需要<strong>恢复数据</strong>时，可以取出某个时间范围内的 binlog 进行重放恢复。</li><li>但是 binlog 不可以做 crash safe，因为 crash 之前，binlog <strong>可能没有写入完全</strong> MySQL 就挂了。所以需要配合 <strong>redo log</strong> 才可以进行 crash safe。</li></ul><h3 id="_20、什么是两阶段提交" tabindex="-1"><a class="header-anchor" href="#_20、什么是两阶段提交" aria-hidden="true">#</a> 20、什么是两阶段提交？</h3><p>MySQL 将 redo log 的写入拆成了两个步骤：prepare 和 commit，中间再穿插写入binlog，这就是&quot;两阶段提交&quot;。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/herongwei/mysql-11420486-f9d0-483a-ba2e-a742ec4c518d.png" alt="" loading="lazy"></p><p>而两阶段提交就是让这两个状态保持逻辑上的一致。redolog 用于恢复主机故障时的未更新的物理数据，binlog 用于备份操作。两者本身就是两个独立的个体，要想保持一致，就必须使用分布式事务的解决方案来处理。</p><p><strong>为什么需要两阶段提交呢?</strong></p><ul><li>如果不用两阶段提交的话，可能会出现这样情况</li><li>先写 redo log，crash 后 bin log 备份恢复时少了一次更新，与当前数据不一致。</li><li>先写 bin log，crash 后，由于 redo log 没写入，事务无效，所以后续 bin log 备份恢复时，数据不一致。</li><li>两阶段提交就是为了保证 redo log 和 binlog 数据的安全一致性。只有在这两个日志文件逻辑上高度一致了才能放心的使用。</li></ul><p>在恢复数据时，redolog 状态为 commit 则说明 binlog 也成功，直接恢复数据；如果 redolog 是 prepare，则需要查询对应的 binlog事务是否成功，决定是回滚还是执行。</p><h3 id="_21、mysql-怎么知道-binlog-是完整的" tabindex="-1"><a class="header-anchor" href="#_21、mysql-怎么知道-binlog-是完整的" aria-hidden="true">#</a> 21、MySQL 怎么知道 binlog 是完整的?</h3><p>一个事务的 binlog 是有完整格式的：</p><ul><li>statement 格式的 binlog，最后会有 COMMIT；</li><li>row 格式的 binlog，最后会有一个 XID event。</li></ul><h3 id="_22、什么是-wal-技术-有什么优点" tabindex="-1"><a class="header-anchor" href="#_22、什么是-wal-技术-有什么优点" aria-hidden="true">#</a> 22、什么是 WAL 技术，有什么优点？</h3><p>WAL，中文全称是 Write-Ahead Logging，它的关键点就是日志先写内存，再写磁盘。MySQL 执行更新操作后，<strong>在真正把数据写入到磁盘前，先记录日志</strong>。</p><p>好处是不用每一次操作都实时把数据写盘，就算 crash 后也可以通过redo log 恢复，所以能够实现快速响应 SQL 语句。</p><h3 id="_23、binlog-日志的三种格式" tabindex="-1"><a class="header-anchor" href="#_23、binlog-日志的三种格式" aria-hidden="true">#</a> 23、binlog 日志的三种格式</h3><p>binlog 日志有三种格式</p><ul><li>Statement：基于SQL语句的复制((statement-based replication,SBR))</li><li>Row：基于行的复制。(row-based replication,RBR)</li><li>Mixed：混合模式复制。(mixed-based replication,MBR)</li></ul><p><strong>Statement格式</strong></p><p>每一条会修改数据的 SQL 都会记录在 binlog 中</p><ul><li>优点：不需要记录每一行的变化，减少了binlog日志量，节约了IO，提高性能。</li><li>缺点：由于记录的只是执行语句，为了这些语句能在备库上正确运行，还必须记录每条语句在执行的时候的一些相关信息，以保证所有语句能在备库得到和在主库端执行时候相同的结果。</li></ul><p><strong>Row格式</strong></p><p>不记录 SQL 语句上下文相关信息，仅保存哪条记录被修改。</p><ul><li>优点：binlog 中可以不记录执行的 SQL 语句的上下文相关的信息，仅需要记录那一条记录被修改成什么了。所以rowlevel的日志内容会非常清楚的记录下每一行数据修改的细节。不会出现某些特定情况下的存储过程、或 function、或trigger的调用和触发无法被正确复制的问题。</li><li>缺点:可能会产生大量的日志内容。</li></ul><p><strong>Mixed格式</strong></p><p>实际上就是 Statement 与 Row 的结合。一般的语句修改使用 statment 格式保存 binlog，如一些函数，statement 无法完成主从复制的操作，则采用 row 格式保存 binlog，MySQL 会根据执行的每一条具体的 SQL 语句来区分对待记录的日志形式。</p><h3 id="_24、redo-log日志格式" tabindex="-1"><a class="header-anchor" href="#_24、redo-log日志格式" aria-hidden="true">#</a> 24、redo log日志格式</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/herongwei/mysql-ee8a859f-d1e8-4ab6-94d1-9733373be825.png" alt="" loading="lazy"></p><p>redo log buffer (内存中)是由首尾相连的四个文件组成的，它们分别是：ib_logfile_1、ib_logfile_2、ib_logfile_3、ib_logfile_4。</p><ul><li>write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。</li><li>checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。</li><li>write pos 和 checkpoint 之间的是“粉板”上还空着的部分，可以用来记录新的操作。</li><li>如果 write pos 追上 checkpoint，表示“粉板”满了，这时候不能再执行新的更新，得停下来先擦掉一些记录，把 checkpoint 推进一下。</li><li>有了 redo log，当数据库发生宕机重启后，可通过 redo log将未落盘的数据（check point之后的数据）恢复，保证已经提交的事务记录不会丢失，这种能力称为<strong>crash-safe</strong>。</li></ul><h3 id="_25、原本可以执行得很快的-sql-语句-执行速度却比预期的慢很多-原因是什么-如何解决" tabindex="-1"><a class="header-anchor" href="#_25、原本可以执行得很快的-sql-语句-执行速度却比预期的慢很多-原因是什么-如何解决" aria-hidden="true">#</a> 25、原本可以执行得很快的 SQL 语句，执行速度却比预期的慢很多，原因是什么？如何解决？</h3><p>原因：从大到小可分为四种情况</p><ul><li>MySQL 数据库本身被堵住了，比如：系统或网络资源不够。</li><li>SQL 语句被堵住了，比如：表锁，行锁等，导致存储引擎不执行对应的 SQL 语句。</li><li>确实是索引使用不当，没有走索引。</li><li>表中数据的特点导致的，走了索引，但回表次数庞大。</li></ul><p>解决：</p><ul><li>考虑采用 force index 强行选择一个索引</li><li>考虑修改语句，引导 MySQL 使用我们期望的索引。比如把“order by b limit 1” 改成 “order by b,a limit 1” ，语义的逻辑是相同的。</li><li>第三种方法是，在有些场景下，可以新建一个更合适的索引，来提供给优化器做选择，或删掉误用的索引。</li><li>如果确定是索引根本没必要，可以考虑删除索引。</li></ul><h3 id="_26、innodb-数据页结构" tabindex="-1"><a class="header-anchor" href="#_26、innodb-数据页结构" aria-hidden="true">#</a> 26、InnoDB 数据页结构</h3><p>一个数据页大致划分七个部分</p><ul><li>File Header：表示页的一些通用信息，占固定的38字节。</li><li>page Header：表示数据页专有信息，占固定的56字节。</li><li>inimum+Supermum：两个虚拟的伪记录，分别表示页中的最小记录和最大记录，占固定的26字节。</li><li>User Records：真正存储我们插入的数据，大小不固定。</li><li>Free Space：页中尚未使用的部分，大小不固定。</li><li>Page Directory：页中某些记录的相对位置，也就是各个槽对应的记录在页面中的地址偏移量。</li><li>File Trailer：用于检验页是否完整，占固定大小 8 字节。</li></ul><h2 id="数据相关" tabindex="-1"><a class="header-anchor" href="#数据相关" aria-hidden="true">#</a> 数据相关</h2><h3 id="_27、mysql-是如何保证数据不丢失的" tabindex="-1"><a class="header-anchor" href="#_27、mysql-是如何保证数据不丢失的" aria-hidden="true">#</a> 27、MySQL 是如何保证数据不丢失的？</h3><ul><li>只要redolog 和 binlog 保证持久化磁盘就能确保MySQL异常重启后回复数据</li><li>在恢复数据时，redolog 状态为 commit 则说明 binlog 也成功，直接恢复数据；如果 redolog 是 prepare，则需要查询对应的 binlog事务是否成功，决定是回滚还是执行。</li></ul><h3 id="_28、误删数据怎么办" tabindex="-1"><a class="header-anchor" href="#_28、误删数据怎么办" aria-hidden="true">#</a> 28、误删数据怎么办？</h3><p>DBA 的最核心的工作就是保证数据的完整性，先要做好预防，预防的话大概是通过这几个点：</p><ul><li>权限控制与分配(数据库和服务器权限)</li><li>制作操作规范</li><li>定期给开发进行培训</li><li>搭建延迟备库</li><li>做好 SQL 审计，只要是对线上数据有更改操作的语句(DML和DDL)都需要进行审核</li><li>做好备份。备份的话又分为两个点 (1)如果数据量比较大，用物理备份 xtrabackup。定期对数据库进行全量备份，也可以做增量备份。 (2)如果数据量较少，用 mysqldump 或者 mysqldumper。再利用 binlog 来恢复或者搭建主从的方式来恢复数据。 定期备份binlog 文件也是很有必要的</li><li>如果发生了数据删除的操作，又可以从以下几个点来恢复:</li><li>DML 误操作语句造成数据不完整或者丢失。可以通过 flashback，美团的 myflash，也是一个不错的工具，本质都差不多，都是先解析 binlog event，然后在进行反转。把 delete 反转为insert，insert 反转为 delete，update前后 image 对调。所以必须设置binlog_format=row 和 binlog_row_image=full，切记恢复数据的时候，应该先恢复到临时的实例，然后在恢复回主库上。</li><li>DDL语句误操作(truncate和drop)，由于DDL语句不管 binlog_format 是 row 还是 statement ，在 binlog 里都只记录语句，不记录 image 所以恢复起来相对要麻烦得多。只能通过全量备份+应用 binlog 的方式来恢复数据。一旦数据量比较大，那么恢复时间就特别长</li><li>rm 删除：使用备份跨机房，或者最好是跨城市保存。</li></ul><h3 id="_29、drop、truncate-和-delete-的区别" tabindex="-1"><a class="header-anchor" href="#_29、drop、truncate-和-delete-的区别" aria-hidden="true">#</a> 29、drop、truncate 和 delete 的区别</h3><ul><li>DELETE 语句执行删除的过程是每次从表中删除一行，并且同时将该行的删除操作作为事务记录在日志中保存以便进行进行回滚操作。</li><li>TRUNCATE TABLE 则一次性地从表中删除所有的数据并不把单独的删除操作记录记入日志保存，删除行是不能恢复的。并且在删除的过程中不会激活与表有关的删除触发器。执行速度快。</li><li>drop语句将表所占用的空间全释放掉。</li><li>在速度上，一般来说，drop&gt; truncate &gt; delete。</li><li>如果想删除部分数据用 delete，注意带上 where 子句，回滚段要足够大；</li><li>如果想删除表，当然用 drop； 如果想保留表而将所有数据删除，如果和事务无关，用 truncate 即可；</li><li>如果和事务有关，或者想触发 trigger，还是用 delete； 如果是整理表内部的碎片，可以用 truncate 跟上 reuse stroage，再重新导入/插入数据。</li></ul><h3 id="_30、在-mysql-中有两个-kill-命令" tabindex="-1"><a class="header-anchor" href="#_30、在-mysql-中有两个-kill-命令" aria-hidden="true">#</a> 30、在 MySQL 中有两个 kill 命令</h3><ul><li>一个是 kill query + 线程 id，表示终止这个线程中正在执行的语句</li><li>一个是 kill connection + 线程 id，这里 connection 可缺省，表示断开这个线程的连接</li></ul><p>kill 不掉的原因</p><ul><li>kill命令被堵了，还没到位</li><li>kill命令到位了，但是没被立刻触发</li><li>kill命令被触发了，但执行完也需要时间</li></ul><h3 id="_31、如何理解-mysql-的边读边发" tabindex="-1"><a class="header-anchor" href="#_31、如何理解-mysql-的边读边发" aria-hidden="true">#</a> 31、如何理解 MySQL 的边读边发</h3><ul><li>如果客户端接受慢，会导致 MySQL 服务端由于结果发不出去，这个事务的执行时间会很长。</li><li>服务端并不需要保存一个完整的结果集，取数据和发数据的流程都是通过一个 next_buffer 来操作的。</li><li>内存的数据页都是在 Buffer_Pool中操作的。</li><li>InnoDB 管理 Buffer_Pool 使用的是改进的 LRU 算法，使用链表实现，实现上，按照 5:3 的比例把整个 LRU 链表分成了 young 区域和 old 区域。</li></ul><h3 id="_32、mysql-的大表查询为什么不会爆内存" tabindex="-1"><a class="header-anchor" href="#_32、mysql-的大表查询为什么不会爆内存" aria-hidden="true">#</a> 32、MySQL 的大表查询为什么不会爆内存？</h3><ul><li>由于 MySQL 是边读变发，因此对于数据量很大的查询结果来说，不会再 server 端保存完整的结果集，所以，如果客户端读结果不及时，会堵住 MySQL 的查询过程，但是不会把内存打爆。</li><li>InnoDB 引擎内部，由于有淘汰策略，InnoDB 管理 Buffer_Pool 使用的是改进的 LRU 算法，使用链表实现，实现上，按照 5:3 的比例把整个 LRU 链表分成了 young 区域和 old 区域。对冷数据的全扫描，影响也能做到可控制。</li></ul><h3 id="_33、mysql-临时表的用法和特性" tabindex="-1"><a class="header-anchor" href="#_33、mysql-临时表的用法和特性" aria-hidden="true">#</a> 33、MySQL 临时表的用法和特性</h3><ul><li>只对当前session可见。</li><li>可以与普通表重名。</li><li>增删改查用的是临时表。</li><li>show tables 不显示普通表。</li><li>在实际应用中，临时表一般用于处理比较复杂的计算逻辑。</li><li>由于临时表是每个线程自己可见的，所以不需要考虑多个线程执行同一个处理时临时表的重名问题，在线程退出的时候，临时表会自动删除。</li></ul><h3 id="_34、mysql-存储引擎介绍-innodb、myisam、memory" tabindex="-1"><a class="header-anchor" href="#_34、mysql-存储引擎介绍-innodb、myisam、memory" aria-hidden="true">#</a> 34、MySQL 存储引擎介绍（InnoDB、MyISAM、MEMORY）</h3><ul><li>InnoDB 是事务型数据库的首选引擎，支持事务安全表 (ACID)，支持行锁定和外键。MySQL5.5.5 之后，InnoDB 作为默认存储引擎</li><li>MyISAM 基于 ISAM 的存储引擎，并对其进行扩展。它是在 Web、数据存储和其他应用环境下最常用的存储引擎之一。MyISAM 拥有较高的插入、查询速度，但不支持事务。在 MySQL5.5.5 之前的版本中，MyISAM 是默认存储引擎</li><li>MEMORY 存储引擎将表中的数据存储到内存中，为查询和引用其他表数据提供快速访问。</li></ul><h3 id="_35、都说-innodb-好-那还要不要使用-memory-引擎" tabindex="-1"><a class="header-anchor" href="#_35、都说-innodb-好-那还要不要使用-memory-引擎" aria-hidden="true">#</a> 35、都说 InnoDB 好，那还要不要使用 MEMORY 引擎？</h3><ul><li>内存表就是使用 memory 引擎创建的表</li><li>为什么我不建议你在生产环境上使用内存表。这里的原因主要包括两个方面：锁粒度问题；数据持久化问题。</li><li>由于重启会丢数据，如果一个备库重启，会导致主备同步线程停止；如果主库跟这个备库是双 M 架构，还可能导致主库的内存表数据被删掉。</li></ul><h3 id="_36、如果数据库误操作-如何执行数据恢复" tabindex="-1"><a class="header-anchor" href="#_36、如果数据库误操作-如何执行数据恢复" aria-hidden="true">#</a> 36、如果数据库误操作, 如何执行数据恢复?</h3><p>数据库在某个时候误操作，就可以找到距离误操作最近的时间节点的bin log，重放到临时数据库里，然后选择误删的数据节点，恢复到线上数据库。</p><h2 id="主从备份相关" tabindex="-1"><a class="header-anchor" href="#主从备份相关" aria-hidden="true">#</a> 主从备份相关</h2><h3 id="_37、mysql-是如何保证主备同步" tabindex="-1"><a class="header-anchor" href="#_37、mysql-是如何保证主备同步" aria-hidden="true">#</a> 37、MySQL 是如何保证主备同步？</h3><p>主备关系的建立：</p><ul><li>一开始创建主备关系的时候，是由备库指定的，比如基于位点的主备关系，备库说“我要从binlog文件A的位置P”开始同步，主库就从这个指定的位置开始往后发。</li><li>而主备关系搭建之后，是主库决定要发给数据给备库的，所以主库有新的日志也会发给备库。</li></ul><p>MySQL 主备切换流程：</p><ul><li>客户端读写都是直接访问A，而节点B是备库，只要将A的更新都同步过来，到本地执行就可以保证数据是相同的。</li><li>当需要切换的时候就把节点换一下，A的节点B的备库</li></ul><p>一个事务完整的同步过程：</p><ul><li><p>备库B和主库A建立来了长链接，主库A内部专门线程用于维护了这个长链接。</p></li><li><p>在备库B上通过changemaster命令设置主库A的IP端口用户名密码以及从哪个位置开始请求binlog包括文件名和日志偏移量</p></li><li><p>在备库B上执行start-slave命令备库会启动两个线程：io_thread和sql_thread分别负责建立连接和读取中转日志进行解析执行</p></li><li><p>备库读取主库传过来的binlog文件备库收到文件写到本地成为中转日志</p></li><li><p>后来由于多线程复制方案的引入，sql_thread演化成了多个线程。</p></li></ul><h3 id="_38、什么是主备延迟" tabindex="-1"><a class="header-anchor" href="#_38、什么是主备延迟" aria-hidden="true">#</a> 38、什么是主备延迟</h3><p>主库和备库在执行同一个事务的时候出现时间差的问题，主要原因有：</p><ul><li>有些部署条件下，备库所在机器的性能要比主库性能差。</li><li>备库的压力较大。</li><li>大事务，一个主库上语句执行10分钟，那么这个事务可能会导致从库延迟10分钟。</li></ul><h3 id="_39、为什么要有多线程复制策略" tabindex="-1"><a class="header-anchor" href="#_39、为什么要有多线程复制策略" aria-hidden="true">#</a> 39、为什么要有多线程复制策略？</h3><ul><li>因为单线程复制的能力全面低于多线程复制，对于更新压力较大的主库，备库可能是一直追不上主库的，带来的现象就是备库上seconds_behind_master值越来越大。</li><li>在实际应用中，建议使用可靠性优先策略，减少主备延迟，提升系统可用性，尽量减少大事务操作，把大事务拆分小事务。</li></ul><h3 id="_40、mysql-的并行策略有哪些" tabindex="-1"><a class="header-anchor" href="#_40、mysql-的并行策略有哪些" aria-hidden="true">#</a> 40、MySQL 的并行策略有哪些？</h3><ul><li>按表分发策略：如果两个事务更新不同的表，它们就可以并行。因为数据是存储在表里的，所以按表分发，可以保证两个 worker 不会更新同一行。缺点：如果碰到热点表，比如所有的更新事务都会涉及到某一个表的时候，所有事务都会被分配到同一个 worker 中，就变成单线程复制了。</li><li>按行分发策略：如果两个事务没有更新相同的行，它们在备库上可以并行。如果两个事务没有更新相同的行，它们在备库上可以并行执行。显然，这个模式要求 binlog 格式必须是 row。缺点：相比于按表并行分发策略，按行并行策略在决定线程分发的时候，需要消耗更多的计算资源。</li></ul><h3 id="_41、mysql的一主一备和一主多从有什么区别" tabindex="-1"><a class="header-anchor" href="#_41、mysql的一主一备和一主多从有什么区别" aria-hidden="true">#</a> 41、MySQL的一主一备和一主多从有什么区别？</h3><p>在一主一备的双 M 架构里，主备切换只需要把客户端流量切到备库；而在一主多从架构里，主备切换除了要把客户端流量切到备库外，还需要把从库接到新主库上。</p><h3 id="_42、主库出问题如何解决" tabindex="-1"><a class="header-anchor" href="#_42、主库出问题如何解决" aria-hidden="true">#</a> 42、主库出问题如何解决?</h3><ul><li>基于位点的主备切换：存在找同步位点这个问题</li><li>MySQL 5.6 版本引入了 GTID，彻底解决了这个困难。那么，GTID 到底是什么意思，又是如何解决找同步位点这个问题呢？</li><li>GTID：全局事务 ID，是一个事务在提交的时候生成的，是这个事务的唯一标识；它由两部分组成，格式是：GTID=server_uuid:gno</li><li>每个 MySQL 实例都维护了一个 GTID 集合，用来对应“这个实例执行过的所有事务”。</li><li>在基于 GTID 的主备关系里，系统认为只要建立主备关系，就必须保证主库发给备库的日志是完整的。因此，如果实例 B 需要的日志已经不存在，A’就拒绝把日志发给 B。</li></ul><h3 id="_43、mysql-读写分离涉及到过期读问题的几种解决方案" tabindex="-1"><a class="header-anchor" href="#_43、mysql-读写分离涉及到过期读问题的几种解决方案" aria-hidden="true">#</a> 43、MySQL 读写分离涉及到过期读问题的几种解决方案?</h3><ul><li>强制走主库方案</li><li>sleep 方案</li><li>判断主备无延迟方案</li><li>配合 semi-sync 方案</li><li>等主库位点方案</li><li>GTID 方案。</li><li>实际生产中，先客户端对请求做分类，区分哪些请求可以接受过期读，而哪些请求完全不能接受过期读；然后，对于不能接受过期读的语句，再使用等 GTID 或等位点的方案。</li></ul><h3 id="_44、mysql的并发链接和并发查询有什么区别" tabindex="-1"><a class="header-anchor" href="#_44、mysql的并发链接和并发查询有什么区别" aria-hidden="true">#</a> 44、MySQL的并发链接和并发查询有什么区别？</h3><ul><li>在执行show processlist的结果里，看到了几千个连接，指的是并发连接。而&quot;当前正在执行&quot;的语句，才是并发查询。</li><li>并发连接数多影响的是内存，并发查询太高对CPU不利。一个机器的CPU核数有限，线程全冲进来，上下文切换的成本就会太高。</li><li>所以需要设置参数：innodb_thread_concurrency 用来限制线程数，当线程数达到该参数，InnoDB就会认为线程数用完了，会阻止其他语句进入引擎执行。</li></ul><h2 id="性能相关" tabindex="-1"><a class="header-anchor" href="#性能相关" aria-hidden="true">#</a> 性能相关</h2><h3 id="_45、短时间提高-mysql-性能的方法" tabindex="-1"><a class="header-anchor" href="#_45、短时间提高-mysql-性能的方法" aria-hidden="true">#</a> 45、短时间提高 MySQL 性能的方法</h3><ul><li>第一种方法：先处理掉那些占着连接但是不工作的线程。或者再考虑断开事务内空闲太久的连接。 kill connection + id</li><li>第二种方法：减少连接过程的消耗：慢查询性能问题在 MySQL 中，会引发性能问题的慢查询，大体有以下三种可能：索引没有设计好；SQL 语句没写好；MySQL 选错了索引（force index）。</li></ul><h3 id="_46、为什么-mysql-自增主键-id-不连续" tabindex="-1"><a class="header-anchor" href="#_46、为什么-mysql-自增主键-id-不连续" aria-hidden="true">#</a> 46、为什么 MySQL 自增主键 ID 不连续？</h3><ul><li><p>唯一键冲突</p></li><li><p>事务回滚</p></li><li><p>自增主键的批量申请</p></li><li><p>深层次原因是：MySQL 不判断自增主键是否存在，从而减少加锁的时间范围和粒度，这样能保持更高的性能，确保自增主键不能回退，所以才有自增主键不连续。</p></li><li><p>自增主键怎么做到唯一性？自增值加1来通过自增锁控制并发</p></li></ul><h3 id="_47、innodb-为什么要用自增-id-作为主键" tabindex="-1"><a class="header-anchor" href="#_47、innodb-为什么要用自增-id-作为主键" aria-hidden="true">#</a> 47、InnoDB 为什么要用自增 ID 作为主键？</h3><ul><li><p>自增主键的插入模式，符合递增插入，每次都是追加操作，不涉及挪动记录，也不会触发叶子节点的分裂。</p></li><li><p>每次插入新的记录就会顺序添加到当前索引节点的后续位置，当一页写满，就会自动开辟一个新的页。</p></li><li><p>而有业务逻辑的字段做主键，不容易保证有序插入，由于每次插入主键的值近似于随机</p></li><li><p>因此每次新纪录都要被插到现有索引页得中间某个位置， 频繁的移动、分页操作造成了大量的碎片，得到了不够紧凑的索引结构，写数据成本较高。</p></li></ul><h3 id="_48、如何最快的复制一张表" tabindex="-1"><a class="header-anchor" href="#_48、如何最快的复制一张表" aria-hidden="true">#</a> 48、如何最快的复制一张表？</h3><ul><li>为了避免对源表加读锁，更稳妥的方案是先将数据写到外部文本文件，然后再写回目标表</li><li>一种方法是，使用 mysqldump 命令将数据导出成一组 INSERT 语句</li><li>另一种方法是直接将结果导出成.csv 文件。MySQL 提供语法，用来将查询结果导出到服务端本地目录：<code>select * from db1.t where a&gt;900 into outfile &#39;/server_tmp/t.csv&#39;</code>;得到.csv 导出文件后，你就可以用下面的 load data 命令将数据导入到目标表 db2.t 中：<code>load data infile &#39;/server_tmp/t.csv&#39; into table db2.t;</code></li><li>物理拷贝：在 MySQL 5.6 版本引入了可传输表空间(transportable tablespace) 的方法，可以通过导出 + 导入表空间的方式，实现物理拷贝表的功能。</li></ul><h3 id="_49、grant-和-flush-privileges语句" tabindex="-1"><a class="header-anchor" href="#_49、grant-和-flush-privileges语句" aria-hidden="true">#</a> 49、grant 和 flush privileges语句</h3><ul><li>grant语句会同时修改数据表和内存，判断权限的时候使用的内存数据，因此，规范使用是不需要加上 flush privileges 语句。</li><li>flush privileges 语句本身会用数据表的数据重建一份内存权限数据，所以在权限数据可能存在不一致的情况下再使用。</li></ul><h3 id="_50、要不要使用分区表" tabindex="-1"><a class="header-anchor" href="#_50、要不要使用分区表" aria-hidden="true">#</a> 50、要不要使用分区表？</h3><ul><li>分区并不是越细越好。实际上，单表或者单分区的数据一千万行，只要没有特别大的索引，对于现在的硬件能力来说都已经是小表了。</li><li>分区也不要提前预留太多，在使用之前预先创建即可。比如，如果是按月分区，每年年底时再把下一年度的 12 个新分区创建上即可。对于没有数据的历史分区，要及时的 drop 掉。</li></ul><h3 id="_51、join-用法" tabindex="-1"><a class="header-anchor" href="#_51、join-用法" aria-hidden="true">#</a> 51、join 用法</h3><ul><li>使用 left join 左边的表不一定是驱动表</li><li>如果需要 left join 的语义，就不能把被驱动表的字段放在 where 条件里面做等值判断或不等值判断，必须都写在 on 里面</li><li>标准的 group by 语句，是需要在 select 部分加一个聚合函数，比如<code>select a,count(*) from t group by a order by null;</code></li></ul><h3 id="_52、mysql-有哪些自增id-各自场景是什么" tabindex="-1"><a class="header-anchor" href="#_52、mysql-有哪些自增id-各自场景是什么" aria-hidden="true">#</a> 52、MySQL 有哪些自增ID？各自场景是什么？</h3><ul><li><p>表的自增 ID 达到上限之后，在申请值不会变化，进而导致联系插入数据的时候报主键冲突错误。</p></li><li><p>row_id 达到上限之后，归 0 在重新递增，如果出现相同的 row_id 后写的数据会覆盖之前的数据。</p></li><li><p>Xid 只需要不在同一个 binlog 文件出现重复值即可，理论上会出现重复值，但概率极小可忽略不计。</p></li><li><p>InnoDB 的 max_trx_id 递增值每次 MySQL 重启会保存起来。</p></li><li><p>Xid 是由 server 层维护的。InnoDB 内部使用 Xid，就是为了能够在 InnoDB 事务和 server 之间做关联。但是，InnoDB 自己的 trx_id，是另外维护的。</p></li><li><p>thread_id 是我们使用中最常见的，而且也是处理得最好的一个自增 id 逻辑了。使用了insert_unique算法</p></li></ul><h3 id="_53、xid-在-mysql-内部是怎么生成的呢" tabindex="-1"><a class="header-anchor" href="#_53、xid-在-mysql-内部是怎么生成的呢" aria-hidden="true">#</a> 53、Xid 在 MySQL 内部是怎么生成的呢？</h3><p><strong>MySQL 内部维护了一个全局变量 global_query_id，每次执行语句（包括select语句）的时候将它赋值给 Query_id，然后给这个变量加 1。如果当前语句是这个事务执行的第一条语句，那么 MySQL 还会同时把 Query_id 赋值给这个事务的 Xid。</strong></p><p>而 global_query_id 是一个纯内存变量，重启之后就清零了。所以你就知道了，在同一个数据库实例中，不同事务的 Xid 也是有可能相同的。但是 MySQL 重启之后会重新生成新的 binlog 文件，这就保证了，同一个 binlog 文件里，Xid 一定是惟一的。</p><h2 id="锁相关" tabindex="-1"><a class="header-anchor" href="#锁相关" aria-hidden="true">#</a> 锁相关</h2><h3 id="_54、说一下-mysql-的锁" tabindex="-1"><a class="header-anchor" href="#_54、说一下-mysql-的锁" aria-hidden="true">#</a> 54、说一下 MySQL 的锁</h3><ul><li>MySQL 在 server 层 和 存储引擎层 都运用了大量的锁</li><li>MySQL server 层需要讲两种锁，第一种是MDL(metadata lock) 元数据锁，第二种则 Table Lock 表锁。</li><li>MDL 又名元数据锁，那么什么是元数据呢，任何描述数据库的内容就是元数据，比如我们的表结构、库结构等都是元数据。那为什么需要 MDL 呢？</li><li>主要解决两个问题：事务隔离问题；数据复制问题</li><li>InnoDB 有五种表级锁：IS（意向读锁）；IX（意向写锁）；S（读）；X（写）；AUTO-INC</li><li>在对表进行select/insert/delete/update语句时候不会加表级锁</li><li>IS和IX的作用是为了判断表中是否有已经被加锁的记录</li><li>自增主键的保障就是有 AUTO-INC 锁，是语句级别的：为表的某个列添加 AUTO_INCREMENT 属性，之后在插⼊记录时，可以不指定该列的值，系统会⾃动为它赋上单调递增的值。</li><li>InnoDB 4 种行级锁</li><li>RecordLock：记录锁</li><li>GapLock：间隙锁解决幻读；前一次查询不存在的东西在下一次查询出现了，其实就是事务A中的两次查询之间事务B执行插入操作被事务A感知了</li><li>Next-KeyLock：锁住某条记录又想阻止其它事务在改记录前面的间隙插入新纪录</li><li>InsertIntentionLock：插入意向锁;如果插入到同一行间隙中的多个事务未插入到间隙内的同一位置则无须等待</li><li>行锁和表锁的抉择 <ul><li>全表扫描用行级锁</li></ul></li></ul><h3 id="_55、什么是幻读" tabindex="-1"><a class="header-anchor" href="#_55、什么是幻读" aria-hidden="true">#</a> 55、什么是幻读？</h3><p>值在同一个事务中，存在前后两次查询同一个范围的数据，第二次看到了第一次没有查询到的数据。</p><p>幻读出现的场景：</p><ul><li>事务的隔离级别是可重复读，且是当前读。</li><li>幻读指新插入的行。</li></ul><p>幻读带来的问题：</p><ul><li>对行锁语义的破坏</li><li>破坏了数据一致性</li></ul><p>解决：</p><ul><li>加间隙锁，锁住行与行之间的间隙，阻塞新插入的操作。</li><li>带来的问题：降低并发度，可能导致死锁。</li></ul><h2 id="其它为什么系列" tabindex="-1"><a class="header-anchor" href="#其它为什么系列" aria-hidden="true">#</a> 其它为什么系列</h2><h3 id="_56、为什么-mysql-会抖一下" tabindex="-1"><a class="header-anchor" href="#_56、为什么-mysql-会抖一下" aria-hidden="true">#</a> 56、为什么 MySQL 会抖一下？</h3><ul><li>脏页会被后台线程自动 flush，也会由于数据页淘汰而触发 flush，而刷脏页的过程由于会占用资源，可能会让你的更新和查询语句的响应时间长一些。</li></ul><h3 id="_57、为什么删除了表-表文件的大小还是没变" tabindex="-1"><a class="header-anchor" href="#_57、为什么删除了表-表文件的大小还是没变" aria-hidden="true">#</a> 57、为什么删除了表，表文件的大小还是没变？</h3><ul><li>数据项删除之后 InnoDB 某个页 page A 会被标记为可复用。</li><li>delete 命令把整个表的数据删除，结果就是，所有的数据页都会被标记为可复用。但是磁盘上，文件不会变小。</li><li>经过大量增删改的表，都是可能是存在空洞的。这些空洞也占空间所以，如果能够把这些空洞去掉，就能达到收缩表空间的目的。</li><li>重建表，就可以达到这样的目的。可以使用 alter table A engine=InnoDB 命令来重建表。</li></ul><h3 id="_58、count-实现方式以及各种-count-对比" tabindex="-1"><a class="header-anchor" href="#_58、count-实现方式以及各种-count-对比" aria-hidden="true">#</a> 58、<code>count(*)</code>实现方式以及各种 count 对比</h3><ul><li>对于 count(主键 id) 来说，InnoDB 引擎会遍历整张表，把每一行的 id 值都取出来，返回给 server 层。server 层拿到 id 后，判断是不可能为空的，就按行累加。</li><li>对于 count(1) 来说，InnoDB 引擎遍历整张表，但不取值。server 层对于返回的每一行，放一个数字“1”进去，判断是不可能为空的，按行累加。 单看这两个用法的差别的话，你能对比出来，count(1) 执行得要比 count(主键 id) 快。因为从引擎返回 id 会涉及到解析数据行，以及拷贝字段值的操作。</li><li>对于 count(字段) 来说：如果这个“字段”是定义为 not null 的话，一行行地从记录里面读出这个字段，判断不能为 null，按行累加；如果这个“字段”定义允许为 null，那么执行的时候，判断到有可能是 null，还要把值取出来再判断一下，不是 null 才累加。也就是前面的第一条原则，server 层要什么字段，InnoDB 就返回什么字段。</li><li>但是 <code>count *</code> 是例外，并不会把全部字段取出来，而是专门做了优化，不取值。<code>count(*)</code>肯定不是 null，按行累加。</li><li>所以结论是：按照效率排序的话，count(字段)<code>&lt;count(主键 id)&lt;count(1)≈count(※)</code>，所以建议尽量使用 <code>count(*)</code>。</li></ul><h3 id="_59、orderby-排序内部原理" tabindex="-1"><a class="header-anchor" href="#_59、orderby-排序内部原理" aria-hidden="true">#</a> 59、orderby 排序内部原理</h3><ul><li><p>MySQL 会为每个线程分配一个内存（sort-buffer）用于排序该内存大小为 sort_buffer_size；</p></li><li><p>如果排序的数据量小于 sort_buffer_size，排序就会在内存中完成；</p><p>内部排序分为两种</p></li><li><p>全字段排序：到索引树上找到满足条件的主键ID根据主键ID去取出数据放到sort_buffer然后进行快速排序</p></li><li><p>rowid排序：通过控制排序的行数据的长度来让sort_buffer中尽可能多的存放数据</p></li><li><p>如果数据量很大，内存中无法存下这么多，就会使用磁盘临时文件来辅助排序，称为外部排序；</p></li><li><p>外部排序，MySQL会分为好几份单独的临时文件来存放排序后的数据，一般是磁盘文件中进行归并，然后将这些文件合并成一个大文件；</p></li></ul><h3 id="_60、如何高效的使用-mysql-显式随机消息" tabindex="-1"><a class="header-anchor" href="#_60、如何高效的使用-mysql-显式随机消息" aria-hidden="true">#</a> 60、如何高效的使用 MySQL 显式随机消息</h3><ul><li><p>随机取出 Y1,Y2,Y3之后，算出Ymax,Ymin</p></li><li><p>得到id集后算出Y1、Y2、Y3对应的三个id 最后 select * from t where id in (id1, id2, id3) 这样扫描的行数应该是C+Ymax+3</p></li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>  mysql&gt; select count(*) into @C from t;
  set @Y1 = floor(@C * rand());
  set @Y2 = floor(@C * rand());
  set @Y3 = floor(@C * rand());
  Ymax = max(Y1,Y2,Y3)
  Ymin = min(Y1,Y2,Y3)
  select id from t limit Ymin，(Ymax - Ymin)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,193),p={href:"https://mp.weixin.qq.com/s/c-sy7tM0BmrqMUQFW7C65g",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/-SqqKmhZcOlQxM-rHiIpKg",target:"_blank",rel:"noopener noreferrer"},f=l("hr",null,null,-1),_=l("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),m={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},y=l("p",null,[i("关注二哥的原创公众号 "),l("strong",null,"沉默王二"),i("，回复"),l("strong",null,"111"),i(" 即可免费领取。")],-1),S=l("p",null,[l("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:"",loading:"lazy"})],-1);function L(x,M){const e=t("ExternalLinkIcon");return n(),o("div",null,[s,l("blockquote",null,[l("p",null,[i("图文详解 60 道 MySQL 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二，戳"),l("a",c,[i("转载链接"),a(e)]),i("，里面有局详细的思维导图；作者：herongwei，戳"),l("a",u,[i("原文链接"),a(e)]),i("。")])]),g,l("blockquote",null,[l("p",null,[i("图文详解 60 道 MySQL 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二，戳"),l("a",p,[i("转载链接"),a(e)]),i("，里面有局详细的思维导图；作者：herongwei，戳"),l("a",b,[i("原文链接"),a(e)]),i("。")])]),f,l("p",null,[i("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),_,i(" 等等等等……详情戳："),l("a",m,[i("可以说是2022年全网最全的学习和找工作的PDF资源了"),a(e)])]),y,S])}const I=r(h,[["render",L],["__file","mysql-60.html.vue"]]);export{I as default};
