import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import videodetails from './data/video-details.json';


class App extends Component {
  state = {
    videodetails: videodetails,
    currentHeroVideo: videodetails.id,
  }

  handleclick = (event, id) => {
    event.preventDefault();
    const clickedVideo = event.target.id;
    const newState = this.state.videodetails.filter(video => {
      if (video.id !== clickedVideo) {
        console.log(video.id);
        return video;
      }
        // video.id ! == clickedVideo;
    })
    console.log("new state", newState)
   console.log("i've been clicked", clickedVideo)
    this.setState({
      videodetails:newState,
      currentHeroVideo: clickedVideo
    })
    
  }
  
  

  render() {
    console.log(this.state.videodetails)
    return (
      <div className="app">
        <Header videodetails={this.state.videodetails}/>
        <Main videodetails={this.state.videodetails} handleclick={this.handleclick}/>
      </div>
    );
  }
}


App.propTypes = {

};


export default App;

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Main/>
//     </div>
//   );
// }

// export default App;
