import "./Header.sass";
// import React, { Component } from 'react';
import Logo from "./Logo";
import Search from "./Search";
import Upload from "./Upload";

function Header() {
        return (
            <div>
                <Logo />
                <Search />
                <Upload />
            </div>
        );
}

export default Header;
