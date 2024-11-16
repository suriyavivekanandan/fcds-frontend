// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodEntryForm from './components/FoodEntryForm';
import FoodEntryTable from './components/FoodEntryTable';
import RemainingFoodPage from './components/RemainingFoodPage';
import BookingTable from './components/BookingTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faTable, faTh, faUsers } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                {/* Header Section */}
                <header>
                    <div className="px-3 py-2 header-main border-bottom">
                        <div className="container">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                    {/* Replace this with your brand logo */}
                                    <img src="components\images\1.jpg" alt="Brand Logo" className="brand-logo" />
                                    <h1 className="ms-2 brand-title">FCI</h1>
                                </a>

                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small nav-links">
                                    <li>
                                        <Link to="/" className="nav-link nav-item-home">
                                            <FontAwesomeIcon icon={faHome} className="icon mx-auto mb-1" />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/form" className="nav-link nav-item-form">
                                            <FontAwesomeIcon icon={faTachometerAlt} className="icon mx-auto mb-1" />
                                            Food Entry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/table" className="nav-link nav-item-table">
                                            <FontAwesomeIcon icon={faTable} className="icon mx-auto mb-1" />
                                            Food Table
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/remaining" className="nav-link nav-item-remaining">
                                            <FontAwesomeIcon icon={faTh} className="icon mx-auto mb-1" />
                                            Remaining
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/bookings" className="nav-link nav-item-bookings">
                                            <FontAwesomeIcon icon={faUsers} className="icon mx-auto mb-1" />
                                            Bookings
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                 
                </header>
                
                {/* Main Content Section */}
                <div className="main-content p-4">
                    <Routes>
                        <Route path="/form" element={<FoodEntryForm />} />
                        <Route path="/table" element={<FoodEntryTable />} />
                        <Route path="/remaining" element={<RemainingFoodPage />} />
                        <Route path="/bookings" element={<BookingTable />} />
                    </Routes>
                </div>
                
                {/* Footer Section */}
                <footer className="footer text-center py-3 mt-5">
                    <p className="footer-text">&copy; 2024 Food Waste Management. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
