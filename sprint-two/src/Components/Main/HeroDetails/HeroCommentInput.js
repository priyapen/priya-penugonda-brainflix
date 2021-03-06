import React, { Component } from 'react';
import HeroCommentHeading from './HeroCommentHeading';
import Userimg from '../../Header/Userimg';
import './HeroDetails.scss';



class HeroCommentInput extends Component {
    render() {
        return (
            <section className="comment">
                <HeroCommentHeading videodetails={this.props.videodetails}/>
            
                <article className="comment__block">
                    <div className="comment__imageblock">
                        <Userimg />
                        </div>
                    <div className="comment__detail">
                    <h3 className="comment__heading">Join the Conversation</h3>
                    <form className="comment__form">
                        <textarea id="comment" className="comment__commenttextinput" cols="30" rows="10" placeholder="Add a new comment" minLength="3"></textarea>
                        
                        <button type="submit" className="comment__btn">Comment</button>
                    </form>
                </div>
            </article>
        </section>
                    
        );
    }
}


HeroCommentInput.propTypes = {

};


export default HeroCommentInput;
