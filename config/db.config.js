import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection to db successful.");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connectToDB;
