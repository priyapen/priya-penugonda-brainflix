import { Link } from 'react-router-dom';
import './Aside.scss';


export default function AsideListItem(props) {
    return (
        <li className="video__listitem">
            <Link to={`/${props.id}`} className="video__link">
                <img id={props.id} src={props.imgsrc} alt="video thumbnail" className="video__thumbnail" />
            <div className="video__titlechan-block">
                    <h2 className="video__title">{props.title}</h2>
                    <h3 className="video__channel">{props.channel}</h3>
            </div>
            </Link>
        </li>
           
    );
}

