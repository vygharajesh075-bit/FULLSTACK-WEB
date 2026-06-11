import express from "express";
import Routine from "../models/Routine.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// ---------------- CREATE ROUTINE ----------------
router.post("/", protect, async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const routine = new Routine({
      userId: req.user.id,
      title,
      description
    });

    await routine.save();

    res.status(201).json(routine);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------------- GET ALL ROUTINES ----------------
router.get("/", protect, async (req, res) => {
  try {
    const routines = await Routine.find({ userId: req.user.id });
    res.json(routines);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------------- DELETE ROUTINE ----------------
router.delete("/:id", protect, async (req, res) => {
  try {
    const routine = await Routine.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!routine) {
      return res.status(404).json({ error: "Routine not found" });
    }

    res.json({ message: "Routine deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------------- TOGGLE COMPLETE ----------------
router.put("/:id/complete", protect, async (req, res) => {
  try {
    const routine = await Routine.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!routine) {
      return res.status(404).json({ error: "Routine not found" });
    }

    routine.completed = !routine.completed;
    await routine.save();

    res.json(routine);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;