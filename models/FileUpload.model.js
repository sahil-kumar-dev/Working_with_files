import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

const File = model("file", fileSchema);

export default File;
