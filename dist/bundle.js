/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/about/about.css":
/*!************************************!*\
  !*** ./components/about/about.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/game/game.css":
/*!**********************************!*\
  !*** ./components/game/game.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/header/header.css":
/*!**************************************!*\
  !*** ./components/header/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/registration/registration-form.css":
/*!*******************************************************!*\
  !*** ./components/registration/registration-form.css ***!
  \*******************************************************/
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

/***/ "./base-component.ts":
/*!***************************!*\
  !*** ./base-component.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.createElement = function (teg, classStyle, id) {
        var _a;
        var element = document.createElement(teg);
        if (classStyle.length) {
            (_a = element.classList).add.apply(_a, classStyle);
        }
        ;
        if (id) {
            element.id = id;
        }
        return element;
    };
    return BaseComponent;
}());
exports.default = BaseComponent;


/***/ }),

/***/ "./components/about/about.ts":
/*!***********************************!*\
  !*** ./components/about/about.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./about.css */ "./components/about/about.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var AboutPage = /** @class */ (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        var _this = _super.call(this) || this;
        _this.date = [
            { point: '1', text: 'Register new player in game', class: 'image1' },
            { point: '2', text: 'Configure your game settings', class: 'image2' },
            { point: '3', text: 'Start you new game! Remember card positions and match it before times up.', class: 'image3' },
        ];
        return _this;
    }
    AboutPage.prototype.getPage = function () {
        return this.createMain();
    };
    AboutPage.prototype.createMain = function () {
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], '');
        wrapContent.innerHTML = this.createContent(this.date);
        container.append(wrapContent);
        main.append(container);
        return main;
    };
    AboutPage.prototype.createContent = function (arr) {
        var content = "<h2 class=\"content-title\">How to play?</h2>";
        var row = arr.map(function (elem) {
            return "\n      <div class=\"content-feild\">\n        <div class=\"content-row\">\n          <div class=\"content-row__left\">\n            <div class=\"point\">\n              <p>" + elem.point + "</p>\n            </div>\n            <p>" + elem.text + "</p>\n          </div>\n          <div class=\"content-row__right " + elem.class + "\"></div>\n        </div>\n      </div>\n      ";
        }).join('');
        return content + row;
    };
    return AboutPage;
}(base_component_1.default));
exports.default = AboutPage;


/***/ }),

/***/ "./components/game/game.ts":
/*!*********************************!*\
  !*** ./components/game/game.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./game.css */ "./components/game/game.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super.call(this) || this;
    }
    default_1.prototype.getPage = function () {
        return this.createGame();
    };
    default_1.prototype.createContent = function () {
    };
    default_1.prototype.createGame = function () {
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], '');
        //wrapContent.innerHTML = this.createContent();
        container.append(wrapContent);
        main.append(container);
        return main;
    };
    return default_1;
}(base_component_1.default));
exports.default = default_1;


/***/ }),

/***/ "./components/header/header.ts":
/*!*************************************!*\
  !*** ./components/header/header.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./header.css */ "./components/header/header.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super.call(this) || this;
        _this.feild = _this.createElement('header', ['header'], '');
        _this.container = _this.createContainer();
        _this.logo = _this.createLogo();
        _this.menu = _this.createMenu();
        _this.button = _this.createButton();
        return _this;
    }
    Header.prototype.getHeader = function () {
        this.toPlaceElements(this.container, [this.logo, this.menu, this.button]);
        this.toPlaceElements(this.feild, [this.container]);
        return this.feild;
    };
    Header.prototype.createContainer = function () {
        return this.createElement('div', ['container', 'header-container'], '');
    };
    Header.prototype.createLogo = function () {
        var logo = this.createElement('div', ['header-logo'], '');
        logo.innerHTML = "\n      <div class=\"logo-up\">\n        <p class=\"logo-text\">MATCH</p>\n      </div>\n      <div class=\"logo-down\">\n        <p class=\"logo-text\">MATCH</p>\n      </div>\n    ";
        return logo;
    };
    Header.prototype.createMenu = function () {
        var menu = this.createElement('menu', ['menu'], '');
        menu.innerHTML = "\n      <ul class=\"header-menu__items\">\n        <li class=\"header-menu__item item-about item-select\">\n          <div class=\"header-menu__img\"><p>?</p></div>\n          <p class=\"header-menu__text\">About Game</p>  \n        </li>\n        <li class=\"header-menu__item item-score\">\n          <div class=\"header-menu__img\"></div>\n          <p class=\"header-menu__text\">Best Score</p> \n        </li>\n        <li class=\"header-menu__item item-setting\">\n          <div class=\"header-menu__img\"></div>\n          <p class=\"header-menu__text\">Game Settings</p>\n        </li>\n      </ul>\n    ";
        return menu;
    };
    Header.prototype.createButton = function () {
        var button = this.createElement('button', ['header-button'], '');
        button.id = 'regBtn';
        button.innerHTML = "\n      <p class=\"header-button__text\">register new player</p>\n    ";
        return button;
    };
    Header.prototype.toPlaceElements = function (wrap, arr) {
        arr.forEach(function (element) { return wrap.append(element); });
    };
    return Header;
}(base_component_1.default));
exports.default = Header;


/***/ }),

/***/ "./components/registration/registration-form.ts":
/*!******************************************************!*\
  !*** ./components/registration/registration-form.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./registration-form.css */ "./components/registration/registration-form.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var RegistrationForm = /** @class */ (function (_super) {
    __extends(RegistrationForm, _super);
    function RegistrationForm() {
        var _this = _super.call(this) || this;
        _this.modalWindow = _this.buildModal();
        return _this;
    }
    RegistrationForm.prototype.createBackgroundFon = function () {
        var backgroundFon = this.createElement('div', ['modal-fon'], '');
        return backgroundFon;
    };
    RegistrationForm.prototype.createInputForm = function () {
        return "\n      <form class=\"modal-form\">\n        <div class=\"form-block\">\n          <label for=\"firstName\" class=\"modal-form__label\">First Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"firstName\" id=\"firstName\" required placeholder=\"...\">        \n        </div>\n        <div class=\"form-block\">\n          <label for=\"lastName\" class=\"modal-form__label\">Last Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"lastName\" id=\"lastName\" required placeholder=\"...\">        \n        </div>\n        <div class=\"form-block\">\n          <label for=\"email\" class=\"modal-form__label\">E-mail</label>\n          <input type=\"email\" class=\"modal-form__input\" name=\"email\" id=\"email\" required placeholder=\"...\">        \n        </div>\n      </form>\n    ";
    };
    RegistrationForm.prototype.createModalBlock = function () {
        var modalBlock = this.createElement('section', ['modal-block'], '');
        modalBlock.innerHTML = "\n      <header class=\"modal-header\">\n        <h2>Registr new Player</h2>\n      </header>\n      <main class=\"modal-main\">\n        " + this.createInputForm() + "\n        <div class=\"modal-avatar\"></div>\n      </main>\n      <footer class=\"modal-footer\">\n        <button id=\"add\" class=\"add\"><p>add user</p></button>\n        <button id=\"cancel\" class=\"cancel\"><p>cancel</p></button>\n      </footer>\n    ";
        return modalBlock;
    };
    RegistrationForm.prototype.buildModal = function () {
        var modalFon = this.createBackgroundFon();
        var modalBlock = this.createModalBlock();
        modalFon.append(modalBlock);
        return modalFon;
    };
    return RegistrationForm;
}(base_component_1.default));
exports.default = RegistrationForm;


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
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./base-component.ts"));
window.onload = function () {
    var element = new base_component_1.default();
    var app = element.createElement('div', [], 'app');
    document.body.prepend(app);
    mvc_1.default(app);
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
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./base-component.ts"));
var header_1 = __importDefault(__webpack_require__(/*! ./components/header/header */ "./components/header/header.ts"));
var about_1 = __importDefault(__webpack_require__(/*! ./components/about/about */ "./components/about/about.ts"));
var registration_form_1 = __importDefault(__webpack_require__(/*! ./components/registration/registration-form */ "./components/registration/registration-form.ts"));
var game_1 = __importDefault(__webpack_require__(/*! ./components/game/game */ "./components/game/game.ts"));
function mvc(app) {
    // View
    var View = /** @class */ (function () {
        function View(app) {
            this.app = app;
            this.modalFeild = new base_component_1.default().createElement('div', ['modal-feild'], '');
            this.modalWindow = new registration_form_1.default().modalWindow;
            this.header = new header_1.default().getHeader();
            this.AboutPage = new about_1.default().getPage();
            this.GamePage = new game_1.default().getPage();
            this.init();
        }
        View.prototype.init = function () {
            this.modalFeild.append(this.modalWindow);
            this.app.before(this.modalFeild);
        };
        View.prototype.showFirstPage = function () {
            this.app.append(this.header);
            //this.app.append(this.AboutPage);
            this.app.append(this.GamePage); // для наглядности пока вставил 
        };
        View.prototype.showModalWindow = function () {
            var modal = document.querySelector('.modal-fon');
            modal === null || modal === void 0 ? void 0 : modal.classList.add('modal-fon_active');
        };
        View.prototype.hiddenModalWindow = function () {
            var modal = document.querySelector('.modal-fon');
            modal === null || modal === void 0 ? void 0 : modal.classList.remove('modal-fon_active');
        };
        View.prototype.showStartGameButton = function () { };
        return View;
    }());
    // Model
    var Model = /** @class */ (function () {
        function Model(view) {
            this.view = view;
            this.init();
        }
        Model.prototype.init = function () {
            this.getLoadFirstPage();
        };
        Model.prototype.getLoadFirstPage = function () {
            this.view.showFirstPage();
        };
        Model.prototype.closeModalWindow = function () {
            this.view.hiddenModalWindow();
        };
        Model.prototype.openModalWindow = function () {
            this.view.showModalWindow();
        };
        Model.prototype.checkRegistrationData = function () {
            if (true) {
                this.closeModalWindow();
                this.view.showStartGameButton();
            }
        };
        return Model;
    }());
    // Controller
    var Controller = /** @class */ (function () {
        function Controller(app, model) {
            this.app = app;
            this.model = model;
            this.init();
        }
        Controller.prototype.init = function () {
            var _this = this;
            var addBtn = document.querySelector('#add');
            var cancelBtn = document.querySelector('#cancel');
            var regBtn = app.querySelector('#regBtn');
            // get event on modal window
            addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function () {
                _this.clickAddBtnModal();
            });
            cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', function () {
                _this.clickCancelBtnModal();
            });
            // get event on aap 
            regBtn === null || regBtn === void 0 ? void 0 : regBtn.addEventListener('click', function () {
                _this.clickNewPlayerBtn();
            });
        };
        Controller.prototype.clickNewPlayerBtn = function () {
            this.model.openModalWindow();
        };
        Controller.prototype.clickCancelBtnModal = function () {
            this.model.closeModalWindow();
        };
        Controller.prototype.clickAddBtnModal = function () {
            this.model.checkRegistrationData();
        };
        return Controller;
    }());
    var view = new View(app);
    var model = new Model(view);
    var controller = new Controller(app, model);
}
exports.default = mvc;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNzcz80NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzcz84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/Zjg1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5jc3M/ZWY3MyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz82Yzk5Iiwid2VicGFjazovLy8uL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1mb3JtLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL212Yy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxlQUFlOzs7Ozs7Ozs7OztB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Q0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7OztVQzNHZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQmFzZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhc2VDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRlZywgY2xhc3NTdHlsZSwgaWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRlZyk7XHJcbiAgICAgICAgaWYgKGNsYXNzU3R5bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIChfYSA9IGVsZW1lbnQuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2EsIGNsYXNzU3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJhc2VDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9hYm91dC5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBBYm91dFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWJvdXRQYWdlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZGF0ZSA9IFtcclxuICAgICAgICAgICAgeyBwb2ludDogJzEnLCB0ZXh0OiAnUmVnaXN0ZXIgbmV3IHBsYXllciBpbiBnYW1lJywgY2xhc3M6ICdpbWFnZTEnIH0sXHJcbiAgICAgICAgICAgIHsgcG9pbnQ6ICcyJywgdGV4dDogJ0NvbmZpZ3VyZSB5b3VyIGdhbWUgc2V0dGluZ3MnLCBjbGFzczogJ2ltYWdlMicgfSxcclxuICAgICAgICAgICAgeyBwb2ludDogJzMnLCB0ZXh0OiAnU3RhcnQgeW91IG5ldyBnYW1lISBSZW1lbWJlciBjYXJkIHBvc2l0aW9ucyBhbmQgbWF0Y2ggaXQgYmVmb3JlIHRpbWVzIHVwLicsIGNsYXNzOiAnaW1hZ2UzJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQWJvdXRQYWdlLnByb3RvdHlwZS5nZXRQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1haW4oKTtcclxuICAgIH07XHJcbiAgICBBYm91dFBhZ2UucHJvdG90eXBlLmNyZWF0ZU1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICcnKTtcclxuICAgICAgICB3cmFwQ29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZUNvbnRlbnQodGhpcy5kYXRlKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuICAgIEFib3V0UGFnZS5wcm90b3R5cGUuY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IFwiPGgyIGNsYXNzPVxcXCJjb250ZW50LXRpdGxlXFxcIj5Ib3cgdG8gcGxheT88L2gyPlwiO1xyXG4gICAgICAgIHZhciByb3cgPSBhcnIubWFwKGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtZmVpbGRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1yb3dcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJvd19fbGVmdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9pbnRcXFwiPlxcbiAgICAgICAgICAgICAgPHA+XCIgKyBlbGVtLnBvaW50ICsgXCI8L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHA+XCIgKyBlbGVtLnRleHQgKyBcIjwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcm93X19yaWdodCBcIiArIGVsZW0uY2xhc3MgKyBcIlxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcIjtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gY29udGVudCArIHJvdztcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWJvdXRQYWdlO1xyXG59KGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBBYm91dFBhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9nYW1lLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIGRlZmF1bHRfMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhkZWZhdWx0XzEsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0XzEoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR2FtZSgpO1xyXG4gICAgfTtcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICcnKTtcclxuICAgICAgICAvL3dyYXBDb250ZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlQ29udGVudCgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlZmF1bHRfMTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaGVhZGVyLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEhlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIZWFkZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5mZWlsZCA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBfdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICAgICAgICBfdGhpcy5sb2dvID0gX3RoaXMuY3JlYXRlTG9nbygpO1xyXG4gICAgICAgIF90aGlzLm1lbnUgPSBfdGhpcy5jcmVhdGVNZW51KCk7XHJcbiAgICAgICAgX3RoaXMuYnV0dG9uID0gX3RoaXMuY3JlYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50b1BsYWNlRWxlbWVudHModGhpcy5jb250YWluZXIsIFt0aGlzLmxvZ28sIHRoaXMubWVudSwgdGhpcy5idXR0b25dKTtcclxuICAgICAgICB0aGlzLnRvUGxhY2VFbGVtZW50cyh0aGlzLmZlaWxkLCBbdGhpcy5jb250YWluZXJdKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZWlsZDtcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbnRhaW5lcicsICdoZWFkZXItY29udGFpbmVyJ10sICcnKTtcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZUxvZ28gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvZ28gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyLWxvZ28nXSwgJycpO1xyXG4gICAgICAgIGxvZ28uaW5uZXJIVE1MID0gXCJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLXVwXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJsb2dvLXRleHRcXFwiPk1BVENIPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tZG93blxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibG9nby10ZXh0XFxcIj5NQVRDSDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIGxvZ287XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdtZW51JywgWydtZW51J10sICcnKTtcclxuICAgICAgICBtZW51LmlubmVySFRNTCA9IFwiXFxuICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXItbWVudV9faXRlbXNcXFwiPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXItbWVudV9faXRlbSBpdGVtLWFib3V0IGl0ZW0tc2VsZWN0XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2ltZ1xcXCI+PHA+PzwvcD48L2Rpdj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1tZW51X190ZXh0XFxcIj5BYm91dCBHYW1lPC9wPiAgXFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXItbWVudV9faXRlbSBpdGVtLXNjb3JlXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2ltZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItbWVudV9fdGV4dFxcXCI+QmVzdCBTY29yZTwvcD4gXFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXItbWVudV9faXRlbSBpdGVtLXNldHRpbmdcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItbWVudV9faW1nXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1tZW51X190ZXh0XFxcIj5HYW1lIFNldHRpbmdzPC9wPlxcbiAgICAgICAgPC9saT5cXG4gICAgICA8L3VsPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gbWVudTtcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2hlYWRlci1idXR0b24nXSwgJycpO1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9ICdyZWdCdG4nO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItYnV0dG9uX190ZXh0XFxcIj5yZWdpc3RlciBuZXcgcGxheWVyPC9wPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUudG9QbGFjZUVsZW1lbnRzID0gZnVuY3Rpb24gKHdyYXAsIGFycikge1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiB3cmFwLmFwcGVuZChlbGVtZW50KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhlYWRlcjtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vcmVnaXN0cmF0aW9uLWZvcm0uY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgUmVnaXN0cmF0aW9uRm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSZWdpc3RyYXRpb25Gb3JtLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmVnaXN0cmF0aW9uRm9ybSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm1vZGFsV2luZG93ID0gX3RoaXMuYnVpbGRNb2RhbCgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNyZWF0ZUJhY2tncm91bmRGb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRGb24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbW9kYWwtZm9uJ10sICcnKTtcclxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZEZvbjtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jcmVhdGVJbnB1dEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgPGZvcm0gY2xhc3M9XFxcIm1vZGFsLWZvcm1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2xhYmVsXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiBpZD1cXFwiZmlyc3ROYW1lXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiLi4uXFxcIj4gICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19sYWJlbFxcXCI+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIGlkPVxcXCJsYXN0TmFtZVxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCI+ICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkUtbWFpbDwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2lucHV0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiLi4uXFxcIj4gICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9mb3JtPlxcbiAgICBcIjtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jcmVhdGVNb2RhbEJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtb2RhbEJsb2NrID0gdGhpcy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgWydtb2RhbC1ibG9jayddLCAnJyk7XHJcbiAgICAgICAgbW9kYWxCbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxoZWFkZXIgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDI+UmVnaXN0ciBuZXcgUGxheWVyPC9oMj5cXG4gICAgICA8L2hlYWRlcj5cXG4gICAgICA8bWFpbiBjbGFzcz1cXFwibW9kYWwtbWFpblxcXCI+XFxuICAgICAgICBcIiArIHRoaXMuY3JlYXRlSW5wdXRGb3JtKCkgKyBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYXZhdGFyXFxcIj48L2Rpdj5cXG4gICAgICA8L21haW4+XFxuICAgICAgPGZvb3RlciBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImFkZFxcXCIgY2xhc3M9XFxcImFkZFxcXCI+PHA+YWRkIHVzZXI8L3A+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJjYW5jZWxcXFwiPjxwPmNhbmNlbDwvcD48L2J1dHRvbj5cXG4gICAgICA8L2Zvb3Rlcj5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIG1vZGFsQmxvY2s7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuYnVpbGRNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbW9kYWxGb24gPSB0aGlzLmNyZWF0ZUJhY2tncm91bmRGb24oKTtcclxuICAgICAgICB2YXIgbW9kYWxCbG9jayA9IHRoaXMuY3JlYXRlTW9kYWxCbG9jaygpO1xyXG4gICAgICAgIG1vZGFsRm9uLmFwcGVuZChtb2RhbEJsb2NrKTtcclxuICAgICAgICByZXR1cm4gbW9kYWxGb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZ2lzdHJhdGlvbkZvcm07XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZ2lzdHJhdGlvbkZvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCIpO1xyXG52YXIgbXZjXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXZjXCIpKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBuZXcgYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KCk7XHJcbiAgICB2YXIgYXBwID0gZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwgJ2FwcCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGFwcCk7XHJcbiAgICBtdmNfMS5kZWZhdWx0KGFwcCk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIGhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XHJcbnZhciBhYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXRcIikpO1xyXG52YXIgcmVnaXN0cmF0aW9uX2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybVwiKSk7XHJcbnZhciBnYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9nYW1lL2dhbWVcIikpO1xyXG5mdW5jdGlvbiBtdmMoYXBwKSB7XHJcbiAgICAvLyBWaWV3XHJcbiAgICB2YXIgVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBWaWV3KGFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZlaWxkID0gbmV3IGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCgpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbW9kYWwtZmVpbGQnXSwgJycpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsV2luZG93ID0gbmV3IHJlZ2lzdHJhdGlvbl9mb3JtXzEuZGVmYXVsdCgpLm1vZGFsV2luZG93O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBoZWFkZXJfMS5kZWZhdWx0KCkuZ2V0SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQWJvdXRQYWdlID0gbmV3IGFib3V0XzEuZGVmYXVsdCgpLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGFnZSA9IG5ldyBnYW1lXzEuZGVmYXVsdCgpLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGZWlsZC5hcHBlbmQodGhpcy5tb2RhbFdpbmRvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmJlZm9yZSh0aGlzLm1vZGFsRmVpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuYXBwZW5kKHRoaXMuaGVhZGVyKTtcclxuICAgICAgICAgICAgLy90aGlzLmFwcC5hcHBlbmQodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5HYW1lUGFnZSk7IC8vINC00LvRjyDQvdCw0LPQu9GP0LTQvdC+0YHRgtC4INC/0L7QutCwINCy0YHRgtCw0LLQuNC7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd01vZGFsV2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9uJyk7XHJcbiAgICAgICAgICAgIG1vZGFsID09PSBudWxsIHx8IG1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5oaWRkZW5Nb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvbicpO1xyXG4gICAgICAgICAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtZm9uX2FjdGl2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXJ0R2FtZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICByZXR1cm4gVmlldztcclxuICAgIH0oKSk7XHJcbiAgICAvLyBNb2RlbFxyXG4gICAgdmFyIE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIE1vZGVsKHZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldExvYWRGaXJzdFBhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRMb2FkRmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd0ZpcnN0UGFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNsb3NlTW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5oaWRkZW5Nb2RhbFdpbmRvdygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLm9wZW5Nb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dNb2RhbFdpbmRvdygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNoZWNrUmVnaXN0cmF0aW9uRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGFydEdhbWVCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE1vZGVsO1xyXG4gICAgfSgpKTtcclxuICAgIC8vIENvbnRyb2xsZXJcclxuICAgIHZhciBDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoYXBwLCBtb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuICAgICAgICAgICAgdmFyIGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKTtcclxuICAgICAgICAgICAgdmFyIHJlZ0J0biA9IGFwcC5xdWVyeVNlbGVjdG9yKCcjcmVnQnRuJyk7XHJcbiAgICAgICAgICAgIC8vIGdldCBldmVudCBvbiBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICAgYWRkQnRuID09PSBudWxsIHx8IGFkZEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tBZGRCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FuY2VsQnRuID09PSBudWxsIHx8IGNhbmNlbEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tDYW5jZWxCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZ2V0IGV2ZW50IG9uIGFhcCBcclxuICAgICAgICAgICAgcmVnQnRuID09PSBudWxsIHx8IHJlZ0J0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tOZXdQbGF5ZXJCdG4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja05ld1BsYXllckJ0biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5vcGVuTW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrQ2FuY2VsQnRuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2xvc2VNb2RhbFdpbmRvdygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tBZGRCdG5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jaGVja1JlZ2lzdHJhdGlvbkRhdGEoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IFZpZXcoYXBwKTtcclxuICAgIHZhciBtb2RlbCA9IG5ldyBNb2RlbCh2aWV3KTtcclxuICAgIHZhciBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoYXBwLCBtb2RlbCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gbXZjO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=