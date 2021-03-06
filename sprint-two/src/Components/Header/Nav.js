import React from 'react';
import {  Link } from 'react-router-dom';
import Logo from "./Logo";
import Search from "./Search";
import Userimg from "./Userimg";

export default function Nav() {
    return (
             <nav className="nav">
                <Link to="/"><Logo /></Link>
                <Search />
                <div className="nav__btnimg">
                    <Link to="/uploads"    className="nav__upload">Upload</Link>
                    <Userimg />
                </div>
             </nav>
    );

}