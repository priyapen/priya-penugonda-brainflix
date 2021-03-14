import React from 'react';

export default function HeroUserComment({time, id, name,comment}) {
    const commentdate = new Date(time).toLocaleDateString('en-US');
        return (
              <li className="publ__comment" id={id}>
                <div className="publ__imageblock">
                    {/* not adding alt text for user image because the alt text is being displayed instead of a circle for user image. */}
                    <img className="publ__img" alt=""></img>
                    
                </div>
                {/* <li className="publ__content"> */}
                    <div className="publ__nametime">
                    <p className="publ__name">
                        {name}
                        </p>
                    <p className="publ__date">{commentdate}
                    </p>
                    <p className="publ__text">   
                    {comment}
                    </p>
                    </div>
                    {/* <p className="publ__text">   
                    {comment}
                    </p> */}
                {/* </li> */}
            </li>
        );
}
