const Blog = require('../models/blog');
const ioredis = require('ioredis');

const redis = new ioredis({
    host: 'localhost',
    port: 6379
});

const redisKey = 'database-store';

exports.fetchAllBlogs = async (req, res) => {
    await redis.set('message', 'Hello world');
    try {
        let savedBlogs = await redis.get(redisKey); 

        if (savedBlogs) {
            return res.status(200).json({
                success: true,
                message: 'Blogs fetched sucessfully',
                data: savedBlogs
            });
        } else {
            let allBlogs = await Blog.find({});
            console.log(await redis.get('message'));
            // console.log(allBlogs);
            await redis.set(redisKey, JSON.stringify(allBlogs), 'EX', 600);
            res.send('All blogs have been found');
            return res.status(200).json({
                success: true,
                message: 'Blogs fetched sucessfully',
                data: allBlogs
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error trying to retrieve blog posts', 
            error: err.message
        });
    }
    
};

exports.addNewBlog = async (req, res) => {
    try {
        const { title, author, body, category } = req.body;
        const newBlog = new Blog({
            title,
            author,
            body,
            category
        });

        await newBlog.save();

        return res.status(201).json({
            success: true,
            message: 'Blog posted successfully!',
            data: newBlog
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error trying to save', 
            error: err.message
        });
    }
     
};
