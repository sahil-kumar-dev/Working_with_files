import { config } from "dotenv";
import connectToDB from "./config/db.config.js";
import connectToCloudinary from "./config/cloudinary.config.js";
import { app } from "./app.js";

config();
connectToDB();
connectToCloudinary();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
