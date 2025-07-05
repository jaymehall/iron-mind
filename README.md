# IronMind.ai

**Empowering amateur bodybuilders with AI-driven coaching, logging, and nutrition tools — right from your phone.**

---

## About the App

IronMind.ai is a mobile-first application designed to support amateur bodybuilders on their fitness journey through smart workout tracking, AI-driven chat coaching, meal macro estimation from images, and progress analytics — all while protecting user privacy. Built with modern technologies and scalable infrastructure, it also features a public-facing recruiter section showcasing the app and its engineering foundation.

---

## Key Features

### AI Fitness Chatbot (LangChain + OpenAI)

- Personalized training routines and coaching
- Daily motivation, workout tips, and recovery advice

### Workout Logging

- Track exercises, sets, reps, weight, and notes
- Pre-made templates and AI-generated workout suggestions

### Food Photo to Macros Estimation

- Snap a picture of your meal
- Receive AI-generated calorie + macro estimates (protein, carbs, fats)
- Powered by computer vision and food database mapping

### Progress Dashboard

- Visualize strength progress, macros, weight trends
- Compare body metrics and track milestones

### Privacy-First Architecture

- JWT-based authentication
- Encrypted user data
- Optional biometric app lock (Face ID, Fingerprint)

### Recruiter-Facing Web Companion

- Live demo page built with Next.js
- Overview of features and stack
- About the developer, GitHub, resume links

---

## Tech Stack

### Frontend

- React Native (Expo) for iOS and Android apps
- Next.js for public-facing landing/demo site (deployed via Vercel)

### AI & NLP

- OpenAI GPT Models for chatbot logic
- LangChain for prompt engineering

### Backend

- Python (FastAPI) for API development
- Kafka for asynchronous meal image processing pipeline
- Kubernetes for container orchestration and autoscaling
- Psyllium (PostgreSQL-based) as the database layer

### ML for Food Image Analysis

- YOLOv8 + OpenCV (or Google Cloud Vision API)
- USDA FoodData Central for macros mapping

### DevOps & Deployment

- Render for backend deployment
- Vercel for frontend deployment
- Google Play Store & Apple App Store for mobile distribution

---

## Folder Structure (Mobile App)

/iron-mind
├── mobile-app/                 # React Native (Expo) mobile app
│   ├── assets/                 # Images, fonts, icons
│   ├── components/            # Reusable UI components
│   ├── screens/               # App screens organized by feature
│   ├── services/              # API, auth, AI, storage, utilities
│   ├── navigation/            # Navigation setup
│   ├── store/                 # Redux store and slices
│   ├── App.js
│   └── package.json
│
├── backend/                   # FastAPI backend
│   ├── app/                   # App core (main, config, DB)
│   ├── api/                   # API routes (v1)
│   ├── core/                  # Security and core logic
│   ├── models/                # DB models
│   ├── schemas/               # Pydantic schemas
│   ├── services/              # Business logic
│   ├── ml/                    # ML modules (chatbot, food recognition)
│   ├── utils/                 # Helpers and validators
│   ├── tests/                 # Backend tests
│   ├── alembic/               # DB migrations
│   ├── Dockerfile
│   └── requirements.txt
│
├── web-app/                   # Next.js landing/demo site
│   ├── public/                # Static assets
│   ├── src/                   # App source
│   │   ├── components/        # UI and layout components
│   │   ├── pages/


---

## License

This project is licensed under the MIT License — see the LICENSE file for details.

---

## About the Creator

Built with passion for the fitness community and curiosity for what's possible at the intersection of artificial intelligence and human strength.

- LinkedIn  
- GitHub  
- Website  

> IronMind.ai is a personal project. Not affiliated with any fitness brand or institution.

---
