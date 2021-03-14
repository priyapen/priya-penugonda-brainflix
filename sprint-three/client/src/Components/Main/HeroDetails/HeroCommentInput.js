import React from 'react';
import HeroCommentHeading from './HeroCommentHeading';
import Userimg from '../../Header/Userimg';
import './HeroDetails.scss';

export default function HeroCommentInput(props) {
    return (
            <section className="comment">
                <HeroCommentHeading videodetails={props.videodetails}/>
            
                <article className="comment__block">
                    <div className="comment__imageblock">
                        <Userimg />
                        </div>
                    <div className="comment__detail">
                    {/* <label className="comment__heading">Join the Conversation</label> */}
                    <form className="comment__form">
                        <label className="comment__heading">Join the Conversation</label>
                        <textarea id="comment" className="comment__commenttextinput" cols="30" rows="10" placeholder="Add a new comment" minLength="3"></textarea>
                        
                        <button type="submit" className="comment__btn">Comment</button>
                    </form>
                </div>
            </article>
        </section>
                    
        );
}
