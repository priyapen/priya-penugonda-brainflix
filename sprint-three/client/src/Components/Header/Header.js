import "./Header.scss";
import Nav from "./Nav";

export default function Header(props) {
    return (
        <header className="header">
            <Nav handlefileupload={props.handlefileupload}/>
        </header>
        );
}

