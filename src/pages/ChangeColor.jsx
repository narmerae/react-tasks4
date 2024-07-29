import React from 'react';
import {Link} from "react-router-dom";

const ChangeColor = () => {
const [color, setColor] = React.useState('red');
const colors = ['red', 'green', 'blue', 'purple'];
const divColorRef = React.useRef();

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}
const onClickRandom = () => {
    if(divColorRef.current) {
        divColorRef.current.style.backgroundColor = getRandomColor()
    }
}
    return (
        <div ref={divColorRef}>
            <button onClick={onClickRandom}>Change color</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default ChangeColor;