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
        return "<h1>GAME</h1>";
    };
    default_1.prototype.createGame = function () {
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], '');
        wrapContent.innerHTML = this.createContent();
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
        var buttonFeild = this.createElement('div', ['header-button-feild'], '');
        var buttonStartGame = this.createElement('button', ['header-button', 'header-button-start', 'hidden'], 'startGame');
        var buttonRegistration = this.createElement('button', ['header-button'], 'regBtn');
        buttonStartGame.innerHTML = "\n      <p class=\"header-button__text\">start game</p>\n    ";
        buttonRegistration.innerHTML = "\n      <p class=\"header-button__text\">register new player</p>\n    ";
        buttonFeild.append(buttonStartGame);
        buttonFeild.append(buttonRegistration);
        return buttonFeild;
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
        return "\n      <form class=\"modal-form\">\n        <div class=\"form-block\">\n          <label for=\"firstName\" class=\"modal-form__label\">First Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"firstName\" id=\"firstName\" required placeholder=\"...\" value=\"\">     \n          <div class=\"form-block__check error\"></div>   \n        </div>\n        <div class=\"form-block\">\n          <label for=\"lastName\" class=\"modal-form__label\">Last Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"lastName\" id=\"lastName\" required placeholder=\"...\">   \n          <div class=\"form-block__check error\"></div>      \n        </div>\n        <div class=\"form-block\">\n          <label for=\"email\" class=\"modal-form__label\">E-mail</label>\n          <input type=\"email\" class=\"modal-form__input\" name=\"email\" id=\"email\" required placeholder=\"...\"> \n          <div class=\"form-block__check error\"></div>        \n        </div>\n      </form>\n    ";
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
        View.prototype.showStartGameButton = function () {
            var regBtn = this.app.querySelector('#regBtn');
            var startBtn = this.app.querySelector('#startGame');
            regBtn === null || regBtn === void 0 ? void 0 : regBtn.classList.add('hidden');
            startBtn === null || startBtn === void 0 ? void 0 : startBtn.classList.remove('hidden');
        };
        View.prototype.showStatusInput = function (id, status) {
            var _a, _b;
            var input = this.modalWindow.querySelector("#" + id);
            if (status) {
                (_a = input === null || input === void 0 ? void 0 : input.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('error');
            }
            else {
                (_b = input === null || input === void 0 ? void 0 : input.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.add('error');
            }
        };
        return View;
    }());
    // Model
    var Model = /** @class */ (function () {
        function Model(view) {
            this.view = view;
            this.init();
            this.data = [];
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
        Model.prototype.checkValueInput = function (id, value) {
            var regName = /^[a-zA-Zа-яА-Я]+$/ui;
            if (id === 'firstName' || id === 'lastName') {
                if (regName.test(value)) {
                    this.view.showStatusInput(id, true);
                }
                else {
                    this.view.showStatusInput(id, false);
                }
            }
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
            var modalWindow = document.querySelector('.modal-feild');
            var addBtn = document.querySelector('#add');
            var cancelBtn = document.querySelector('#cancel');
            var regBtn = this.app.querySelector('#regBtn');
            var inputs = modalWindow === null || modalWindow === void 0 ? void 0 : modalWindow.querySelectorAll('input');
            // get event on modal window
            addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function () {
                _this.clickAddBtnModal();
            });
            cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', function () {
                _this.clickCancelBtnModal();
            });
            inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (inp) {
                inp.addEventListener('change', function () {
                    _this.getParametrsInput(inp.id, inp.value);
                });
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
        Controller.prototype.getParametrsInput = function (id, value) {
            this.model.checkValueInput(id, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNzcz80NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzcz84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/Zjg1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5jc3M/ZWY3MyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz82Yzk5Iiwid2VicGFjazovLy8uL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1mb3JtLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL212Yy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxlQUFlOzs7Ozs7Ozs7OztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDaEpmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGVnLCBjbGFzc1N0eWxlLCBpZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVnKTtcclxuICAgICAgICBpZiAoY2xhc3NTdHlsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKF9hID0gZWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgY2xhc3NTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2Fib3V0LmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEFib3V0UGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBYm91dFBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kYXRlID0gW1xyXG4gICAgICAgICAgICB7IHBvaW50OiAnMScsIHRleHQ6ICdSZWdpc3RlciBuZXcgcGxheWVyIGluIGdhbWUnLCBjbGFzczogJ2ltYWdlMScgfSxcclxuICAgICAgICAgICAgeyBwb2ludDogJzInLCB0ZXh0OiAnQ29uZmlndXJlIHlvdXIgZ2FtZSBzZXR0aW5ncycsIGNsYXNzOiAnaW1hZ2UyJyB9LFxyXG4gICAgICAgICAgICB7IHBvaW50OiAnMycsIHRleHQ6ICdTdGFydCB5b3UgbmV3IGdhbWUhIFJlbWVtYmVyIGNhcmQgcG9zaXRpb25zIGFuZCBtYXRjaCBpdCBiZWZvcmUgdGltZXMgdXAuJywgY2xhc3M6ICdpbWFnZTMnIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBBYm91dFBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbigpO1xyXG4gICAgfTtcclxuICAgIEFib3V0UGFnZS5wcm90b3R5cGUuY3JlYXRlTWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWFpbicsIFsnbWFpbiddLCAnJyk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnbWFpbi1jb250YWluZXInXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlQ29udGVudCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgQWJvdXRQYWdlLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gXCI8aDIgY2xhc3M9XFxcImNvbnRlbnQtdGl0bGVcXFwiPkhvdyB0byBwbGF5PzwvaDI+XCI7XHJcbiAgICAgICAgdmFyIHJvdyA9IGFyci5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1mZWlsZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcm93X19sZWZ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb2ludFxcXCI+XFxuICAgICAgICAgICAgICA8cD5cIiArIGVsZW0ucG9pbnQgKyBcIjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cD5cIiArIGVsZW0udGV4dCArIFwiPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1yb3dfX3JpZ2h0IFwiICsgZWxlbS5jbGFzcyArIFwiXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50ICsgcm93O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBYm91dFBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0UGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2dhbWUuY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgZGVmYXVsdF8xID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKGRlZmF1bHRfMSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRfMSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuZ2V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVHYW1lKCk7XHJcbiAgICB9O1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxoMT5HQU1FPC9oMT5cIjtcclxuICAgIH07XHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICcnKTtcclxuICAgICAgICB3cmFwQ29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkZWZhdWx0XzE7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2hlYWRlci5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBIZWFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSGVhZGVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZmVpbGQgPSBfdGhpcy5jcmVhdGVFbGVtZW50KCdoZWFkZXInLCBbJ2hlYWRlciddLCAnJyk7XHJcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gX3RoaXMuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgICAgICAgX3RoaXMubG9nbyA9IF90aGlzLmNyZWF0ZUxvZ28oKTtcclxuICAgICAgICBfdGhpcy5tZW51ID0gX3RoaXMuY3JlYXRlTWVudSgpO1xyXG4gICAgICAgIF90aGlzLmJ1dHRvbiA9IF90aGlzLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEhlYWRlci5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudG9QbGFjZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyLCBbdGhpcy5sb2dvLCB0aGlzLm1lbnUsIHRoaXMuYnV0dG9uXSk7XHJcbiAgICAgICAgdGhpcy50b1BsYWNlRWxlbWVudHModGhpcy5mZWlsZCwgW3RoaXMuY29udGFpbmVyXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnaGVhZGVyLWNvbnRhaW5lciddLCAnJyk7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVMb2dvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsb2dvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2hlYWRlci1sb2dvJ10sICcnKTtcclxuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby11cFxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibG9nby10ZXh0XFxcIj5NQVRDSDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLWRvd25cXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+TUFUQ0g8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBsb2dvO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWVudScsIFsnbWVudSddLCAnJyk7XHJcbiAgICAgICAgbWVudS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1hYm91dCBpdGVtLXNlbGVjdFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjxwPj88L3A+PC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItbWVudV9fdGV4dFxcXCI+QWJvdXQgR2FtZTwvcD4gIFxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1zY29yZVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkJlc3QgU2NvcmU8L3A+IFxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1zZXR0aW5nXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2ltZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItbWVudV9fdGV4dFxcXCI+R2FtZSBTZXR0aW5nczwvcD5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbkZlaWxkID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2hlYWRlci1idXR0b24tZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIHZhciBidXR0b25TdGFydEdhbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnaGVhZGVyLWJ1dHRvbicsICdoZWFkZXItYnV0dG9uLXN0YXJ0JywgJ2hpZGRlbiddLCAnc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgdmFyIGJ1dHRvblJlZ2lzdHJhdGlvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydoZWFkZXItYnV0dG9uJ10sICdyZWdCdG4nKTtcclxuICAgICAgICBidXR0b25TdGFydEdhbWUuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLWJ1dHRvbl9fdGV4dFxcXCI+c3RhcnQgZ2FtZTwvcD5cXG4gICAgXCI7XHJcbiAgICAgICAgYnV0dG9uUmVnaXN0cmF0aW9uLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1idXR0b25fX3RleHRcXFwiPnJlZ2lzdGVyIG5ldyBwbGF5ZXI8L3A+XFxuICAgIFwiO1xyXG4gICAgICAgIGJ1dHRvbkZlaWxkLmFwcGVuZChidXR0b25TdGFydEdhbWUpO1xyXG4gICAgICAgIGJ1dHRvbkZlaWxkLmFwcGVuZChidXR0b25SZWdpc3RyYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBidXR0b25GZWlsZDtcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLnRvUGxhY2VFbGVtZW50cyA9IGZ1bmN0aW9uICh3cmFwLCBhcnIpIHtcclxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gd3JhcC5hcHBlbmQoZWxlbWVudCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIZWFkZXI7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3JlZ2lzdHJhdGlvbi1mb3JtLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIFJlZ2lzdHJhdGlvbkZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVnaXN0cmF0aW9uRm9ybSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbkZvcm0oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5tb2RhbFdpbmRvdyA9IF90aGlzLmJ1aWxkTW9kYWwoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jcmVhdGVCYWNrZ3JvdW5kRm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kRm9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ21vZGFsLWZvbiddLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmRGb247XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY3JlYXRlSW5wdXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlxcbiAgICAgIDxmb3JtIGNsYXNzPVxcXCJtb2RhbC1mb3JtXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tcXFwiPlxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19sYWJlbFxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9faW5wdXRcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgaWQ9XFxcImZpcnN0TmFtZVxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCIgdmFsdWU9XFxcIlxcXCI+ICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja19fY2hlY2sgZXJyb3JcXFwiPjwvZGl2PiAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19sYWJlbFxcXCI+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIGlkPVxcXCJsYXN0TmFtZVxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCI+ICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkUtbWFpbDwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2lucHV0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiLi4uXFxcIj4gXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9mb3JtPlxcbiAgICBcIjtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jcmVhdGVNb2RhbEJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtb2RhbEJsb2NrID0gdGhpcy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgWydtb2RhbC1ibG9jayddLCAnJyk7XHJcbiAgICAgICAgbW9kYWxCbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxoZWFkZXIgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDI+UmVnaXN0ciBuZXcgUGxheWVyPC9oMj5cXG4gICAgICA8L2hlYWRlcj5cXG4gICAgICA8bWFpbiBjbGFzcz1cXFwibW9kYWwtbWFpblxcXCI+XFxuICAgICAgICBcIiArIHRoaXMuY3JlYXRlSW5wdXRGb3JtKCkgKyBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYXZhdGFyXFxcIj48L2Rpdj5cXG4gICAgICA8L21haW4+XFxuICAgICAgPGZvb3RlciBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImFkZFxcXCIgY2xhc3M9XFxcImFkZFxcXCI+PHA+YWRkIHVzZXI8L3A+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJjYW5jZWxcXFwiPjxwPmNhbmNlbDwvcD48L2J1dHRvbj5cXG4gICAgICA8L2Zvb3Rlcj5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIG1vZGFsQmxvY2s7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuYnVpbGRNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbW9kYWxGb24gPSB0aGlzLmNyZWF0ZUJhY2tncm91bmRGb24oKTtcclxuICAgICAgICB2YXIgbW9kYWxCbG9jayA9IHRoaXMuY3JlYXRlTW9kYWxCbG9jaygpO1xyXG4gICAgICAgIG1vZGFsRm9uLmFwcGVuZChtb2RhbEJsb2NrKTtcclxuICAgICAgICByZXR1cm4gbW9kYWxGb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZ2lzdHJhdGlvbkZvcm07XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZ2lzdHJhdGlvbkZvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCIpO1xyXG52YXIgbXZjXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbXZjXCIpKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBuZXcgYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KCk7XHJcbiAgICB2YXIgYXBwID0gZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwgJ2FwcCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGFwcCk7XHJcbiAgICBtdmNfMS5kZWZhdWx0KGFwcCk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIGhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XHJcbnZhciBhYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXRcIikpO1xyXG52YXIgcmVnaXN0cmF0aW9uX2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybVwiKSk7XHJcbnZhciBnYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9nYW1lL2dhbWVcIikpO1xyXG5mdW5jdGlvbiBtdmMoYXBwKSB7XHJcbiAgICAvLyBWaWV3XHJcbiAgICB2YXIgVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBWaWV3KGFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZlaWxkID0gbmV3IGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCgpLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbW9kYWwtZmVpbGQnXSwgJycpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsV2luZG93ID0gbmV3IHJlZ2lzdHJhdGlvbl9mb3JtXzEuZGVmYXVsdCgpLm1vZGFsV2luZG93O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBoZWFkZXJfMS5kZWZhdWx0KCkuZ2V0SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQWJvdXRQYWdlID0gbmV3IGFib3V0XzEuZGVmYXVsdCgpLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGFnZSA9IG5ldyBnYW1lXzEuZGVmYXVsdCgpLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGZWlsZC5hcHBlbmQodGhpcy5tb2RhbFdpbmRvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmJlZm9yZSh0aGlzLm1vZGFsRmVpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuYXBwZW5kKHRoaXMuaGVhZGVyKTtcclxuICAgICAgICAgICAgLy90aGlzLmFwcC5hcHBlbmQodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5HYW1lUGFnZSk7IC8vINC00LvRjyDQvdCw0LPQu9GP0LTQvdC+0YHRgtC4INC/0L7QutCwINCy0YHRgtCw0LLQuNC7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd01vZGFsV2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9uJyk7XHJcbiAgICAgICAgICAgIG1vZGFsID09PSBudWxsIHx8IG1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5oaWRkZW5Nb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvbicpO1xyXG4gICAgICAgICAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtZm9uX2FjdGl2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXJ0R2FtZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlZ0J0biA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJyNyZWdCdG4nKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0QnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICByZWdCdG4gPT09IG51bGwgfHwgcmVnQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuID09PSBudWxsIHx8IHN0YXJ0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGF0dXNJbnB1dCA9IGZ1bmN0aW9uIChpZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMubW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNcIiArIGlkKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0Lm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFZpZXc7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gTW9kZWxcclxuICAgIHZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBNb2RlbCh2aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9hZEZpcnN0UGFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmdldExvYWRGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93Rmlyc3RQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2xvc2VNb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGRlbk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUub3Blbk1vZGFsV2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd01vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2hlY2tWYWx1ZUlucHV0ID0gZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVnTmFtZSA9IC9eW2EtekEtWtCwLdGP0JAt0K9dKyQvdWk7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2ZpcnN0TmFtZScgfHwgaWQgPT09ICdsYXN0TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdOYW1lLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGF0dXNJbnB1dChpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jaGVja1JlZ2lzdHJhdGlvbkRhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWxXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRHYW1lQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBNb2RlbDtcclxuICAgIH0oKSk7XHJcbiAgICAvLyBDb250cm9sbGVyXHJcbiAgICB2YXIgQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBDb250cm9sbGVyKGFwcCwgbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mZWlsZCcpO1xyXG4gICAgICAgICAgICB2YXIgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xyXG4gICAgICAgICAgICB2YXIgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xyXG4gICAgICAgICAgICB2YXIgcmVnQnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3JlZ0J0bicpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0gbW9kYWxXaW5kb3cgPT09IG51bGwgfHwgbW9kYWxXaW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIC8vIGdldCBldmVudCBvbiBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICAgYWRkQnRuID09PSBudWxsIHx8IGFkZEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tBZGRCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FuY2VsQnRuID09PSBudWxsIHx8IGNhbmNlbEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tDYW5jZWxCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5wdXRzID09PSBudWxsIHx8IGlucHV0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucCkge1xyXG4gICAgICAgICAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRQYXJhbWV0cnNJbnB1dChpbnAuaWQsIGlucC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGdldCBldmVudCBvbiBhYXAgXHJcbiAgICAgICAgICAgIHJlZ0J0biA9PT0gbnVsbCB8fCByZWdCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrTmV3UGxheWVyQnRuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tOZXdQbGF5ZXJCdG4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwub3Blbk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja0NhbmNlbEJ0bk1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsb3NlTW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrQWRkQnRuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2hlY2tSZWdpc3RyYXRpb25EYXRhKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5nZXRQYXJhbWV0cnNJbnB1dCA9IGZ1bmN0aW9uIChpZCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jaGVja1ZhbHVlSW5wdXQoaWQsIHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IFZpZXcoYXBwKTtcclxuICAgIHZhciBtb2RlbCA9IG5ldyBNb2RlbCh2aWV3KTtcclxuICAgIHZhciBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoYXBwLCBtb2RlbCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gbXZjO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=