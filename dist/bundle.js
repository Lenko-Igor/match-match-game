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

/***/ "./components/score/score.css":
/*!************************************!*\
  !*** ./components/score/score.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/settings-page/settings.css":
/*!***********************************************!*\
  !*** ./components/settings-page/settings.css ***!
  \***********************************************/
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

/***/ "./components/data-base/data-base.ts":
/*!*******************************************!*\
  !*** ./components/data-base/data-base.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.db;
        this.openRequest();
        this.dataAllPersons = [];
    }
    DataBase.prototype.openRequest = function () {
        var _this = this;
        var openRequest = indexedDB.open('Lenko-Igor', 1);
        openRequest.onupgradeneeded = function (e) {
            var event = e.target;
            var thisDB = event.result;
            console.log('upgr');
            if (!thisDB.objectStoreNames.contains('people')) {
                thisDB.createObjectStore('people');
            }
        };
        openRequest.onsuccess = function (e) {
            var event = e.target;
            _this.db = event.result;
            _this.getAllPersons();
        };
        openRequest.onerror = function (e) { return console.log("Error:", e); };
    };
    DataBase.prototype.addPerson = function (person) {
        if (this.db) {
            var transaction = this.db.transaction(['people'], 'readwrite');
            var store = transaction.objectStore('people');
            var request = store.add(person, person.email);
            request.onerror = function (e) { console.log('error', e); };
            request.onsuccess = function (e) { console.log('it is good'); };
        }
    };
    DataBase.prototype.getAllPersons = function () {
        var _this = this;
        var arrData = [];
        if (this.db) {
            var transaction = this.db.transaction(['people'], 'readwrite');
            var objectStore = transaction.objectStore('people');
            var cursor_1 = objectStore.openCursor();
            cursor_1.onsuccess = function (e) {
                var res = cursor_1.result;
                if (res) {
                    arrData.push(res.value);
                    res.continue();
                }
                _this.dataAllPersons = arrData;
            };
        }
    };
    return DataBase;
}());
exports.default = DataBase;


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
var timer_1 = __importDefault(__webpack_require__(/*! ./../timer/timer */ "./components/timer/timer.ts"));
var GamePage = /** @class */ (function (_super) {
    __extends(GamePage, _super);
    function GamePage() {
        var _this = _super.call(this) || this;
        _this.props = [];
        _this.timer = new timer_1.default();
        return _this;
    }
    GamePage.prototype.getPage = function (props, difficulty) {
        this.props = props;
        return this.createGame(difficulty);
    };
    GamePage.prototype.createFeildGame = function (difficulty) {
        var feild = this.createElement('div', ['cards-feild'], '');
        feild.append(this.createCards(difficulty));
        return feild;
    };
    GamePage.prototype.createCards = function (difficulty) {
        var _this = this;
        var cardsContainer = this.createElement('div', ['card-container', difficulty], '');
        var props = this.props;
        var content = props.map(function (prop) {
            return _this.createCard(prop);
        }).join('');
        cardsContainer.innerHTML = content;
        return cardsContainer;
    };
    GamePage.prototype.createCard = function (img) {
        return "\n    <div style=\"perspective: 25rem\">\n      <div class=\"card-wrap\" data-value=" + img + ">\n        <div class=\"card back\"></div>\n        <div class=\"card front\" \n            style=\"background: url('../src/images/game/" + img + "') no-repeat center;\n            background-size: cover;\">\n        </div>\n      </div>\n    </div>\n    ";
    };
    GamePage.prototype.createGame = function (difficulty) {
        var main = this.createElement('main', ['main'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], '');
        wrapContent.append(this.timer.createHTMLElementTimer());
        wrapContent.append(this.createFeildGame(difficulty));
        main.append(wrapContent);
        return main;
    };
    GamePage.prototype.toRotateCard = function (element) {
        if (element === null || element === void 0 ? void 0 : element.classList.contains('rotate')) {
            element === null || element === void 0 ? void 0 : element.classList.toggle('rotate');
        }
    };
    GamePage.prototype.toRotateAllcards = function (element) {
        element === null || element === void 0 ? void 0 : element.classList.toggle('rotate');
    };
    GamePage.prototype.getResultSelectCards = function (arrSelected) {
        var _this = this;
        arrSelected.forEach(function (element) {
            _this.toRotateAllcards(element);
        });
    };
    return GamePage;
}(base_component_1.default));
exports.default = GamePage;


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
        _this.name = _this.createElement('p', ['first-name', 'hidden'], 'firstName');
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
        buttonFeild.append(this.name);
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
        _this.backgroundFon = _this.createElement('div', ['modal-fon'], '');
        _this.modalRegistrationBlock = _this.createElement('section', ['modal-registration-block'], '');
        _this.modalWinBlock = _this.createElement('section', ['modal-win-block'], '');
        _this.titleWinBlock = _this.createElement('h2', ['modal-win-title'], '');
        _this.modalWindow = _this.buildModal();
        _this.score = 0;
        return _this;
    }
    RegistrationForm.prototype.createInputForm = function () {
        return "\n      <form class=\"modal-form\">\n        <div class=\"form-block\">\n          <label for=\"firstName\" class=\"modal-form__label\">First Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"firstName\" id=\"firstName\" required placeholder=\"...\" value=\"\">     \n          <div class=\"form-block__check error\"></div>   \n        </div>\n        <div class=\"form-block\">\n          <label for=\"lastName\" class=\"modal-form__label\">Last Name</label>\n          <input type=\"text\" class=\"modal-form__input\" name=\"lastName\" id=\"lastName\" required placeholder=\"...\">   \n          <div class=\"form-block__check error\"></div>      \n        </div>\n        <div class=\"form-block\">\n          <label for=\"email\" class=\"modal-form__label\">E-mail</label>\n          <input type=\"email\" class=\"modal-form__input\" name=\"email\" id=\"email\" required placeholder=\"...\"> \n          <div class=\"form-block__check error\"></div>        \n        </div>\n      </form>\n    ";
    };
    RegistrationForm.prototype.createRegistrationBlock = function () {
        this.modalRegistrationBlock.innerHTML = "\n      <header class=\"modal-header\">\n        <h2>Registr new Player</h2>\n      </header>\n      <main class=\"modal-main\">\n        " + this.createInputForm() + "\n        <div class=\"modal-avatar\"></div>\n      </main>\n      <footer class=\"modal-footer\">\n        <button id=\"add\" class=\"add disabled\"><p>add user</p></button>\n        <button id=\"cancel\" class=\"cancel\"><p>cancel</p></button>\n      </footer>\n    ";
        return this.modalRegistrationBlock;
    };
    RegistrationForm.prototype.createWinBlock = function () {
        this.modalWinBlock.innerHTML = "\n      <p class=\"win-text\">Congratulations! You successfully found all matches.</p>\n      <button class=\"win-button\" id=\"win\">\n        <p class=\"win-button__text\">OK</p>\n      </button>\n    ";
        this.modalWinBlock.prepend(this.titleWinBlock);
        return this.modalWinBlock;
    };
    RegistrationForm.prototype.buildModal = function () {
        this.backgroundFon.append(this.createRegistrationBlock());
        this.backgroundFon.append(this.createWinBlock());
        return this.backgroundFon;
    };
    RegistrationForm.prototype.openModalRegistration = function () {
        this.backgroundFon.classList.add('modal-fon_active');
        this.modalRegistrationBlock.classList.add('active');
    };
    RegistrationForm.prototype.closeModalRegistration = function () {
        this.backgroundFon.classList.remove('modal-fon_active');
        this.modalRegistrationBlock.classList.remove('active');
    };
    RegistrationForm.prototype.openModalWin = function (score) {
        this.titleWinBlock.innerHTML = "\n    You score: \n    <span>" + score + "</span>\n    ";
        this.backgroundFon.classList.add('modal-fon_active');
        this.modalWinBlock.classList.add('active');
    };
    RegistrationForm.prototype.closeModalWin = function () {
        this.backgroundFon.classList.remove('modal-fon_active');
        this.modalWinBlock.classList.remove('active');
    };
    return RegistrationForm;
}(base_component_1.default));
exports.default = RegistrationForm;


/***/ }),

/***/ "./components/score/score.ts":
/*!***********************************!*\
  !*** ./components/score/score.ts ***!
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
__webpack_require__(/*! ./score.css */ "./components/score/score.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var ScorePage = /** @class */ (function (_super) {
    __extends(ScorePage, _super);
    function ScorePage() {
        return _super.call(this) || this;
    }
    ScorePage.prototype.getPage = function (dataAllPersons) {
        return this.createMain(dataAllPersons);
    };
    ScorePage.prototype.createMain = function (dataAllPersons) {
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], 'wrap-score');
        wrapContent.append(this.createTittle());
        wrapContent.append(this.createListScore(dataAllPersons));
        container.append(wrapContent);
        main.append(container);
        return main;
    };
    ScorePage.prototype.createTittle = function () {
        var title = this.createElement('h2', ['score-title'], '');
        title.innerHTML = 'Best players';
        return title;
    };
    ScorePage.prototype.createListScore = function (dataAllPersons) {
        var ul = this.createElement('ul', ['score-list'], '');
        var list = '';
        dataAllPersons.forEach(function (elem) {
            var content = "\n      <li class=\"item\">\n        <div class=\"item__person\">\n          <p class=\"item__person-name\">" + elem.firstName + " " + elem.lastName + "</p>\n          <p class=\"item__person-email\">" + elem.email + "</p>\n        </div>\n        <p class=\"item__score\">Score: <span>" + elem.score + "</span></p>\n      </li>\n    ";
            list += content;
        });
        ul.innerHTML = list;
        return ul;
    };
    return ScorePage;
}(base_component_1.default));
exports.default = ScorePage;


/***/ }),

/***/ "./components/settings-page/settings.ts":
/*!**********************************************!*\
  !*** ./components/settings-page/settings.ts ***!
  \**********************************************/
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
__webpack_require__(/*! ./settings.css */ "./components/settings-page/settings.css");
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var SettingsPage = /** @class */ (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage() {
        var _this = _super.call(this) || this;
        _this.difficulty = 'easy';
        _this.typeCards = 'auto';
        return _this;
    }
    SettingsPage.prototype.getPage = function () {
        return this.createMain();
    };
    SettingsPage.prototype.createMain = function () {
        var _this = this;
        var propsDifficulty = ['easy', 'middle', 'difficult'];
        var propsTypeCards = ['auto', 'animal'];
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['setting-content'], '');
        var titleDifficulty = this.createElement('h2', ['setting-title'], '');
        var formDifficulty = this.createElement('form', ['setting-feild'], '');
        var titleTypeCards = this.createElement('h2', ['setting-title'], '');
        var formTypeCards = this.createElement('form', ['setting-feild'], '');
        titleDifficulty.innerHTML = 'Difficulty';
        titleTypeCards.innerHTML = 'Game cards';
        propsDifficulty.forEach(function (prop) {
            formDifficulty.append(_this.creteDifficultyBlock(prop));
        });
        propsTypeCards.forEach(function (prop) {
            formTypeCards.append(_this.createTypeCardsBlock(prop));
        });
        wrapContent.append(titleDifficulty);
        wrapContent.append(formDifficulty);
        wrapContent.append(titleTypeCards);
        wrapContent.append(formTypeCards);
        container.append(wrapContent);
        main.append(container);
        return main;
    };
    SettingsPage.prototype.creteDifficultyBlock = function (text) {
        var _this = this;
        var wrap = this.createElement('div', ['setting-select__wrap'], '');
        var label = this.createElement('label', ['setting-select__title'], '');
        var input = this.createElement('input', ['setting-select'], text);
        label.setAttribute('for', text);
        label.innerHTML = text;
        input.setAttribute('name', 'difficulty');
        input.setAttribute('type', 'radio');
        input.id = text;
        input.addEventListener('change', function () {
            _this.difficulty = input.id;
        });
        if (text === this.difficulty) {
            input.setAttribute('checked', 'checked');
        }
        wrap.append(label);
        wrap.append(input);
        return wrap;
    };
    SettingsPage.prototype.createTypeCardsBlock = function (text) {
        var _this = this;
        var wrap = this.createElement('div', ['setting-select__wrap'], '');
        var label = this.createElement('label', ['setting-select__title'], '');
        var input = this.createElement('input', ['setting-select'], text);
        label.setAttribute('for', text);
        label.innerHTML = text;
        input.setAttribute('name', 'images');
        input.setAttribute('type', 'radio');
        input.id = text;
        input.addEventListener('change', function () {
            _this.typeCards = input.id;
        });
        if (text === this.typeCards) {
            input.setAttribute('checked', 'checked');
        }
        wrap.append(label);
        wrap.append(input);
        return wrap;
    };
    SettingsPage.prototype.getValueDifficulty = function () {
        return this.difficulty;
    };
    SettingsPage.prototype.getTypeCards = function () {
        return this.typeCards;
    };
    return SettingsPage;
}(base_component_1.default));
exports.default = SettingsPage;


/***/ }),

/***/ "./components/timer/timer.ts":
/*!***********************************!*\
  !*** ./components/timer/timer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Timer = /** @class */ (function () {
    function Timer() {
        this.valueTimer = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timerFeild = document.createElement('div');
        this.timerHTML = document.createElement('p');
    }
    Timer.prototype.createHTMLElementTimer = function () {
        this.timerFeild.className = 'timer';
        this.timerHTML.className = 'timer-text';
        this.showTimerValue(this.minutes, this.seconds);
        this.timerFeild.append(this.timerHTML);
        return this.timerFeild;
    };
    Timer.prototype.showTimerValue = function (minutes, seconds) {
        var min = (minutes < 10) ? "0" + minutes : "" + minutes;
        var sec = (seconds < 10) ? "0" + seconds : "" + seconds;
        this.timerHTML.innerHTML = min + ":" + sec;
    };
    Timer.prototype.startTimer = function () {
        var _this = this;
        this.valueTimer = 0;
        this.showTimerValue(this.minutes, this.seconds);
        this.startTimerInterval = setInterval(function () {
            _this.valueTimer++;
            _this.minutes = Math.floor(_this.valueTimer / 60);
            _this.seconds = _this.valueTimer - _this.minutes * 60;
            _this.showTimerValue(_this.minutes, _this.seconds);
        }, 1000);
    };
    Timer.prototype.stopTimer = function () {
        if (this.startTimerInterval)
            clearInterval(this.startTimerInterval);
    };
    return Timer;
}());
exports.default = Timer;


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


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_component_1 = __importDefault(__webpack_require__(/*! ./base-component */ "./base-component.ts"));
var header_1 = __importDefault(__webpack_require__(/*! ./components/header/header */ "./components/header/header.ts"));
var about_1 = __importDefault(__webpack_require__(/*! ./components/about/about */ "./components/about/about.ts"));
var score_1 = __importDefault(__webpack_require__(/*! ./components/score/score */ "./components/score/score.ts"));
var settings_1 = __importDefault(__webpack_require__(/*! ./components/settings-page/settings */ "./components/settings-page/settings.ts"));
var registration_form_1 = __importDefault(__webpack_require__(/*! ./components/registration/registration-form */ "./components/registration/registration-form.ts"));
var game_1 = __importDefault(__webpack_require__(/*! ./components/game/game */ "./components/game/game.ts"));
var data_base_1 = __importDefault(__webpack_require__(/*! ./components/data-base/data-base */ "./components/data-base/data-base.ts"));
function mvc(app) {
    // View
    var View = /** @class */ (function () {
        function View(app) {
            this.app = app;
            this.modalFeild = new base_component_1.default().createElement('div', ['modal-feild'], '');
            this.ModalWindow = new registration_form_1.default();
            this.modalWindow = this.ModalWindow.modalWindow;
            this.header = new header_1.default();
            this.AboutPage = new about_1.default().getPage();
            this.ScorePage = new score_1.default();
            this.Settings = new settings_1.default();
            this.Game = new game_1.default();
            this.init();
        }
        View.prototype.init = function () {
            this.modalFeild.append(this.modalWindow);
            this.app.before(this.modalFeild);
        };
        View.prototype.showFirstPage = function () {
            this.app.append(this.header.getHeader());
            this.app.append(this.AboutPage);
        };
        View.prototype.openSelectedPage = function (item, dataAllPersons) {
            var items = this.header.menu.querySelectorAll('.header-menu__item');
            items.forEach(function (elem) { return elem.classList.remove('item-select'); });
            item.classList.add('item-select');
            if (item.classList.contains('item-about')) {
                this.showPage(this.AboutPage);
            }
            if (item.classList.contains('item-score')) {
                if (dataAllPersons)
                    this.showPage(this.ScorePage.getPage(dataAllPersons));
            }
            if (item.classList.contains('item-setting')) {
                this.showPage(this.Settings.getPage());
            }
        };
        View.prototype.openScorePage = function (dataAllPersons) {
            if (dataAllPersons)
                this.showPage(this.ScorePage.getPage(dataAllPersons));
        };
        View.prototype.showModalWindow = function (win, score) {
            (win && score)
                ? this.ModalWindow.openModalWin(score)
                : this.ModalWindow.openModalRegistration();
        };
        View.prototype.hiddenModalWindow = function (win) {
            if (win) {
                this.ModalWindow.closeModalWin();
            }
            else {
                var modal = document.querySelector('.modal-fon');
                var inputs = modal === null || modal === void 0 ? void 0 : modal.querySelectorAll('input');
                this.ModalWindow.closeModalRegistration();
                inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (inp) {
                    var _a;
                    inp.value = '';
                    (_a = inp.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add('error');
                });
            }
        };
        View.prototype.showStartGameButton = function () {
            var regBtn = this.app.querySelector('#regBtn');
            var startBtn = this.app.querySelector('#startGame');
            regBtn === null || regBtn === void 0 ? void 0 : regBtn.classList.add('hidden');
            startBtn === null || startBtn === void 0 ? void 0 : startBtn.classList.remove('hidden');
        };
        View.prototype.showStartStopGameButton = function (id, nameBtn) {
            var startGame = this.app.querySelector('.header-button-start');
            if (startGame) {
                startGame.id = id;
                var text = startGame.firstElementChild;
                if (text)
                    text.innerHTML = nameBtn;
            }
        };
        View.prototype.showAvatarName = function (name) {
            this.header.name.innerHTML = name;
            this.header.name.classList.toggle('hidden');
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
        View.prototype.showStylesdAddButton = function (status) {
            var buttonAdd = document.querySelector('#add');
            if (!buttonAdd)
                throw 'error';
            if (status) {
                buttonAdd.classList.add('disabled');
                buttonAdd.classList.remove('active');
            }
            else {
                buttonAdd.classList.remove('disabled');
                buttonAdd.classList.add('active');
            }
        };
        View.prototype.showGamePage = function (props, difficulty) {
            var _a;
            (_a = this.app.lastElementChild) === null || _a === void 0 ? void 0 : _a.replaceWith(this.Game.getPage(props, difficulty));
        };
        View.prototype.showPage = function (content) {
            var _a;
            (_a = this.app.lastElementChild) === null || _a === void 0 ? void 0 : _a.replaceWith(content);
        };
        View.prototype.showRotate = function (card) {
            this.Game.toRotateCard(card);
        };
        View.prototype.showResultSelect = function (arrSelect) {
            this.Game.getResultSelectCards(arrSelect);
        };
        View.prototype.rotateAllCards = function () {
            var _this = this;
            var cards = this.app.querySelectorAll('.card-wrap');
            cards.forEach(function (card) {
                _this.Game.toRotateAllcards(card);
            });
        };
        View.prototype.showStartTimer = function () {
            this.Game.timer.startTimer();
        };
        View.prototype.showStopTimer = function () {
            this.Game.timer.stopTimer();
        };
        return View;
    }());
    // Model
    var Model = /** @class */ (function () {
        function Model(view) {
            this.view = view;
            this.regData = { firstName: '', lastName: '', email: '' };
            this.arrElementsPressed = [];
            this.imagesForGame = [];
            this.settingData = {};
            this.difficulty = this.view.Settings.getValueDifficulty();
            this.itemsForScore = {
                amountAllCards: 0,
                amountOpenedCards: 0,
                amountAllCompareCards: 0,
                amountFatalCompareCards: 0,
                timer: 0
            };
            this.score = 0;
            this.dataBase = new data_base_1.default();
            this.init();
            this.getDataSettings();
        }
        Model.prototype.init = function () {
            this.getLoadFirstPage();
        };
        Model.prototype.getLoadFirstPage = function () {
            this.view.showFirstPage();
        };
        Model.prototype.selectMenu = function (item) {
            this.getStopGame();
            if (item.classList.contains('item-score')) {
                this.view.openSelectedPage(item, this.dataBase.dataAllPersons);
            }
            else {
                this.view.openSelectedPage(item);
            }
        };
        Model.prototype.closeModalWindow = function (deleteData) {
            if (deleteData) {
                this.regData.firstName = '';
                this.regData.lastName = '';
                this.regData.email = '';
                this.getStatusDisabledButton(true);
            }
            ;
            this.view.hiddenModalWindow();
        };
        Model.prototype.closeModalWin = function () {
            this.view.hiddenModalWindow('win');
            this.view.openScorePage(this.dataBase.dataAllPersons);
        };
        Model.prototype.openModalWindow = function () {
            this.view.showModalWindow();
        };
        Model.prototype.checkValueInput = function (id, value) {
            var regName = /^[a-zA-Zа-яА-Я]+$/ui;
            var regEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (id === 'firstName' || id === 'lastName') {
                if (regName.test(value)) {
                    this.regData[id] = value;
                    this.view.showStatusInput(id, true);
                }
                else {
                    this.regData[id] = '';
                    this.view.showStatusInput(id, false);
                }
            }
            if (id === 'email') {
                if (regEmail.test(value)) {
                    this.regData[id] = value;
                    this.view.showStatusInput(id, true);
                }
                else {
                    this.regData[id] = '';
                    this.view.showStatusInput(id, false);
                }
            }
            this.checkValueData() ? this.getStatusDisabledButton(false) : this.getStatusDisabledButton(true);
        };
        Model.prototype.checkValueData = function () {
            var result = false;
            if (this.regData.firstName && this.regData.lastName && this.regData.email) {
                result = !result;
            }
            return result;
        };
        Model.prototype.getStatusDisabledButton = function (status) {
            this.view.showStylesdAddButton(status);
        };
        Model.prototype.checkRegistrationData = function () {
            if (this.checkValueData()) {
                this.closeModalWindow();
                this.view.showStartGameButton();
                this.view.showAvatarName(this.regData.firstName);
            }
        };
        Model.prototype.getStartGame = function () {
            var _this = this;
            this.imagesForGame = this.getPropsForGame(this.settingData, this.view.Settings.getValueDifficulty(), this.view.Settings.getTypeCards());
            this.view.showGamePage(this.imagesForGame, this.view.Settings.getValueDifficulty());
            this.view.showStartTimer();
            this.view.showStartStopGameButton('stopGame', 'stop game');
            this.itemsForScore.amountAllCards = this.imagesForGame.length,
                this.itemsForScore.amountOpenedCards = 0;
            this.itemsForScore.amountAllCompareCards = 0;
            this.itemsForScore.amountFatalCompareCards = 0;
            this.itemsForScore.timer = 0;
            setTimeout(function () {
                _this.view.rotateAllCards();
            }, 3000);
        };
        Model.prototype.getStopGame = function (win) {
            this.arrElementsPressed = [];
            this.view.showStartStopGameButton('startGame', 'start game');
            this.view.showStopTimer();
            this.itemsForScore.timer = this.view.Game.timer.valueTimer;
            if (win) {
                this.score = ((this.itemsForScore.amountAllCompareCards - this.itemsForScore.amountFatalCompareCards) * 100) - this.itemsForScore.timer * 10;
                var person = {
                    firstName: this.regData.firstName,
                    lastName: this.regData.lastName,
                    email: this.regData.email,
                    score: this.score,
                };
                this.dataBase.addPerson(person);
                this.dataBase.getAllPersons();
                this.view.showModalWindow('win', this.score);
            }
        };
        Model.prototype.getDataSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var rect, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch('../setting.json')];
                        case 1:
                            rect = _a.sent();
                            return [4 /*yield*/, rect.json()];
                        case 2:
                            data = _a.sent();
                            this.settingData = data;
                            return [2 /*return*/];
                    }
                });
            });
        };
        Model.prototype.getPropsForGame = function (data, difficulty, type) {
            var value = data.difficulty[difficulty];
            var images = data.images[type].slice(0, value);
            var arr = images.map(function (elem) { return images; });
            var result = arr.reduce(function (acc, val) { return acc.concat(val); }, []).sort(function () { return Math.random() - 0.5; });
            return result;
        };
        Model.prototype.toRotateCard = function (element) {
            this.view.showRotate(element);
            this.toFillarrElementsPressed(element);
        };
        Model.prototype.toFillarrElementsPressed = function (element) {
            if (this.arrElementsPressed.length <= 1) {
                this.arrElementsPressed.push(element);
                this.checkElementsPressed(this.arrElementsPressed);
            }
        };
        Model.prototype.checkElementsPressed = function (arr) {
            var _this = this;
            if (arr.length === 2) {
                this.itemsForScore.amountAllCompareCards++;
                if (arr[0].dataset.value !== arr[1].dataset.value) {
                    this.itemsForScore.amountFatalCompareCards++;
                    setTimeout(function () {
                        _this.view.showResultSelect(arr);
                        _this.arrElementsPressed = [];
                    }, 500);
                }
                else {
                    this.itemsForScore.amountOpenedCards += 2;
                    this.arrElementsPressed = [];
                    if (this.itemsForScore.amountOpenedCards === this.itemsForScore.amountAllCards) {
                        this.getStopGame('win');
                    }
                }
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
            var winBtn = document.querySelector('#win');
            var cancelBtn = document.querySelector('#cancel');
            var regBtn = this.app.querySelector('#regBtn');
            var inputs = modalWindow === null || modalWindow === void 0 ? void 0 : modalWindow.querySelectorAll('input');
            var menuButtons = this.app.querySelectorAll('.header-menu__item');
            // get event on modal window
            addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function () {
                _this.clickAddBtnModal();
                var startGame = _this.app.querySelector('.header-button-start');
                startGame === null || startGame === void 0 ? void 0 : startGame.addEventListener('click', function () {
                    if (startGame.id === 'startGame') {
                        _this.clickStartGame();
                        return;
                    }
                    if (startGame.id === 'stopGame') {
                        _this.clickStopGame();
                        return;
                    }
                });
            });
            cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', function () {
                _this.clickCancelBtnModal();
            });
            winBtn === null || winBtn === void 0 ? void 0 : winBtn.addEventListener('click', function () {
                _this.clickWinBtnModal();
            });
            inputs === null || inputs === void 0 ? void 0 : inputs.forEach(function (inp) {
                inp.addEventListener('change', function () {
                    _this.getParametrsInput(inp.id, inp.value);
                });
            });
            // get event on aap 
            menuButtons.forEach(function (menu) {
                menu.addEventListener('click', function () {
                    _this.clickMenuButton(menu);
                });
            });
            regBtn === null || regBtn === void 0 ? void 0 : regBtn.addEventListener('click', function () {
                _this.clickNewPlayerBtn();
            });
        };
        Controller.prototype.clickMenuButton = function (item) {
            this.model.selectMenu(item);
        };
        ;
        Controller.prototype.clickNewPlayerBtn = function () {
            this.model.openModalWindow();
        };
        Controller.prototype.clickCancelBtnModal = function () {
            this.model.closeModalWindow('deleteData');
        };
        Controller.prototype.clickAddBtnModal = function () {
            this.model.checkRegistrationData();
        };
        Controller.prototype.clickWinBtnModal = function () {
            this.model.closeModalWin();
        };
        Controller.prototype.getParametrsInput = function (id, value) {
            this.model.checkValueInput(id, value);
        };
        Controller.prototype.clickStartGame = function () {
            var _this = this;
            this.model.getStartGame();
            var card = document.querySelectorAll('.card-wrap');
            card.forEach(function (card) {
                card.addEventListener('click', function () {
                    if (card.classList.contains('rotate')) {
                        _this.model.toRotateCard(card);
                    }
                });
            });
        };
        Controller.prototype.clickStopGame = function () {
            this.model.getStopGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNzcz80NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzcz84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/Zjg1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5jc3M/ZWY3MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlLmNzcz81NzJiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy5jc3M/NDU4ZiIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz82Yzk5Iiwid2VicGFjazovLy8uL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRhLWJhc2UvZGF0YS1iYXNlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL212Yy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3Qi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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZDQUE2QyxFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWUsRUFBRTtBQUNuRSx5REFBeUQsd0JBQXdCLEVBQUUsd0JBQXdCLDRCQUE0QixFQUFFO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDMWNmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGVnLCBjbGFzc1N0eWxlLCBpZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVnKTtcclxuICAgICAgICBpZiAoY2xhc3NTdHlsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKF9hID0gZWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgY2xhc3NTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2Fib3V0LmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEFib3V0UGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBYm91dFBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kYXRlID0gW1xyXG4gICAgICAgICAgICB7IHBvaW50OiAnMScsIHRleHQ6ICdSZWdpc3RlciBuZXcgcGxheWVyIGluIGdhbWUnLCBjbGFzczogJ2ltYWdlMScgfSxcclxuICAgICAgICAgICAgeyBwb2ludDogJzInLCB0ZXh0OiAnQ29uZmlndXJlIHlvdXIgZ2FtZSBzZXR0aW5ncycsIGNsYXNzOiAnaW1hZ2UyJyB9LFxyXG4gICAgICAgICAgICB7IHBvaW50OiAnMycsIHRleHQ6ICdTdGFydCB5b3UgbmV3IGdhbWUhIFJlbWVtYmVyIGNhcmQgcG9zaXRpb25zIGFuZCBtYXRjaCBpdCBiZWZvcmUgdGltZXMgdXAuJywgY2xhc3M6ICdpbWFnZTMnIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBBYm91dFBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbigpO1xyXG4gICAgfTtcclxuICAgIEFib3V0UGFnZS5wcm90b3R5cGUuY3JlYXRlTWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWFpbicsIFsnbWFpbiddLCAnJyk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnbWFpbi1jb250YWluZXInXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlQ29udGVudCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgQWJvdXRQYWdlLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gXCI8aDIgY2xhc3M9XFxcImNvbnRlbnQtdGl0bGVcXFwiPkhvdyB0byBwbGF5PzwvaDI+XCI7XHJcbiAgICAgICAgdmFyIHJvdyA9IGFyci5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1mZWlsZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcm93X19sZWZ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb2ludFxcXCI+XFxuICAgICAgICAgICAgICA8cD5cIiArIGVsZW0ucG9pbnQgKyBcIjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cD5cIiArIGVsZW0udGV4dCArIFwiPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1yb3dfX3JpZ2h0IFwiICsgZWxlbS5jbGFzcyArIFwiXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50ICsgcm93O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBYm91dFBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0UGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIERhdGFCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0YUJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5kYjtcclxuICAgICAgICB0aGlzLm9wZW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhQWxsUGVyc29ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgRGF0YUJhc2UucHJvdG90eXBlLm9wZW5SZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0xlbmtvLUlnb3InLCAxKTtcclxuICAgICAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHRoaXNEQiA9IGV2ZW50LnJlc3VsdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZ3InKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzREIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygncGVvcGxlJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNEQi5jcmVhdGVPYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBfdGhpcy5kYiA9IGV2ZW50LnJlc3VsdDtcclxuICAgICAgICAgICAgX3RoaXMuZ2V0QWxsUGVyc29ucygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlKTsgfTtcclxuICAgIH07XHJcbiAgICBEYXRhQmFzZS5wcm90b3R5cGUuYWRkUGVyc29uID0gZnVuY3Rpb24gKHBlcnNvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmRiKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydwZW9wbGUnXSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gc3RvcmUuYWRkKHBlcnNvbiwgcGVyc29uLmVtYWlsKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7IH07XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coJ2l0IGlzIGdvb2QnKTsgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGF0YUJhc2UucHJvdG90eXBlLmdldEFsbFBlcnNvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYXJyRGF0YSA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmRiKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydwZW9wbGUnXSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIHZhciBjdXJzb3JfMSA9IG9iamVjdFN0b3JlLm9wZW5DdXJzb3IoKTtcclxuICAgICAgICAgICAgY3Vyc29yXzEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBjdXJzb3JfMS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyRGF0YS5wdXNoKHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhQWxsUGVyc29ucyA9IGFyckRhdGE7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBEYXRhQmFzZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRGF0YUJhc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9nYW1lLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIHRpbWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vdGltZXIvdGltZXJcIikpO1xyXG52YXIgR2FtZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR2FtZVBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHYW1lUGFnZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnByb3BzID0gW107XHJcbiAgICAgICAgX3RoaXMudGltZXIgPSBuZXcgdGltZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAocHJvcHMsIGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR2FtZShkaWZmaWN1bHR5KTtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlRmVpbGRHYW1lID0gZnVuY3Rpb24gKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB2YXIgZmVpbGQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY2FyZHMtZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIGZlaWxkLmFwcGVuZCh0aGlzLmNyZWF0ZUNhcmRzKGRpZmZpY3VsdHkpKTtcclxuICAgICAgICByZXR1cm4gZmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLmNyZWF0ZUNhcmRzID0gZnVuY3Rpb24gKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjYXJkc0NvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYXJkLWNvbnRhaW5lcicsIGRpZmZpY3VsdHldLCAnJyk7XHJcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgY29udGVudCA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlQ2FyZChwcm9wKTtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlQ2FyZCA9IGZ1bmN0aW9uIChpbWcpIHtcclxuICAgICAgICByZXR1cm4gXCJcXG4gICAgPGRpdiBzdHlsZT1cXFwicGVyc3BlY3RpdmU6IDI1cmVtXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBcXFwiIGRhdGEtdmFsdWU9XCIgKyBpbWcgKyBcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgYmFja1xcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGZyb250XFxcIiBcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1hZ2VzL2dhbWUvXCIgKyBpbWcgKyBcIicpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICBcIjtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uIChkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZCh0aGlzLnRpbWVyLmNyZWF0ZUhUTUxFbGVtZW50VGltZXIoKSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRoaXMuY3JlYXRlRmVpbGRHYW1lKGRpZmZpY3VsdHkpKTtcclxuICAgICAgICBtYWluLmFwcGVuZCh3cmFwQ29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLnRvUm90YXRlQ2FyZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLnRvUm90YXRlQWxsY2FyZHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuZ2V0UmVzdWx0U2VsZWN0Q2FyZHMgPSBmdW5jdGlvbiAoYXJyU2VsZWN0ZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGFyclNlbGVjdGVkLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMudG9Sb3RhdGVBbGxjYXJkcyhlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZVBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaGVhZGVyLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEhlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIZWFkZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5mZWlsZCA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBfdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICAgICAgICBfdGhpcy5sb2dvID0gX3RoaXMuY3JlYXRlTG9nbygpO1xyXG4gICAgICAgIF90aGlzLm1lbnUgPSBfdGhpcy5jcmVhdGVNZW51KCk7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ3AnLCBbJ2ZpcnN0LW5hbWUnLCAnaGlkZGVuJ10sICdmaXJzdE5hbWUnKTtcclxuICAgICAgICBfdGhpcy5idXR0b24gPSBfdGhpcy5jcmVhdGVCdXR0b24oKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRvUGxhY2VFbGVtZW50cyh0aGlzLmNvbnRhaW5lciwgW3RoaXMubG9nbywgdGhpcy5tZW51LCB0aGlzLmJ1dHRvbl0pO1xyXG4gICAgICAgIHRoaXMudG9QbGFjZUVsZW1lbnRzKHRoaXMuZmVpbGQsIFt0aGlzLmNvbnRhaW5lcl0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZlaWxkO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ2hlYWRlci1jb250YWluZXInXSwgJycpO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTG9nbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbG9nbyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydoZWFkZXItbG9nbyddLCAnJyk7XHJcbiAgICAgICAgbG9nby5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tdXBcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+TUFUQ0g8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby1kb3duXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJsb2dvLXRleHRcXFwiPk1BVENIPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gbG9nbztcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21lbnUnLCBbJ21lbnUnXSwgJycpO1xyXG4gICAgICAgIG1lbnUuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8dWwgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtc1xcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tYWJvdXQgaXRlbS1zZWxlY3RcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItbWVudV9faW1nXFxcIj48cD4/PC9wPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkFib3V0IEdhbWU8L3A+ICBcXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tc2NvcmVcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItbWVudV9faW1nXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1tZW51X190ZXh0XFxcIj5CZXN0IFNjb3JlPC9wPiBcXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tc2V0dGluZ1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkdhbWUgU2V0dGluZ3M8L3A+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBidXR0b25GZWlsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydoZWFkZXItYnV0dG9uLWZlaWxkJ10sICcnKTtcclxuICAgICAgICB2YXIgYnV0dG9uU3RhcnRHYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2hlYWRlci1idXR0b24nLCAnaGVhZGVyLWJ1dHRvbi1zdGFydCcsICdoaWRkZW4nXSwgJ3N0YXJ0R2FtZScpO1xyXG4gICAgICAgIHZhciBidXR0b25SZWdpc3RyYXRpb24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnaGVhZGVyLWJ1dHRvbiddLCAncmVnQnRuJyk7XHJcbiAgICAgICAgYnV0dG9uU3RhcnRHYW1lLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1idXR0b25fX3RleHRcXFwiPnN0YXJ0IGdhbWU8L3A+XFxuICAgIFwiO1xyXG4gICAgICAgIGJ1dHRvblJlZ2lzdHJhdGlvbi5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItYnV0dG9uX190ZXh0XFxcIj5yZWdpc3RlciBuZXcgcGxheWVyPC9wPlxcbiAgICBcIjtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQodGhpcy5uYW1lKTtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQoYnV0dG9uU3RhcnRHYW1lKTtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQoYnV0dG9uUmVnaXN0cmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uRmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS50b1BsYWNlRWxlbWVudHMgPSBmdW5jdGlvbiAod3JhcCwgYXJyKSB7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIHdyYXAuYXBwZW5kKGVsZW1lbnQpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhZGVyO1xyXG59KGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9yZWdpc3RyYXRpb24tZm9ybS5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBSZWdpc3RyYXRpb25Gb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJlZ2lzdHJhdGlvbkZvcm0sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZWdpc3RyYXRpb25Gb3JtKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZEZvbiA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbW9kYWwtZm9uJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnbW9kYWwtcmVnaXN0cmF0aW9uLWJsb2NrJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5tb2RhbFdpbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnbW9kYWwtd2luLWJsb2NrJ10sICcnKTtcclxuICAgICAgICBfdGhpcy50aXRsZVdpbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnaDInLCBbJ21vZGFsLXdpbi10aXRsZSddLCAnJyk7XHJcbiAgICAgICAgX3RoaXMubW9kYWxXaW5kb3cgPSBfdGhpcy5idWlsZE1vZGFsKCk7XHJcbiAgICAgICAgX3RoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNyZWF0ZUlucHV0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJcXG4gICAgICA8Zm9ybSBjbGFzcz1cXFwibW9kYWwtZm9ybVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2lucHV0XFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIGlkPVxcXCJmaXJzdE5hbWVcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCIuLi5cXFwiIHZhbHVlPVxcXCJcXFwiPiAgICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkxhc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9faW5wdXRcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBpZD1cXFwibGFzdE5hbWVcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCIuLi5cXFwiPiAgIFxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrX19jaGVjayBlcnJvclxcXCI+PC9kaXY+ICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tcXFwiPlxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2xhYmVsXFxcIj5FLW1haWw8L2xhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCI+IFxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrX19jaGVjayBlcnJvclxcXCI+PC9kaXY+ICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZm9ybT5cXG4gICAgXCI7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY3JlYXRlUmVnaXN0cmF0aW9uQmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGhlYWRlciBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMj5SZWdpc3RyIG5ldyBQbGF5ZXI8L2gyPlxcbiAgICAgIDwvaGVhZGVyPlxcbiAgICAgIDxtYWluIGNsYXNzPVxcXCJtb2RhbC1tYWluXFxcIj5cXG4gICAgICAgIFwiICsgdGhpcy5jcmVhdGVJbnB1dEZvcm0oKSArIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1hdmF0YXJcXFwiPjwvZGl2PlxcbiAgICAgIDwvbWFpbj5cXG4gICAgICA8Zm9vdGVyIGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkXFxcIiBjbGFzcz1cXFwiYWRkIGRpc2FibGVkXFxcIj48cD5hZGQgdXNlcjwvcD48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcImNhbmNlbFxcXCI+PHA+Y2FuY2VsPC9wPjwvYnV0dG9uPlxcbiAgICAgIDwvZm9vdGVyPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNyZWF0ZVdpbkJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxXaW5CbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ3aW4tdGV4dFxcXCI+Q29uZ3JhdHVsYXRpb25zISBZb3Ugc3VjY2Vzc2Z1bGx5IGZvdW5kIGFsbCBtYXRjaGVzLjwvcD5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ3aW4tYnV0dG9uXFxcIiBpZD1cXFwid2luXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJ3aW4tYnV0dG9uX190ZXh0XFxcIj5PSzwvcD5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbkJsb2NrLnByZXBlbmQodGhpcy50aXRsZVdpbkJsb2NrKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFdpbkJsb2NrO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmJ1aWxkTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmFwcGVuZCh0aGlzLmNyZWF0ZVJlZ2lzdHJhdGlvbkJsb2NrKCkpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5hcHBlbmQodGhpcy5jcmVhdGVXaW5CbG9jaygpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kRm9uO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLm9wZW5Nb2RhbFJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRGb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9uX2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubW9kYWxSZWdpc3RyYXRpb25CbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jbG9zZU1vZGFsUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLm9wZW5Nb2RhbFdpbiA9IGZ1bmN0aW9uIChzY29yZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGVXaW5CbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICBZb3Ugc2NvcmU6IFxcbiAgICA8c3Bhbj5cIiArIHNjb3JlICsgXCI8L3NwYW4+XFxuICAgIFwiO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNsb3NlTW9kYWxXaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWZvbl9hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1vZGFsV2luQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZ2lzdHJhdGlvbkZvcm07XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZ2lzdHJhdGlvbkZvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zY29yZS5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBTY29yZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2NvcmVQYWdlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2NvcmVQYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5nZXRQYWdlID0gZnVuY3Rpb24gKGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbihkYXRhQWxsUGVyc29ucyk7XHJcbiAgICB9O1xyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5jcmVhdGVNYWluID0gZnVuY3Rpb24gKGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICd3cmFwLXNjb3JlJyk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRoaXMuY3JlYXRlVGl0dGxlKCkpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZCh0aGlzLmNyZWF0ZUxpc3RTY29yZShkYXRhQWxsUGVyc29ucykpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5jcmVhdGVUaXR0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnc2NvcmUtdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdCZXN0IHBsYXllcnMnO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH07XHJcbiAgICBTY29yZVBhZ2UucHJvdG90eXBlLmNyZWF0ZUxpc3RTY29yZSA9IGZ1bmN0aW9uIChkYXRhQWxsUGVyc29ucykge1xyXG4gICAgICAgIHZhciB1bCA9IHRoaXMuY3JlYXRlRWxlbWVudCgndWwnLCBbJ3Njb3JlLWxpc3QnXSwgJycpO1xyXG4gICAgICAgIHZhciBsaXN0ID0gJyc7XHJcbiAgICAgICAgZGF0YUFsbFBlcnNvbnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IFwiXFxuICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1fX3BlcnNvblxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJpdGVtX19wZXJzb24tbmFtZVxcXCI+XCIgKyBlbGVtLmZpcnN0TmFtZSArIFwiIFwiICsgZWxlbS5sYXN0TmFtZSArIFwiPC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaXRlbV9fcGVyc29uLWVtYWlsXFxcIj5cIiArIGVsZW0uZW1haWwgKyBcIjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIml0ZW1fX3Njb3JlXFxcIj5TY29yZTogPHNwYW4+XCIgKyBlbGVtLnNjb3JlICsgXCI8L3NwYW4+PC9wPlxcbiAgICAgIDwvbGk+XFxuICAgIFwiO1xyXG4gICAgICAgICAgICBsaXN0ICs9IGNvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdWwuaW5uZXJIVE1MID0gbGlzdDtcclxuICAgICAgICByZXR1cm4gdWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjb3JlUGFnZTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2NvcmVQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc2V0dGluZ3MuY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgU2V0dGluZ3NQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNldHRpbmdzUGFnZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNldHRpbmdzUGFnZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XHJcbiAgICAgICAgX3RoaXMudHlwZUNhcmRzID0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuZ2V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNYWluKCk7XHJcbiAgICB9O1xyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5jcmVhdGVNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHByb3BzRGlmZmljdWx0eSA9IFsnZWFzeScsICdtaWRkbGUnLCAnZGlmZmljdWx0J107XHJcbiAgICAgICAgdmFyIHByb3BzVHlwZUNhcmRzID0gWydhdXRvJywgJ2FuaW1hbCddO1xyXG4gICAgICAgIHZhciBtYWluID0gdGhpcy5jcmVhdGVFbGVtZW50KCdtYWluJywgWydtYWluJ10sICcnKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbnRhaW5lcicsICdtYWluLWNvbnRhaW5lciddLCAnJyk7XHJcbiAgICAgICAgdmFyIHdyYXBDb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3NldHRpbmctY29udGVudCddLCAnJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlRGlmZmljdWx0eSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaDInLCBbJ3NldHRpbmctdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHZhciBmb3JtRGlmZmljdWx0eSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZm9ybScsIFsnc2V0dGluZy1mZWlsZCddLCAnJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlVHlwZUNhcmRzID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnc2V0dGluZy10aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGZvcm1UeXBlQ2FyZHMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBbJ3NldHRpbmctZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIHRpdGxlRGlmZmljdWx0eS5pbm5lckhUTUwgPSAnRGlmZmljdWx0eSc7XHJcbiAgICAgICAgdGl0bGVUeXBlQ2FyZHMuaW5uZXJIVE1MID0gJ0dhbWUgY2FyZHMnO1xyXG4gICAgICAgIHByb3BzRGlmZmljdWx0eS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGZvcm1EaWZmaWN1bHR5LmFwcGVuZChfdGhpcy5jcmV0ZURpZmZpY3VsdHlCbG9jayhwcm9wKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvcHNUeXBlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICBmb3JtVHlwZUNhcmRzLmFwcGVuZChfdGhpcy5jcmVhdGVUeXBlQ2FyZHNCbG9jayhwcm9wKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRpdGxlRGlmZmljdWx0eSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKGZvcm1EaWZmaWN1bHR5KTtcclxuICAgICAgICB3cmFwQ29udGVudC5hcHBlbmQodGl0bGVUeXBlQ2FyZHMpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZChmb3JtVHlwZUNhcmRzKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuY3JldGVEaWZmaWN1bHR5QmxvY2sgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2V0dGluZy1zZWxlY3RfX3dyYXAnXSwgJycpO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbJ3NldHRpbmctc2VsZWN0X190aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnc2V0dGluZy1zZWxlY3QnXSwgdGV4dCk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0ZXh0KTtcclxuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkaWZmaWN1bHR5Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGlmZmljdWx0eSA9IGlucHV0LmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0ID09PSB0aGlzLmRpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcC5hcHBlbmQobGFiZWwpO1xyXG4gICAgICAgIHdyYXAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gd3JhcDtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmNyZWF0ZVR5cGVDYXJkc0Jsb2NrID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3NldHRpbmctc2VsZWN0X193cmFwJ10sICcnKTtcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgWydzZXR0aW5nLXNlbGVjdF9fdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ3NldHRpbmctc2VsZWN0J10sIHRleHQpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGV4dCk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW1hZ2VzJyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudHlwZUNhcmRzID0gaW5wdXQuaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRleHQgPT09IHRoaXMudHlwZUNhcmRzKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXAuYXBwZW5kKGxhYmVsKTtcclxuICAgICAgICB3cmFwLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIHdyYXA7XHJcbiAgICB9O1xyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5nZXRWYWx1ZURpZmZpY3VsdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZmljdWx0eTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmdldFR5cGVDYXJkcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlQ2FyZHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNldHRpbmdzUGFnZTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3NQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGltZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnZhbHVlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubWludXRlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyRmVpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnRpbWVySFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIH1cclxuICAgIFRpbWVyLnByb3RvdHlwZS5jcmVhdGVIVE1MRWxlbWVudFRpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJGZWlsZC5jbGFzc05hbWUgPSAndGltZXInO1xyXG4gICAgICAgIHRoaXMudGltZXJIVE1MLmNsYXNzTmFtZSA9ICd0aW1lci10ZXh0JztcclxuICAgICAgICB0aGlzLnNob3dUaW1lclZhbHVlKHRoaXMubWludXRlcywgdGhpcy5zZWNvbmRzKTtcclxuICAgICAgICB0aGlzLnRpbWVyRmVpbGQuYXBwZW5kKHRoaXMudGltZXJIVE1MKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lckZlaWxkO1xyXG4gICAgfTtcclxuICAgIFRpbWVyLnByb3RvdHlwZS5zaG93VGltZXJWYWx1ZSA9IGZ1bmN0aW9uIChtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgdmFyIG1pbiA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogXCJcIiArIG1pbnV0ZXM7XHJcbiAgICAgICAgdmFyIHNlYyA9IChzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBzZWNvbmRzIDogXCJcIiArIHNlY29uZHM7XHJcbiAgICAgICAgdGhpcy50aW1lckhUTUwuaW5uZXJIVE1MID0gbWluICsgXCI6XCIgKyBzZWM7XHJcbiAgICB9O1xyXG4gICAgVGltZXIucHJvdG90eXBlLnN0YXJ0VGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpbWVyVmFsdWUodGhpcy5taW51dGVzLCB0aGlzLnNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy52YWx1ZVRpbWVyKys7XHJcbiAgICAgICAgICAgIF90aGlzLm1pbnV0ZXMgPSBNYXRoLmZsb29yKF90aGlzLnZhbHVlVGltZXIgLyA2MCk7XHJcbiAgICAgICAgICAgIF90aGlzLnNlY29uZHMgPSBfdGhpcy52YWx1ZVRpbWVyIC0gX3RoaXMubWludXRlcyAqIDYwO1xyXG4gICAgICAgICAgICBfdGhpcy5zaG93VGltZXJWYWx1ZShfdGhpcy5taW51dGVzLCBfdGhpcy5zZWNvbmRzKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgICBUaW1lci5wcm90b3R5cGUuc3RvcFRpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZXJJbnRlcnZhbClcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXJ0VGltZXJJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpbWVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUaW1lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIik7XHJcbnZhciBtdmNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdmNcIikpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IG5ldyBiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQoKTtcclxuICAgIHZhciBhcHAgPSBlbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCAnYXBwJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoYXBwKTtcclxuICAgIG12Y18xLmRlZmF1bHQoYXBwKTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIGhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XHJcbnZhciBhYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXRcIikpO1xyXG52YXIgc2NvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlXCIpKTtcclxudmFyIHNldHRpbmdzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9zZXR0aW5ncy1wYWdlL3NldHRpbmdzXCIpKTtcclxudmFyIHJlZ2lzdHJhdGlvbl9mb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLWZvcm1cIikpO1xyXG52YXIgZ2FtZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZ2FtZS9nYW1lXCIpKTtcclxudmFyIGRhdGFfYmFzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZGF0YS1iYXNlL2RhdGEtYmFzZVwiKSk7XHJcbmZ1bmN0aW9uIG12YyhhcHApIHtcclxuICAgIC8vIFZpZXdcclxuICAgIHZhciBWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFZpZXcoYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRmVpbGQgPSBuZXcgYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KCkuY3JlYXRlRWxlbWVudCgnZGl2JywgWydtb2RhbC1mZWlsZCddLCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuTW9kYWxXaW5kb3cgPSBuZXcgcmVnaXN0cmF0aW9uX2Zvcm1fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxXaW5kb3cgPSB0aGlzLk1vZGFsV2luZG93Lm1vZGFsV2luZG93O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBoZWFkZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuQWJvdXRQYWdlID0gbmV3IGFib3V0XzEuZGVmYXVsdCgpLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5TY29yZVBhZ2UgPSBuZXcgc2NvcmVfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0dGluZ3MgPSBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZSA9IG5ldyBnYW1lXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZlaWxkLmFwcGVuZCh0aGlzLm1vZGFsV2luZG93KTtcclxuICAgICAgICAgICAgdGhpcy5hcHAuYmVmb3JlKHRoaXMubW9kYWxGZWlsZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93Rmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5oZWFkZXIuZ2V0SGVhZGVyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUub3BlblNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uIChpdGVtLCBkYXRhQWxsUGVyc29ucykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmhlYWRlci5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItbWVudV9faXRlbScpO1xyXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0tc2VsZWN0Jyk7IH0pO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1hYm91dCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKHRoaXMuQWJvdXRQYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0tc2NvcmUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFBbGxQZXJzb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UodGhpcy5TY29yZVBhZ2UuZ2V0UGFnZShkYXRhQWxsUGVyc29ucykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1zZXR0aW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UodGhpcy5TZXR0aW5ncy5nZXRQYWdlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5vcGVuU2NvcmVQYWdlID0gZnVuY3Rpb24gKGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhQWxsUGVyc29ucylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UodGhpcy5TY29yZVBhZ2UuZ2V0UGFnZShkYXRhQWxsUGVyc29ucykpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd01vZGFsV2luZG93ID0gZnVuY3Rpb24gKHdpbiwgc2NvcmUpIHtcclxuICAgICAgICAgICAgKHdpbiAmJiBzY29yZSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5Nb2RhbFdpbmRvdy5vcGVuTW9kYWxXaW4oc2NvcmUpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuTW9kYWxXaW5kb3cub3Blbk1vZGFsUmVnaXN0cmF0aW9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5oaWRkZW5Nb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICh3aW4pIHtcclxuICAgICAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RhbFdpbmRvdy5jbG9zZU1vZGFsV2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9uJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRzID0gbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGFsV2luZG93LmNsb3NlTW9kYWxSZWdpc3RyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlucHV0cyA9PT0gbnVsbCB8fCBpbnB1dHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wLm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXJ0R2FtZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlZ0J0biA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJyNyZWdCdG4nKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0QnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICByZWdCdG4gPT09IG51bGwgfHwgcmVnQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuID09PSBudWxsIHx8IHN0YXJ0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGFydFN0b3BHYW1lQnV0dG9uID0gZnVuY3Rpb24gKGlkLCBuYW1lQnRuKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydEdhbWUgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1dHRvbi1zdGFydCcpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gc3RhcnRHYW1lLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBuYW1lQnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93QXZhdGFyTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLm5hbWUuaW5uZXJIVE1MID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIubmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGF0dXNJbnB1dCA9IGZ1bmN0aW9uIChpZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMubW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNcIiArIGlkKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0Lm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0eWxlc2RBZGRCdXR0b24gPSBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkJyk7XHJcbiAgICAgICAgICAgIGlmICghYnV0dG9uQWRkKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yJztcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd0dhbWVQYWdlID0gZnVuY3Rpb24gKHByb3BzLCBkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5hcHAubGFzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2VXaXRoKHRoaXMuR2FtZS5nZXRQYWdlKHByb3BzLCBkaWZmaWN1bHR5KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93UGFnZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5hcHAubGFzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1JvdGF0ZSA9IGZ1bmN0aW9uIChjYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZS50b1JvdGF0ZUNhcmQoY2FyZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93UmVzdWx0U2VsZWN0ID0gZnVuY3Rpb24gKGFyclNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUuZ2V0UmVzdWx0U2VsZWN0Q2FyZHMoYXJyU2VsZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnJvdGF0ZUFsbENhcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgY2FyZHMgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC13cmFwJyk7XHJcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkdhbWUudG9Sb3RhdGVBbGxjYXJkcyhjYXJkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93U3RhcnRUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lLnRpbWVyLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZS50aW1lci5zdG9wVGltZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBWaWV3O1xyXG4gICAgfSgpKTtcclxuICAgIC8vIE1vZGVsXHJcbiAgICB2YXIgTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gTW9kZWwodmlldykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlZ0RhdGEgPSB7IGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJywgZW1haWw6ICcnIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzRm9yR2FtZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdEYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50QWxsQ2FyZHM6IDAsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRPcGVuZWRDYXJkczogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudEFsbENvbXBhcmVDYXJkczogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudEZhdGFsQ29tcGFyZUNhcmRzOiAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUJhc2UgPSBuZXcgZGF0YV9iYXNlXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhU2V0dGluZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9hZEZpcnN0UGFnZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmdldExvYWRGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93Rmlyc3RQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuc2VsZWN0TWVudSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RvcEdhbWUoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLXNjb3JlJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5vcGVuU2VsZWN0ZWRQYWdlKGl0ZW0sIHRoaXMuZGF0YUJhc2UuZGF0YUFsbFBlcnNvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9wZW5TZWxlY3RlZFBhZ2UoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jbG9zZU1vZGFsV2luZG93ID0gZnVuY3Rpb24gKGRlbGV0ZURhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YS5maXJzdE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YS5sYXN0TmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhLmVtYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXR1c0Rpc2FibGVkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGRlbk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2xvc2VNb2RhbFdpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGRlbk1vZGFsV2luZG93KCd3aW4nKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm9wZW5TY29yZVBhZ2UodGhpcy5kYXRhQmFzZS5kYXRhQWxsUGVyc29ucyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUub3Blbk1vZGFsV2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd01vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2hlY2tWYWx1ZUlucHV0ID0gZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVnTmFtZSA9IC9eW2EtekEtWtCwLdGP0JAt0K9dKyQvdWk7XHJcbiAgICAgICAgICAgIHZhciByZWdFbWFpbCA9IC9eW15AXFxzXStAW15AXFxzXStcXC5bXkBcXHNdKyQvO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09ICdmaXJzdE5hbWUnIHx8IGlkID09PSAnbGFzdE5hbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVnTmFtZS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlkID09PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVnRW1haWwudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ0RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGF0dXNJbnB1dChpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ0RhdGFbaWRdID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGF0dXNJbnB1dChpZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWYWx1ZURhdGEoKSA/IHRoaXMuZ2V0U3RhdHVzRGlzYWJsZWRCdXR0b24oZmFsc2UpIDogdGhpcy5nZXRTdGF0dXNEaXNhYmxlZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jaGVja1ZhbHVlRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdEYXRhLmZpcnN0TmFtZSAmJiB0aGlzLnJlZ0RhdGEubGFzdE5hbWUgJiYgdGhpcy5yZWdEYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAhcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0U3RhdHVzRGlzYWJsZWRCdXR0b24gPSBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3R5bGVzZEFkZEJ1dHRvbihzdGF0dXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNoZWNrUmVnaXN0cmF0aW9uRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tWYWx1ZURhdGEoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXJ0R2FtZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dBdmF0YXJOYW1lKHRoaXMucmVnRGF0YS5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0U3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc0ZvckdhbWUgPSB0aGlzLmdldFByb3BzRm9yR2FtZSh0aGlzLnNldHRpbmdEYXRhLCB0aGlzLnZpZXcuU2V0dGluZ3MuZ2V0VmFsdWVEaWZmaWN1bHR5KCksIHRoaXMudmlldy5TZXR0aW5ncy5nZXRUeXBlQ2FyZHMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93R2FtZVBhZ2UodGhpcy5pbWFnZXNGb3JHYW1lLCB0aGlzLnZpZXcuU2V0dGluZ3MuZ2V0VmFsdWVEaWZmaWN1bHR5KCkpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXJ0VGltZXIoKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGFydFN0b3BHYW1lQnV0dG9uKCdzdG9wR2FtZScsICdzdG9wIGdhbWUnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENhcmRzID0gdGhpcy5pbWFnZXNGb3JHYW1lLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRPcGVuZWRDYXJkcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRBbGxDb21wYXJlQ2FyZHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50RmF0YWxDb21wYXJlQ2FyZHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUudGltZXIgPSAwO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnZpZXcucm90YXRlQWxsQ2FyZHMoKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0U3RvcEdhbWUgPSBmdW5jdGlvbiAod2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRTdG9wR2FtZUJ1dHRvbignc3RhcnRHYW1lJywgJ3N0YXJ0IGdhbWUnKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdG9wVGltZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLnRpbWVyID0gdGhpcy52aWV3LkdhbWUudGltZXIudmFsdWVUaW1lcjtcclxuICAgICAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9ICgodGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENvbXBhcmVDYXJkcyAtIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRGYXRhbENvbXBhcmVDYXJkcykgKiAxMDApIC0gdGhpcy5pdGVtc0ZvclNjb3JlLnRpbWVyICogMTA7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVyc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogdGhpcy5yZWdEYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5yZWdEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZ0RhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQmFzZS5hZGRQZXJzb24ocGVyc29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUJhc2UuZ2V0QWxsUGVyc29ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNob3dNb2RhbFdpbmRvdygnd2luJywgdGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXREYXRhU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWN0LCBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCgnLi4vc2V0dGluZy5qc29uJyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVjdC5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmdldFByb3BzRm9yR2FtZSA9IGZ1bmN0aW9uIChkYXRhLCBkaWZmaWN1bHR5LCB0eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEuZGlmZmljdWx0eVtkaWZmaWN1bHR5XTtcclxuICAgICAgICAgICAgdmFyIGltYWdlcyA9IGRhdGEuaW1hZ2VzW3R5cGVdLnNsaWNlKDAsIHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IGltYWdlcy5tYXAoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGltYWdlczsgfSk7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhcnIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbCkgeyByZXR1cm4gYWNjLmNvbmNhdCh2YWwpOyB9LCBbXSkuc29ydChmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41OyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS50b1JvdGF0ZUNhcmQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1JvdGF0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy50b0ZpbGxhcnJFbGVtZW50c1ByZXNzZWQoZWxlbWVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUudG9GaWxsYXJyRWxlbWVudHNQcmVzc2VkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyckVsZW1lbnRzUHJlc3NlZC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzUHJlc3NlZCh0aGlzLmFyckVsZW1lbnRzUHJlc3NlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jaGVja0VsZW1lbnRzUHJlc3NlZCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRBbGxDb21wYXJlQ2FyZHMrKztcclxuICAgICAgICAgICAgICAgIGlmIChhcnJbMF0uZGF0YXNldC52YWx1ZSAhPT0gYXJyWzFdLmRhdGFzZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50RmF0YWxDb21wYXJlQ2FyZHMrKztcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudmlldy5zaG93UmVzdWx0U2VsZWN0KGFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFyckVsZW1lbnRzUHJlc3NlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50T3BlbmVkQ2FyZHMgKz0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckVsZW1lbnRzUHJlc3NlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50T3BlbmVkQ2FyZHMgPT09IHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRBbGxDYXJkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0b3BHYW1lKCd3aW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBNb2RlbDtcclxuICAgIH0oKSk7XHJcbiAgICAvLyBDb250cm9sbGVyXHJcbiAgICB2YXIgQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBDb250cm9sbGVyKGFwcCwgbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mZWlsZCcpO1xyXG4gICAgICAgICAgICB2YXIgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xyXG4gICAgICAgICAgICB2YXIgd2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbicpO1xyXG4gICAgICAgICAgICB2YXIgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xyXG4gICAgICAgICAgICB2YXIgcmVnQnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3JlZ0J0bicpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0gbW9kYWxXaW5kb3cgPT09IG51bGwgfHwgbW9kYWxXaW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHZhciBtZW51QnV0dG9ucyA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItbWVudV9faXRlbScpO1xyXG4gICAgICAgICAgICAvLyBnZXQgZXZlbnQgb24gbW9kYWwgd2luZG93XHJcbiAgICAgICAgICAgIGFkZEJ0biA9PT0gbnVsbCB8fCBhZGRCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrQWRkQnRuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydEdhbWUgPSBfdGhpcy5hcHAucXVlcnlTZWxlY3RvcignLmhlYWRlci1idXR0b24tc3RhcnQnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZSA9PT0gbnVsbCB8fCBzdGFydEdhbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLmlkID09PSAnc3RhcnRHYW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGlja1N0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuaWQgPT09ICdzdG9wR2FtZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tTdG9wR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYW5jZWxCdG4gPT09IG51bGwgfHwgY2FuY2VsQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGlja0NhbmNlbEJ0bk1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5CdG4gPT09IG51bGwgfHwgd2luQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGlja1dpbkJ0bk1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbnB1dHMgPT09IG51bGwgfHwgaW5wdXRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wKSB7XHJcbiAgICAgICAgICAgICAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldFBhcmFtZXRyc0lucHV0KGlucC5pZCwgaW5wLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gZ2V0IGV2ZW50IG9uIGFhcCBcclxuICAgICAgICAgICAgbWVudUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAobWVudSkge1xyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGlja01lbnVCdXR0b24obWVudSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlZ0J0biA9PT0gbnVsbCB8fCByZWdCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrTmV3UGxheWVyQnRuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tNZW51QnV0dG9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWxlY3RNZW51KGl0ZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrTmV3UGxheWVyQnRuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLm9wZW5Nb2RhbFdpbmRvdygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tDYW5jZWxCdG5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jbG9zZU1vZGFsV2luZG93KCdkZWxldGVEYXRhJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja0FkZEJ0bk1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNoZWNrUmVnaXN0cmF0aW9uRGF0YSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tXaW5CdG5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jbG9zZU1vZGFsV2luKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5nZXRQYXJhbWV0cnNJbnB1dCA9IGZ1bmN0aW9uIChpZCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jaGVja1ZhbHVlSW5wdXQoaWQsIHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrU3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmdldFN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICB2YXIgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXdyYXAnKTtcclxuICAgICAgICAgICAgY2FyZC5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubW9kZWwudG9Sb3RhdGVDYXJkKGNhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrU3RvcEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0U3RvcEdhbWUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBDb250cm9sbGVyO1xyXG4gICAgfSgpKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IFZpZXcoYXBwKTtcclxuICAgIHZhciBtb2RlbCA9IG5ldyBNb2RlbCh2aWV3KTtcclxuICAgIHZhciBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoYXBwLCBtb2RlbCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gbXZjO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=