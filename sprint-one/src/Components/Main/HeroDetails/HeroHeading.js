// import React from 'react';


// const HeroHeading = (props) => {
//     console.log(props.title);
//     console.log("hero heading section");

//     return (
//         <section className="hero__heading-section">
//             <h1 className="hero__title">{props.title}</h1>
//             {/* // <h2 className="hero__author"></h2> */}
//             {/* <img src={ } attr="total views for the video"></img>
//             <img src={ } attr="total likes for the video"></img> */}
//         </section>
//     );
// };


// // HeroHeading.propTypes = {

// // };


import React, { Component } from 'react';

import Views from '../../../Assets/Icons/Icon-views.svg';
import Heart from '../../../Assets/Icons/Icon-likes.svg';


class HeroHeading extends Component {
    // state = {
    //     videodetails:this.props.videodetails
    // }
    render() {
        console.log(this.props.videodetails);
        return (
            < section className = "hero__heading-section" >
                <h1 className="hero__title">{this.props.videodetails.title}</h1>
                <h2 className="hero__channel">By {this.props.videodetails.channel}</h2>
                <img src={Views} alt="total views for the video" className="hero__viewsicon"/>
                <p className="hero__views">{this.props.videodetails.views}</p>
                <img src={Heart} alt="total likes for the video" className="hero__likesicon"/>
                <p className="hero__likes">{this.props.videodetails.likes}</p>
             </section>
        );
    }
}


HeroHeading.propTypes = {

};


export default HeroHeading;

