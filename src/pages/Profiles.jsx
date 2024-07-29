import React from 'react';
import {Link} from "react-router-dom";
const someArray = ['1', '2', '3'];
const Profiles = () => {
    return (
        <div>
            <Link to={'/'}>Homepage</Link>
            {
                someArray.map((name) => (
                    <h1 key={name}>Profil broj <Link to={`/profiles/${name}`}>{name}</Link></h1>
                ))
            }
        </div>
    );
};

export default Profiles;