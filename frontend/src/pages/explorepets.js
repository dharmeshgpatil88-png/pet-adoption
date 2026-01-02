import PetCard from "../components/petcard";
import axios from "axios";
import { useEffect, useState } from "react";

const staticPets = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    gender: "Female",
    age: "2 Years",
    image: "https://wallpapers.com/images/hd/golden-retriever-wooden-bench-u8xkmfsem6chroeb.jpg"
  },
  {
    id: 2,
    name: "Milo",
    breed: "Siamese Cat",
    gender: "Male",
    age: "1 Year",
    image: "https://media.istockphoto.com/id/1076432222/photo/siamese-kitten.jpg?s=612x612&w=0&k=20&c=KjJzsMuiJYBzlxDpVeOBv9bYcjZQlnEd7W-dP7oEUh0="
  },
  {
    id: 3,
    name: "Rocky",
    breed: "German Shepherd",
    gender: "Male",
    age: "3 Years",
    image: "https://t4.ftcdn.net/jpg/04/75/62/59/360_F_475625971_HTK8MdH194iKiPdBGVHUxPJWNgDHJZEQ.jpg"
  },
  {
    id: 4,
    name: "Luna",
    breed: "Persian Cat",
    gender: "Female",
    age: "6 Months",
    image: "https://thumbs.dreamstime.com/b/persian-cat-10-months-old-13667716.jpg"
  },
  {
    id: 5,
    name: "Max",
    breed: "Labrador",
    gender: "Male",
    age: "2 Years",
    image: "https://media.istockphoto.com/id/1137940465/photo/guide-dog-labrador-retriever-2-years-old-in-park.jpg?s=612x612&w=0&k=20&c=fiGsSZRu12x8bJS2qBrFG8wjhYzVvgXdj0IZ-6ty2sc="
  },
  {
    id: 6,
    name: "Chloe",
    breed: "Ragdoll Cat",
    gender: "Female",
    age: "4 Months",
    image: "https://media.istockphoto.com/id/1304538926/photo/beautiful-young-white-purebred-ragdoll-cat-with-blue-eyes.jpg?s=612x612&w=0&k=20&c=pf-_u7FjM6BHQp1oMY_RDKpzxKi_2_dOcAq2UzlEYvU="
  }
];

const ExplorePets = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/pets")
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="px-6 py-10 bg-black min-h-screen">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Adopt a Friend 🐾
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {(pets.length > 0 ? pets : staticPets).map((pet) => (
          <PetCard key={pet.id || pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePets;
