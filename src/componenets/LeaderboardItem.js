import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export class LeaderboardItem extends React.Component {

    render() {
        return (
            <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>

                <Card style={{ width: '80%' }} >
                    <CardHeader><h2>{this.props.Leaderboard.user}</h2></CardHeader>
                    <Card.Body><h3>Score : {this.props.Leaderboard.score}</h3></Card.Body>
                </Card>

            </div>
        );
    }
}