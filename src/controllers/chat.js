import { connect } from "../database";

export const sendMessage = async (res, req) =>{
    const db = await connect();
    await db.query("INSERT INTO ")
}
