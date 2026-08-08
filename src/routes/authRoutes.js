import { Router } from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import authorizeRole from '../middlewares/authorizeRole.js';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/admin-only', authMiddleware, authorizeRole(['admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome, admin!' });
});


router.get('/me', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'You are authenticated', user: req.user });
});

export default router;