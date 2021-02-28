import React, { Component } from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import HeroCommentInput from './HeroCommentInput';
import HeroCommPubl from './HeroCommPubl';
import './HeroDetails.scss';

class HeroDetails extends Component {
    
    render() {
        // console.log(this.props.videodetailslist);
        return (
            <section className="hero__details">
                <HeroHeading videodetails={this.props.videodetailslist} />
                <HeroDescription videodetails={this.props.videodetailslist} />
                <HeroCommentInput videodetails={this.props.videodetailslist} />
                <HeroCommPubl videodetails={this.props.videodetailslist} />
            </section>
        );
    }
}


HeroDetails.propTypes = {

};


export default HeroDetails;
