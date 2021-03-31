import React from "react";

const Boton = (props) => {
    return(
        <button className="button_vote" onClick={props.handleClick}>{props.text}</button>
    )
}

export default Boton