import express from "express";

console.log("File loaded");

const app = express();

app.get("/", (req, res) => {
  res.send("Working 🔥");
});

app.listen(5000, () => {
  console.log("Running on 5000");
});