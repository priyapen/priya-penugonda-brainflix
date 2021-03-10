import React from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import HeroCommentInput from './HeroCommentInput';
import HeroCommPubl from './HeroCommPubl';
import './HeroDetails.scss';

export default function HeroDetails({videodetailslist}) {
    

        return (
            <section className="hero__details">
                <HeroHeading videodetails={videodetailslist} />
                <HeroDescription videodetails={videodetailslist} />
                <HeroCommentInput videodetails={videodetailslist} />
                <HeroCommPubl videodetails={videodetailslist} />
            </section>
        );

}
