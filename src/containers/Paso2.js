import React from "react";
import { Card } from "../Components/Card";
import { AppContext } from "../Context/AppContext";
import { useGetLinks } from "../Hooks/useGetLink";
import './Paso2.scss';

const Paso2 = () => {

    const {paso} = useGetLinks();
    const {state} = React.useContext(AppContext);

    return(
        <section className="Container__paso2">
            <article className="description">
                <h3>{(state.modelCart.protein >= 2)&& `Escoge ${state.modelCart.protein} proteinas!` || 'Escoge la proteina que mas te guste!'}</h3>
                <p>{(state.modelCart.protein >= 2)&& 'Elige las que más te gusten!'}</p>
            </article>
            <div className="tarjetas__container">
                {(paso[1].opciones.map(item =>
                           <Card info={item} ></Card>
                            )
                    )
                }
            </div>  
        </section>
    )
}

export {Paso2};