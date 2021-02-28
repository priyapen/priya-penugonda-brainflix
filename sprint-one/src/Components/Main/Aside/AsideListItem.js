
import './Aside.scss';



const AsideListItem = (props) => {
    return (

            // {/* <li className="">{props.videolistitem.id}</li> */}
        <li className="video__listitem">
            <ul className="video__image" id={props.id}>
                <li className="video__imgblk">
                    <img id={props.id} src={props.imgsrc} alt="video thumbnail" className="video__thumbnail" onClick={(event) => props.handleclick(event)} />
                </li>
            </ul>
            <ul className="video__titlechan-block">
                <li> <h2 className="video__title">{props.title}</h2>
                </li>
                <li>
                    <h3 className="video__channel">{props.channel}</h3>
                </li>
            </ul>
        </li>
    );
};


AsideListItem.propTypes = {

};


export default AsideListItem;
