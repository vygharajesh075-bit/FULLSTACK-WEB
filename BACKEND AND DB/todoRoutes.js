import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// ADD
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text
  });

  res.json(todo);
});

// TOGGLE
router.put("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();

  res.json(todo);
});

export default router;