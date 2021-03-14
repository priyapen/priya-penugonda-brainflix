import React from 'react';
import userimg from "../../Assets/Images/Mohan-muruge.jpg";
import "./Nav.scss";

export default function Userimg () {
    return (
            <img src={userimg} alt="user shown" className="nav__userimg"/>
    );
}

