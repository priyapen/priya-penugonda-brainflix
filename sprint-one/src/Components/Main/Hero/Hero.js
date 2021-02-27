import React, { Component } from 'react';


class Hero extends Component {
    // state = {
    //     videodetails: videodetails,
    //     // videotitle: videodetails.title,
    //     // videochannel: videodetails.channel,
    //     // videoimage: videodetails.image,
    //     // videodescription: videodetails.description,
    //     // videoviews: videodetails.views,
    //     // videolikes: videodetails.likes,
    //     // videoduration: videodetails.duration,
    //     // videolink: videodetails.video,
    //     // videotimestamp: videodetails.timestamp,
    //     // videocomments: videodetails.comments
    // }

    
    render() {
        // console.log(this.props.videodetails);
        // console.log("hello");
        return (
            <div>

                <video poster={this.props.dataFromMain[0].image} controls="controls" 
                     width="400" height="300" preload="metadata">
                    
                    
		            {/* <source src={this.state.videodetails[0].video} type="video/mp4"> Video tag is not supported
		            in this browser.</source> */}
	            </video>
    
            </div>
        );
    }
}


Hero.propTypes = {

};


export default Hero;
