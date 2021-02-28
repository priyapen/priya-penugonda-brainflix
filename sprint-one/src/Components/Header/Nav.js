import React, { Component } from 'react';
import Logo from "./Logo";
import Search from "./Search";
import Upload from "./Upload";
import Userimg from "./Userimg";


class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <Logo />
                <Search />
                <div className="nav__btnimg">
                    <Upload />
                    <Userimg />
                </div>
            </nav>
            
    
        );
    }
}


Nav.propTypes = {

};


export default Nav;
