import React from "react";
import { Paso1 } from "../Containers/Paso1";

const icons = {
    Facebook : require ('../Images/components/facebook.png'),
    Instagram : require ('../Images/components/instagram.png'),
    Youtube : require ('../Images/components/youtube.png'),
    FacebookV2 : require ('../Images/Footer/facebook.png'),
    InstagramV2 : require ('../Images/Footer/instagram.png'),
    YoutubeV2 : require ('../Images/Footer/youtube.png'),
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

const ArmaBurrito_image = {
    flechaDer: require('../Images/ArmaBurrito/FlechaDer.png'),
    flechaIzq: require('../Images/ArmaBurrito/FlechaIzq.png')
}

const links = {
    menu:[{
        title:'Home',
        url:'/'
        },
        {title:'Nosotros',
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
        url:'https://www.facebook.com/tremendoburritoo/',
        urlImage:icons.Facebook
    },
    {
        title:'Instagram',
        url:'https://www.instagram.com/tremendoburritoco/',
        urlImage:icons.Instagram
    },
    {
        title:'Youtube',
        url:'https://www.youtube.com/',
        urlImage:icons.Youtube
    }],
    redes2:[{
        title:'Facebook',
        url:'https://www.facebook.com/tremendoburritoo/',
        urlImage:icons.FacebookV2
    },
    {
        title:'Instagram',
        url:'https://www.instagram.com/tremendoburritoco/',
        urlImage:icons.InstagramV2
    },
    {
        title:'Youtube',
        url:'https://www.youtube.com/',
        urlImage:icons.YoutubeV2
    }],
    
    whatsapp:[
        {
            title:'Whatsapp',
            url:'https://api.whatsapp.com/send?phone=573052823480',
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
            texto: [`Garantizar cada una de las expectativas de nuestros clientes 
                    donde se brindará una atención de calidad y platos inigualables preparados con amor.`],
            clase: 'mision escalonado'
        },
        {
            titulo: 'Visión',
            texto: [`Hacernos conocer a nivel local y nacional dejando en alto nuestros valores que reflejan 
                    la vivencia de una experiencia única en una forma saludable de comer.`],
            clase: 'mision escalonado x1'
        },
        {
            titulo: 'Valores',
            texto: ['+Brindar un experiencia al cliente a precios justos.',
                    '+Alta calidad y eficiencia en atención a nuestro clientes.',    
                    '+Pasión por la cocina, la alimentacion sana y de buena calidad.',
                    '+Altos estandares de sanidad y profesionalismo en la preparación de nuestro alimentos.'
                    ],
            clase: 'mision escalonado x3'
        }
    ],
    armaTuBurro:[
        {
            class:'paso1',
            name:'buton1',
            panel:'panel1',
            isVisible: true,
            position:'izq',
            number: 1,
            src:ArmaBurrito_image.flechaDer,
            chieldren:<Paso1></Paso1>
        },
        {
            class:'paso2',
            name:'buton2',
            panel:'panel2',
            isVisible: false,
            position:'der',
            number: 2,
            src:ArmaBurrito_image.flechaIzq,
            chieldren:''
        },
        {
            class:'paso3',
            name:'buton3',
            panel:'panel3',
            isVisible: false,
            position:'izq',
            number: 3,
            src:ArmaBurrito_image.flechaDer,
            chieldren:'hola'
        },
        {
            class:'paso4',
            name:'buton4',
            panel:'panel4',
            isVisible: false,
            position:'der',
            number: 4,
            src:ArmaBurrito_image.flechaIzq,
            chieldren:'',
        }
    ],
    paso:[
        {
            paso:1,
            opciones:[
                {
                    url:'/',
                    title:'Burrito Hogareño',
                    price:12000,
                    protein:1,
                    base:7,
                    addition:0,
                    weigth:400
                },
                {
                    url:'',
                    title:'Burrito Valiente',
                    price:18000,
                    protein:2,
                    base:7,
                    addition:3,
                    weigth:520
                },{
                    url:'',
                    title:'Burrito Valiente',
                    price:18000,
                    protein:2,
                    base:7,
                    addition:3,
                    weigth:520
                }
            ]
        }
    ]
    }

const useGetLinks = ()=>(links);


export {useGetLinks};