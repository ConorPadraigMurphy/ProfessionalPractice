import React from "react";
import { LeaderboardItem} from "./LeaderboardItem";
import { Link, Navigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from "axios";

export class Leaderboard extends React.Component {

    constructor() {
        super();

    }

    render() {
        return <div>
            {this.props.Leaderboard.map(
                (Leader) => {
                    return <LeaderboardItem Leaderboard={Leader} key={Leader._id} Refresh={this.props.Refresh}></LeaderboardItem>
                }
            )}     
        </div>
    }
}

