import React, { Component } from "react";

import myImage from "./code.png";

export default class Information extends Component {
    state = {
        fullName: "Wiem Ben Ameur",
        bio: "This is me",
        profession: "xxxxx",
        count: 0,
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("last step is done");
    }
    render() {
        return (
            <div>
                <h1>Full Name : {this.state.fullName}</h1>
                <h2>Bio : {this.state.bio}</h2>
                <h2>Profession : {this.state.profession}</h2>
                <img src={myImage} alt="Oups" />
                <br />
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}
