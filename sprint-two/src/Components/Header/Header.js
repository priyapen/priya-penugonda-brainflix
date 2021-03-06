import "./Header.scss";
// import React, { Component } from 'react';
import Nav from "./Nav";

function Header(props) {
    return (
        <header className="header">
            <Nav handlefileupload={props.handlefileupload}/>
        </header>
    
        );
}

export default Header;
