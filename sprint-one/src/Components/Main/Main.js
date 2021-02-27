
import React from 'react';
// import PropTypes from 'prop-types';
// import videodetails from '../../data/video-details.json';
import AsideList from './Aside/AsideList';
import Hero from './Hero/Hero';
import HeroDetails from './HeroDetails/HeroDetails'


function Main(props) {
 
        // console.log(videodetails);
        return (
            <div>
                <Hero dataFromMain={props.currentherovideoid}
                    videodetailslist={props.currentHeroObject} />
                
                <HeroDetails dataFromMain={props.currentHeroObject} videodetailslist={props.currentHeroObject} />
                <AsideList dataFromMain={props.videodetails} handleclick={props.handleclick} videodetailslist={props.currentHeroObject}/>
        </div>
        );

}


export default Main;
