import File from "../models/FileUpload.model.js";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

export const localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file

    console.log("File" + file);

	const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);


    let path = __dirname + "/files/" + Date.now() + "." + file.name.split('.')[1];

    console.log("path" + path);

    file.mv(path,(err)=>{
		console.log(err);
	})

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
