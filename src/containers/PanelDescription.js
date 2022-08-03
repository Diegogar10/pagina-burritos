import React from "react";

const PanelDescription = ({data, isVisible, children}) => {
    return(
        <article className={`armaTuburro__description--${data.class} ${data.isVisible&&'visible'||'invisible'}`}>
            <div className={data.position}>
                <h4>{data.number}</h4>
            </div>
            <div className="armaTuBurro__content">
                {children}
            </div>
            {isVisible && <img className="flecha" src={data.src}></img> || <button className="button"></button> }
        </article>
    );
}

export {PanelDescription};