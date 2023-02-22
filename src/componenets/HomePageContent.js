import React from "react";

export class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <h2>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}