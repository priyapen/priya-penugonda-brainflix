
import React from 'react';
// import PropTypes from 'prop-types';
// import videodetails from '../../data/video-details.json';
import AsideList from './Aside/AsideList';
import Hero from './Hero/Hero';
import HeroDetails from './HeroDetails/HeroDetails';
import './Main.scss';


function Main(props) {
 
        // console.log(videodetails);
        return (
            <main className="main">
                <Hero dataFromMain={props.currentherovideoid}
                    videodetailslist={props.currentHeroObject} />
                <div className="main__content">
                <HeroDetails dataFromMain={props.currentHeroObject} videodetailslist={props.currentHeroObject} />
                    <AsideList dataFromMain={props.videodetails} handleclick={props.handleclick} videodetailslist={props.currentHeroObject} />
                    </div>
            </main>
        );

}


export default Main;
