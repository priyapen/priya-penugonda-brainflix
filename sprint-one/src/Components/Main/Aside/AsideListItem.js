import React from 'react';
import './Aside.scss';



const AsideListItem = (props) => {
    return (
        <div>
            {/* {console.log(props)} */}
            {/* <li className="">{props.videolistitem.id}</li> */}
            <li className="video__image" id={props.id}><img id={props.id} src={props.imgsrc} alt="video thumbnail" className="video__thumbnail" onClick={(event) => props.handleclick(event)}/></li>
            <li><h2 className="video__title">{props.title}</h2></li>
            <li><h3 className="video__channel">{props.channel}</h3></li>
        </div>
    );
};


AsideListItem.propTypes = {

};


export default AsideListItem;
