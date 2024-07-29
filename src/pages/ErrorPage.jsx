import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            Error 404
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default ErrorPage;