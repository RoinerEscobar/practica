import{config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3001
export const DB_HOST = process.env.HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'root'
export const DB_DATABASE = process.env.DB_DATABASE || 'cucdb'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Royner_1999'