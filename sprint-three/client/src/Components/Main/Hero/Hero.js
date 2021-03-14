import React from 'react';
import './Hero.scss';

export default function Hero(props) {
    const playVideo = props.videodetailslist;
        return (
            <section className="hero__video-blck">
                <video poster={playVideo.image} controls="controls" 
                     className="hero__video">
	            </video>
            </section>
        );
}


