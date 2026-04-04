import express from 'express';
import authRouter from './routes/auth.routes.js';

app.use('/auth', authRoutes);

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'POS Auth API running' });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});