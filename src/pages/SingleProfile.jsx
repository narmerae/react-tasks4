import React from 'react';
import {Link, useParams} from "react-router-dom";

const SingleProfile = () => {
    const params = useParams();
    return (
        <div>
            <h1>{params.profilesId}</h1>
            <Link to={'/profiles'}>Nazad na profile</Link>
        </div>
    );
};

export default SingleProfile;