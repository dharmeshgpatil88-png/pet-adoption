import { Link } from "react-router-dom";
import logo from "../assets/pet.png";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="pet.png" className="w-14 h-14 object-contain" />
        <h1 className="text-2xl font-bold">PuffyTails 🐾</h1>
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <Link to="/explore" className="hover:text-green-400 transition">Explore</Link>
        <Link to="/blog" className="hover:text-green-400 transition">Blog</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/signup" className="hover:text-green-400 transition">Signup</Link>
            <Link to="/login">
              <button className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-300 transition">
                Login
              </button>
            </Link>
          </>
        ) : (
          <Link to="/profile">
            <button className="bg-green-500 px-4 py-1 rounded-full font-semibold hover:bg-green-600 transition">
              My Profile
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
