import React, { Component } from 'react';
import HeroUserComment from './HeroUserComment';


class HeroCommPubl extends Component {
    render() {
        return (
            <ul className="publ__commblock">
                {
                    this.props.videodetails.comments.map(element => {
                        // console.log(element.name);
                        // console.log(element.id);
                        return <HeroUserComment key={element.id} id={element.id} name={element.name} comment={element.comment} time={element.timestamp} />
                    })
                }   
                

            </ul>
        );
    }
}


HeroCommPubl.propTypes = {

};


export default HeroCommPubl;
