import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../Context/AppContext';
import './AnchorGeneric.scss';



const AnchorGeneric = ({nombre, url, footerState}) => {

    const { setHome } = React.useContext(AppContext);

    const changeFooter = value =>() => {
        setHome(value);
    }

 return(
 
    <li className="container__link">
        <Link to={url}>
            <a href="" onClick={changeFooter(footerState)}>{nombre}</a>
        </Link>
    </li>
 );
}

export {AnchorGeneric};