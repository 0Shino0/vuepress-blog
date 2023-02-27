---
title: MySQL常用语句
tags: 
  - MySQL
  - DataBase
categories:
    - AfterEnd
summary: MySQL常用语句
description: MySQL常用语句
date: 2022-12-4 21:04:13
---

::: tip

​	MySQL常用语句 | 关系型数据库 | 

:::



<!-- more -->



## MySQL常用语句




## 1. 数据库

| 语句                                | 描述                                         | 使用场合 | 示例 |
| ----------------------------------- | -------------------------------------------- | -------- | ---- |
| `Create database 数据库名;`         | 创建数据库                                   |          |      |
| `Drop database 数据库名;`           | 删除数据库                                   |          |      |
| `Drop database if exists 数据库名;` | 查询数据库是否存在，如果存在，就删除该数据库 |          |      |
| `Use 数据库名；`                    | 使用该数据库                                 |          |      |



## 2. 表

```sql
# 1.查看所有表
SHOW TABLES;

# 2.删除指定表
DROP TABLE 表名;

# 3.查看表的结果
DESCRIBE 表名;
DESC 表名;

# 4.查看表的详细信息
SHOW CREATE TABLE 表名;


# 5.字段名的数据类型
int              # 整型
char(n)          # 定长字符型
varchar(n)       # 变长字符型
float(m,d)       # 单精度型,m表示总位数，d表示小数位数
decimal(m,d)     # 双精度型
date             # 日期型
# (这里只介绍MySQL支持的主要数据类型)


# 6.创建一个表
CREATE TABLE <tablename>(
<字段名称> <数据类型>,
<字段名称> <数据类型>,
<字段名称> <数据类型>,
 ......
);

	# 示例
    CREATE TABLE student
         (
            sno char(10),
            sname varchar(5),
            sage int(5),
            sex char(3)
         );


```


## 3. 约束

```sql
# 在 MySQL 中，主要有六种约束:
    # 1、NOT NULL：非空约束，用于约束该字段的值不能为空。比如姓名、学号等。
    # 2、DEFAULT：默认值约束，用于约束该字段有默认值，约束当数据表中某个字段不输入值时，自动为其添加一个已经设置好的值。比如性别。
    # 3、PRIMARY KEY：主键约束，用于约束该字段的值具有唯一性，至多有一个，可以没有，并且非空。比如学号、员工编号等。
    # 4、UNIQUE：唯一约束，用于约束该字段的值具有唯一性，可以有多个，可以没有，可以为空。比如座位号。
    # 5、CHECK：检查约束，用来检查数据表中，字段值是否有效。比如年龄、性别。
    # 6、FOREIGN KEY：外键约束，外键约束经常和主键约束一起使用，用来确保数据的一致性，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值。在从表添加外键约束，用于引用主表中某列的值。比如学生表的专业编号，员工表的部门编号，员工表的工种编号。

# 主要归类为列级约束和表级约束
	# 列级约束：NOT NULL | DEFAULT | PRIMARY KEY | UNIQUE | CHECK
	# 表级约束：PRIMARY KEY | UNIQUE | CHECK | FOREIGN KEY

# 添加主键约束
CREATE TABLE student
     (
        sno char(10) PRIMARY KEY,
        sname varchar(5),
        sage int(5),
        sex char(3)
     );
     
# 添加外键约束
CREATE TABLE score
     (
        sno char(10) PRIMARY KEY,
        cno char(10),
        cname varchar(10),
        ctype varchar(5),
        CONSTRAINT fk_temp FOREIGN KEY(sno) REFERENCES student(sno)
     );
# score表添加了外键约束，外键约束名为fk_temp，外键名为sno

# 添加唯一约束
CREATE TABLE student
  (
     sno char(10) PRIMARY KEY,
     sname varchar(5) UNIQUE,
     sage int(5),
     sex char(3)
  );

# 添加非空约束
  CREATE TABLE student
  (
     sno char(10) PRIMARY KEY,
     sname varchar(5) NOT NULL,
     sage int(5),
     sex char(3)
  );

# 使用默认约束
CREATE TABLE student
(
    sno char(10) PRIMARY KEY,
    sname varchar(5),
    sage int(5),
    sex char(3) DEFAULT "男"
)DEFAULT CHARSET=utf8;

# 4.设置表的属性值自动增加
CREATE TABLE student
(
    sno char(10) PRIMARY KEY AUTO_INCREMENT,
    sname varchar(5),
    sage int(5),
    sex char(3)
);
# (默认情况下，关键词AUTO_INCREMENT的初始值的增量均为1)


```



## 4. 数据库和表的基本操作



### 1. 修改表名

```sql
# 1.修改表名
ALTER TABLE 旧表名 RENAME [TO] 新表名;
	# 示例
	ALTER TABLE student RENAME people;

# 2.修改字段名和字段的数据类型
    # 2-1.修改字段名
    ALTER TABLE 表名 CHANGE 旧字段名 新字段名 新数据类型;
    # (数据类型必须跟在新字段名的后面，数据类型可改可不改，如果不需要修改字段的数据类型，可以把新字段的数据类型设置为和原来一样，但是，千万不要空着它！)
        # 示例
        ALTER TABLE student CHANGE sage Sage int(5);

    # 2-2.修改字段的数据类型
    ALTER TABLE 表名 MODIFY 字段名 新数据类型;
        # 示例
        ALTER TABLE student MODIFY sage varchar(5);

# 3.添加和删除字段
    # 3-1.添加字段(默认在表的最后一列添加字段)
    ALTER TABLE 表名 ADD 字段名 数据类型 [约束类型];
        # 示例
        ALTER TABLE student ADD smajor varchar(10) NOT NULL;

    # 3-2.添加字段(指定在表的第一列添加字段)
    ALTER TABLE 表名 ADD 字段名 数据类型 [约束类型] FIRST;
        # 示例
        ALTER TABLE student ADD smajor varchar(10) FIRST;

    # 3-3. 添加字段(指定在表的某一列添加字段)
    ALTER TABLE 表名 ADD 字段名 数据类型 [约束类型] ALTER 指定已存在的字段名;
        # 示例
        ALTER TABLE student ADD smajor varchar(10) AFTER sage;

    # 3-4.删除字段
    ALTER TABLE 表名 DROP 字段名;
        # 示例
        ALTER TABLE student DROP smajor;
        
# 4.修改字段的排列位置
    # 4-1.修改字段为表的第一字段
    ALTER TABLE 表名 MODIFY 字段名 数据类型 FIRST;
        # 示例
        ALTER TABLE student MODIFY sname varchar(5) FIRST;

    # 4-2.修改字段到表的某个字段之后
    ALTER TABLE 表名 MODIFY 字段名 数据类型 AFTER 指定字段名;
        # 示例
        ALTER TABLE student MODIFY sname varchar(5) AFTER sage;

# 5.删除表的外键约束
ALTER TABLE 表名 DROP FOREIGN KEY 外键约束名;
	# 示例
	ALTER TABLE score DROP FOREIGN KEY fk_temp;
	# (其中fk_temp为score表的外键约束名)

```



## 5. 增删查改

### 插入数据 `INSERT`

`INSERT INTO 表名(字段1, 2, 3) VALUES('值1', '2', '3')`

```sql
# 不带子查询的插入语句
INSERT INTO 表名 (字段名1,字段名2,......)
       VALUES(字段名1的值,字段名2的值,......),
             (字段名1的值,字段名2的值,......),
             ......
             (字段名1的值,字段名2的值,......);
# (如果插入的全部列的值，则INSERT INTO 表名后面的内容就可以省略；如果是部分列，则不能省略)
    
    # 举例：
    INSERT INTO student(sno,sname)
          VALUES("201805050201","张三"),
                ("201805050255","李四"),
                ("201805050230","王五");

# 带子查询的插入语句
      INSERT INTO 表名 (字段名1,字段名2,......)
      SELECT 字段名1,字段名2,......
      FROM 表名
      # 此处可以添加一些指定条件(WHERE,GROUP BY等等)

    # 示例
    INSERT INTO sc(sno,grade)
          SELECT sno,AVG(grade)
          FROM student
          GROUP BY sno;
    # (此时，我们把student表按照学号分组，并计算每个学生的平均成绩，之后再把学号和平均成绩插入新表sc)

```



### 删除数据 `DELETE`

 `DELETE FROM 表名 WHERE 删除条件`

```sql
# 删除表中的指定行
DELETE FROM 表名 WHERE 条件表达式;
	# 示例
	DELETE FROM student WHERE sage>=18;


# 删除表中的所有行
DELETE FROM 表名;
	# 示例
	DELETE FROM student;


# 带子查询的删除语句
DELETE FROM 表名
WHERE 字段名 IN
(
SELECT 字段名
FROM 表名
WHERE 条件表达式
);
	# 示例
	DELETE FROM sc
      WHERE sno IN
      (
       SELECT sno
       FROM student
       WHERE sdept="信工"
      );
# 此时，我们就删除了信工学院全体学生的选课记录


# DELETE 和 TRUNCATE
TRUNCATE TABLE 表名;
	# 示例
	TRUNCATE TABLE student;
# (DELETE：一条一条的删除表中的数据)
# (TRUNCATE：直接删除的是表，而不是表中的内容，但是删除结束后，还会重新创建一个表)

```



### 修改数据 `UPDATE`

`UPDATE 表名 SET 字段1 = '新值', 字段2 = '新值' WHERE 更新条件`

```sql
# 示例
UPDATE student SET sage=20;
# 此时，我们把student表的sage字段对应的所有值都更新为20
# 模板中更新的新值也可以为空，即：NULL
```



### 查询数据 `SELECT`  (单表查询)

`SELECT * FROM 表名 WHERE 查询条件 ORDER BY 排序条件 LIMIT 取出数据量`

```sql
# 1.查询表中所有字段
SELECT * FROM 表名;

# 2.查询表中的多个字段
SELECT 字段1, 字段2, 字段3 from 表名;

# 3.查询表中的某个字段
SELECT 字段名 FROM 表名;

# 4.条件查询
SELECT 字段 from 表名 where 条件;


# 5.起别名
    # 1. 给表起别名  
    SELECT 别名.字段1, 别名.字段2 from 表名 as 别名;  
    # 2. 给字段起别名
    SELECT 字段1 as 别名,  字段2 as 别名 from 表名;


# 6.范围查询
	# 关键字: IN, NOT IN ,BETWEEN…AND…
	# IN -> 查询某个范围内的数据
	# BETWEEN…AND… -> 条件1要小于等于条件2
SELECT * FROM 表名 WHERE 字段名 IN(条件,条件,条件);
SELECT * FROM 表名 WHERE 字段名 BETWEEN 条件1 AND 条件2;
SELECT * FROM 表名 WHERE 字段名 NOT IN(条件,条件,条件);
SELECT * FROM 表名 WHERE 字段名 NOT BETWEEN 条件1 AND 条件2;
	# 示例
	# 查询成绩在90到100之间的所有学生的学号和姓名
	# IN
	SELECT sno,sname FROM student
      WHERE grade IN (98,99,100);
    # BETWEEN AND
    SELECT sno,sname
      FROM student
      WHERE grade BETWEEN 90 AND 100;


# 7.模糊查询
	# 关键字: like , %代表多个任意字符, _代表一个任意字符
SELECT * FROM 表名 WHERE 字段名 LIKE 条件;
SELECT 字段名 FROM 表名 WHERE 字段名 LIKE '字符%';
SELECT 字段名 FROM 表名 WHERE 字段名 LIKE '字符_';
	# 示例
	# 1) %
	# 查询学号以20180505开头的学生学号和姓名
	SELECT sno,sname FROM student
      WHERE sno LIKE "20180505%";
   	# 查询学号中间包含0505的学生学号和姓名
   	SELECT sno,sname FROM student
      WHERE sno LIKE "%0505%";
    # 查询学号结尾为0201的学生学号和姓名
    SELECT sno,sname FROM student
      WHERE sno LIKE "%0201";
      
    # 2) _
    # 查询学生成绩以9结尾的学生学号和姓名
    SELECT sno,sname FROM student
      WHERE grade LIKE "_9";
    # 查询学号以02结尾的学生学号和姓名，假设学号是2018050502的格式，
    # 那么在02之前就需要用8个下划线通配符"_"
    SELECT sno,sname FROM student
      WHERE grade LIKE "________02";
    # 查询学生姓名中第二个字为"子"的学生学号和姓名
    SELECT sno,sname FROM student
       WHERE grade LIKE "_子%";


# 8.查询空值 空判断
SELECT 字段名 FROM 表名 WHERE 字段名 IS NULL;
SELECT 字段名 FROM 表名 WHERE 字段名 IS NOT NULL;
	# 示例
	# 查询student表中学生成绩为空的数据
	SELECT sno,sname FROM student WHERE grade IS NULL;

# 9.去重
SELECT DISTINCT 字段名 FROM 表名;
	# 示例
	# 对student表中的成绩字段进行去重处理
    SELECT DISTINCT grade FROM student;  

# 10.AND与 OR的多条件查询
# AND
SELECT 字段名 FROM 表名 WHERE 表达式1 AND 表达式2;
	# 提示
	可以同时添加多个过滤条件，增加条件的同时只需增加一个 AND 关键字。
	# 示例
	# 查询年龄为18，且性别为男的学生学号和姓名
	SELECT sno,sname FROM student WHERE sage=18 AND sex="男";

# OR
# 与AND相反，在WHERE声明中使用OR关键字表示只需满足两个条件中的其中一个条件即可返回结果
SELECT 字段名 FROM 表名 WHERE 表达式1 OR 表达式2;
	# 示例
	# 查询年龄为18或者性别为男的学生学号和姓名，只要满足其中一个就行
	SELECT sno,sname FROM student WHERE sage=18 OR sex="男";


# 11.排序
	# asc可以省略, 默认升序, 多个字段排序按顺序排序
    # 默认排序是排序数字和字母, 中国默认按照文字编码排序, 可使用convert(), 按开头字母排序
SELECT 字段名 FROM 表名 WHERE 条件表达式 (WHERE子句也可以不加) ORDER BY 字段名 [ASC[DESC]];
	# 示例
	# 我们对性别为男的学生进行，按年龄降序排序，最后将其学号和姓名输出
	SELECT sno,sname FROM student WHERE sex="男" ORDER BY sage DESC;


# 12.分组查询
	# 1) 分组查询的关键字是Group By，查询的是每个分组中 首次出现的一条记录
	# 2) 一般情况下，GROUP BY都和聚合函数一起使用
SELECT 字段名 FROM 表名 GROUP BY 字段名;
	# 示例
	# 在GROUP BY子句之后还可以使用 HAVING 来对分组结果进行筛选
	SELECT * FROM student GROUP BY sage;


# 13.LIMIT 限制查询结果的数量
SELECT 字段名 FROM 表名 LIMIT [OFFSET,] 记录数;
	# 1) 第一个参数：OFFSET，可选参数，表示偏移量，如果不指定默认值为0,
	# 表示从查询结果的第一条记录开始，若偏移量为1，则从查询结果中的第二条记录开始，以此类推
    # 2) 第二个参数，记录数，表示返回查询结果的条数
    # 示例
    # 从student表中第2条记录开始，像后检索4条数据，并按年龄升序排序
```





### 聚合函数

常用聚合函数: `COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`

- `COUNT()`: 返回表中的行数。

```sql
SELECT COUNT(*/字段名) FROM 表名;
	WHERE 条件表达式; # 可加,可不加
	# COUNT()函数是用来统计记录的总条数
	# 示例
	# 统计student表中一共有多少条记录
	SELECT COUNT(sno)
      FROM student;

```



- `max()`: 返回一组值中的最大值。

```sql
SELECT MAX(字段名) FROM 表名;
      WHERE 条件表达式; # 可加，可不加：
	# MAX()函数是求某列的最大数值
	# 示例 查询score表中，数学科目成绩的最高分
	SELECT MAX(grade) FROM score
      WHERE course="数学";
```



- `min()`: 返回一组值中的最小值

```sql
SELECT MIN(字段名) FROM 表名;
      WHERE 条件表达式; # 可加，可不加
	# MIN()函数是求某列的最小数值
	# 示例
	# 查询score表中，数学科目成绩的最低分
 	SELECT MIN(grade) FROM score
      WHERE course="数学";

```



- `sum()`: SUM()函数返回一组值的总和，SUM()函数忽略`NULL`值。如果找不到匹配行，则SUM()函数返回`NULL`值。

```sql
SELECT SUM(字段名) FROM 表名;
      WHERE 条件表达式; # 可加，可不加：
      # SUM()函数是对数据表的某列进行求和操作
      # 示例
      # 计算score表中语文成绩的总和
      SELECT SUM(grade) FROM score
      WHERE course="语文";
```



- `avg()`:  计算一组值的平均值。 它计算过程中是忽略`NULL`值的。

```sql
SELECT AVG(字段名)
	FROM 表名;
    WHERE 条件表达式; # 可加，可不加
      # AVG()函数是对数据表的某列进行求平均值操作
      # 示例 
      # 计算score表中，数学科目的平均成绩
      SELECT AVG(grade) FROM score
          WHERE course="数学";
```

注意

- `count`函数内可以写`*`, 也可以写某一列, 如果有null, 不会统计在内
- 聚合函数不能用在where子句后面



### 连接查询(多表查询)

#### 内连接查询

**仅将两个表**中满足连接条件的行组合起来作为结果集，称为内连接；

```sql
# 关键字： [inner] join ...  on。
# 模板
SELECT 字段名1,字段名2,...... FROM 表1
      JOIN 表2 ON 表1.字段=表2.字段;
# 从表1中取出每一条记录，去表2中与所有的记录进行匹配，匹配必须是某个条件在表1中与表2中相同，
# 相同一般理解为两个表的公共字段，最终才会保留结果，否则不保留。inner 关键字可省略不写；on 表示连接条件。
	# 示例
	# student表和score表做内连接运算，选取两个表的公共字段sno进行连接
	# 在输出的时候，如果输出的是公共字段sno，则需要在前面加上表名前缀：student.sno
	SELECT student.sno,sname,smajor,cno FROM student
      JOIN score ON student.sno=score.sno;
    
# 另一种写法
SELECT 字段名1,字段名2,......
      FROM 表1,表2 WHERE 表1.字段=表2.字段;
      # 示例
      # 
      SELECT student.sno,sname,smajor,cno
      FROM student,score
      WHERE student.sno=score.sno;
```



#### 外连接查询(左/右)

外连接查询分为**左外连接查询**和**右外连接查询**；

```sql
# 关键字： 
LEFT/RIGHT [OUTER] JOIN ... ON

# 左外连接
SELECT 字段名1,字段名2,...... FROM 表1
      LEFT JOIN 表2 
      ON 表1.字段=表2.字段;  # 不局限于两个表，可以有更多的表

# 右外链接
SELECT 字段名1,字段名2,...... FROM 表1
      RIGHT JOIN 表2 
      ON 表1.字段=表2.字段;  # 不局限于两个表，可以有更多的表
# 左外连接：在内连接的基础上，还包含表1中所有不符合条件的数据行，并在其中的表2列填写 NULL
# 右外连接：在内连接的基础上，还包含表2中所有不符合条件的数据行，并在其中的表1列填写 NULL

```



#### 复合条件连接查询

**复合条件连接查询**，就是在连接查询的过程中，通过**添加过滤条件来限制查询结果**，使查询结果更加精确

模板与内连接类似，只是在内连接的基础上，增加了一些查询条件！！

```sql
# 示例
# 对两个表做内连接运算之后，再进行对年龄大于等于18的筛选和检索
SELECT student.sno,sname,smajor,cno FROM student,score
       WHERE student.sno=score.sno AND sage>=18;

# 对两个表做内连接运算之后，再对结果按年龄降序排序输出
SELECT student.sno,sname,smajor,cno FROM student,score
       WHERE student.sno=score.sno
       ORDER BY sage DESC;
```



#### 子查询

```sql
# 1. 带比较运算符的子查询
SELECT * FROM 表1
      WHERE 字段名1=
      (
        SELECT 字段名2 FROM 表2
        WHERE 条件表达式 # 可加，可不加：
      );
# 比较运算符：大于：>，大于等于：>=，小于：<，小于等于：<=，等于：=，不等于：!=或者<>
	# 示例
	# 查询大于所有平均年龄的员工姓名与年龄
    SELECT name,age FROM tb_emp
          WHERE age>
          (
            SELECT AVG(age)
            FROM tb_emp
          );

# 2. 带（NOT）IN的子查询
# 与上面的带比较运算符类似，只是把比较运算符换成了"IN"(相应的也有NOT IN)
# 这里我们使用了三个表，来查询“张三”老师所讲授的课程名和课程类型
SELECT cs_name,cs_type # 课程名 | 课程类型 
      FROM course 
      WHERE cs_id IN
      (
        SELECT cs_id
        FROM teaching
        WHERE tea_id IN
        (
          SELECT tea_id
          FROM teacher
          WHERE tea_name="张三"
        )
       );

# 3. 带ANY或ALL的子查询
# ALL关键字
	# ALL必须接在一个比较运算符的后面，表示与子查询返回的所有值比较都为TRUE，则返回TRUE
# 示例
# 查询薪资表中比Java最高工资高的所有员工职位名称和薪资，比所有的都高→大于最大值
SELECT position,salary FROM tb_salary
      WHERE salary>ALL
      (
        SELECT salary
        FROM tb_salary
        WHERE position='Java'
      );

# ANY和SOME关键字
    # ANY与比较操作符联合使用，表示与子查询返回的任何值比较为TRUE，则返回TRUE。
    # SOME是ANY的别名，一般用的比较少
# 示例
# 查询薪资表中比Java最低工资高的所有员工职位名称和薪资，比任何的都低→小于最小值
SELECT position,salary FROM tb_salary
      WHERE salary>ANY
      (
        SELECT salary
        FROM tb_salary
        WHERE position='Java'
      );

# 带（NOT）EXISTS谓词的子查询
# 带有EXISTS谓词的子查询不返回任何数据，只产生逻辑真值"true"，或逻辑假值"false"。
# 由EXISTS引出的子查询，其目标列表达式通常都用*。
# 若内层查询结果非空，则外层的WHERE子句返回真值；若内层查询结果为空，则外层的WHERE子句返回假值。
# NOT EXISTS与其相反
SELECT 字段名1,字段名2,...... FROM 表名
      WHERE EXISTS
      (
           SELECT *
           FROM 表名
           WHERE 条件表达式......
      );
	# 示例
	# 查询选修课程号为"05203314"的学生的姓名及专业
    SELECT stu_name,stu_major # 学生姓名 | 专业
          FROM student
          WHERE EXISTS
          (
            SELECT * FROM score
            WHERE student.stu_id=score.stu_id
              AND cs_id="05203314"
          );

```



## 优先级

```sql
# SQL语句的编写顺序
SELECT ...
FROM ...
WHERE ... 
GROUP BY ... HAVING ...
ORDER BY ...

# SQL语句的执行顺序
FROM ...
WHERE  ...
GROUP BY ... HAVING ...
SELECT ...
ORDER BY ...
```



### SQL语句中四大功能、九大动词

| SQL语句功能 | 对应的动词             |
| ----------- | ---------------------- |
| 数据查询    | SELECT                 |
| 数据定义    | CREATE、ALTER、DROP    |
| 数据操纵    | INSERT、UPDATE、DELETE |
| 数据控制    | GRANT、REVOKE          |



## 参考

[MySQL多表查询小总结_G.E.N.的博客-CSDN博客_多表查询实验总结与体会](https://blog.csdn.net/qq_63708623/article/details/123263086)

[MySQL初级篇——常用SQL语句（大总结）_宋子浩的博客-CSDN博客](https://blog.csdn.net/weixin_43823808/article/details/105848797)

