import { Router } from "express";
import {
  imageUpload,
  localFileUpload,
  videoUpload,
} from "../controllers/FileUpload.controller.js";

const router = Router();

router.post("/localFileUpload", localFileUpload);

router.post("/imageUpload", imageUpload);

router.post("/videoUpload", videoUpload);

export default router;
