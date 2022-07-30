import React from "react";
import './SocialButtonSingle.scss';

const SocialButtonSingle = ({title, url, urlImage})=>{
    return(
        <a className="ancla__social2" href={url}> 
            <img src={urlImage} alt={title}/>
        </a>
    );
};

export {SocialButtonSingle};