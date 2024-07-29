import React from 'react';
import {Link} from "react-router-dom";

const CountdownTimer = () => {
    const [countdown, setCountdown] = React.useState(0);
    const [number, setNumber] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const onClickHandler = () => {
        setIsRunning(true);
        setCountdown(number);
    }
    const onInputChange = (e) => {
        setNumber(e.target.value);
    }
    React.useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 0) {
                    clearInterval(interval);
                    setIsRunning(false);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);
    return (
        <div>
            <hr/>
            <input type={"number"} onChange={onInputChange}/>
            <button onClick={onClickHandler}>Start the timer</button>
            <h1>{countdown}</h1>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default CountdownTimer;