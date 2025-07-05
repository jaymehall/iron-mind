#!/bin/bash

# Deploy IronMind.ai to Kubernetes

echo "Deploying IronMind.ai to Kubernetes..."

# Create namespace
kubectl apply -f infrastructure/kubernetes/namespace.yaml

# Apply secrets and configmaps
kubectl apply -f infrastructure/kubernetes/secrets.yaml
kubectl apply -f infrastructure/kubernetes/configmap.yaml

# Deploy databases
kubectl apply -f infrastructure/kubernetes/postgres-pvc.yaml
kubectl apply -f infrastructure/kubernetes/postgres-deployment.yaml
kubectl apply -f infrastructure/kubernetes/postgres-service.yaml

kubectl apply -f infrastructure/kubernetes/redis-deployment.yaml
kubectl apply -f infrastructure/kubernetes/redis-service.yaml

# Deploy Kafka
kubectl apply -f infrastructure/kubernetes/zookeeper-deployment.yaml
kubectl apply -f infrastructure/kubernetes/zookeeper-service.yaml
kubectl apply -f infrastructure/kubernetes/kafka-deployment.yaml
kubectl apply -f infrastructure/kubernetes/kafka-service.yaml

# Wait for databases to be ready
echo "Waiting for databases to be ready..."
kubectl wait --for=condition=ready pod -l app=ironmind-postgres -n ironmind --timeout=300s
kubectl wait --for=condition=ready pod -l app=ironmind-redis -n ironmind --timeout=300s

# Deploy applications
kubectl apply -f infrastructure/kubernetes/backend-deployment.yaml
kubectl apply -f infrastructure/kubernetes/backend-service.yaml

kubectl apply -f infrastructure/kubernetes/web-deployment.yaml
kubectl apply -f infrastructure/kubernetes/web-service.yaml

# Deploy ingress
kubectl apply -f infrastructure/kubernetes/ingress.yaml

echo "Deployment completed!"
echo ""
echo "To check status:"
echo "kubectl get pods -n ironmind"
echo ""
echo "To access the application:"
echo "Add 'ironmind.local' to your /etc/hosts file pointing to your cluster IP"
echo "Then visit: http://ironmind.local" 