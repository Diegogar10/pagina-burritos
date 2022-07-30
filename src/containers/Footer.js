import React from "react";
import { SocialButtonSingle } from "../Components/SocialButtonSingle";
import { useGetLinks } from "../Hooks/useGetLink";
import './Footer.css'

const Footer = () => {

    const {redes2} = useGetLinks();
    const img = require('../Images/Footer/DF.png'); 
    return(
        <footer className="footer__container">
            <div className="social__container">
                {redes2.map(item=>(
                    <SocialButtonSingle 
                        title={item.title} 
                        url={item.url} 
                        urlImage={item.urlImage}
                        >
                    </SocialButtonSingle>
                    ))}
            </div>
            <div className="info__container">
                <h4>Tremendo Burrito Co</h4>
                <p>Todos lo derechos reservados ©</p>
            </div>
            <div className="info__creadores">
                <article>
                    <h4>Desarollo Web:</h4>
                    <p>Digital Form</p>
                </article>
                <div className="logo__container">
                    <a href="https://diegogar10.github.io/">
                        <img src={img} alt="DF"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export {Footer};