#  Dockerfile for  Backend

FROM node:20-alpine

# Create App Directory
RUN mkdir -p /app
WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code
COPY . .

# Exports
EXPOSE 8000

CMD ["npm","run","dev"]