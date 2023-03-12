import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useLocation } from 'react-router-dom';
export default ()=>{

    const location = useLocation();

    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
            <Card style={{ width: '80%' }} >
                <Card.Header><h3>Results:</h3></Card.Header>
                <h1>{location.state}</h1>
            </Card>
        </div>
    );

}