import React from "react";
import { AppContext } from "../Context/AppContext";
import './Card.scss'

const Card = ({info})=>{


    const {state, setProtein} = React.useContext(AppContext);

    const selectBurrito = ()=>{
        setProtein(
            {
                protein:info.protein,
                additions: info.addition
            }
        );
        console.log(state);
    }

    return(
        <div className="card" onClick={selectBurrito}>
            <img src={info.url}></img>
            <h3>{info.title}</h3>
            <h4>${info.price.toFixed(3)}</h4>
            <p>({info.protein}) {info.protein == 1 && 'Proteina' || 'Proteinas'} a elección</p>
            <p>({info.base}) Ingreientes base</p>
            <p>{info.addition >= 1 && `(${info.addition}) Adiciones a elección`} </p>
            <p><span>{`(Aprox ${info.weigth} g)`}</span></p>
        </div>
    );
}

export {Card};