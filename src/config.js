import { config as dotenv } from 'dotenv'

dotenv()

export const config = {
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: "",
    database: process.env.DB_database,
}