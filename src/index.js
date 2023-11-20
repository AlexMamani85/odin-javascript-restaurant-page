import hola from './pages/home';
console.log("src/index.js");

let contentDiv= document.getElementById("content");
let containerDiv = document.createElement("div");
let title= document.createElement("h1");
let navbar=document.createElement("div");
let navbar_item1=document.createElement("a");
let navbar_item2=document.createElement("a");
let navbar_item3=document.createElement("a");

let body=document.createElement("div");
let bodyTitle=document.createElement("div");
let bodyBody=document.createElement("div");

let cardContainer=document.createElement("div");

let bodyFooterAddress=document.createElement("div");
let bodyFooterPhone=document.createElement("div");
let bodyFooterCiudad=document.createElement("div");

let bodyFooter=document.createElement("div");


title.innerHTML = 'Restaurant "Hispanoamericano"';
navbar_item1.innerHTML="Home";
navbar_item2.innerHTML="Menu";
navbar_item3.innerHTML="Contact";


bodyTitle.innerHTML="Acerca de Nosotros";
bodyBody.innerHTML=`Somos un acogedor restaurante que nació como un sueño en una modesta
cafetería el 3 de Julio de 2010 y que se ha construido y mejorado; y a
partir del 5 de Abril de 2016 en nuestra actual ubicación para brindar
una oferta de platos típicos, así como también diferentes opciones
para satisfacer sus antojos. Estamos ubicados en pleno corazón de
Túquerres, en el departamento de Nariño; al suroccidente de Colombia;
contamos con un espacio finamente decorado con estilo moderno, donde
podrá apreciar calidad y el toque diferente de sus platos preparados
con selectos ingredientes, asimismo podrá degustar la suculenta cocina
típica, pastas, y pescados de la mejor calidad. Martino's Restaurante,
es una fiesta en el paladar, un juego para las pupilas, es un punto de
reunión de negocios y de complicidad.`

bodyFooterAddress.innerHTML='Address: Av. Ejercito 1547';
bodyFooterPhone.innerHTML='Phone: 316 250 3356';
bodyFooterCiudad.innerHTML='(Ciudad - Pais): Arequipa - Peru';


navbar_item1.classList.add("navbar_item");
navbar_item2.classList.add("navbar_item");
navbar_item3.classList.add("navbar_item");

containerDiv.style = "\npadding: 20px 50px;\n\n";
title.style=`
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: 50px;
`
navbar.style=`
    display: flex;
    justify-content: space-evenly;
    padding: 50px;
`
let navbar_itemStyle=`
    font-size: 1.5rem;
    list-style: none;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid red;
    color: red;
    font-weight: bolder;
    background-color: yellow;
    border-radius: 5px;
    margin: 0 5px;
`
navbar_item1.style=navbar_itemStyle;
navbar_item2.style=navbar_itemStyle;
navbar_item3.style=navbar_itemStyle;

body.style=`
    border: 2px solid red;
    border-radius: 20px;
    padding: 20px 50px;
    background-color: lightgoldenrodyellow;
`

bodyTitle.style=`
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: 2rem;
    padding: 50px 0;
`
bodyBody.style=`
    text-align: justify;
    color: red;
    font-size: 1.5rem;
    padding: 50px 50px;
`

bodyFooter.style=`
    text-align: center;
    color: red;
    font-size: 1.2rem;
    padding: 50px 0;
`;

cardContainer.style=`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
`

contentDiv.appendChild(containerDiv);
contentDiv.appendChild(title);
contentDiv.appendChild(navbar);
navbar.appendChild(navbar_item1);
navbar.appendChild(navbar_item2);
navbar.appendChild(navbar_item3);

bodyFooter.appendChild(bodyFooterAddress);
bodyFooter.appendChild(bodyFooterPhone);
bodyFooter.appendChild(bodyFooterCiudad);

let Cards=[
    {
        title:'Domingo: Adobo arequipeño',
        body:`El adobo arequipeño es un plato bandera de la gastronomía
            peruana creado en la ciudad de Arequipa. Según la costumbre
            characata, no solo se come en el almuerzo sino también en el
            desayuno antes de iniciar el día y se sirve con pan para
            absorber su jugo. Un potaje tan jugoso como una sopa que es a
            base de una carne de cerdo marinada con ajíes nativos, especias,
            hierbas y, el ingrediente que le da el sabor característico, la
            chicha de jora (tan importante porque es el único líquido que se
            utiliza para la cocción).`, 
        imgSrc:'https://www.cocineroperuano.com/images/stories/chupe_de_viernes.jpg'
    }, {
        title:'Lunes: Chaque',
        body:`El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
        imgSrc:'https://comeperuano.b-cdn.net/wp-content/uploads/2020/10/receta-chaque-arequino-1.jpg.webp'  
    },  {
        title:'Martes: Chairo',
        body:`El chairo es una sopa que combina ingredientes típicos de la
        región de los Andes con alimentos del Viejo Mundo introducidos
        por los españoles, tales como carne de res y carne de cordero
        (la carne de llama y la de alpaca también pueden ser usadas).1​
        Es consumido principalmente en el occidente de Bolivia, el sur
        del Perú y otros países en la región andina.2​`,
        imgSrc:'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/07/chairo.jpg?w=700&ssl=1'  
    },  {
        title:'Miercoles: Chochoca',
        body:`La sopa de chochoca es una sopa tradicional arequipeña, muy rica
        y nutritiva, que se prepara a base de carne de res, cenina papas
        y harina de maíz. Generalmente se consume en los días de
        invierno, y su preparación es muy sencilla con lo que podrás
        deleitar a todos.`,
        imgSrc:'https://www.comida-peruana.com/base/stock/Recipe/245-image/245-image_web.jpg.webp'  
    },  {
        title:'Jueves: Chupe colorado o chuño',
        body:`El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
        imgSrc:'https://pbs.twimg.com/media/EferdtSX0AEocXS?format=jpg&name=large'  
    },  {
        title:'Viernes: Chupe de viernes',
        body:`para Viernes Santo se prepara el chupe de viernes que no lleva
        carnes rojas pero si pescado y mariscos, leche, huevo, cecinas
        de pescado, ají, papa y abundantes verduras.`,
        imgSrc:'https://www.cocineroperuano.com/images/stories/chupe_de_viernes.jpg'  
    },  {
        title:'Sabado: Puchero o timpusca',
        body:`La timpusca es una sopa de la gastronomía del Perú, típica de la
        gastronomía arequipeña.1​2​ Su nombre proviene del término
        quechua timpuy, que significa «hervir».1​3​ La timpusca es una
        sopa similar al chupe que consiste en un caldo a base de carne
        de ternera, cordero y chalona, al que se añade trigo, chuño,
        cochayuyo, hierbabuena y diversos vegetales. Se le suele añadir
        fruta como pera o durazno.1​2​4​`,
        imgSrc:'https://www.cocineroperuano.com/images/stories/timpusca.jpg'  
    }    
    ];

Cards.forEach(item => {
    let card=document.createElement("div");
    let cardTitle= document.createElement("div");
    let cardBody= document.createElement("div");
    let img= document.createElement("img");
    let cardFooter= document.createElement("div");

    cardTitle.innerHTML=item.title;
    cardBody.innerHTML=item.body;
    img.src=item.imgSrc;

    cardTitle.style=`
        color:yellow;
        text-align: center;
        font-weight: bolder;
        font-size: 2rem;
        padding: 20px;
    `

    cardBody.style=`
        text-align: justify;
        font-size: 1.5rem;
        padding: 20px;
    `
    cardFooter.style=`
        text-align: center;
        font-size: 1.2rem;
        padding: 20px;
    `
    img.style=`
        width: 100%;
        height: 100%;
        border-radius: 40px;
    `

    card.style=`
        border: 4px solid yellow;
        background-color: red;
        color: white;
        margin: 20px;
        border-radius: 20px;
    `
    
    cardFooter.appendChild(img)

    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    
    cardContainer.appendChild(card);
});

bodyBody.appendChild(cardContainer);
body.appendChild(bodyTitle);
body.appendChild(bodyBody);
body.appendChild(bodyFooter);
    
contentDiv.appendChild(body);

contentDiv.appendChild(hola);

