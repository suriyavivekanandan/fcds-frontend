import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookingTable.css'; // Add this import statement at the top of your BookingTable.jsx


const BookingTable = () => {
    const [bookings, setBookings] = useState([]);

    // Fetch booking data when the component mounts
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('https://fcds-backend.onrender.com/api/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="container my-5">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title mb-4">Booking Details</h1>
                    <table className="table table-striped table-hover">
                        <thead className="table-success">
                            <tr>
                                <th>Booking Name</th>
                                <th>Charity/Organization Name</th>
                                <th>Dish Name</th>
                                <th>Booking Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking._id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.charityName}</td>
                                    <td>{booking.dishName}</td>
                                    <td>{new Date(booking.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingTable;