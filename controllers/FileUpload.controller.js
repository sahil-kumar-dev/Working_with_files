import File from "../models/FileUpload.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cloudinary from "cloudinary";

export const localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    let path = `${__dirname}/files/${Date.now()}.${file.name.split(".")[1]}`;

    file.mv(path, (err) => {
      console.log(err);
    });

    res.status(200).json({
      success: true,
      message: "Local file uploaded succesfully.",
    });
  } catch (error) {
    res.status(502).json({
      success: false,
      message: error.message,
    });
  }
};

//Image upload handler

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
  const options = {
    folder,
    resource_type: "auto",
  };
  return await cloudinary.v2.uploader.upload(file.tempFilePath, options);
}

export const imageUpload = async (req, res) => {
  try {
    //fetch data

    const { name, tags, email } = req.body;

    if (!name || !tags || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory.",
      });
    }

    const file = req.files.imageFile;

    //Validation

    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported.",
      });
    }

    const response = await uploadFileToCloudinary(file, "sample");

    //save to database

    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    await fileData.save();

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully.",
    });
  } catch (error) {
    res.status(502).json({
      success: false,
      message: "Error:" + error,
    });
  }
};

export const videoUpload = async (req, res) => {
  try {
    const { name, email, tags } = req.body;

    if (!name || !tags || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory.",
      });
    }

    const file = req.files.videoFile;

    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();

    console.log(fileType);

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported.",
      });
    }

    console.log(file);
    const response = await uploadFileToCloudinary(file, "sample");
  } catch (error) {
    res.status(502).json({
      success: false,
      message: "Error:" + error.message,
    });
  }
};
