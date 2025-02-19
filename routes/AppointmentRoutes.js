import express from "express";
import { getDoctors, bookAppointment } from "../controllers/AppointmentController.js";

const router = express.Router();


router.get("/doctors", getDoctors);

router.post("/appointments", bookAppointment);

export default router;
