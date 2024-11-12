import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';  // Bootstrap components
import './FoodEntryForm.css';

const FoodEntryForm = ({ onAddEntry }) => {
    const [date, setDate] = useState('');
    const [mealType, setMealType] = useState('Breakfast');
    const navigate = useNavigate();

    const [dishes, setDishes] = useState([{ name: '', initialWeight: '', consumedWeight: '', remainingWeight: '' }]);

    const handleAddDish = () => {
        setDishes([...dishes, { name: '', initialWeight: '', consumedWeight: '', remainingWeight: '' }]);
    };

    const handleChange = (index, field, value) => {
        const newDishes = [...dishes];
        newDishes[index][field] = value;

        const initial = parseFloat(newDishes[index].initialWeight) || 0;
        const consumed = parseFloat(newDishes[index].consumedWeight) || 0;

        if (initial > 0 && consumed > 0) {
            if (initial >= consumed) {
                newDishes[index].remainingWeight = initial - consumed;
            } else {
                newDishes[index].consumedWeight = '';
                alert('Consumed weight cannot be greater than initial weight.');
            }
        }

        setDishes(newDishes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entry = { date, mealType, dishes };
        try {
            const response = await axios.post('https://fcds-backend.onrender.com/api/create', entry);
            onAddEntry(response.data);
            navigate('/table');
        } catch (error) {
            console.error('Error creating food entry:', error);
        }
    };

    return (
        <div className="container py-4">
            <Card className="shadow-lg">
                <Card.Header as="h5" className="bg-primary text-white text-center">Add Food Entry</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Meal Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={mealType}
                                onChange={(e) => setMealType(e.target.value)}
                            >
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                            </Form.Control>
                        </Form.Group>

                        {dishes.map((dish, index) => (
                            <div key={index} className="dish-entry">
                                <Form.Group className="mb-3">
                                    <Form.Label>Dish Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter dish name"
                                        value={dish.name}
                                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Initial Weight (g)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter initial weight"
                                        value={dish.initialWeight}
                                        onChange={(e) => handleChange(index, 'initialWeight', e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Consumed Weight (g)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter consumed weight"
                                        value={dish.consumedWeight}
                                        onChange={(e) => handleChange(index, 'consumedWeight', e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Remaining Weight (g)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={dish.remainingWeight}
                                        readOnly
                                    />
                                </Form.Group>
                            </div>
                        ))}

                        <div className="mb-3">
                            <Button variant="outline-primary" onClick={handleAddDish} className="add-dish-btn">
                                Add Another Dish
                            </Button>
                        </div>

                        <Button variant="primary" type="submit" className="submit-btn">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodEntryForm;
