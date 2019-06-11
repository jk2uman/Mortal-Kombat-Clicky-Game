import React from "react";
import "./Navigate.css";

const Navigate = props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h3 className="navbar-text">Mortal Kombat Clicky Game</h3>
        <span className="navbar-text your-guess">{props.yourGuess}</span>
        <span className="navbar-text current-score">Current Score: {props.currentScore}</span>
        <span className="navbar-text high-score">High Score: {props.highScore}</span>
    </nav>

);

export default Navigate;