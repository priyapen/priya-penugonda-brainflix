import React, { Component } from 'react';
import './App.scss';
import './partials/_global.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import videodetails from './data/video-details.json';


class App extends Component {
  state = {
    videodetails: videodetails,
    currentHeroVideo: videodetails[0].id,
    currentHeroObject: videodetails[0]
  }

  // I found a bug but i'm not sure how to fix it. On clicking the image in the video list, the Hero image gets changed, however I have to click on the video list image once again to remove it from Next Video section. :(

  handleclick = (event, id) => {
    event.preventDefault();
    const clickedVideo = event.target.id;
    console.log("i've been clicked", clickedVideo)

    const newArray = this.state.videodetails.filter((video, i) => {
      console.log("this.state.currentHeroVideo", this.state.currentHeroVideo)
      if (video.id !== this.state.currentHeroVideo) {
        console.log(video.id, i);
        return video;
      }
    })
    console.log("new state", newArray)
    console.log("i've been clicked", clickedVideo)

    const clickedvideo = this.state.videodetails.filter(video => {
      if (video.id === clickedVideo) {
        return video;
      }
    })

    const clickedvideoObj = Object.assign({},...clickedvideo)

  //   console.log("new hero is", clickedvideoObj)
  //  console.log("i've been clicked", clickedVideo)
    
    this.setState({
      videodetails:newArray,
      currentHeroVideo: clickedVideo,
      currentHeroObject:clickedvideoObj

    })


  }

  render() {
    // console.log(this.state.videodetails)
    return (
      <div className="app">
        <Header videodetails={this.state.videodetails}/>
        <Main videodetails={this.state.videodetails} handleclick={this.handleclick} currentherovideoid={this.state.currentHeroVideo} currentHeroObject={this.state.currentHeroObject}/>
      </div>
    );
  }
}



export default App;

