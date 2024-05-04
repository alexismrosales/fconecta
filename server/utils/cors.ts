import Cors, { CorsOptions } from 'cors'
import { ISPRODUCTION } from './config'

const PROD_Origins: string[] = [
  // List of all valid origins for PRODUCTION state
  "*"
]

const DEV_Origins: string[] = [
  // List of all valid origins for DEV state 
  "http://localhost:3000/",
  "http://localhost:8080/",
  "*"
]

export const validDomains = ISPRODUCTION ? PROD_Origins : DEV_Origins

export const corsOptions: CorsOptions = {
  origin: (origin?, callback?) => {
    if (!origin || validDomains.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Origin access request is not registered on valid domains"))
    }
  }
}

const corsInstance = () => Cors({ ...corsOptions })

export default corsInstance;
