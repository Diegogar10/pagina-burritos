import React from "react";
import { SocialButton } from "../Components/SocialButton";
import './Asaid.css';

const Asaid = ({info, what})=>{
    return(
        <aside className="socialMedia">
            <div className="socialMedia__container">
                {console.log(info)}
                {info.map((item)=>(
                    <SocialButton title={item.title} url={item.url} urlImage={item.urlImage} />
                ))}
            </div>
            <div className="whatsapp__container">
                <SocialButton title={what[0].title} url={what[0].url} urlImage={what[0].urlImage} />
            </div>
        </aside>
    );
};

export {Asaid};