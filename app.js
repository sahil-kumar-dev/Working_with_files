import express, { urlencoded } from "express";
import fileUpload from 'express-fileupload'
import { localFileUpload } from "./controllers/FileUpload.controller.js";
import uploadRoute from './routes/FileUpload.routes.js'

export const app = express()

app.use(express.json())

app.use(urlencoded({extended:true}))

app.use(fileUpload({
	useTempFiles:true,
	tempFileDir:'/tmp/'
}))

app.use('/api/upload',uploadRoute)


app.all((req,res)=>{
	res.send("<h1>404 Page not found</h1>")
})