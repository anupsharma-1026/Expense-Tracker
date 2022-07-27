import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Delete.css'
const Delete = () => {

    const navigate = useNavigate()
    const { userID } = useParams()
    console.log(userID)

    const deleteHandler = () => {
        axios.delete(`http://localhost:2000/expense/${userID}`)
            .then(() => {
                alert("delete Done")
                navigate("/app")
            })

    }
    return (
        <>
            <div className='delete'>
                <div><button onClick={deleteHandler}>Delete</button></div>
                <div><button onClick={() => navigate("/app")}>Cancal</button></div>
            </div>

        </>
    );
};

export default Delete;