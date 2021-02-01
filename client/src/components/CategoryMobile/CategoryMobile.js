import React from 'react';
import Card from 'react-bootstrap/Card';
import './CategoryMobile.css';
import TagsMobile from '../TagsMobile/TagsMobile';



const CategoryMobile = () => {
    return (
        <Card className="p-0 my-2">
        <Card.Body>
            <Card.Title className="widget-title">CATEGORIES</Card.Title>
            <TagsMobile />

        </Card.Body>
        </Card>
    )};

export default CategoryMobile;
