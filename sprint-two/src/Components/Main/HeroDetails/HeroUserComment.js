import React from 'react';

function HeroUserComment({time, id, name,comment}) {
    const commentdate = new Date(time).toLocaleDateString('en-US');
        return (
              <ul className="publ__comment" id={id}>
                <li className="publ__imageblock">
                    {/* not adding alt text for user image because the alt text is being displayed instead of a round circle for user image. */}
                    <img className="publ__img" alt="user shown"></img>
                    
                </li>
                <li className="publ__content">
                    <li className="publ__nametime">
                        <li className="publ__name">
                        {name}
                        </li>
                        <li className="publ__date">{commentdate}
                        </li>
                    </li>
                    <li className="publ__text">   
                    {comment}
                    </li>
                </li>
            </ul>
        );
}

export default HeroUserComment;
