import React from "react";
import { Questions } from "./Questions";
import axios from "axios";


export class TestPage extends React.Component {

    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        //Gets questions/answers from json on localhost:4000
        axios.get('http://localhost:4000/api/questions')
            .then(response => {
                //console.log(response.data)
                this.setState({ Questions: this.shuffle(response.data) });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //Shuffles data array 
    shuffle(array) {
        //Gets ArrayIndex length
        let currentIndex = array.length, randomIndex;
        //console.log(currentIndex);

        // Loops While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            //Finding a random element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }


        array = array.slice(0, localStorage.questionAmount);

        //Returns shuffled array
        return array;
    }


    state = { Questions: [{}] };

    render() {
        return (
            <div style={{ margin: '20px'}}>
                <h2>Theory Test:</h2>
                <Questions Questions={this.state.Questions} Refresh={this.componentDidMount}></Questions>
            </div>
        );
    }
}