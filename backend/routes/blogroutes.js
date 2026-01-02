import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

// ➤ CREATE Blog
router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ GET All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ GET Single Blog (Detail Page)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ► UPDATE Blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // ⚠ Agar blog nahi mila
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ➤ DELETE Blog
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
