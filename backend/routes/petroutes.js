import express from "express";
import Pet from "../models/pet.js";

const router = express.Router();

// CREATE
router.post("/add", async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.json({ message: "Pet Added", pet });
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

// READ SINGLE PET
router.get("/:id", async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  res.json(pet);
});

// UPDATE PET
router.put("/:id", async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Updated", pet });
});

// DELETE PET
router.delete("/:id", async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
