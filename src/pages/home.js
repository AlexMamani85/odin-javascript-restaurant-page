let homeComponent=document.createElement("div");
let title=document.createElement("div");
let paragraph=document.createElement("div");

let footerAddress=document.createElement("div");
let footerPhone=document.createElement("div");
let footerCity=document.createElement("div");

let footer=document.createElement("div");


title.innerHTML="Acerca de Nosotros";
paragraph.innerHTML=`Somos un acogedor restaurante que nació como un sueño en una modesta
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
reunión de negocios y de complicidadaaa.`

footerAddress.innerHTML='Address: Av. Ejercito 1547';
footerPhone.innerHTML='Phone: 316 250 3356';
footerCity.innerHTML='(Ciudad - Pais): Arequipa - Peru';

homeComponent.style=`
    border: 2px solid red;
    padding: 20px 50px;
    border-radius: 20px;
    background-color: lightgoldenrodyellow;
`

title.style=`
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: 2rem;
    padding: 50px 0;
`
paragraph.style=`
    text-align: justify;
    color: red;
    font-size: 1.5rem;
    padding: 50px 50px;
`

footer.style=`
    text-align: center;
    color: red;
    font-size: 1.2rem;
    padding: 50px 0;
`;

footer.appendChild(footerAddress);
footer.appendChild(footerPhone);
footer.appendChild(footerCity);

homeComponent.appendChild(title);
homeComponent.appendChild(paragraph);
homeComponent.appendChild(footer);

export default homeComponent;
