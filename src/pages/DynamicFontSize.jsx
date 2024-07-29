import React from 'react';
import {Link} from "react-router-dom";

const DynamicFontSize = () => {
    const sizeTextRef = React.useRef();
    const onClickHandler = () => {
        const currentSize = parseInt(window.getComputedStyle(sizeTextRef.current).fontSize);
        sizeTextRef.current.style.fontSize = `${currentSize + 16}px`;
    };
    return (
        <div>
            <p ref={sizeTextRef}>GAHOUOAGEHOGEAHOGAEHOGEAHOAGEHOGEAHOAEGHOGAEHOGAEHO</p>
            <button onClick={onClickHandler}>Click me for bigger font</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default DynamicFontSize;