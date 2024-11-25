'use client'


import React, { useState } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idOrPassport: '',
    phone: '',
    residency: '',
    vehicleDetails: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/guests', formData);
      alert('Details submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting details:', error);
      alert('Failed to submit details.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="idOrPassport"
          placeholder="ID or Passport"
          value={formData.idOrPassport}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="residency"
          placeholder="Residency"
          value={formData.residency}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="vehicleDetails"
          placeholder="Vehicle Details (optional)"
          value={formData.vehicleDetails}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserPage;

