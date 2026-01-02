import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: String,
    breed: String,
    gender: String,
    age: String,
    vaccinated: Boolean,
    description: String,
    location: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Pet", petSchema);
