import React from "react";
import { QuestionItemcomp, score } from "./QuestionItem";
import { Link } from "react-router-dom";
import { useState } from "react";
export class Questions extends React.Component {

    constructor() {
        super()
        this.state = {
            score: 0
        };
        this.updateScore = this.updateScore.bind(this)
    }

    updateScore(newScore) {
        this.setState({ score: newScore })
        console.log(this.props.Questions)
    }

    render() {
        return <div>
            {this.props.Questions.map(
                (Quest) => {
                    return <QuestionItemcomp Questions={Quest} key={Quest._id} Refresh={this.props.Refresh} score={this.state.score} updateScore={this.updateScore}></QuestionItemcomp>
                }
            )}

            <Link to="/TestPage/Results" state={this.state.score}>See Results</Link>

        </div>
    }
}