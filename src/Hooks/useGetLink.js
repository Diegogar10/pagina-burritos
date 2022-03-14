import React from "react";

const links = {
    menu:[{
        title:'Nosotros',
        url:'/nosotros'
        },
        {
        title:'Recetas',
        url: '/recetas' 
        }, 
        {
        title:'Arma tu burro',
        url:'/arma-tu-burro'
        },
        {
        title:'Contactenos',
        url:'/contactenos'
    }],
    redes:[{
        title:'Facebook',
        url:'',
    },
    {
        title:'Instagram',
        url:''
    },
    {
        title:'Youtube',
        url:''
    }]
}

const useGetLinks = ()=>(links);


export {useGetLinks};