import React from 'react';


const UploadPage = (props) => {

   const  clickedwithinupload = () => {
    //    console.log("i've been clicked from within the upload page", routerProps);
    //    alert("form has been submitted");
       props.history.goBack();
   }
    console.log(props);
    
    return (
        <div>
            <h1>Upload Video</h1>
            <p>Video Thumbnail</p>
            <form action="">
                <label for="" className="upl__titlelbl">Title your video</label>
                <input type="" placeholder="Add a title to your video" className="upl__title"></input>
                <label for="" className="upl__desclbl">Add a video description</label>
               <textarea placeholder="Add a description of your video" className="upl__desc"></textarea>
                <a className="upl__btn" onClick={props.handlefileupload, clickedwithinupload}>Publish</a>
                <a className="upl__cancel">Cancel</a>
            </form>
        </div>
    );
};


export default UploadPage;
