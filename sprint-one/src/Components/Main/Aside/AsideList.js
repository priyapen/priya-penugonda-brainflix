import React, { Component } from 'react';
import AsideListItem from './AsideListItem';
import './Aside.scss';


class AsideList extends Component {
    
    // console.log("hello from Aside List");
    // console.log(props.dataFromMain);
    render() {
        const videolist = this.props.dataFromMain;
        return (
            <div>
                <ul>
                    <li><h2>Next Video</h2></li>
                    {
                        videolist.map(video => {
                            console.log(video.image);
                            return <AsideListItem key={video.id} id={video.id} videolistitem={video} imgsrc={video.image} channel={video.channel} title={video.title} handleclick={this.props.handleclick}/>

                        })
                    }
                </ul>
            </div>
        );
    }
}


AsideList.propTypes = {

};


export default AsideList;
