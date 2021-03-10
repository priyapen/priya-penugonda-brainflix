import React, { Component } from 'react';
import AsideList from './Aside/AsideList';
import Hero from './Hero/Hero';
import HeroDetails from './HeroDetails/HeroDetails';
import './Main.scss';
import axios from 'axios';


class Main extends Component {
    state = {
        videodetails:[],
        currentHeroObject: {},
    }
    
   
      // api key = c6c6837c-64b3-493e-9875-9c58e34e299e
    
    componentDidMount() { 
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e')
        .then((result => {
            this.setState({
                videodetails: result.data,
           })
            const id = result.data[0].id;
          axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e`)
                    .then((vidresult) => {
                      this.setState({
                            currentHeroObject: vidresult.data,
                    })
                    })
        }))
     }

     
    componentDidUpdate(prevProps, prevState) {
        let currvidid = this.props.match.params.videoid;

        if (prevProps.match.params.videoid !== currvidid) {
        
            if (!currvidid) {
                currvidid = this.state.videodetails[0].id;
            }
                axios.get(`https://project-2-api.herokuapp.com/videos/${currvidid}?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e`).then(result => {
                    // console.log(result.data);
                    this.setState({
                        currentHeroObject: result.data,
                    })
                })
            }
    }  


 
    render() {
        if (Object.entries(this.state.currentHeroObject).length === 0) {
            return null;
        } else 
        return (
        <main className="main">
            <Hero 
                  videodetailslist={this.state.currentHeroObject} /> 
              
                <div className="main__content">
                    {this.state.currentHeroObject &&  <HeroDetails  videodetailslist={this.state.currentHeroObject} />}
                 
                  
        
                <AsideList dataFromMain={this.state.videodetails} videodetailslist={this.state.currentHeroObject} />
            </div>
        </main>
    );
 }
}

export default Main;
