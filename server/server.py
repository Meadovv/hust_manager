import time
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CheckBody (BaseModel):
    username: str
    password: str


@app.get('/home')
def home():
    return {
        'Name': 'Warm Milk Assistant Server'
    }

@app.post('/register')
async def crawl(payload: CheckBody):

    print(payload)

    userInDB: str = 'meadow' # viết code để lấy data từ db
    passInDB: str = '8888' # viết code để lấy data từ db

    if(payload.username == userInDB and payload.password == passInDB):
        return {
            'success': True,
            'message': 'Logged in',
            'time': round(time.time() * 1000)
        }
    else:
        return {
            'success': False,
            'message': 'Not Logged in',
            'time': round(time.time() * 1000)
        }