# Use Node.js 20 Alpine image for Expo development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S expo -u 1001
RUN chown -R expo:nodejs /app
USER expo

# Expose port for Expo dev server
EXPOSE 8081

# Set environment variables
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=http://localhost:19002/
ENV EXPO_TUNNEL_SUBDOMAIN=ironmind

# Start Expo development server
CMD ["npx", "expo", "start", "--tunnel", "--clear"]