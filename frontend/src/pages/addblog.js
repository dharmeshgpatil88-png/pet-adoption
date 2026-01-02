import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [fullArticle, setFullArticle] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams(); // 👈 edit ke liye
  const navigate = useNavigate();

  // 🔥 EDIT MODE: existing blog load
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5001/blogs/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setImage(res.data.image);
          setDesc(res.data.desc);
          setFullArticle(res.data.fullArticle);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // 🔁 UPDATE
        await axios.put(`http://localhost:5001/blogs/${id}`, {
          title,
          image,
          desc,
          fullArticle,
        });
        setMessage("Blog updated successfully!");
      } else {
        // ➕ CREATE
        await axios.post("http://localhost:5001/blogs", {
          title,
          image,
          desc,
          fullArticle,
        });
        setMessage("Blog added successfully!");
      }

      setTimeout(() => navigate("/admin"), 1000);
    } catch (err) {
      setMessage("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {id ? "Edit Blog" : "Add New Blog"}
      </h1>

      {message && <p className="mb-4 text-green-400">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 bg-[#111827] rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-3 bg-[#111827] rounded-lg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <textarea
          placeholder="Short Description"
          className="w-full p-3 bg-[#111827] rounded-lg"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <textarea
          placeholder="Full Article Content"
          className="w-full p-3 bg-[#111827] rounded-lg h-40"
          value={fullArticle}
          onChange={(e) => setFullArticle(e.target.value)}
          required
        />

        <button
          type="submit"
          className="px-5 py-3 bg-green-500 text-black rounded-lg font-bold"
        >
          {id ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
