/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\n  const scroll = Array.from(document.querySelectorAll('[data-scroll]'));\n  const windowMetade = window.innerHeight * 0.7;\n\n  function animaScroll() {\n    scroll.forEach((item) => {\n      const sectionTop = item.getBoundingClientRect().top;\n      const sesaoVisivel = (sectionTop - windowMetade) < 0;\n      if (sesaoVisivel) {\n        item.classList.add('anima-scroll');\n      } else {\n        item.classList.remove('anima-scroll');\n      }\n    });\n  }\n  if (scroll[0]) {\n    scroll[0].classList.add('anima-scroll');\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/animation-numbers.js":
/*!*****************************************!*\
  !*** ./js/modules/animation-numbers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationNumers)\n/* harmony export */ });\nfunction initAnimationNumers() {\n  const numbers = document.querySelectorAll('[data-numero]');\n\n  if (numbers) {\n    function animaNumeros() {\n      numbers.forEach((n) => {\n        const numbersText = +n.innerText.replace('%', '');\n        n.innerText = 0;\n        const intervalNum = setInterval(() => {\n          n.innerText++;\n          if (n.innerText >= numbersText) {\n            clearInterval(intervalNum);\n            n.innerText = `${numbersText} %`;\n          }\n        }, 20 * Math.random());\n      });\n    }\n\n    const observerTarget = document.querySelector('.numeros-curso');\n    if (observerTarget) {\n      const observer = new MutationObserver(handleMutation);\n      observer.observe(observerTarget, { attributes: true });\n\n      function handleMutation(mutation) {\n        if (mutation[0].target.classList.contains('anima-scroll')) {\n          observer.disconnect();\n          animaNumeros();\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/animation-numbers.js?");

/***/ }),

/***/ "./js/modules/error.js":
/*!*****************************!*\
  !*** ./js/modules/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"erro\": () => (/* binding */ erro)\n/* harmony export */ });\nfunction erro(mensagem) {\n  const grid = document.querySelector('.grid .center-column');\n  grid.innerHTML = mensagem;\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/error.js?");

/***/ }),

/***/ "./js/modules/historyapi.js":
/*!**********************************!*\
  !*** ./js/modules/historyapi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHistoryApi)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ \"./js/script.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.js */ \"./js/modules/loading.js\");\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.js */ \"./js/modules/error.js\");\n/* harmony import */ var _produtos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos.js */ \"./js/modules/produtos.js\");\n\n\n\n\n\nfunction initHistoryApi() {\n  const linksMenu = Array.from(document.querySelectorAll('header a'));\n  const linkProdutos = document.querySelector('[data-menu=\"lista\"] li:first-child a').href;\n\n  if (linksMenu && _loading_js__WEBPACK_IMPORTED_MODULE_1__.loading) {\n    function handleClick(event) {\n      event.preventDefault();\n      fetchPage(this.href);\n      window.history.pushState(null, null, this.href);\n    }\n\n    async function fetchPage(url) {\n      try {\n        (0,_loading_js__WEBPACK_IMPORTED_MODULE_1__.loading)(true);\n        const pageResponse = await fetch(url);\n        if (!pageResponse.ok) throw new Error(pageResponse.statusText);\n        const pageText = await pageResponse.text();\n        (0,_produtos_js__WEBPACK_IMPORTED_MODULE_3__.initProdutos)();\n        replaceContent(pageText);\n      } catch (err) {\n        (0,_error_js__WEBPACK_IMPORTED_MODULE_2__.erro)(err);\n      } finally {\n        (0,_loading_js__WEBPACK_IMPORTED_MODULE_1__.loading)(false);\n      }\n    }\n\n    function replaceContent(content) {\n      const newHtml = document.createElement('div');\n      newHtml.innerHTML = content;\n\n      const oldContent = document.querySelector('.grid');\n      const newContent = newHtml.querySelector('.grid');\n\n      oldContent.innerHTML = newContent.innerHTML;\n      document.title = newHtml.querySelector('title').innerText;\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.activeFunctions)();\n    }\n\n    window.addEventListener('popstate', () => fetchPage(window.location.href));\n\n    linksMenu.forEach((l) => l.addEventListener('click', handleClick));\n    if (window.location.href === linkProdutos) window.onload = () => { fetchPage(linkProdutos); };\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/historyapi.js?");

/***/ }),

/***/ "./js/modules/loading.js":
/*!*******************************!*\
  !*** ./js/modules/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loading\": () => (/* binding */ loading)\n/* harmony export */ });\nfunction loading(boolean) {\n  if (boolean === true) {\n    // eslint-disable-next-line no-shadow\n    const loading = `\n    <div class=\"loading\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  `;\n    const grid = document.querySelector('.grid .center-column');\n    grid.innerHTML += loading;\n  } else if (boolean === false) {\n    const load = document.querySelector('.loading');\n    if (load) loading.remove();\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/loading.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\n  const menuBotao = document.querySelector('[data-menu=\"botao\"]');\n  const menuLista = document.querySelector('[data-menu=\"lista\"]');\n  const html = document.documentElement;\n\n  function closeMenu() {\n    menuBotao.classList.remove('active');\n    menuLista.classList.remove('active');\n    setTimeout(() => html.removeEventListener('click', closeMenu));\n  }\n\n  function openMenu() {\n    menuBotao.classList.add('active');\n    menuLista.classList.add('active');\n    setTimeout(() => html.addEventListener('click', closeMenu));\n  }\n\n  menuBotao.addEventListener('click', openMenu);\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/navegacao-por-tab.js":
/*!*****************************************!*\
  !*** ./js/modules/navegacao-por-tab.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNavigation)\n/* harmony export */ });\nfunction initTabNavigation() {\n  const tabControls = document.querySelectorAll('[data-nav=\"controles\"] li button');\n  const tabContent = document.querySelectorAll('[data-nav=\"conteudo\"] section');\n  if (tabControls[0] && tabContent[0]) {\n    tabControls[0].classList.add('ativo');\n    tabContent[0].classList.add('ativo');\n\n    function changeTab(index) {\n      tabContent.forEach((item) => item.classList.remove('ativo'));\n      tabControls.forEach((item) => item.classList.remove('ativo'));\n      tabContent[index].classList.add('ativo');\n      tabControls[index].classList.add('ativo');\n    }\n\n    tabControls.forEach((tab, index) => {\n      tab.addEventListener('click', () => {\n        changeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/navegacao-por-tab.js?");

/***/ }),

/***/ "./js/modules/produtos.js":
/*!********************************!*\
  !*** ./js/modules/produtos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initProdutos\": () => (/* binding */ initProdutos)\n/* harmony export */ });\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.js */ \"./js/modules/loading.js\");\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ \"./js/modules/error.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.js */ \"./js/script.js\");\n\n\n\n\nfunction initProdutos() {\n  async function fetchProdutos(url) {\n    try {\n      (0,_loading_js__WEBPACK_IMPORTED_MODULE_0__.loading)(true);\n      const produtosResponse = await fetch(url);\n      if (!produtosResponse.ok) throw new Error(produtosResponse.statusText);\n      const produtos = await produtosResponse.json();\n      getProdutos(produtos);\n    } catch (err) {\n      (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.erro)(err);\n    } finally {\n      (0,_loading_js__WEBPACK_IMPORTED_MODULE_0__.loading)(false);\n    }\n  }\n\n  function getProdutos(produtos) {\n    const tituloProdutos = document.createElement('h1');\n    tituloProdutos.className = 'titulo-principal produto-titulo';\n    tituloProdutos.innerText = 'Produtos';\n    tituloProdutos.setAttribute('data-writer', '');\n\n    const produtosGrid = document.querySelector('[data-produtos]');\n    if (produtosGrid) produtosGrid.classList.add('get-in');\n\n    const tituloPrincipal = document.querySelector('.titulo-principal');\n    if (!tituloPrincipal) {\n      if (produtosGrid) {\n        produtosGrid.parentElement.insertBefore(tituloProdutos, produtosGrid);\n      }\n    }\n    (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.activeFunctions)();\n\n    if (produtosGrid) {\n      produtos.forEach((produto) => {\n        produtosGrid.innerHTML += `\n          <div class=\"produto\" data-produto-id=\"${produto.id}\">\n            <img src=\"${produto.fotos[0].src}\" alt=\"${produto.fotos[0].titulo}\" class=\"produto-img\">\n            <div class=\"info-produto\">\n              <span class=\"preco-produto\">R$ ${produto.preco}</span>\n              <h2 class=\"nome-produto\">${produto.nome}</h2>\n            </div>\n          </div>\n        `;\n      });\n\n      const produtosDiv = document.querySelectorAll('.produto');\n      if (produtosDiv) produtosDiv.forEach((p) => p.addEventListener('click', (e) => permalinkProducts(e, produtos)));\n    }\n  }\n\n  function permalinkProducts(e, produtos) {\n    const produtosGrid = document.querySelector('[data-produtos]');\n    produtosGrid.classList.remove('get-in');\n    const tituloPrincipal = document.querySelector('.titulo-principal');\n    const produtoId = document.querySelectorAll('[data-produto-id]');\n\n    produtos.forEach((produto, i) => {\n      if (e.currentTarget === produtoId[i]) {\n        if (tituloPrincipal) tituloPrincipal.remove();\n        document.body.scrollIntoView();\n        // window.history.pushState(null, null, 'produto/'+ produto.nome);\n        produtosGrid.innerHTML = `\n          <div class=\"produto-especificacoes\">\n           <button class=\"voltar-produto\" data-produto=\"voltar\"><div>➜</div> Voltar</button>\n            <img src=\"${produto.fotos[0].src}\" alt=\"${produto.fotos[0].titulo}\" class=\"produto-espec-img\">\n            <div class=\"especificacoes\">\n              <h2 class=\"nome-produto\">${produto.nome}</h2>\n              <span class=\"preco-produto\">R$ ${produto.preco}</span>\n              <p class=\"paragrafo\">${produto.descricao}</p>\n            </div>\n          </div>\n        `;\n\n        const btnVoltarProdutos = document.querySelector('[data-produto=\"voltar\"]');\n        const produtoEspecificacoes = document.querySelector('.produto-especificacoes');\n\n        if (btnVoltarProdutos && produtoEspecificacoes) {\n          btnVoltarProdutos.addEventListener('click', () => {\n            produtoEspecificacoes.remove();\n            produtosGrid.classList.add('get-in');\n            getProdutos(produtos);\n          });\n        }\n      }\n    });\n  }\n\n  fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/produtos.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltip = Array.from(document.querySelectorAll('[data-tooltip]'));\n\n  if (tooltip) {\n    function createTooltip(element) {\n      const tooltipBox = document.createElement('div');\n      const tooltipContent = element.getAttribute('aria-label');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = tooltipContent;\n      document.body.appendChild(tooltipBox);\n      return tooltipBox;\n    }\n\n    const showTooltip = {\n      handleEvent(event) {\n        this.tooltipBox.style.top = `${event.pageY + 20}px`;\n        this.tooltipBox.style.left = `${event.pageX + 20}px`;\n      },\n    };\n\n    const hiddenTooltip = {\n      handleEvent() {\n        this.tooltipBox.remove();\n        this.element.removeEventListener('mousemove', showTooltip);\n        this.element.removeEventListener('mouseleave', hiddenTooltip);\n      },\n    };\n\n    function handleTooltip() {\n      const tooltipBox = createTooltip(this);\n\n      showTooltip.tooltipBox = tooltipBox;\n      this.addEventListener('mousemove', showTooltip);\n\n      hiddenTooltip.element = this;\n      hiddenTooltip.tooltipBox = tooltipBox;\n      this.addEventListener('mouseleave', hiddenTooltip);\n    }\n\n    tooltip.forEach((item) => item.addEventListener('mouseover', handleTooltip));\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/modules/writer.js":
/*!******************************!*\
  !*** ./js/modules/writer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWriter)\n/* harmony export */ });\nfunction initWriter() {\n  const writers = document.querySelectorAll('[data-writer]');\n\n  if (writers) {\n    function startWriter(element) {\n      element.classList.add('blink');\n      const letters = element.innerText.split('');\n      element.innerHTML = '';\n      letters.forEach((letter, i) => {\n        setTimeout(() => {\n          element.innerHTML += letter;\n        }, 150 * i);\n      });\n    }\n\n    writers.forEach((writer) => startWriter(writer));\n  }\n}\n\n\n//# sourceURL=webpack://estudos/./js/modules/writer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeFunctions\": () => (/* binding */ activeFunctions)\n/* harmony export */ });\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navegacao-por-tab.js */ \"./js/modules/navegacao-por-tab.js\");\n/* harmony import */ var _modules_animation_numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animation-numbers.js */ \"./js/modules/animation-numbers.js\");\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/writer.js */ \"./js/modules/writer.js\");\n/* harmony import */ var _modules_historyapi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/historyapi.js */ \"./js/modules/historyapi.js\");\n\n\n\n\n\n\n\n\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_animation_numbers_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_writer_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_historyapi_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n\nfunction activeFunctions() {\n  (0,_modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_writer_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n}\n\n\n//# sourceURL=webpack://estudos/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;