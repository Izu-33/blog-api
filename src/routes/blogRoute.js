const express = require('express');
const blogController = require('../controllers/blogController');

const blogRouter = express.Router();

blogRouter.get('/', blogController.fetchAllBlogs);
blogRouter.post('/add-blog', blogController.addNewBlog);

module.exports = blogRouter;
