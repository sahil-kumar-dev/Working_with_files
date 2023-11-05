import { Router } from "express";
import { imageUpload, localFileUpload } from "../controllers/FileUpload.controller.js";

const router = Router()

router.post('/localFileUpload',localFileUpload)

router.post('/imageUpload',imageUpload)


export default router