import React from "react";
import { PanelLogo } from "../Containers/PanelLogo";
import { useGetLinks } from "../Hooks/useGetLink";
import { ContenidoEscalonado } from "../Containers/ContenidoEscalonado";
import './Styles/Nosotros.scss';

const Nosotros = ()=>{

    const { nosotros } = useGetLinks();

   /*  const data = {
        titulo: 'Mision',
        texto: 'lorem isu',
        clase: 'mision escalonado'
    }; */

    return(
        <div className="nosotros__container">
            <PanelLogo clase="Logo"></PanelLogo>
            <div className="nosotros__info">
                {nosotros.map((item) => (
                    <ContenidoEscalonado info={item}></ContenidoEscalonado> 
                ))} 
            </div>
        </div>

    );
};

export {Nosotros};