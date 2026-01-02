import { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);

  // 🔥 Fetch all blogs
  useEffect(() => {
    axios
      .get("http://localhost:5001/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ❌ DELETE Blog
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:5001/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Admin Panel – Manage Blogs
      </h1>

      {/* ➕ ADD NEW BLOG BUTTON (yaha hona chahiye) */}
      <button
        className="px-4 py-2 bg-green-500 rounded-lg mb-6"
        onClick={() => (window.location.href = "/admin/add-blog")}
      >
        + Add New Blog
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#0d1625] p-5 rounded-xl shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3">
              {blog.title}
            </h2>

            <p className="text-gray-400 mt-2 line-clamp-2">
              {blog.desc}
            </p>

            {blog._id && (
  <div className="flex justify-between mt-4">
    {/* EDIT */}
    <button
      className="px-4 py-2 bg-blue-500 rounded-lg"
      onClick={() =>
        (window.location.href = `/admin/edit-blog/${blog._id}`)
      }
    >
      Edit
    </button>

    {/* DELETE */}
    <button
      className="px-4 py-2 bg-red-500 rounded-lg"
      onClick={() => deleteBlog(blog._id)}
    >
      Delete
    </button>
  </div>
)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
