import React, { Component } from "react";
import Information from "./Components/Information";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Information.css";
export default class App extends Component {
    state = {
        show: "false",
    };
    render() {
        return (
            <div>
                <Button
                    variant="danger"
                    className="first"
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    {this.state.show ? "Show" : "Hide"}
                </Button>{" "}
                {this.state.show ? null : <Information />}
            </div>
        );
    }
}
