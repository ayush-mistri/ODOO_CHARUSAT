import Appointment from "../models/Appointment.js";
import User from "../models/AuthModels.js";


export const getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ userType: "Doctor" }).select("name");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors" });
  }
};


export const bookAppointment = async (req, res) => {
    const { doctorName, date } = req.body;
  
    if (!doctorName || !date) {
      return res.status(400).json({ message: "Doctor name and date are required" });
    }
  
    try {
      const appointment = new Appointment({ doctorName, date });
      await appointment.save();
      res.status(201).json({ message: "Appointment booked successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error booking appointment" });
    }
  };
  