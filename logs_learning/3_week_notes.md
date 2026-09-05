# 项目搭建

> 该项目用于我自己的探索学习搭建，即是：方法是不再依赖于传统的视频/教科书跟随学习，而是自己探索摸索着学习

## W1-2
### 前端
#### 基础知识：HTML 超文本标记语言 HyperText Markup Language
- 一种用于创建网页的标准标记语言
- 完整的 HTML 文件包括
    - 声明为 HTML5 文档 -> <!DOCTYPE html>
    - <html>
    - 头部元素
        - <head>
        - <meta charset='utf-8'>
        - <title>菜鸟教材(runoob.com)</title>
        - </head>
    - 可见的页面内容
        - <body>
        - <h1>My first title</h1>
        - <p>my first para</p>
        - </body>
    - </html>
- HTML 不是一种编程语言，而是一种标记语言，标记语言是一套标记标签，HTML 使用标记标签，HTML 文档包含了HTML标签 及文本内容；
    - HTML文档 也叫做 web页面

- HTML标签（HTML tag）
    - HTML tag是由尖括号包围起来的关键词，eg：<html>
    - html tag 通常是成对出现的
    - 标签对中的第一个标签是开始标签（开放标签），第二个标签是结束标签（闭合标签）

- HTML元素简介
    - 通常 标签和 元素通常都是描述同样的意思
    - 但是严格来说，一个HTML元素包含了开始标签与结束标签

- Web浏览器
    - Web浏览器（如谷歌浏览器，Internet Explorer，Firefox，Safari）是用于读取HTML文件，并将其作为网页显示。
    - 浏览器并不是直接显示的HTML标签，但可以使用标签来决定如何展现HTML页面的内容给用户

- 注：只有 <body> 区域才会在浏览器中显示。

- <!DOCTYPE> 声明
    - <!DOCTYPE>声明有助于浏览器中正确显示网页。
    - 不在乎.title还是.upper

- 通用声明
    - <!DOCTYPE html> -- HTML5
    -   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01  Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
        -- HTML4.01
    -   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        -- XHTML 1.0

- 中文编码
    - 目前在大部分浏览器中，直接输出中文会出现中文乱码的情况，这时候我们就需要在头部将字符声明为 UTF-8 或 GBK。
    - <meta charset="UTF-8">

- HTML 标题
    - HTML 标题（Heading）是通过<h1> - <h6> 标签来定义的

- HTML 段落
    - HTML 段落是通过标签 <p> 来定义的。

- HTML 链接
    - HTML 链接是通过标签 <a> 来定义的。
    - <a href="https://www.runoob.com">这是一个链接</a>

- HTML 图像
    - HTML 图像是通过标签 <img> 来定义的.
---
- HTML 元素：HTML 文档由一系列 HTML 元素（Element）构成，是网页结构的基础。
    - HTML 元素是从开始标签（start tag）到结束标签（end tag）之间的完整结构。
    - HTML 元素语法规则
        - 元素以开始标签开始，以结束标签结束
        - 元素内容位于开始标签与结束标签之间
        - 部分元素为空元素（empty element），没有内容
        - 空元素通常在开始标签中自闭合（如 <br />）
        - 大多数元素可以包含属性（Attributes）
    - HTML 元素的嵌套：HTML 元素可以相互嵌套，形成树状结构：
        - 一个元素可以包含其他元素
        - HTML 文档本质上是一个嵌套结构(DOM树)
    - HTML 空元素
        - <br>（换行）
        - <img>（图片）
        - <input>（输入框）
        - 推荐写法：
            - <br />
    - 最佳实践：使用小写标签
        - HTML 标签不区分大小写
        - 统一使用小写标签、符合 W3C 规范、提升代码可读性与一致性

- HTML 属性
    - 定义
        - 属性是 HTML 元素提供的附加信息。
        - 属性通常出现在 HTML 标签的开始标签中，用于定义元素的行为、样式、内容或其他特性。
        - 属性总是以 name="value" 的形式写在标签内，name 是属性的名称，value 是属性的值
    - HTML 属性常用引用属性值
        - 属性值应该始终被包括在引号内。
        - 双引号是最常用的，不过使用单引号也没有问题。
    - HTML 提示：使用小写属性
        - 属性和属性值对大小写不敏感。
        - 不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。
        - 而新版本的 (X)HTML 要求使用小写属性。
    - 类别
        - id：为元素指定唯一的标识符
            - <div id="header">This is the header</div>
        - class：为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。
            - <p class="text highlight">This is a highlighted text.</p>
        - style：用于直接在元素上应用 CSS 样式。
            - <p style="color: blue; font-size: 14px;">This is a styled paragraph.</p>
        - title：为元素提供额外的提示信息，通常在鼠标悬停时显示。
            - <abbr title="HyperText Markup Language">HTML</abbr>
        - data-*：用于存储自定义数据，通常通过 JavaScript 访问。
            - <div data-user-id="12345">User Info</div>
            ---
        - 特定元素的属性：某些属性仅适用于特定的 HTML 元素。
        - href（用于 <a> 和 <link> 元素）：指定链接的目标 URL。
            - <a href="https://www.example.com">Visit Example</a>
        - src（用于 <img>, <script>, <iframe> 等元素）：指定外部资源的 URL。
            - <img src="image.jpg" alt="An example image">
        - alt（用于 <img> 元素）：为图像提供替代文本，当图像无法显示时显示。
            - <img src="image.jpg" alt="An example image">
        - type（用于 <input> 和 <button> 元素）：指定输入控件的类型。
            - <input type="text" placeholder="Enter your name">
        - value（用于 <input>, <button>, <option> 等元素）：指定元素的初始值。
            - <input type="text" value="Default Value">
        - disabled（用于表单元素）：禁用元素，使其不可交互。
            - <input type="text" disabled>
        - checked（用于 <input type="checkbox"> 和 <input type="radio">）：指定复选框或单选按钮是否被选中。
            - <input type="checkbox" checked>
        - placeholder（用于 <input> 和 <textarea> 元素）：在输入框中显示提示文本。
            - <input type="text" placeholder="Enter your email">
        - target（用于 <a> 和 <form> 元素）：指定链接或表单提交的目标窗口或框架。
            - <a href="https://www.example.com" target="_blank">Open in new tab</a>
        ---
        - 布尔属性：布尔属性是指不需要值的属性，它们的存在即表示 true，不存在则表示 false。
        - disabled：禁用元素。
            - <input type="text" disabled>
        - readonly：使输入框只读。
            - <input type="text" readonly>
        - required：指定输入字段为必填项。
            - <input type="text" required>
        - autoplay（用于 <audio> 和 <video> 元素）：自动播放媒体。
            - <video src="video.mp4" autoplay></video>
        ---
        - 自定义属性：HTML5 引入了 data-* 属性，允许开发者自定义属性来存储额外的数据。data-*：用于存储自定义数据，通常通过 JavaScript 访问。

#### 表单
- 详见Knowledge、Language_demoBuiding

#### Summary
- Item_routine_anaysis
    - 阶段0  任务分析      →  想清楚数据、用户、流向
        - 数据是什么（content + level）、用户做什么（填表提交）、数据去哪（发给服务器）。由此得出四层结构模型（结构/样式/行为/契约）
        - 为什么这么做：动手前不明确数据形态，后面每个环节（表单字段、校验规则、接口定义）都会返工。“数据契约”是牵一发而动全身的中心，先锁定它。
        - 更好的方法：工程上有个变体叫契约先行（先写 LogInput，再照着它生成表单和校验
    - 阶段1  结构层        →  搭表单骨架（HTML）
        /*想清楚核心的功能层有哪些，需要提供纳西服务*/
        - 做了什么：<form> 包两个字段——content 用 textarea，level 用 select（三个 option）；每个控件配 name 和 label。
        - 为什么这么做：
            - 控件类型由输入形态决定：长文本→textarea，固定三选一→select（用 input 就得自己校验合法性，select 天然限死）
            - option 的 value 用英文、显示文本用中文——程序读 value，人看文字，两边各取所需
            - name 属性是数据的字段名，没有它数据发不出去
        - 更好的方法：字段多、联动复杂时，前端框架（React/Vue）用**数据驱动生成表单**会更省
    - 阶段2  行为层(JS版)  →  拦截提交 + fetch 发请求
        - 做了什么：监听 submit 事件 → preventDefault() 阻止默认跳转 → 取值 → fetch 发 POST。
        - 为什么这么做：
            - preventDefault 是分水岭：不加它，提交 = 整页跳转，页面会白屏重载，现代单页应用的所有交互都建立在“拦截默认行为、自己接管流程”之上
            - fetch 手动发：能完全控制请求体格式（JSON）、headers、时机
        - 更好的方法：有两条升级路线，但都不是“现在更好”，而是“规模变大后更好”：
            - async/await 替代 then 链：可读性更高，错误处理更统一——功能等价，属个人/团队风格
            - axios 等库替代 fetch：拦截器、自动 JSON、更好的错误对象——你现在的场景 fetch 足够，不必引依赖
    - 阶段3  契约层        →  定义 LogInput / LogLevel
        - 做了什么：新建 type.ts，定义 LogLevel = 'info'|'warn'|'error' 和 LogInput { content, level }。
        - 为什么这么做：
            - 之前表单和代码全是“口口相传”的约定——JS 里 level 是不是合法，全靠人肉记忆。接口把这个约定写成了机器可检查的法律
            - 合法值清单只写一处（单一事实来源），表单选项、JS 校验、后端校验全部对齐它——你之前“表单选项没完成”的坑，本质就是契约和表单没对齐
        - 更好的方法：
            - TS 类型在编译后会被删光，运行时不存在。所以运行时校验（白名单 includes）还得自己写一份，等于维护两份清单。更现代的方案是 zod 这类校验库：用代码定义一次 schema，同时得到编译期类型和运行时校验。但引入 zod 需要先理解“为什么需要它”，手动写一遍白名单正是理解它的前置课。
    - 阶段4  逻辑升级(TS版) →  类型收窄 + 校验白名单
        - 做了什么：submit.ts 里完成“取值（string 宽类型）→ 白名单校验 → 断言收窄（as LogLevel）→ 装配成 LogInput → fetch”。
        - 为什么这么做：这是整个任务的考点核心。表单取出来的任何值都是 string——string 是“宽类型”，LogLevel 是“窄类型”。直接赋值 TS 必报错
        - **类型系统在逼你先验证。“校验在前、断言在后”的纪律由此而来**
        - 更好的方法：as 断言本质是“我对编译器发誓我知道自己在干什么”——发誓可能撒谎。更严谨的是类型守卫函数（返回值是 x is LogLevel 的函数），让收窄由代码逻辑自动完成而非人工发誓。
    - 阶段5  工程化        →  npm/tsc，让 TS 能变 JS 跑起来
        - 做了什么：npm init -y（办身份证）→ npm i -D typescript（雇翻译官，生成 node_modules）→ npx tsc --init（立规矩 tsconfig.json）→ npx tsc（翻译 ts→js）
        - 为什么这么做：浏览器不认识 TS，中间必须有翻译环节。四步分别解决“项目身份、工具本体、编译规则、执行编译”四个缺口
        - 更好的方法：有，而且这个建议要记牢——npx tsc 手动编译是原始形态，真实开发早已进化：
            - npx tsc --watch：保存即自动编译，砍掉手动那步
            - Vite：连“编译+刷新浏览器”全自动，还带秒级启动——这是你下一步最该接触的工具
    - 疑惑补充：
        - interface 是 TypeScript 的一个关键字，作用是定义一种数据结构的规格——规定“这类数据必须长什么形状”。
        - LogInput 不是什么系统关键词——它是你自己（按之前任务清单）起的名字，通过 interface 定义出来的一个“自定义类型”。
        - fetch 是浏览器内置的一个函数（不是 TS 的、不是 npm 装的，浏览器原生就有），作用只有一个：向服务器发 HTTP 请求，并把响应带回来。

