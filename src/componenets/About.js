import React from "react";
import Card from 'react-bootstrap/Card';
export class About extends React.Component {
    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <Card style={{ width: '90%' }}>
                    <Card.Header><h3>About</h3></Card.Header>
                    <Card.Body>This website was developed by Rohan and Conor for our Professional practice in IT assignment in our third year of computing in software development in ATU</Card.Body>
                </Card>
            </div>
        );
    }
}