import React from "react";
import { AnchorGeneric } from "../Components/AnchorGeneric";
import './PanelIngredients.scss'

const PanelIngredients = ({clase}) => {
    return(
        <section className={clase}>
            <p>Vive una nueva experiencia en la forma de comer burritos, escoge tus adiciones favoritas, lo armamos para ti y listo. <span>¡A disfrutar de una explosión de sabor!</span></p>
            <div className="ingredientes-container">

            </div>
            <AnchorGeneric nombre='Conoce más...' url='/arma-tu-burro' footerState='false' />
        </section>
    )
}

export {PanelIngredients};