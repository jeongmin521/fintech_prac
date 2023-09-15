import React from "react";

const EventComponent = () => {
    const handleClick = () => {
        alert("클릭");
    };
    const handlChange = (event) => {
        console.log(event.target.value);
    };

    return(
    <div>
        <input onChange={handlChange}></input>
        <button onClick = {handleClick}>전송</button>
    </div>
    )
};

export default EventComponent