from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import os
import jwt
from datetime import datetime, timedelta

router = APIRouter()
SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-secret-key")

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
async def login(request: LoginRequest):
    return {"token": "mock-token", "user_id": "user-123"}

@router.get("/me")
async def get_current_user(authorization: str = None):
    if not authorization:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return {"user_id": "user-123", "email": "user@example.com"}
