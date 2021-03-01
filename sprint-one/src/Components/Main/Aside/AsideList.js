import React from 'react';
import AsideListItem from './AsideListItem';
import './Aside.scss';


function AsideList ({dataFromMain,handleclick,videodetailslist}) {
        const videolist = dataFromMain;
    console.log(videolist);
    console.log({ videodetailslist });

        return (
                <ul className="video">
                    <li>
                        <h2 className="video__section-title">Next Video</h2>
                    </li>
                        
                    {
                            videolist.map(video => {
                                    
                                if (video.id !== videodetailslist.id && videolist.length > 0) {
                                    // console.log(video);
                                    return <AsideListItem key={video.id} id={video.id} videolistitem={video} imgsrc={video.image} channel={video.channel} title={video.title} handleclick={handleclick} />
                                } 
                            })
                    }
                    

                </ul>
        );
}

export default AsideList;
