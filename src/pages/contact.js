let contactComponent=document.createElement("div");

let footerAddress=document.createElement("div");
let footerPhone=document.createElement("div");
let footerCity=document.createElement("div");

let bodyFooter=document.createElement("div");

footerAddress.innerHTML='Address: Av. Ejercito 1547';
footerPhone.innerHTML='Phone: 316 250 3356';
footerCity.innerHTML='(Ciudad - Pais): Arequipa - Peru';

contactComponent.style=`
    background-color: blue;
    border-radius: 20px;
`;

bodyFooter.style=`
    text-align: center;
    color: white;
    font-size: 1.2rem;
    padding: 50px 0;
`;

bodyFooter.appendChild(footerAddress);
bodyFooter.appendChild(footerPhone);
bodyFooter.appendChild(footerCity);

contactComponent.appendChild(bodyFooter);
    
export default contactComponent;