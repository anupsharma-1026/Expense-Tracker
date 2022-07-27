import React from "react";
import './Expdate.css';

const Expdate = (props) => {

    const newdate = props.row.date;
    let d = new Date(newdate);
    const date = d.getFullYear();
    const monthvalue = d.toLocaleString("en-us", { month: "long" });
    const dateday = d.getDate();

    return (
        <>
            <div>
                <h2>{monthvalue}</h2>
                <h3>{date}</h3>
                <h2>{dateday}</h2>
            </div>

        </>

    )
}
export default Expdate;