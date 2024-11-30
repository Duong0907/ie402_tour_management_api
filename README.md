# <center>Tour Management API</center>

## Overview

-   This API is built using NodeJS and MySQL. You can run it using NodeJS or Docker.
-   Some features: customer management, tour management, booking management, etc.

## How to run

### Using NodeJS

1. Install NodeJS and NPM
2. Clone the repository

    ```
    git clone <REPO_URL>
    ```

3. Install dependencies

    ```bash
    npm install
    ```

4. Start MySQL database

    ```bash
    docker-compose up -d
    ```

Or run your own MySQL database and update the .env file with the correct credentials

5. Run the server

    ```bash
    npm run dev
    ```

6. The server will run on `http://localhost:3000`

### Using Docker

1. Install docker
2. Clone the repository

    ```
    git clone <REPO_URL>
    ```

3. Uncomment some lines in the docker-compose.yml file
4. Run docker compose

    ```bash
    docker-compose up
    ```

5. The server will run on `http://localhost:3000`
