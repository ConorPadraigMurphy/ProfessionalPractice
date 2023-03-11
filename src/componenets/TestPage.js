import React from "react";
import { Questions } from "./Questions";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

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

        //Returns shuffled array
        return array;
    }


    state = { Questions: [{}] };

    render() {
        return (
            <div style={{ margin: '20px'}}>
                <h2>Theory Test:</h2>
                <Questions Questions={this.state.Questions} Refresh={this.componentDidMount}></Questions>

                <Popup trigger={<Button  variant="success"> Finish </Button>} modal>

                    <Card style={{ width: '99%' }} >
                        <Card.Body>
                            <Card.Title>You have finished the test!</Card.Title>
                            <Card.Text>You scored:</Card.Text>
                            <Card.Text>If you would like to save your score please input your name below:</Card.Text>
                            <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <label>Name: </label>
                                    <input type="text" className="form-control"required />
                                </div>

                                <br></br>
                                <Button variant="success" type="submit" value="Submit">Submit</Button>
                            </form>
                        </Card.Body>
                    </Card>

                </Popup>

            </div>
        );
    }
}