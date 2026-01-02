import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ExplorePets from "./pages/explorepets";
import PetDetails from "./pages/petdetails";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AdminPanel from "./pages/adminpanel";
import Blog from "./pages/blog";
import Footer from "./components/footer";
import BlogDetails from "./pages/blogdetails/blogdetails";
import EditBlog from "./pages/editblog";




// Blog detail pages
import DogCare from "./pages/blogdetails/DogCare";
import CatSnacks from "./pages/blogdetails/CatSnack";
import AdoptVsBuying from "./pages/blogdetails/AdoptVsBuying";
import AddBlog from "./pages/addblog";


function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePets />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* Blogs */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dog-care" element={<DogCare />} />
          <Route path="/blog/cat-snacks" element={<CatSnacks />} />
          <Route path="/blog/adopt-vs-buying" element={<AdoptVsBuying />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/admin/edit-blog/:id" element={<EditBlog />} />



        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
