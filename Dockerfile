# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json ./

RUN npm install

# Copy rest of the code
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
