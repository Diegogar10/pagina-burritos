import React from "react";
import { AppContext } from "../Context/AppContext";
import './Card.scss';

const Card = ({info, clase})=>{

    const {setOption_statePanel, setProtein_statePanel} = React.useContext(AppContext);

    const selectFunction = ()=>{
        if(info.funtion === 1){
            setOption_statePanel(
                {
                    protein:info.protein,
                    additions: info.addition
                }
            );
        } else if(info.funtion === 2){    
                setProtein_statePanel({protein:info.title});
    }
}


    return(
        <div className={`card${clase}`} onClick={selectFunction} >
            <img src={info.url && info.url} alt=''></img>
            {info.title && <h3>{info.title}</h3>}
            {info.price && <h4>{`${info.price.toFixed(3)}`}</h4>}
            {info.protein && <p>{`(${info.protein}) ${(info.protein === 1 && 'Proteina') || 'Proteinas'} a elección`}</p>}
            {info.base && <p>{`(${info.base}) Ingreientes base`}</p>}
            {info.addition >= 1 && <p>{`(${info.addition}) Adiciones a elección`}</p>} 
            {info.weigth && <p><span>{`(Aprox ${info.weigth} g)`}</span></p>}
        </div>
    );
}


export {Card};