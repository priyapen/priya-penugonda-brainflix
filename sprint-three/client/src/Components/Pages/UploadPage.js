import React, { Component } from 'react';
import './UploadPage.scss';
// import thumbnail from '../../Assets/Images/Upload-video-preview.jpg';
import {v4 as uuidv4 } from 'uuid';
import axios from 'axios';


class UploadPage extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            title: "",
            description: "",
            isPublished: false,
            isCancelled: false,
        };
        this.handletitle = this.handletitle.bind(this);
        this.handledesc = this.handledesc.bind(this);
    }

        
    

   handlePublish= (event)=> {
        event.preventDefault();
    //    alert("Video has been uploaded successfully. Taking you back to the home page.");
       console.log(this.state);
    //    console.log(event.target.value);
       this.setState({
        id: uuidv4(),
        isPublished: true
       }, () => {
        // console.log(this.state.id);
        //    console.log(this.state);
           this.postFormData();
       });
       setTimeout(() => {
        this.props.history.goBack();
       }, 2000);
    }
    
    handleCancel= (event) => {
        event.preventDefault();
       
        let confirmation = window.confirm("Press OK to return to Home Page or Cancel to stay on this page");
        if(confirmation === true ) {
            this.props.history.goBack();
          } else {
            return;
          }
      this.props.history.goBack();
    }


    handletitle(event){
        event.preventDefault();
        console.log(event.target.value);
    
        this.setState({
            title:event.target.value,
        })
        console.log(this.state);
    }


    handledesc(event){
        event.preventDefault();
        console.log(event.target.value);
    
        this.setState({
            description:event.target.value,
        })
        console.log(this.state);
    }
   

    postFormData() {
        const publVid = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description
        }
        axios.post('http://localhost:8080/videos', publVid).then(response => {
            console.log(response);
        })
    }


    render() {
        return (

            (!this.state.isPublished) ? 
            <section className="upl">
                <h1 className="upl__heading">Upload Video</h1>
                {/* <div className="upl__flex"> */}
                    {/* <div className="upl__imgblck">    */}
                     <ul className="upl__flex">
                    <li><form action="" className="upl__form" onSubmit={this.handlePublish}>
                            <li className="upl__imgblck">
                                <label htmlFor="videoimg" className="upl__thumb">Video Thumbnail</label>
                                <img name="videoimg" src="http://localhost:8080/files/Upload-video-preview.jpg" className="upl__img" alt="uploaded video" />
                            </li>
                            {/* </div> */}
                            <li className="upl__titldesc">
                        <label htmlFor="vidtitle" className="upl__titlelbl">Title your video
                        <input type="text" placeholder="Add a title to your video" className="upl__title" name="vidtitle" value={this.state.title} onChange={this.handletitle}></input></label>
                        <label htmlFor="description" className="upl__desclbl">Add a video description
                        <textarea name="description" placeholder="Add a description of your video" className="upl__desc" value={this.state.description} onChange={this.handledesc}></textarea ></label>
                        </li>
                        <li className="upl__buttons">
                        <input type="Submit" className="upl__publbtn" onClick={ this.handlePublish} defaultValue="Publish"/>
                    <input className="upl__cancel" onClick={this.handleCancel} defaultValue="Cancel"/>
                    </li>
               
                        </form></li>
                        </ul>  
                        {/* </div> */}
                        {/* </div> */}
            </section> : <p className="upl__publmsg">Video published successfully, taking you back to the homepage!</p>
        );
    }
    
    
};

export default UploadPage;