import React from 'react';
import {Link} from "react-router-dom";

const PreviousState = () => {
    const [count, setCount] = React.useState(1);
    const prevCountRef = React.useRef(0);
    const onClickHandler = () => {
        setCount(count+1)
        prevCountRef.current = count;
    }
    return (
        <div>
            <h1 ref={prevCountRef}>number is {count} and before it was {prevCountRef.current}</h1>
            <button onClick={onClickHandler}>Click me</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default PreviousState;