import React from "react";
import { Card } from "../Components/Card";
import { AppContext } from "../Context/AppContext";
import { useGetLinks } from "../Hooks/useGetLink";
import './Paso1.scss';

const Paso1 = ()=>{

    const {paso} = useGetLinks();
    const {state} = React.useContext(AppContext);
    

    return(
        <section className="Container__paso1">
            <article className="description">
                <h3>Escoge la opción de burrito</h3>
                <p>Puedes escoger entre tres opciones, cada una tiene carateristicas y tamaños difernetes</p>
            </article>
            <div className="tarjetas__container">
                {(state.modelCart.protein === 0) 
                    && (paso[0].opciones.map(item =>
                            <Card info={item} ></Card>
                        ))
                    || (<Card info={paso[0].opciones[state.modelCart.protein - 1]}></Card>)
                }
            </div>  
        </section>
    );
}

export {Paso1};