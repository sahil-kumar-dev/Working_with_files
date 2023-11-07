import { Schema, model } from "mongoose";
import nodemailer from 'nodemailer'

const fileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

fileSchema.post("save", async (doc) => {
  try {
    console.log("Doc: ",doc);
    let transporter = nodemailer.createTransport({
      host:process.env.MAIL_HOST,
      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
      }
    })

    let info = await transporter.sendMail({
      from:"Code world",
      to:doc.email,
      subject:"New file uploaded to cloudinary",
      html:"<h2>Hello guys</h2>,<p>File uploaded </p>"
    });

    console.log(info);
  } catch (error) {
    console.error(error);
  }
})

const File = model("file", fileSchema);

export default File;