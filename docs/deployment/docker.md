# Docker Deployment Guide

## Prerequisites

- Docker and Docker Compose installed
- At least 4GB of available RAM
- 10GB of available disk space

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd iron-mind
   ```

2. **Set up environment variables:**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your actual values
   ```

3. **Build and run with Docker Compose:**
   ```bash
   # Build all images
   ./infrastructure/docker/build.sh
   
   # Start all services
   docker-compose up -d
   ```

4. **Access the applications:**
   - Backend API: http://localhost:8000
   - Web App: http://localhost:3000
   - Mobile App (Expo): http://localhost:8081
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379
   - Kafka: localhost:9092

## Services

### Backend API
- **Port:** 8000
- **Health Check:** http://localhost:8000/health
- **API Documentation:** http://localhost:8000/docs

### Web Application
- **Port:** 3000
- **Framework:** Next.js
- **Environment:** Production

### Mobile App (Development)
- **Port:** 8081
- **Framework:** Expo
- **Access:** Scan QR code with Expo Go app

### Database (PostgreSQL)
- **Port:** 5432
- **Database:** ironmind
- **User:** ironmind
- **Password:** ironmind

### Cache (Redis)
- **Port:** 6379
- **Purpose:** Session storage, caching

### Message Queue (Kafka)
- **Port:** 9092
- **Purpose:** Async image processing

## Useful Commands

```bash
# View logs
docker-compose logs -f [service-name]

# Restart a service
docker-compose restart [service-name]

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild and restart
docker-compose up --build -d

# Access database
docker-compose exec db psql -U ironmind -d ironmind

# Access backend container
docker-compose exec backend bash

# Access web container
docker-compose exec web sh
```

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   - Check if ports 8000, 3000, 5432, 6379, 9092 are available
   - Modify ports in docker-compose.yml if needed

2. **Database connection issues:**
   - Wait for PostgreSQL to fully start (check logs)
   - Verify DATABASE_URL in backend/.env

3. **Memory issues:**
   - Increase Docker memory limit
   - Reduce replica counts in docker-compose.yml

4. **Build failures:**
   - Clear Docker cache: `docker system prune -a`
   - Rebuild: `docker-compose build --no-cache`

### Logs

```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend

# Follow logs
docker-compose logs -f web

# Last 100 lines
docker-compose logs --tail=100 backend
```

## Production Considerations

1. **Environment Variables:**
   - Use proper secrets management
   - Never commit .env files to version control

2. **Security:**
   - Change default passwords
   - Use proper SSL certificates
   - Configure firewall rules

3. **Monitoring:**
   - Add health checks
   - Set up logging aggregation
   - Monitor resource usage

4. **Backup:**
   - Configure database backups
   - Backup persistent volumes
   - Test restore procedures 