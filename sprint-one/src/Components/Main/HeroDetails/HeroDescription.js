import React, { Component } from 'react';


class HeroDescription extends Component {
    render() {
        return (
            <p className="hero__description">{this.props.videodetails[0].description}</p>
        );
    }
}


HeroDescription.propTypes = {

};


export default HeroDescription;
