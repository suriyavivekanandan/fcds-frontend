import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodEntryPage from './pages/FoodEntryPage.jsx';
import FoodTablePage from './pages/FoodTablePage';
import RemainingFoodPage from './pages/RemainingFoodPage';
import BookingPage from './pages/BookingPage';
import FrontPage from './pages/FrontPage'; // Import the new FrontPage component
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
          
        </header>

        {/* Main Content Section */}
        <div className="main-content p-4">
          <Routes>
            <Route path="/" element={<FrontPage />} /> {/* Add FrontPage route */}
            <Route path="/form" element={<FoodEntryPage />} />
            <Route path="/table" element={<FoodTablePage />} />
            <Route path="/remaining" element={<RemainingFoodPage />} />
            <Route path="/bookings" element={<BookingPage />} />
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
