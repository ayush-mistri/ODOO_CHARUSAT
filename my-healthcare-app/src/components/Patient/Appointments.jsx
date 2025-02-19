import React, { useState, useEffect } from "react";
import axios from "axios";

function Appointments() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch doctors on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors") // Fetch only doctors
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  // Handle appointment booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!selectedDoctor || !date) {
      setMessage("Please select a doctor and a date.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/appointments", {
        doctorName: selectedDoctor,
        date: date,
      });

      setMessage(response.data.message);
      setSelectedDoctor("");
      setDate("");
    } catch (error) {
      setMessage("Error booking appointment.");
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Book an Appointment</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Doctor Selection */}
        <div>
          <label htmlFor="doctor" className="block mb-2 text-gray-900 font-medium">
            Select Doctor:
          </label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 focus:ring focus:ring-blue-300"
            required
          >
            <option value="">-- Choose a Doctor --</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block mb-2 text-gray-900 font-medium">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default Appointments;
