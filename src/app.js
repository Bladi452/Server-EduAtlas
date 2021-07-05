import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ChatRoute from './routes/chat'
import auth from './routes/auth'
import school from './routes/school'

const app = express();


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(ChatRoute)
app.use(auth)
app.use(school)

export default app