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
- 
