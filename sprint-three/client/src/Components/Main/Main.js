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
        axios.get('http://localhost:8080/videos')
            .then((result => {
                // console.log("this is result from localhost:8080", result);
            this.setState({
                videodetails: result.data,
           })
               let id = (!this.props.match.params.videoid) ? result.data[0].id :  this.props.match.params.videoid;
                // console.log("id", id);
                // let currvidid = this.props.match.params.videoid;
                // console.log("current vid id:", currvidid);
                axios.get(`http://localhost:8080/videos/${id}`)
                    .then((vidresult) => {
                        this.setState({
                            currentHeroObject: vidresult.data,
                        })
                    })
                    // .then(() => console.log("current hero obejct is", this.state.currentHeroObject));
            }))
        
     }

     
    componentDidUpdate(prevProps, prevState) {
        let currvidid = this.props.match.params.videoid;
        // console.log("current vid id:", currvidid);
        // console.log("previous vid id", prevProps.match.params.videoid);
        if (prevProps.match.params.videoid !== currvidid) {
        
            if (!currvidid) {
                currvidid = this.state.videodetails[0].id;
            }
                axios.get(`http://localhost:8080/videos/${currvidid}`).then(result => {
                    // console.log(result.data);
                    this.setState({
                        currentHeroObject: result.data,
                    })
                })
            }
    }  


 
    render() {
        // if (Object.entries(this.state.currentHeroObject).length === 0) {
        //     return (<p>Loading content...</p>);
        // } else 
        return (
        <>
            {
                !Object.entries(this.state.currentHeroObject).length ?
                    <h2>Loading content...</h2>
                    :
            
                    <main className="main">
                        <Hero
                            videodetailslist={this.state.currentHeroObject} />
              
                        <div className="main__content">
                            {this.state.currentHeroObject && <HeroDetails videodetailslist={this.state.currentHeroObject} />}
                 
                  
        
                            <AsideList dataFromMain={this.state.videodetails} videodetailslist={this.state.currentHeroObject} />
                        </div>
                    </main>
                }
                </>
    );
 }
}

export default Main;
