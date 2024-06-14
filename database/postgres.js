import { Client } from 'pg';
import { pgUser, pgHost, pgDatabase, pgPassword, pgPort } from '../config.js';

export const configurePostgresClient = () => {
  return new Client({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort,
  });
};
