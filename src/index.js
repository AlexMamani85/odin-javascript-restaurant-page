import homeComponent from './pages/home';
import contactComponent from './pages/contact';
import menuComponent from './pages/menu';

let contentDiv= document.getElementById("content");
let containerDiv = document.createElement("div");
let mainElement = document.createElement("div");
let title= document.createElement("h1");
let navbar=document.createElement("div");
let navbar_item1=document.createElement("a");
let navbar_item2=document.createElement("a");
let navbar_item3=document.createElement("a");

title.innerHTML = 'Restaurant "Hispanoamericano"';
navbar_item1.innerHTML="Home";
navbar_item2.innerHTML="Menu";
navbar_item3.innerHTML="Contact";

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


navbar.appendChild(navbar_item1);
navbar.appendChild(navbar_item2);
navbar.appendChild(navbar_item3);

//containerDiv.appendChild(containerDiv);
containerDiv.appendChild(title);
containerDiv.appendChild(navbar);

mainElement.innerHTML="";

navbar_item1.addEventListener("click",()=>{
    console.log("navbar_item1");
    mainElement.innerHTML="";
    mainElement.appendChild(homeComponent);
    });
navbar_item2.addEventListener("click",()=>{
    console.log("navbar_item2");
    mainElement.innerHTML="";
    mainElement.appendChild(menuComponent);
    });
navbar_item3.addEventListener("click",()=>{
    console.log("navbar_item3");
    mainElement.innerHTML="";
    mainElement.appendChild(contactComponent);
    });
containerDiv.appendChild(mainElement);
contentDiv.appendChild(containerDiv);
