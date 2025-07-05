from fastapi import APIRouter
router = APIRouter(prefix="/workouts", tags=["workouts"])

@router.get("/")
async def list_workouts():
    return {"workouts": []}