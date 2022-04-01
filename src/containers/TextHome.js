import React from "react";

const TextHome = ({clase}) => {
    return(
        <section className={clase}>
            <h2 >Arma <br/>tu burrito</h2> 
            <h3>Vive la experiencia!</h3>
            <div className="opt__container">
                <div className="opt"></div>
                <div className="opt"></div>
                <div className="opt"></div>
                <div className="opt"></div>
                <div className="opt"></div>
            </div>
        </section>
    )
}

export {TextHome};