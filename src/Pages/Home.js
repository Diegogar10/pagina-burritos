import React from "react";
import { PanelIngredients } from "../Containers/PanelIngredients";
import { PanelLogo } from "../Containers/PanelLogo";
import { TextHome } from "../Containers/TextHome";
import './Styles/Home.scss'

const Home = ()=>{

    

    return(
        
        <div className="Home">
            <PanelLogo clase="Logo"></PanelLogo>
            <TextHome clase="Texto"></TextHome>
            <PanelIngredients clase="Ingredientes"></PanelIngredients>
        </div>
        
    );
};

export {Home};