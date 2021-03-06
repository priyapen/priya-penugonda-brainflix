import React from 'react';


export default function HeroCommentHeading (props) {
    console.log(props.videodetails.comments);
    return (
        
        <h2 className="comment__title">{props.videodetails.comments.length} Comments</h2>
    );
};
