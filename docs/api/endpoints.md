# IronMind.ai API Endpoints

## Authentication

### POST /api/v1/auth/login
Login with email and password
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### POST /api/v1/auth/register
Register new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

## Workouts

### GET /api/v1/workouts
Get user's workout history

### POST /api/v1/workouts
Create new workout
```json
{
  "name": "Push Day",
  "exercises": [
    {
      "name": "Bench Press",
      "sets": [
        {"reps": 10, "weight": 135}
      ]
    }
  ]
}
```

## Nutrition

### POST /api/v1/nutrition/analyze-image
Upload food image for macro analysis
- Content-Type: multipart/form-data
- Body: image file

### GET /api/v1/nutrition/logs
Get user's nutrition logs

## Chatbot

### POST /api/v1/chatbot/chat
Send message to AI coach
```json
{
  "message": "I need a workout for chest and triceps",
  "context": "intermediate"
}
```

## Progress

### GET /api/v1/progress/overview
Get user's progress overview

### POST /api/v1/progress/body-metrics
Log body metrics
```json
{
  "weight": 180.5,
  "bodyFat": 12.5,
  "measurements": {
    "chest": 42,
    "arms": 16
  }
}
``` 