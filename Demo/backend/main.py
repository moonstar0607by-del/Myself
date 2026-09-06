import sqlite3
from pathlib import Path

from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class LogInput(BaseModel):
    content: str
    level: Literal["info", "warn", "error"]

DB_PATH = Path(__file__).resolve().parent / "logs.db"

# 配置数据库路径和建表函数
def init_db() -> None:
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS logs (
                content TEXT NOT NULL,
                level TEXT NOT NULL
            )
            """
        )
        connection.commit()

app = FastAPI()
# 应用启动时建表
init_db()

#修改CORS中间件配置，允许来自http://localhost:3000的请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "DELETE" ],
    allow_headers=["Content-Type"],
)

# API 路由
# 修改POST路由，写入SQLite数据库
# 这里的"？"是参数化查询的占位符，不能改成字符串拼接
@app.post("/api/logs")
async def create_log(log: LogInput):
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute(
            "INSERT INTO logs VALUES (?, ?)",
            (log.content, log.level),
        )
        connection.commit()

    return {
        "message": "日志接收成功",
        "data": log,
    }

# 增加GET路由，读取SQLite数据库中的日志
@app.get("/api/logs")
async def get_logs():
    with sqlite3.connect(DB_PATH) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            "SELECT content, level FROM logs"
        ).fetchall()

# 直接返回 JSON 数组
    return [dict(row) for row in rows]

# 增加DELETE路由，清空SQLite数据库中的日志
@app.delete("/api/logs")
async def clear_logs():
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute("DELETE FROM logs")
        connection.commit()

    return {"message": "日志已清空"}