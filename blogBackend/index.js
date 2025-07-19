const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));

mongoose.connect('mongodb+srv://dakshdeepsingh014:DAKSHdeep123@cluster0.z6vffk5.mongodb.net/blogs').then(() => {
    console.log('Connected to BlogDB');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});

const postSchema = mongoose.Schema({
    image:{
        type: String
    }
})

const Blog = mongoose.model('blogs', blogSchema);

const Post = mongoose.models.posts || mongoose.model('posts', postSchema)

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, resp) => {
    resp.send("App is working");
});

app.post("/blogging", async (req, res) => {
    const body = req.body;
    const blog = new Blog();
    blog.title = body.title;
    blog.description = body.description;
    blog.image = body.image;
    await blog.save();
    res.json(req.body);
    console.log(req.body)

});

app.post("/uploads", async(req, res) => {
    const body = req.body;
    try{
        const newImage = await Post.create(body)
        newImage.save();
        res.status(201).json({msg: "New Image uploaded"})
    }catch(error){
        res.status(409).json({msg:error.message})
    }
})

app.get("/getData" , async(req, res) => {
    Blog.find({}).then(data => {
        res.json(data)
    })
})

app.get("/getBlog/:id", async(req, res) => {
    const BlogId = req.params.id;
    const blog = await Blog.findById(BlogId);
    if(!blog) {
        return res.status(404).json({message: "Blog not found"});
    }
    res.json(blog);
})

app.delete("/deleteBlog/:id", async(req, res) => {
    const BlogId = req.params.id;
    const blog = await Blog.findByIdAndDelete(BlogId);
    if(!blog) {
        return res.status(404).json({message: "Blog not found"});
    }
    res.json({message: "Blog deleted successfully"});
    
})

app.listen(5000, () => {
    console.log("App is running on port 5000");
})
