import userModel from '../models/user.model.js';

export default {
    register : async (req, res) => {
    const { email, password } = req.body;
    const newUser = await userModel.create(email, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
    },
};