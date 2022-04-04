import React from "react";
import './SocialButton.scss';

const SocialButton = ({title, url, urlImage})=>{
    return(
        <a className="ancla__social" href={url}> 
            <img src={urlImage} alt={title}/>
            <p>{title}</p>
        </a>
    );
};

export {SocialButton};