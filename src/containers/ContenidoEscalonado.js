import React from "react";
import './ContenidoEscalonado.scss';


const ContenidoEscalonado = ({info})=> {
    return(
        <section className={info.clase}>
            <h3>{info.titulo}</h3>
            {info.texto.map((item =>(
                <p>{item}</p>
            )))}
        </section>
    );
}

export {ContenidoEscalonado};