
import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
});

export default connection;