import React from 'react';
import {Link} from "react-router-dom";

const AddClassOnClick = () => {
    const classRef = React.useRef();
    const onAddClassOnClick = () => {
        if (classRef.current) {
            classRef.current.className = 'addClassOnClick';
        }
    }
    return (
        <div ref={classRef}>
            <button onClick={onAddClassOnClick}>add classname</button>
            <h1><Link to={'/'}>Homepage</Link></h1>
        </div>
    );
};

export default AddClassOnClick;