---
title: Spring 事务
tags:
  - Spring
categories:
  - AfterEnd
date: 2025-02-28
summary: Spring 事务的工作原理，以及失效场景
description: Spring 事务的工作原理，以及失效场景
---


# 1. Spring 事务的工作原理

Spring 使用两种代理机制来管理事务：

- JDK 动态代理：针对实现了接口的类，Spring 会创建一个实现了相同接口的代理类。事务逻辑通过代理类在方法调用时插入。
- CGLIB 代理：针对没有实现接口的类，Spring 会使用 CGLIB 生成子类代理，拦截方法调用并插入事务逻辑。

不论哪种代理方式，Spring 都是在代理类中对事务进行管理。如果调用来自外部的类，代理对象会拦截该调用并正确地管理事务逻辑。


# 2. Spring 事务失效场景

## 2.1. 同类中的方法调用导致事务失效

不生效原因：**这是因为内部方法调用不会通过 Spring 生成的代理类进行调用，而是直接在当前对象中执行，因此 Spring 无法介入处理事务。**

- 内部调用：当类内部的方法调用另一个带有 `@Transactional` 注解的方法时，这个调用不会通过 Spring 的代理对象进行，而是直接通过 `this` 引用，因此 Spring 无法拦截并应用事务。
- 代理对象失效：Spring AOP 代理机制只能拦截通过代理对象进行的方法调用，而不能拦截类内部的直接方法调用。

```java
@Service
public class TransactionService {

    @Transactional
    public void publicMethod() {
        // 同个类方法调用 internalMethod事务注解不生效
        internalMethod();
    }

  

    @Transactional
    public void internalMethod() {
        // 事务在这里不会生效，因为它是通过内部调用触发的
    }

}

// 另一个类
@Service
public class AnotherClassService {

	public void callingTransaction() {
		TransactionService transactionService = new TransactionService();

		// 另一个类调用 publicMethod 事务注解生效
		transactionService.publicMethod();
	}
}
```

### 2.1.1. 解决同类中事务失效的问题

#### 方法 1：通过Spirng容器重新获取代理对象

```java
@Autowired
private ApplicationContext context;

	@Transactional 
	public void publicMethod() {
		// 从 Spring 容器中获取代理对象 
		TransactionService proxy = context.getBean(TransactionService.class);
		proxy.internalMethod(); 
		// 通过代理对象调用方法，事务生效 
	}
```

#### 方法 2：将事务性方法抽离到另一个类

....

#### 方法 3：使用 事务模版 （推荐）

1. 删除事务注解 @Transactional
2. 使用事务模版将需要事务管理的部分包裹起来

```java

@Service
public class TransactionService {

	@Autowired
	private TransactionTemplate transactionTemplate;

    public void publicMethod() {
		transactionTemplate.execute(status -> {
		    try {
			    // 需要事务管理的代码 ...
		        internalMethod();
		    } catch (Exception e) {  
		        log.info("syncPsSimple error : ", e);  
		        status.setRollbackOnly();  
		    }
		    return null;  
		});
    }

  

    
    public void internalMethod() {
        // 通过 publicMethod() 调用后，事务具有传递性，所以事务生效

    }

}
```
