import React, { Component } from "react";
import "./LoginPage.scss";

class LoginPage extends Component {
    state = {};
    render() {
        return (
            <div className="login-page-wrapper">
                <div className="login-form-wrapper">
                    <p className="game-title">Pong Multiplayer</p>
                    <input
                        className="login-input"
                        placeholder="Your nickname"
                    ></input>
                </div>
            </div>
        );
    }
}

export default LoginPage;
