from fastapi import APIRouter
router = APIRouter(prefix="/nutrition", tags=["nutrition"])

@router.get("/")
async def list_nutrition():
    return {"nutrition": []}