import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import videodetails from './data/video-details.json';


class App extends Component {
  state = {
    videodetails: videodetails
  }
  

  render() {
    return (
      <div className="app">
        <Header videodetails={this.state.videodetails}/>
        <Main videodetails={this.state.videodetails}/>
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
