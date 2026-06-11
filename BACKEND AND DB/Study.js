import mongoose from "mongoose";

const studySchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true
    },

    topic: {
      type: String,
      required: true,
      trim: true
    },

    resource: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Study = mongoose.model("Study", studySchema);

export default Study;