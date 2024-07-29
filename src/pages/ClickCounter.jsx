import React from 'react';
import {Link} from "react-router-dom";

const ClickCounter = () => {
    const buttonCountRef = React.useRef(0);
    const onClickCounter = () => {
        buttonCountRef.current = buttonCountRef.current + 1;
        console.log(buttonCountRef.current);
    }
    return (
        <div>
            <button onClick={onClickCounter}>HI CLICK ME</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default ClickCounter;