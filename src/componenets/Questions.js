import React from "react";
import { QuestionItemcomp } from "./QuestionItem";
import axios from "axios";
export class Questions extends React.Component {
    render() {
        return this.props.Questions.map(
            (Quest) => {
                return <QuestionItemcomp Questions={Quest} key={Quest._id} Refresh={this.props.Refresh}></QuestionItemcomp>
            }
        );
    }

}