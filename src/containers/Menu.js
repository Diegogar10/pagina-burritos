import React from "react";
import { ButtonMenu } from "../Components/ButtonMenu";
import { AppContext } from "../Context/AppContext";
import './Menu.css';

const Menu = ({children})=> {

    const {state} = React.useContext(AppContext);

    return(
        <nav className={state.menuState && 'menu__container desplegado'||'menu__container'}>
            <section className="menu__content">
                <div className="menu__icon">
                    <ButtonMenu/>
                </div>
                <ul>
                    {children}
                </ul>
            </section>
        </nav>
    );
}

export {Menu};