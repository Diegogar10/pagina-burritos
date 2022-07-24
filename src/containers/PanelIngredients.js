import React from "react";
import { AnchorGeneric } from "../Components/AnchorGeneric";
import { useGetLinks } from "../Hooks/useGetLink";
import { Carrousel } from "../Components/Carrousel";
import './PanelIngredients.scss'

const PanelIngredients = ({clase}) => {

    const {ingredients} = useGetLinks(); 

    return(
        <section className={clase}>
            <p>Vive una nueva experiencia en la forma de comer burritos, escoge tus adiciones favoritas, lo armamos para ti y listo. <span>¡A disfrutar de una explosión de sabor!</span></p>
            <div className="ingredientes-container">
                <Carrousel ingredientes={ingredients}></Carrousel>
            </div>
            <AnchorGeneric nombre='Conoce más...' url='/arma-tu-burro' change={false}/>
        </section>
    )
}

export {PanelIngredients};