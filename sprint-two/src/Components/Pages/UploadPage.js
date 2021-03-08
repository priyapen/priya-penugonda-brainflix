import React from 'react';
import './UploadPage.scss';
import thumbnail from '../../Assets/Images/Upload-video-preview.jpg';


export default function UploadPage (props) {

    const clickedwithinupload = (event) => {
        event.preventDefault();
       alert("form has been submitted");
       props.history.goBack();
   }
    
    return (
        <section className="upl">
            <h1 className="upl__heading">Upload Video</h1>
            <div className="upl__flex">
                <div className="upl__imgblck">   
                    <p className="upl__thumb">Video Thumbnail</p>
                    <img src={thumbnail} className="upl__img" />
                 </div>
                <form action="" className="upl__form">
                    <label htmlFor="" className="upl__titlelbl">Title your video
                    <input type="text" placeholder="Add a title to your video" className="upl__title" name="vidtitle"></input></label>
                    <label htmlFor="" className="upl__desclbl">Add a video description
                    <textarea placeholder="Add a description of your video" className="upl__desc"></textarea></label>
                </form>
            </div>
            <div className="upl__buttons">
                <p className="upl__publbtn" onClick={ clickedwithinupload}>Publish</p>
                <p className="upl__cancel" onClick={()=>{props.history.goBack();}}>Cancel</p>
            </div>
        </section>
    );
};

