import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection to db successful.");
    })
    .catch((err) => {
      console.log("DB ERR: " + err.message);
      process.exit(1)
    });
};

export default connectToDB;
