import React from 'react';
import HeroUserComment from './HeroUserComment';

function HeroCommPubl(props) {
    console.log(props.videodetails);
        return (
            <ul className="publ__commblock">
                {  
            
                    props.videodetails.comments.map(element => {
                        // console.log(element.name);
                        // console.log(element.id);
                        return <HeroUserComment key={element.id} id={element.id} name={element.name} comment={element.comment} time={element.timestamp} />
                    })
                }   
                

            </ul>
        );
    
}


HeroCommPubl.propTypes = {

};


export default HeroCommPubl;
