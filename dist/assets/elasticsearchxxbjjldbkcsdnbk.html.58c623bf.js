const l=JSON.parse('{"key":"v-26c1a3ab","path":"/nice-article/csdn/elasticsearchxxbjjldbkcsdnbk.html","title":"Elasticsearch学习笔记_巨輪的博客-CSDN博客","lang":"zh-CN","frontmatter":{"title":"Elasticsearch学习笔记_巨輪的博客-CSDN博客","shortTitle":"Elasticsearch学习笔记_巨輪的博客-CSDN博客","description":"----第1章 Elasticsearch概述-01-开篇02-技术选型03-教学大纲-第2章 Elasticsearch入门-04-入门-环境准备05-入门-RESTful &amp; JSON06-入门-Postman客户端工具07-入门-倒排索引08-入门-HTTP-索引-创建09-入门-HTTP-索引-查询 &amp; 删除10-入门-HTTP-文档-创建（Put &amp; Post）11-入门-HTTP-查询-主键查询 &...","tag":["优质文章"],"category":["CSDN"],"head":[["meta",{"name":"keywords","content":"Elasticsearch学习笔记"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/csdn/elasticsearchxxbjjldbkcsdnbk.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Elasticsearch学习笔记_巨輪的博客-CSDN博客"}],["meta",{"property":"og:description","content":"----第1章 Elasticsearch概述-01-开篇02-技术选型03-教学大纲-第2章 Elasticsearch入门-04-入门-环境准备05-入门-RESTful &amp; JSON06-入门-Postman客户端工具07-入门-倒排索引08-入门-HTTP-索引-创建09-入门-HTTP-索引-查询 &amp; 删除10-入门-HTTP-文档-创建（Put &amp; Post）11-入门-HTTP-查询-主键查询 &..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-21T03:13:16.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"优质文章"}],["meta",{"property":"article:modified_time","content":"2022-11-21T03:13:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01-开篇","slug":"_01-开篇","link":"#_01-开篇","children":[]},{"level":2,"title":"02-技术选型","slug":"_02-技术选型","link":"#_02-技术选型","children":[{"level":3,"title":"Elasticsearch 是什么","slug":"elasticsearch-是什么","link":"#elasticsearch-是什么","children":[]},{"level":3,"title":"全文搜索引擎","slug":"全文搜索引擎","link":"#全文搜索引擎","children":[]},{"level":3,"title":"Elasticsearch 应用案例","slug":"elasticsearch-应用案例","link":"#elasticsearch-应用案例","children":[]}]},{"level":2,"title":"03-教学大纲","slug":"_03-教学大纲","link":"#_03-教学大纲","children":[]},{"level":2,"title":"04-入门-环境准备","slug":"_04-入门-环境准备","link":"#_04-入门-环境准备","children":[]},{"level":2,"title":"05-入门-RESTful & JSON","slug":"_05-入门-restful-json","link":"#_05-入门-restful-json","children":[]},{"level":2,"title":"06-入门-Postman客户端工具","slug":"_06-入门-postman客户端工具","link":"#_06-入门-postman客户端工具","children":[]},{"level":2,"title":"07-入门-倒排索引","slug":"_07-入门-倒排索引","link":"#_07-入门-倒排索引","children":[]},{"level":2,"title":"08-入门-HTTP-索引-创建","slug":"_08-入门-http-索引-创建","link":"#_08-入门-http-索引-创建","children":[]},{"level":2,"title":"09-入门-HTTP-索引-查询 & 删除","slug":"_09-入门-http-索引-查询-删除","link":"#_09-入门-http-索引-查询-删除","children":[{"level":3,"title":"查看所有索引","slug":"查看所有索引","link":"#查看所有索引","children":[]},{"level":3,"title":"查看单个索引","slug":"查看单个索引","link":"#查看单个索引","children":[]},{"level":3,"title":"删除索引","slug":"删除索引","link":"#删除索引","children":[]}]},{"level":2,"title":"10-入门-HTTP-文档-创建（Put & Post）","slug":"_10-入门-http-文档-创建-put-post","link":"#_10-入门-http-文档-创建-put-post","children":[]},{"level":2,"title":"11-入门-HTTP-查询-主键查询 & 全查询","slug":"_11-入门-http-查询-主键查询-全查询","link":"#_11-入门-http-查询-主键查询-全查询","children":[]},{"level":2,"title":"12-入门-HTTP-全量修改 & 局部修改 & 删除","slug":"_12-入门-http-全量修改-局部修改-删除","link":"#_12-入门-http-全量修改-局部修改-删除","children":[{"level":3,"title":"全量修改","slug":"全量修改","link":"#全量修改","children":[]},{"level":3,"title":"局部修改","slug":"局部修改","link":"#局部修改","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"13-入门-HTTP-条件查询 & 分页查询 & 查询排序","slug":"_13-入门-http-条件查询-分页查询-查询排序","link":"#_13-入门-http-条件查询-分页查询-查询排序","children":[{"level":3,"title":"条件查询","slug":"条件查询","link":"#条件查询","children":[]},{"level":3,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]},{"level":3,"title":"查询排序","slug":"查询排序","link":"#查询排序","children":[]}]},{"level":2,"title":"14-入门-HTTP-多条件查询 & 范围查询","slug":"_14-入门-http-多条件查询-范围查询","link":"#_14-入门-http-多条件查询-范围查询","children":[{"level":3,"title":"多条件查询","slug":"多条件查询","link":"#多条件查询","children":[]},{"level":3,"title":"范围查询","slug":"范围查询","link":"#范围查询","children":[]}]},{"level":2,"title":"15-入门-HTTP-全文检索 & 完全匹配 & 高亮查询","slug":"_15-入门-http-全文检索-完全匹配-高亮查询","link":"#_15-入门-http-全文检索-完全匹配-高亮查询","children":[{"level":3,"title":"全文检索","slug":"全文检索","link":"#全文检索","children":[]},{"level":3,"title":"完全匹配","slug":"完全匹配","link":"#完全匹配","children":[]},{"level":3,"title":"高亮查询","slug":"高亮查询","link":"#高亮查询","children":[]}]},{"level":2,"title":"16-入门-HTTP-聚合查询","slug":"_16-入门-http-聚合查询","link":"#_16-入门-http-聚合查询","children":[]},{"level":2,"title":"17-入门-HTTP-映射关系","slug":"_17-入门-http-映射关系","link":"#_17-入门-http-映射关系","children":[]},{"level":2,"title":"18-入门-JavaAPI-环境准备","slug":"_18-入门-javaapi-环境准备","link":"#_18-入门-javaapi-环境准备","children":[]},{"level":2,"title":"19-入门-JavaAPI-索引-创建","slug":"_19-入门-javaapi-索引-创建","link":"#_19-入门-javaapi-索引-创建","children":[]},{"level":2,"title":"20-入门-JavaAPI-索引-查询 & 删除","slug":"_20-入门-javaapi-索引-查询-删除","link":"#_20-入门-javaapi-索引-查询-删除","children":[{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":3,"title":"删除","slug":"删除-1","link":"#删除-1","children":[]}]},{"level":2,"title":"21-入门-JavaAPI-文档-新增 & 修改","slug":"_21-入门-javaapi-文档-新增-修改","link":"#_21-入门-javaapi-文档-新增-修改","children":[{"level":3,"title":"重构","slug":"重构","link":"#重构","children":[]},{"level":3,"title":"新增","slug":"新增","link":"#新增","children":[]},{"level":3,"title":"修改","slug":"修改","link":"#修改","children":[]}]},{"level":2,"title":"22-入门-JavaAPI-文档-查询 & 删除","slug":"_22-入门-javaapi-文档-查询-删除","link":"#_22-入门-javaapi-文档-查询-删除","children":[{"level":3,"title":"查询","slug":"查询-1","link":"#查询-1","children":[]},{"level":3,"title":"删除","slug":"删除-2","link":"#删除-2","children":[]}]},{"level":2,"title":"23-入门-JavaAPI-文档-批量新增 & 批量删除","slug":"_23-入门-javaapi-文档-批量新增-批量删除","link":"#_23-入门-javaapi-文档-批量新增-批量删除","children":[{"level":3,"title":"批量新增","slug":"批量新增","link":"#批量新增","children":[]},{"level":3,"title":"批量删除","slug":"批量删除","link":"#批量删除","children":[]}]},{"level":2,"title":"24-入门-JavaAPI-文档-高级查询-全量查询","slug":"_24-入门-javaapi-文档-高级查询-全量查询","link":"#_24-入门-javaapi-文档-高级查询-全量查询","children":[]},{"level":2,"title":"25-入门-JavaAPI-文档-高级查询-分页查询 & 条件查询 & 查询排序","slug":"_25-入门-javaapi-文档-高级查询-分页查询-条件查询-查询排序","link":"#_25-入门-javaapi-文档-高级查询-分页查询-条件查询-查询排序","children":[{"level":3,"title":"条件查询","slug":"条件查询-1","link":"#条件查询-1","children":[]},{"level":3,"title":"分页查询","slug":"分页查询-1","link":"#分页查询-1","children":[]},{"level":3,"title":"查询排序","slug":"查询排序-1","link":"#查询排序-1","children":[]}]},{"level":2,"title":"26-入门-JavaAPI-文档-高级查询-组合查询 & 范围查询","slug":"_26-入门-javaapi-文档-高级查询-组合查询-范围查询","link":"#_26-入门-javaapi-文档-高级查询-组合查询-范围查询","children":[{"level":3,"title":"组合查询","slug":"组合查询","link":"#组合查询","children":[]},{"level":3,"title":"范围查询","slug":"范围查询-1","link":"#范围查询-1","children":[]}]},{"level":2,"title":"27-入门-JavaAPI-文档-高级查询-模糊查询 & 高亮查询","slug":"_27-入门-javaapi-文档-高级查询-模糊查询-高亮查询","link":"#_27-入门-javaapi-文档-高级查询-模糊查询-高亮查询","children":[{"level":3,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]},{"level":3,"title":"高亮查询","slug":"高亮查询-1","link":"#高亮查询-1","children":[]}]},{"level":2,"title":"28-入门-JavaAPI-文档-高级查询-最大值查询 & 分组查询","slug":"_28-入门-javaapi-文档-高级查询-最大值查询-分组查询","link":"#_28-入门-javaapi-文档-高级查询-最大值查询-分组查询","children":[{"level":3,"title":"最大值查询","slug":"最大值查询","link":"#最大值查询","children":[]},{"level":3,"title":"分组查询","slug":"分组查询","link":"#分组查询","children":[]}]},{"level":2,"title":"29-环境-简介","slug":"_29-环境-简介","link":"#_29-环境-简介","children":[{"level":3,"title":"单机 & 集群","slug":"单机-集群","link":"#单机-集群","children":[]},{"level":3,"title":"集群 Cluster","slug":"集群-cluster","link":"#集群-cluster","children":[]},{"level":3,"title":"节点 Node","slug":"节点-node","link":"#节点-node","children":[]}]},{"level":2,"title":"30-环境-Windows集群部署","slug":"_30-环境-windows集群部署","link":"#_30-环境-windows集群部署","children":[{"level":3,"title":"部署集群","slug":"部署集群","link":"#部署集群","children":[]},{"level":3,"title":"启动集群","slug":"启动集群","link":"#启动集群","children":[]},{"level":3,"title":"测试集群","slug":"测试集群","link":"#测试集群","children":[]}]},{"level":2,"title":"31-环境-Linux单节点部署","slug":"_31-环境-linux单节点部署","link":"#_31-环境-linux单节点部署","children":[{"level":3,"title":"软件安装","slug":"软件安装","link":"#软件安装","children":[]},{"level":3,"title":"启动软件","slug":"启动软件","link":"#启动软件","children":[]},{"level":3,"title":"测试软件","slug":"测试软件","link":"#测试软件","children":[]}]},{"level":2,"title":"32-环境-Linux集群部署","slug":"_32-环境-linux集群部署","link":"#_32-环境-linux集群部署","children":[{"level":3,"title":"软件安装","slug":"软件安装-1","link":"#软件安装-1","children":[]},{"level":3,"title":"启动软件","slug":"启动软件-1","link":"#启动软件-1","children":[]},{"level":3,"title":"测试集群","slug":"测试集群-1","link":"#测试集群-1","children":[]}]},{"level":2,"title":"33-进阶-核心概念","slug":"_33-进阶-核心概念","link":"#_33-进阶-核心概念","children":[{"level":3,"title":"索引Index","slug":"索引index","link":"#索引index","children":[]},{"level":3,"title":"类型Type","slug":"类型type","link":"#类型type","children":[]},{"level":3,"title":"文档Document","slug":"文档document","link":"#文档document","children":[]},{"level":3,"title":"字段Field","slug":"字段field","link":"#字段field","children":[]},{"level":3,"title":"映射Mapping","slug":"映射mapping","link":"#映射mapping","children":[]},{"level":3,"title":"分片Shards","slug":"分片shards","link":"#分片shards","children":[]},{"level":3,"title":"副本Replicas","slug":"副本replicas","link":"#副本replicas","children":[]},{"level":3,"title":"分配Allocation","slug":"分配allocation","link":"#分配allocation","children":[]}]},{"level":2,"title":"34-进阶-系统架构-简介","slug":"_34-进阶-系统架构-简介","link":"#_34-进阶-系统架构-简介","children":[]},{"level":2,"title":"35-进阶-单节点集群","slug":"_35-进阶-单节点集群","link":"#_35-进阶-单节点集群","children":[]},{"level":2,"title":"36-进阶-故障转移","slug":"_36-进阶-故障转移","link":"#_36-进阶-故障转移","children":[]},{"level":2,"title":"37-进阶-水平扩容","slug":"_37-进阶-水平扩容","link":"#_37-进阶-水平扩容","children":[]},{"level":2,"title":"38-进阶-应对故障","slug":"_38-进阶-应对故障","link":"#_38-进阶-应对故障","children":[]},{"level":2,"title":"39-进阶-路由计算 & 分片控制","slug":"_39-进阶-路由计算-分片控制","link":"#_39-进阶-路由计算-分片控制","children":[{"level":3,"title":"路由计算","slug":"路由计算","link":"#路由计算","children":[]},{"level":3,"title":"分片控制","slug":"分片控制","link":"#分片控制","children":[]}]},{"level":2,"title":"40-进阶-数据写流程","slug":"_40-进阶-数据写流程","link":"#_40-进阶-数据写流程","children":[]},{"level":2,"title":"41-进阶-数据读流程","slug":"_41-进阶-数据读流程","link":"#_41-进阶-数据读流程","children":[]},{"level":2,"title":"42-进阶-更新流程 & 批量操作流程","slug":"_42-进阶-更新流程-批量操作流程","link":"#_42-进阶-更新流程-批量操作流程","children":[{"level":3,"title":"更新流程","slug":"更新流程","link":"#更新流程","children":[]},{"level":3,"title":"批量操作流程","slug":"批量操作流程","link":"#批量操作流程","children":[]}]},{"level":2,"title":"43-进阶-倒排索引","slug":"_43-进阶-倒排索引","link":"#_43-进阶-倒排索引","children":[{"level":3,"title":"倒排索引原理","slug":"倒排索引原理","link":"#倒排索引原理","children":[]},{"level":3,"title":"倒排索引的例子","slug":"倒排索引的例子","link":"#倒排索引的例子","children":[]}]},{"level":2,"title":"44-进阶-文档搜索","slug":"_44-进阶-文档搜索","link":"#_44-进阶-文档搜索","children":[{"level":3,"title":"不可改变的倒排索引","slug":"不可改变的倒排索引","link":"#不可改变的倒排索引","children":[]},{"level":3,"title":"动态更新索引","slug":"动态更新索引","link":"#动态更新索引","children":[]}]},{"level":2,"title":"45-进阶-文档刷新 & 文档刷写 & 文档合并","slug":"_45-进阶-文档刷新-文档刷写-文档合并","link":"#_45-进阶-文档刷新-文档刷写-文档合并","children":[{"level":3,"title":"近实时搜索","slug":"近实时搜索","link":"#近实时搜索","children":[]},{"level":3,"title":"持久化变更","slug":"持久化变更","link":"#持久化变更","children":[]},{"level":3,"title":"段合并","slug":"段合并","link":"#段合并","children":[]}]},{"level":2,"title":"46-进阶-文档分析","slug":"_46-进阶-文档分析","link":"#_46-进阶-文档分析","children":[{"level":3,"title":"内置分析器","slug":"内置分析器","link":"#内置分析器","children":[]},{"level":3,"title":"分析器使用场景","slug":"分析器使用场景","link":"#分析器使用场景","children":[]},{"level":3,"title":"测试分析器","slug":"测试分析器","link":"#测试分析器","children":[]},{"level":3,"title":"指定分析器","slug":"指定分析器","link":"#指定分析器","children":[]},{"level":3,"title":"IK分词器","slug":"ik分词器","link":"#ik分词器","children":[]},{"level":3,"title":"自定义分析器","slug":"自定义分析器","link":"#自定义分析器","children":[]}]},{"level":2,"title":"47-进阶-文档控制","slug":"_47-进阶-文档控制","link":"#_47-进阶-文档控制","children":[{"level":3,"title":"文档冲突","slug":"文档冲突","link":"#文档冲突","children":[]},{"level":3,"title":"乐观并发控制","slug":"乐观并发控制","link":"#乐观并发控制","children":[]},{"level":3,"title":"外部系统版本控制","slug":"外部系统版本控制","link":"#外部系统版本控制","children":[]}]},{"level":2,"title":"48-进阶-文档展示-Kibana","slug":"_48-进阶-文档展示-kibana","link":"#_48-进阶-文档展示-kibana","children":[]},{"level":2,"title":"49-框架集成-SpringData-整体介绍","slug":"_49-框架集成-springdata-整体介绍","link":"#_49-框架集成-springdata-整体介绍","children":[{"level":3,"title":"Spring Data Elasticsearch 介绍","slug":"spring-data-elasticsearch-介绍","link":"#spring-data-elasticsearch-介绍","children":[]}]},{"level":2,"title":"50-框架集成-SpringData-代码功能集成","slug":"_50-框架集成-springdata-代码功能集成","link":"#_50-框架集成-springdata-代码功能集成","children":[]},{"level":2,"title":"51-框架集成-SpringData-集成测试-索引操作","slug":"_51-框架集成-springdata-集成测试-索引操作","link":"#_51-框架集成-springdata-集成测试-索引操作","children":[]},{"level":2,"title":"52-框架集成-SpringData-集成测试-文档操作","slug":"_52-框架集成-springdata-集成测试-文档操作","link":"#_52-框架集成-springdata-集成测试-文档操作","children":[]},{"level":2,"title":"53-框架集成-SpringData-集成测试-文档搜索","slug":"_53-框架集成-springdata-集成测试-文档搜索","link":"#_53-框架集成-springdata-集成测试-文档搜索","children":[]},{"level":2,"title":"54-框架集成-SparkStreaming-集成","slug":"_54-框架集成-sparkstreaming-集成","link":"#_54-框架集成-sparkstreaming-集成","children":[]},{"level":2,"title":"55-框架集成-Flink-集成","slug":"_55-框架集成-flink-集成","link":"#_55-框架集成-flink-集成","children":[]},{"level":2,"title":"56-优化-硬件选择","slug":"_56-优化-硬件选择","link":"#_56-优化-硬件选择","children":[]},{"level":2,"title":"57-优化-分片策略","slug":"_57-优化-分片策略","link":"#_57-优化-分片策略","children":[{"level":3,"title":"合理设置分片数","slug":"合理设置分片数","link":"#合理设置分片数","children":[]},{"level":3,"title":"推迟分片分配","slug":"推迟分片分配","link":"#推迟分片分配","children":[]}]},{"level":2,"title":"58-优化-路由选择","slug":"_58-优化-路由选择","link":"#_58-优化-路由选择","children":[{"level":3,"title":"不带routing查询","slug":"不带routing查询","link":"#不带routing查询","children":[]},{"level":3,"title":"带routing查询","slug":"带routing查询","link":"#带routing查询","children":[]}]},{"level":2,"title":"59-优化-写入速度优化","slug":"_59-优化-写入速度优化","link":"#_59-优化-写入速度优化","children":[{"level":3,"title":"优化存储设备","slug":"优化存储设备","link":"#优化存储设备","children":[]},{"level":3,"title":"合理使用合并","slug":"合理使用合并","link":"#合理使用合并","children":[]},{"level":3,"title":"减少 Refresh 的次数","slug":"减少-refresh-的次数","link":"#减少-refresh-的次数","children":[]},{"level":3,"title":"加大 Flush 设置","slug":"加大-flush-设置","link":"#加大-flush-设置","children":[]},{"level":3,"title":"减少副本的数量","slug":"减少副本的数量","link":"#减少副本的数量","children":[]}]},{"level":2,"title":"60-优化-内存设置","slug":"_60-优化-内存设置","link":"#_60-优化-内存设置","children":[]},{"level":2,"title":"61-优化-重要配置","slug":"_61-优化-重要配置","link":"#_61-优化-重要配置","children":[]},{"level":2,"title":"62-面试题","slug":"_62-面试题","link":"#_62-面试题","children":[{"level":3,"title":"为什么要使用 Elasticsearch？","slug":"为什么要使用-elasticsearch","link":"#为什么要使用-elasticsearch","children":[]},{"level":3,"title":"Elasticsearch 的 master 选举流程？","slug":"elasticsearch-的-master-选举流程","link":"#elasticsearch-的-master-选举流程","children":[]},{"level":3,"title":"Elasticsearch 集群脑裂问题？","slug":"elasticsearch-集群脑裂问题","link":"#elasticsearch-集群脑裂问题","children":[]},{"level":3,"title":"Elasticsearch 索引文档的流程？","slug":"elasticsearch-索引文档的流程","link":"#elasticsearch-索引文档的流程","children":[]},{"level":3,"title":"Elasticsearch 更新和删除文档的流程？","slug":"elasticsearch-更新和删除文档的流程","link":"#elasticsearch-更新和删除文档的流程","children":[]},{"level":3,"title":"Elasticsearch 搜索的流程？","slug":"elasticsearch-搜索的流程","link":"#elasticsearch-搜索的流程","children":[]},{"level":3,"title":"Elasticsearch 在部署时，对 Linux 的设置有哪些优化方法？","slug":"elasticsearch-在部署时-对-linux-的设置有哪些优化方法","link":"#elasticsearch-在部署时-对-linux-的设置有哪些优化方法","children":[]},{"level":3,"title":"GC 方面，在使用 Elasticsearch 时要注意什么？","slug":"gc-方面-在使用-elasticsearch-时要注意什么","link":"#gc-方面-在使用-elasticsearch-时要注意什么","children":[]},{"level":3,"title":"Elasticsearch 对于大数据量（上亿量级）的聚合如何实现？","slug":"elasticsearch-对于大数据量-上亿量级-的聚合如何实现","link":"#elasticsearch-对于大数据量-上亿量级-的聚合如何实现","children":[]},{"level":3,"title":"在并发情况下， Elasticsearch 如果保证读写一致？","slug":"在并发情况下-elasticsearch-如果保证读写一致","link":"#在并发情况下-elasticsearch-如果保证读写一致","children":[]},{"level":3,"title":"如何监控 Elasticsearch 集群状态？","slug":"如何监控-elasticsearch-集群状态","link":"#如何监控-elasticsearch-集群状态","children":[]},{"level":3,"title":"是否了解字典树？","slug":"是否了解字典树","link":"#是否了解字典树","children":[]},{"level":3,"title":"Elasticsearch 中的集群、节点、索引、文档、类型是什么？","slug":"elasticsearch-中的集群、节点、索引、文档、类型是什么","link":"#elasticsearch-中的集群、节点、索引、文档、类型是什么","children":[]},{"level":3,"title":"Elasticsearch 中的倒排索引是什么？","slug":"elasticsearch-中的倒排索引是什么","link":"#elasticsearch-中的倒排索引是什么","children":[]}]}],"git":{"createdTime":1669000396000,"updatedTime":1669000396000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":132.22,"words":39666},"filePathRelative":"nice-article/csdn/elasticsearchxxbjjldbkcsdnbk.md","localizedDate":"2022年11月21日"}');export{l as data};
