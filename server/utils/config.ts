import dotenv from 'dotenv'

dotenv.config()

export const {
  NODE_ENV = "PRODUCTION",
  port = 8000
} = process.env;

export const PRODUCTION = NODE_ENV == "PRODUCTION";
export const PORT = port;
