(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{635:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202212031729209.svg+xml",alt:"commit贪吃蛇"}})]),s._v(" "),t("h2",{attrs:{id:"什么是workflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是workflows"}},[s._v("#")]),s._v(" 什么是Workflows")]),s._v(" "),t("h2",{attrs:{id:"github-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-action"}},[s._v("#")]),s._v(" Github Action")]),s._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("GitHub Actions 是一种持续集成和持续交付 （CI/CD） 平台，可用于自动执行生成、测试和部署管道。您可以创建工作流来构建和测试对存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。")]),s._v(" "),t("p",[s._v("GitHub Actions 不仅仅是 DevOps，还允许您在仓库中发生其他事件时运行工作流。例如，您可以运行工作流，以便在有人在您的仓库中创建新问题时自动添加相应的标签。")]),s._v(" "),t("p",[s._v("GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。")]),s._v(" "),t("p",[s._v("以上是官网做出的介绍.")]),s._v(" "),t("h3",{attrs:{id:"基本组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本组件"}},[s._v("#")]),s._v(" 基本组件")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("workflow")]),s._v(" （工作流程）：持续集成一次运行的过程，就是一个 workflow。")]),s._v(" "),t("li",[t("strong",[s._v("job")]),s._v(" （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。")]),s._v(" "),t("li",[t("strong",[s._v("step")]),s._v("（步骤）：每个 job 由多个 step 构成，一步步完成。")]),s._v(" "),t("li",[t("strong",[s._v("action")]),s._v(" （动作）：每个 step 可以依次执行一个或多个命令（action）。")])]),s._v(" "),t("h3",{attrs:{id:"workflow文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow文件"}},[s._v("#")]),s._v(" workflow文件")]),s._v(" "),t("p",[s._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的"),t("code",[s._v(".github/workflows")]),s._v("目录。")]),s._v(" "),t("p",[s._v("workflow 文件采用 "),t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("YAML 格式"),t("OutboundLink")],1),s._v("，文件名可以任意取，但是后缀名统一为"),t("code",[s._v(".yml")]),s._v("，比如"),t("code",[s._v("foo.yml")]),s._v("。一个库可以有多个 workflow 文件。GitHub 只要发现"),t("code",[s._v(".github/workflows")]),s._v("目录里面有"),t("code",[s._v(".yml")]),s._v("文件，就会自动运行该文件。")]),s._v(" "),t("p",[s._v("workflow 文件的配置字段非常多，详见"),t("a",{attrs:{href:"https://help.github.com/en/articles/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。下面是一些基本字段。")]),s._v(" "),t("p",[t("strong",[s._v("（1）"),t("code",[s._v("name")])])]),s._v(" "),t("p",[t("code",[s._v("name")]),s._v("字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("name: GitHub Actions Demo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[t("strong",[s._v("（2）"),t("code",[s._v("on")])])]),s._v(" "),t("p",[t("code",[s._v("on")]),s._v("字段指定触发 workflow 的条件，通常是某些事件。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("on: push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码指定，"),t("code",[s._v("push")]),s._v("事件触发 workflow。")]),s._v(" "),t("p",[t("code",[s._v("on")]),s._v("字段也可以是事件的数组。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("on: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push, pull_request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码指定，"),t("code",[s._v("push")]),s._v("事件或"),t("code",[s._v("pull_request")]),s._v("事件都可以触发 workflow。")]),s._v(" "),t("p",[s._v("完整的事件列表，请查看"),t("a",{attrs:{href:"https://help.github.com/en/articles/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。")]),s._v(" "),t("p",[t("strong",[s._v("（3）"),t("code",[s._v("on.<push|pull_request>.<tags|branches>")])])]),s._v(" "),t("p",[s._v("指定触发事件时，可以限定分支或标签。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("on:\n  push:\n    branches:    \n      - master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码指定，只有"),t("code",[s._v("master")]),s._v("分支发生"),t("code",[s._v("push")]),s._v("事件时，才会触发 workflow。")]),s._v(" "),t("p",[t("strong",[s._v("（4）"),t("code",[s._v("jobs.<job_id>.name")])])]),s._v(" "),t("p",[s._v("workflow 文件的主体是"),t("code",[s._v("jobs")]),s._v("字段，表示要执行的一项或多项任务。")]),s._v(" "),t("p",[t("code",[s._v("jobs")]),s._v("字段里面，需要写出每一项任务的"),t("code",[s._v("job_id")]),s._v("，具体名称自定义。"),t("code",[s._v("job_id")]),s._v("里面的"),t("code",[s._v("name")]),s._v("字段是任务的说明。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("my_first_job")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" My first job\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("my_second_job")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" My second job\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码的"),t("code",[s._v("jobs")]),s._v("字段包含两项任务，"),t("code",[s._v("job_id")]),s._v("分别是"),t("code",[s._v("my_first_job")]),s._v("和"),t("code",[s._v("my_second_job")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("（5）"),t("code",[s._v("jobs.<job_id>.needs")])])]),s._v(" "),t("p",[t("code",[s._v("needs")]),s._v("字段指定当前任务的依赖关系，即运行顺序。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("job1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("job2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("needs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" job1\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("job3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("needs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("job1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" job2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码中，"),t("code",[s._v("job1")]),s._v("必须先于"),t("code",[s._v("job2")]),s._v("完成，而"),t("code",[s._v("job3")]),s._v("等待"),t("code",[s._v("job1")]),s._v("和"),t("code",[s._v("job2")]),s._v("的完成才能运行。因此，这个 workflow 的运行顺序依次为："),t("code",[s._v("job1")]),s._v("、"),t("code",[s._v("job2")]),s._v("、"),t("code",[s._v("job3")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("（6）"),t("code",[s._v("jobs.<job_id>.runs-on")])])]),s._v(" "),t("p",[t("code",[s._v("runs-on")]),s._v("字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("ubuntu-latest")]),s._v("，"),t("code",[s._v("ubuntu-18.04")]),s._v("或"),t("code",[s._v("ubuntu-16.04")])]),s._v(" "),t("li",[t("code",[s._v("windows-latest")]),s._v("，"),t("code",[s._v("windows-2019")]),s._v("或"),t("code",[s._v("windows-2016")])]),s._v(" "),t("li",[t("code",[s._v("macOS-latest")]),s._v("或"),t("code",[s._v("macOS-10.14")])])])]),s._v(" "),t("p",[s._v("下面代码指定虚拟机环境为"),t("code",[s._v("ubuntu-18.04")]),s._v("。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("runs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[t("strong",[s._v("（7）"),t("code",[s._v("jobs.<job_id>.steps")])])]),s._v(" "),t("p",[t("code",[s._v("steps")]),s._v("字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[s._v("jobs.<job_id>.steps.name")]),s._v("：步骤名称。")]),s._v(" "),t("li",[t("code",[s._v("jobs.<job_id>.steps.run")]),s._v("：该步骤运行的命令或者 action。")]),s._v(" "),t("li",[t("code",[s._v("jobs.<job_id>.steps.env")]),s._v("：该步骤所需的环境变量。")])])]),s._v(" "),t("p",[s._v("下面是一个完整的 workflow 文件的范例。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Greeting from Mona\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" push\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("job"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" My Job\n    runs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Print a greeting\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_VAR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Hi there"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" My name is\n        "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FIRST_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Mona\n        "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIDDLE_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" The\n        "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LAST_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Octocat\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        echo $"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_VAR")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FIRST_NAME")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIDDLE_NAME")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LAST_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])]),s._v(" "),t("p",[s._v("上面代码中，"),t("code",[s._v("steps")]),s._v("字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。")]),s._v(" "),t("h3",{attrs:{id:"github-action-的使用限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-action-的使用限制"}},[s._v("#")]),s._v(" Github Action 的使用限制")]),s._v(" "),t("ul",[t("li",[s._v("每个 Workflow 中的 job 最多可以执行 6 个小时")]),s._v(" "),t("li",[s._v("每个 Workflow 最多可以执行 72 小时")]),s._v(" "),t("li",[s._v("每个 Workflow 中的 job 最多可以排队 24 小时")]),s._v(" "),t("li",[s._v("在一个存储库的所有 Action 中，一个小时最多可以执行 1000 个 API 请求")]),s._v(" "),t("li",[s._v("并发工作数：Linux：20，Mac：5（专业版可以最多提高到 180 / 50）")])]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("为你的readme添加 ， 从github用户贡献图生成一个蛇游戏")]),s._v(" "),t("p",[s._v("作者："),t("a",{attrs:{href:"https://github.com/Platane/snk",target:"_blank",rel:"noopener noreferrer"}},[s._v("Platane/snk: 🟩⬜ Generates a snake game from a github user contributions graph and output a screen capture as animated svg or gif"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("效果图如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202212031729209.svg+xml",alt:"贪吃蛇"}})]),s._v(" "),t("h3",{attrs:{id:"_1-创建一个特殊的仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个特殊的仓库"}},[s._v("#")]),s._v(" 1.创建一个特殊的仓库")]),s._v(" "),t("p",[s._v("如果你没有相关知识，我推荐你去看")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/454597068",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github 首页美化教程（一）：打造个性化的GitHub首页 - 知乎 (zhihu.com)"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_2-在仓库中添加文件夹workflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-在仓库中添加文件夹workflows"}},[s._v("#")]),s._v(" 2.在仓库中添加文件夹workflows")]),s._v(" "),t("p",[t("code",[s._v("./github/workflows")]),s._v("用于存放工作流文件"),t("code",[s._v(".yml")])]),s._v(" "),t("h3",{attrs:{id:"_3-创建-snake-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-snake-yml"}},[s._v("#")]),s._v(" 3.创建 "),t("code",[s._v("snake.yml")])]),s._v(" "),t("p",[s._v("添加如下代码")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitHub Action for generating a contribution graph with a snake eating your contributions.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Generate Snake\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("schedule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cron")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0 0 * * *"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2.3.4\n      \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Generate Snake\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Platane/snk@master\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" snake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gif\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_user_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" github.repository_owner "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gif_out_path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./contribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("snake/github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("contribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("snake.gif\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("svg_out_path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./contribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("snake/github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("contribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("snake.svg\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Push to GitHub\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" EndBug/add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("and"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("commit@v7.2.1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" main "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的当前分支")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':rocket: Update'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("保存即可")]),s._v(" "),t("h2",{attrs:{id:"踩的一些坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩的一些坑"}},[s._v("#")]),s._v(" 踩的一些坑")]),s._v(" "),t("p",[s._v("刚开始部署时候每次到"),t("code",[s._v("Push 阶段都会报个错")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  /usr/bin/git push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v(" ***github.com/0Shino0/0Shino0.git output\n  remote: Permission to 0Shino0/0Shino0.git denied to github-actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".\n  fatal: unable to access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/0Shino0/0Shino0.git/'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" The requested URL returned error: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v("\n  Error: The process "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/bin/git'")]),s._v(" failed with "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("干了两三小时，明明没什么问题，就是不让"),t("code",[s._v("Push")]),s._v("，找了些相关"),t("code",[s._v("Issues")]),s._v("。终于发现了原来是我没给"),t("code",[s._v("workflows")]),s._v("权限所有一直导致拒绝"),t("code",[s._v("Push")])]),s._v(" "),t("p",[t("code",[s._v("Issues")]),s._v("链接 "),t("a",{attrs:{href:"https://github.com/ad-m/github-push-action/issues/96",target:"_blank",rel:"noopener noreferrer"}},[s._v("remote: Permission to git denied to github-actions[bot]. #96"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("选则如图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202212031454925.png",alt:"workflows"}})]),s._v(" "),t("p",[s._v("打开之后就正常了")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/164744104",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Action 精华指南 - 知乎 (zhihu.com)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.github.com/cn/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions文档 - GitHub Docs"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Platane/snk",target:"_blank",rel:"noopener noreferrer"}},[s._v("Platane/snk: 🟩⬜ Generates a snake game from a github user contributions graph and output a screen capture as animated svg or gif"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);