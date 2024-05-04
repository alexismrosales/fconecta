import dotenv from 'dotenv'

dotenv.config()

export const {
  NODE_ENV = "prod",
  port = 3000
} = process.env

export const ISPRODUCTION = NODE_ENV === "prod"
export const PORT = port
export const CLIENT_BUILD_PATH = `${__dirname}/../../build`
