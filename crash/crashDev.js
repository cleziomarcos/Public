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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sources_crash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/crash */ \"./sources/crash.js\");\n/* harmony import */ var _sources_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources/users */ \"./sources/users.js\");\n\r\n\r\n\r\n    'use strict'\r\n\r\nif ( document.readyState === \"loading\" ) {\r\n    document.addEventListener( \"DOMContentLoaded\", crashInit )\r\n} else {\r\n    crashInit()\r\n}\r\nfunction crashInit() {\r\n    if (!_sources_crash__WEBPACK_IMPORTED_MODULE_0__.crash) return console.log(\"Not Crash!!!\")\r\n    ;(0,_sources_users__WEBPACK_IMPORTED_MODULE_1__.confirmUser)()\r\n}\r\n\n\n//# sourceURL=webpack://crash/./index.js?");

/***/ }),

/***/ "./sources/crash.js":
/*!**************************!*\
  !*** ./sources/crash.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crash\": () => (/* binding */ crash),\n/* harmony export */   \"crashInterface\": () => (/* binding */ crashInterface),\n/* harmony export */   \"elemNode\": () => (/* binding */ elemNode)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./sources/util.js\");\n\r\n\r\nconst crash = document.querySelector(\"#crash\")\r\nconst returnArrObjCrash = (velaIni, velaEnd) => Array.from(crash.querySelectorAll(\"div.candle.green\")).reduce((arr, e) => {\r\n    if (Number( e.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/ig)[0] ) >= Number(velaIni) && Number(e.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/ig)[0] ) <= Number(velaEnd) ) {\r\n        arr.push({\r\n            number: e.innerText.match(/[0-9]{1,}[.]{1}[0-9]{2}/ig)[0], \r\n            time: e.nextElementSibling.innerText\r\n        })\r\n    }\r\n    return arr\r\n}, []).sort(( a, b ) => {\r\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.cTimeToSeg)( a.time ) > (0,_util__WEBPACK_IMPORTED_MODULE_0__.cTimeToSeg)( b.time )) {\r\n        return 1;\r\n    }\r\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.cTimeToSeg)( a.time ) < (0,_util__WEBPACK_IMPORTED_MODULE_0__.cTimeToSeg)( b.time )) {\r\n        return -1;\r\n    }\r\n    return 0;\r\n})\r\nconst elemNode = document.querySelector(\"#app > div > div > div.col-md-4 > div\")\r\nconst newElem = document.createElement(\"div\")\r\nfunction crashInterface() {\r\n    if (!elemNode) return console.log(\"Not elemNode!!!\")\r\n    elemNode.append(newElem)\r\n    newElem.className = \"container text-center\"\r\n    newElem.style = \"margin-top: 12px\"\r\n    newElem.innerHTML = `<div class=\"row mb-3\">\r\n        <label for=\"vela_start\" class=\"col-sm-4 col-form-label col-form-label-sm\" style=\"color: white; text-align: start\">Vela init: </label>\r\n        <div class=\"col-sm-7\">\r\n        <input type=\"number\" name=\"vela_start\" id=\"vela_start\" min=\"1\" value=\"1\" style=\"color: blue; width: inherit\">\r\n        </div>\r\n        </div>\r\n        <div class=\"row mb-3\">\r\n        <label for=\"vela_end\" class=\"col-sm-4 col-form-label col-form-label-sm\" style=\"color: white; text-align: start\">Vela end: </label>\r\n        <div class=\"col-sm-7\">\r\n        <input type=\"number\" name=\"vela_end\" id=\"vela_end\" min=\"0\" value=\"1\" style=\"color: blue; width: inherit\">\r\n        </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 center\">\r\n        <button id=\"show_data\" type=\"button\" class=\"btn btn-primary\" style=\"width: 160px; margin-bottom: 15px;\">Show Data</button>\r\n        </div>\r\n        </div>\r\n        <div class=\"table-responsive table-sm\" style=\"margin-left = 5px\" id=\"list_data\">\r\n        </div>`\r\n    document.querySelector(\"#show_data\").addEventListener(\"click\", showData )\r\n}\r\nconst returnHhMm = (strTime) => `${strTime.split(\":\")[0]}:${strTime.split(\":\")[1]}`\r\nconst returnArrNumber = (strNumber) => strNumber.replace (\".\",\"\").split(\"\")\r\nconst returnTime5x = (strTime) => returnHhMm(new Date( \r\n        (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( new Date().toLocaleDateString() , strTime ) \r\n        + ( 3600 * 1000 )\r\n    ).toLocaleTimeString())\r\nconst returnSunTotal = (strTime, strNumber) => returnHhMm(new Date( \r\n        (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( new Date().toLocaleDateString() , strTime ) \r\n        + ( returnArrNumber(strNumber).reduce((sun, e) => sun += e * 1, 0 ) ) * 60 * 1000 \r\n    ).toLocaleTimeString())\r\nconst returnSunEnd = (strTime, strNumber) => returnHhMm(new Date( \r\n        (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( new Date().toLocaleDateString() , strTime ) \r\n        + ( \r\n            returnArrNumber(strNumber)[returnArrNumber(strNumber).length - 1] * 1 == 0 ? 1 \r\n            : returnArrNumber(strNumber)[returnArrNumber(strNumber).length - 1] * 1 \r\n        ) * 60 * 1000 \r\n    ).toLocaleTimeString())\r\nfunction showData() {\r\n    const velaStart = Number( document.querySelector(\"#vela_start\").value )\r\n    const velaEnd = Number( document.querySelector(\"#vela_end\").value)\r\n    const listData = document.querySelector(\"#list_data\")\r\n    if ( velaStart <= 0 ) return listData.innerHTML = `<div style=\"color: #dc3545\">Value error... Invalid Vela Init = ${velaStart}!!!</div>`\r\n    if ( velaEnd < velaStart ) return listData.innerHTML = `<div style=\"color: #dc3545\">Value error... Invalid Vela Ini = ${velaStart} > Vela End = ${velaEnd}!!!</div>`\r\n    const arrObjCrash = returnArrObjCrash(velaStart, velaEnd)\r\n    if ( arrObjCrash.length == 0 ) return listData.innerHTML = `<div style=\"color: #dc3545\">Please try again... There is no data for these values!!!`\r\n    let html = `<table class=\"table table-dark table-sm\">\r\n        <thead>\r\n        <tr>\r\n        <th><small>Velas<small></th>\r\n        <th scope=\"col\" style=\"color: #0062cc;\"><small>Time 10x</small></th>\r\n        <th scope=\"col\" style=\"color: green\"><small>Time 5x</small></th>\r\n        <th scope=\"col\" style=\"color: grey\"><small>Sun total</small></th>\r\n        <th scope=\"col\" style=\"color: #dc3545\"><small>Sun end</small></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>`\r\n    for (const e of arrObjCrash) {\r\n        html += `<tr>\r\n        <td><small>${e.number}</small></td>\r\n        <td style=\"color: #0062cc\"><small>${returnHhMm(e.time)}</small></td>\r\n        <td style=\"color: green\"><small>${returnTime5x(e.time)}</small></td>\r\n        <td style=\"color: grey\"><small>${returnSunTotal(e.time, e.number)}</small></td>\r\n        <td style=\"color: #dc3545\"><small>${returnSunEnd(e.time, e.number)}</small></td>\r\n        </tr>`\r\n    }\r\n    html += `</tbody></table>`\r\n    listData.innerHTML = html\r\n}\r\n\n\n//# sourceURL=webpack://crash/./sources/crash.js?");

/***/ }),

/***/ "./sources/users.js":
/*!**************************!*\
  !*** ./sources/users.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"confirmUser\": () => (/* binding */ confirmUser)\n/* harmony export */ });\n/* harmony import */ var _crash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crash */ \"./sources/crash.js\");\n\r\n\r\nconst arrUsers = async () => await fetch( \"https://raw.githubusercontent.com/cleziomarcos/Public/main/crash/users.json\" ).then( ( resp ) => resp.json() )\r\n\r\nfunction userInterface() {\r\n    const newHtml = document.createElement(\"div\")\r\n    _crash__WEBPACK_IMPORTED_MODULE_0__.elemNode.append(newHtml)\r\n    newHtml.className= \"toast\"\r\n    newHtml.style = \"margin-left: 14px;\"\r\n    newHtml.setAttribute(\"role\", \"alert\")\r\n    newHtml.setAttribute(\"aria-live\", \"assertive\")\r\n    newHtml.setAttribute(\"aria-atomic\", \"true\")\r\n    newHtml.innerHTML = `<div class=\"toast-body\">\r\n        <div class=\"mt-2 pt-2 border-top\">\r\n            <label for=\"mail\" style=\"color: white;\">Enter your registered email: </label>\r\n            <input type=\"email\" name=\"mail\" id=\"mail\" placeholder=\"name@mail.com\" style=\"width: -webkit-fill-available;\" required>\r\n        </div>\r\n        <div id=\"danger\" class=\"alert alert-danger\" role=\"alert\" style=\"display: none;\">\r\n        Please... enter valid e-mail!\r\n        </div>\r\n        <div class=\"mt-2 pt-2 border-top\">\r\n            <button id=\"btn_confirm\" type=\"button\" class=\"btn btn-primary btn-sm\">Confirm</button>\r\n            <button id=\"btn_cancel\" type=\"button\" class=\"btn btn-secondary btn-sm\" data-bs-dismiss=\"toast\">Cancel</button>\r\n        </div>\r\n        </div>`\r\n    const mail = document.querySelector(\"#mail\")\r\n    const alert = document.querySelector(\"#danger\")\r\n    const btnConfirm = document.querySelector(\"#btn_confirm\")\r\n    const btnCancel = document.querySelector(\"#btn_cancel\")\r\n    mail.addEventListener(\"focus\", alertNone )\r\n    btnConfirm.addEventListener(\"click\", saveMail )\r\n    btnCancel.addEventListener(\"click\", cancelMail )\r\n    const regExp = /^(\\w){1}(\\d|\\w|\\.|-|_)+@(\\w|\\d)+\\.(\\w|\\.|\\d){3,}$/g\r\n    function alertNone() { alert.style.display = \"none\" }\r\n    function saveMail() {\r\n        if ( mail.value.trim() == \"\" ) return alert.style.display = \"\"\r\n        if ( mail.value.trim().match(regExp).length == 0 ) return alert.style.display = \"\"\r\n        localStorage.setItem(\"mail\", mail.value.trim().toLocaleLowerCase())\r\n        cancelMail(\"mail\")\r\n    }\r\n    function cancelMail(param = null) {\r\n        newHtml.remove()\r\n        if (!param ) localStorage.setItem(\"cancel\", \"cancel\")\r\n        removeEventListener(\"click\", saveMail)\r\n        removeEventListener(\"focus\", alertNone)\r\n    }\r\n}\r\nconst confirmUser = async () => {\r\n    if (!localStorage.mail) {\r\n        userInterface()\r\n    }\r\n    const awaitUser = setInterval( async () => {\r\n        if ( localStorage.mail || localStorage.cancel ) {\r\n            clearInterval(awaitUser)\r\n            if ( localStorage.cancel ) {\r\n                delete localStorage.cancel\r\n                return console.log(\"Cancel...\")\r\n            }\r\n            if ( arrUsers.filter( obj => obj.mail == localStorage.mail ).length > 0 ) {\r\n                (0,_crash__WEBPACK_IMPORTED_MODULE_0__.crashInterface)()\r\n            } return console.log(\"Not User!!!\")\r\n        }\r\n    }, 1000 )\r\n}\n\n//# sourceURL=webpack://crash/./sources/users.js?");

/***/ }),

/***/ "./sources/util.js":
/*!*************************!*\
  !*** ./sources/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cTimeToSeg\": () => (/* binding */ cTimeToSeg),\n/* harmony export */   \"nDateTime\": () => (/* binding */ nDateTime)\n/* harmony export */ });\nconst nDateTime = ( c_data, c_hora = \"00:00:00\", c_ms = \"000\" ) => {\r\n    let n_hh = c_hora ? Number( c_hora.substring( 0, 2 ) ) : 0\r\n    let n_mm = c_hora ? Number( c_hora.substring( 3, 5) ) : 0\r\n    let n_ss = c_hora ? Number( c_hora.substring( 6, 8) ) : 0\r\n    let n_ms = c_hora ? c_hora.length > 8 ? Number ( c_hora.substring( 9, c_hora.length ) ) : 0 : 0\r\n    if ( c_ms ) n_ms = Number( c_ms )\r\n    let n_Dia = Number( c_data.substring( 0, 2 ) )\r\n    let n_Mes = Number( c_data.substring( 3, 5 ) ) - 1\r\n    let n_Ano = Number( c_data.substring( 6, c_data.length) )\r\n    return Date.parse( new Date( n_Ano, n_Mes, n_Dia, n_hh, n_mm, n_ss ) ) + n_ms\r\n}\r\nconst cTimeToSeg = ( c_hora ) => {\r\n    let l = c_hora.length\r\n    let n_hh = Number( c_hora.substring( 0, l - 6 ) )\r\n    let n_mm = Number( c_hora.substring( l - 5, l - 3 ) )\r\n    let n_ss = Number( c_hora.substring( l - 2, l ) )\r\n    \r\n    return Number(( n_hh * 3600 ) + ( n_mm * 60 ) + n_ss)\r\n}\r\n\n\n//# sourceURL=webpack://crash/./sources/util.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;