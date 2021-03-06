import React from 'react';


export default function UploadPage (props) {

    const clickedwithinupload = (event) => {
        event.preventDefault();
       alert("form has been submitted");
       props.history.goBack();
   }
    
    return (
        <div>
            <h1>Upload Video</h1>
            <p>Video Thumbnail</p>
            <form action="">
                <label for="" className="upl__titlelbl">Title your video</label>
                <input type="text" placeholder="Add a title to your video" className="upl__title" name="vidtitle"></input>
                <label for="" className="upl__desclbl">Add a video description</label>
               <textarea placeholder="Add a description of your video" className="upl__desc"></textarea>
                <a className="upl__btn" onClick={ clickedwithinupload}>Publish</a>
                <a className="upl__cancel" onClick={()=>{props.history.goBack();}}>Cancel</a>
            </form>
        </div>
    );
};

