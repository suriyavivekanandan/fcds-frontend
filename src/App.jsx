import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodEntryForm from './components/FoodEntryForm';
import FoodEntryTable from './components/FoodEntryTable';
import RemainingFoodPage from './components/RemainingFoodPage';
import BookingTable from './components/BookingTable';  // Import the BookingTable component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <h1 className="text-center text-light">Food Menu Recommendation and Food Waste Management</h1>
                </header>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Food Waste Management</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/form" className="nav-link">Food Entry Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/table" className="nav-link">Food Entries Table</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/remaining" className="nav-link">Remaining Food Page</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/bookings" className="nav-link">Booking Details</Link> {/* New link */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="main-content p-4">
                    <Routes>
                        <Route path="/form" element={<FoodEntryForm />} />
                        <Route path="/table" element={<FoodEntryTable />} />
                        <Route path="/remaining" element={<RemainingFoodPage />} />
                        <Route path="/bookings" element={<BookingTable />} /> {/* New route */}
                    </Routes>
                </div>
                
                <footer className="footer bg-dark text-light text-center py-3 mt-5">
                    <p>&copy; 2024 Food Waste Management. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
