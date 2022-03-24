import React from "react";

const iconoFacebook = require ('../Images/components/facebook.png');
const iconoInstagram = require ('../Images/components/instagram.png');
const iconoYoutube = require ('../Images/components/youtube.png');
const iconoWhatsapp = require ('../Images/components/whatsapp.png');

const links = {
    menu:[{
        title:'Nosotros',
        url:'/nosotros',
        footer: false
        },
        {
        title:'Recetas',
        url: '/recetas', 
        footer: false
        }, 
        {
        title:'Arma tu burro',
        url:'/arma-tu-burro',
        footer: false
        },
        {
        title:'Contactenos',
        url:'/contactenos',
        footer: false
    }],
    redes:[{
        title:'Facebook',
        url:'https://www.facebook.com/',
        urlImage:iconoFacebook
    },
    {
        title:'Instagram',
        url:'https://www.instagram.com/',
        urlImage:iconoInstagram
    },
    {
        title:'Youtube',
        url:'https://www.youtube.com/',
        urlImage:iconoYoutube
    }],
    whatsapp:[
        {
            title:'Whatsapp',
            url:'https://www.whatsapp.com/',
            urlImage:iconoWhatsapp
        }
    ]
    }

const useGetLinks = ()=>(links);


export {useGetLinks};