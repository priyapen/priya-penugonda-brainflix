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
            console.log(result);
            this.setState({
                videodetails: result.data,
           })
            const id = result.data[0].id;
            console.log(id);
          axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e`)
                    .then((vidresult) => {
                        console.log(vidresult.data);
                     return this.setState({
                            currentHeroObject: vidresult.data,
                    })
                    })
            console.log("state after getting video obj:", this.state)
       
        }) )
        // console.log(this.state.currentherovideoid);
        // console.log("state is:", this.state);
      }

     
    componentDidUpdate(prevProps, prevState) {
       
        // console.log(this.state);
        // console.log("prevprops.currentHeroObject.id",prevProps);
        // console.log("this.props.match.params.videoid", this.props.match.params.videoid);  
        let currvidid = this.props.match.params.videoid;

        if (prevProps.match.params.videoid !== currvidid) {
        
            if (!currvidid) {
                currvidid = this.state.videodetails[0].id;
            }
                axios.get(`https://project-2-api.herokuapp.com/videos/${currvidid}?api_key=c6c6837c-64b3-493e-9875-9c58e34e299e`).then(result => {
                    console.log(result.data);
                    this.setState({
                        currentHeroObject: result.data,
                    })
                })
            
            
            }

    }  


 
    render() {
      // console.log(videodetails);
        // console.log(this.props.match);
        // console.log(props.match);
        console.log("this.state is:", this.state);
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
