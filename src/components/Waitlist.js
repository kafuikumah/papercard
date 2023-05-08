import React from "react";

function Waitlist(props) {
    console.log(props);
    return <h1>Waitlist, {props.heroText}, {props.buttonType}</h1>;
}

export default Waitlist;