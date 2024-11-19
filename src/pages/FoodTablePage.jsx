// FoodEntryTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Badge, Spinner } from 'react-bootstrap';
import { Trash, UtensilsCrossed, Calendar, Clock, AlertCircle } from 'lucide-react';
import './FoodEntryTable.css';

const FoodEntryTable = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://fcds-backend.onrender.com/api/get');
            setEntries(response.data);
        } catch (error) {
            console.error('Error fetching food entries:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://fcds-backend.onrender.com/api/delete/${id}`);
            setEntries(entries.filter(entry => entry._id !== id));
        } catch (error) {
            console.error('Error deleting food entry:', error);
        }
    };

    const getMealTypeColor = (mealType) => {
        switch (mealType.toLowerCase()) {
            case 'breakfast': return 'meal-badge-breakfast';
            case 'lunch': return 'meal-badge-lunch';
            case 'dinner': return 'meal-badge-dinner';
            default: return 'meal-badge-default';
        }
    };

    // Formatting time to 12-hour format with AM/PM
    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Spinner animation="border" variant="primary" />
                <p>Loading your food entries...</p>
            </div>
        );
    }

    return (
        <div className="food-entry-wrapper">
            <Card className="main-card">
                <Card.Header className="custom-header">
                    <UtensilsCrossed className="header-icon" size={24} />
                    <h3>Food Waste Tracking Dashboard</h3>
                </Card.Header>
                
                <Card.Body className="custom-body">
                    {entries.length === 0 ? (
                        <div className="empty-state">
                            <AlertCircle size={48} />
                            <h4>No Entries Found</h4>
                            <p>Start tracking your food waste by adding entries.</p>
                        </div>
                    ) : (
                        <div className="table-container">
                            {entries.map((entry) => (
                                <div key={entry._id} className="entry-card">
                                    <div className="entry-header">
                                        <div className="entry-date">
                                            <Calendar size={18} />
                                            <span>{new Date(entry.date).toLocaleDateString()}</span>
                                            <Clock size={18} />
                                            <span>{formatTime(new Date(entry.date))}</span> {/* Updated time formatting */}
                                        </div>
                                        <Badge className={`meal-type ${getMealTypeColor(entry.mealType)}`}>
                                            {entry.mealType}
                                        </Badge>
                                    </div>
                                  
                                    <div className="dishes-grid">
                                        {entry.dishes.map((dish, index) => (
                                            <div key={index} className="dish-card">
                                                <h5>{dish.name}</h5>
                                                <div className="weight-badges">
                                                    <span className="weight-badge initial">
                                                        Initial: {dish.initialWeight}g
                                                    </span>
                                                    <span className="weight-badge consumed">
                                                        Consumed: {dish.consumedWeight}g
                                                    </span>
                                                    <span className="weight-badge remaining">
                                                        Remaining: {dish.remainingWeight}g
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="entry-footer">
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(entry._id)}
                                        >
                                            <Trash size={16} /> Delete Entry
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodEntryTable;
