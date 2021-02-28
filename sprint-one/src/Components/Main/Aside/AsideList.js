import React, { Component } from 'react';
import AsideListItem from './AsideListItem';
import './Aside.scss';


class AsideList extends Component {
    
    // console.log("hello from Aside List");
    // console.log(props.dataFromMain);
    render() {
        const videolist = this.props.dataFromMain;
        // const videolist = this.props.dataFromMain.

        // console.log(this.videolist.at(0));

        return (
                <ul className="video">
                    <li>
                        <h2 className="video__section-title">Next Video</h2>
                    </li>
                
                    {
                    
                        // console.log(!videolist.at(0))
                        // videolist.map((video, i) => {
                        //     return <AsideListItem key={video.id} id={video.id} videolistitem={video} imgsrc={video.image} channel={video.channel} title={video.title} handleclick={this.props.handleclick} />
                        // }

                        
                        videolist.map((video,i) => {
                            
                            if (i != 0) { 
                                // console.log(video);
                            return <AsideListItem key={video.id} id={video.id} videolistitem={video} imgsrc={video.image} channel={video.channel} title={video.title} handleclick={this.props.handleclick} />
                            }

                        })
                    }                  
                </ul>
        );
    }
}


AsideList.propTypes = {

};


export default AsideList;
