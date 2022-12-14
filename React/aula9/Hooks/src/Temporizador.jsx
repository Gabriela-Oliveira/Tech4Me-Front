import React, {useEffect, useState } from "react";

function Timer() {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {setCounter(counter - 1)}, 1000);
        }
    }, [counter]);

    return(
        <span>{counter}</span>
    )
}



export default Timer;