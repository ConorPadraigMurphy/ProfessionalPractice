import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
export  default ()=>{

    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
            <Card style={{ width: '80%' }} >
                <Card.Header><h3>Results:</h3></Card.Header>
            </Card>
        </div>
    );

}