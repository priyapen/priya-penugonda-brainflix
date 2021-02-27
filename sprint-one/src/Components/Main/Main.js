
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import videodetails from '../../data/video-details.json';
import AsideList from './Aside/AsideList';
import Hero from './Hero/Hero';
import HeroDetails from './HeroDetails/HeroDetails'


class Main extends Component {
    // state = {
    //     videodetails: videodetails
    // }
  

    render() {
        console.log(videodetails);
        return (
            <div>
            <Hero />
                <HeroDetails dataFromMain={this.props.videodetails} />
                <AsideList dataFromMain={this.props.videodetails} />
        </div>
        );
    }
}


Main.propTypes = {

};


export default Main;
