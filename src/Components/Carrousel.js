import React from "react";
import './Carrousel.scss';

const Carrousel = ({ingredientes})=>{


    return (
        <div className="carrousel_container">
            {ingredientes.map(({
                title,
                cant,
                image,
                id
            })=>(
                <img alt={title} id={id} src={image}/>
            ))}
        </div>
    );
}
export {Carrousel};