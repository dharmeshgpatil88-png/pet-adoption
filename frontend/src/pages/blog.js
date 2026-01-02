import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // 🔥 Backend se blogs fetch
  useEffect(() => {
    axios
      .get("http://localhost:5001/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ STATIC BLOGS (safe rahenge)
  const staticBlogs = [
    {
      id: "static-1",
      title: "How to Take Care of a Rescue Dog 🐶❤️",
      image: "https://placedog.net/600/350?id=22",
      desc: "Rescue dogs need extra love, patience and consistency. Learn how to welcome them into their new home..."
    },
    {
      id: "static-2",
      title: "Top 5 Healthy Snacks for Cats 😺✨",
      image:
        "https://pixelz.cc/wp-content/uploads/2018/08/cat-with-bowtie-uhd-4k-wallpaper.jpg",
      desc: "Ensure your cat enjoys delicious yet nutritious treats. Here are the top 5 healthiest snacks recommended by vets..."
    },
    {
      id: "static-3",
      title: "Why Pet Adoption is Better than Buying 🏡🐾",
      image: "https://placedog.net/601/350?id=100",
      desc: "Millions of pets are abandoned every year! Adoption gives them a second chance to feel loved..."
    }
  ];

  // ✅ FINAL FIX: merge static + backend blogs
  const displayBlogs = [...staticBlogs, ...blogs];

  return (
    <div className="bg-black min-h-screen text-white px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        📝 Pet Care & Adoption Blog
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {displayBlogs.map((blog) => (
          <div
            key={blog._id || blog.id}
            className="bg-[#0d1625] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {blog.desc}
              </p>

              <Link
                to={`/blog/${blog._id || blog.id}`}
                className="px-4 py-2 bg-green-400 text-black font-semibold rounded-lg"
              >
                Read More ➜
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
