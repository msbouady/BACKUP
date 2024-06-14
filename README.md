# Node.js Backup and Scheduling Service

This Node.js project is designed to perform PostgreSQL database backups, compress the backups, and schedule these tasks to run at specified intervals using ES6 module syntax.

## Features

- **Database Backup**: Create backups of a PostgreSQL database.
- **Compression**: Compress the backup files using tar.
- **Scheduling**: Schedule automatic backups using `node-cron`.
- **Configuration**: Manage configuration using environment variables with `dotenv`.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a running PostgreSQL database.

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory of your project and add your PostgreSQL credentials and desired port:
    ```env
    PORT=3000
    PGUSER=your_pg_user
    PGHOST=your_pg_host
    PGDATABASE=your_pg_database
    PGPASSWORD=your_pg_password
    PGPORT=your_pg_port
    ```

## Usage

To start the server and schedule the backups, run:
```sh
node app.js
