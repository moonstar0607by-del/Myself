# 代码的步释

## 前端
-   body {    
    font-family: "Microsoft YaHei", sans-serif;    
    background: #f5f5f5;    
    display: flex;    
    justify-content: center;    
    padding: 40px;    
    }
    - 逐行释义
        1. `body { }`
            选择 HTML 的`<body>`标签，对整个页面主体设置样式，页面所有可见内容都放在 body 内部。
        2. `font-family: "Microsoft YaHei", sans-serif;`
            设置页面默认字体：优先使用**微软雅黑**，系统没有该字体就回退到无衬线通用字体`sans‑serif`。
        3. `background: #f5f5f5;`
            页面背景色，`#f5f5f5`是浅灰色。
        4. `display: flex;`
            开启**Flex 弹性布局**，body 变成 flex 容器，直接子元素会启用弹性规则。
        5. `justify-content: center;`
            Flex 专有属性：**水平方向把直接子元素居中对齐**。
        > ⚠️注意：只对 flex 容器生效，普通块元素写这个是无效的。
        6. `padding: 40px;`
            内边距：body 内部四周留出 40px 空白，内容不会贴住浏览器窗口边缘。
    - 对应语法知识点
        1. CSS 基础语法
            - 选择器：标签选择器`body`、类选择器`.class`、id 选择器`#id`
            - 规则格式：`属性名: 值;`，每条属性末尾分号不能漏
            - CSS 三种引入方式：行内样式、`<style>`内嵌样式表、外部`.css`文件（最常用）
        2. 文本与字体
            - `font‑family` 字体设置，备用字体写法，引号使用规则
            - 颜色表示：十六进制颜色 `#xxxxxx`
        3. 盒模型（非常核心）
            - `padding` 内边距；区分 `padding`、`margin` 的区别
            - 理解：padding 是盒子内部留白，margin 是盒子外部留白
        4. Flex 弹性布局（重点，这两行是这个片段的难点）
            1. `display:flex`：把容器切换为弹性盒子
            2. 主轴、交叉轴概念：
            - `justify‑content`：**主轴对齐**（默认水平）
            - `align‑items`：交叉轴对齐（垂直方向）
            3. 区分：**容器属性**（写在父元素） vs **子项属性**（写在子元素）
                > 
                > 坑：`justify‑content` 必须父元素设置`display:flex`才生效，写在子元素上无效。
        5. HTML 基础结构
            明白 `<!DOCTYPE html>`、`<html>`、`<head>`、`<body>`各个标签作用，CSS 写在哪里。
- 对应学习路线：
    1. HTML 基础：页面标签结构
    2. CSS 基础语法、选择器、颜色单位
    3. CSS 盒模型：margin、padding、border
    4. Flex 布局（重中之重，掌握 justify‑content、align‑items）
    5. 实践：写完整 html 文件，浏览器打开调试看效果，修改参数观察页面变化。
