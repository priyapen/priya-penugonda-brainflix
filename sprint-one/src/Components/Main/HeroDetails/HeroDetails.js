import React, { Component } from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import HeroCommentInput from './HeroCommentInput';
import HeroCommPubl from './HeroCommPubl';


class HeroDetails extends Component {
    
    render() {
        // console.log(this.props.videodetailslist);
        return (
            <div>
                <HeroHeading videodetails={this.props.videodetailslist} />
                <HeroDescription videodetails={this.props.videodetailslist} />
                <HeroCommentInput videodetails={this.props.videodetailslist} />
                <HeroCommPubl videodetails={this.props.videodetailslist} />
            </div>
        );
    }
}


HeroDetails.propTypes = {

};


export default HeroDetails;
