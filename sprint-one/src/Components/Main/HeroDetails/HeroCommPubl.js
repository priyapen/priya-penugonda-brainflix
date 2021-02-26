import React, { Component, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import HeroUserComment from './HeroUserComment';


class HeroCommPubl extends Component {
    render() {
        return (
            <ul className="publ__commblock">
                {
                    this.props.videodetails[0].comments.map(element => {
                        console.log(element.name);
                        console.log(element.id);
                            return <HeroUserComment key={element.id} name={element.name} comment={element.comment} time={element.timestamp} />
                            {/* <li className="publ__name" key={element.id}>{element.name}</li>
                            <li className="publ__timestamp" key={element.id}>{element.timestamp}</li>
                            <li className="publ__comment" key={element.id}>{element.comment}</li> */}
                    })
                }   
                

            </ul>
        );
    }
}


HeroCommPubl.propTypes = {

};


export default HeroCommPubl;
