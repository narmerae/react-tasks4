import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";

const Stopwatch = () => {
    const [stopwatch, setStopwatch] = useState(false);
    const [count, setCount] = useState(0);
    let timeInterval = useRef(null);

    const handleStart = () => {
        if(stopwatch) return;
        setStopwatch(true);
        timeInterval.current = setInterval(() => {
            setCount(prevState => {
                console.log(prevState+1)
                return prevState+1;
            })
        },1000)
    }

    const handleStop = () => {
        if(!stopwatch) return;
        setStopwatch(false)
        clearInterval(timeInterval.current);
    }

    return (
        <div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <p>{count}</p>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );

};

export default Stopwatch;