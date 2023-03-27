import React from "react";
import { QuestionItemcomp } from "./QuestionItem";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import axios from "axios";

export class Questions extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);

        this.state = {
            score: 0,
            user: '',
            
        };
    }

    //When submit button is pressed
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.score}, ${this.state.user} `);

        const leaderboard = {
            user: this.state.user,
            score: this.state.score
        }

        // Takes response and puts it into movies.
        axios.post('http://localhost:4000/api/leaderboard', leaderboard)
            .then(() => {
                console.log('SENT');
            });


        this.setState({
            score: 0,
            user: ''
        })

        window.location.href = "/LeaderboardPage";

    }

    updateScore(newScore) {
        this.setState({ score: newScore })
        console.log(this.props.Questions)
    }

    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    onChangeScore(e) {
        this.setState({
            score: e.target.value
        })
    }

    render() {
        return <div>
            {this.props.Questions.map(
                (Quest) => {
                    return <QuestionItemcomp Questions={Quest} key={Quest._id} Refresh={this.props.Refresh} score={this.state.score} updateScore={this.updateScore}></QuestionItemcomp>
                }
            )}

            <Popup trigger={<Button variant="success"> Finish </Button>} modal>
                <Card style={{ width: '99%' }} >
                    <Card.Body>
                        <Card.Title>You have finished the test!</Card.Title>
                        <Card.Text>You scored: {this.state.score}</Card.Text>
                        <Card.Text>If you would like to save your score please input your name below:</Card.Text>
                        
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text" className="form-control" value={this.state.user} onChange={this.onChangeUser} required />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Your score:</label>
                                <input type="number" className="form-control" value={this.state.score} onChange={this.onChangeScore} disabled />
                            </div>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Submit</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Popup>

        </div>
    }
}

