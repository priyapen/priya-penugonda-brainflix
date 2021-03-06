import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import UploadPage from '../Pages/UploadPage';
import Logo from "./Logo";
import Search from "./Search";
import Upload from "./Upload";
import Userimg from "./Userimg";


class Nav extends Component {

    handlefileupload= (event)=> {
        event.preventDefault();
        console.log("event is", event);
        // console.log("i've been published");
            return (<p>I've been published</p>);
    
    }
    
    render(props) {
        return (
           
               
                 <nav className="nav">
                <Link to="/"><Logo /></Link>
                <Search />
                <div className="nav__btnimg">
                    {/* <Link to="/uploads" component={UploadPage} handlefileupload={this.props.handlefileupload}></Link>    */}

                    <Link to="/uploads" className="nav__upload">Upload</Link>
                <Userimg />
                </div>

                 </nav>
    
                
            
    
        );
    }
}


Nav.propTypes = {

};


export default Nav;
