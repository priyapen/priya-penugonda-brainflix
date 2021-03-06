import React from 'react';
import AsideListItem from './AsideListItem';
import './Aside.scss';


function AsideList ({dataFromMain,videodetailslist}) {
        const videolist = dataFromMain;
    // console.log("video list in aside list",videolist);
    // console.log(videodetailslist);

        return (
                <ul className="video">
                    <li>
                        <h2 className="video__section-title">Next Video</h2>
                     </li>

                {   
                    
                    // videolist.filter(video => {
                    //     if (video.id !== videodetailslist.id && videolist.length > 0) console.log(video);

                    // })
                         videolist.map(video => {  
                                if (video.id !== videodetailslist.id && videolist.length > 0) {
                                    // console.log(video);
                                    // return <AsideListItem key={video.id} id={video.id} videolistitem={video} imgsrc={video.image} channel={video.channel} title={video.title} handleclick={handleclick} />
                                    return <AsideListItem key={video.id} id={video.id}  imgsrc={video.image} channel={video.channel} title={video.title} />
                                } 
                            }
                            )
                     
                }
                </ul>       
              
        );
}

export default AsideList;
