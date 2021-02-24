import "./Header.sass";
import LogoIcon from '../../Assets/Logo/Logo-brainflix.svg';

function Logo() {
        return (
            <>
                <img src={LogoIcon} alt="logo" className="nav__logo"/>
            </>
        );
}

export default Logo;