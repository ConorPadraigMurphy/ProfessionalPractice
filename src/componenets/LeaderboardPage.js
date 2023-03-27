import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import axios from "axios";
import { Leaderboard } from './Leaderboard';

export class LeaderboardPage extends React.Component {

    componentDidMount() {
        //Gets jobs from json on localhost:4000
        axios.get('http://localhost:4000/api/Leaderboard')
            .then(response => {
                console.log(response.data)
                this.setState({ Leaderboard: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    state = { Leaderboard: [] };
    render() {
        return (
            <div>
                <Card>
                    <CardHeader><h1>Leaderboard</h1></CardHeader>
                </Card>
                <Leaderboard Leaderboard={this.state.Leaderboard} Refresh={this.componentDidMount}></Leaderboard>
            </div>
        );
    }
}
