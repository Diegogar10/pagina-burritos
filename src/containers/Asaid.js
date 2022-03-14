import React from "react";
import { SocialButton } from "../Components/SocialButton";

const Asaid = ({info})=>{
    return(
        <aside>
            <div className="socialMedia__container">
                {console.log(info)}
                {info.map((item)=>(
                    <SocialButton title={item.title}/>
                ))}
            </div>
            <div className="whatsapp__container">
                <button>Whatsapp</button>
            </div>
        </aside>
    );
};

export {Asaid};