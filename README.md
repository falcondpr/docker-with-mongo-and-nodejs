# Docker with Mongo and NodeJS

This project uses Docker to set up a Node.js server with a MongoDB database. Follow the instructions below to get started.

## Prerequisites

1. **Docker**: Ensure Docker is installed on your system. If you don't have it installed, you can download it [here](https://www.docker.com/get-started).

2. **Environment Variables**: Fill in the required environment variables in the `.env` file located in the root of the project.

```plaintext
DATABASE_HOST=
DATABASE_PORT=
DATABASE_COLLECTION=

MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
MONGO_INITDB_DATABASE=

SERVER_HOST=
SERVER_PORT=
```

## Setup Instructions

1. **Start Docker**: Make sure Docker is running on your machine.

2. **Install Server Dependencies**:

```bash
cd server && npm i
```

3. **Start the Application**: Run the following command to start the server and MongoDB using Docker Compose.

```bash
docker compose --env-file .env up
```

## Issues and Feedback

If you encounter any issues or have feedback, please open an issue in the repository's [Issues](#) section.
