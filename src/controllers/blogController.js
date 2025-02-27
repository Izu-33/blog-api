const Blog = require('../models/blog');

exports.fetchAllBlogs = async (req, res) => {
    try {
        let allBlogs = await Blog.find({});
        console.log(allBlogs);
        res.send('All blogs have been found');
    } catch (err) {
        console.log(err);
        res.send('There is an error');
    }
    
};

exports.updateSinglePostById = async (req, res) => {
    
};

// app.post("/save-new-blog", (req, res) => {
//     let allBlogs = fs.readFileSync("./database.json", "utf-8");
//     let processedBlogs = JSON.parse(allBlogs);

//     processedBlogs.push({
//         title:req.body.title,
//         description:req.body.description,
//         tags:req.body.tags,
//         timestamp:req.body.timestamp,
//         comment:req.body.comment,
//         author:req.body.author,
//         body:req.body.body
//     });

//     fs.writeFileSync("./database.json", JSON.stringify(processedBlogs, null, 2));

//     res.json({
//         status: 200,
//         success: true,
//         data: "Database updated successfully!"
//     });

// });