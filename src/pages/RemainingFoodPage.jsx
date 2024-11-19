import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Package2, Clock } from "lucide-react";
import { Container, Row, Col, Card, Button, Form, Table, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { format } from 'date-fns'; // Import date-fns for formatting

const RemainingFoodPage = () => {
    const [remainingDishes, setRemainingDishes] = useState([]);
    const [booking, setBooking] = useState({
        name: '',
        charityName: '',
        dishId: '',
        dishName: ''
    });
    const [viewMode, setViewMode] = useState('grid');

    // Function to format the date using date-fns
    const formatDate = (date) => {
        try {
            return format(new Date(date), 'PPpp'); // 'PPpp' gives full date with time
        } catch (error) {
            return "Invalid Date";
        }
    };

    const fetchRemainingDishes = async () => {
        try {
            const response = await axios.get('https://fcds-backend.onrender.com/api/get');
            const filteredDishes = response.data.flatMap(entry =>
                entry.dishes.filter(dish => dish.remainingWeight > 0)
            );
            setRemainingDishes(filteredDishes);
        } catch (error) {
            console.error('Error fetching remaining dishes:', error);
        }
    };

    useEffect(() => {
        fetchRemainingDishes();
    }, []);

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBooking(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        if (!booking.name || !booking.charityName || !booking.dishId) {
            alert('Please fill all fields');
            return;
        }

        try {
            await axios.post('https://fcds-backend.onrender.com/api/book', {
                dishId: booking.dishId,
                dishName: booking.dishName,
                name: booking.name,
                charityName: booking.charityName,
            });
            alert('Booking successful!');
            setBooking({ name: '', charityName: '', dishId: '', dishName: '' });
        } catch (error) {
            console.error('Error booking food:', error);
            alert('Booking failed');
        }
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-primary">Remaining Food Dishes</h1>
                <ButtonGroup>
                    <Button 
                        variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('grid')}
                        className="custom-btn-hover"
                    >
                        Grid View
                    </Button>
                    <Button 
                        variant={viewMode === 'table' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('table')}
                        className="custom-btn-hover"
                    >
                        Table View
                    </Button>
                </ButtonGroup>
            </div>

            {/* Booking Form */}
            {booking.dishId && (
                <Card className="mb-4 shadow-sm custom-card">
                    <Card.Header className="bg-primary text-white">
                        <Card.Title>Book Dish: {booking.dishName}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleBookingSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={booking.name}
                                    onChange={handleBookingChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="charityName"
                                    placeholder="Charity Name"
                                    value={booking.charityName}
                                    onChange={handleBookingChange}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" variant="success" className="w-100 custom-btn-hover">
                                Confirm Booking
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            )}

            {viewMode === 'grid' ? (
                // Grid View
                <Row xs={1} md={2} lg={3} className="g-4">
                    {remainingDishes.map((dish) => (
                        <Col key={dish._id}>
                            <Card className="shadow-sm custom-card">
                                <Card.Body>
                                    <Card.Title>{dish.name}</Card.Title>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <Package2 size={16} />
                                            <span>{dish.remainingWeight}g remaining</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <Clock size={16} />
                                            <span>{formatDate(dish.createdAt)}</span> {/* Use the formatDate function */}
                                        </div>
                                    </div>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Click to book this dish</Tooltip>}
                                    >
                                        <Button 
                                            variant="primary" 
                                            className="w-100 custom-btn-hover"
                                            onClick={() => setBooking(prevState => ({
                                                ...prevState,
                                                dishId: dish._id,
                                                dishName: dish.name,
                                            }))} 
                                        >
                                            Book Now
                                        </Button>
                                    </OverlayTrigger>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                // Table View
                <Card>
                    <Card.Body className="p-0">
                        <div className="table-responsive">
                            <Table hover>
                                <thead className="bg-light">
                                    <tr>
                                        <th>Dish Name</th>
                                        <th>Remaining Weight</th>
                                        <th>Time Added</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {remainingDishes.map((dish) => (
                                        <tr key={dish._id}>
                                            <td>{dish.name}</td>
                                            <td>{dish.remainingWeight}g</td>
                                            <td>{formatDate(dish.createdAt)}</td> {/* Use the formatDate function */}
                                            <td>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip>Click to book this dish</Tooltip>}
                                                >
                                                    <Button
                                                        variant="primary"
                                                        className="custom-btn-hover"
                                                        onClick={() => setBooking(prevState => ({
                                                            ...prevState,
                                                            dishId: dish._id,
                                                            dishName: dish.name,
                                                        }))} 
                                                    >
                                                        Book Now
                                                    </Button>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            )}

            {/* Empty State */}
            {remainingDishes.length === 0 && (
                <div className="text-center py-5">
                    <Package2 size={48} className="mb-3 text-muted" />
                    <h3>No dishes available</h3>
                    <p className="text-muted">Check back later for available dishes.</p>
                </div>
            )}
        </Container>
    );
};

export default RemainingFoodPage;
