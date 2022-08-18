import React from "react";

const Target = ({info})=>{
    return(
        <div className="tarjet">
            <img src={info.url}></img>
            <h3>{info.title}</h3>
            <h4>${info.price}</h4>
            <p>({info.protein}) {info.protein == 1 && 'Proteina' || 'Proteinas'} a elección</p>
            <p>({info.base}) Ingreientes base</p>
            <p>{info.addition >= 1 && `(${info.addition}) Adiciones a elección`} </p>
            <p>{`(Aprox ${info.weigth} g)`}</p>
        </div>
    );
}

export {Target};