import React from 'react';
import './UploadPage.scss';
import thumbnail from '../../Assets/Images/Upload-video-preview.jpg';


export default function UploadPage (props) {

    const handlePublish = (event) => {
        event.preventDefault();
       alert("Video has been uploaded successfully. Taking you back to the home page.");
       props.history.goBack();
    }
    
    const handleCancel = (event) => {
        event.preventDefault();
        // confirm("Would you like to cancel and return to the homepage? Press OK to return to Home Page or Cancel to stay on this page");
        let confirmation = window.confirm("Press OK to return to Home Page or Cancel to stay on this page");
        if(confirmation === true ) {
            props.history.goBack();
          } else {
            return;
          }
    //    props.history.goBack();
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
                <p className="upl__publbtn" onClick={ handlePublish}>Publish</p>
                {/* <p className="upl__cancel" onClick={() => { props.history.goBack(); }}>Cancel</p> */}
                <p className="upl__cancel" onClick={handleCancel}>Cancel</p>
            </div>
        </section>
    );
};

