import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../Context/AppContext';
import './AnchorGeneric.scss';



const AnchorGeneric = ({nombre, url, footerState}) => {

    const { toggleMenuState } = React.useContext(AppContext);

    const changeMenuState = () => {
        toggleMenuState();
    }
 return(
 
    <li className="container__link">
        <Link to={url}>
            <a href="" onClick={changeMenuState}>{nombre}</a>
        </Link>
    </li>
 );
}

export {AnchorGeneric};