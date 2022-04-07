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
    ],
    images:[
        {
            title:'opt1',
            class:'opt',
            text1:'Arma',
            text2:'tu burrito',
            text3:'Vive la Experiencia'
        },
        {
            title:'opt2',
            class:'opt',
            text1:'Escoge',
            text2:'el tuyo',
            text3:'Disfrutalo en familia!'
        },
        {
            title:'opt3',
            class:'opt',
            text1:'Elige',
            text2:'ingredientes',
            text3:'Deleita tu paladar!'
        },
        {
            title:'opt4',
            class:'opt',
            text1:'El mejor',
            text2:'burrito',
            text3:'Como lo quieres!'
        }
    ]
    }

const useGetLinks = ()=>(links);


export {useGetLinks};