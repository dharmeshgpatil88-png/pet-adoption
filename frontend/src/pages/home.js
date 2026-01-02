import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4 bg-black text-white">

      <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
        Find Your New Best Friend 🐶❤️
      </h1>

      <p className="text-gray-300 text-lg max-w-xl mb-8">
        Adopt adorable pets from shelters and give them a loving home. 
        Let’s help little paws find happiness!
      </p>

      <Link
        to="/explore"
        className="bg-green-400 text-black font-bold py-3 px-8 rounded-full hover:bg-green-500 transition text-lg"
      >
        Explore Pets 🐾
      </Link>

      {/* Cute Pet Images */}
      <div className="mt-12 flex gap-10 justify-center items-center">

        <img
          src="https://cdn2.thecatapi.com/images/4ng.jpg"
          alt="Cute Cat"
          className="w-40 h-40 object-cover rounded-xl hover:scale-110 transition duration-300 shadow-lg"
        />
          <img
    src="https://placedog.net/200/200"
    alt="Cute Dog"
    className="w-44 h-44 rounded-xl object-cover hover:scale-110 transition duration-300 shadow-lg"
  />

      </div>

    </section>
  );
};

export default Home;

