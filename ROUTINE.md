# 用以记录每周计划执行与完成情况

## 第 0 周待办（2026-08-22—2026-08-31）

- [√] 建立 GitHub 项目二号公开仓库：成长仪表盘。
    - 注释：github开源，name：Myself；
- [√] 按“AI 只教不代笔”协议，完成 FastAPI 官方教程的最小练习。
- [√] 本地跑通 `GET /logs` 返回硬编码 JSON；不要直接复制 AI 生成的完整实现。
- [√] 在本地写下第一篇学习日志。
    - 注释："./logs_learning"中共有两个文件，其一 demo 是完成的代码，note 是笔记；非特别紧急，否则不允许改变笔记和 note 中的任何一个字迹
- [√] 整理官网仓库并准备公开；不把官网继续扩展为后端项目。
- [√] 购买或核对 Attached 中译本版本。
    - 注释：获得原文及译版电子版；
- [√] 确定固定起床锚点。
    - 大约6.30-7.00起床；23.30入睡；
- [√] 开学后确认课表里是否有单片机、嵌入式或 EDA 类课程。
    - 存在嵌入式课程和互联网技术，但是单片机与EDA（上个学期并没有深入FPGA，只是了解该技术存在，仅此而已）没有安排

## 第 1-2 周待办 地基(tracer bullet):
- [ Ing ] FastAPI 官方教程动手过 ;
    - 基础 + 中间件 + 依赖注入已学（8/28）；ORM 提高暂未开始
- [ ] TS 入门,打通最薄全链路:表单 -> POST /logs -> SQLite -> GET /logs -> 列表渲染;
    - 进度：TS 基础类型四章已完成（8/28-9/01），环境报错已解决；SQLite/POST/表单/列表渲染未开始
    - 各环节
        - 环节 1：表单（前端）
            - [√] 写一个 <form>，含 1~2 个字段（如 content、level）
            - [√] 阻止默认提交行为，用 fetch 手动发请求
            - [√] TS 考点：给表单数据定义接口 interface LogInput { content: string; level: 'info' | 'warn' | 'error' }
            - [√] 初始化了项目，多了package.json文件并且安装了TypeScript
        - 环节 2：POST /api/logs（后端接口，FastAPI）
            - [ ] FastAPI 建应用，定义 POST /api/logs 路由（路径与前端对齐）
            - [ ] 用 Pydantic 模型定义请求体：content: str、level: Literal['info','warn','error']
            - [ ] Pydantic 自动校验，不合法自动返回 422（可自定义改成 400）
            - [ ] 配置 CORS 中间件（前端 localhost:3000 → 后端 localhost:8000，跨域必须）
        - 环节 3：SQLite（持久化，Python sqlite3 模块）
            - [ ] 连接库并建表：CREATE TABLE IF NOT EXISTS logs (…)
            - [ ] 用参数化查询插入：cursor.execute(“INSERT INTO logs VALUES (?, ?)”, (content, level))
            —— ? 占位符防 SQL 注入，习惯从第一天养成
            - [ ] 查询接口 GET /api/logs：返回全部日志（为前端列表环节供数据）
        - 环节 4（新）：GET /api/logs + 前端渲染日志列表
            - [ ] FastAPI 提供 GET /api/logs，从 SQLite 查询返回 JSON 数组
            - [ ] 前端 submit.ts（或新建 list.ts）fetch 拉取日志
            - [ ] TS 考点①：fetch 的 res.json() 返回 any/unknown
                —— 数据库返回的是"不确定的形状"，这句话在后端换语言后依然成立
            - [ ] TS 考点②：定义 interface LogRow，写自定义类型守卫
                function isLogRow(x: unknown): x is LogRow { ... }
                校验通过才渲染，不合法丢弃或报错
            - [ ] 把日志渲染成 <ul> 列表
        - 环节 5：列表渲染（前端闭环）
            - [ ] 页面加载时 fetch('/logs')，拿到数组
            - [ ] 渲染成 <ul> 或表格
            - [ ] 提交成功后刷新列表，看到新数据出现 ← 这一刻全链路打通
            - [ ] TS 考点：querySelector<HTMLElement> 泛型、fetch 返回 unknown 的处理    
- [ ] 当周部署到云服务器上线,每日小步提交。
    - 部署未上线（全链路未通）；每日小步提交已执行（8/28 x4、8/29 x3、9/01 x2）
- [√] Myself 仓库补根 .gitignore;
- [Ing] D3 不再确认Attached版本，开始读书计划
    - 已决定跳过译版核实、直接开读；读书笔记尚未落盘（9/01 复盘确认，待补）

## 第 1 周执行记录（2026-09-01 复盘补充）

- 8/28：FastAPI 中间件、依赖注入提交；TS 初步学习。
- 8/29：TS 变量声明、变量类型上；期间解决"同目录同名 ts/js 全局作用域冲突"问题（dist 目录、export{}）。
- 9/01：TS 类型下；学习项目整理（TS_learning 目录）。
- 复盘修正：取消"部署到云服务器上线"的误勾；Attached 条目改为进行中（读书笔记待落盘）。

## 第 1 周执行记录（2026-09-05 复盘补充）

- 9/03：Demo 表单初步提交；随后完善表单字段、样式与 fetch 提交。
- 9/04：Demo 项目化：package.json、tsconfig.json、submit.ts、type.ts 落地。
- 9/05：TS 接口提交，修正脚本路径与 ROUTINE 勾选。
- 复盘发现：前端 `dist/submit.js` 为 CommonJS，页面却按 `type="module"` 加载，需修复；后端栈待确认遵守 D5 的 FastAPI；SQLite/POST/GET/列表/部署仍未开始。
