# Myself - 成长仪表盘(自我培养系统·项目二号)

给"冰"自我培养系统造的全栈应用:成长仪表盘(日志 / 打卡 / 时长统计 / 里程碑),自己每天真实使用、边用边迭代。全程开源 + 小步提交。

> 系统的长期记忆、决策与冲刺计划在本地 `E:\冰\CONTEXT.md`;本仓库只放代码、学习日志与每周计划记录。

## 当前进度(2026-09-05)

- 2026-09-05:仓库已有 17 个 commit,main 与 origin/main 同步。
- 前端 `Demo/` 已有表单、TS 类型契约与编译配置,但 `dist/submit.js` 是 CommonJS 而页面按 ESM 加载,当前 demo 需修复后才能浏览器运行。
- 后端仍未开始:SQLite、POST /logs、GET /logs、列表渲染、部署上线为 W2 剩余重点。
- FastAPI 教程基础 + 中间件 + 依赖注入已完成;TypeScript 基础类型四章已完成。
- 学习日志见 `logs_learning/`(demo = 完成的代码练习,note = 概念笔记;按约定两者均为"字迹",非特别紧急不改动)。

## 仓库结构

- `Fast_apiPorject/fastApiProject/main.py` — FastAPI 练习代码
- `TypeScript/TS_learning/` — TS 入门练习(01-04);`TypeScript/dist/` 为编译产物
- `Demo/` — tracer bullet 前端练习:`forDemo.html`、`submit.ts`、`type.ts`、`tsconfig.json`、`dist/`
- `logs_learning/` — 学习日志(1_week_demo.md / 1_week_notes.md / 2_week_notes.md / 3_week_notes.md / Knowledge_demoBuidinglog.md / Language_demoBuilding.md)
- `ROUTINE.md` — 每周计划执行记录

## 代码所有权协议(D9)

1. 每行代码本人手写;AI 只讲概念、答为什么、评审、出题;卡 30 分钟再求助,求助后关掉对话自己重写。
2. 每周验收:能讲清本周写的每一行,讲不清下周重学。
3. 每月一次模拟面试,记录写进 `logs/interviews/`。

## 历史

- 2026-08-28 ~ 09-01:W1 学习小步提交(FastAPI 中间件/依赖注入/ORM 暂缓,TS 入门四章)。
- 2026-09-03 ~ 09-05:前端表单初步搭建、TS 接口与编译配置落地;新增 5 个 commit。
- 2026-08-24 / 08-27:建仓,第 0 周学习提交。
