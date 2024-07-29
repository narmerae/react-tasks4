import React from 'react';
import {Link} from "react-router-dom";

const ToggleVisibility = () => {
    const visibilityDivRef = React.useRef();
    const [visible, setVisible] = React.useState(true);
    const onToggleVisibility = (e) => {
        e.preventDefault();
        if(visibilityDivRef.current && visible === true) {
            setVisible(false);
            visibilityDivRef.current.style.visibility = 'hidden';
        }
        else if (visibilityDivRef.current && visible === false) {
            setVisible(true)
            visibilityDivRef.current.style.visibility = 'visible'
        }
    }
    return (
        <div>
            <button onClick={onToggleVisibility}>Click me to toggle text</button>
            <div ref={visibilityDivRef}>haehaeahehaehaeahheehahaeaeh</div>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default ToggleVisibility;