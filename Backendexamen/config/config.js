import *as dotnev from 'dotenv'
dotnev.config();
export const DB_CONNECTION = process.env.DB_CONNECTION;
export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_USERNAME = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;