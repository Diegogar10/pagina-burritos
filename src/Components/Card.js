import React from "react";
import { AppContext } from "../Context/AppContext";
import './Card.scss'

const Card = ({info})=>{


    const {state, setProtein} = React.useContext(AppContext);

    const selectBurrito = ()=>{
        
        if(info.funtion == 1){
            setProtein(
                {
                    protein:info.protein,
                    additions: info.addition
                }
            );
        } else if(info.funtion == 2){
            console.log('Hola mundo');
        }
        console.log(state);
    }

    return(
        <div className="card" onClick={selectBurrito}>
            <img src={info.url && info.url}></img>
            {info.title && <h3>{info.title}</h3>}
            {info.price && <h4>{`${info.price.toFixed(3)}`}</h4>}
            {info.protein && <p>{`(${info.protein}) ${info.protein == 1 && 'Proteina' || 'Proteinas'} a elección`}</p>}
            {info.base && <p>{`(${info.base}) Ingreientes base`}</p>}
            {info.addition >= 1 && <p>{`(${info.addition}) Adiciones a elección`}</p>} 
            {info.weigth && <p><span>{`(Aprox ${info.weigth} g)`}</span></p>}
        </div>
    );
}

export {Card};