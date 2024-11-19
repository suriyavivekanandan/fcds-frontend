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
                        <div className="container bg-dark-gradient">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                    <img
                                        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
                                        alt="Brand Logo"
                                        className="brand-logo"
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                    <h1 className="ms-2 brand-title">FCAI</h1>
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

                    {/* Hero Section */}
                    <div className="container my-5">
                        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                                <h1 className="display-4 fw-bold lh-1 text-dark">
                                    Food Menu Recommendation And Food Waste Management
                                </h1>
                                <p className="lead">
                                    The project aims to provide intelligent food menu recommendations to optimize meal planning and reduce excess. It promotes sustainable practices by tracking and managing food usage effectively. This approach helps minimize food waste and encourages responsible consumption.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                        Default
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                                <img
                                    className="rounded-lg-3"
                                    src="https://www.coolest-gadgets.com/wp-content/uploads/2024/06/Food-Waste-Statistics.webp" // Replace with your image path or URL
                                    alt="Hero"
                                    width="720"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container px-4 py-5" id="custom-cards">
                    <h1 className="display-4 fw-bold lh-1 text-dark">
                                    Aim of Our project
                                </h1>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ 
                backgroundImage: 'url("https://media.istockphoto.com/id/1355684614/photo/throwing-away-leftover-food-in-trash.jpg?s=2048x2048&w=is&k=20&c=Y97uH80K4xNdsxJVFU9ogW1cvMNgi4xGTxaf9CM8_4I=")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"> To create intelligent food menu recommendations that help users plan meals more effectively</h3>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ 
                backgroundImage: 'url("https://media.istockphoto.com/id/660153840/photo/man-throwing-leftovers-to-the-trash-bin.webp?a=1&b=1&s=612x612&w=0&k=20&c=JiNYXZvmFl9kOEBkxeQXhrC9rCZG3hVb7q5qQbwfa7A=")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">To track and manage food consumption patterns to minimize excess and spoilage</h3>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ 
                backgroundImage: 'url("https://media.istockphoto.com/id/1160205101/photo/making-compost-from-vegetable-leftovers.jpg?s=612x612&w=0&k=20&c=YmrOFC2por-Anbvsbzj-JuCuygsFALvjO0nN2SL0KQw=")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">To educate and assist individuals and organizations in making more informed food choices, foster</h3>

                </div>
            </div>
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
