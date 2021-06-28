import { config as dotenv} from 'dotenv';

dotenv();

export const config ={
    host: process.env.DB_Host,
    user: process.env.DB_USER,
    password: '',
    database:process.env.DB_DATABASE
}