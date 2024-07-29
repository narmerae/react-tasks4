import React from 'react';
import {Link} from "react-router-dom";

const ChangeBackground = () => {
    const backgroundColorRef = React.useRef();
    const onClickChange = () => {
        if(backgroundColorRef.current) {
            backgroundColorRef.current.style.backgroundColor = 'red'
        }
    }
    return (
        <div ref={backgroundColorRef}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nemo.</h1>
            <button onClick={onClickChange}>Click me to change</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default ChangeBackground;