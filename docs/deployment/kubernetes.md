# Kubernetes Deployment Guide

## Prerequisites

- Kubernetes cluster (minikube, kind, or cloud)
- kubectl configured
- Docker images pushed to registry
- Ingress controller installed (nginx-ingress)

## Quick Start

1. **Build and push images:**
   ```bash
   # Build images
   ./infrastructure/docker/build.sh
   
   # Tag and push to your registry
   docker tag ironmind/backend:latest your-registry/ironmind-backend:latest
   docker tag ironmind/web:latest your-registry/ironmind-web:latest
   docker push your-registry/ironmind-backend:latest
   docker push your-registry/ironmind-web:latest
   ```

2. **Update image references:**
   - Edit `infrastructure/kubernetes/backend-deployment.yaml`
   - Edit `infrastructure/kubernetes/web-deployment.yaml`
   - Replace `ironmind/backend:latest` with `your-registry/ironmind-backend:latest`

3. **Deploy to Kubernetes:**
   ```bash
   ./infrastructure/docker/deploy.sh
   ```

4. **Access the application:**
   - Add `ironmind.local` to your /etc/hosts file
   - Visit http://ironmind.local

## Architecture

### Namespace
- All resources deployed in `ironmind` namespace

### Services
- **Backend:** ClusterIP service on port 8000
- **Web:** ClusterIP service on port 3000
- **PostgreSQL:** ClusterIP service on port 5432
- **Redis:** ClusterIP service on port 6379
- **Kafka:** ClusterIP service on port 9092

### Ingress
- Routes `/api/*` to backend service
- Routes `/*` to web service
- Host: ironmind.local

## Configuration

### Secrets
Update `infrastructure/kubernetes/secrets.yaml`:

```yaml
data:
  openai-api-key: <base64-encoded-value>
  aws-access-key-id: <base64-encoded-value>
  aws-secret-access-key: <base64-encoded-value>
  postgres-password: <base64-encoded-value>
```

### ConfigMap
Update `infrastructure/kubernetes/configmap.yaml` for environment-specific settings.

## Scaling

### Horizontal Pod Autoscaler
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ironmind-backend-hpa
  namespace: ironmind
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ironmind-backend
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## Monitoring

### Resource Limits
All deployments include resource requests and limits for CPU and memory.

### Health Checks
- Liveness probes ensure containers are restarted if unhealthy
- Readiness probes ensure traffic is only sent to ready containers

### Logging
```bash
# View logs
kubectl logs -f deployment/ironmind-backend -n ironmind
kubectl logs -f deployment/ironmind-web -n ironmind

# View all pods
kubectl get pods -n ironmind

# Describe pod
kubectl describe pod <pod-name> -n ironmind
```

## Troubleshooting

### Common Issues

1. **Image pull errors:**
   - Ensure images are pushed to registry
   - Check image pull secrets if using private registry

2. **Database connection issues:**
   - Verify PostgreSQL is running: `kubectl get pods -n ironmind -l app=ironmind-postgres`
   - Check logs: `kubectl logs -f deployment/ironmind-postgres -n ironmind`

3. **Ingress not working:**
   - Verify ingress controller is installed
   - Check ingress status: `kubectl get ingress -n ironmind`

4. **Resource issues:**
   - Check resource usage: `kubectl top pods -n ironmind`
   - Scale up if needed: `kubectl scale deployment ironmind-backend --replicas=5 -n ironmind`

### Debugging

```bash
# Port forward to access services directly
kubectl port-forward service/ironmind-backend 8000:8000 -n ironmind
kubectl port-forward service/ironmind-web 3000:3000 -n ironmind

# Access database
kubectl port-forward service/ironmind-postgres 5432:5432 -n ironmind

# Execute commands in pods
kubectl exec -it <pod-name> -n ironmind -- /bin/bash
```

## Cleanup

```bash
# Remove all resources
kubectl delete namespace ironmind

# Or use the cleanup script
./infrastructure/docker/cleanup.sh
```

## Production Considerations

1. **High Availability:**
   - Use multiple nodes
   - Configure pod anti-affinity
   - Set up proper backup strategies

2. **Security:**
   - Use RBAC for access control
   - Enable network policies
   - Use secrets management (HashiCorp Vault, AWS Secrets Manager)

3. **Monitoring:**
   - Deploy Prometheus and Grafana
   - Set up alerting
   - Configure centralized logging

4. **CI/CD:**
   - Set up automated deployments
   - Use GitOps (ArgoCD, Flux)
   - Implement blue-green deployments 