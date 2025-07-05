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
├── mobile-app/                          # React Native (Expo) Mobile Application
│   ├── assets/
│   │   ├── images/
│   │   │   └── logo.png
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   ├── Card.js
│   │   │   └── Loading.js
│   │   ├── workout/
│   │   │   ├── ExerciseCard.js
│   │   │   ├── WorkoutTimer.js
│   │   │   └── SetTracker.js
│   │   ├── nutrition/
│   │   │   ├── MacroDisplay.js
│   │   │   ├── FoodImageUpload.js
│   │   │   └── NutritionChart.js
│   │   ├── progress/
│   │   │   ├── ProgressChart.js
│   │   │   ├── BodyMetrics.js
│   │   │   └── StrengthTracker.js
│   │   └── chatbot/
│   │       ├── ChatBubble.js
│   │       ├── MessageInput.js
│   │       └── TypingIndicator.js
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   └── BiometricSetupScreen.js
│   │   ├── main/
│   │   │   ├── HomeScreen.js
│   │   │   ├── DashboardScreen.js
│   │   │   └── ProfileScreen.js
│   │   ├── workout/
│   │   │   ├── WorkoutLogScreen.js
│   │   │   ├── ExerciseLibraryScreen.js
│   │   │   ├── WorkoutTemplateScreen.js
│   │   │   └── WorkoutHistoryScreen.js
│   │   ├── nutrition/
│   │   │   ├── NutritionScreen.js
│   │   │   ├── ImageUploadScreen.js
│   │   │   ├── MacroTrackingScreen.js
│   │   │   └── MealHistoryScreen.js
│   │   ├── progress/
│   │   │   ├── ProgressScreen.js
│   │   │   ├── BodyMetricsScreen.js
│   │   │   └── StrengthProgressScreen.js
│   │   ├── chatbot/
│   │   │   ├── ChatbotScreen.js
│   │   │   └── CoachingScreen.js
│   │   └── settings/
│   │       ├── SettingsScreen.js
│   │       ├── PrivacySettingsScreen.js
│   │       └── NotificationSettingsScreen.js
│   ├── services/
│   │   ├── api/
│   │   │   ├── api.js
│   │   │   ├── workoutApi.js
│   │   │   ├── nutritionApi.js
│   │   │   └── progressApi.js
│   │   ├── auth/
│   │   │   ├── auth.js
│   │   │   ├── biometrics.js
│   │   │   └── jwt.js
│   │   ├── ai/
│   │   │   ├── ai.js
│   │   │   ├── chatbotService.js
│   │   │   └── workoutGenerator.js
│   │   ├── storage/
│   │   │   ├── localStorage.js
│   │   │   └── secureStorage.js
│   │   └── utils/
│   │       ├── constants.js
│   │       ├── helpers.js
│   │       └── validation.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── AuthNavigator.js
│   │   └── TabNavigator.js
│   ├── store/
│   │   ├── index.js
│   │   ├── authSlice.js
│   │   ├── workoutSlice.js
│   │   ├── nutritionSlice.js
│   │   └── progressSlice.js
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   ├── metro.config.js
│   └── package.json
│
├── backend/                             # Python FastAPI Backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── dependencies.py
│   │   └── middleware.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── users.py
│   │   │   ├── workouts.py
│   │   │   ├── nutrition.py
│   │   │   ├── progress.py
│   │   │   └── chatbot.py
│   │   └── deps.py
│   ├── core/
│   │   ├── __init__.py
│   │   ├── security.py
│   │   ├── config.py
│   │   └── exceptions.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── workout.py
│   │   ├── nutrition.py
│   │   ├── progress.py
│   │   └── chatbot.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── workout.py
│   │   ├── nutrition.py
│   │   ├── progress.py
│   │   └── chatbot.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── auth_service.py
│   │   ├── workout_service.py
│   │   ├── nutrition_service.py
│   │   ├── progress_service.py
│   │   ├── chatbot_service.py
│   │   └── image_processing_service.py
│   ├── ml/
│   │   ├── __init__.py
│   │   ├── food_recognition/
│   │   │   ├── __init__.py
│   │   │   ├── yolo_model.py
│   │   │   ├── food_detection.py
│   │   │   └── macro_estimation.py
│   │   ├── chatbot/
│   │   │   ├── __init__.py
│   │   │   ├── langchain_setup.py
│   │   │   ├── prompt_templates.py
│   │   │   └── response_generator.py
│   │   └── utils/
│   │       ├── __init__.py
│   │       ├── image_utils.py
│   │       └── data_utils.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── database.py
│   │   ├── security.py
│   │   └── validators.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_auth.py
│   │   ├── test_workouts.py
│   │   ├── test_nutrition.py
│   │   └── test_chatbot.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── alembic/
│       ├── versions/
│       ├── env.py
│       └── alembic.ini
│
├── web-app/                             # Next.js Public Landing/Demo Site
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.js
│   │   │   │   ├── Footer.js
│   │   │   │   └── Navigation.js
│   │   │   ├── sections/
│   │   │   │   ├── Hero.js
│   │   │   │   ├── Features.js
│   │   │   │   ├── TechStack.js
│   │   │   │   ├── Demo.js
│   │   │   │   └── About.js
│   │   │   └── ui/
│   │   │       ├── Button.js
│   │   │       ├── Card.js
│   │   │       └── Modal.js
│   │   ├── pages/
│   │   │   ├── index.js
│   │   │   ├── about.js
│   │   │   ├── demo.js
│   │   │   └── contact.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── components.css
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   └── hooks/
│   │       └── useScroll.js
│   ├── next.config.js
│   ├── package.json
│   └── tailwind.config.js
│
├── infrastructure/                       # DevOps & Deployment
│   ├── kubernetes/
│   │   ├── backend-deployment.yaml
│   │   ├── backend-service.yaml
│   │   ├── kafka-deployment.yaml
│   │   ├── postgres-deployment.yaml
│   │   └── ingress.yaml
│   ├── docker/
│   │   ├── backend.Dockerfile
│   │   ├── mobile.Dockerfile
│   │   └── web.Dockerfile
│   ├── scripts/
│   │   ├── deploy.sh
│   │   ├── build.sh
│   │   └── test.sh
│   └── terraform/
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
│
├── ml-pipeline/                         # ML & Data Processing
│   ├── kafka/
│   │   ├── producers/
│   │   │   └── image_processor.py
│   │   ├── consumers/
│   │   │   └── macro_analyzer.py
│   │   └── config/
│   │       └── kafka_config.py
│   ├── models/
│   │   ├── yolo/
│   │   │   ├── weights/
│   │   │   ├── config.yaml
│   │   │   └── train.py
│   │   └── food_database/
│   │       ├── usda_data.py
│   │       └── macro_mapping.py
│   ├── data/
│   │   ├── raw/
│   │   ├── processed/
│   │   └── training/
│   └── notebooks/
│       ├── model_development.ipynb
│       └── data_analysis.ipynb
│
├── docs/                                # Documentation
│   ├── api/
│   │   ├── endpoints.md
│   │   ├── authentication.md
│   │   └── examples.md
│   ├── deployment/
│   │   ├── backend.md
│   │   ├── mobile.md
│   │   └── web.md
│   ├── architecture/
│   │   ├── system_design.md
│   │   ├── database_schema.md
│   │   └── api_design.md
│   └── user_guides/
│       ├── mobile_app.md
│       └── web_site.md
│
├── .github/                             # GitHub Actions CI/CD
│   └── workflows/
│       ├── mobile-ci.yml
│       ├── backend-ci.yml
│       ├── web-ci.yml
│       └── deploy.yml
│
├── .gitignore
├── README.md
├── LICENSE
└── package.json

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
