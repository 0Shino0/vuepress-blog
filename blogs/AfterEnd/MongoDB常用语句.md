---
title: MongoDB常用语句
tags: 
  - MongoDB
  - DataBase
categories:
    - AfterEnd
summary: MongoDB常用语句
description: MongoDB常用语句
date: 2022-12-4 21:06:57

---

::: tip

​	MongoDB常用语句 | 非关系数据库 | 

:::



<!-- more -->

## MongoDB简介

MongoDB中的记录是一个文档，它是一个数据结构组成 字段和值对。MongoDB文档类似于JSON。 对象。字段的值可能包括其他文档、数组、 和文档数组。



使用文档的优点是：

- 文档对应于许多编程中的本机数据类型 语言。
- 嵌入式文档和数组减少了对昂贵联接的需求。
- 动态架构支持流畅的多态性。



对比SQL

| SQL概念     | MongoDB概念 | 解释/说明                           |
| ----------- | ----------- | ----------------------------------- |
| database    | database    | 数据库                              |
| table       | collection  | 数据库表/集合                       |
| row         | document    | 数据记录行/文档                     |
| column      | field       | 数据字段/域                         |
| index       | index       | 索引                                |
| primary key | primary key | 主键,MongoDB自动将_id字段设置为主键 |



## MongoDB常用语句

## 数据库

| 命令                                                       | 描述                       | 示例                                                      |
| ---------------------------------------------------------- | -------------------------- | --------------------------------------------------------- |
| `db.version()`                                             | 查看当前数据库版本         |                                                           |
| `mongo.exe -u root -p 密码 --authenticationDatabase admin` | 登录                       | `mongo.exe -u root -p 123 --authenticationDatabase admin` |
| `show dbs`                                                 | 查询所有数据库             |                                                           |
| `db`                                                       | 显示当前数据库             |                                                           |
| `use local`                                                | 切换指定数据库             |                                                           |
| `db.stats()`                                               | 查看数据库当前状态         |                                                           |
| `db.getMongo()`                                            | 查看当前数据库连接机器地址 | connection to 127.0.0.1                                   |



`show dbs`

- `admin   0.000GB`
  - 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- `config    0.000GB`
  -  这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- `local       0.000GB`
  - 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息



## 创建和删除数据库

| 命令                | 描述           | 示例 | 说明                                           |
| ------------------- | -------------- | ---- | ---------------------------------------------- |
| `use 数据库名`      | 创建数据库     |      |                                                |
| `db.dropDatabase()` | 删除当前数据库 |      | 如果没有选择任何数据库，会删除默认的test数据库 |
|                     |                |      |                                                |





## 集合

```mongodb
// 创建集合
    // 1. 直接创建
    db.createCollection('collection')
    	// 创建student集合
    	db.createCollection("student");

    // 2. 插入文档时自动创建
    db.collection.insert({name:'student'});
    	// 创建student集合

// 查看创建的合集
db.getCollectionNames()

// 查看集合里的内容
db.collection.find()

// 重命名集合
db.collection.renameCollection()

// 删除集合
db.合集名.drop()
	// 删除student集合
	db.student.drop()

// 删除集合中的记录数
db.log.distinct("name")

```



## 文档 增删改查

### 插入数据 `insert()`

```mongodb
// 模板
db.collection.insert(document)

// 插入空数据 并且直接创建集合
db.collection.insert({})

// 插入一个或多个数据
db.collection.insert({字段名1:"",字段名2:"",...})

// save 方法可以用来插入新数据也可以修改相同 _id 的数据
db.collection.save({name: '王五', age: 26})
db.collection.save({'_id': ObjectId("5de1f5264d0e7ea372eddf12"), name: '王五', age: 26})

```



### 删除数据 `remove()`

```mongodb
// 删除所有数据
db.collection.remove({})

// 删除
db.collection.remove({age:22})

// remove 方法第二个参数为真，则只删除符合条件的数据中的第一条
db.collection.remove({age: 22}, 1)
```



### 修改数据 `update()`

```mongodb
// 模板
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
// query : update的查询条件，类似sql update查询内where后面的。
// update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
// upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
// multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
// writeConcern :可选，抛出异常的级别。
	// 示例
    // $set修改器 默认只修改查到的第一条
    db.collection.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
    // $inc 可以对文档的某个值为数字型（只能为满足要求的数字）的键进行增减的操作
    db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );

```

#### 原子操作常用命令

| 原子操作命令 | 描述                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| `$set`       | 用来指定一个键并更新键值，若键不存在并创建                               |
| `$unset`     | 用来删除一个键                                                           |
| `$inc`       | $inc可以对文档的某个值为数字型（只能为满足要求的数字）的键进行增减的操作 |
| `$push`      | 可以追加一个值到一个数组字段内                                           |
| `$pushAll`   | 同$push,只是一次可以追加多个值到一个数组字段内                           |
| `$pull`      | 从数组field内删除一个等于value值。                                       |
| `$pop`       | 删除数组的第一个或最后一个元素                                           |
| `$rename`    | 修改字段名称                                                             |
| `$bit`       | 位操作，integer类型                                                      |
| 偏移操作符   |                                                                          |



### 查询数据 `find()`

```mongodb
// 查询数据库表 / 集合的所有数据
db.getCollection("student").find();

// 查询指定字段数字类型
db.getCollection("student").find({"userId":632});

// 查询指定字段字符串类型
// 查询学号为 202045020144 的所有学生信息
db.getCollection("student").find({"No":"202045020144"});

// limit()方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数。
db.collection.find().limit(NUMBER)

// skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数
db.collection.find().skip(NUMBER)

// sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而 -1 是用于降序排列
db.collection.find().sort({KEY:1}) # 升序
```



### 操作符

| 操作符 | 描述     |
| ------ | -------- |
| `$gt`  | 大于     |
| `$lt`  | 小于     |
| `$gte` | 大于等于 |
| `$lte` | 小于等于 |
| `$ne`  | 不等于   |

```mongodb
// 示例
// student集合中成绩大于等于100的数据
db.student.find({grade: { $gte:100 }})

// student集合中成绩小于100的数据
db.student.find({grade: { $lt:60 }})


```



| 操作符    | 描述                                                                        |
| --------- | --------------------------------------------------------------------------- |
| `$in`     | 包含某些数据                                                                |
| `$nin`    | 不包含某些数据                                                              |
| `$or`     | 或者                                                                        |
| `$mod`    | 取模                                                                        |
| `$not`    | 取反                                                                        |
| `null`    | 空查询                                                                      |
| 正则查询  | 正则表达式                                                                  |
| `$exists` | $exists 存在字段，true 为存在字段 key 的数据，false 为不存在字段 key 的数据 |
| `$size`   | $size是查询一定元素的数量且是数组的字段                                     |
| `$where`  | 可以使用js                                                                  |
| `limit()` | 限制数量                                                                    |
| `skip()`  | 跳过数量                                                                    |



## 聚合 

聚合操作处理数据记录并返回计算结果。可以使用聚合操作执行以下操作：

- 将多个文档中的值组合在一起。
- 对分组数据执行操作以返回单个结果。
- 分析数据随时间的变化。

若要执行聚合操作，可以使用：

- [聚合管道](https://www.mongodb.com/docs/upcoming/aggregation/#std-label-aggregation-pipeline-intro)，它们是 执行聚合的首选方法。
- [单一用途聚合方法](https://www.mongodb.com/docs/upcoming/aggregation/#std-label-single-purpose-agg-methods)，这很简单，但缺少 聚合管道的功能。



### 聚合管道 `aggregate()`

聚合操作这里不是使用`find()`方法了，而是 `aggregate()`方法。



```mongodb
// 1. $match 用于对数据进行筛选
{"$match":{"字段":"条件"}} // 可以使用任何常用查询操作符$gt,$lt,$in等
	// 示例
	// 查询出 name : "dave"的所有数据
	db.student.aggregate(
    [ { $match : { name : "dave" } } ]
    );

// 2. $project翻译为投射 ,即将一个数据结果映射为另一个结果 过程中可以对某些数据进行修改  控制其最终显示的结果
{"$project":{"要保留的字段名":1,"要去掉的字段名":0,"新增的字段名":"表达式"}}

// 3. $group分组,按指定的 _id 表达式对输入文档进行分组，并针对每个不同的分组输出文档
	// 示例
	{"$group":{"_id":"$sex"}} // 按照性别分组
    {"$group":{"_id":"$post"}} // 按照职位分组
    {"$group":{"_id":{"state":"$state","city":"$city"}}} // 按照多个字段分组，比如按照州市分组
    // 如果字段是排序后的，那么$first,$last会很有用,比用$max和$min效率高
db.emp.aggregate({"$group":{"_id":"$post","first_id":{"$first":"$_id"}}})
    // 求每个部门的总工资
    db.emp.aggregate({"$group":{"_id":"$post","count":{"$sum":"$salary"}}})
    // 求每个部门的人数
    db.emp.aggregate({"$group":{"_id":"$post","count":{"$sum":1}}})
    
// 4. $sort 
{"$sort":{"字段名":1,"字段名":-1}} // 1升序，-1降序


// 5. $sample 随机取出n条记录
	// 示例
	#下述操作时从users集合中随机选取3个文档
    db.users.aggregate({"$sample":{"size":3}})
```



### 累加器运算符

| 名称                                                                                                              | 描述                                                             |
| :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| [`$addToSet`](https://mongodb.net.cn/manual/reference/operator/aggregation/addToSet/#grp._S_addToSet)             | 返回每个组的*唯一*表达式值的数组。数组元素的顺序未定义。         |
| [`$avg`](https://mongodb.net.cn/manual/reference/operator/aggregation/avg/#grp._S_avg)                            | 返回数值的平均值。忽略非数字值。                                 |
| [`$first`](https://mongodb.net.cn/manual/reference/operator/aggregation/first/#grp._S_first)                      | 从每个组的第一个文档返回一个值。仅当文档按定义的顺序定义顺序。   |
| [`$last`](https://mongodb.net.cn/manual/reference/operator/aggregation/last/#grp._S_last)                         | 从每个组的最后一个文档返回一个值。仅当文档按定义的顺序定义顺序。 |
| [`$max`](https://mongodb.net.cn/manual/reference/operator/aggregation/max/#grp._S_max)                            | 返回每个组的最高表达式值。                                       |
| [`$mergeObjects`](https://mongodb.net.cn/manual/reference/operator/aggregation/mergeObjects/#exp._S_mergeObjects) | 返回通过组合每个组的输入文档而创建的文档。                       |
| [`$min`](https://mongodb.net.cn/manual/reference/operator/aggregation/min/#grp._S_min)                            | 返回每个组的最低表达式值。                                       |
| [`$push`](https://mongodb.net.cn/manual/reference/operator/aggregation/push/#grp._S_push)                         | 返回每个组的表达式值数组。                                       |
| [`$stdDevPop`](https://mongodb.net.cn/manual/reference/operator/aggregation/stdDevPop/#grp._S_stdDevPop)          | 返回输入值的总体标准偏差。                                       |
| [`$stdDevSamp`](https://mongodb.net.cn/manual/reference/operator/aggregation/stdDevSamp/#grp._S_stdDevSamp)       | 返回输入值的样本标准偏差。                                       |
| [`$sum`](https://mongodb.net.cn/manual/reference/operator/aggregation/sum/#grp._S_sum)                            | 返回数值的总和。忽略非数字值。                                   |



## MongoDB ObjectId

MongoDB 的对象 Id(ObjectId)。

ObjectId 是一个12字节 BSON 类型数据，有以下格式：

- 前4个字节表示时间戳
- 接下来的3个字节是机器标识码
- 紧接的两个字节由进程id组成（PID）
- 最后三个字节是随机数。



## 参考

[(32条消息) mongodb查询大全mongo语句_逍遥客.的博客-CSDN博客_mongodb语句](https:#blog.csdn.net/qq_41853447/article/details/108539155)


