import React, { Component, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';


class HeroCommPubl extends Component {
    render() {
        return (
            <div class="publ__commblock">
                {
                    this.props.videodetails[0].comments.map(element => {
                        console.log(element.name);
                        console.log(element.id);
                        <ul>
                            <li className="publ__name" key={element.id}>{element.name}</li>
                            <li className="publ__timestamp" key={element.id}>{element.timestamp}</li>
                            <li className="publ__comment" key={element.id}>{element.comment}</li>
                        </ul>
                    })
                }   
                

            </div>
        );
    }
}


HeroCommPubl.propTypes = {

};


export default HeroCommPubl;
