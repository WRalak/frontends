'use client'

import { useState } from "react";
import axios from "axios";

export default function GuestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    idOrPassport: "",
    phone: "",
    residency: "",
    vehicleDetails: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/guests", formData);
      alert(response.data.message);
      setFormData({
        fullName: "",
        idOrPassport: "",
        phone: "",
        residency: "",
        vehicleDetails: "",
        date: "",
      });
    } catch (err) {
      alert(err.response.data.error || "Submission failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-md max-w-lg mx-auto mt-8"
    >
      <h2 className="text-xl font-bold mb-4">Guest Details</h2>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="input"
      />
      <input
        type="text"
        name="idOrPassport"
        value={formData.idOrPassport}
        onChange={handleChange}
        placeholder="ID or Passport"
        required
        className="input"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="input"
      />
      <input
        type="text"
        name="residency"
        value={formData.residency}
        onChange={handleChange}
        placeholder="Residency"
        required
        className="input"
      />
      <input
        type="text"
        name="vehicleDetails"
        value={formData.vehicleDetails}
        onChange={handleChange}
        placeholder="Vehicle Details (optional)"
        className="input"
      />
      <input
        type="datetime-local"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().slice(0, 16)}
        required
        className="input"
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
