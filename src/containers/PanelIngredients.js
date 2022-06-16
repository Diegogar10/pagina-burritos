import React from "react";
import { AnchorGeneric } from "../Components/AnchorGeneric";
import './PanelIngredientes.scss'

const PanelIngredients = ({clase}) => {
    return(
        <section className={clase}>
            <p>Vive una nueva experiencia en la forma de comer burritos mexicanos, escoge tus adiciones favoritas, lo armamos para ti y listo. ¡A disfrutar de una explosión de sabor!</p>
            <h3>Agunos de nuestros ingredientes</h3>
            <div className="ingredientes-container">

            </div>
            <AnchorGeneric nombre='Conoce más...' url='/arma-tu-burro' footerState='false' />
        </section>
    )
}

export {PanelIngredients};