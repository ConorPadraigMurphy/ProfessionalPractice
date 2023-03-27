import React from "react";
import { LeaderboardItem} from "./LeaderboardItem";

export class Leaderboard extends React.Component {

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

