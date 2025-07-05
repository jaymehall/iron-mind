from fastapi import APIRouter
router = APIRouter(prefix="/chatbot", tags=["chatbot"])

@router.get("/status")
async def chatbot_status():
    return {"status": "chatbot endpoint working"}