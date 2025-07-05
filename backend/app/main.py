from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer
from contextlib import asynccontextmanager
import uvicorn

from app.config import settings
from app.database import engine, Base
from app.api.v1 import auth, users, workouts, nutrition, progress, chatbot

# Create database tables
Base.metadata.create_all(bind=engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting IronMind.ai API...")
    yield
    # Shutdown
    print("Shutting down IronMind.ai API...")

app = FastAPI(
    title="IronMind.ai API",
    description="AI-powered fitness coaching and tracking API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(workouts.router, prefix="/api/v1/workouts", tags=["Workouts"])
app.include_router(nutrition.router, prefix="/api/v1/nutrition", tags=["Nutrition"])
app.include_router(progress.router, prefix="/api/v1/progress", tags=["Progress"])
app.include_router(chatbot.router, prefix="/api/v1/chatbot", tags=["Chatbot"])

@app.get("/")
async def root():
    return {"message": "Welcome to IronMind.ai API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 