import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export class QuestionItemcomp extends React.Component {

    //Checks if users choice is correct to correctAnswer
    checkAnswer(selectedAnswer) {
        if (selectedAnswer === this.props.Questions.correctAnswer) {
          alert('Correct answer!');
        } else {
          alert('Wrong answer!');
        }
      }

    // renders the cards with the questions
    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <Card style={{ width: '65%' }} >
                    <Card.Header><h3>{this.props.Questions.question}</h3></Card.Header>
                    <Button onClick={() => this.checkAnswer(this.props.Questions.answer1)} vertical variant="outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer1}</Button>
                    <Button onClick={() => this.checkAnswer(this.props.Questions.answer2)} vertical variant="outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer2}</Button>
                    <Button onClick={() => this.checkAnswer(this.props.Questions.answer3)} vertical variant="outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer3}</Button>
                    <Button onClick={() => this.checkAnswer(this.props.Questions.answer4)} vertical variant="outline-dark" style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer4}</Button>
                </Card>
            </div>
        );
    }
}
