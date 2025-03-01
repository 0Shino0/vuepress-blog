---
# 这是文章的标题
title: 精读《持续集成 vs 持续交付 vs 持续部署》
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-11-30
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - 前端工程化
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

>转自https://github.com/ascoders/weekly/tree/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF

# 一、摘要

相信大家以前应该接触过持续集成（Continuous integration）持续交付（continuous delivery）持续发布（continuous deployment）的概念，下面我们来说说三者的差异以及团队如何入手 CI/CD。

作者：猫神。

# 二、差异

### 2.1 CI 持续集成

开发者尽量时时刻刻合并开发分支至主干分支。避免直到发布日才开始合并，掉入集成地狱。无论何时新分支集成至项目，持续集成可以自动化测试持续验证应用是否正常。

### 2.2 CD 持续交付

持续交付是持续集成的扩展，可以保证稳定的发布产品新特性。这意味着基于自动化测试，你可以也可以一键自动化发布。理论上，持续交付可以决定是按天，按周，按双周发布产品。如果确实希望能够享受持续交付的好处，那么应该尽快发布到新产品中。一旦出现问题时能尽早排除。

### 2.3 CD 持续部署

持续部署是持续交付的下一步。通过这一步，每个新特性都自动的部署到产品中。但是如果出现未通过的测试用例将会终止自动部署。持续部署可以加速用户反馈新特性，避免发布日带来的压力。开发可以着力于开发系统，开发结束后几分钟就可以触达到用户。

# 三、协作

CI/CD 具体是个什么样的流程呢，如下图所示，差异仅在于是否自动部署。

<img src="https://img.alicdn.com/tfs/TB1sNtaTrPpK1RjSZFFXXa5PpXa-884-426.png" />

现在开发都讲究投入产出比，那么 CI/CD 具体需要做些什么呢？

### Continuous Intergretion 持续集成

投入：

- 需要为每个新特性编写测试用例

- 需要搭建持续集成服务器，监控主干仓库，并自动运行测试用例

- 开发需要尽量频繁的合并分支，至少一天一次

产出：

- 更少的 bug，因为自动化测试可以回归测试产品
- 编译部署产品更简化，因为集成的问题都尽早的解决了
- 开发者可以尽量减少上下文切换，因为构建的时候就暴露问题，尽早解决了
- 测试成本降低，因为 CI 服务器可以一秒运行几百个测试用例
- 测试团队花更少的时间测试，可以重点关注测试上的改进。

### Continuous delivery 持续交付

投入：

- 需要有持续集成的基础，测试用例需要覆盖足够的代码
- 部署需要自动化，用户只需要手动触发，剩余的部署应该自动化
- 团队需要增加新特性标志，避免未完成的新特性进入待发布的产品

产出：

- 部署软件变得非常简单。团队不需要花费 n 天准备发布。
- 可以提高发布频率，加速新特性触达用户进程。
- 小的更改，对决策的压力要小得多，可以更快地迭代。

### Continuous deployment 持续部署

投入：

- 测试必须要做到足够。测试的质量将决定发布的质量。
- 文档建设需要和产品部署保持同步。
- 新特性的发布需要协调其他部门，包括售后支持&市场&推广等。

产出：

- 快速的发布节奏，因为每个新特性一旦完成都会自动的发布给用户。
- 发布风险降低，修复问题更容易，因为每次变更都是小步迭代发布。
- 用户可以看到持续性的优化和质量提升，而不是非要等到按月，按季度，甚至按年

如果开发的是一个新项目，暂时还没有任何用户，那么每次提交代码后发布将会特别简单，可以随时随地发布。一旦产品开始开发后，就需要提高测试文化，并确保在构建应用程序时增加代码覆盖率。当您准备好面向用户发布时，您将有一个非常好的连续部署过程，在该过程中，所有新的更改都将在自动发布到生产环境之前进行测试。

如果正在开发的是一个老系统，就需要放慢节奏，开始打造持续集成&持续交付。首先可以完成一些简单可自动化执行的单元测试，不需要考虑复杂的端到端的测试。另外，应该尽快尝试自动化部署，搭建可以自动化部署的临时环境。因为自动化部署，可以让开发者去优化测试用例，而不是停下来联调发布。
一旦开始按日发布产品，我们可以考虑持续部署，但一定要保证团队已经准备好这种方式，文档 & 售后支持 & 市场。这些步骤都需要加入到新产品发布节奏中，因为和用户直接打交道的是他们。

# 四、如何开始持续集成

## 4.1 了解测试类型

为了获得 CI 的所有好处，每次代码变更后，我们需要自动运行测试用例。我们需要在每个分支运行测试用例，而不是仅仅在主干分支。这样可以最快速的找到问题，最小化问题影响面。
在初始阶段并不需要实现所有的测试类型。一开始可以以单元测试入手，随着时间扩展覆盖面。

- 单元测试：范围非常小，验证每个独立方法级别的操作。
- 集成测试：保证模块间运行正常，包括多个模块、多个服务。
- 验收测试：与集成测试类似，但是仅关注业务 case，而不是模块内部本身。
- UI 测试：从用户的角度保证呈现正确运行。

并不是所有的测试都是对等的，实际运行中可以做些取舍。

<img src="https://img.alicdn.com/tfs/TB18278TmrqK1RjSZK9XXXyypXa-346-269.png" />

单元测试实现起来既快成本又低，因为它们主要是对小代码块进行检查。另一方面，UI 测试实施起来很复杂，运行起来很慢，因为它们通常需要启动一个完整的环境以及多个服务来模拟浏览器或移动行为。因此，实际情况可能希望限制复杂的 UI 测试的数量，并依赖基础上良好的单元测试来快速构建，并尽快获得开发人员的反馈。

### 4.2 自动运行测试

要采用持续集成，您需要对推回到主分支的每个变更运行测试。要做到这一点，您需要有一个服务来监视您的存储库，并听取对代码库的新推送。您可以从企业预置型解决方案和云端解决方案中进行选择。您需要考虑以下因素来选择服务器：

- 代码托管在哪里？CI 服务可以访问您的代码库吗？您对代码的生存位置有特殊的限制吗？
- 应用程序需要哪些操作系统和资源？应用程序环境是否受支持？能安装正确的依赖项来构建和测试软件吗？
- 测试需要多少资源？一些云应用程序可能对您可以使用的资源有限制。如果软件消耗大量资源，可能希望将 CI 服务器宿主在防火墙后面。
- 团队中有多少开发人员？当团队实践 CI 时，每天都会将许多更改推回到主存储库中。对于开发人员来说，要获得快速的反馈，您需要减少构建的队列时间，并且您需要使用能够提供正确并发性的服务或服务器。
  在过去，通常需要安装一个独立的 CI 服务器，如 Bamboo 或 Jenkins，但现在您可以在云端找到更简单的解决方案。例如，如果您的代码托管在 BitBucket 云上，那么您可以使用存储库中的 Pipelines 功能在每次推送时运行测试，而无需配置单独的服务器或构建代理，也无需限制并发性。
- 使用代码覆盖率查找未测试的代码。一旦您采用了自动化测试，最好将它与一个测试覆盖工具结合起来，帮助了解测试套件覆盖了多少代码库。代码覆盖率定在 80%以上是很好的，但要注意不要将高覆盖率与良好的测试套件混淆。代码覆盖工具将帮助您找到未经测试的代码，但在一天结束的时候，测试的质量会产生影响。如果刚开始，不要急于获得代码库的 100%覆盖率，而是使用测试覆盖率工具来找出应用程序的关键部分，这些部分还没有测试并从那里开始。
- 重构是一个添加测试的机会。如果您将要对应用程序进行重大更改，那么应该首先围绕可能受到影响的特性编写验收测试。这将为您提供一个安全网，以确保在重构代码或添加新功能后，原始行为不会受到影响。

# 五、接受 CI 文化

自动化测试是 CI 的关键，但同时也需要团队成员接受 CI 文化，并不是心血来潮晒两天鱼，并且需要保证编译畅通无阻。QA 可以帮助团队建设测试文化。他们不再需要手动测试应用程序的琐碎功能，现在他们可以投入更多的时间来提供支持开发人员的工具，并帮助他们采用正确的测试策略。一旦开始采用持续集成，QA 工程师将能够专注于使用更好的工具和数据集促进测试，并帮助开发人员提高编写更好代码的能力。

- 尽早集成。如果很长时间不合并代码，代码冲突的风险就越高，代码冲突的范围就越广。如果发现某些分支会影响已经存在的分支，需要增加发布关闭标签，避免发布时两个分支冲突。
- 保证编译时时刻刻畅通。一旦发现任何编译问题，立刻修复，否则可能会带来更多的错误。测试套件需要尽快反馈测试结果，或者优先返回短时间测试（单元测试）的结果，否则开发者可能就切换回开发了。一旦编译出错，需要通知给开发者，或者更进一步给出一个 dashboard，每个人都可以在这里查看编译结果。
- 把测试用例纳入流程的一部分。确保每个分支都有自动化测试用例。似乎编写测试用例拖慢了项目节奏，但是它可以减少回归时间，减少每次迭代带来的 bug。而且每次测试通过后，将会非常有信息合并到主干分支，因为新增的内容不影响以前的功能。
- 修 bug 的时候编写测试用例。把 bug 的每个场景都编写成测试用例，避免再次出现。

# 六、集成测试 5 个步骤

1. 从最严格的代码部分入手测试
2. 搭建一个自动构建的服务自动运行测试用例，在每次提交代码后。
3. 确保团队成员每天合并变更
4. 代码出现问题及时修复
5. 为每个新实现的操作编写测试用例。
   可能看着很简单，但是要求团队能够真正落地。一开始你需要放慢发布的脚步，需要和 pd、用户沟通确保不上线没有测试用例的新功能。我们的建议是从小处入手，通过简单的测试来适应新的例程，然后再着手实现更复杂更难管理的测试套件。

# 七、说说笔者的团队

以上文章主要是说明团队实现 CI/CD 的取舍和可行性步骤。下面来说说希望 CI/CD 给笔者团队带来什么样的变化。目前笔者团队已经实现前端项目发布编译工程化，采用的是基于 webpack 的自建工具云构建模式。但现在面临的问题是 1. 交互的系统比较多，交互系统提供的接入源变更后，需要人工通知其他系统手动触发编译，而且每次手动编译都需要在本地切换到指定分支，然后手动触发云构建，2. 多人协作，分支拆分较细，需要手动合并分支，触发编译。整个流程冗长，而且中间存在人力沟通成本，容易产生沟通误差。所以首先希望解决的是 CI 自动化，当依赖变更后或者分支合并后，自动集成，自动编译。当然生产环境暂时还不敢瞎搞，但大部分重复编译的工作量主要集中在预发环境，所以手动部署生产环境的成本还是可以接受的。CI 自动化之前，需要提供系统之间交互的单元测试用例，每次 CI 后自动运行单元测试用例，最好能打通 QA 的测试用例，进行回归测试。流程对比如下：

<img src="https://img.alicdn.com/tfs/TB1jIw.TgDqK1RjSZSyXXaxEVXa-1950-662.png"/>
可以看出引入CI后，我们的成本是需要搭建CI服务器，新增单元测试、打通回归测试案例，但前者可以加快系统编译效率，后者可以进一步的提升代码质量，减少回归测试时间，这些成本都是可以接受的。市面上已有很多开源持续集成工具，例如我们熟悉的Jenkins，还有TeamCity、Travis CI、GO CD、Bamboo、Gitlab CI、CircleCI……等等等等。目前还在继续调研中，这片文章应该会有第二篇，说说后续的实践和CD。

> 讨论地址是：[精读《持续集成 vs 持续交付 vs 持续部署》 · Issue #147 · dt-fe/weekly](https://github.com/dt-fe/weekly/issues/147)

**如果你想参与讨论，请 [点击这里](https://github.com/dt-fe/weekly)，每周都有新的主题，周末或周一发布。前端精读 - 帮你筛选靠谱的内容。**

> 关注 **前端精读微信公众号**

<img width=200 src="https://img.alicdn.com/tfs/TB165W0MCzqK1RjSZFLXXcn2XXa-258-258.jpg">

**special Sponsors**

- [DevOps 全流程平台](https://e.coding.net/?utm_source=weekly)

> 版权声明：自由转载-非商用-非衍生-保持署名（[创意共享 3.0 许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）