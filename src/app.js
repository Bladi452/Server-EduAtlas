import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ChatRoute from './routes/chat'

 const app = express();


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(ChatRoute)

export default app