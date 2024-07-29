import React from 'react';
import {Link} from "react-router-dom";

const FetchDataWithDependency = () => {
    const [data, setData] = React.useState([]);
    const [id, setId] = React.useState('');
    const onChangeHandler = (event) => {
        setId(event.target.value);
        console.log(id)
    }
    React.useEffect(() => {
        fetch(`https://api.openf1.org/v1/drivers?driver_number=${id}&session_key=9158`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data)
            })
    },[id])
    return (
        <div>
            <input onChange={onChangeHandler}/>
            {
                data.map((driver) => (
                    <h1 key={driver.driver_number}>Driver number is {driver.driver_number} and {driver.full_name}</h1>
                ))
            }
            <h1><Link to={'/'}>Homepage</Link></h1>

        </div>
    );
};

export default FetchDataWithDependency;