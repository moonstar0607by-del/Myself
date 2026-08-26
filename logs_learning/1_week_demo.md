# 代码的练习和问题
## 需求 logs查询 后端调试 只给定式JSON件
@app.get("/logs/{date}")
async def get_logs(date: Annotated[int, Path(...,gt=0,lt=100)]):

    return {
        "date":date,
        "level":"INFO",
        "msg":f"{date}这一天的测试日志"
    }
- 该代码只实现了FastAPI自动返回JSON文件，但是没法在超出范围来回应定式JSON文件
- 注意到 Anootated本质与Pat、Query这些注释有本质区别，带上了默认值