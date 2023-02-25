import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

export class QuestionItemcomp extends React.Component {
    constructor() {
        super();
    }

    // renders the cards with the questions
    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <Card style={{ width: '65%' }} >
                   <Card.Header><h3>{this.props.Questions.question}</h3></Card.Header>
                    <Card.Body>
                        <div style={{ display: "flex" }}>
                            {/* <p>{this.props.Questions.answer1}</p>
                            <p>{this.props.Questions.answer2}</p>
                            <p>{this.props.Questions.answer3}</p>
                            <p>{this.props.Questions.answer4}</p> */}
                        </div>
                    </Card.Body>
                    <Button vertical variant = "outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>Answer 1</Button>
                    <Button vertical variant = "outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>Answer 2</Button>
                    <Button vertical variant = "outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>Answer 3</Button>
                    <Button vertical variant = "outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>Answer 4</Button>
                    
                </Card>
            </div>
        );
    }
}
