import React from "react";
import { Target } from "../Components/Target";
import { useGetLinks } from "../Hooks/useGetLink";
import './Paso1.scss';

const Paso1 = ()=>{

    const {paso} = useGetLinks();

    return(
        <section className="Container__paso1">
            <article className="description">
                <h3>Escoge la opción de burrito</h3>
                <p>Puedes escoger entre tres opciones, cada una tiene carateristicas y tamaños difernetes</p>
            </article>
            <div className="tarjetas__container">
                {paso[0].opciones.map(item=>
                    <Target info={item}></Target>
                )}
            </div>  
        </section>
    );
}

export {Paso1};