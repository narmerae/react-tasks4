import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Ovo je homepage</h1>
            <h1><Link to={'/about'}>About</Link></h1>
            <h1><Link to={'/profiles'}>Profiles</Link></h1>
            <h1><Link to={'/colorchange'}>Color Change</Link></h1>
            <h1><Link to={'/rendercount'}>Render counter</Link></h1>
            <h1><Link to={'/smooth'}>Smooth scroll</Link></h1>
            <h1><Link to={'/toggle'}>Toggle text</Link></h1>
            <h1><Link to={'/previousstate'}>Previous state</Link></h1>
            <h1><Link to={'/focusinput'}>Focus Input</Link></h1>
            <h1><Link to={'/fetchdata'}>Fetch Data F1</Link></h1>
            <h1><Link to={'/dynamic'}>Dynamic font size</Link></h1>
            <h1><Link to={'/countdown'}>Countdown Timer</Link></h1>
            <h1><Link to={'/clickcounter'}>Click counter</Link></h1>
            <h1><Link to={'/changecolor'}>Change Color</Link></h1>
            <h1><Link to={'/changebackground'}>Change background color</Link></h1>
            <h1><Link to={'/autosaveform'}>Auto Save Form</Link></h1>

        </div>
    );
};

export default Homepage;