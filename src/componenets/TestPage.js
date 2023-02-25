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
                console.log(response.data)
                this.setState({ Questions: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    state = { Questions: [] };
    render() {
        return (
            <div>
                <h2>Test Page</h2>
                <Questions Questions={this.state.Questions} Refresh={this.componentDidMount}></Questions>
                
            </div>
        );
    }
}