const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('GET /', () => {
    it('should return a list of blog posts', async () => {
        const response = await request(app).get('/api/v1/blog/blogs')
        expect(response.status).toBe(200)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
    if (server) server.close()
})