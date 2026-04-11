import express from 'express';
import authRouter from './routes/auth.routes.js';
import connection from './config/db.js';

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

app.get('/', (req, res) => {
    res.json({ message: 'POS Auth API running' });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});