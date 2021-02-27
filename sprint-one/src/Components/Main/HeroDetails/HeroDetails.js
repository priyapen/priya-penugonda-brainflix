import React, { Component } from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import HeroCommentInput from './HeroCommentInput';
import HeroCommPubl from './HeroCommPubl';


class HeroDetails extends Component {
    
    render() {
        console.log(this.props.videodetails);
        return (
            <div>
                <HeroHeading videodetails={this.props.dataFromMain} />
                <HeroDescription videodetails={this.props.dataFromMain} />
                <HeroCommentInput videodetails={this.props.dataFromMain} />
                <HeroCommPubl videodetails={this.props.dataFromMain} />
            </div>
        );
    }
}


HeroDetails.propTypes = {

};


export default HeroDetails;
