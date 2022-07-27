import React, { useState } from "react";
import './Expform.css';
import axios from 'axios'

const Expform = () => {

    
    const [Title, setTitle] = useState("");
    const [Amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [formview, setFormview] = useState();


    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            item: Title,
            price: Amount,
            date: new Date(date)
        }

        axios.post("http://localhost:2000/expense",dataObj)

        {window.location.reload()}

        alert("Add sucessfully");

        setTitle("");
        setAmount(0);
        setDate(new Date());
        setFormview(!formview);


    }

    return (
        <>
            <form onSubmit={submitHandler} className={formview ? 'dBlock' : 'dNone'}>
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
                        <input type="submit" className="addExpBtn" value="Add Expese" />
                    </div>
                </div>
            </form>
            <div className="newbtn">
                <div className="addNewBtn">
                    <input type="submit" value="New Expense" onClick={() => setFormview(!formview)} className={formview ? "dNone" : "dBlock"} />
                </div>

            </div>


        </>

    );

}

export default Expform;
