import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../Assets/Logo/Logo-brainflix.svg';
import Userimg from "./Userimg";

export default function Nav() {
    return (
             <nav className="nav">
                <Link to="/"><img src={LogoIcon} alt="logo" className="nav__logo"/></Link>
                 <input type="text" placeholder="Search" className="nav__search"/>
                <div className="nav__btnimg">
                    <Link to="/uploads"    className="nav__upload">Upload</Link>
                    <Userimg />
                </div>
             </nav>
    );

}