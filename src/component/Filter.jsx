import React, { useState } from "react";
import './Filter.css'
const Filter = (props) => {

    const [filterYear, setfilterYear] = useState("All");

    const selectedYear = (e) => {
        setfilterYear(e.target.value);

    };

    props.filtervalue(filterYear);
    return (
        <>
            <div className="mainFilter">
                <div className="filterBy"><h2>Filter By</h2></div>
                <div className="filterBtn">
                    <select onChange={selectedYear}>
                        <option value="All">  All </option>
                        <option value="2018"> 2018 </option>
                        <option value="2019"> 2019 </option>
                        <option value="2020"> 2020 </option>
                        <option value="2021"> 2021 </option>
                        <option value="2022"> 2022 </option>
                    </select>
                </div>
            </div>

        </>
    )

}
export default Filter;