import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1><Link to={'/'}>Homepage</Link></h1>
            <h1>NarmerUI stranica o meni</h1>
        </div>
    );
};

export default About;