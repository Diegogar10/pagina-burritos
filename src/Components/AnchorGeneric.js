import React from "react";
import { Link } from "react-router-dom";
import './AnchorGeneric.css';


const AnchorGeneric = ({nombre, url}) => {
 return(
 
    <li className="container__link">
        <Link to={url}>
            <a href="">{nombre}</a>
        </Link>
    </li>
 );
}

export {AnchorGeneric};