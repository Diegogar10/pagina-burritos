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
                <div>
                    <img alt={title} id={id} src={image}/>
                    <p>{title}</p>
                </div>
            ))}
        </div>
    );
}
export {Carrousel};