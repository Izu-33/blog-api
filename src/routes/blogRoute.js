const express = require('express');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const blogRouter = express.Router();

blogRouter.use(authMiddleware);

blogRouter.get('/', blogController.fetchAllBlogs);
blogRouter.post('/add-blog', blogController.addNewBlog);

module.exports = blogRouter;
