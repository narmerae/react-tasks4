"use client"
import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <div>
            <input ref={inputRef} type={"text"} placeholder={"Enter something"} key={"texsst"}/>
            <button>CLICK ME</button>
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default FocusInput;