import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${query}`
    );

    res.json(response.data);

  } catch (err) {
    res.status(500).json({ error: "Movie API error" });
  }
});

export default router;