import React from 'react';
import './Hero.scss';


function Hero(props) {
    const playVideo = props.videodetailslist;
        
    //     props.videodetailslist.filter(video => {
    //     if (video.id === props.dataFromMain){ 
    //         console.log(video.id);
    //         return video.image;
    //     }
    // })

    // console.log("hello hero", playVideo);
    
        return (
            <section className="hero__video-blck">
                
                <video poster={playVideo.image} controls="controls" 
                     className="hero__video">
{/* preload="metadata"  width="400" height="300" */}
	            </video>
    
            </section>
        );
}

// if (video.id === props.dataFromMain)


export default Hero;
