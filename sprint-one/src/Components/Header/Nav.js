import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <Upload />
                <Userimg />
            </nav>
            
    
        );
    }
}


Nav.propTypes = {

};


export default Nav;
