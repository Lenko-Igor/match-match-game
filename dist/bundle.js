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
        var sorted = dataAllPersons.slice(0).sort(function (a, b) {
            var result = 0;
            if (a.score && b.score) {
                result = a.score - b.score;
            }
            return result;
        }).reverse();
        var list = sorted.splice(0, 10).map(function (person) {
            return "\n        <li class=\"item\">\n          <div class=\"item__person\">\n            <p class=\"item__person-name\">" + person.firstName + " " + person.lastName + "</p>\n            <p class=\"item__person-email\">" + person.email + "</p>\n          </div>\n          <p class=\"item__score\">Score: <span>" + person.score + "</span></p>\n        </li>\n      ";
        }).join('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNzcz80NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzcz84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/Zjg1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5jc3M/ZWY3MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlLmNzcz81NzJiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy5jc3M/NDU4ZiIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz82Yzk5Iiwid2VicGFjazovLy8uL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRhLWJhc2UvZGF0YS1iYXNlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL212Yy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3Qi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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZDQUE2QyxFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWUsRUFBRTtBQUNuRSx5REFBeUQsd0JBQXdCLEVBQUUsd0JBQXdCLDRCQUE0QixFQUFFO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDMWNmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGVnLCBjbGFzc1N0eWxlLCBpZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVnKTtcclxuICAgICAgICBpZiAoY2xhc3NTdHlsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKF9hID0gZWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgY2xhc3NTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2Fib3V0LmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEFib3V0UGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBYm91dFBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kYXRlID0gW1xyXG4gICAgICAgICAgICB7IHBvaW50OiAnMScsIHRleHQ6ICdSZWdpc3RlciBuZXcgcGxheWVyIGluIGdhbWUnLCBjbGFzczogJ2ltYWdlMScgfSxcclxuICAgICAgICAgICAgeyBwb2ludDogJzInLCB0ZXh0OiAnQ29uZmlndXJlIHlvdXIgZ2FtZSBzZXR0aW5ncycsIGNsYXNzOiAnaW1hZ2UyJyB9LFxyXG4gICAgICAgICAgICB7IHBvaW50OiAnMycsIHRleHQ6ICdTdGFydCB5b3UgbmV3IGdhbWUhIFJlbWVtYmVyIGNhcmQgcG9zaXRpb25zIGFuZCBtYXRjaCBpdCBiZWZvcmUgdGltZXMgdXAuJywgY2xhc3M6ICdpbWFnZTMnIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBBYm91dFBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbigpO1xyXG4gICAgfTtcclxuICAgIEFib3V0UGFnZS5wcm90b3R5cGUuY3JlYXRlTWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWFpbicsIFsnbWFpbiddLCAnJyk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnbWFpbi1jb250YWluZXInXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlQ29udGVudCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgQWJvdXRQYWdlLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gXCI8aDIgY2xhc3M9XFxcImNvbnRlbnQtdGl0bGVcXFwiPkhvdyB0byBwbGF5PzwvaDI+XCI7XHJcbiAgICAgICAgdmFyIHJvdyA9IGFyci5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1mZWlsZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcm93X19sZWZ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb2ludFxcXCI+XFxuICAgICAgICAgICAgICA8cD5cIiArIGVsZW0ucG9pbnQgKyBcIjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cD5cIiArIGVsZW0udGV4dCArIFwiPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1yb3dfX3JpZ2h0IFwiICsgZWxlbS5jbGFzcyArIFwiXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50ICsgcm93O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBYm91dFBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0UGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIERhdGFCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0YUJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5kYjtcclxuICAgICAgICB0aGlzLm9wZW5SZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhQWxsUGVyc29ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgRGF0YUJhc2UucHJvdG90eXBlLm9wZW5SZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ0xlbmtvLUlnb3InLCAxKTtcclxuICAgICAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHRoaXNEQiA9IGV2ZW50LnJlc3VsdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZ3InKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzREIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygncGVvcGxlJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNEQi5jcmVhdGVPYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBfdGhpcy5kYiA9IGV2ZW50LnJlc3VsdDtcclxuICAgICAgICAgICAgX3RoaXMuZ2V0QWxsUGVyc29ucygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlKTsgfTtcclxuICAgIH07XHJcbiAgICBEYXRhQmFzZS5wcm90b3R5cGUuYWRkUGVyc29uID0gZnVuY3Rpb24gKHBlcnNvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmRiKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydwZW9wbGUnXSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gc3RvcmUuYWRkKHBlcnNvbiwgcGVyc29uLmVtYWlsKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7IH07XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHsgY29uc29sZS5sb2coJ2l0IGlzIGdvb2QnKTsgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGF0YUJhc2UucHJvdG90eXBlLmdldEFsbFBlcnNvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYXJyRGF0YSA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmRiKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydwZW9wbGUnXSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICB2YXIgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncGVvcGxlJyk7XHJcbiAgICAgICAgICAgIHZhciBjdXJzb3JfMSA9IG9iamVjdFN0b3JlLm9wZW5DdXJzb3IoKTtcclxuICAgICAgICAgICAgY3Vyc29yXzEub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBjdXJzb3JfMS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyRGF0YS5wdXNoKHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhQWxsUGVyc29ucyA9IGFyckRhdGE7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBEYXRhQmFzZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRGF0YUJhc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9nYW1lLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIHRpbWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vdGltZXIvdGltZXJcIikpO1xyXG52YXIgR2FtZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR2FtZVBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHYW1lUGFnZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnByb3BzID0gW107XHJcbiAgICAgICAgX3RoaXMudGltZXIgPSBuZXcgdGltZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAocHJvcHMsIGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR2FtZShkaWZmaWN1bHR5KTtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlRmVpbGRHYW1lID0gZnVuY3Rpb24gKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB2YXIgZmVpbGQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY2FyZHMtZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIGZlaWxkLmFwcGVuZCh0aGlzLmNyZWF0ZUNhcmRzKGRpZmZpY3VsdHkpKTtcclxuICAgICAgICByZXR1cm4gZmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLmNyZWF0ZUNhcmRzID0gZnVuY3Rpb24gKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjYXJkc0NvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYXJkLWNvbnRhaW5lcicsIGRpZmZpY3VsdHldLCAnJyk7XHJcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YXIgY29udGVudCA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlQ2FyZChwcm9wKTtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHJldHVybiBjYXJkc0NvbnRhaW5lcjtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlQ2FyZCA9IGZ1bmN0aW9uIChpbWcpIHtcclxuICAgICAgICByZXR1cm4gXCJcXG4gICAgPGRpdiBzdHlsZT1cXFwicGVyc3BlY3RpdmU6IDI1cmVtXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBcXFwiIGRhdGEtdmFsdWU9XCIgKyBpbWcgKyBcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgYmFja1xcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGZyb250XFxcIiBcXG4gICAgICAgICAgICBzdHlsZT1cXFwiYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1hZ2VzL2dhbWUvXCIgKyBpbWcgKyBcIicpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICBcIjtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uIChkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZCh0aGlzLnRpbWVyLmNyZWF0ZUhUTUxFbGVtZW50VGltZXIoKSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRoaXMuY3JlYXRlRmVpbGRHYW1lKGRpZmZpY3VsdHkpKTtcclxuICAgICAgICBtYWluLmFwcGVuZCh3cmFwQ29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLnRvUm90YXRlQ2FyZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZVBhZ2UucHJvdG90eXBlLnRvUm90YXRlQWxsY2FyZHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuZ2V0UmVzdWx0U2VsZWN0Q2FyZHMgPSBmdW5jdGlvbiAoYXJyU2VsZWN0ZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGFyclNlbGVjdGVkLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMudG9Sb3RhdGVBbGxjYXJkcyhlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZVBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaGVhZGVyLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEhlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIZWFkZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5mZWlsZCA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBfdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICAgICAgICBfdGhpcy5sb2dvID0gX3RoaXMuY3JlYXRlTG9nbygpO1xyXG4gICAgICAgIF90aGlzLm1lbnUgPSBfdGhpcy5jcmVhdGVNZW51KCk7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ3AnLCBbJ2ZpcnN0LW5hbWUnLCAnaGlkZGVuJ10sICdmaXJzdE5hbWUnKTtcclxuICAgICAgICBfdGhpcy5idXR0b24gPSBfdGhpcy5jcmVhdGVCdXR0b24oKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRvUGxhY2VFbGVtZW50cyh0aGlzLmNvbnRhaW5lciwgW3RoaXMubG9nbywgdGhpcy5tZW51LCB0aGlzLmJ1dHRvbl0pO1xyXG4gICAgICAgIHRoaXMudG9QbGFjZUVsZW1lbnRzKHRoaXMuZmVpbGQsIFt0aGlzLmNvbnRhaW5lcl0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZlaWxkO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ2hlYWRlci1jb250YWluZXInXSwgJycpO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTG9nbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbG9nbyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydoZWFkZXItbG9nbyddLCAnJyk7XHJcbiAgICAgICAgbG9nby5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tdXBcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+TUFUQ0g8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby1kb3duXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJsb2dvLXRleHRcXFwiPk1BVENIPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gbG9nbztcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLmNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21lbnUnLCBbJ21lbnUnXSwgJycpO1xyXG4gICAgICAgIG1lbnUuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8dWwgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtc1xcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tYWJvdXQgaXRlbS1zZWxlY3RcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItbWVudV9faW1nXFxcIj48cD4/PC9wPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkFib3V0IEdhbWU8L3A+ICBcXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tc2NvcmVcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItbWVudV9faW1nXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1tZW51X190ZXh0XFxcIj5CZXN0IFNjb3JlPC9wPiBcXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlci1tZW51X19pdGVtIGl0ZW0tc2V0dGluZ1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkdhbWUgU2V0dGluZ3M8L3A+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBidXR0b25GZWlsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydoZWFkZXItYnV0dG9uLWZlaWxkJ10sICcnKTtcclxuICAgICAgICB2YXIgYnV0dG9uU3RhcnRHYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2hlYWRlci1idXR0b24nLCAnaGVhZGVyLWJ1dHRvbi1zdGFydCcsICdoaWRkZW4nXSwgJ3N0YXJ0R2FtZScpO1xyXG4gICAgICAgIHZhciBidXR0b25SZWdpc3RyYXRpb24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnaGVhZGVyLWJ1dHRvbiddLCAncmVnQnRuJyk7XHJcbiAgICAgICAgYnV0dG9uU3RhcnRHYW1lLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1idXR0b25fX3RleHRcXFwiPnN0YXJ0IGdhbWU8L3A+XFxuICAgIFwiO1xyXG4gICAgICAgIGJ1dHRvblJlZ2lzdHJhdGlvbi5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItYnV0dG9uX190ZXh0XFxcIj5yZWdpc3RlciBuZXcgcGxheWVyPC9wPlxcbiAgICBcIjtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQodGhpcy5uYW1lKTtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQoYnV0dG9uU3RhcnRHYW1lKTtcclxuICAgICAgICBidXR0b25GZWlsZC5hcHBlbmQoYnV0dG9uUmVnaXN0cmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uRmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS50b1BsYWNlRWxlbWVudHMgPSBmdW5jdGlvbiAod3JhcCwgYXJyKSB7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIHdyYXAuYXBwZW5kKGVsZW1lbnQpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhZGVyO1xyXG59KGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9yZWdpc3RyYXRpb24tZm9ybS5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBSZWdpc3RyYXRpb25Gb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJlZ2lzdHJhdGlvbkZvcm0sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZWdpc3RyYXRpb25Gb3JtKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZEZvbiA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnbW9kYWwtZm9uJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnbW9kYWwtcmVnaXN0cmF0aW9uLWJsb2NrJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5tb2RhbFdpbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFsnbW9kYWwtd2luLWJsb2NrJ10sICcnKTtcclxuICAgICAgICBfdGhpcy50aXRsZVdpbkJsb2NrID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnaDInLCBbJ21vZGFsLXdpbi10aXRsZSddLCAnJyk7XHJcbiAgICAgICAgX3RoaXMubW9kYWxXaW5kb3cgPSBfdGhpcy5idWlsZE1vZGFsKCk7XHJcbiAgICAgICAgX3RoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNyZWF0ZUlucHV0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJcXG4gICAgICA8Zm9ybSBjbGFzcz1cXFwibW9kYWwtZm9ybVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2lucHV0XFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIGlkPVxcXCJmaXJzdE5hbWVcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCIuLi5cXFwiIHZhbHVlPVxcXCJcXFwiPiAgICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkxhc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9faW5wdXRcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBpZD1cXFwibGFzdE5hbWVcXFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVxcXCIuLi5cXFwiPiAgIFxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrX19jaGVjayBlcnJvclxcXCI+PC9kaXY+ICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tcXFwiPlxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2xhYmVsXFxcIj5FLW1haWw8L2xhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCI+IFxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrX19jaGVjayBlcnJvclxcXCI+PC9kaXY+ICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZm9ybT5cXG4gICAgXCI7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY3JlYXRlUmVnaXN0cmF0aW9uQmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGhlYWRlciBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMj5SZWdpc3RyIG5ldyBQbGF5ZXI8L2gyPlxcbiAgICAgIDwvaGVhZGVyPlxcbiAgICAgIDxtYWluIGNsYXNzPVxcXCJtb2RhbC1tYWluXFxcIj5cXG4gICAgICAgIFwiICsgdGhpcy5jcmVhdGVJbnB1dEZvcm0oKSArIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1hdmF0YXJcXFwiPjwvZGl2PlxcbiAgICAgIDwvbWFpbj5cXG4gICAgICA8Zm9vdGVyIGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkXFxcIiBjbGFzcz1cXFwiYWRkIGRpc2FibGVkXFxcIj48cD5hZGQgdXNlcjwvcD48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcImNhbmNlbFxcXCIgY2xhc3M9XFxcImNhbmNlbFxcXCI+PHA+Y2FuY2VsPC9wPjwvYnV0dG9uPlxcbiAgICAgIDwvZm9vdGVyPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNyZWF0ZVdpbkJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxXaW5CbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ3aW4tdGV4dFxcXCI+Q29uZ3JhdHVsYXRpb25zISBZb3Ugc3VjY2Vzc2Z1bGx5IGZvdW5kIGFsbCBtYXRjaGVzLjwvcD5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ3aW4tYnV0dG9uXFxcIiBpZD1cXFwid2luXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJ3aW4tYnV0dG9uX190ZXh0XFxcIj5PSzwvcD5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbkJsb2NrLnByZXBlbmQodGhpcy50aXRsZVdpbkJsb2NrKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFdpbkJsb2NrO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmJ1aWxkTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmFwcGVuZCh0aGlzLmNyZWF0ZVJlZ2lzdHJhdGlvbkJsb2NrKCkpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5hcHBlbmQodGhpcy5jcmVhdGVXaW5CbG9jaygpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kRm9uO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLm9wZW5Nb2RhbFJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRGb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9uX2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubW9kYWxSZWdpc3RyYXRpb25CbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jbG9zZU1vZGFsUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLm9wZW5Nb2RhbFdpbiA9IGZ1bmN0aW9uIChzY29yZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGVXaW5CbG9jay5pbm5lckhUTUwgPSBcIlxcbiAgICBZb3Ugc2NvcmU6IFxcbiAgICA8c3Bhbj5cIiArIHNjb3JlICsgXCI8L3NwYW4+XFxuICAgIFwiO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNsb3NlTW9kYWxXaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWZvbl9hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1vZGFsV2luQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZ2lzdHJhdGlvbkZvcm07XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZ2lzdHJhdGlvbkZvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zY29yZS5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBTY29yZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2NvcmVQYWdlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2NvcmVQYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5nZXRQYWdlID0gZnVuY3Rpb24gKGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbihkYXRhQWxsUGVyc29ucyk7XHJcbiAgICB9O1xyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5jcmVhdGVNYWluID0gZnVuY3Rpb24gKGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICd3cmFwLXNjb3JlJyk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRoaXMuY3JlYXRlVGl0dGxlKCkpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZCh0aGlzLmNyZWF0ZUxpc3RTY29yZShkYXRhQWxsUGVyc29ucykpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5jcmVhdGVUaXR0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnc2NvcmUtdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdCZXN0IHBsYXllcnMnO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH07XHJcbiAgICBTY29yZVBhZ2UucHJvdG90eXBlLmNyZWF0ZUxpc3RTY29yZSA9IGZ1bmN0aW9uIChkYXRhQWxsUGVyc29ucykge1xyXG4gICAgICAgIHZhciB1bCA9IHRoaXMuY3JlYXRlRWxlbWVudCgndWwnLCBbJ3Njb3JlLWxpc3QnXSwgJycpO1xyXG4gICAgICAgIHZhciBzb3J0ZWQgPSBkYXRhQWxsUGVyc29ucy5zbGljZSgwKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoYS5zY29yZSAmJiBiLnNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhLnNjb3JlIC0gYi5zY29yZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pLnJldmVyc2UoKTtcclxuICAgICAgICB2YXIgbGlzdCA9IHNvcnRlZC5zcGxpY2UoMCwgMTApLm1hcChmdW5jdGlvbiAocGVyc29uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbV9fcGVyc29uXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiaXRlbV9fcGVyc29uLW5hbWVcXFwiPlwiICsgcGVyc29uLmZpcnN0TmFtZSArIFwiIFwiICsgcGVyc29uLmxhc3ROYW1lICsgXCI8L3A+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcIml0ZW1fX3BlcnNvbi1lbWFpbFxcXCI+XCIgKyBwZXJzb24uZW1haWwgKyBcIjwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJpdGVtX19zY29yZVxcXCI+U2NvcmU6IDxzcGFuPlwiICsgcGVyc29uLnNjb3JlICsgXCI8L3NwYW4+PC9wPlxcbiAgICAgICAgPC9saT5cXG4gICAgICBcIjtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICB1bC5pbm5lckhUTUwgPSBsaXN0O1xyXG4gICAgICAgIHJldHVybiB1bDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2NvcmVQYWdlO1xyXG59KGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTY29yZVBhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zZXR0aW5ncy5jc3NcIik7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBTZXR0aW5nc1BhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2V0dGluZ3NQYWdlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2V0dGluZ3NQYWdlKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZGlmZmljdWx0eSA9ICdlYXN5JztcclxuICAgICAgICBfdGhpcy50eXBlQ2FyZHMgPSAnYXV0byc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5nZXRQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1haW4oKTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmNyZWF0ZU1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcHJvcHNEaWZmaWN1bHR5ID0gWydlYXN5JywgJ21pZGRsZScsICdkaWZmaWN1bHQnXTtcclxuICAgICAgICB2YXIgcHJvcHNUeXBlQ2FyZHMgPSBbJ2F1dG8nLCAnYW5pbWFsJ107XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2V0dGluZy1jb250ZW50J10sICcnKTtcclxuICAgICAgICB2YXIgdGl0bGVEaWZmaWN1bHR5ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnc2V0dGluZy10aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGZvcm1EaWZmaWN1bHR5ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdmb3JtJywgWydzZXR0aW5nLWZlaWxkJ10sICcnKTtcclxuICAgICAgICB2YXIgdGl0bGVUeXBlQ2FyZHMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gyJywgWydzZXR0aW5nLXRpdGxlJ10sICcnKTtcclxuICAgICAgICB2YXIgZm9ybVR5cGVDYXJkcyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZm9ybScsIFsnc2V0dGluZy1mZWlsZCddLCAnJyk7XHJcbiAgICAgICAgdGl0bGVEaWZmaWN1bHR5LmlubmVySFRNTCA9ICdEaWZmaWN1bHR5JztcclxuICAgICAgICB0aXRsZVR5cGVDYXJkcy5pbm5lckhUTUwgPSAnR2FtZSBjYXJkcyc7XHJcbiAgICAgICAgcHJvcHNEaWZmaWN1bHR5LmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgICAgZm9ybURpZmZpY3VsdHkuYXBwZW5kKF90aGlzLmNyZXRlRGlmZmljdWx0eUJsb2NrKHByb3ApKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9wc1R5cGVDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlQ2FyZHMuYXBwZW5kKF90aGlzLmNyZWF0ZVR5cGVDYXJkc0Jsb2NrKHByb3ApKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cmFwQ29udGVudC5hcHBlbmQodGl0bGVEaWZmaWN1bHR5KTtcclxuICAgICAgICB3cmFwQ29udGVudC5hcHBlbmQoZm9ybURpZmZpY3VsdHkpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZCh0aXRsZVR5cGVDYXJkcyk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKGZvcm1UeXBlQ2FyZHMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5jcmV0ZURpZmZpY3VsdHlCbG9jayA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgd3JhcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydzZXR0aW5nLXNlbGVjdF9fd3JhcCddLCAnJyk7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIFsnc2V0dGluZy1zZWxlY3RfX3RpdGxlJ10sICcnKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWydzZXR0aW5nLXNlbGVjdCddLCB0ZXh0KTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRleHQpO1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RpZmZpY3VsdHknKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuICAgICAgICBpbnB1dC5pZCA9IHRleHQ7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kaWZmaWN1bHR5ID0gaW5wdXQuaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRleHQgPT09IHRoaXMuZGlmZmljdWx0eSkge1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cmFwLmFwcGVuZChsYWJlbCk7XHJcbiAgICAgICAgd3JhcC5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiB3cmFwO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuY3JlYXRlVHlwZUNhcmRzQmxvY2sgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2V0dGluZy1zZWxlY3RfX3dyYXAnXSwgJycpO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbJ3NldHRpbmctc2VsZWN0X190aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnc2V0dGluZy1zZWxlY3QnXSwgdGV4dCk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0ZXh0KTtcclxuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbWFnZXMnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuICAgICAgICBpbnB1dC5pZCA9IHRleHQ7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy50eXBlQ2FyZHMgPSBpbnB1dC5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGV4dCA9PT0gdGhpcy50eXBlQ2FyZHMpIHtcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcC5hcHBlbmQobGFiZWwpO1xyXG4gICAgICAgIHdyYXAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gd3JhcDtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmdldFZhbHVlRGlmZmljdWx0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaWZmaWN1bHR5O1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuZ2V0VHlwZUNhcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVDYXJkcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2V0dGluZ3NQYWdlO1xyXG59KGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5nc1BhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUaW1lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5taW51dGVzID0gMDtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJGZWlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudGltZXJIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgfVxyXG4gICAgVGltZXIucHJvdG90eXBlLmNyZWF0ZUhUTUxFbGVtZW50VGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckZlaWxkLmNsYXNzTmFtZSA9ICd0aW1lcic7XHJcbiAgICAgICAgdGhpcy50aW1lckhUTUwuY2xhc3NOYW1lID0gJ3RpbWVyLXRleHQnO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpbWVyVmFsdWUodGhpcy5taW51dGVzLCB0aGlzLnNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMudGltZXJGZWlsZC5hcHBlbmQodGhpcy50aW1lckhUTUwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyRmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgVGltZXIucHJvdG90eXBlLnNob3dUaW1lclZhbHVlID0gZnVuY3Rpb24gKG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgICAgICB2YXIgbWluID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBcIlwiICsgbWludXRlcztcclxuICAgICAgICB2YXIgc2VjID0gKHNlY29uZHMgPCAxMCkgPyBcIjBcIiArIHNlY29uZHMgOiBcIlwiICsgc2Vjb25kcztcclxuICAgICAgICB0aGlzLnRpbWVySFRNTC5pbm5lckhUTUwgPSBtaW4gKyBcIjpcIiArIHNlYztcclxuICAgIH07XHJcbiAgICBUaW1lci5wcm90b3R5cGUuc3RhcnRUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWVUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZXJWYWx1ZSh0aGlzLm1pbnV0ZXMsIHRoaXMuc2Vjb25kcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnZhbHVlVGltZXIrKztcclxuICAgICAgICAgICAgX3RoaXMubWludXRlcyA9IE1hdGguZmxvb3IoX3RoaXMudmFsdWVUaW1lciAvIDYwKTtcclxuICAgICAgICAgICAgX3RoaXMuc2Vjb25kcyA9IF90aGlzLnZhbHVlVGltZXIgLSBfdGhpcy5taW51dGVzICogNjA7XHJcbiAgICAgICAgICAgIF90aGlzLnNob3dUaW1lclZhbHVlKF90aGlzLm1pbnV0ZXMsIF90aGlzLnNlY29uZHMpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfTtcclxuICAgIFRpbWVyLnByb3RvdHlwZS5zdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lckludGVydmFsKVxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhcnRUaW1lckludGVydmFsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGltZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRpbWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiKTtcclxudmFyIG12Y18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL212Y1wiKSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbGVtZW50ID0gbmV3IGJhc2VfY29tcG9uZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgdmFyIGFwcCA9IGVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JywgW10sICdhcHAnKTtcclxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChhcHApO1xyXG4gICAgbXZjXzEuZGVmYXVsdChhcHApO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgaGVhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCIpKTtcclxudmFyIGFib3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9hYm91dC9hYm91dFwiKSk7XHJcbnZhciBzY29yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvc2NvcmUvc2NvcmVcIikpO1xyXG52YXIgc2V0dGluZ3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3NcIikpO1xyXG52YXIgcmVnaXN0cmF0aW9uX2Zvcm1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybVwiKSk7XHJcbnZhciBnYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9nYW1lL2dhbWVcIikpO1xyXG52YXIgZGF0YV9iYXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9kYXRhLWJhc2UvZGF0YS1iYXNlXCIpKTtcclxuZnVuY3Rpb24gbXZjKGFwcCkge1xyXG4gICAgLy8gVmlld1xyXG4gICAgdmFyIFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVmlldyhhcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGZWlsZCA9IG5ldyBiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ21vZGFsLWZlaWxkJ10sICcnKTtcclxuICAgICAgICAgICAgdGhpcy5Nb2RhbFdpbmRvdyA9IG5ldyByZWdpc3RyYXRpb25fZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFdpbmRvdyA9IHRoaXMuTW9kYWxXaW5kb3cubW9kYWxXaW5kb3c7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IGhlYWRlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5BYm91dFBhZ2UgPSBuZXcgYWJvdXRfMS5kZWZhdWx0KCkuZ2V0UGFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNjb3JlUGFnZSA9IG5ldyBzY29yZV8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5TZXR0aW5ncyA9IG5ldyBzZXR0aW5nc18xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5HYW1lID0gbmV3IGdhbWVfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRmVpbGQuYXBwZW5kKHRoaXMubW9kYWxXaW5kb3cpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5iZWZvcmUodGhpcy5tb2RhbEZlaWxkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmFwcGVuZCh0aGlzLmhlYWRlci5nZXRIZWFkZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmFwcGVuZCh0aGlzLkFib3V0UGFnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5vcGVuU2VsZWN0ZWRQYWdlID0gZnVuY3Rpb24gKGl0ZW0sIGRhdGFBbGxQZXJzb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaGVhZGVyLm1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1tZW51X19pdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1zZWxlY3QnKTsgfSk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLWFib3V0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1zY29yZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUFsbFBlcnNvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSh0aGlzLlNjb3JlUGFnZS5nZXRQYWdlKGRhdGFBbGxQZXJzb25zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLXNldHRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSh0aGlzLlNldHRpbmdzLmdldFBhZ2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLm9wZW5TY29yZVBhZ2UgPSBmdW5jdGlvbiAoZGF0YUFsbFBlcnNvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFBbGxQZXJzb25zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZSh0aGlzLlNjb3JlUGFnZS5nZXRQYWdlKGRhdGFBbGxQZXJzb25zKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93TW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAod2luLCBzY29yZSkge1xyXG4gICAgICAgICAgICAod2luICYmIHNjb3JlKVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLk1vZGFsV2luZG93Lm9wZW5Nb2RhbFdpbihzY29yZSlcclxuICAgICAgICAgICAgICAgIDogdGhpcy5Nb2RhbFdpbmRvdy5vcGVuTW9kYWxSZWdpc3RyYXRpb24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLmhpZGRlbk1vZGFsV2luZG93ID0gZnVuY3Rpb24gKHdpbikge1xyXG4gICAgICAgICAgICBpZiAod2luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGFsV2luZG93LmNsb3NlTW9kYWxXaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb24nKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dHMgPSBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTW9kYWxXaW5kb3cuY2xvc2VNb2RhbFJlZ2lzdHJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzID09PSBudWxsIHx8IGlucHV0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICBpbnAudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBpbnAubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93U3RhcnRHYW1lQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnQnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3JlZ0J0bicpO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRCdG4gPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgICAgIHJlZ0J0biA9PT0gbnVsbCB8fCByZWdCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZ0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgc3RhcnRCdG4gPT09IG51bGwgfHwgc3RhcnRCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXJ0U3RvcEdhbWVCdXR0b24gPSBmdW5jdGlvbiAoaWQsIG5hbWVCdG4pIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0R2FtZSA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBzdGFydEdhbWUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dClcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCA9IG5hbWVCdG47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dBdmF0YXJOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIubmFtZS5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5uYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXR1c0lucHV0ID0gZnVuY3Rpb24gKGlkLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5tb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiI1wiICsgaWQpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIChfYiA9IGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93U3R5bGVzZEFkZEJ1dHRvbiA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuICAgICAgICAgICAgaWYgKCFidXR0b25BZGQpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnZXJyb3InO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93R2FtZVBhZ2UgPSBmdW5jdGlvbiAocHJvcHMsIGRpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLmFwcC5sYXN0RWxlbWVudENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVwbGFjZVdpdGgodGhpcy5HYW1lLmdldFBhZ2UocHJvcHMsIGRpZmZpY3VsdHkpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dQYWdlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLmFwcC5sYXN0RWxlbWVudENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVwbGFjZVdpdGgoY29udGVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93Um90YXRlID0gZnVuY3Rpb24gKGNhcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lLnRvUm90YXRlQ2FyZChjYXJkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dSZXN1bHRTZWxlY3QgPSBmdW5jdGlvbiAoYXJyU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZS5nZXRSZXN1bHRTZWxlY3RDYXJkcyhhcnJTZWxlY3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUucm90YXRlQWxsQ2FyZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBjYXJkcyA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXdyYXAnKTtcclxuICAgICAgICAgICAgY2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuR2FtZS50b1JvdGF0ZUFsbGNhcmRzKGNhcmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGFydFRpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUudGltZXIuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0b3BUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lLnRpbWVyLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIFZpZXc7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gTW9kZWxcclxuICAgIHZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBNb2RlbCh2aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMucmVnRGF0YSA9IHsgZmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnLCBlbWFpbDogJycgfTtcclxuICAgICAgICAgICAgdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNGb3JHYW1lID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0RhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gdGhpcy52aWV3LlNldHRpbmdzLmdldFZhbHVlRGlmZmljdWx0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnRBbGxDYXJkczogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudE9wZW5lZENhcmRzOiAwLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50QWxsQ29tcGFyZUNhcmRzOiAwLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50RmF0YWxDb21wYXJlQ2FyZHM6IDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lcjogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhQmFzZSA9IG5ldyBkYXRhX2Jhc2VfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGFTZXR0aW5ncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRMb2FkRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0TG9hZEZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dGaXJzdFBhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5zZWxlY3RNZW51ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9wR2FtZSgpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0tc2NvcmUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9wZW5TZWxlY3RlZFBhZ2UoaXRlbSwgdGhpcy5kYXRhQmFzZS5kYXRhQWxsUGVyc29ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcub3BlblNlbGVjdGVkUGFnZShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNsb3NlTW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAoZGVsZXRlRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhLmZpcnN0TmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhLmxhc3ROYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ0RhdGEuZW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdHVzRGlzYWJsZWRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlkZGVuTW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jbG9zZU1vZGFsV2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlkZGVuTW9kYWxXaW5kb3coJ3dpbicpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcub3BlblNjb3JlUGFnZSh0aGlzLmRhdGFCYXNlLmRhdGFBbGxQZXJzb25zKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5vcGVuTW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93TW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jaGVja1ZhbHVlSW5wdXQgPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdOYW1lID0gL15bYS16QS1a0LAt0Y/QkC3Qr10rJC91aTtcclxuICAgICAgICAgICAgdmFyIHJlZ0VtYWlsID0gL15bXkBcXHNdK0BbXkBcXHNdK1xcLlteQFxcc10rJC87XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2ZpcnN0TmFtZScgfHwgaWQgPT09ICdsYXN0TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdOYW1lLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhdHVzSW5wdXQoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhW2lkXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhdHVzSW5wdXQoaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaWQgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdFbWFpbC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbHVlRGF0YSgpID8gdGhpcy5nZXRTdGF0dXNEaXNhYmxlZEJ1dHRvbihmYWxzZSkgOiB0aGlzLmdldFN0YXR1c0Rpc2FibGVkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNoZWNrVmFsdWVEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ0RhdGEuZmlyc3ROYW1lICYmIHRoaXMucmVnRGF0YS5sYXN0TmFtZSAmJiB0aGlzLnJlZ0RhdGEuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICFyZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdGF0dXNEaXNhYmxlZEJ1dHRvbiA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdHlsZXNkQWRkQnV0dG9uKHN0YXR1cyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2hlY2tSZWdpc3RyYXRpb25EYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlRGF0YSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWxXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRHYW1lQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd0F2YXRhck5hbWUodGhpcy5yZWdEYXRhLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzRm9yR2FtZSA9IHRoaXMuZ2V0UHJvcHNGb3JHYW1lKHRoaXMuc2V0dGluZ0RhdGEsIHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKSwgdGhpcy52aWV3LlNldHRpbmdzLmdldFR5cGVDYXJkcygpKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dHYW1lUGFnZSh0aGlzLmltYWdlc0ZvckdhbWUsIHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXJ0U3RvcEdhbWVCdXR0b24oJ3N0b3BHYW1lJywgJ3N0b3AgZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ2FyZHMgPSB0aGlzLmltYWdlc0ZvckdhbWUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudE9wZW5lZENhcmRzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENvbXBhcmVDYXJkcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRGYXRhbENvbXBhcmVDYXJkcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudmlldy5yb3RhdGVBbGxDYXJkcygpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdG9wR2FtZSA9IGZ1bmN0aW9uICh3aW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGFydFN0b3BHYW1lQnV0dG9uKCdzdGFydEdhbWUnLCAnc3RhcnQgZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUudGltZXIgPSB0aGlzLnZpZXcuR2FtZS50aW1lci52YWx1ZVRpbWVyO1xyXG4gICAgICAgICAgICBpZiAod2luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gKCh0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ29tcGFyZUNhcmRzIC0gdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEZhdGFsQ29tcGFyZUNhcmRzKSAqIDEwMCkgLSB0aGlzLml0ZW1zRm9yU2NvcmUudGltZXIgKiAxMDtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLnJlZ0RhdGEuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLnJlZ0RhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucmVnRGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZTogdGhpcy5zY29yZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFCYXNlLmFkZFBlcnNvbihwZXJzb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQmFzZS5nZXRBbGxQZXJzb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd01vZGFsV2luZG93KCd3aW4nLCB0aGlzLnNjb3JlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmdldERhdGFTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3QsIGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKCcuLi9zZXR0aW5nLmpzb24nKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWN0Lmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0UHJvcHNGb3JHYW1lID0gZnVuY3Rpb24gKGRhdGEsIGRpZmZpY3VsdHksIHR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YS5kaWZmaWN1bHR5W2RpZmZpY3VsdHldO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2VzID0gZGF0YS5pbWFnZXNbdHlwZV0uc2xpY2UoMCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gaW1hZ2VzLm1hcChmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gaW1hZ2VzOyB9KTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGFyci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdmFsKSB7IHJldHVybiBhY2MuY29uY2F0KHZhbCk7IH0sIFtdKS5zb3J0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLnRvUm90YXRlQ2FyZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93Um90YXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRvRmlsbGFyckVsZW1lbnRzUHJlc3NlZChlbGVtZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS50b0ZpbGxhcnJFbGVtZW50c1ByZXNzZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJFbGVtZW50c1ByZXNzZWQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRWxlbWVudHNQcmVzc2VkKHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNoZWNrRWxlbWVudHNQcmVzc2VkID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENvbXBhcmVDYXJkcysrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXS5kYXRhc2V0LnZhbHVlICE9PSBhcnJbMV0uZGF0YXNldC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRGYXRhbENvbXBhcmVDYXJkcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52aWV3LnNob3dSZXN1bHRTZWxlY3QoYXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXJyRWxlbWVudHNQcmVzc2VkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRPcGVuZWRDYXJkcyArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRPcGVuZWRDYXJkcyA9PT0gdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENhcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RvcEdhbWUoJ3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE1vZGVsO1xyXG4gICAgfSgpKTtcclxuICAgIC8vIENvbnRyb2xsZXJcclxuICAgIHZhciBDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoYXBwLCBtb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZlaWxkJyk7XHJcbiAgICAgICAgICAgIHZhciBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkJyk7XHJcbiAgICAgICAgICAgIHZhciB3aW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luJyk7XHJcbiAgICAgICAgICAgIHZhciBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XHJcbiAgICAgICAgICAgIHZhciByZWdCdG4gPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcjcmVnQnRuJyk7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBtb2RhbFdpbmRvdyA9PT0gbnVsbCB8fCBtb2RhbFdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdmFyIG1lbnVCdXR0b25zID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1tZW51X19pdGVtJyk7XHJcbiAgICAgICAgICAgIC8vIGdldCBldmVudCBvbiBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICAgYWRkQnRuID09PSBudWxsIHx8IGFkZEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tBZGRCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0R2FtZSA9IF90aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1dHRvbi1zdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lID09PSBudWxsIHx8IHN0YXJ0R2FtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuaWQgPT09ICdzdGFydEdhbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrU3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5pZCA9PT0gJ3N0b3BHYW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGlja1N0b3BHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ0biA9PT0gbnVsbCB8fCBjYW5jZWxCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrQ2FuY2VsQnRuTW9kYWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbkJ0biA9PT0gbnVsbCB8fCB3aW5CdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrV2luQnRuTW9kYWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlucHV0cyA9PT0gbnVsbCB8fCBpbnB1dHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnApIHtcclxuICAgICAgICAgICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0UGFyYW1ldHJzSW5wdXQoaW5wLmlkLCBpbnAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBnZXQgZXZlbnQgb24gYWFwIFxyXG4gICAgICAgICAgICBtZW51QnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrTWVudUJ1dHRvbihtZW51KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVnQnRuID09PSBudWxsIHx8IHJlZ0J0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tOZXdQbGF5ZXJCdG4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja01lbnVCdXR0b24gPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdE1lbnUoaXRlbSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tOZXdQbGF5ZXJCdG4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwub3Blbk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja0NhbmNlbEJ0bk1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsb3NlTW9kYWxXaW5kb3coJ2RlbGV0ZURhdGEnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrQWRkQnRuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2hlY2tSZWdpc3RyYXRpb25EYXRhKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja1dpbkJ0bk1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNsb3NlTW9kYWxXaW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmdldFBhcmFtZXRyc0lucHV0ID0gZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNoZWNrVmFsdWVJbnB1dChpZCwgdmFsdWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tTdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0U3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgIHZhciBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtd3JhcCcpO1xyXG4gICAgICAgICAgICBjYXJkLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcclxuICAgICAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbC50b1JvdGF0ZUNhcmQoY2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tTdG9wR2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nZXRTdG9wR2FtZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIENvbnRyb2xsZXI7XHJcbiAgICB9KCkpO1xyXG4gICAgdmFyIHZpZXcgPSBuZXcgVmlldyhhcHApO1xyXG4gICAgdmFyIG1vZGVsID0gbmV3IE1vZGVsKHZpZXcpO1xyXG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihhcHAsIG1vZGVsKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBtdmM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==