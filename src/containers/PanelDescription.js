import React from "react";
import { AppContext } from "../Context/AppContext";
import './PanelDescription.scss';

const PanelDescription = ({data, isButtonVisible, isPanelVisible, children}) => {

    return(
        <article className={`armaTuburro__description--${data.class} ${isPanelVisible&&'visible'||'invisible'}`}>
            <div className={data.position}>
                <h4>{data.number}</h4>
            </div>
            <div className="armaTuBurro__content" >
                {children}
            </div>
            {isButtonVisible && <img className={"flecha--"+data.position} src={data.src}></img> }
        </article>
    );
}

export {PanelDescription};