import React from 'react';
import userimg from "../../Assets/Images/Mohan-muruge.jpg"
import "./Nav.scss";

const Userimg = () => {
    return (
        <div className="nav__userimage-block">
            <img src={userimg} alt="" className="nav__userimg"/>
        </div>
    );
}

export default Userimg;

