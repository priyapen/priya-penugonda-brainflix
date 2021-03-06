import React from 'react';
import './App.scss';
import './partials/_global.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import UploadPage from './Components/Pages/UploadPage';


export default function App () {

    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          
          <Switch>

            <Route path="/" exact component={Main}/>
           
            <Route path="/uploads" exact render={(routerProps) => {
              return <UploadPage {...routerProps} handlefileupload={this.handlefileupload} />
            }
            } />
            
            <Route path="/:videoid" render={(routerProps) => {
              return <Main  {...routerProps}/>
            }} />
        </Switch>
        </BrowserRouter>
      </div>
    );
}
