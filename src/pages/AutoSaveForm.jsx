import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const AutoSaveForm = () => {
    const [data, setData] = React.useState({
        firstName:'',
        lastName:''
    })

    useEffect(() => {
        const interval = setInterval(() => {
            localStorage.setItem('data',JSON.stringify(data))
            const jsonData = JSON.parse(localStorage.getItem('data'))
            console.log(jsonData)
        },2000)
        return () => clearInterval(interval)
    }, [data]);

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('data'))
        if(getData && getData.length > 0){
            setData(getData)
        }
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div>
            <form>
                <h1>forma</h1>
                <input name={"firstName"} onChange={onChange} type={"text"}/>
                <input name={"lastName"} type={"text"} onChange={onChange}/>
                <h1><Link to={'/'}>Homepage</Link></h1>
            </form>
        </div>
    );
};

export default AutoSaveForm;