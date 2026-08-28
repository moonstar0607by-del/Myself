import uuid

from fastapi import FastAPI, Path, Query, HTTPException
from pydantic import BaseModel, Field
from fastapi.responses import HTMLResponse,FileResponse
from typing import Annotated

# 创建 FastAPI 实例
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


# 访问 /hello 响应结果 msg：你好 FastAPI
@app.get("/hello")
async def get_hello():
    return {"msg":"你好 FastAPI"}

# 练习：访问路径，响应结果
# @app.get("/user/hello")
# async def get_hello():
#     return {"meg":"我正在学习FastAPI"}

# 路由参数寻找
@app.get("/book/{id}")
async def get_book(id: int = Path(default=..., gt=0, lt=101, description="书籍的id，取值范围1-100")):
    return {"id":id,"title":f"这是第{id}本书"}

# 路由参数练习
# @app.get("/user/{id}")
# async def get_user(id: int):
#     return {"id":id,"名称":"普通用户"}

# 需求：查找书籍的作者，路径参数：name，长度范围 2-10
# @app.get("/author/{name}")
# async def get_name(name: str = Path(...,min_length=2, max_length=10, description="作者的姓名，取值范围为 2-10")):
#     return {"msg":f"这是{name}的信息"}

#两个接口设计
# @app.get("/newsCategory/{id}")
# async def get_newsCategory(id:int = Path(..., gt=0, lt=101)):
#     return {"id":id,"msg":f"这是{id}种新闻"}
# @app.get("/newsName/{name}")
# async def get_newsName(name: str = Path(..., min_length=1, max_length=11)):
#     return {"name":name}

# 需求 查询新闻 分页， skip：跳过的记录数， limit：返回的记录数
@app.get("/news/news_list/")
async def get_news_list(
    skip:int = Query(default=0, gt=0, lt=101, description="跳过的记录数"),
    limit:int = Query(10,description="返回的记录数")
):
    return{"skip":skip,"limit":limit}

# @app.get("/books/books_list")
# async def get_books_list(
#         category: str = Query(..., min_length = 4, max_length = 256),
#         price: int = Query(..., gt=49, lt=101)
# ):
#     return{"category":category,"price":price}

# 需求 完成用户的注册功能 用户名 密码 str
class User(BaseModel):
    username: str = Field(default="张三",min_length=2, max_length=10, descirption="用户名，长度要求2-10个字")
    password: str = Field(min_length=3,max_length=20)

@app.post("/register")
async def register(user: User):
    return user

# 一个练习
# class Book(BaseModel):
#    book_name: str = Field(...,min_length=2,max_length=20)
#    author: str = Field(min_length=2,max_length=10)
#    publisher: str = Field(default="黑马出版社")
#    price: int = Field(...,gt=-1)
# @app.post("/renewBook")
# async def renew_book(book: Book):
#     return book

# 需求 接口 响应HTML 代码
@app.get("/html", response_class=HTMLResponse)
async def get_html():
    return "<h1>这是一级标题</h1>"


# 第二部分 中间件
@app.middleware("http")
async def middleware(request,call_next):
    print("中间件2 start")
    response = await call_next(request)
    print("中间件2 end")
    return response

@app.middleware("http")
async def middleware2(request,call_next):
    print("中间件1 start")
    response = await call_next(request)
    print("中间件1 end")
    return response

# 需求 结构 返回一张图片内容
@app.get("/file")
async def get_file():
    path = "./files/1.jpeg"
    return FileResponse(path)

# 需求 定义新闻接口 响应数据格式 id、title、content
class News(BaseModel):
    id : int
    title : str
    content : str


@app.get("/news_old/{id}",response_model=News)
async def get_news(id: int):
    return {
        "id":id,
        "title":f"这是第{id}本书",
        "content":"这是一本好书"
    }

# 需求 按照id查询新闻 1 - 6
@app.get("/news/{id}")
async def get_new(id: int):
    id_list = [1,2,3,4,5,6]
    if id not in id_list:
        raise HTTPException(status_code=404, detail="您查找的新闻不存在")

    return {"id":id}

# 需求 logs查询 后端调试 只给定式JSON件
@app.get("/logs/{date}")
async def get_logs(date: Annotated[int, Path(...,gt=0,lt=100)]):

    return {
        "date":date,
        "level":"INFO",
        "msg":f"{date}这一天的测试日志"
    }
