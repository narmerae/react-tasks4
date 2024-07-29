import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";

const RenderCount = () => {
    const renderCounter = useRef(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        renderCounter.current = renderCounter.current + 1;
    },[count])
    return (
        <div>
            <h1>Counter is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <h1>Render count is {renderCounter.current}</h1>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );

};

export default RenderCount;