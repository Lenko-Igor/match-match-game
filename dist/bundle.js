/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/header/header.css":
/*!**************************************!*\
  !*** ./components/header/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/header/header.ts":
/*!*************************************!*\
  !*** ./components/header/header.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./header.css */ "./components/header/header.css");
var create_element_1 = __importDefault(__webpack_require__(/*! ../../create-element */ "./create-element.ts"));
var Header = /** @class */ (function () {
    function Header() {
        this.feild = new create_element_1.default('header', ['header'], '').element;
        this.container = this.createContainer();
        this.logo = this.createLogo();
        this.menu = this.createMenu();
        this.button = this.createButton();
        this.toPlaceElements(this.container, [this.logo, this.menu, this.button]);
        this.toPlaceElements(this.feild, [this.container]);
    }
    Header.prototype.createContainer = function () {
        var container = new create_element_1.default('div', ['container', 'header-container'], '');
        return container.element;
    };
    Header.prototype.createLogo = function () {
        var logo = new create_element_1.default('div', ['header-logo'], '');
        logo.element.innerHTML = "\n      <div class=\"logo-up\">\n        <p class=\"logo-text\">MATCH</p>\n      </div>\n      <div class=\"logo-down\">\n        <p class=\"logo-text\">MATCH</p>\n      </div>\n    ";
        return logo.element;
    };
    Header.prototype.createMenu = function () {
        var menu = new create_element_1.default('menu', [], '');
        menu.element.innerHTML = "\n      <ul class=\"header-menu__items\">\n        <li class=\"header-menu__item\">About Game</li>\n        <li class=\"header-menu__item\">Best Score</li>\n        <li class=\"header-menu__item\">Game Settings</li>\n      </ul>\n    ";
        return menu.element;
    };
    Header.prototype.createButton = function () {
        var button = new create_element_1.default('button', ['header-button'], '');
        button.element.innerHTML = 'register new player';
        return button.element;
    };
    Header.prototype.toPlaceElements = function (wrap, arr) {
        arr.forEach(function (element) { return wrap.append(element); });
    };
    return Header;
}());
exports.default = Header;


/***/ }),

/***/ "./create-element.ts":
/*!***************************!*\
  !*** ./create-element.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var CreateElement = /** @class */ (function () {
    function CreateElement(nameTeg, nameClass, id) {
        this.teg = nameTeg;
        this.class = nameClass;
        this.id = id;
        this.element = this.createElement();
    }
    CreateElement.prototype.createElement = function () {
        var _a;
        var element = document.createElement(this.teg);
        if (this.class.length) {
            (_a = element.classList).add.apply(_a, this.class);
        }
        ;
        if (this.id) {
            element.id = this.id;
        }
        return element;
    };
    return CreateElement;
}());
exports.default = CreateElement;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
var mvc_1 = __importDefault(__webpack_require__(/*! ./mvc */ "./mvc.ts"));
window.onload = function () {
    mvc_1.default(document.body);
};


/***/ }),

/***/ "./mvc.ts":
/*!****************!*\
  !*** ./mvc.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var about_1 = __importDefault(__webpack_require__(/*! ./pages/about/about */ "./pages/about/about.ts"));
function mvc(wrap) {
    // View
    var View = /** @class */ (function () {
        function View(wrap) {
            this.wrap = wrap;
            this.showPage();
        }
        View.prototype.showPage = function () {
            var aboutPage = new about_1.default();
            this.wrap.prepend(aboutPage.header);
        };
        return View;
    }());
    // Model
    var Model = /** @class */ (function () {
        function Model(view) {
            this.view = view;
        }
        return Model;
    }());
    // Controller
    var Controller = /** @class */ (function () {
        function Controller(wrap, model) {
            this.wrap = wrap;
            this.model = model;
        }
        return Controller;
    }());
    var view = new View(wrap);
    var model = new Model(view);
    var controller = new Controller(wrap, model);
}
exports.default = mvc;


/***/ }),

/***/ "./pages/about/about.ts":
/*!******************************!*\
  !*** ./pages/about/about.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
//import CreateElement from '../../create-element';
var header_1 = __importDefault(__webpack_require__(/*! ../../components/header/header */ "./components/header/header.ts"));
var AboutPage = /** @class */ (function () {
    function AboutPage() {
        this.header = new header_1.default().feild;
    }
    return AboutPage;
}());
exports.default = AboutPage;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2Y4NTQiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3N0eWxlcy5jc3M/NmM5OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY3JlYXRlLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbXZjLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0L2Fib3V0LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxvREFBYztBQUN0Qix1Q0FBdUMsbUJBQU8sQ0FBQyxpREFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZCQUE2QixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZTs7Ozs7Ozs7Ozs7QUN6Q0Y7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxlQUFlOzs7Ozs7Ozs7OztBQ3ZCRjtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0RBQXFCO0FBQzdCLDRCQUE0QixtQkFBTyxDQUFDLHVCQUFPO0FBQzNDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLG1EQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7QUN0Q0Y7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBLCtCQUErQixtQkFBTyxDQUFDLHFFQUFnQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGVBQWU7Ozs7Ozs7VUNiZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9oZWFkZXIuY3NzXCIpO1xyXG52YXIgY3JlYXRlX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY3JlYXRlLWVsZW1lbnRcIikpO1xyXG52YXIgSGVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmVpbGQgPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KCdoZWFkZXInLCBbJ2hlYWRlciddLCAnJykuZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5jcmVhdGVMb2dvKCk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMudG9QbGFjZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyLCBbdGhpcy5sb2dvLCB0aGlzLm1lbnUsIHRoaXMuYnV0dG9uXSk7XHJcbiAgICAgICAgdGhpcy50b1BsYWNlRWxlbWVudHModGhpcy5mZWlsZCwgW3RoaXMuY29udGFpbmVyXSk7XHJcbiAgICB9XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdCgnZGl2JywgWydjb250YWluZXInLCAnaGVhZGVyLWNvbnRhaW5lciddLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5lbGVtZW50O1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTG9nbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbG9nbyA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoJ2RpdicsIFsnaGVhZGVyLWxvZ28nXSwgJycpO1xyXG4gICAgICAgIGxvZ28uZWxlbWVudC5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tdXBcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+TUFUQ0g8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby1kb3duXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJsb2dvLXRleHRcXFwiPk1BVENIPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gbG9nby5lbGVtZW50O1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWVudSA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoJ21lbnUnLCBbXSwgJycpO1xyXG4gICAgICAgIG1lbnUuZWxlbWVudC5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW1cXFwiPkFib3V0IEdhbWU8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXItbWVudV9faXRlbVxcXCI+QmVzdCBTY29yZTwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtXFxcIj5HYW1lIFNldHRpbmdzPC9saT5cXG4gICAgICA8L3VsPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gbWVudS5lbGVtZW50O1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBidXR0b24gPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KCdidXR0b24nLCBbJ2hlYWRlci1idXR0b24nXSwgJycpO1xyXG4gICAgICAgIGJ1dHRvbi5lbGVtZW50LmlubmVySFRNTCA9ICdyZWdpc3RlciBuZXcgcGxheWVyJztcclxuICAgICAgICByZXR1cm4gYnV0dG9uLmVsZW1lbnQ7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS50b1BsYWNlRWxlbWVudHMgPSBmdW5jdGlvbiAod3JhcCwgYXJyKSB7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIHdyYXAuYXBwZW5kKGVsZW1lbnQpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDcmVhdGVFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudChuYW1lVGVnLCBuYW1lQ2xhc3MsIGlkKSB7XHJcbiAgICAgICAgdGhpcy50ZWcgPSBuYW1lVGVnO1xyXG4gICAgICAgIHRoaXMuY2xhc3MgPSBuYW1lQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgQ3JlYXRlRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGVnKTtcclxuICAgICAgICBpZiAodGhpcy5jbGFzcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKF9hID0gZWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgdGhpcy5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENyZWF0ZUVsZW1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZUVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCIpO1xyXG52YXIgbXZjXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXZjXCIpKTtcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG12Y18xLmRlZmF1bHQoZG9jdW1lbnQuYm9keSk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhZ2VzL2Fib3V0L2Fib3V0XCIpKTtcclxuZnVuY3Rpb24gbXZjKHdyYXApIHtcclxuICAgIC8vIFZpZXdcclxuICAgIHZhciBWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFZpZXcod3JhcCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXAgPSB3cmFwO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWJvdXRQYWdlID0gbmV3IGFib3V0XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXAucHJlcGVuZChhYm91dFBhZ2UuaGVhZGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBWaWV3O1xyXG4gICAgfSgpKTtcclxuICAgIC8vIE1vZGVsXHJcbiAgICB2YXIgTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gTW9kZWwodmlldykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTW9kZWw7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gQ29udHJvbGxlclxyXG4gICAgdmFyIENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQ29udHJvbGxlcih3cmFwLCBtb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXAgPSB3cmFwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IFZpZXcod3JhcCk7XHJcbiAgICB2YXIgbW9kZWwgPSBuZXcgTW9kZWwodmlldyk7XHJcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHdyYXAsIG1vZGVsKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBtdmM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vY3JlYXRlLWVsZW1lbnQnO1xyXG52YXIgaGVhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XHJcbnZhciBBYm91dFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgaGVhZGVyXzEuZGVmYXVsdCgpLmZlaWxkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFib3V0UGFnZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQWJvdXRQYWdlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=