import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {

    const navigate = useNavigate();
    const { userID } = useParams();
    console.log(userID);

    const [Title, setTitle] = useState("");
    const [Amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [userdata, setuserdata] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:2000/expense/${userID}`)
            .then(async (res) => {
                const rawdata = await res.data[0];
                console.log(rawdata)    
                setTitle(rawdata.Title);
                setAmount(rawdata.Amount);
                setuserdata(rawdata);

            }).catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(userdata)

    const submitHandler = ((e) => {
        e.preventDefault();
        const dataObj = {
            item: Title,
            price: Amount,
            date: new Date(date)
        }
        console.log(dataObj);
        axios.put(`http://localhost:2000/expense/${userID}`, dataObj)
        .then(()=>{
            navigate("/");

        })

    })


    return (
        <form onSubmit={submitHandler}>
            <div className="list">
                <div>

                    <label>Title</label><br></br>
                    <input type="text" className="inputTitle" onChange={e => setTitle(e.target.value)} value={Title} /><br></br>
                </div>

                <div>

                    <label>Amount</label><br></br>
                    <input type="number" className="inputTitle" onChange={e => setAmount(e.target.value)} value={Amount} />
                </div>
                <div>
                    <label>Date</label><br></br>
                    <input type="date" className="inputTitle" onChange={e => setDate(e.target.value)} value={date} />
                </div><br></br>


                <div className="addExp">
                    <input type="submit" className="addExpBtn" value="update Expese" />
                </div>
            </div>
        </form>
    );
};

export default Edit;