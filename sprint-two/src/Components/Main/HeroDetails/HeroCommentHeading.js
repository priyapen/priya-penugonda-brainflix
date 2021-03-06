import React from 'react';


const HeroCommentHeading = (props) => {
    console.log(props.videodetails.comments);
    return (
        
        <h2 className="comment__title">{props.videodetails.comments.length} Comments</h2>
    );
};



export default HeroCommentHeading;
