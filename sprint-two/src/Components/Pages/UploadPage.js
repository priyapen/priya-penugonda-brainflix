import React from 'react';
import './UploadPage.scss';


export default function UploadPage (props) {

    const clickedwithinupload = (event) => {
        event.preventDefault();
       alert("form has been submitted");
       props.history.goBack();
   }
    
    return (
        <div>
            <h1 className="upl__heading">Upload Video</h1>
            <p className="upl__thumb">Video Thumbnail</p>
            <form action="">
                <label htmlFor="" className="upl__titlelbl">Title your video</label>
                <input type="text" placeholder="Add a title to your video" className="upl__title" name="vidtitle"></input>
                <label htmlFor="" className="upl__desclbl">Add a video description</label>
               <textarea placeholder="Add a description of your video" className="upl__desc"></textarea>
                <p className="upl__publbtn" onClick={ clickedwithinupload}>Publish</p>
                <p className="upl__cancel" onClick={()=>{props.history.goBack();}}>Cancel</p>
            </form>
        </div>
    );
};

