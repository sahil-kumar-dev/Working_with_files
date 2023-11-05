import express, { urlencoded } from "express";
import fileupload from 'express-fileupload'
import { fileUpload } from "./controllers/FileUpload.controller.js";

export const app = express()

app.use(express.json())

app.use(urlencoded({extended:true}))

app.use(fileupload())

app.use('/api/upload',fileUpload)


app.all((req,res)=>{
	res.send("<h1>404 Page not found</h1>")
})