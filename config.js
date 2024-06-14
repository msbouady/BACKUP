import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 3000;
export const pgUser = process.env.PGUSER;
export const pgHost = process.env.PGHOST;
export const pgDatabase = process.env.PGDATABASE;
export const pgPassword = process.env.PGPASSWORD;
export const pgPort = process.env.PGPORT;
