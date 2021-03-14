import React from 'react';
import HeroUserComment from './HeroUserComment';

export default function HeroCommPubl(props) {
        return (
            <ul className="publ__commblock">
                {  
                    props.videodetails.comments.map(element => {
                        return <HeroUserComment key={element.id} id={element.id} name={element.name} comment={element.comment} time={element.timestamp} />
                    })
                }   
            </ul>
        );
    
}

