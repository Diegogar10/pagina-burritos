import React from "react";

const icons = {
    Facebook : require ('../Images/components/facebook.png'),
    Instagram : require ('../Images/components/instagram.png'),
    Youtube : require ('../Images/components/youtube.png'),
    Whatsapp : require ('../Images/components/whatsapp.png'),
}
const ingredientes_image = {
    tomates:require ('../Images/components.carrousel/tomates.png'),
    cerdo:require ('../Images/components.carrousel/cerdo.png'),
    champinon:require ('../Images/components.carrousel/champinon.png'),
    chorizo:require ('../Images/components.carrousel/chorizo.png'),
    frijol:require ('../Images/components.carrousel/frijol.png'),
    guacamole :require ('../Images/components.carrousel/guacamole.png'),
    huevo:require ('../Images/components.carrousel/huevo.png'),
    jalapeno:require ('../Images/components.carrousel/jalapeno.png'),
    lechuga:require ('../Images/components.carrousel/lechuga.png'),
    maiz:require ('../Images/components.carrousel/maiz.png'),
    picoGallo:require ('../Images/components.carrousel/picoGallo.png'),
    platano:require ('../Images/components.carrousel/platano.png'),
    pollo:require ('../Images/components.carrousel/pollo.png'),
    queso:require ('../Images/components.carrousel/queso.png'),
}

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
        urlImage:icons.Facebook
    },
    {
        title:'Instagram',
        url:'https://www.instagram.com/',
        urlImage:icons.Instagram
    },
    {
        title:'Youtube',
        url:'https://www.youtube.com/',
        urlImage:icons.Youtube
    }],
    whatsapp:[
        {
            title:'Whatsapp',
            url:'https://www.whatsapp.com/',
            urlImage:icons.Whatsapp
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
    ],
    ingredients:[
        {
            title:'Tomates Cherry',
            cant:'50g',
            image:ingredientes_image.tomates,
            id:'fp001'
        },
        {
            title:'Cerdo Desmechado',
            cant:'100g',
            image:ingredientes_image.cerdo,
            id:'fp002'
        },
        {
            title:'Champiñones',
            cant:'80g',
            image:ingredientes_image.champinon,
            id:'fp003'
        },
        {
            title:'Chorizo',
            cant:'40g',
            image:ingredientes_image.chorizo,
            id:'fp004'
        },
        {
            title:'Frijol Refrito',
            cant:'60g',
            image:ingredientes_image.frijol,
            id:'fp005'
        },
        {
            title:'Guacamole',
            cant:'30g',
            image:ingredientes_image.guacamole,
            id:'fp006'
        },
        {
            title:'Huevo',
            cant:'15g',
            image:ingredientes_image.huevo,
            id:'fp007'
        },
        {
            title:'Jalapeños',
            cant:'10g',
            image:ingredientes_image.jalapeno,
            id:'fp008'
        },
        {
            title:'Lechuga Fresca',
            cant:'30g',
            image:ingredientes_image.lechuga,
            id:'fp009'
        },
        {
            title:'Maiz Tierno',
            cant:'40g',
            image:ingredientes_image.maiz,
            id:'fp010'
        },
        {
            title:'Pico de Gallo',
            cant:'60g',
            image:ingredientes_image.picoGallo,
            id:'fp011'
        },
        {
            title:'Pollo Desmechado',
            cant:'150g',
            image:ingredientes_image.pollo,
            id:'fp012'
        },
        {
            title:'Queso',
            cant:'50g',
            image:ingredientes_image.queso,
            id:'fp013'
        },
        {
            title:'Platano Maduro',
            cant:'50g',
            image:ingredientes_image.platano,
            id:'fp0014'
        },{
            title:'Tomates Cherry',
            cant:'50g',
            image:ingredientes_image.tomates,
            id:'fp001'
        },
        {
            title:'Cerdo Desmechado',
            cant:'100g',
            image:ingredientes_image.cerdo,
            id:'fp002'
        },
        {
            title:'Champiñones',
            cant:'80g',
            image:ingredientes_image.champinon,
            id:'fp003'
        },
        {
            title:'Chorizo',
            cant:'40g',
            image:ingredientes_image.chorizo,
            id:'fp004'
        }
    ],
    nosotros:[
        {
            titulo: 'Misión',
            texto: 'lorem isu',
            clase: 'mision escalonado'
        },
        {
            titulo: 'Visión',
            texto: 'lorem isu',
            clase: 'mision escalonado x1'
        },
        {
            titulo: 'Valores',
            texto: 'lorem isu',
            clase: 'mision escalonado x3'
        }
    ]
    }

const useGetLinks = ()=>(links);


export {useGetLinks};