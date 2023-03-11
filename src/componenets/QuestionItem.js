import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import CardHeader from 'react-bootstrap/esm/CardHeader';
let score = 0;
export class QuestionItemcomp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      correctAnswer: null
    };
  }

  //Checks if users choice is correct to correctAnswer
  checkAnswer(selectedAnswer) {
    const isCorrect = selectedAnswer === this.props.Questions.correctAnswer;
    if (isCorrect) {
      alert('Correct answer!');
      score++;
      console.log('Score :' + score);
    } else {
      alert('Wrong answer!');
    }

    this.setState({
      answered: true,
      correctAnswer: isCorrect,
    });
  }

  // renders the cards with the questions
  render() {
    return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <Card style={{ width: '80%' }} >
          <Card.Header><h3>{this.props.Questions.question}</h3></Card.Header>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer1)} disabled={this.state.answered} vertical variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer1 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '10px' }}>{this.props.Questions.answer1}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer2)} disabled={this.state.answered} vertical variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer2 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer2}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer3)} disabled={this.state.answered} vertical variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer3 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer3}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer4)} disabled={this.state.answered} vertical variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer4 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer4}</Button>
        </Card>
      </div>
    );
  }
}
