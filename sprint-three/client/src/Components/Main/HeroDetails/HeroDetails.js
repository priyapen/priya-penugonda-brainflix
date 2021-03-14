import React from 'react';
import HeroHeading from './HeroHeading';
import HeroCommentInput from './HeroCommentInput';
import HeroCommPubl from './HeroCommPubl';
import './HeroDetails.scss';

export default function HeroDetails({videodetailslist}) {
        return (
            <section className="hero__details">
                <HeroHeading videodetails={videodetailslist} />
                <p className="hero__description">{videodetailslist.description}</p>
                <HeroCommentInput videodetails={videodetailslist} />
                <HeroCommPubl videodetails={videodetailslist} />
            </section>
        );

}
