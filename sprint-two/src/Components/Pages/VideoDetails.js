import React from 'react';
import Hero from '../Main/Hero/Hero';
import HeroDetails from '../Main/HeroDetails/HeroDetails';


const VideoDetails = (props) => {
    console.log(props.match.params.videoid);

    return (
        <div>
            {props.match.params.videoid}
        
            {/* <Hero />
            <HeroDetails/> */}
        </div>
    );
};



export default VideoDetails;
