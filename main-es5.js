(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/chat-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat-page/chat-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"chat__wrapper\">\n  <div class=\"chat__content-wrap\">\n    <div class=\"chat__dialog-wrap\">\n      <app-dialog [dialog]=\"dialog\" (authorMentioned)=\"authorMentioned($event)\"></app-dialog>\n    </div>\n    <div class=\"chat__controls\">\n      <app-controls [mentionAuthor]=\"mentionAuthor\" (sendMessage)=\"sendMessageHandler($event)\"></app-controls>\n    </div>\n  </div>\n  <app-users-list [setUsers]=\"users\" (onUserChosen)=\"userChosenHandler($event)\" class=\"chat__list-dialog\"></app-users-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/controls/controls.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat-page/controls/controls.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n  <form class=\"controls__form\" [formGroup]=\"messageForm\" (ngSubmit)=\"onSend()\">\n    <div class=\"controls__input\">\n      <input formControlName=\"message\" type=\"text\" placeholder=\"Message\">\n\n      <span class=\"controls__emoji\">\n         <i>😄</i>\n      </span>\n    </div>\n\n    <button class=\"controls__send-btn\" mat-flat-button color=\"primary\">Send</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/dialog/dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat-page/dialog/dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n  <div class=\"dialog__sentence\"\n      [ngClass]=\"{ 'dialog__sentence--odd': odd}\"\n      *ngFor=\"let sentance of dialog; let odd = odd\">\n    ({{sentance.time | date:'H:mm'}})\n    <span class=\"dialog__author\" (dblclick)=\"dbHandler(sentance.author)\">{{sentance.author}}:</span>\n    <div class=\"dialog__text\">{{sentance.text}}</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/header/header.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat-page/header/header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">Chat</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/users-list/users-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chat-page/users-list/users-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list\">\n  <div *ngFor=\"let user of users\"\n       class=\"users-list__user\"\n       [ngClass]=\"{ 'users-list__user--chosen': user.id === chosenUserId}\"\n       (click)=\"chooseUser(user)\">\n    {{user.author}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat-page/chat-page.component */ "./src/app/components/chat-page/chat-page.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_3__["ChatPageComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-page/chat-page.component */ "./src/app/components/chat-page/chat-page.component.ts");
/* harmony import */ var _components_chat_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat-page/header/header.component */ "./src/app/components/chat-page/header/header.component.ts");
/* harmony import */ var _components_chat_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat-page/users-list/users-list.component */ "./src/app/components/chat-page/users-list/users-list.component.ts");
/* harmony import */ var _components_chat_page_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat-page/dialog/dialog.component */ "./src/app/components/chat-page/dialog/dialog.component.ts");
/* harmony import */ var _components_chat_page_controls_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat-page/controls/controls.component */ "./src/app/components/chat-page/controls/controls.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-emoji-picker */ "./node_modules/ngx-emoji-picker/fesm5/ngx-emoji-picker.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_5__["ChatPageComponent"],
                _components_chat_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_chat_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__["UsersListComponent"],
                _components_chat_page_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"],
                _components_chat_page_controls_controls_component__WEBPACK_IMPORTED_MODULE_9__["ControlsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_12__["NgxEmojiPickerModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-page/chat-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-page/chat-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat__wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.chat__content-wrap {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 10px;\n  max-width: 1180px;\n}\n.chat__dialog-wrap {\n  height: calc(100% - 90px);\n  border: 2px solid var(--border-grey);\n  margin-bottom: 10px;\n  overflow-y: auto;\n}\n.chat__list-dialog {\n  background-color: var(--main-chat-theme);\n  color: var(--border-grey);\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2lpL0RvY3VtZW50cy9teS1wcm9qZWN0cy9jaGF0QW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvY2hhdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcbiAgJl9fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX19jb250ZW50LXdyYXAge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1heC13aWR0aDogMTE4MHB4O1xuICB9XG5cbiAgJl9fZGlhbG9nLXdyYXAge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWdyZXkpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gICZfX2xpc3QtZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNoYXQtdGhlbWUpO1xuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JleSk7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxufVxuIiwiLmNoYXRfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2hhdF9fY29udGVudC13cmFwIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDExODBweDtcbn1cbi5jaGF0X19kaWFsb2ctd3JhcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmV5KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jaGF0X19saXN0LWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY2hhdC10aGVtZSk7XG4gIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JleSk7XG4gIHdpZHRoOiAxNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chat-page/chat-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-page/chat-page.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function() { return ChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ChatPageComponent = /** @class */ (function () {
    function ChatPageComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.dialog = [];
    }
    ChatPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (users) {
            _this.users = _this._getPreparedUsers(users);
        });
    };
    ChatPageComponent.prototype.userChosenHandler = function (user) {
        var _this = this;
        this._chosenUser = user;
        this.firebaseService.getDialog()
            .subscribe(function (dialog) {
            _this.dialog = _this._getPreparedDialog(dialog);
            _this.dialog.sort(function (prev, next) { return prev.time - next.time; });
        });
    };
    ChatPageComponent.prototype.sendMessageHandler = function (text) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.firebaseService.sendMessage(this._getPreparedMessage(text)))
            .subscribe();
    };
    ChatPageComponent.prototype.authorMentioned = function (mentionedAuthorName) {
        this.mentionAuthor = mentionedAuthorName;
    };
    ChatPageComponent.prototype._getPreparedUsers = function (users) {
        return users.map(function (e) { return ({ id: e.payload.doc.id, author: e.payload.doc.data()['author'] }); });
    };
    ChatPageComponent.prototype._getPreparedDialog = function (dialog) {
        return dialog.map(function (e) {
            return {
                id: e.payload.doc.id,
                author: e.payload.doc.data()['authorName'],
                ownerId: e.payload.doc.data()['ownerId'],
                text: e.payload.doc.data()['text'],
                time: e.payload.doc.data()['time'],
            };
        });
    };
    ChatPageComponent.prototype._getPreparedMessage = function (text) {
        return {
            text: text,
            ownerId: this._chosenUser.id,
            authorName: this._chosenUser.author,
            time: new Date().getTime(),
        };
    };
    ChatPageComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    ChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-page',
            template: __webpack_require__(/*! raw-loader!./chat-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/chat-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-page.component.scss */ "./src/app/components/chat-page/chat-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ChatPageComponent);
    return ChatPageComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-page/controls/controls.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/chat-page/controls/controls.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls__form {\n  display: -webkit-box;\n  display: flex;\n}\n.controls__input {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border: 2px solid var(--border-grey);\n  border-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.controls__input input {\n  padding: 6px;\n  width: 100%;\n}\n.controls__send-btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  background-color: var(--button);\n}\n.controls__emoji {\n  border-left: 2px solid var(--border-grey);\n  padding: 0 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-right: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2lpL0RvY3VtZW50cy9teS1wcm9qZWN0cy9jaGF0QW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtcGFnZS9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0RKO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FETUU7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNKSjtBRE9FO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xzIHtcblxuICAmX19mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG5cbiAgICBpbnB1dCB7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19zZW5kLWJ0biB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gIH1cblxuICAmX19lbW9qaSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JleSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIuY29udHJvbHNfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRyb2xzX19pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5jb250cm9sc19faW5wdXQgaW5wdXQge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRyb2xzX19zZW5kLWJ0biB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XG59XG4uY29udHJvbHNfX2Vtb2ppIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JleSk7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/chat-page/controls/controls.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/chat-page/controls/controls.component.ts ***!
  \*********************************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ControlsComponent = /** @class */ (function () {
    function ControlsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.sendMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ControlsComponent.prototype, "mentionAuthor", {
        set: function (mentionedAuthorName) {
            if (!mentionedAuthorName) {
                return;
            }
            var message = this.messageForm.get('message').value + ("@" + mentionedAuthorName);
            this.messageForm.patchValue({ message: message });
        },
        enumerable: true,
        configurable: true
    });
    ControlsComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ControlsComponent.prototype.onSend = function () {
        this.sendMessage.emit(this.messageForm.get('message').value);
        this.messageForm.get('message').reset();
    };
    ControlsComponent.prototype.initForm = function () {
        this.messageForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)],
        });
    };
    ControlsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ControlsComponent.prototype, "mentionAuthor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlsComponent.prototype, "sendMessage", void 0);
    ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! raw-loader!./controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/app/components/chat-page/controls/controls.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-page/dialog/dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-page/dialog/dialog.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog {\n  max-width: 1180px;\n  padding: 6px;\n}\n.dialog__sentence {\n  height: 36px;\n  padding-left: 6px;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 4px;\n}\n.dialog__sentence--odd {\n  background-color: var(--odd-row);\n}\n.dialog__author {\n  color: deepskyblue;\n  margin-right: 2px;\n  cursor: pointer;\n}\n.dialog__text {\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2lpL0RvY3VtZW50cy9teS1wcm9qZWN0cy9jaGF0QW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsZ0NBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2cge1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgcGFkZGluZzogNnB4O1xuXG4gICZfX3NlbnRlbmNlIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAmLS1vZGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2RkLXJvdyk7XG4gICAgfVxuICB9XG5cbiAgJl9fYXV0aG9yIHtcbiAgICBjb2xvcjogZGVlcHNreWJsdWU7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbiIsIi5kaWFsb2cge1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLmRpYWxvZ19fc2VudGVuY2Uge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGlhbG9nX19zZW50ZW5jZS0tb2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2RkLXJvdyk7XG59XG4uZGlhbG9nX19hdXRob3Ige1xuICBjb2xvcjogZGVlcHNreWJsdWU7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGlhbG9nX190ZXh0IHtcbiAgd2lkdGg6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chat-page/dialog/dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-page/dialog/dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.authorMentioned = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogComponent.prototype.dbHandler = function (authorName) {
        this.authorMentioned.emit(authorName);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "dialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "authorMentioned", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/chat-page/dialog/dialog.component.scss")]
        })
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-page/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-page/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\n  background-color: var(--main-chat-theme);\n  color: var(--border-grey);\n  height: 36px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2lpL0RvY3VtZW50cy9teS1wcm9qZWN0cy9jaGF0QW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNoYXQtdGhlbWUpO1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyZXkpO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iLCIuaGVhZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNoYXQtdGhlbWUpO1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyZXkpO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chat-page/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-page/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/chat-page/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-page/users-list/users-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/chat-page/users-list/users-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-list {\n  padding: 6px;\n}\n.users-list__user {\n  background-color: var(--main-block);\n  padding: 8px;\n  cursor: pointer;\n  color: var(--main-chat-theme);\n}\n.users-list__user--chosen {\n  background-color: var(--author-name);\n  color: var(--main-block);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2lpL0RvY3VtZW50cy9teS1wcm9qZWN0cy9jaGF0QW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDSjtBREVFO0VBQ0Usb0NBQUE7RUFDQSx3QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWxpc3Qge1xuICBwYWRkaW5nOiA2cHg7XG5cbiAgJl9fdXNlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibG9jayk7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jaGF0LXRoZW1lKTtcbiAgfVxuXG4gICZfX3VzZXItLWNob3NlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXV0aG9yLW5hbWUpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsb2NrKTtcbiAgfVxufVxuIiwiLnVzZXJzLWxpc3Qge1xuICBwYWRkaW5nOiA2cHg7XG59XG4udXNlcnMtbGlzdF9fdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmxvY2spO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLW1haW4tY2hhdC10aGVtZSk7XG59XG4udXNlcnMtbGlzdF9fdXNlci0tY2hvc2VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXV0aG9yLW5hbWUpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1ibG9jayk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/chat-page/users-list/users-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/chat-page/users-list/users-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
        this.onUserChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(UsersListComponent.prototype, "setUsers", {
        set: function (users) {
            if (!users) {
                return;
            }
            this.users = users;
            this.onUserChosen.emit(this.users[0]);
            this.chosenUserId = this.users[0].id;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UsersListComponent.prototype.chooseUser = function (user) {
        this.chosenUserId = user.id;
        this.onUserChosen.emit(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UsersListComponent.prototype, "setUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersListComponent.prototype, "onUserChosen", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chat-page/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/components/chat-page/users-list/users-list.component.scss")]
        })
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(firestore) {
        this.firestore = firestore;
    }
    FirebaseService.prototype.getUsers = function () {
        return this.firestore.collection("users").snapshotChanges();
    };
    FirebaseService.prototype.getDialog = function () {
        return this.firestore.collection("dialog").snapshotChanges();
    };
    FirebaseService.prototype.sendMessage = function (message) {
        return this.firestore.collection("dialog").add(message);
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBO-ufQNta5nY4BpGbUlWPrEpQEF-GDeVY',
        authDomain: 'chat-test-bc045.firebaseapp.com',
        databaseURL: 'https://chat-test-bc045.firebaseio.com',
        projectId: 'chat-test-bc045',
        storageBucket: '',
        messagingSenderId: '598492033820',
        appId: '1:598492033820:web:b4369f5c2e7d8ab3',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksii/Documents/my-projects/chatAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map