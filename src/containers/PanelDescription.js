import React from "react";
import './PanelDescription.scss';

const PanelDescription = ({number, position, classN, url, children}) => {

    return(
        <article className={`armaTuburro__description--${classN} 'visible'`}>
            <div className={position}>
                <h4>{number}</h4>
            </div>
            <div className="armaTuBurro__content" >
                {children}
            </div>
            <img className={"flecha--"+position} alt='icon' src={url} /> 
        </article>
    );
}

export {PanelDescription};