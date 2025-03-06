const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
const ioredis = require('ioredis');
// describe('GET /', () => {
//     it('should return a list of blog posts', async () => {
//         const response = await request(app).get('/api/v1/blog/blogs')
//         expect(response.status).toBe(200)
//     })
// })

// afterAll(async () => {
//     await mongoose.connection.close()
//     if (server) server.close()
// })

jest.mock('ioredis');
const redis = new ioredis();

describe('Blog Controller', () => {
    beforeEach(async () => {
        await Blog.deleteMany();
    });

    test('should fetch all blogs (empty at first)', async () => {
        const response = await request(app).get('/api/blogs');

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data).toEqual([]);
    });

    test('should add a new blog', async () => {
        const blogData = {
            title: 'Test Blog',
            author: 'John Doe',
            body: 'This is a test blog content.',
            category: 'Tech'
        };

        const response = await request(app).post('/api/blogs').send(blogData);

        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe(blogData.title);
    });

    test('should fetch all blogs after adding one', async () => {
        await Blog.create({
            title: 'Test Blog 2',
            author: 'Jane Doe',
            body: 'Another test blog content.',
            category: 'Health'
        });

        const response = await request(app).get('/api/blogs');

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBe(1);
    });

    test('should return error on server failure', async () => {
        jest.spyOn(Blog, 'find').mockRejectedValue(new Error('Database error'));

        const response = await request(app).get('/api/blogs');

        expect(response.status).toBe(500);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe('Error trying to receive blog posts');
    });
});
