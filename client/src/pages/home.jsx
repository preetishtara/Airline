import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FareTypes } from "../components/HomePage/FareTypes";
import { Fromto } from "../components/HomePage/Fromto";
import { Bookingcss } from "../components/HomePage/Bookingcss";
import { Icondiv } from "../components/HomePage/Icondiv";

const home = () => {
  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };

  return (
    <div className="m-24">
      <div className="flex flex-col">
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv>
          <div className="checkboxdiv">
            <div>
              {" "}
              <input type="checkbox" />
              <label htmlFor="">ONEWAY</label>
              <input type="checkbox" />
              <label htmlFor="">ROUNDWAY</label>
              <input type="checkbox" />
              <label htmlFor="">MULTI CITY</label>
            </div>
            <div>INTERNATIONAL FLIGHTS | DOMESTIC FLIGHTS</div>
          </div>
          <Fromto handleChange={handleData} />
          <FareTypes />
        </Bookingcss>
        <div className="flex justify-center">
          <button
            className="bg-blue text-white w-32 h-9 rounded-full bg-blue-400 hover:bg-purple-500 hover:text-black"
            onClick={addLocal}
          >
            <Link to="/search">SEARCH</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default home;
