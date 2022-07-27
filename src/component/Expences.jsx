import React, { useState } from "react";
import Expdate from "./Expdate";
import './Expences.css';
import Filter from "./Filter";
import Chart from "./Chart";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';



const Expences = (props) => {

    const navigate=useNavigate()

const[userdata,setuserdata]=useState([])


    useEffect(() => {
        axios.get("http://localhost:2000/expense")
            .then(async (res) => {
                const rawdata = await res.data;
                console.log(rawdata)
                setuserdata(rawdata)

            }).catch((err) => {
                console.log(err)
            })
    },[])

    const [updetedYear, setUpdatedYear] = useState();

    const filtervalue = (FilterYear) => {
        setUpdatedYear(FilterYear);

    }
    let FilterRecord = userdata.filter(row => {
        let newdate = row.date
        let d = new Date(newdate)

        if (updetedYear == "All") {
            return (row)
        }
        else {
            return (d.getFullYear() == updetedYear)
        }
    });
    return (
        <>
            <Filter filtervalue={filtervalue} />
            // <Chart FilteredRecord={FilterRecord} />

            {
                FilterRecord.map(row => {

                    return (
                        <div className="row">
                            <div className="container">
                                <div className="datebox">
                                    <Expdate row={row} />
                                </div>
                                <div>
                                    <h3>{row.item}</h3>
                                </div>
                                <div className="btn">
                                    <button><p>${row.price}</p></button>
                                    <button onClick={ () => navigate(`/edit/${row._id}`)}>Edit</button>
                                    <button onClick={() => navigate (`/delete/${row._id}`)}>Delete</button>


                                </div>
                            </div>
                        </div>

                    )
                }
                )
            }

        </>
    )
}

export default Expences;

