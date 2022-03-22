import React from "react";
import './SocialButton.css'

const SocialButton = ({title, url, urlImage})=>{
    return(
        <a href={url}> 
            <img src={urlImage} alt={title}/>
        </a>
    );
};

export {SocialButton};