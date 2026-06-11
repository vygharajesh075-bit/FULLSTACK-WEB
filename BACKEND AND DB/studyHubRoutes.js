import express from "express";
import Study from "../models/Study.js";

const router = express.Router();


// ================= GET ALL STUDY =================
router.get("/", async (req, res) => {
  try {
    const data = await Study.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================= ADD STUDY (FROM FRONTEND) =================
router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body); // debug

    const newStudy = await Study.create(req.body);

    res.json(newStudy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================= TEST ROUTE (MANUAL INSERT) =================
router.get("/add-test", async (req, res) => {
  try {
    const newData = await Study.create({
      subject: "Math",
      topic: "Algebra",
      resource: "https://example.com"
    });

    res.json({
      message: "Test data added successfully ✅",
      data: newData
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;