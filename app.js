import express from 'express';
import dotenv from 'dotenv';
import authRouter from './src/routes/authRoutes.js';
import connection from './src/database/database.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to DB:', err);
        return;
    }
    console.log('Connected to MySQL');
});

export default app;