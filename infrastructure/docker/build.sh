#!/bin/bash

# Build all Docker images for IronMind.ai

echo "Building IronMind.ai Docker images..."

# Build backend
echo "Building backend image..."
docker build -t ironmind/backend:latest ./backend

# Build web app
echo "Building web app image..."
docker build -t ironmind/web:latest ./web-app

# Build mobile app (for development)
echo "Building mobile app image..."
docker build -t ironmind/mobile:latest ./mobile-app

echo "All images built successfully!"
echo ""
echo "To run with Docker Compose:"
echo "docker-compose up -d"
echo ""
echo "To run with Kubernetes:"
echo "kubectl apply -f infrastructure/kubernetes/" 