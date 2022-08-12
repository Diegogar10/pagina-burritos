import React from "react";
import { AppContext } from "../Context/AppContext";
import './PanelDescription.scss';

const PanelDescription = ({data, isButtonVisible, isPanelVisible, children}) => {

    const saludo= () => {
        console.log('hola mundo');
    }
    const { setStateButtons } = React.useContext(AppContext);

    const setStateButtons2 = (id, value) => ()=>{
        setStateButtons(id,value);
    }

    return(
        <article className={`armaTuburro__description--${data.class} ${isPanelVisible&&'visible'||'invisible'}`}>
            <div className={data.position}>
                <h4>{data.number}</h4>
            </div>
            <div className="armaTuBurro__content">
                {children}
            </div>
            {isButtonVisible && <img className={"flecha--"+data.position} src={data.src}></img> || <button className={"button--"+data.position} onClick={setStateButtons2(data.name,true)}>Continuar</button> }
        </article>
    );
}

export {PanelDescription};