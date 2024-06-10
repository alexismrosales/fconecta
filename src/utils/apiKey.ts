import dotenv from 'dotenv'
dotenv.config({ path: '.env.apps' })
export const apiKey = process.env.API_KEY
