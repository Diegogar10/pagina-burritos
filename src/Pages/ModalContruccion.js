import React from "react";
import './Styles/ModalContruccion.scss'
import pinon from '../Images/ModalContruccion/pinonIcon.svg'

const logo = require ('../Images/ModalContruccion/logoBurrito.png');

const ModalContruccion = ({empresa}) => (
    <main className="modal">
        <figure className="modal__logo">
            <img src={logo} alt="Logo"></img>
        </figure>
        <section className="modal__container">
            <h1 className="modal__title">Bienvenido al website de {empresa}</h1>
            <p className="modal__message">!Nos encontramo remodelando nuestra pagina para brindarte un mejor servicio, muy pronto estaremos contigo!</p>
        </section>
        <figure className="modal__icons">
            <img className="pinon1" src={pinon} alt="Icono1-contruccion"></img>
            <img className="pinon2" src={pinon} alt="Icono2-contruccion"></img>
        </figure>
    </main>
);

export {ModalContruccion};