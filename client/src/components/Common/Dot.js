import React, {useState} from "react";

const Dot = (colour) => {
    return <span style={{
        height: "15px",
        width: "15px",
        backgroundColor: colour,
        borderRadius: "50%",
        display: "inline-block",
        textAlign: "center",
        alignContent: "center"
    }}>
    </span>
};

export default Dot;