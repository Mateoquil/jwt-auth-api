import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
register: async (req, res) => {
        try {
            const { email, password } = req.body; 

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const existingUser = await userModel.findByEmail(email);
            if (existingUser) {
                return res.status(409).json({ error: 'Email already registered' });
            }

            const defaultRole = 'cashier'; 
            const newUser = await userModel.create(email, password, defaultRole);
            
            res.status(201).json({ message: 'User registered successfully', userId: newUser.insertId });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Error registering user' });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const user = await userModel.findByEmail(email);
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Error logging in' });
        }
    },
};