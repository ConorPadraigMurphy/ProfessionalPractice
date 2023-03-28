import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export class QuestionItemcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      correctAnswer: null
    };
  }

  checkAnswer(selectedAnswer) {
    const isCorrect = selectedAnswer === this.props.Questions.correctAnswer;
    if (isCorrect) {
      this.props.updateScore(this.props.score + 1);
    }

    this.setState({
      answered: true,
      correctAnswer: isCorrect,
    });
  }

  render() {
    return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <Card style={{ width: '90%' }}>
          <Card.Header><h3>Question {this.props.questionNumber}: {this.props.Questions.question}</h3></Card.Header>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer1)} disabled={this.state.answered} variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer1 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer1}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer2)} disabled={this.state.answered} variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer2 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer2}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer3)} disabled={this.state.answered} variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer3 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer3}</Button>

          <Button onClick={() => this.checkAnswer(this.props.Questions.answer4)} disabled={this.state.answered} variant={this.state.answered && this.props.Questions.correctAnswer === this.props.Questions.answer4 ? 'success' : this.state.answered ? 'danger' : 'outline-dark'} style={{ display: 'flex', justifyContent: 'start-flex', alignItems: 'start', margin: '5px' }}>{this.props.Questions.answer4}</Button>
        </Card>
      </div>
    );
  }
}
