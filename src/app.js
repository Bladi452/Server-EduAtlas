import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ChatRoute from './routes/chat'
import nave from './routes/navegacion'
import auth from './routes/auth'
import school from './routes/school'
import document from './routes/document'
import fileupload from 'express-fileupload'



const app = express();


app.use(cors())
app.use(fileupload())
app.use(morgan('dev'))
app.use(express.json())
app.use(ChatRoute)
app.use(auth)
app.use(school)
app.use(document)
app.use(nave)

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

export default app