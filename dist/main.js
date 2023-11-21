/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let contactComponent = document.createElement("div");
let footerAddress = document.createElement("div");
let footerPhone = document.createElement("div");
let footerCity = document.createElement("div");
let bodyFooter = document.createElement("div");
footerAddress.innerHTML = 'Address: Av. Ejercito 1547';
footerPhone.innerHTML = 'Phone: 316 250 3356';
footerCity.innerHTML = '(Ciudad - Pais): Arequipa - Peru';
contactComponent.style = `
    background-color: blue;
    border-radius: 20px;
`;
bodyFooter.style = `
    text-align: center;
    color: white;
    font-size: 1.2rem;
    padding: 50px 0;
`;
bodyFooter.appendChild(footerAddress);
bodyFooter.appendChild(footerPhone);
bodyFooter.appendChild(footerCity);
contactComponent.appendChild(bodyFooter);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactComponent);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let homeComponent = document.createElement("div");
let title = document.createElement("div");
let paragraph = document.createElement("div");
let footerAddress = document.createElement("div");
let footerPhone = document.createElement("div");
let footerCity = document.createElement("div");
let footer = document.createElement("div");
title.innerHTML = "Acerca de Nosotros";
paragraph.innerHTML = `Somos un acogedor restaurante que nació como un sueño en una modesta
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
reunión de negocios y de complicidadaaa.`;
footerAddress.innerHTML = 'Address: Av. Ejercito 1547';
footerPhone.innerHTML = 'Phone: 316 250 3356';
footerCity.innerHTML = '(Ciudad - Pais): Arequipa - Peru';
homeComponent.style = `
    border: 2px solid red;
    padding: 20px 50px;
    border-radius: 20px;
    background-color: lightgoldenrodyellow;
`;
title.style = `
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: 2rem;
    padding: 50px 0;
`;
paragraph.style = `
    text-align: justify;
    color: red;
    font-size: 1.5rem;
    padding: 50px 50px;
`;
footer.style = `
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let menuComponent = document.createElement("div");
menuComponent.style = `
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
`;
let Cards = [{
  title: 'Domingo: Adobo arequipeño',
  paragraph: `El adobo arequipeño es un plato bandera de la gastronomía
            peruana creado en la ciudad de Arequipa. Según la costumbre
            characata, no solo se come en el almuerzo sino también en el
            desayuno antes de iniciar el día y se sirve con pan para
            absorber su jugo. Un potaje tan jugoso como una sopa que es a
            base de una carne de cerdo marinada con ajíes nativos, especias,
            hierbas y, el ingrediente que le da el sabor característico, la
            chicha de jora (tan importante porque es el único líquido que se
            utiliza para la cocción).`,
  imgSrc: 'https://www.cocineroperuano.com/images/stories/chupe_de_viernes.jpg'
}, {
  title: 'Lunes: Chaque',
  paragraph: `El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
  imgSrc: 'https://comeperuano.b-cdn.net/wp-content/uploads/2020/10/receta-chaque-arequino-1.jpg.webp'
}, {
  title: 'Martes: Chairo',
  paragraph: `El chairo es una sopa que combina ingredientes típicos de la
        región de los Andes con alimentos del Viejo Mundo introducidos
        por los españoles, tales como carne de res y carne de cordero
        (la carne de llama y la de alpaca también pueden ser usadas).1​
        Es consumido principalmente en el occidente de Bolivia, el sur
        del Perú y otros países en la región andina.2​`,
  imgSrc: 'https://i0.wp.com/comidasperuanas.com.pe/wp-content/uploads/2023/07/chairo.jpg?w=700&ssl=1'
}, {
  title: 'Miercoles: Chochoca',
  paragraph: `La sopa de chochoca es una sopa tradicional arequipeña, muy rica
        y nutritiva, que se prepara a base de carne de res, cenina papas
        y harina de maíz. Generalmente se consume en los días de
        invierno, y su preparación es muy sencilla con lo que podrás
        deleitar a todos.`,
  imgSrc: 'https://www.comida-peruana.com/base/stock/Recipe/245-image/245-image_web.jpg.webp'
}, {
  title: 'Jueves: Chupe colorado o chuño',
  paragraph: `El chaque o chaque arequipeño es un plato típico de la
        gastronomía peruana, concretamente de la zona de Arequipa. Se
        trata de una sopa de carne de res o de cordero hervida y
        acompañada por distintas verduras y condimentos.
        Tradicionalmente se consume los días lunes de todas las semanas.`,
  imgSrc: 'https://pbs.twimg.com/media/EferdtSX0AEocXS?format=jpg&name=large'
}, {
  title: 'Viernes: Chupe de viernes',
  paragraph: `para Viernes Santo se prepara el chupe de viernes que no lleva
        carnes rojas pero si pescado y mariscos, leche, huevo, cecinas
        de pescado, ají, papa y abundantes verduras.`,
  imgSrc: 'https://www.cocineroperuano.com/images/stories/chupe_de_viernes.jpg'
}, {
  title: 'Sabado: Puchero o timpusca',
  paragraph: `La timpusca es una sopa de la gastronomía del Perú, típica de la
        gastronomía arequipeña.1​2​ Su nombre proviene del término
        quechua timpuy, que significa «hervir».1​3​ La timpusca es una
        sopa similar al chupe que consiste en un caldo a base de carne
        de ternera, cordero y chalona, al que se añade trigo, chuño,
        cochayuyo, hierbabuena y diversos vegetales. Se le suele añadir
        fruta como pera o durazno.1​2​4​`,
  imgSrc: 'https://www.cocineroperuano.com/images/stories/timpusca.jpg'
}];
Cards.forEach(item => {
  let card = document.createElement("div");
  let cardTitle = document.createElement("div");
  let cardBody = document.createElement("div");
  let img = document.createElement("img");
  let cardFooter = document.createElement("div");
  cardTitle.innerHTML = item.title;
  cardBody.innerHTML = item.paragraph;
  img.src = item.imgSrc;
  cardTitle.style = `
        color:yellow;
        text-align: center;
        font-weight: bolder;
        font-size: 2rem;
        padding: 20px;
    `;
  cardBody.style = `
        text-align: justify;
        font-size: 1.5rem;
        padding: 20px;
    `;
  cardFooter.style = `
        text-align: center;
        font-size: 1.2rem;
        padding: 20px;
    `;
  img.style = `
        width: 100%;
        height: 100%;
        border-radius: 40px;
    `;
  card.style = `
        border: 4px solid yellow;
        background-color: red;
        color: white;
        margin: 20px;
        border-radius: 20px;
    `;
  cardFooter.appendChild(img);
  card.appendChild(cardTitle);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  menuComponent.appendChild(card);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");



let contentDiv = document.getElementById("content");
let containerDiv = document.createElement("div");
let mainElement = document.createElement("div");
let title = document.createElement("h1");
let navbar = document.createElement("div");
let navbar_item1 = document.createElement("a");
let navbar_item2 = document.createElement("a");
let navbar_item3 = document.createElement("a");
title.innerHTML = 'Restaurant "Hispanoamericano"';
navbar_item1.innerHTML = "Home";
navbar_item2.innerHTML = "Menu";
navbar_item3.innerHTML = "Contact";
navbar_item1.classList.add("navbar_item");
navbar_item2.classList.add("navbar_item");
navbar_item3.classList.add("navbar_item");
containerDiv.style = "\npadding: 20px 50px;\n\n";
title.style = `
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: 50px;
`;
navbar.style = `
    display: flex;
    justify-content: space-evenly;
    padding: 50px;
`;
let navbar_itemStyle = `
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
`;
navbar_item1.style = navbar_itemStyle;
navbar_item2.style = navbar_itemStyle;
navbar_item3.style = navbar_itemStyle;
navbar.appendChild(navbar_item1);
navbar.appendChild(navbar_item2);
navbar.appendChild(navbar_item3);
containerDiv.appendChild(title);
containerDiv.appendChild(navbar);
mainElement.innerHTML = "";
navbar_item1.addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
});
navbar_item2.addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
});
navbar_item3.addEventListener("click", () => {
  mainElement.innerHTML = "";
  mainElement.appendChild(_pages_contact__WEBPACK_IMPORTED_MODULE_1__["default"]);
});
containerDiv.appendChild(mainElement);
contentDiv.appendChild(containerDiv);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixZQUFZLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxNQUFJO0VBQ3RDUixXQUFXLENBQUNyQixTQUFTLEdBQUMsRUFBRTtFQUN4QnFCLFdBQVcsQ0FBQ25CLFdBQVcsQ0FBQ0ssbURBQWEsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFDTmtCLFlBQVksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFDLE1BQUk7RUFDdENSLFdBQVcsQ0FBQ3JCLFNBQVMsR0FBQyxFQUFFO0VBQ3hCcUIsV0FBVyxDQUFDbkIsV0FBVyxDQUFDVCxzREFBZ0IsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFDTjJCLFlBQVksQ0FBQ2xCLFdBQVcsQ0FBQ21CLFdBQVcsQ0FBQztBQUNyQ0gsVUFBVSxDQUFDaEIsV0FBVyxDQUFDa0IsWUFBWSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGFjdENvbXBvbmVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgZm9vdGVyQWRkcmVzcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb3RlclBob25lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vdGVyQ2l0eT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgYm9keUZvb3Rlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5mb290ZXJBZGRyZXNzLmlubmVySFRNTD0nQWRkcmVzczogQXYuIEVqZXJjaXRvIDE1NDcnO1xuZm9vdGVyUGhvbmUuaW5uZXJIVE1MPSdQaG9uZTogMzE2IDI1MCAzMzU2JztcbmZvb3RlckNpdHkuaW5uZXJIVE1MPScoQ2l1ZGFkIC0gUGFpcyk6IEFyZXF1aXBhIC0gUGVydSc7XG5cbmNvbnRhY3RDb21wb25lbnQuc3R5bGU9YFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbmA7XG5cbmJvZHlGb290ZXIuc3R5bGU9YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNTBweCAwO1xuYDtcblxuYm9keUZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBZGRyZXNzKTtcbmJvZHlGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyUGhvbmUpO1xuYm9keUZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDaXR5KTtcblxuY29udGFjdENvbXBvbmVudC5hcHBlbmRDaGlsZChib2R5Rm9vdGVyKTtcbiAgICBcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb21wb25lbnQ7IiwibGV0IGhvbWVDb21wb25lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IHBhcmFncmFwaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgZm9vdGVyQWRkcmVzcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGZvb3RlclBob25lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZm9vdGVyQ2l0eT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgZm9vdGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblxudGl0bGUuaW5uZXJIVE1MPVwiQWNlcmNhIGRlIE5vc290cm9zXCI7XG5wYXJhZ3JhcGguaW5uZXJIVE1MPWBTb21vcyB1biBhY29nZWRvciByZXN0YXVyYW50ZSBxdWUgbmFjacOzIGNvbW8gdW4gc3Vlw7FvIGVuIHVuYSBtb2Rlc3RhXG5jYWZldGVyw61hIGVsIDMgZGUgSnVsaW8gZGUgMjAxMCB5IHF1ZSBzZSBoYSBjb25zdHJ1aWRvIHkgbWVqb3JhZG87IHkgYVxucGFydGlyIGRlbCA1IGRlIEFicmlsIGRlIDIwMTYgZW4gbnVlc3RyYSBhY3R1YWwgdWJpY2FjacOzbiBwYXJhIGJyaW5kYXJcbnVuYSBvZmVydGEgZGUgcGxhdG9zIHTDrXBpY29zLCBhc8OtIGNvbW8gdGFtYmnDqW4gZGlmZXJlbnRlcyBvcGNpb25lc1xucGFyYSBzYXRpc2ZhY2VyIHN1cyBhbnRvam9zLiBFc3RhbW9zIHViaWNhZG9zIGVuIHBsZW5vIGNvcmF6w7NuIGRlXG5Uw7pxdWVycmVzLCBlbiBlbCBkZXBhcnRhbWVudG8gZGUgTmFyacOxbzsgYWwgc3Vyb2NjaWRlbnRlIGRlIENvbG9tYmlhO1xuY29udGFtb3MgY29uIHVuIGVzcGFjaW8gZmluYW1lbnRlIGRlY29yYWRvIGNvbiBlc3RpbG8gbW9kZXJubywgZG9uZGVcbnBvZHLDoSBhcHJlY2lhciBjYWxpZGFkIHkgZWwgdG9xdWUgZGlmZXJlbnRlIGRlIHN1cyBwbGF0b3MgcHJlcGFyYWRvc1xuY29uIHNlbGVjdG9zIGluZ3JlZGllbnRlcywgYXNpbWlzbW8gcG9kcsOhIGRlZ3VzdGFyIGxhIHN1Y3VsZW50YSBjb2NpbmFcbnTDrXBpY2EsIHBhc3RhcywgeSBwZXNjYWRvcyBkZSBsYSBtZWpvciBjYWxpZGFkLiBNYXJ0aW5vJ3MgUmVzdGF1cmFudGUsXG5lcyB1bmEgZmllc3RhIGVuIGVsIHBhbGFkYXIsIHVuIGp1ZWdvIHBhcmEgbGFzIHB1cGlsYXMsIGVzIHVuIHB1bnRvIGRlXG5yZXVuacOzbiBkZSBuZWdvY2lvcyB5IGRlIGNvbXBsaWNpZGFkYWFhLmBcblxuZm9vdGVyQWRkcmVzcy5pbm5lckhUTUw9J0FkZHJlc3M6IEF2LiBFamVyY2l0byAxNTQ3JztcbmZvb3RlclBob25lLmlubmVySFRNTD0nUGhvbmU6IDMxNiAyNTAgMzM1Nic7XG5mb290ZXJDaXR5LmlubmVySFRNTD0nKENpdWRhZCAtIFBhaXMpOiBBcmVxdWlwYSAtIFBlcnUnO1xuXG5ob21lQ29tcG9uZW50LnN0eWxlPWBcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG5gXG5cbnRpdGxlLnN0eWxlPWBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG5gXG5wYXJhZ3JhcGguc3R5bGU9YFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XG5gXG5cbmZvb3Rlci5zdHlsZT1gXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNTBweCAwO1xuYDtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckFkZHJlc3MpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclBob25lKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDaXR5KTtcblxuaG9tZUNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5ob21lQ29tcG9uZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5ob21lQ29tcG9uZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVDb21wb25lbnQ7XG4iLCJsZXQgbWVudUNvbXBvbmVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5tZW51Q29tcG9uZW50LnN0eWxlPWBcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbmBcblxubGV0IENhcmRzPVtcbiAgICB7XG4gICAgICAgIHRpdGxlOidEb21pbmdvOiBBZG9ibyBhcmVxdWlwZcOxbycsXG4gICAgICAgIHBhcmFncmFwaDpgRWwgYWRvYm8gYXJlcXVpcGXDsW8gZXMgdW4gcGxhdG8gYmFuZGVyYSBkZSBsYSBnYXN0cm9ub23DrWFcbiAgICAgICAgICAgIHBlcnVhbmEgY3JlYWRvIGVuIGxhIGNpdWRhZCBkZSBBcmVxdWlwYS4gU2Vnw7puIGxhIGNvc3R1bWJyZVxuICAgICAgICAgICAgY2hhcmFjYXRhLCBubyBzb2xvIHNlIGNvbWUgZW4gZWwgYWxtdWVyem8gc2lubyB0YW1iacOpbiBlbiBlbFxuICAgICAgICAgICAgZGVzYXl1bm8gYW50ZXMgZGUgaW5pY2lhciBlbCBkw61hIHkgc2Ugc2lydmUgY29uIHBhbiBwYXJhXG4gICAgICAgICAgICBhYnNvcmJlciBzdSBqdWdvLiBVbiBwb3RhamUgdGFuIGp1Z29zbyBjb21vIHVuYSBzb3BhIHF1ZSBlcyBhXG4gICAgICAgICAgICBiYXNlIGRlIHVuYSBjYXJuZSBkZSBjZXJkbyBtYXJpbmFkYSBjb24gYWrDrWVzIG5hdGl2b3MsIGVzcGVjaWFzLFxuICAgICAgICAgICAgaGllcmJhcyB5LCBlbCBpbmdyZWRpZW50ZSBxdWUgbGUgZGEgZWwgc2Fib3IgY2FyYWN0ZXLDrXN0aWNvLCBsYVxuICAgICAgICAgICAgY2hpY2hhIGRlIGpvcmEgKHRhbiBpbXBvcnRhbnRlIHBvcnF1ZSBlcyBlbCDDum5pY28gbMOtcXVpZG8gcXVlIHNlXG4gICAgICAgICAgICB1dGlsaXphIHBhcmEgbGEgY29jY2nDs24pLmAsIFxuICAgICAgICBpbWdTcmM6J2h0dHBzOi8vd3d3LmNvY2luZXJvcGVydWFuby5jb20vaW1hZ2VzL3N0b3JpZXMvY2h1cGVfZGVfdmllcm5lcy5qcGcnXG4gICAgfSwge1xuICAgICAgICB0aXRsZTonTHVuZXM6IENoYXF1ZScsXG4gICAgICAgIHBhcmFncmFwaDpgRWwgY2hhcXVlIG8gY2hhcXVlIGFyZXF1aXBlw7FvIGVzIHVuIHBsYXRvIHTDrXBpY28gZGUgbGFcbiAgICAgICAgZ2FzdHJvbm9tw61hIHBlcnVhbmEsIGNvbmNyZXRhbWVudGUgZGUgbGEgem9uYSBkZSBBcmVxdWlwYS4gU2VcbiAgICAgICAgdHJhdGEgZGUgdW5hIHNvcGEgZGUgY2FybmUgZGUgcmVzIG8gZGUgY29yZGVybyBoZXJ2aWRhIHlcbiAgICAgICAgYWNvbXBhw7FhZGEgcG9yIGRpc3RpbnRhcyB2ZXJkdXJhcyB5IGNvbmRpbWVudG9zLlxuICAgICAgICBUcmFkaWNpb25hbG1lbnRlIHNlIGNvbnN1bWUgbG9zIGTDrWFzIGx1bmVzIGRlIHRvZGFzIGxhcyBzZW1hbmFzLmAsXG4gICAgICAgIGltZ1NyYzonaHR0cHM6Ly9jb21lcGVydWFuby5iLWNkbi5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvcmVjZXRhLWNoYXF1ZS1hcmVxdWluby0xLmpwZy53ZWJwJyAgXG4gICAgfSwgIHtcbiAgICAgICAgdGl0bGU6J01hcnRlczogQ2hhaXJvJyxcbiAgICAgICAgcGFyYWdyYXBoOmBFbCBjaGFpcm8gZXMgdW5hIHNvcGEgcXVlIGNvbWJpbmEgaW5ncmVkaWVudGVzIHTDrXBpY29zIGRlIGxhXG4gICAgICAgIHJlZ2nDs24gZGUgbG9zIEFuZGVzIGNvbiBhbGltZW50b3MgZGVsIFZpZWpvIE11bmRvIGludHJvZHVjaWRvc1xuICAgICAgICBwb3IgbG9zIGVzcGHDsW9sZXMsIHRhbGVzIGNvbW8gY2FybmUgZGUgcmVzIHkgY2FybmUgZGUgY29yZGVyb1xuICAgICAgICAobGEgY2FybmUgZGUgbGxhbWEgeSBsYSBkZSBhbHBhY2EgdGFtYmnDqW4gcHVlZGVuIHNlciB1c2FkYXMpLjHigItcbiAgICAgICAgRXMgY29uc3VtaWRvIHByaW5jaXBhbG1lbnRlIGVuIGVsIG9jY2lkZW50ZSBkZSBCb2xpdmlhLCBlbCBzdXJcbiAgICAgICAgZGVsIFBlcsO6IHkgb3Ryb3MgcGHDrXNlcyBlbiBsYSByZWdpw7NuIGFuZGluYS4y4oCLYCxcbiAgICAgICAgaW1nU3JjOidodHRwczovL2kwLndwLmNvbS9jb21pZGFzcGVydWFuYXMuY29tLnBlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA3L2NoYWlyby5qcGc/dz03MDAmc3NsPTEnICBcbiAgICB9LCAge1xuICAgICAgICB0aXRsZTonTWllcmNvbGVzOiBDaG9jaG9jYScsXG4gICAgICAgIHBhcmFncmFwaDpgTGEgc29wYSBkZSBjaG9jaG9jYSBlcyB1bmEgc29wYSB0cmFkaWNpb25hbCBhcmVxdWlwZcOxYSwgbXV5IHJpY2FcbiAgICAgICAgeSBudXRyaXRpdmEsIHF1ZSBzZSBwcmVwYXJhIGEgYmFzZSBkZSBjYXJuZSBkZSByZXMsIGNlbmluYSBwYXBhc1xuICAgICAgICB5IGhhcmluYSBkZSBtYcOtei4gR2VuZXJhbG1lbnRlIHNlIGNvbnN1bWUgZW4gbG9zIGTDrWFzIGRlXG4gICAgICAgIGludmllcm5vLCB5IHN1IHByZXBhcmFjacOzbiBlcyBtdXkgc2VuY2lsbGEgY29uIGxvIHF1ZSBwb2Ryw6FzXG4gICAgICAgIGRlbGVpdGFyIGEgdG9kb3MuYCxcbiAgICAgICAgaW1nU3JjOidodHRwczovL3d3dy5jb21pZGEtcGVydWFuYS5jb20vYmFzZS9zdG9jay9SZWNpcGUvMjQ1LWltYWdlLzI0NS1pbWFnZV93ZWIuanBnLndlYnAnICBcbiAgICB9LCAge1xuICAgICAgICB0aXRsZTonSnVldmVzOiBDaHVwZSBjb2xvcmFkbyBvIGNodcOxbycsXG4gICAgICAgIHBhcmFncmFwaDpgRWwgY2hhcXVlIG8gY2hhcXVlIGFyZXF1aXBlw7FvIGVzIHVuIHBsYXRvIHTDrXBpY28gZGUgbGFcbiAgICAgICAgZ2FzdHJvbm9tw61hIHBlcnVhbmEsIGNvbmNyZXRhbWVudGUgZGUgbGEgem9uYSBkZSBBcmVxdWlwYS4gU2VcbiAgICAgICAgdHJhdGEgZGUgdW5hIHNvcGEgZGUgY2FybmUgZGUgcmVzIG8gZGUgY29yZGVybyBoZXJ2aWRhIHlcbiAgICAgICAgYWNvbXBhw7FhZGEgcG9yIGRpc3RpbnRhcyB2ZXJkdXJhcyB5IGNvbmRpbWVudG9zLlxuICAgICAgICBUcmFkaWNpb25hbG1lbnRlIHNlIGNvbnN1bWUgbG9zIGTDrWFzIGx1bmVzIGRlIHRvZGFzIGxhcyBzZW1hbmFzLmAsXG4gICAgICAgIGltZ1NyYzonaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0VmZXJkdFNYMEFFb2NYUz9mb3JtYXQ9anBnJm5hbWU9bGFyZ2UnICBcbiAgICB9LCAge1xuICAgICAgICB0aXRsZTonVmllcm5lczogQ2h1cGUgZGUgdmllcm5lcycsXG4gICAgICAgIHBhcmFncmFwaDpgcGFyYSBWaWVybmVzIFNhbnRvIHNlIHByZXBhcmEgZWwgY2h1cGUgZGUgdmllcm5lcyBxdWUgbm8gbGxldmFcbiAgICAgICAgY2FybmVzIHJvamFzIHBlcm8gc2kgcGVzY2FkbyB5IG1hcmlzY29zLCBsZWNoZSwgaHVldm8sIGNlY2luYXNcbiAgICAgICAgZGUgcGVzY2FkbywgYWrDrSwgcGFwYSB5IGFidW5kYW50ZXMgdmVyZHVyYXMuYCxcbiAgICAgICAgaW1nU3JjOidodHRwczovL3d3dy5jb2NpbmVyb3BlcnVhbm8uY29tL2ltYWdlcy9zdG9yaWVzL2NodXBlX2RlX3ZpZXJuZXMuanBnJyAgXG4gICAgfSwgIHtcbiAgICAgICAgdGl0bGU6J1NhYmFkbzogUHVjaGVybyBvIHRpbXB1c2NhJyxcbiAgICAgICAgcGFyYWdyYXBoOmBMYSB0aW1wdXNjYSBlcyB1bmEgc29wYSBkZSBsYSBnYXN0cm9ub23DrWEgZGVsIFBlcsO6LCB0w61waWNhIGRlIGxhXG4gICAgICAgIGdhc3Ryb25vbcOtYSBhcmVxdWlwZcOxYS4x4oCLMuKAiyBTdSBub21icmUgcHJvdmllbmUgZGVsIHTDqXJtaW5vXG4gICAgICAgIHF1ZWNodWEgdGltcHV5LCBxdWUgc2lnbmlmaWNhIMKraGVydmlywrsuMeKAizPigIsgTGEgdGltcHVzY2EgZXMgdW5hXG4gICAgICAgIHNvcGEgc2ltaWxhciBhbCBjaHVwZSBxdWUgY29uc2lzdGUgZW4gdW4gY2FsZG8gYSBiYXNlIGRlIGNhcm5lXG4gICAgICAgIGRlIHRlcm5lcmEsIGNvcmRlcm8geSBjaGFsb25hLCBhbCBxdWUgc2UgYcOxYWRlIHRyaWdvLCBjaHXDsW8sXG4gICAgICAgIGNvY2hheXV5bywgaGllcmJhYnVlbmEgeSBkaXZlcnNvcyB2ZWdldGFsZXMuIFNlIGxlIHN1ZWxlIGHDsWFkaXJcbiAgICAgICAgZnJ1dGEgY29tbyBwZXJhIG8gZHVyYXpuby4x4oCLMuKAizTigItgLFxuICAgICAgICBpbWdTcmM6J2h0dHBzOi8vd3d3LmNvY2luZXJvcGVydWFuby5jb20vaW1hZ2VzL3N0b3JpZXMvdGltcHVzY2EuanBnJyAgXG4gICAgfSAgICBcbiAgICBdO1xuXG5DYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNhcmRUaXRsZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2FyZEJvZHk9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGltZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgY2FyZEZvb3Rlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNhcmRUaXRsZS5pbm5lckhUTUw9aXRlbS50aXRsZTtcbiAgICBjYXJkQm9keS5pbm5lckhUTUw9aXRlbS5wYXJhZ3JhcGg7XG4gICAgaW1nLnNyYz1pdGVtLmltZ1NyYztcblxuICAgIGNhcmRUaXRsZS5zdHlsZT1gXG4gICAgICAgIGNvbG9yOnllbGxvdztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYFxuXG4gICAgY2FyZEJvZHkuc3R5bGU9YFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICBgXG4gICAgY2FyZEZvb3Rlci5zdHlsZT1gXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYFxuICAgIGltZy5zdHlsZT1gXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYFxuXG4gICAgY2FyZC5zdHlsZT1gXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBgXG4gICAgXG4gICAgY2FyZEZvb3Rlci5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRm9vdGVyKTtcbiAgICBcbiAgICBtZW51Q29tcG9uZW50LmFwcGVuZENoaWxkKGNhcmQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb21wb25lbnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGNvbnRhY3RDb21wb25lbnQgZnJvbSAnLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gJy4vcGFnZXMvbWVudSc7XG5cbmxldCBjb250ZW50RGl2PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgdGl0bGU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmxldCBuYXZiYXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBuYXZiYXJfaXRlbTE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5sZXQgbmF2YmFyX2l0ZW0yPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xubGV0IG5hdmJhcl9pdGVtMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxudGl0bGUuaW5uZXJIVE1MID0gJ1Jlc3RhdXJhbnQgXCJIaXNwYW5vYW1lcmljYW5vXCInO1xubmF2YmFyX2l0ZW0xLmlubmVySFRNTD1cIkhvbWVcIjtcbm5hdmJhcl9pdGVtMi5pbm5lckhUTUw9XCJNZW51XCI7XG5uYXZiYXJfaXRlbTMuaW5uZXJIVE1MPVwiQ29udGFjdFwiO1xuXG5uYXZiYXJfaXRlbTEuY2xhc3NMaXN0LmFkZChcIm5hdmJhcl9pdGVtXCIpO1xubmF2YmFyX2l0ZW0yLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJfaXRlbVwiKTtcbm5hdmJhcl9pdGVtMy5jbGFzc0xpc3QuYWRkKFwibmF2YmFyX2l0ZW1cIik7XG5cbmNvbnRhaW5lckRpdi5zdHlsZSA9IFwiXFxucGFkZGluZzogMjBweCA1MHB4O1xcblxcblwiO1xudGl0bGUuc3R5bGU9YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuYFxubmF2YmFyLnN0eWxlPWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IDUwcHg7XG5gXG5sZXQgbmF2YmFyX2l0ZW1TdHlsZT1gXG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuYFxubmF2YmFyX2l0ZW0xLnN0eWxlPW5hdmJhcl9pdGVtU3R5bGU7XG5uYXZiYXJfaXRlbTIuc3R5bGU9bmF2YmFyX2l0ZW1TdHlsZTtcbm5hdmJhcl9pdGVtMy5zdHlsZT1uYXZiYXJfaXRlbVN0eWxlO1xuXG5cbm5hdmJhci5hcHBlbmRDaGlsZChuYXZiYXJfaXRlbTEpO1xubmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhcl9pdGVtMik7XG5uYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyX2l0ZW0zKTtcblxuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG5tYWluRWxlbWVudC5pbm5lckhUTUw9XCJcIjtcblxubmF2YmFyX2l0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgbWFpbkVsZW1lbnQuaW5uZXJIVE1MPVwiXCI7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbXBvbmVudCk7XG4gICAgfSk7XG5uYXZiYXJfaXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBtYWluRWxlbWVudC5pbm5lckhUTUw9XCJcIjtcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChtZW51Q29tcG9uZW50KTtcbiAgICB9KTtcbm5hdmJhcl9pdGVtMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIG1haW5FbGVtZW50LmlubmVySFRNTD1cIlwiO1xuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb21wb25lbnQpO1xuICAgIH0pO1xuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcbiJdLCJuYW1lcyI6WyJjb250YWN0Q29tcG9uZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9vdGVyQWRkcmVzcyIsImZvb3RlclBob25lIiwiZm9vdGVyQ2l0eSIsImJvZHlGb290ZXIiLCJpbm5lckhUTUwiLCJzdHlsZSIsImFwcGVuZENoaWxkIiwiaG9tZUNvbXBvbmVudCIsInRpdGxlIiwicGFyYWdyYXBoIiwiZm9vdGVyIiwibWVudUNvbXBvbmVudCIsIkNhcmRzIiwiaW1nU3JjIiwiZm9yRWFjaCIsIml0ZW0iLCJjYXJkIiwiY2FyZFRpdGxlIiwiY2FyZEJvZHkiLCJpbWciLCJjYXJkRm9vdGVyIiwic3JjIiwiY29udGVudERpdiIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyRGl2IiwibWFpbkVsZW1lbnQiLCJuYXZiYXIiLCJuYXZiYXJfaXRlbTEiLCJuYXZiYXJfaXRlbTIiLCJuYXZiYXJfaXRlbTMiLCJjbGFzc0xpc3QiLCJhZGQiLCJuYXZiYXJfaXRlbVN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=