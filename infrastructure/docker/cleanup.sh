#!/bin/bash

# Cleanup IronMind.ai Kubernetes deployment

echo "Cleaning up IronMind.ai deployment..."

# Delete all resources in the namespace
kubectl delete namespace ironmind

# Remove Docker images
docker rmi ironmind/backend:latest ironmind/web:latest ironmind/mobile:latest 2>/dev/null || true

# Remove Docker containers
docker-compose down -v

echo "Cleanup completed!" 