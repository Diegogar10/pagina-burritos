import React from "react";
import './AnchorGeneric.css';

const AnchorGeneric = ({nombre, url}) => {
 return(
     <li className="container__link"><a href={url}>{nombre}</a></li>
 );
}

export {AnchorGeneric};