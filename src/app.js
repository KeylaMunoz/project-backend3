import express from 'express'
import cookieParser from 'cookie-parser';
import 'dotenv/config'; 

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';


const app = express()
const PORT = process.env.PORT || 8080;
const connection = process.env.URL_MONGO

app.use(express.json());
app.use(cookieParser());

//middlewares
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
