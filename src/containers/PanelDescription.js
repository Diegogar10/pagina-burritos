import React from "react";
import './PanelDescription.scss';

const PanelDescription = ({data, isVisible, children}) => {

    const saludo= () => {
        console.log('hola mundo');
    }

    return(
        <article className={`armaTuburro__description--${data.class} ${data.isVisible&&'visible'||'invisible'}`}>
            <div className={data.position}>
                <h4>{data.number}</h4>
            </div>
            <div className="armaTuBurro__content">
                {children}
            </div>
            {isVisible && <img className="flecha" src={data.src}></img> || <button className={"button--"+data.position} onClick={saludo}>Continuar</button> }
        </article>
    );
}

export {PanelDescription};