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
        this.titleWinBlock.innerHTML = "You score: <span>" + score + "</span>";
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
var base_component_1 = __importDefault(__webpack_require__(/*! ../../base-component */ "./base-component.ts"));
var ScorePage = /** @class */ (function (_super) {
    __extends(ScorePage, _super);
    function ScorePage() {
        return _super.call(this) || this;
    }
    ScorePage.prototype.getPage = function () {
        return this.createMain();
    };
    ScorePage.prototype.createMain = function () {
        var main = this.createElement('main', ['main'], '');
        var container = this.createElement('div', ['container', 'main-container'], '');
        var wrapContent = this.createElement('div', ['wrap-content'], '');
        wrapContent.innerHTML = this.createContent();
        container.append(wrapContent);
        main.append(container);
        return main;
    };
    ScorePage.prototype.createContent = function () {
        var content = "<h2 class=\"content-title\">Score</h2>";
        return content;
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
            this.ScorePage = new score_1.default().getPage();
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
        View.prototype.openSelectedPage = function (item) {
            var items = this.header.menu.querySelectorAll('.header-menu__item');
            items.forEach(function (elem) { return elem.classList.remove('item-select'); });
            item.classList.add('item-select');
            if (item.classList.contains('item-about')) {
                this.showPage(this.AboutPage);
            }
            if (item.classList.contains('item-score')) {
                this.showPage(this.ScorePage);
            }
            if (item.classList.contains('item-setting')) {
                this.showPage(this.Settings.getPage());
            }
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
            this.view.openSelectedPage(item);
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
            console.log(this.regData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNzcz80NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzcz84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/Zjg1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5jc3M/ZWY3MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MuY3NzPzQ1OGYiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3N0eWxlcy5jc3M/NmM5OSIsIndlYnBhY2s6Ly8vLi9iYXNlLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL212Yy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWUsRUFBRTtBQUNuRSx5REFBeUQsd0JBQXdCLEVBQUUsd0JBQXdCLDRCQUE0QixFQUFFO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDdGJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmFzZUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEJhc2VDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGVnLCBjbGFzc1N0eWxlLCBpZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVnKTtcclxuICAgICAgICBpZiAoY2xhc3NTdHlsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgKF9hID0gZWxlbWVudC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgY2xhc3NTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNvbXBvbmVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2Fib3V0LmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIEFib3V0UGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBYm91dFBhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kYXRlID0gW1xyXG4gICAgICAgICAgICB7IHBvaW50OiAnMScsIHRleHQ6ICdSZWdpc3RlciBuZXcgcGxheWVyIGluIGdhbWUnLCBjbGFzczogJ2ltYWdlMScgfSxcclxuICAgICAgICAgICAgeyBwb2ludDogJzInLCB0ZXh0OiAnQ29uZmlndXJlIHlvdXIgZ2FtZSBzZXR0aW5ncycsIGNsYXNzOiAnaW1hZ2UyJyB9LFxyXG4gICAgICAgICAgICB7IHBvaW50OiAnMycsIHRleHQ6ICdTdGFydCB5b3UgbmV3IGdhbWUhIFJlbWVtYmVyIGNhcmQgcG9zaXRpb25zIGFuZCBtYXRjaCBpdCBiZWZvcmUgdGltZXMgdXAuJywgY2xhc3M6ICdpbWFnZTMnIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBBYm91dFBhZ2UucHJvdG90eXBlLmdldFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFpbigpO1xyXG4gICAgfTtcclxuICAgIEFib3V0UGFnZS5wcm90b3R5cGUuY3JlYXRlTWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWFpbicsIFsnbWFpbiddLCAnJyk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnbWFpbi1jb250YWluZXInXSwgJycpO1xyXG4gICAgICAgIHZhciB3cmFwQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWyd3cmFwLWNvbnRlbnQnXSwgJycpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlQ29udGVudCh0aGlzLmRhdGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcENvbnRlbnQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG4gICAgQWJvdXRQYWdlLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gXCI8aDIgY2xhc3M9XFxcImNvbnRlbnQtdGl0bGVcXFwiPkhvdyB0byBwbGF5PzwvaDI+XCI7XHJcbiAgICAgICAgdmFyIHJvdyA9IGFyci5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1mZWlsZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcm93X19sZWZ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb2ludFxcXCI+XFxuICAgICAgICAgICAgICA8cD5cIiArIGVsZW0ucG9pbnQgKyBcIjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cD5cIiArIGVsZW0udGV4dCArIFwiPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1yb3dfX3JpZ2h0IFwiICsgZWxlbS5jbGFzcyArIFwiXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50ICsgcm93O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBYm91dFBhZ2U7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0UGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2dhbWUuY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgdGltZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi8uLi90aW1lci90aW1lclwiKSk7XHJcbnZhciBHYW1lUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhHYW1lUGFnZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEdhbWVQYWdlKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucHJvcHMgPSBbXTtcclxuICAgICAgICBfdGhpcy50aW1lciA9IG5ldyB0aW1lcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuZ2V0UGFnZSA9IGZ1bmN0aW9uIChwcm9wcywgZGlmZmljdWx0eSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVHYW1lKGRpZmZpY3VsdHkpO1xyXG4gICAgfTtcclxuICAgIEdhbWVQYWdlLnByb3RvdHlwZS5jcmVhdGVGZWlsZEdhbWUgPSBmdW5jdGlvbiAoZGlmZmljdWx0eSkge1xyXG4gICAgICAgIHZhciBmZWlsZCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYXJkcy1mZWlsZCddLCAnJyk7XHJcbiAgICAgICAgZmVpbGQuYXBwZW5kKHRoaXMuY3JlYXRlQ2FyZHMoZGlmZmljdWx0eSkpO1xyXG4gICAgICAgIHJldHVybiBmZWlsZDtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUuY3JlYXRlQ2FyZHMgPSBmdW5jdGlvbiAoZGlmZmljdWx0eSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNhcmRzQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NhcmQtY29udGFpbmVyJywgZGlmZmljdWx0eV0sICcnKTtcclxuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gcHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVDYXJkKHByb3ApO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG4gICAgfTtcclxuICAgIEdhbWVQYWdlLnByb3RvdHlwZS5jcmVhdGVDYXJkID0gZnVuY3Rpb24gKGltZykge1xyXG4gICAgICAgIHJldHVybiBcIlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJwZXJzcGVjdGl2ZTogMjVyZW1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtd3JhcFxcXCIgZGF0YS12YWx1ZT1cIiArIGltZyArIFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBiYWNrXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgZnJvbnRcXFwiIFxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9pbWFnZXMvZ2FtZS9cIiArIGltZyArIFwiJykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIFwiO1xyXG4gICAgfTtcclxuICAgIEdhbWVQYWdlLnByb3RvdHlwZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24gKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWFpbicsIFsnbWFpbiddLCAnJyk7XHJcbiAgICAgICAgdmFyIHdyYXBDb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3dyYXAtY29udGVudCddLCAnJyk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRoaXMudGltZXIuY3JlYXRlSFRNTEVsZW1lbnRUaW1lcigpKTtcclxuICAgICAgICB3cmFwQ29udGVudC5hcHBlbmQodGhpcy5jcmVhdGVGZWlsZEdhbWUoZGlmZmljdWx0eSkpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICByZXR1cm4gbWFpbjtcclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUudG9Sb3RhdGVDYXJkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lUGFnZS5wcm90b3R5cGUudG9Sb3RhdGVBbGxjYXJkcyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xyXG4gICAgfTtcclxuICAgIEdhbWVQYWdlLnByb3RvdHlwZS5nZXRSZXN1bHRTZWxlY3RDYXJkcyA9IGZ1bmN0aW9uIChhcnJTZWxlY3RlZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgYXJyU2VsZWN0ZWQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy50b1JvdGF0ZUFsbGNhcmRzKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lUGFnZTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZVBhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9oZWFkZXIuY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgSGVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEhlYWRlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmZlaWxkID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnaGVhZGVyJywgWydoZWFkZXInXSwgJycpO1xyXG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IF90aGlzLmNyZWF0ZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIF90aGlzLmxvZ28gPSBfdGhpcy5jcmVhdGVMb2dvKCk7XHJcbiAgICAgICAgX3RoaXMubWVudSA9IF90aGlzLmNyZWF0ZU1lbnUoKTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY3JlYXRlRWxlbWVudCgncCcsIFsnZmlyc3QtbmFtZScsICdoaWRkZW4nXSwgJ2ZpcnN0TmFtZScpO1xyXG4gICAgICAgIF90aGlzLmJ1dHRvbiA9IF90aGlzLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEhlYWRlci5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudG9QbGFjZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyLCBbdGhpcy5sb2dvLCB0aGlzLm1lbnUsIHRoaXMuYnV0dG9uXSk7XHJcbiAgICAgICAgdGhpcy50b1BsYWNlRWxlbWVudHModGhpcy5mZWlsZCwgW3RoaXMuY29udGFpbmVyXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVpbGQ7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb250YWluZXInLCAnaGVhZGVyLWNvbnRhaW5lciddLCAnJyk7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVMb2dvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsb2dvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2hlYWRlci1sb2dvJ10sICcnKTtcclxuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby11cFxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibG9nby10ZXh0XFxcIj5NQVRDSDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLWRvd25cXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImxvZ28tdGV4dFxcXCI+TUFUQ0g8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiBsb2dvO1xyXG4gICAgfTtcclxuICAgIEhlYWRlci5wcm90b3R5cGUuY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbWVudScsIFsnbWVudSddLCAnJyk7XHJcbiAgICAgICAgbWVudS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1hYm91dCBpdGVtLXNlbGVjdFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjxwPj88L3A+PC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItbWVudV9fdGV4dFxcXCI+QWJvdXQgR2FtZTwvcD4gIFxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1zY29yZVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1tZW51X19pbWdcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX3RleHRcXFwiPkJlc3QgU2NvcmU8L3A+IFxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2l0ZW0gaXRlbS1zZXR0aW5nXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLW1lbnVfX2ltZ1xcXCI+PC9kaXY+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkZXItbWVudV9fdGV4dFxcXCI+R2FtZSBTZXR0aW5nczwvcD5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICB9O1xyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5jcmVhdGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbkZlaWxkID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2hlYWRlci1idXR0b24tZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIHZhciBidXR0b25TdGFydEdhbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnaGVhZGVyLWJ1dHRvbicsICdoZWFkZXItYnV0dG9uLXN0YXJ0JywgJ2hpZGRlbiddLCAnc3RhcnRHYW1lJyk7XHJcbiAgICAgICAgdmFyIGJ1dHRvblJlZ2lzdHJhdGlvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgWydoZWFkZXItYnV0dG9uJ10sICdyZWdCdG4nKTtcclxuICAgICAgICBidXR0b25TdGFydEdhbWUuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8cCBjbGFzcz1cXFwiaGVhZGVyLWJ1dHRvbl9fdGV4dFxcXCI+c3RhcnQgZ2FtZTwvcD5cXG4gICAgXCI7XHJcbiAgICAgICAgYnV0dG9uUmVnaXN0cmF0aW9uLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHAgY2xhc3M9XFxcImhlYWRlci1idXR0b25fX3RleHRcXFwiPnJlZ2lzdGVyIG5ldyBwbGF5ZXI8L3A+XFxuICAgIFwiO1xyXG4gICAgICAgIGJ1dHRvbkZlaWxkLmFwcGVuZCh0aGlzLm5hbWUpO1xyXG4gICAgICAgIGJ1dHRvbkZlaWxkLmFwcGVuZChidXR0b25TdGFydEdhbWUpO1xyXG4gICAgICAgIGJ1dHRvbkZlaWxkLmFwcGVuZChidXR0b25SZWdpc3RyYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBidXR0b25GZWlsZDtcclxuICAgIH07XHJcbiAgICBIZWFkZXIucHJvdG90eXBlLnRvUGxhY2VFbGVtZW50cyA9IGZ1bmN0aW9uICh3cmFwLCBhcnIpIHtcclxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gd3JhcC5hcHBlbmQoZWxlbWVudCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIZWFkZXI7XHJcbn0oYmFzZV9jb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3JlZ2lzdHJhdGlvbi1mb3JtLmNzc1wiKTtcclxudmFyIGJhc2VfY29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIFJlZ2lzdHJhdGlvbkZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVnaXN0cmF0aW9uRm9ybSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbkZvcm0oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kRm9uID0gX3RoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgWydtb2RhbC1mb24nXSwgJycpO1xyXG4gICAgICAgIF90aGlzLm1vZGFsUmVnaXN0cmF0aW9uQmxvY2sgPSBfdGhpcy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgWydtb2RhbC1yZWdpc3RyYXRpb24tYmxvY2snXSwgJycpO1xyXG4gICAgICAgIF90aGlzLm1vZGFsV2luQmxvY2sgPSBfdGhpcy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgWydtb2RhbC13aW4tYmxvY2snXSwgJycpO1xyXG4gICAgICAgIF90aGlzLnRpdGxlV2luQmxvY2sgPSBfdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnbW9kYWwtd2luLXRpdGxlJ10sICcnKTtcclxuICAgICAgICBfdGhpcy5tb2RhbFdpbmRvdyA9IF90aGlzLmJ1aWxkTW9kYWwoKTtcclxuICAgICAgICBfdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY3JlYXRlSW5wdXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlxcbiAgICAgIDxmb3JtIGNsYXNzPVxcXCJtb2RhbC1mb3JtXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tcXFwiPlxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19sYWJlbFxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9faW5wdXRcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgaWQ9XFxcImZpcnN0TmFtZVxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCIgdmFsdWU9XFxcIlxcXCI+ICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja19fY2hlY2sgZXJyb3JcXFwiPjwvZGl2PiAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19sYWJlbFxcXCI+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJtb2RhbC1mb3JtX19pbnB1dFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIGlkPVxcXCJsYXN0TmFtZVxcXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XFxcIi4uLlxcXCI+ICAgXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwibW9kYWwtZm9ybV9fbGFiZWxcXFwiPkUtbWFpbDwvbGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcIm1vZGFsLWZvcm1fX2lucHV0XFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cXFwiLi4uXFxcIj4gXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tYmxvY2tfX2NoZWNrIGVycm9yXFxcIj48L2Rpdj4gICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9mb3JtPlxcbiAgICBcIjtcclxuICAgIH07XHJcbiAgICBSZWdpc3RyYXRpb25Gb3JtLnByb3RvdHlwZS5jcmVhdGVSZWdpc3RyYXRpb25CbG9jayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUmVnaXN0cmF0aW9uQmxvY2suaW5uZXJIVE1MID0gXCJcXG4gICAgICA8aGVhZGVyIGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGgyPlJlZ2lzdHIgbmV3IFBsYXllcjwvaDI+XFxuICAgICAgPC9oZWFkZXI+XFxuICAgICAgPG1haW4gY2xhc3M9XFxcIm1vZGFsLW1haW5cXFwiPlxcbiAgICAgICAgXCIgKyB0aGlzLmNyZWF0ZUlucHV0Rm9ybSgpICsgXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWF2YXRhclxcXCI+PC9kaXY+XFxuICAgICAgPC9tYWluPlxcbiAgICAgIDxmb290ZXIgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGRcXFwiIGNsYXNzPVxcXCJhZGQgZGlzYWJsZWRcXFwiPjxwPmFkZCB1c2VyPC9wPjwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiY2FuY2VsXFxcIiBjbGFzcz1cXFwiY2FuY2VsXFxcIj48cD5jYW5jZWw8L3A+PC9idXR0b24+XFxuICAgICAgPC9mb290ZXI+XFxuICAgIFwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsUmVnaXN0cmF0aW9uQmxvY2s7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY3JlYXRlV2luQmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdpbkJsb2NrLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHAgY2xhc3M9XFxcIndpbi10ZXh0XFxcIj5Db25ncmF0dWxhdGlvbnMhIFlvdSBzdWNjZXNzZnVsbHkgZm91bmQgYWxsIG1hdGNoZXMuPC9wPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcIndpbi1idXR0b25cXFwiIGlkPVxcXCJ3aW5cXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIndpbi1idXR0b25fX3RleHRcXFwiPk9LPC9wPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICBcIjtcclxuICAgICAgICB0aGlzLm1vZGFsV2luQmxvY2sucHJlcGVuZCh0aGlzLnRpdGxlV2luQmxvY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsV2luQmxvY2s7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuYnVpbGRNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRGb24uYXBwZW5kKHRoaXMuY3JlYXRlUmVnaXN0cmF0aW9uQmxvY2soKSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmFwcGVuZCh0aGlzLmNyZWF0ZVdpbkJsb2NrKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRGb247XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUub3Blbk1vZGFsUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEZvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb25fYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZ2lzdHJhdGlvbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIFJlZ2lzdHJhdGlvbkZvcm0ucHJvdG90eXBlLmNsb3NlTW9kYWxSZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWZvbl9hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1vZGFsUmVnaXN0cmF0aW9uQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUub3Blbk1vZGFsV2luID0gZnVuY3Rpb24gKHNjb3JlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZVdpbkJsb2NrLmlubmVySFRNTCA9IFwiWW91IHNjb3JlOiA8c3Bhbj5cIiArIHNjb3JlICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kRm9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvbl9hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1vZGFsV2luQmxvY2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gICAgUmVnaXN0cmF0aW9uRm9ybS5wcm90b3R5cGUuY2xvc2VNb2RhbFdpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRGb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtZm9uX2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubW9kYWxXaW5CbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVnaXN0cmF0aW9uRm9ybTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVnaXN0cmF0aW9uRm9ybTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbnZhciBTY29yZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2NvcmVQYWdlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2NvcmVQYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2NvcmVQYWdlLnByb3RvdHlwZS5nZXRQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1haW4oKTtcclxuICAgIH07XHJcbiAgICBTY29yZVBhZ2UucHJvdG90eXBlLmNyZWF0ZU1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCBbJ21haW4nXSwgJycpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29udGFpbmVyJywgJ21haW4tY29udGFpbmVyJ10sICcnKTtcclxuICAgICAgICB2YXIgd3JhcENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnd3JhcC1jb250ZW50J10sICcnKTtcclxuICAgICAgICB3cmFwQ29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuICAgIFNjb3JlUGFnZS5wcm90b3R5cGUuY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IFwiPGgyIGNsYXNzPVxcXCJjb250ZW50LXRpdGxlXFxcIj5TY29yZTwvaDI+XCI7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjb3JlUGFnZTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2NvcmVQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc2V0dGluZ3MuY3NzXCIpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYmFzZS1jb21wb25lbnRcIikpO1xyXG52YXIgU2V0dGluZ3NQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNldHRpbmdzUGFnZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNldHRpbmdzUGFnZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XHJcbiAgICAgICAgX3RoaXMudHlwZUNhcmRzID0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuZ2V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNYWluKCk7XHJcbiAgICB9O1xyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5jcmVhdGVNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHByb3BzRGlmZmljdWx0eSA9IFsnZWFzeScsICdtaWRkbGUnLCAnZGlmZmljdWx0J107XHJcbiAgICAgICAgdmFyIHByb3BzVHlwZUNhcmRzID0gWydhdXRvJywgJ2FuaW1hbCddO1xyXG4gICAgICAgIHZhciBtYWluID0gdGhpcy5jcmVhdGVFbGVtZW50KCdtYWluJywgWydtYWluJ10sICcnKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbnRhaW5lcicsICdtYWluLWNvbnRhaW5lciddLCAnJyk7XHJcbiAgICAgICAgdmFyIHdyYXBDb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3NldHRpbmctY29udGVudCddLCAnJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlRGlmZmljdWx0eSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaDInLCBbJ3NldHRpbmctdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHZhciBmb3JtRGlmZmljdWx0eSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZm9ybScsIFsnc2V0dGluZy1mZWlsZCddLCAnJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlVHlwZUNhcmRzID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsIFsnc2V0dGluZy10aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGZvcm1UeXBlQ2FyZHMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBbJ3NldHRpbmctZmVpbGQnXSwgJycpO1xyXG4gICAgICAgIHRpdGxlRGlmZmljdWx0eS5pbm5lckhUTUwgPSAnRGlmZmljdWx0eSc7XHJcbiAgICAgICAgdGl0bGVUeXBlQ2FyZHMuaW5uZXJIVE1MID0gJ0dhbWUgY2FyZHMnO1xyXG4gICAgICAgIHByb3BzRGlmZmljdWx0eS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGZvcm1EaWZmaWN1bHR5LmFwcGVuZChfdGhpcy5jcmV0ZURpZmZpY3VsdHlCbG9jayhwcm9wKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvcHNUeXBlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICBmb3JtVHlwZUNhcmRzLmFwcGVuZChfdGhpcy5jcmVhdGVUeXBlQ2FyZHNCbG9jayhwcm9wKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKHRpdGxlRGlmZmljdWx0eSk7XHJcbiAgICAgICAgd3JhcENvbnRlbnQuYXBwZW5kKGZvcm1EaWZmaWN1bHR5KTtcclxuICAgICAgICB3cmFwQ29udGVudC5hcHBlbmQodGl0bGVUeXBlQ2FyZHMpO1xyXG4gICAgICAgIHdyYXBDb250ZW50LmFwcGVuZChmb3JtVHlwZUNhcmRzKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBDb250ZW50KTtcclxuICAgICAgICBtYWluLmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzUGFnZS5wcm90b3R5cGUuY3JldGVEaWZmaWN1bHR5QmxvY2sgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnc2V0dGluZy1zZWxlY3RfX3dyYXAnXSwgJycpO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbJ3NldHRpbmctc2VsZWN0X190aXRsZSddLCAnJyk7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIFsnc2V0dGluZy1zZWxlY3QnXSwgdGV4dCk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0ZXh0KTtcclxuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkaWZmaWN1bHR5Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGlmZmljdWx0eSA9IGlucHV0LmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0ID09PSB0aGlzLmRpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcC5hcHBlbmQobGFiZWwpO1xyXG4gICAgICAgIHdyYXAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gd3JhcDtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmNyZWF0ZVR5cGVDYXJkc0Jsb2NrID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3NldHRpbmctc2VsZWN0X193cmFwJ10sICcnKTtcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgWydzZXR0aW5nLXNlbGVjdF9fdGl0bGUnXSwgJycpO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ3NldHRpbmctc2VsZWN0J10sIHRleHQpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGV4dCk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW1hZ2VzJyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSB0ZXh0O1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudHlwZUNhcmRzID0gaW5wdXQuaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRleHQgPT09IHRoaXMudHlwZUNhcmRzKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXAuYXBwZW5kKGxhYmVsKTtcclxuICAgICAgICB3cmFwLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIHdyYXA7XHJcbiAgICB9O1xyXG4gICAgU2V0dGluZ3NQYWdlLnByb3RvdHlwZS5nZXRWYWx1ZURpZmZpY3VsdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZmljdWx0eTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1BhZ2UucHJvdG90eXBlLmdldFR5cGVDYXJkcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlQ2FyZHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNldHRpbmdzUGFnZTtcclxufShiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3NQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGltZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaW1lcigpIHtcclxuICAgICAgICB0aGlzLnZhbHVlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubWludXRlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyRmVpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnRpbWVySFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIH1cclxuICAgIFRpbWVyLnByb3RvdHlwZS5jcmVhdGVIVE1MRWxlbWVudFRpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJGZWlsZC5jbGFzc05hbWUgPSAndGltZXInO1xyXG4gICAgICAgIHRoaXMudGltZXJIVE1MLmNsYXNzTmFtZSA9ICd0aW1lci10ZXh0JztcclxuICAgICAgICB0aGlzLnNob3dUaW1lclZhbHVlKHRoaXMubWludXRlcywgdGhpcy5zZWNvbmRzKTtcclxuICAgICAgICB0aGlzLnRpbWVyRmVpbGQuYXBwZW5kKHRoaXMudGltZXJIVE1MKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lckZlaWxkO1xyXG4gICAgfTtcclxuICAgIFRpbWVyLnByb3RvdHlwZS5zaG93VGltZXJWYWx1ZSA9IGZ1bmN0aW9uIChtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgdmFyIG1pbiA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogXCJcIiArIG1pbnV0ZXM7XHJcbiAgICAgICAgdmFyIHNlYyA9IChzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBzZWNvbmRzIDogXCJcIiArIHNlY29uZHM7XHJcbiAgICAgICAgdGhpcy50aW1lckhUTUwuaW5uZXJIVE1MID0gbWluICsgXCI6XCIgKyBzZWM7XHJcbiAgICB9O1xyXG4gICAgVGltZXIucHJvdG90eXBlLnN0YXJ0VGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpbWVyVmFsdWUodGhpcy5taW51dGVzLCB0aGlzLnNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy52YWx1ZVRpbWVyKys7XHJcbiAgICAgICAgICAgIF90aGlzLm1pbnV0ZXMgPSBNYXRoLmZsb29yKF90aGlzLnZhbHVlVGltZXIgLyA2MCk7XHJcbiAgICAgICAgICAgIF90aGlzLnNlY29uZHMgPSBfdGhpcy52YWx1ZVRpbWVyIC0gX3RoaXMubWludXRlcyAqIDYwO1xyXG4gICAgICAgICAgICBfdGhpcy5zaG93VGltZXJWYWx1ZShfdGhpcy5taW51dGVzLCBfdGhpcy5zZWNvbmRzKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgICBUaW1lci5wcm90b3R5cGUuc3RvcFRpbWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZXJJbnRlcnZhbClcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXJ0VGltZXJJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpbWVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUaW1lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIik7XHJcbnZhciBtdmNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tdmNcIikpO1xyXG52YXIgYmFzZV9jb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlLWNvbXBvbmVudFwiKSk7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IG5ldyBiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQoKTtcclxuICAgIHZhciBhcHAgPSBlbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCAnYXBwJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoYXBwKTtcclxuICAgIG12Y18xLmRlZmF1bHQoYXBwKTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNlX2NvbXBvbmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2UtY29tcG9uZW50XCIpKTtcclxudmFyIGhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XHJcbnZhciBhYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXRcIikpO1xyXG52YXIgc2NvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlXCIpKTtcclxudmFyIHNldHRpbmdzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9zZXR0aW5ncy1wYWdlL3NldHRpbmdzXCIpKTtcclxudmFyIHJlZ2lzdHJhdGlvbl9mb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLWZvcm1cIikpO1xyXG52YXIgZ2FtZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZ2FtZS9nYW1lXCIpKTtcclxuZnVuY3Rpb24gbXZjKGFwcCkge1xyXG4gICAgLy8gVmlld1xyXG4gICAgdmFyIFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVmlldyhhcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGZWlsZCA9IG5ldyBiYXNlX2NvbXBvbmVudF8xLmRlZmF1bHQoKS5jcmVhdGVFbGVtZW50KCdkaXYnLCBbJ21vZGFsLWZlaWxkJ10sICcnKTtcclxuICAgICAgICAgICAgdGhpcy5Nb2RhbFdpbmRvdyA9IG5ldyByZWdpc3RyYXRpb25fZm9ybV8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFdpbmRvdyA9IHRoaXMuTW9kYWxXaW5kb3cubW9kYWxXaW5kb3c7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IGhlYWRlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5BYm91dFBhZ2UgPSBuZXcgYWJvdXRfMS5kZWZhdWx0KCkuZ2V0UGFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNjb3JlUGFnZSA9IG5ldyBzY29yZV8xLmRlZmF1bHQoKS5nZXRQYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0dGluZ3MgPSBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZSA9IG5ldyBnYW1lXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZlaWxkLmFwcGVuZCh0aGlzLm1vZGFsV2luZG93KTtcclxuICAgICAgICAgICAgdGhpcy5hcHAuYmVmb3JlKHRoaXMubW9kYWxGZWlsZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93Rmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5oZWFkZXIuZ2V0SGVhZGVyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUub3BlblNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaGVhZGVyLm1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1tZW51X19pdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1zZWxlY3QnKTsgfSk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1zZWxlY3QnKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLWFib3V0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2UodGhpcy5BYm91dFBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1zY29yZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKHRoaXMuU2NvcmVQYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0tc2V0dGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlKHRoaXMuU2V0dGluZ3MuZ2V0UGFnZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd01vZGFsV2luZG93ID0gZnVuY3Rpb24gKHdpbiwgc2NvcmUpIHtcclxuICAgICAgICAgICAgKHdpbiAmJiBzY29yZSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5Nb2RhbFdpbmRvdy5vcGVuTW9kYWxXaW4oc2NvcmUpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuTW9kYWxXaW5kb3cub3Blbk1vZGFsUmVnaXN0cmF0aW9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5oaWRkZW5Nb2RhbFdpbmRvdyA9IGZ1bmN0aW9uICh3aW4pIHtcclxuICAgICAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RhbFdpbmRvdy5jbG9zZU1vZGFsV2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9uJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRzID0gbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGFsV2luZG93LmNsb3NlTW9kYWxSZWdpc3RyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlucHV0cyA9PT0gbnVsbCB8fCBpbnB1dHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gaW5wLm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0YXJ0R2FtZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlZ0J0biA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJyNyZWdCdG4nKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0QnRuID0gdGhpcy5hcHAucXVlcnlTZWxlY3RvcignI3N0YXJ0R2FtZScpO1xyXG4gICAgICAgICAgICByZWdCdG4gPT09IG51bGwgfHwgcmVnQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuID09PSBudWxsIHx8IHN0YXJ0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGFydFN0b3BHYW1lQnV0dG9uID0gZnVuY3Rpb24gKGlkLCBuYW1lQnRuKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydEdhbWUgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1dHRvbi1zdGFydCcpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gc3RhcnRHYW1lLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBuYW1lQnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93QXZhdGFyTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLm5hbWUuaW5uZXJIVE1MID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIubmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdGF0dXNJbnB1dCA9IGZ1bmN0aW9uIChpZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMubW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNcIiArIGlkKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0Lm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoX2IgPSBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1N0eWxlc2RBZGRCdXR0b24gPSBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkJyk7XHJcbiAgICAgICAgICAgIGlmICghYnV0dG9uQWRkKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yJztcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd0dhbWVQYWdlID0gZnVuY3Rpb24gKHByb3BzLCBkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5hcHAubGFzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2VXaXRoKHRoaXMuR2FtZS5nZXRQYWdlKHByb3BzLCBkaWZmaWN1bHR5KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93UGFnZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5hcHAubGFzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVmlldy5wcm90b3R5cGUuc2hvd1JvdGF0ZSA9IGZ1bmN0aW9uIChjYXJkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZS50b1JvdGF0ZUNhcmQoY2FyZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93UmVzdWx0U2VsZWN0ID0gZnVuY3Rpb24gKGFyclNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWUuZ2V0UmVzdWx0U2VsZWN0Q2FyZHMoYXJyU2VsZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnJvdGF0ZUFsbENhcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgY2FyZHMgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC13cmFwJyk7XHJcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLkdhbWUudG9Sb3RhdGVBbGxjYXJkcyhjYXJkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBWaWV3LnByb3RvdHlwZS5zaG93U3RhcnRUaW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lLnRpbWVyLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFZpZXcucHJvdG90eXBlLnNob3dTdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZS50aW1lci5zdG9wVGltZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBWaWV3O1xyXG4gICAgfSgpKTtcclxuICAgIC8vIE1vZGVsXHJcbiAgICB2YXIgTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gTW9kZWwodmlldykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlZ0RhdGEgPSB7IGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJywgZW1haWw6ICcnIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXJyRWxlbWVudHNQcmVzc2VkID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzRm9yR2FtZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdEYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eSA9IHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50QWxsQ2FyZHM6IDAsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRPcGVuZWRDYXJkczogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudEFsbENvbXBhcmVDYXJkczogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudEZhdGFsQ29tcGFyZUNhcmRzOiAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGFTZXR0aW5ncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRMb2FkRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0TG9hZEZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dGaXJzdFBhZ2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5zZWxlY3RNZW51ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdG9wR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcub3BlblNlbGVjdGVkUGFnZShpdGVtKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jbG9zZU1vZGFsV2luZG93ID0gZnVuY3Rpb24gKGRlbGV0ZURhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YS5maXJzdE5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YS5sYXN0TmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhLmVtYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXR1c0Rpc2FibGVkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGRlbk1vZGFsV2luZG93KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2xvc2VNb2RhbFdpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGRlbk1vZGFsV2luZG93KCd3aW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5vcGVuTW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93TW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5jaGVja1ZhbHVlSW5wdXQgPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdOYW1lID0gL15bYS16QS1a0LAt0Y/QkC3Qr10rJC91aTtcclxuICAgICAgICAgICAgdmFyIHJlZ0VtYWlsID0gL15bXkBcXHNdK0BbXkBcXHNdK1xcLlteQFxcc10rJC87XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2ZpcnN0TmFtZScgfHwgaWQgPT09ICdsYXN0TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdOYW1lLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhdHVzSW5wdXQoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdEYXRhW2lkXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhdHVzSW5wdXQoaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaWQgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdFbWFpbC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnRGF0YVtpZF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXR1c0lucHV0KGlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGVja1ZhbHVlRGF0YSgpID8gdGhpcy5nZXRTdGF0dXNEaXNhYmxlZEJ1dHRvbihmYWxzZSkgOiB0aGlzLmdldFN0YXR1c0Rpc2FibGVkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLmNoZWNrVmFsdWVEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVnRGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ0RhdGEuZmlyc3ROYW1lICYmIHRoaXMucmVnRGF0YS5sYXN0TmFtZSAmJiB0aGlzLnJlZ0RhdGEuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICFyZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdGF0dXNEaXNhYmxlZEJ1dHRvbiA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdHlsZXNkQWRkQnV0dG9uKHN0YXR1cyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2hlY2tSZWdpc3RyYXRpb25EYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlRGF0YSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWxXaW5kb3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRHYW1lQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd0F2YXRhck5hbWUodGhpcy5yZWdEYXRhLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzRm9yR2FtZSA9IHRoaXMuZ2V0UHJvcHNGb3JHYW1lKHRoaXMuc2V0dGluZ0RhdGEsIHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKSwgdGhpcy52aWV3LlNldHRpbmdzLmdldFR5cGVDYXJkcygpKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dHYW1lUGFnZSh0aGlzLmltYWdlc0ZvckdhbWUsIHRoaXMudmlldy5TZXR0aW5ncy5nZXRWYWx1ZURpZmZpY3VsdHkoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93U3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0YXJ0U3RvcEdhbWVCdXR0b24oJ3N0b3BHYW1lJywgJ3N0b3AgZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ2FyZHMgPSB0aGlzLmltYWdlc0ZvckdhbWUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudE9wZW5lZENhcmRzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEFsbENvbXBhcmVDYXJkcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS5hbW91bnRGYXRhbENvbXBhcmVDYXJkcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNGb3JTY29yZS50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudmlldy5yb3RhdGVBbGxDYXJkcygpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRTdG9wR2FtZSA9IGZ1bmN0aW9uICh3aW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dTdGFydFN0b3BHYW1lQnV0dG9uKCdzdGFydEdhbWUnLCAnc3RhcnQgZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1N0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUudGltZXIgPSB0aGlzLnZpZXcuR2FtZS50aW1lci52YWx1ZVRpbWVyO1xyXG4gICAgICAgICAgICBpZiAod2luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gKCh0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ29tcGFyZUNhcmRzIC0gdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEZhdGFsQ29tcGFyZUNhcmRzKSAqIDEwMCkgLSB0aGlzLml0ZW1zRm9yU2NvcmUudGltZXIgKiAxMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zaG93TW9kYWxXaW5kb3coJ3dpbicsIHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuZ2V0RGF0YVNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjdCwgZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goJy4uL3NldHRpbmcuanNvbicpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlY3QuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ0RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE1vZGVsLnByb3RvdHlwZS5nZXRQcm9wc0ZvckdhbWUgPSBmdW5jdGlvbiAoZGF0YSwgZGlmZmljdWx0eSwgdHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLmRpZmZpY3VsdHlbZGlmZmljdWx0eV07XHJcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSBkYXRhLmltYWdlc1t0eXBlXS5zbGljZSgwLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBpbWFnZXMubWFwKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBpbWFnZXM7IH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHsgcmV0dXJuIGFjYy5jb25jYXQodmFsKTsgfSwgW10pLnNvcnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUudG9Sb3RhdGVDYXJkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3dSb3RhdGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9GaWxsYXJyRWxlbWVudHNQcmVzc2VkKGVsZW1lbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgTW9kZWwucHJvdG90eXBlLnRvRmlsbGFyckVsZW1lbnRzUHJlc3NlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyckVsZW1lbnRzUHJlc3NlZC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tFbGVtZW50c1ByZXNzZWQodGhpcy5hcnJFbGVtZW50c1ByZXNzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBNb2RlbC5wcm90b3R5cGUuY2hlY2tFbGVtZW50c1ByZXNzZWQgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ29tcGFyZUNhcmRzKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdLmRhdGFzZXQudmFsdWUgIT09IGFyclsxXS5kYXRhc2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudEZhdGFsQ29tcGFyZUNhcmRzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnZpZXcuc2hvd1Jlc3VsdFNlbGVjdChhcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudE9wZW5lZENhcmRzICs9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJFbGVtZW50c1ByZXNzZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc0ZvclNjb3JlLmFtb3VudE9wZW5lZENhcmRzID09PSB0aGlzLml0ZW1zRm9yU2NvcmUuYW1vdW50QWxsQ2FyZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdG9wR2FtZSgnd2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gTW9kZWw7XHJcbiAgICB9KCkpO1xyXG4gICAgLy8gQ29udHJvbGxlclxyXG4gICAgdmFyIENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQ29udHJvbGxlcihhcHAsIG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmVpbGQnKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuICAgICAgICAgICAgdmFyIHdpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW4nKTtcclxuICAgICAgICAgICAgdmFyIGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKTtcclxuICAgICAgICAgICAgdmFyIHJlZ0J0biA9IHRoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJyNyZWdCdG4nKTtcclxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IG1vZGFsV2luZG93ID09PSBudWxsIHx8IG1vZGFsV2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB2YXIgbWVudUJ1dHRvbnMgPSB0aGlzLmFwcC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1lbnVfX2l0ZW0nKTtcclxuICAgICAgICAgICAgLy8gZ2V0IGV2ZW50IG9uIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgICBhZGRCdG4gPT09IG51bGwgfHwgYWRkQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGlja0FkZEJ0bk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRHYW1lID0gX3RoaXMuYXBwLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYnV0dG9uLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUgPT09IG51bGwgfHwgc3RhcnRHYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5pZCA9PT0gJ3N0YXJ0R2FtZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tTdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLmlkID09PSAnc3RvcEdhbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNsaWNrU3RvcEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FuY2VsQnRuID09PSBudWxsIHx8IGNhbmNlbEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tDYW5jZWxCdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luQnRuID09PSBudWxsIHx8IHdpbkJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tXaW5CdG5Nb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5wdXRzID09PSBudWxsIHx8IGlucHV0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucCkge1xyXG4gICAgICAgICAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRQYXJhbWV0cnNJbnB1dChpbnAuaWQsIGlucC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGdldCBldmVudCBvbiBhYXAgXHJcbiAgICAgICAgICAgIG1lbnVCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKG1lbnUpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xpY2tNZW51QnV0dG9uKG1lbnUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZWdCdG4gPT09IG51bGwgfHwgcmVnQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGlja05ld1BsYXllckJ0bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrTWVudUJ1dHRvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VsZWN0TWVudShpdGVtKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja05ld1BsYXllckJ0biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5vcGVuTW9kYWxXaW5kb3coKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrQ2FuY2VsQnRuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2xvc2VNb2RhbFdpbmRvdygnZGVsZXRlRGF0YScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuY2xpY2tBZGRCdG5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jaGVja1JlZ2lzdHJhdGlvbkRhdGEoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNsaWNrV2luQnRuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2xvc2VNb2RhbFdpbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0UGFyYW1ldHJzSW5wdXQgPSBmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY2hlY2tWYWx1ZUlucHV0KGlkLCB2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja1N0YXJ0R2FtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5nZXRTdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgdmFyIGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC13cmFwJyk7XHJcbiAgICAgICAgICAgIGNhcmQuZm9yRWFjaChmdW5jdGlvbiAoY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1vZGVsLnRvUm90YXRlQ2FyZChjYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jbGlja1N0b3BHYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmdldFN0b3BHYW1lKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gQ29udHJvbGxlcjtcclxuICAgIH0oKSk7XHJcbiAgICB2YXIgdmlldyA9IG5ldyBWaWV3KGFwcCk7XHJcbiAgICB2YXIgbW9kZWwgPSBuZXcgTW9kZWwodmlldyk7XHJcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGFwcCwgbW9kZWwpO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG12YztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9