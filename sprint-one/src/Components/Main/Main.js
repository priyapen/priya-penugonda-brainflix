
import React from 'react';
// import PropTypes from 'prop-types';
// import videodetails from '../../data/video-details.json';
import AsideList from './Aside/AsideList';
import Hero from './Hero/Hero';
import HeroDetails from './HeroDetails/HeroDetails'


function Main(props) {
    // state = {
    //     videodetails: videodetails
    // }
  

    
        // console.log(videodetails);
        return (
            <div>
                <Hero dataFromMain={props.videodetails}/>
                <HeroDetails dataFromMain={props.videodetails} />
                <AsideList dataFromMain={props.videodetails} handleclick={props.handleclick}/>
        </div>
        );

}


export default Main;
