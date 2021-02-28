import React, { Component } from 'react';


function HeroUserComment(props) {
    const commentdate = new Date(props.time).toLocaleDateString('en-US');
        return (
              <ul className="publ__comment" id={props.id}>
                <li className="publ__imageblock">
                    <img className="publ__img"></img>
                </li>
                <li className="publ__content">
                    <li className="publ__nametime">
                        <li className="publ__name">
                        {props.name}
                        </li>
                        <li className="publ__date">{commentdate}
                        </li>
                    </li>
                    <li className="publ__text">   
                    {props.comment}
                    </li>
                </li>
            </ul>
        );
}


HeroUserComment.propTypes = {

};


export default HeroUserComment;
