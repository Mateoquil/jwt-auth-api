import request from 'supertest';
import app from '../app.js';
import userModel from '../src/models/userModel.js';
import connection from '../src/database/database.js';

describe('POST /auth/register', () => {

    beforeEach(async () => {
        await userModel.deleteByEmail('test@example.com');
    });

    it('should register a new user and return 201', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });

        expect(response.status).toBe(201);
    });

afterAll(async () => {
    connection.end();
});

});