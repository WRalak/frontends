'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/guests');
        console.log('Response data:', response.data); // Debug response data
        if (Array.isArray(response.data)) {
          setGuests(response.data);
        } else {
          console.error('Data is not an array:', response.data);
          setGuests([]); // Fallback to an empty array
        }
      } catch (err) {
        console.error('Error fetching guests:', err);
        setError('Failed to fetch guests');
      } finally {
        setLoading(false);
      }
    };
  
    fetchGuests();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Page</h1>
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border p-2">Full Name</th>
            <th className="border p-2">ID/Passport</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Residency</th>
            <th className="border p-2">Vehicle</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest._id}>
              <td className="border p-2">{guest.fullName}</td>
              <td className="border p-2">{guest.idOrPassport}</td>
              <td className="border p-2">{guest.phone}</td>
              <td className="border p-2">{guest.residency}</td>
              <td className="border p-2">{guest.vehicleDetails || 'N/A'}</td>
              <td className="border p-2">{guest.date}</td>
              <td className="border p-2">{guest.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
