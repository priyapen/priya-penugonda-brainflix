import React  from 'react';


export default function HeroDescription (props) {
    return (
            <p className="hero__description">{props.videodetails.description}</p>
    );
}