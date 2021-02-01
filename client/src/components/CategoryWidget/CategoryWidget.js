import React from 'react';
import Card from 'react-bootstrap/Card';
import './CategoryWidget.css';
import Tags from '../Tags/Tags';


const CategoryWidget = () => {
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title className="widget-title">CATEGORIES</Card.Title>
            <Tags />

        </Card.Body>
        </Card>
    )};

export default CategoryWidget;
