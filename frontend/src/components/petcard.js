import { Link } from "react-router-dom";
import { useState } from "react";

const PetCard = ({ pet }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-[#0d1625] rounded-2xl shadow-lg p-4 flex flex-col overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer">

      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-64 md:h-72 object-cover rounded-t-xl"
      />

      <div className="flex justify-between items-center mt-3">
        <h2 className="text-lg font-bold text-white">{pet.name}</h2>

        <button onClick={() => setLiked(!liked)}>
          <span className={`text-xl ${liked ? "text-red-500" : "text-gray-400"}`}>
            
          </span>
        </button>
      </div>

      <p className="text-sm text-gray-400">{pet.breed}</p>

      <div className="flex gap-2 text-xs mt-2">
        <span className="bg-green-500 px-2 py-1 rounded text-black">
          {pet.gender}
        </span>
        <span className="bg-blue-500 px-2 py-1 rounded text-black">
          {pet.age}
        </span>
      </div>

      <Link
        to={`/pet/${pet.id}`}
        className="bg-green-400 text-black text-center font-bold mt-4 py-2 rounded-lg hover:bg-green-500 transition"
      >
        Adopt Me 🐾
      </Link>
    </div>
  );
};

export default PetCard;
