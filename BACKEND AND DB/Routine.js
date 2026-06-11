import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Routine = mongoose.model("Routine", routineSchema);

export default Routine;   // 🔥 REQUIRED