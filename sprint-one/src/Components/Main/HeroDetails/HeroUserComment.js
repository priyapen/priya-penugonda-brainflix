import React, { Component } from 'react';
import PropTypes from 'prop-types';


class HeroUserComment extends Component {
    render() {
        console.log(this.props.name);
        return (
            <>
                <li>
                {this.props.name}
                </li>
                <li>
                {this.props.time}
                </li>
                <li>   
                {this.props.comment}
                </li>
            </>
        );
    }
}


HeroUserComment.propTypes = {

};


export default HeroUserComment;
