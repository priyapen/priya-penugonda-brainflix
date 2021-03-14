import React from 'react';
import AsideListItem from './AsideListItem';
import './Aside.scss';

export default function AsideList ({dataFromMain,videodetailslist}) {
        const videolist = dataFromMain;

        return (
                <ul className="video">
                    <li>
                        <h2 className="video__section-title">Next Video</h2>
                     </li>

                {   
                    
                    videolist.map(video => {       
                        if (video.id !== videodetailslist.id && videolist.length > 0) {
                            return <AsideListItem key={video.id} id={video.id} imgsrc={video.image} channel={video.channel} title={video.title} />
                        } else return null;
                        }
                    )
                     
                }
                </ul>       
              
        );
}

