import express, { urlencoded } from "express";
import fileUpload from 'express-fileupload'
import { localFileUpload } from "./controllers/FileUpload.controller.js";

export const app = express()

app.use(express.json())

app.use(urlencoded({extended:true}))

app.use(fileUpload())

app.use('/api/upload',localFileUpload)


app.all((req,res)=>{
	res.send("<h1>404 Page not found</h1>")
})