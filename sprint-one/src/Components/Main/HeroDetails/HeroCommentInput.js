import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import userimage


class HeroCommentInput extends Component {
    render() {
        return (
            <section className="comment">
            <h2 className="comment__heading">Join the Conversation</h2>
            <article className="comment__block">
                // <div className="comment__imageblock">
                //     <img src="./assets/Images/Mohan-muruge.jpg" alt="" className="comment__img"/>
                // </div>
                <div className="comment__detail">
                    <form className="comment__form">
                        <label className="comment__namelabel" for="fname">Name</label>
                        <input className="comment__nameinput" type="text" id="fname" name="fname" placeholder="Name" minlength="3"/>
                        <label className="comment__commenttextlabel" for="comment">Comment
                        <textarea id="comment" className="comment__commenttextinput" cols="30" rows="10" placeholder="Add a new comment" minlength="3"></textarea>
                        </label>
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
