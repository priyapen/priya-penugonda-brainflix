import React from 'react';


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
            <div>
                
                <video poster={playVideo.image} controls="controls" 
                     width="400" height="300" preload="metadata">

	            </video>
    
            </div>
        );
}

// if (video.id === props.dataFromMain)

Hero.propTypes = {

};


export default Hero;
