import React from "react";
import './PanelDescription.scss';

const PanelDescription = ({ children}) => {

    return(
        <section className='general'>
            { children }
        </section>
    );
}

export {PanelDescription};