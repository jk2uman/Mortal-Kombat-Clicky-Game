import React from "react";
import "./Routine.css";

const Routine = props => <div className="routine">
    <div className="music">
        <iframe title="choose your destiny" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/81451959&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    {props.children}</div>;

export default Routine;