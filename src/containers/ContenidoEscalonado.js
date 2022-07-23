import React from "react";
import './ContenidoEscalonado.scss';


const ContenidoEscalonado = ({info})=> {
    return(
        <section className={info.clase}>
            <h3>{info.titulo}</h3>
            <p>{info.texto}</p>
        </section>
    );
}

export {ContenidoEscalonado};