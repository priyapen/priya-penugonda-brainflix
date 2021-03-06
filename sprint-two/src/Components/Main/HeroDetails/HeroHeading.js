import React from 'react';

export default function HeroHeading(props) {
    
        let date = new Date(props.videodetails.timestamp).toLocaleDateString('en-US');

        // console.log(this.props.videodetails);
        return (
            < section className = "hero__heading-section" >
                <h1 className="hero__title">{props.videodetails.title}</h1>
                <div className="hero__channeldate">
                <h2 className="hero__channel">By {props.videodetails.channel}</h2>
                    <p className="hero__date">{date}</p>
                    </div>
                {/* <img src={Views} alt="total views for the video" className="hero__viewsicon"/> */}
                <div className="hero__viewslikes">
                <p className="hero__views">{props.videodetails.views}</p>
                {/* <img src={Heart} alt="total likes for the video" className="hero__likesicon"/> */}
                    <p className="hero__likes">{props.videodetails.likes}</p>
                    </div>
             </section>
        );
}