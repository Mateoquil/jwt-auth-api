// user.model.js
import bcrypt from 'bcrypt';
import connection from '../config/db.js';

export default {
    create: async (email, password) => {
            const hashedPassword = await bcrypt.hash(password, 10);

        return new Promise((resolve, reject) => {
            connection.query(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [email, password],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                }
            );
        });
    }
};