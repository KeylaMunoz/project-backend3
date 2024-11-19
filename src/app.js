import express from 'express'
import mongoose from 'mongoose';

const app = express()
const PORT = process.env.PORT || 8080;
const connection = process.env.URL_MONGO

app.use(express.json())

//middlewares

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
