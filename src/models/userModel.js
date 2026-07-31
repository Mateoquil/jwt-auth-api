import bcrypt from 'bcrypt';
import connection from '../database/database.js';

export default {
    create: async (email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);

        return new Promise((resolve, reject) => {
            connection.query(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [email, hashedPassword],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                }
            );
        });
    },

    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email],
                (err, results) => {
                    if (err) reject(err);
                    else resolve(results[0]);
                }
            );
        });
    }
};