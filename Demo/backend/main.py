from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class LogInput(BaseModel):
    content: str
    level: Literal["info", "warn", "error"]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


@app.post("/api/logs")
async def create_log(log: LogInput):
    return {
        "message": "日志接收成功",
        "data": log,
    }