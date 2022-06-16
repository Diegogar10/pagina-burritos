import react from "react";
import React from "react";
import { PanelIngredients } from "../Containers/PanelIngredients";
import { PanelLogo } from "../Containers/PanelLogo";
import { TextHome } from "../Containers/TextHome";
import { AppContext } from "../Context/AppContext";
import './Styles/Home.scss'

const Home = ()=>{

    const { state } = react.useContext(AppContext);

    return(
        
        <div className={`Home ${state.optImage}`}>
            <PanelLogo clase="Logo"></PanelLogo>
            <TextHome clase="Texto"></TextHome>
            <PanelIngredients clase="description"></PanelIngredients>
        </div>
        
    );
};

export {Home};