import mysql from 'mysql/promise'
import {config} from "./config"

export const connect = async () =>{
    return await mysql.createConnection(config)
}

connect()