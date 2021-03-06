import React, { Component } from 'react';
import './App.scss';
import './partials/_global.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import UploadPage from './Components/Pages/UploadPage';


// import HomePage from './Components/Pages/HomePage';


class App extends Component {
//   state = {
//     videodetails: "",
//     // currentHeroVideo: videodetails[0].id,
//     // currentHeroObject: videodetails[0]
//     currentHeroVideo: "",
//     currentHeroObject:""
//   }

//   // api key = c6c6837c-64b3-493e-9875-9c58e34e299e

//   componentDidMount() {
//     axios.get('https://project-2-api.herokuapp.com/videos?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e')
//     .then((result => {
//       // console.log(result);
//       this.setState({
//         videodetails:result.data,
//         currentHeroObject: result.data[0],
//         currentHeroVideo: result.data[0].id
//       })
//       console.log(this.state);
//     })
// );
//   }

//   componentDidUpdate(prevProps,prevState) {
//     console.log(prevProps);
//     if (prevState.currentHeroVideo !== this.props.match.params.videoid) {
//      let videoClicked=  this.state.videodetails.filter(video=>(videodetails.id === this.props.match.params.videoid))
//       this.setState({
//         currentHeroObject: videoClicked,
//         currentHeroVideo:this.props.match.params.videid
//       })
//     }
   


//   }
  
  
handlefileupload= (event)=> {
  event.preventDefault();
  console.log("event is", event);
  console.log("i've been published");
}

  // handleclick = (event, id) => {
  //   event.preventDefault();
  //   const clickedVideo = event.target.id;
  //   console.log("i've been clicked", clickedVideo)

  //   const newArray = this.state.videodetails.filter((video, i) => {
  //     console.log("this.state.currentHeroVideo", this.state.currentHeroVideo)
  //     if (video.id !== this.state.currentHeroVideo) {
  //       console.log(video.id, i);
  //       return video;
  //     }
  //   })
  //   console.log("new state", newArray)
  //   console.log("i've been clicked", clickedVideo)

  //   const clickedvideo = this.state.videodetails.filter(video => {
  //     if (video.id === clickedVideo) {
  //       return video;
  //     }
  //   })

  //   const clickedvideoObj = Object.assign({},...clickedvideo)

  // //   console.log("new hero is", clickedvideoObj)
  // //  console.log("i've been clicked", clickedVideo)
    
  //   this.setState({
  //     videodetails:newArray,
  //     currentHeroVideo: clickedVideo,
  //     currentHeroObject:clickedvideoObj

  //   })


  // }

  render() {
    // console.log(this.state.videodetails)
 

    return (
      <div className="app">


       
        <BrowserRouter>
          <Header />
          
          <Switch>
            {/* <Route path="/" exact render={() => {return <Main videodetails={this.state.videodetails} handleclick={this.handleclick} currentherovideoid={this.state.currentHeroVideo} currentHeroObject={this.state.currentHeroObject} /> }}/> */}

            <Route path="/" exact component={Main}/>
           
            {/* <Route path="/uploads" exact render={() => { return <UploadPage /> }} /> */}
            <Route path="/uploads" exact render={(routerProps) => {
              return <UploadPage {...routerProps} handlefileupload={this.handlefileupload} />
            }
            } />
            
            {/* <Route path="/:videoid" render={(routerProps) => {
              console.log('Router Props inside a render method: ', routerProps);
              return <VideoDetails {...routerProps} />
            }} /> */}

            <Route path="/:videoid" render={(routerProps) => {
              return <Main  {...routerProps}/>
            }} />
        </Switch>
        </BrowserRouter>
       
        {/* <Main videodetails={this.state.videodetails} handleclick={this.handleclick} currentherovideoid={this.state.currentHeroVideo} currentHeroObject={this.state.currentHeroObject}/> */}
      </div>
    );
  }
}



export default App;

