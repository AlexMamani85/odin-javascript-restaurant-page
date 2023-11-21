let menuComponent=document.createElement("div");

menuComponent.style=`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
`

let Cards=[
    {
        title:'Domingo: Adobo arequipeño',
        paragraph:`El adobo arequipeño es un plato bandera de la gastronomía
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
        paragraph:`El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
        imgSrc:'https://comeperuano.b-cdn.net/wp-content/uploads/2020/10/receta-chaque-arequino-1.jpg.webp'  
    },  {
        title:'Martes: Chairo',
        paragraph:`El chairo es una sopa que combina ingredientes típicos de la
        región de los Andes con alimentos del Viejo Mundo introducidos
        por los españoles, tales como carne de res y carne de cordero
        (la carne de llama y la de alpaca también pueden ser usadas).1​
        Es consumido principalmente en el occidente de Bolivia, el sur
        del Perú y otros países en la región andina.2​`,
        imgSrc:'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/07/chairo.jpg?w=700&ssl=1'  
    },  {
        title:'Miercoles: Chochoca',
        paragraph:`La sopa de chochoca es una sopa tradicional arequipeña, muy rica
        y nutritiva, que se prepara a base de carne de res, cenina papas
        y harina de maíz. Generalmente se consume en los días de
        invierno, y su preparación es muy sencilla con lo que podrás
        deleitar a todos.`,
        imgSrc:'https://www.comida-peruana.com/base/stock/Recipe/245-image/245-image_web.jpg.webp'  
    },  {
        title:'Jueves: Chupe colorado o chuño',
        paragraph:`El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
        imgSrc:'https://pbs.twimg.com/media/EferdtSX0AEocXS?format=jpg&name=large'  
    },  {
        title:'Viernes: Chupe de viernes',
        paragraph:`para Viernes Santo se prepara el chupe de viernes que no lleva
        carnes rojas pero si pescado y mariscos, leche, huevo, cecinas
        de pescado, ají, papa y abundantes verduras.`,
        imgSrc:'https://www.cocineroperuano.com/images/stories/chupe_de_viernes.jpg'  
    },  {
        title:'Sabado: Puchero o timpusca',
        paragraph:`La timpusca es una sopa de la gastronomía del Perú, típica de la
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
    cardBody.innerHTML=item.paragraph;
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
    
    menuComponent.appendChild(card);
});

export default menuComponent;