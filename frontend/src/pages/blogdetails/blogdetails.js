import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) {
    return (
      <div className="text-white text-center mt-20">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-8 py-10">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-w-3xl rounded-xl mb-6"
      />

      <p className="text-gray-400 mb-4">{blog.desc}</p>

      <div className="text-lg leading-relaxed whitespace-pre-line">
        {blog.fullArticle}
      </div>
    </div>
  );
};

export default BlogDetails;
