import React from "react";
import { ButtonMenu } from "../Components/ButtonMenu";
import './Menu.css';

const Menu = ({children})=> {
    return(
        <aside className="menu__container">
            <nav className="menu__content">
                <div className="menu__icon">
                    <ButtonMenu/>
                </div>
                <ul>
                    {children}
                </ul>
            </nav>
        </aside>
    );
}

export {Menu};