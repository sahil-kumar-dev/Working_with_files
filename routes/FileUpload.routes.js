import { Router } from "express";
import { localFileUpload } from "../controllers/FileUpload.controller.js";

const router = Router()

router.post('/localFileUpload',localFileUpload)


export default router