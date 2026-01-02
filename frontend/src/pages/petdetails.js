import { useParams } from "react-router-dom"
import { useState } from "react";


const pets = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    gender: "Female",
    age: "2 Years",
    image: "https://wallpapers.com/images/hd/golden-retriever-wooden-bench-u8xkmfsem6chroeb.jpg",
    description: "Bella is a very friendly dog who loves to play and enjoys being around humans. She is well trained and loves kids!",
    vaccinated: true,
    location: "Mumbai Shelter"
  },
  {
    id: 2,
    name: "Milo",
    breed: "Siamese Cat",
    gender: "Male",
    age: "1 Year",
    image: "https://media.istockphoto.com/id/1076432222/photo/siamese-kitten.jpg?s=612x612&w=0&k=20&c=KjJzsMuiJYBzlxDpVeOBv9bYcjZQlnEd7W-dP7oEUh0=",
    description: "Milo is a cute and calm cat who loves cuddles. Perfect for apartment living. Litter trained.",
    vaccinated: true,
    location: "Pune Shelter"
  },
  {
    id: 3,
    name: "Rocky",
    breed: "German Shepherd",
    gender: "Male",
    age: "3 Years",
    image: "https://t4.ftcdn.net/jpg/04/75/62/59/360_F_475625971_HTK8MdH194iKiPdBGVHUxPJWNgDHJZEQ.jpg",
    description: "Rocky is alert, loyal, and well-trained. Great for family and security. Very energetic and intelligent.",
    vaccinated: false,
    location: "Nashik Shelter"
  },
   {
    id: 4,
    name: "Luna",
    breed: "Persian Cat",
    gender: "Female",
    age: "6 Months",
    image: "https://thumbs.dreamstime.com/b/persian-cat-10-months-old-13667716.jpg",
    description: "Luna loves attention and is super cute! She loves soft toys and fun playtime.",
    vaccinated: true,
    location: "Nagpur Shelter"
  },
  {
    id: 5,
    name: "Max",
    breed: "Labrador",
    gender: "Male",
    age: "2 Years",
    image: "https://media.istockphoto.com/id/1137940465/photo/guide-dog-labrador-retriever-2-years-old-in-park.jpg?s=612x612&w=0&k=20&c=fiGsSZRu12x8bJS2qBrFG8wjhYzVvgXdj0IZ-6ty2sc=",
    description: "Max is a perfect family dog and loves to fetch balls. Best friend material!",
    vaccinated: true,
    location: "Thane Shelter"
  },
  {
    id: 6,
    name: "Chloe",
    breed: "Ragdoll Cat",
    gender: "Female",
    age: "4 Months",
    image: "https://media.istockphoto.com/id/1304538926/photo/beautiful-young-white-purebred-ragdoll-cat-with-blue-eyes.jpg?s=612x612&w=0&k=20&c=pf-_u7FjM6BHQp1oMY_RDKpzxKi_2_dOcAq2UzlEYvU=",
    description: "Chloe is soft, playful and loves to sit on your lap. Very calm baby!",
    vaccinated: true,
    location: "Aurangabad Shelter"
  }
];


const PetDetails = () => {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === parseInt(id));
  const [openForm, setOpenForm] = useState(false);


  if (!pet) return <h1 className="text-white text-center mt-10">Pet Not Found</h1>;

 return (
  <>
    {/* MAIN PET DETAILS SECTION */}
    <div className="bg-black min-h-screen text-white px-8 py-10">
      <div className="max-w-4xl mx-auto bg-[#0d1625] rounded-3xl shadow-lg p-6">

        <img src={pet.image} alt={pet.name}
          className="w-full h-85 object-cover rounded-2xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
        <p className="text-lg text-gray-300 mb-4">{pet.breed}</p>

        <div className="flex gap-3 mb-4">
          <span className="bg-green-500 px-3 py-1 rounded text-black font-semibold">
            {pet.gender}
          </span>
          <span className="bg-blue-500 px-3 py-1 rounded text-black font-semibold">
            {pet.age}
          </span>
          <span className={`px-3 py-1 rounded font-semibold ${
            pet.vaccinated ? "bg-green-400 text-black" : "bg-red-500"
          }`}>
            {pet.vaccinated ? "Vaccinated" : "Not Vaccinated"}
          </span>
        </div>

        <p className="text-gray-400 mb-4">{pet.description}</p>
        <p className="text-gray-300 font-semibold mb-6">
          📍 Location: {pet.location}
        </p>

        <button
          onClick={() => setOpenForm(true)}
          className="bg-green-500 text-black font-bold mt-6 px-6 py-3 
                  rounded-xl hover:bg-green-600 transition"
        >
          Adopt Now 🐾
        </button>

      </div>
    </div>

    {/* FORM POPUP MODAL */}
    {openForm && (
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
        <div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-lg shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Adoption Form 🐕❤️
          </h2>

          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" className="border p-3 rounded" />
            <input type="email" placeholder="Email Address" className="border p-3 rounded" />
            <input
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="Phone Number"
  className="border p-3 rounded"
/>

            <input type="text" placeholder="Full Address" className="border p-3 rounded" />
            <input type="text" placeholder="Own or Rent House?" className="border p-3 rounded" />
            <input type="number" placeholder="Family Members" className="border p-3 rounded" />
            <input type="text" placeholder="Previous Pet Experience?" className="border p-3 rounded" />
            <textarea placeholder="Reason to Adopt?" className="border p-3 rounded h-20" />

            <button
              type="button"
              onClick={() => setOpenForm(false)}
              className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition"
            >
              Submit Request
            </button>

            <button
              onClick={() => setOpenForm(false)}
              className="text-sm text-red-600 underline mt-1"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )}
  </>
);
}

      

export default PetDetails;
