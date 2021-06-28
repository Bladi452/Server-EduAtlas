import express from 'express';
import chatRoute from './routes/chat'
import cors from 'cors';
import morgan from 'morgan';

 const app = express();


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(chatRoute)

export default app