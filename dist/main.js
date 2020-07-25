(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"content-wrapper\">\n\t<router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base/messages-snack-bar/messages-snack-bar.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/base/messages-snack-bar/messages-snack-bar.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  {{ data }}\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/divisions/divisions.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/divisions/divisions.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"divisions-arrow-text\">\n    <div>\n        <span class=\"divisions-text\">back</span>\n    </div>\n    <a routerLink=\"/teams\">\n        <img src=\"../../../assets/images/arrow-1.png\" class=\"arrow-divisions\" title=\"divisions\">\n        <!-- <img src=\"../../../assets/images/arrow-2.png\" class=\"arrow-divisions\" title=\"divisions\"> -->\n    </a>\n</div>\n\n\n<div class=\"teams-container\">\n  <h2>Teams</h2>\n\n  <div\n    cdkDropList\n    #teams=\"cdkDropList\"\n    [cdkDropListData]=\"all_teams\"\n    [cdkDropListConnectedTo]=\"[division_A, division_B, division_C, division_D]\"\n    class=\"teams-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"team-box\" *ngFor=\"let team of all_teams\" cdkDrag>{{team.name}}</div>\n  </div>\n</div>\n\n<div class=\"divisions-container\">\n    <div class=\"division-container division_A-container\">\n    <h2>Division A</h2>\n\n    <div\n        cdkDropList\n        #division_A=\"cdkDropList\"\n        [cdkDropListData]=\"division_A_teams\"\n        [cdkDropListConnectedTo]=\"[teams, division_B, division_C, division_D]\"\n        class=\"division-list division_A-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"division-box division_A-box\" *ngFor=\"let team of division_A_teams\" cdkDrag>{{team.name}}</div>\n    </div>\n    </div>\n\n    <div class=\"division-container division_B-container\">\n        <h2>Division B</h2>\n    \n        <div\n        cdkDropList\n        #division_B=\"cdkDropList\"\n        [cdkDropListData]=\"division_B_teams\"\n        [cdkDropListConnectedTo]=\"[division_A, teams, division_C, division_D]\"\n        class=\"division-list division_B-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"division-box division_B-box\" *ngFor=\"let team of division_B_teams\" cdkDrag>{{team.name}}</div>\n        </div>\n    </div>\n\n    <div class=\"division-container division_C-container\">\n        <h2>Division C</h2>\n    \n        <div\n        cdkDropList\n        #division_C=\"cdkDropList\"\n        [cdkDropListData]=\"division_C_teams\"\n        [cdkDropListConnectedTo]=\"[division_A, division_B, teams, division_D]\"\n        class=\"division-list division_C-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"division-box division_C-box\" *ngFor=\"let team of division_C_teams\" cdkDrag>{{team.name}}</div>\n        </div>\n    </div>\n\n    <div class=\"division-container division_D-container\">\n        <h2>Division D</h2>\n    \n        <div\n        cdkDropList\n        #division_D=\"cdkDropList\"\n        [cdkDropListData]=\"division_D_teams\"\n        [cdkDropListConnectedTo]=\"[division_A, division_B, division_C, teams]\"\n        class=\"division-list division_D-list\"\n        (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"division-box division_D-box\" *ngFor=\"let team of division_D_teams\" cdkDrag>{{team.name}}</div>\n        </div>\n    </div>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-wrapper\">\n  <div class=\"footer\">\n    Developed for the purpose of learning by Moshe Ellovitch\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/hash/hash.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/hash/hash.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\"><h2>טיק טק-בוהן</h2> <br />\n<input type=\"button\" value=\"Restart\" (click)=\"Restart()\"> <br /><br />\n\n  <div class=\"wrapper\">\n  <app-square *ngFor=\"let s of squares\" \n  [square]=s \n  [isXTurn]=isXTurn \n  [isFinished]=isGameFinished\n  (changeTurn)=\"ChangeTurn($event)\" \n  (updateSquare)=\"updateSquare($event)\" ></app-square>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/square/square.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/square/square.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div \nclass=\"square\" \n(click)=\"selectSquare()\" \n[ngClass]=\"{'x': notEmptyX, 'empty': this.square.isEmpty, 'o': notEmptyO, 'square-win': this.square.isWin}\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wraper-title-page\">\n  <div class=\"title-page\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n</div>\n\n<div class=\"navbar\">  \n  <button mat-raised-button class=\"menu-btn\"><a routerLink=\"/home\" class=\"menu-btn-text\">Home</a></button>\n  <button mat-raised-button class=\"menu-btn\"><a routerLink=\"/teams\" class=\"menu-btn-text\">Teams</a></button>\n  <button mat-raised-button class=\"menu-btn\"><a routerLink=\"/hash\" class=\"menu-btn-text\">Play Hash (game)</a></button>\n  \n  <button mat-raised-button class=\"menu-btn\"><a routerLink=\"/json-home\" class=\"menu-btn-text\">Display Json</a></button>\n  <button mat-fab class=\"menu-btn reset-btn\" (click)=\"resetApp()\">RESET</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"home-content\">\n  <mat-tab-group class=\"tab-group\">\n    \n    <mat-tab label=\"Development\"> \n      <div class=\"inner-text\"> \n        <p> This app was developed only for improvement purpose. Based on Angular 9, Angular Material and their features. </p>\n\n        <p> There is no server side. This app uses local storage to manage data.</p>\n\n        <p> In this scenario, style and busines logic are not the focus, but the general knowledge of Angular.</p>\n      </div> \n    </mat-tab>\n    \n    <mat-tab label=\"Functionalities\"> \n        <div class=\"inner-text\"> \n\n          <mat-list>\n            <div mat-subheader>This app has these functionallities:</div>\n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Report of teams with basic details</div>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Add / Delete / Update team</div>\n            </mat-list-item>            \n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Update the division information (with friendly drag and drop component of Angular Material)</div>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Reset data and get the first data after your changes (by static json)</div>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Display formatted json options</div>\n            </mat-list-item>\n            <mat-list-item>\n              <mat-icon mat-list-icon>done_outline</mat-icon>\n              <div mat-line>Bonus: Game Hash (not related to team management, but it was my first exercise)</div>\n            </mat-list-item>\n          </mat-list>\n\n        </div> \n    </mat-tab>    \n  </mat-tab-group>\n\n\n    <div class=\"enjoy\">\n      <h3>Please Enjoy</h3>\n      <mat-icon mat-list-icon>mood</mat-icon>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/json-home/json-home.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/json-home/json-home.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"json-types-wrapers\">\n    <mat-list class=\"list-wraper\" role=\"list\">\n        <mat-list-item role=\"listitem\" style=\"cursor: pointer;\" class=\"json-home-wrap-list-item\" (click)=\"openJson(1)\">\n            <span>Simple Json Format</span>\n        </mat-list-item>\n        <mat-list-item role=\"listitem\" style=\"cursor: pointer;\" class=\"json-home-wrap-list-item\" (click)=\"openJson(2)\">\n            Beauty Json\n        </mat-list-item>\n        <mat-list-item role=\"listitem\" style=\"cursor: pointer;\" class=\"json-home-wrap-list-item\" (click)=\"openJson(3)\">\n            Object Format\n        </mat-list-item>\n    </mat-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teams/teams.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teams/teams.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-teams-wrapers\">\n\n  <div class=\"teams-toobar-left\">\n    <!-- <a routerLink=\"/addTeam\"> -->\n      <img src=\"../../../assets/images/add.jpeg\" class=\"btn-add\" (click)='openDialogAddOrUpdate(null)'>\n    <!-- </a> -->\n\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"divisions-arrow-text\">\n    <div>\n      <span class=\"divisions-text\">divisions</span>\n    </div>\n    <a routerLink=\"/divisions\">\n      <img src=\"../../../assets/images/arrow-1.png\" class=\"arrow-divisions\" title=\"divisions\">\n      <!-- <img src=\"../../../assets/images/arrow-2.png\" class=\"arrow-divisions\" title=\"divisions\"> -->\n      <!-- <img src=\"../../../assets/images/arrow-4.jpg\" class=\"arrow-divisions\" title=\"divisions\"> -->\n      <!-- <mat-icon mat-list-icon class=\"arrow-divisions\">arrow_right_alt</mat-icon> -->\n    </a>\n  </div>\n\n\n  <table mat-table [dataSource]=\"dataSource\" \n        matSort \n        class=\"mat-elevation-z8 table-teams\">\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <div class=\"team-name\" (click)='openDialogAddOrUpdate(element)' >\n          {{element.name}} \n        </div>\n      </td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"country\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Country </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"money\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Money </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.money | currency}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"titles\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Titles </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.titles}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"division\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Division </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.division}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> Delete </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <!-- <img src=\"../../../assets/images/icon-remove.jpg\" width=\"30px\" height=\"30px\" (click)='delete(element.id);'>  -->\n        <mat-icon mat-list-icon (click)='delete(element.id);'>delete</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 5, 25, 100]\"></mat-paginator>\n</div>\n\n\n<!-- <app-team-details *ngIf='isDetailsOpen' [team]='teamOpenDetails' (isCloseDetails)='closeDetailsDiv($event)'></app-team-details> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/display-json-dialog/display-json-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/display-json-dialog/display-json-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-dialog\">\n\n    <div class=\"title-dialog\">\n        <span>{{dialogTitle}}</span>\n    </div>\n\n    <div class=\"dialog-wrapers\">\n        <mat-dialog-content>\n            <code *ngIf=\"showSimpleJson\">\n                <!-- Formato 1: simple json -->\n                <pre>{{ teams | json }}</pre>\n            </code>\n            \n            <code *ngIf=\"showBeautyJson\">\n                <!-- Formato 2: beauty json -->\n                <div id=\"beauty-json-id\"></div>\n            </code>\n\n            <code *ngIf=\"showJsonAsObject\">\n                <!-- Formato 3: json displayed as object -->\n                <div [innerHtml]=\"html\"></div>\n            </code>\n        </mat-dialog-content>\n    </div>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/update-team-dialog/update-team-dialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/update-team-dialog/update-team-dialog.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-dialog\" >\n\n    <div class=\"title-dialog\">\n        <span>{{dialogTitle}}</span>\n    </div>\n\n\n<div class=\"update-team-wrapers\">\n    <form [formGroup]=\"addTeamForm\" (ngSubmit)=\"onSubmit(addTeamForm.value)\">\n    <!-- <div *ngIf=\"name || country || money || titles || division\" class=\"creating-team-message\">\n      <span> you are going to create a new team: </span>\n      <ul>\n        <li>Name:  {{ name }}</li>\n        <li>Country:  {{ country }}</li>\n        <li>Money:  {{ money | currency }}</li>\n        <li>Titles: {{ titles }} </li>\n        <li>Division: {{ division }} </li>\n      </ul>\n    </div> -->\n  \n  \n    <div class=\"example-container\">\n      <mat-form-field class=\"form-field\">\n        <input #nameinput \n              matInput \n              placeholder=\"Name\" \n              (keyup)=\"setTeamProperties(nameinput.value, countryinput.value, moneyinput.value, titlesinput.value, divisioninput.value)\"\n              formControlName=\"name\">\n      </mat-form-field>\n    </div>\n  \n    <mat-form-field class=\"form-field\">\n      <mat-label>Country</mat-label>\n      <mat-select #countryinput (selectionChange)=\"onCountrySelection($event.value)\" formControlName=\"country\">\n        <mat-option *ngFor=\"let c of countries\" [value]=\"c.value\">\n          <div class=\"flag-icon\">\n            <img src=\"{{c.flagUrl}}\" height=\"30\" width=\"30\"></div>\n          <div class=\"country\">{{c.viewValue}}</div>\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  \n    <div class=\"example-container\">\n      <mat-form-field class=\"form-field\">\n        <input type=\"number\" #moneyinput matInput placeholder=\"Money\"\n        (keyup)=\"setTeamProperties(nameinput.value, countryinput.value, moneyinput.value, titlesinput.value, divisioninput.value)\"\n        formControlName=\"money\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"example-container\">\n      <mat-form-field class=\"form-field\">\n        <input type=\"number\" #titlesinput matInput placeholder=\"Titles\"\n        (keyup)=\"setTeamProperties(nameinput.value, countryinput.value, moneyinput.value, titlesinput.value, divisioninput.value)\"\n        formControlName=\"titles\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"example-container\">\n      <mat-form-field class=\"form-field\">\n        <input type=\"number\" #divisioninput matInput placeholder=\"Division\"\n        (keyup)=\"setTeamProperties(nameinput.value, countryinput.value, moneyinput.value, titlesinput.value, divisioninput.value)\"\n        formControlName=\"division\">\n      </mat-form-field>\n    </div>\n  \n    <div class=\"buttons\">\n        <button mat-raised-button \n                [disabled]=\"!addTeamForm.valid\">\n                Submit\n        </button>\n    </div>\n    </form>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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

/***/ "./src/app/Models/TeamModels.ts":
/*!**************************************!*\
  !*** ./src/app/Models/TeamModels.ts ***!
  \**************************************/
/*! exports provided: Team, Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// export class Teams{
//     teams : Team[];
// }

var Team = /** @class */ (function () {
    // players: Player[];
    function Team(_id, _name, _country, _money, _titles, _division) {
        this.id = _id;
        this.name = _name;
        this.country = _country;
        this.money = _money;
        this.titles = _titles;
        this.division = _division;
    }
    return Team;
}());

var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

// export class Player {
//     id: number;
//     name: string;
//     positionCode: number;
//     positionDesc: string;
// }


/***/ }),

/***/ "./src/app/Models/squareModel.ts":
/*!***************************************!*\
  !*** ./src/app/Models/squareModel.ts ***!
  \***************************************/
/*! exports provided: squareModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squareModel", function() { return squareModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var squareModel = /** @class */ (function () {
    function squareModel() {
    }
    return squareModel;
}());



/***/ }),

/***/ "./src/app/Models/utils.ts":
/*!*********************************!*\
  !*** ./src/app/Models/utils.ts ***!
  \*********************************/
/*! exports provided: displayJsonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayJsonType", function() { return displayJsonType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var displayJsonType;
(function (displayJsonType) {
    displayJsonType[displayJsonType["SimpleJson"] = 1] = "SimpleJson";
    displayJsonType[displayJsonType["BeautyJson"] = 2] = "BeautyJson";
    displayJsonType[displayJsonType["ObjectFormatJson"] = 3] = "ObjectFormatJson";
})(displayJsonType || (displayJsonType = {}));


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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/teams/teams.component */ "./src/app/components/teams/teams.component.ts");
/* harmony import */ var _components_hash_hash_hash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hash/hash/hash.component */ "./src/app/components/hash/hash/hash.component.ts");
/* harmony import */ var _components_divisions_divisions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/divisions/divisions.component */ "./src/app/components/divisions/divisions.component.ts");
/* harmony import */ var _components_json_home_json_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/json-home/json-home.component */ "./src/app/components/json-home/json-home.component.ts");





// import { AddTeamsComponent } from './components/add-teams/add-teams.component';

// import { TeamComponent } from './components/team/team.component';


var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'teams', component: _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_4__["TeamsComponent"] },
    // { path: 'team/:id', component: TeamComponent },
    // { path: 'addTeam', component: AddTeamsComponent },
    { path: 'hash', component: _components_hash_hash_hash_component__WEBPACK_IMPORTED_MODULE_5__["HashComponent"] },
    { path: 'divisions', component: _components_divisions_divisions_component__WEBPACK_IMPORTED_MODULE_6__["DivisionsComponent"] },
    { path: 'json-home', component: _components_json_home_json_home_component__WEBPACK_IMPORTED_MODULE_7__["JsonHomeComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-wrapper {\n  min-height: 434px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVye1xyXG4gICAgbWluLWhlaWdodDogNDM0cHg7XHJcbiAgICAvLyBtYXgtaGVpZ2h0OiA1NjBweDtcclxufVxyXG5cclxuIiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDQzNHB4O1xufSJdfQ== */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/teams/teams.component */ "./src/app/components/teams/teams.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/base/messages-snack-bar/messages-snack-bar.component */ "./src/app/components/base/messages-snack-bar/messages-snack-bar.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _components_hash_hash_hash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/hash/hash/hash.component */ "./src/app/components/hash/hash/hash.component.ts");
/* harmony import */ var _components_hash_square_square_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/hash/square/square.component */ "./src/app/components/hash/square/square.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_divisions_divisions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/divisions/divisions.component */ "./src/app/components/divisions/divisions.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _dialogs_update_team_dialog_update_team_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialogs/update-team-dialog/update-team-dialog.component */ "./src/app/dialogs/update-team-dialog/update-team-dialog.component.ts");
/* harmony import */ var _components_json_home_json_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/json-home/json-home.component */ "./src/app/components/json-home/json-home.component.ts");
/* harmony import */ var _dialogs_display_json_dialog_display_json_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialogs/display-json-dialog/display-json-dialog.component */ "./src/app/dialogs/display-json-dialog/display-json-dialog.component.ts");












// import { AddTeamsComponent } from './components/add-teams/add-teams.component';






// import { TeamComponent } from './components/team/team.component';




// import { TeamsService } from './services/teams.service';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_teams_teams_component__WEBPACK_IMPORTED_MODULE_11__["TeamsComponent"],
                // AddTeamsComponent,
                _components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["MessagesSnackBarComponent"],
                // TeamComponent,
                _components_hash_hash_hash_component__WEBPACK_IMPORTED_MODULE_17__["HashComponent"],
                _components_hash_square_square_component__WEBPACK_IMPORTED_MODULE_18__["SquareComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _components_divisions_divisions_component__WEBPACK_IMPORTED_MODULE_22__["DivisionsComponent"],
                _dialogs_update_team_dialog_update_team_dialog_component__WEBPACK_IMPORTED_MODULE_24__["UpdateTeamDialogComponent"],
                _components_json_home_json_home_component__WEBPACK_IMPORTED_MODULE_25__["JsonHomeComponent"],
                _dialogs_display_json_dialog_display_json_dialog_component__WEBPACK_IMPORTED_MODULE_26__["DisplayJsonDialogComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            ],
            providers: [
            //TeamsService,
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["MessagesSnackBarComponent"],
                _dialogs_update_team_dialog_update_team_dialog_component__WEBPACK_IMPORTED_MODULE_24__["UpdateTeamDialogComponent"],
                _dialogs_display_json_dialog_display_json_dialog_component__WEBPACK_IMPORTED_MODULE_26__["DisplayJsonDialogComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/base/messages-snack-bar/messages-snack-bar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/base/messages-snack-bar/messages-snack-bar.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzZS9tZXNzYWdlcy1zbmFjay1iYXIvbWVzc2FnZXMtc25hY2stYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/base/messages-snack-bar/messages-snack-bar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/base/messages-snack-bar/messages-snack-bar.component.ts ***!
  \************************************************************************************/
/*! exports provided: MessagesSnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesSnackBarComponent", function() { return MessagesSnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MessagesSnackBarComponent = /** @class */ (function () {
    function MessagesSnackBarComponent(data) {
        this.data = data;
    }
    MessagesSnackBarComponent.prototype.ngOnInit = function () {
    };
    MessagesSnackBarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
    ]; };
    MessagesSnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages-snack-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages-snack-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base/messages-snack-bar/messages-snack-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages-snack-bar.component.scss */ "./src/app/components/base/messages-snack-bar/messages-snack-bar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MessagesSnackBarComponent);
    return MessagesSnackBarComponent;
}());



/***/ }),

/***/ "./src/app/components/divisions/divisions.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/divisions/divisions.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".teams-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 1%;\n  display: inline-block;\n  vertical-align: top;\n  height: 750px;\n}\n.teams-container h2 {\n  text-align: center;\n}\n.teams-list {\n  min-height: 60px;\n  overflow: hidden;\n  display: block;\n}\n.team-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  font-size: 24px;\n  border-radius: 5%;\n  width: 60%;\n  margin: auto;\n  justify-content: center;\n  color: #82775d;\n  background: linear-gradient(to top, #a79321 0%, #e3d471 50%, #a79321 100%);\n}\n.divisions-container {\n  position: relative;\n  width: 55%;\n  height: 600px;\n  margin: 2% 2% 10% 2%;\n  display: inline-block;\n}\n.division-container {\n  position: absolute;\n  border: solid #98c098 3px;\n  margin: 2%;\n  padding: 1%;\n  width: 45%;\n  height: 50%;\n}\n.division-container h2 {\n  text-align: center;\n}\n.division-container .division-list {\n  min-height: 60px;\n  overflow: hidden;\n  display: block;\n  max-height: 213px;\n}\n.division-container .division-list .division-box {\n  padding: 10px;\n  border-bottom: solid 1px #ccc;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  font-size: 14px;\n  color: rgba(104, 112, 63, 0.87);\n  background: linear-gradient(to top, #deb881, #fcea83, #deb881);\n  border-radius: 5%;\n  width: 60%;\n  margin: auto;\n  justify-content: center;\n}\n.division_B-container {\n  left: 63%;\n}\n.division_C-container {\n  top: 68%;\n}\n.division_D-container {\n  left: 63%;\n  top: 68%;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.team-box:last-child {\n  border: none;\n}\n.teams-list.cdk-drop-list-dragging .team-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.divisions-arrow-text {\n  margin-top: 1%;\n}\n.divisions-arrow-text .divisions-text {\n  color: #a5680d;\n  font-family: \"Droid serif\", serif;\n  font-size: 16px;\n  font-style: italic;\n  margin: 1% 5%;\n}\n.divisions-arrow-text .arrow-divisions {\n  vertical-align: middle;\n  width: 50px;\n  height: auto;\n  cursor: pointer;\n  margin: 1% 4%;\n}\n.divisions-arrow-text a {\n  display: inline-block;\n  margin: 0 4%;\n}\n@media only screen and (max-width: 1199px) {\n  .teams-container {\n    padding-left: 3%;\n    width: 42%;\n  }\n  .teams-container .team-box {\n    width: 80%;\n    font-size: 17px;\n  }\n\n  .divisions-container {\n    width: 45%;\n    height: 400px;\n    margin-top: 0;\n  }\n\n  .division-container {\n    width: 91%;\n    height: 40%;\n    border: solid #98c098 1px;\n  }\n  .division-container h2 {\n    font-size: 1em;\n  }\n  .division-container .division-list {\n    max-height: 108px;\n    overflow-y: scroll;\n  }\n  .division-container .division-list .division-box {\n    font-size: 14px;\n    width: 70%;\n  }\n\n  .division_B-container {\n    top: 44%;\n    left: 0;\n  }\n\n  .division_C-container {\n    top: 88%;\n  }\n\n  .division_D-container {\n    left: 0;\n    top: 132%;\n  }\n\n  .divisions-arrow-text {\n    margin: 1% 0 0 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXZpc2lvbnMvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkaXZpc2lvbnNcXGRpdmlzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXZpc2lvbnMvZGl2aXNpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFFQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7QUNESjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREtBO0VBSUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBTUEsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBR0EsY0FBQTtFQUlBLDBFQUFBO0FDakJKO0FEb0JBO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUdBLG9CQUFBO0VBQ0EscUJBQUE7QUNwQko7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFHQSxVQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRHlCSTtFQUNJLGtCQUFBO0FDdkJSO0FEMEJJO0VBSUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzNCUjtBRDZCUTtFQUdJLGFBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBR0EsK0JBQUE7RUFJQSw4REFBQTtFQUVBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ3JDWjtBRHdEQTtFQUdJLFNBQUE7QUN2REo7QURrRUE7RUFHSSxRQUFBO0FDbEVKO0FENEVBO0VBR0ksU0FBQTtFQUNBLFFBQUE7QUM1RUo7QUQwRkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUN4Rko7QUQ2RkU7RUFDRSxVQUFBO0FDMUZKO0FENkZFO0VBQ0Usc0RBQUE7QUMxRko7QUQ2RkU7RUFDRSxZQUFBO0FDMUZKO0FENkZFO0VBQ0Usc0RBQUE7QUMxRko7QUQ2RkU7RUFJRSxjQUFBO0FDN0ZKO0FEK0ZJO0VBRUksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBSUEsYUFBQTtBQ2pHUjtBRG9HSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFHQSxlQUFBO0VBRUEsYUFBQTtBQ3RHUjtBRCtHSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQzdHUjtBRGlIQTtFQUVJO0lBRUksZ0JBQUE7SUFDQSxVQUFBO0VDaEhOO0VEa0hNO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNoSFY7O0VEb0hFO0lBRUksVUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VDbEhOOztFRHFIRTtJQUVJLFVBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7RUNuSE47RURxSE07SUFDSSxjQUFBO0VDbkhWO0VEc0hNO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ3BIVjtFRHNIVTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VDcEhkOztFRDJIRTtJQUNJLFFBQUE7SUFDQSxPQUFBO0VDeEhOOztFRDJIRTtJQUNJLFFBQUE7RUN4SE47O0VEMkhFO0lBQ0ksT0FBQTtJQUNBLFNBQUE7RUN4SE47O0VEMkhFO0lBQ0ksaUJBQUE7RUN4SE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGl2aXNpb25zL2RpdmlzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgaGVpZ2h0OiA3NTBweDtcclxuXHJcbiAgICBoMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLnRlYW1zLWxpc3Qge1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gIFxyXG4udGVhbS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICAvLyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbiAgICAvLyBjb2xvcjogcmdiYSgxMDQsIDExMiwgNjMsIDAuODcpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIyNywyMTIsMTEzKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjcsMjEyLDExMywxKSAwJSwgcmdiYSgxNTcsMTM3LDE3LDEpIDUwJSwgcmdiYSgyMjcsMjEyLDExMywxKSAxMDAlKTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBjb2xvcjogI0RBQTUyMDtcclxuICAgIGNvbG9yOiAjODI3NzVkO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMsODgsOTIsMSkgMCUsIHJnYmEoMTcsMTUxLDE1NywxKSA1MCUsIHJnYmEoMyw4OCw5MiwxKSAxMDAlKTtcclxuXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTU3LDEzNywxNywxKSAwJSwgcmdiYSgyMjcsMjEyLDExMywxKSA1MCUsIHJnYmEoMTU3LDEzNywxNywxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhNzkzMjEgMCUsICNlM2Q0NzEgNTAlLCAjYTc5MzIxIDEwMCUpO1xyXG59XHJcblxyXG4uZGl2aXNpb25zLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgLy8gbWFyZ2luOiAzJSA1JTtcclxuICAgIC8vIG1hcmdpbjogMiU7XHJcbiAgICBtYXJnaW46IDIlIDIlIDEwJSAyJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRpdmlzaW9uLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogc29saWQgIzk4YzA5OCAzcHg7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIC8vIHdpZHRoOiAzMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICBoMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdmlzaW9uLWxpc3R7XHJcbiAgICAgICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIxM3B4O1xyXG5cclxuICAgICAgICAuZGl2aXNpb24tYm94e1xyXG5cclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgICAgICAgICAgLy8gY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEwNCwgMTEyLCA2MywgMC44Nyk7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMjcsMjEyLDExMyk7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjcsMjEyLDExMywxKSAwJSwgcmdiYSgxNTcsMTM3LDE3LDEpIDUwJSwgcmdiYSgyMjcsMjEyLDExMywxKSAxMDAlKTtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE1NywxMzcsMTcsMSkgMCUsIHJnYmEoMjI3LDIxMiwxMTMsMSkgNTAlLCByZ2JhKDE1NywxMzcsMTcsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkZWI4ODEsICNmY2VhODMsICNkZWI4ODEpO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZGl2aXNpb25fQS1jb250YWluZXJ7XHJcblxyXG4gICAgLy8gYmFja2dyb3VuZDogYXF1YTtcclxuICAgIC8vYm9yZGVyOiBzb2xpZCAjOThjMDk4IDNweDtcclxuXHJcblxyXG4gICAgLmRpdmlzaW9uX0EtbGlzdHtcclxuICAgICAgICAuZGl2aXNpb25fQS1ib3h7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRpdmlzaW9uX0ItY29udGFpbmVye1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQ6ICM5OGMwOTg7XHJcbiAgICBsZWZ0OiA2MyU7XHJcblxyXG4gICAgLy9ib3JkZXI6IHNvbGlkICM5OGMwOTggM3B4O1xyXG5cclxuICAgIC5kaXZpc2lvbl9CLWxpc3R7XHJcbiAgICAgICAgLmRpdmlzaW9uX0ItYm94e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXZpc2lvbl9DLWNvbnRhaW5lcntcclxuXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgdG9wOiA2OCU7XHJcbiAgICAvL2JvcmRlcjogc29saWQgIzk4YzA5OCAzcHg7XHJcblxyXG4gICAgLmRpdmlzaW9uX0MtbGlzdHtcclxuICAgICAgICAuZGl2aXNpb25fQy1ib3h7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRpdmlzaW9uX0QtY29udGFpbmVye1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIGxlZnQ6IDYzJTtcclxuICAgIHRvcDogNjglO1xyXG4gICAgLy9ib3JkZXI6IHNvbGlkICM5OGMwOTggM3B4O1xyXG5cclxuICAgIC5kaXZpc2lvbl9ELWxpc3R7XHJcbiAgICAgICAgLmRpdmlzaW9uX0QtYm94e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW1zLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudGVhbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICAuZGl2aXNpb25zLWFycm93LXRleHR7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW46IDEwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG5cclxuICAgIC5kaXZpc2lvbnMtdGV4dHtcclxuICAgICAgICAvLyBjb2xvcjogI2I0ODYwODtcclxuICAgICAgICBjb2xvcjogI2E1NjgwZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJEcm9pZCBzZXJpZlwiLCBzZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDElIDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy1kaXZpc2lvbnN7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbiAgICAgICAgd2lkdGg6IDUwcHg7IC8vIGJsdWVcclxuICAgICAgICAvLyB3aWR0aDogNjBweDsgLy8gcmVkIFxyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW46IDElIDQlO1xyXG5cclxuICAgICAgICAvLyBpbnZlcnRlclxyXG4gICAgICAgIC8vIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICAgIC8vIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDQlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cclxuICAgIC50ZWFtcy1jb250YWluZXJ7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxMzYsIDEzNik7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgIFxyXG4gICAgICAgIC50ZWFtLWJveHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2aXNpb25zLWNvbnRhaW5lcntcclxuICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDEyNCwgMjMzKTtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aXNpb24tY29udGFpbmVye1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjOThjMDk4IDFweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdmlzaW9uLWxpc3R7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwOHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAuZGl2aXNpb24tYm94e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmRpdmlzaW9uX0ItY29udGFpbmVye1xyXG4gICAgICAgIHRvcDogNDQlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdmlzaW9uX0MtY29udGFpbmVye1xyXG4gICAgICAgIHRvcDogODglO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXZpc2lvbl9ELWNvbnRhaW5lcntcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMTMyJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aXNpb25zLWFycm93LXRleHR7XHJcbiAgICAgICAgbWFyZ2luOiAxJSAwIDAgNSU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuIiwiLnRlYW1zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDElO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogNzUwcHg7XG59XG4udGVhbXMtY29udGFpbmVyIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVhbXMtbGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGVhbS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM4Mjc3NWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhNzkzMjEgMCUsICNlM2Q0NzEgNTAlLCAjYTc5MzIxIDEwMCUpO1xufVxuXG4uZGl2aXNpb25zLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiAyJSAyJSAxMCUgMiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRpdmlzaW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBzb2xpZCAjOThjMDk4IDNweDtcbiAgbWFyZ2luOiAyJTtcbiAgcGFkZGluZzogMSU7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogNTAlO1xufVxuLmRpdmlzaW9uLWNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZpc2lvbi1jb250YWluZXIgLmRpdmlzaW9uLWxpc3Qge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMjEzcHg7XG59XG4uZGl2aXNpb24tY29udGFpbmVyIC5kaXZpc2lvbi1saXN0IC5kaXZpc2lvbi1ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMTA0LCAxMTIsIDYzLCAwLjg3KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2RlYjg4MSwgI2ZjZWE4MywgI2RlYjg4MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2aXNpb25fQi1jb250YWluZXIge1xuICBsZWZ0OiA2MyU7XG59XG4uZGl2aXNpb25fQy1jb250YWluZXIge1xuICB0b3A6IDY4JTtcbn1cbi5kaXZpc2lvbl9ELWNvbnRhaW5lciB7XG4gIGxlZnQ6IDYzJTtcbiAgdG9wOiA2OCU7XG59XG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4udGVhbS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRlYW1zLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudGVhbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5kaXZpc2lvbnMtYXJyb3ctdGV4dCB7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuLmRpdmlzaW9ucy1hcnJvdy10ZXh0IC5kaXZpc2lvbnMtdGV4dCB7XG4gIGNvbG9yOiAjYTU2ODBkO1xuICBmb250LWZhbWlseTogXCJEcm9pZCBzZXJpZlwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMSUgNSU7XG59XG4uZGl2aXNpb25zLWFycm93LXRleHQgLmFycm93LWRpdmlzaW9ucyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxJSA0JTtcbn1cbi5kaXZpc2lvbnMtYXJyb3ctdGV4dCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC50ZWFtcy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMyU7XG4gICAgd2lkdGg6IDQyJTtcbiAgfVxuICAudGVhbXMtY29udGFpbmVyIC50ZWFtLWJveCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICAuZGl2aXNpb25zLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuZGl2aXNpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTElO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJvcmRlcjogc29saWQgIzk4YzA5OCAxcHg7XG4gIH1cbiAgLmRpdmlzaW9uLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmRpdmlzaW9uLWNvbnRhaW5lciAuZGl2aXNpb24tbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMTA4cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG4gIC5kaXZpc2lvbi1jb250YWluZXIgLmRpdmlzaW9uLWxpc3QgLmRpdmlzaW9uLWJveCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuZGl2aXNpb25fQi1jb250YWluZXIge1xuICAgIHRvcDogNDQlO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAuZGl2aXNpb25fQy1jb250YWluZXIge1xuICAgIHRvcDogODglO1xuICB9XG5cbiAgLmRpdmlzaW9uX0QtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMTMyJTtcbiAgfVxuXG4gIC5kaXZpc2lvbnMtYXJyb3ctdGV4dCB7XG4gICAgbWFyZ2luOiAxJSAwIDAgNSU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/divisions/divisions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/divisions/divisions.component.ts ***!
  \*************************************************************/
/*! exports provided: DivisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionsComponent", function() { return DivisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");




var DivisionsComponent = /** @class */ (function () {
    function DivisionsComponent(teamSrvc) {
        this.teamSrvc = teamSrvc;
        this.teams = [];
        this.all_teams = [];
        this.division_A_teams = [];
        this.division_B_teams = [];
        this.division_C_teams = [];
        this.division_D_teams = [];
    }
    DivisionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            if (localStorage.getItem('teams') != null) {
                var t = JSON.parse(localStorage.getItem('teams'));
                this.teams = t;
                this.setLists(this.teams);
            }
            else {
                this.teamSrvc.getTeams().subscribe(function (ts) {
                    localStorage.setItem('teams', JSON.stringify(ts));
                    _this.teams = ts;
                    _this.setLists(_this.teams);
                });
            }
        }
        catch (_a) {
            console.log('file: division.component.ts; Method: ngOnInit');
        }
    };
    DivisionsComponent.prototype.setLists = function (_teams) {
        try {
            this.all_teams = _teams.filter(function (t) { return t.division < 1; });
            this.division_A_teams = _teams.filter(function (t) { return t.division == 1; });
            this.division_B_teams = _teams.filter(function (t) { return t.division == 2; });
            this.division_C_teams = _teams.filter(function (t) { return t.division == 3; });
            this.division_D_teams = _teams.filter(function (t) { return t.division == 4; });
        }
        catch (_a) {
            console.log('file: division.component.ts; Method: setLists');
        }
    };
    DivisionsComponent.prototype.drop = function (event) {
        try {
            if (event.previousContainer === event.container) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                var _divisionNumber = this.getNewDivisionNumber(event);
                var _draggedTeam_1 = event.container.data[event.currentIndex];
                this.teams.find(function (t) { return t.id == _draggedTeam_1.id; }).division = _divisionNumber;
                localStorage.setItem('teams', JSON.stringify(this.teams));
            }
        }
        catch (_a) {
            console.log('file: division.component.ts; Method: drop');
        }
    };
    DivisionsComponent.prototype.getNewDivisionNumber = function (event) {
        try {
            console.log('event.container');
            console.log(event.container);
            var _divisionNumber = 0;
            if (event.container.element.nativeElement.classList.contains('teams-list')) {
                _divisionNumber = 0;
            }
            else if (event.container.element.nativeElement.classList.contains('division_A-list')) {
                _divisionNumber = 1;
            }
            else if (event.container.element.nativeElement.classList.contains('division_B-list')) {
                _divisionNumber = 2;
            }
            else if (event.container.element.nativeElement.classList.contains('division_C-list')) {
                _divisionNumber = 3;
            }
            else if (event.container.element.nativeElement.classList.contains('division_D-list')) {
                _divisionNumber = 4;
            }
            else {
                _divisionNumber = -1;
            }
            // switch(event.container.id) { 
            //   case 'cdk-drop-list-0': { 
            //     _divisionNumber = 0; 
            //     break; 
            //   } 
            //   case 'cdk-drop-list-1': { 
            //     _divisionNumber = 1; 
            //     break; 
            //   } 
            //   case 'cdk-drop-list-2': { 
            //     _divisionNumber = 2;  
            //     break; 
            //   } 
            //   case 'cdk-drop-list-3': { 
            //     _divisionNumber = 3; 
            //     break; 
            //   }  
            //   case 'cdk-drop-list-4': { 
            //     _divisionNumber = 4; 
            //     break; 
            //   } 
            //   default: { 
            //     _divisionNumber = -1; 
            //     console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
            //     console.log('event.container.id');
            //     console.log(event.container.id);
            //     break; 
            //   } 
            // }
            return _divisionNumber;
        }
        catch (_a) {
            console.log('file: division.component.ts; Method: getNewDivisionNumber');
        }
    };
    DivisionsComponent.ctorParameters = function () { return [
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] }
    ]; };
    DivisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-divisions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./divisions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/divisions/divisions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./divisions.component.scss */ "./src/app/components/divisions/divisions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"]])
    ], DivisionsComponent);
    return DivisionsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-wrapper {\n  background-color: #8d6225;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItd3JhcHBlcntcclxuICAgIC8vIGJhY2tncm91bmQ6ICNhMjMxMzE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ2MjI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvLyAuZm9vdGVye1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG59IiwiLmZvb3Rlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkNjIyNTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/hash/hash/hash.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/hash/hash/hash.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  position: relative;\n  display: inline-block;\n  width: 300px;\n  height: 300px;\n  border: solid 10px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXNoL2hhc2gvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoYXNoXFxoYXNoXFxoYXNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hhc2gvaGFzaC9oYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFzaC9oYXNoL2hhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBoZWlnaHQ6IDMwMHB4OyBcclxuICAgIGJvcmRlcjogc29saWQgMTBweCBibGFjaztcclxufSIsIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiBzb2xpZCAxMHB4IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/hash/hash/hash.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/hash/hash/hash.component.ts ***!
  \********************************************************/
/*! exports provided: HashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashComponent", function() { return HashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HashComponent = /** @class */ (function () {
    function HashComponent() {
        this.title = 'Yaniv Exercise Middle Project';
        this.squares = [];
        this.isXTurn = true;
        this.isGameFinished = false;
        this.squares = this.getSquares();
    }
    HashComponent.prototype.ngOnInit = function () {
    };
    HashComponent.prototype.getSquares = function () {
        var _squares = [];
        _squares = [
            { id: 1, isEmpty: true, isX: false, line: 1, column: 1, isWin: false },
            { id: 2, isEmpty: true, isX: false, line: 1, column: 2, isWin: false },
            { id: 3, isEmpty: true, isX: false, line: 1, column: 3, isWin: false },
            { id: 4, isEmpty: true, isX: false, line: 2, column: 1, isWin: false },
            { id: 5, isEmpty: true, isX: false, line: 2, column: 2, isWin: false },
            { id: 6, isEmpty: true, isX: false, line: 2, column: 3, isWin: false },
            { id: 7, isEmpty: true, isX: false, line: 3, column: 1, isWin: false },
            { id: 8, isEmpty: true, isX: false, line: 3, column: 2, isWin: false },
            { id: 9, isEmpty: true, isX: false, line: 3, column: 3, isWin: false },
        ];
        return _squares;
    };
    HashComponent.prototype.Restart = function () {
        this.squares = this.getSquares();
        this.isGameFinished = false;
    };
    HashComponent.prototype.ChangeTurn = function () {
        this.isXTurn = !this.isXTurn;
    };
    HashComponent.prototype.updateSquare = function (_square) {
        this.squares.forEach(function (element) {
            if (element.id == _square.id) {
                element = _square;
            }
        });
        this.checkFinishGame(_square.line, _square.column, _square.isX);
        console.log("Final: ");
        console.log(this.squares);
    };
    HashComponent.prototype.checkFinishGame = function (line, column, isX) {
        var continueTheGame = false;
        continueTheGame = this.checkLine(line, isX);
        if (continueTheGame == false) {
            this.isGameFinished = true;
        }
        else {
            continueTheGame = this.checkColumn(column, isX);
            if (continueTheGame == false) {
                this.isGameFinished = true;
            }
            else {
                continueTheGame = this.checkInclined_1(line, column, isX);
                if (!continueTheGame) {
                    this.isGameFinished = true;
                }
                else {
                    continueTheGame = this.checkInclined_2(line, column, isX);
                    if (!continueTheGame) {
                        this.isGameFinished = true;
                    }
                }
            }
        }
        if (!continueTheGame) {
            //this.squares.find(s => s.isWin == true);
            // if(this.isXTurn){
            //   alert('0 Won!');
            // } else{
            //   alert('X Won!');
            // }
        }
    };
    HashComponent.prototype.checkInclined_2 = function (line, column, isX) {
        var continueTheGame = false;
        var _sInclined_2 = [];
        if (this.squares.find(function (s) { return s.line == 1 && s.column == 3 && !s.isEmpty; }) != undefined) {
            _sInclined_2.push(this.squares.find(function (s) { return s.line == 1 && s.column == 3 && !s.isEmpty; }));
        }
        if (this.squares.find(function (s) { return s.line == 2 && s.column == 2 && !s.isEmpty; }) != undefined) {
            _sInclined_2.push(this.squares.find(function (s) { return s.line == 2 && s.column == 2 && !s.isEmpty; }));
        }
        if (this.squares.find(function (s) { return s.line == 3 && s.column == 1 && !s.isEmpty; }) != undefined) {
            _sInclined_2.push(this.squares.find(function (s) { return s.line == 3 && s.column == 1 && !s.isEmpty; }));
        }
        if (_sInclined_2.length == 3) {
            _sInclined_2.forEach(function (element) {
                if (element.isX != isX) {
                    continueTheGame = true;
                }
            });
        }
        else {
            continueTheGame = true;
        }
        if (!continueTheGame) {
            this.setWinSquares(_sInclined_2);
        }
        return continueTheGame;
    };
    HashComponent.prototype.checkInclined_1 = function (line, column, isX) {
        var continueTheGame = false;
        var _sInclined_1 = [];
        if (this.squares.find(function (s) { return s.line == 1 && s.column == 1 && !s.isEmpty; }) != undefined) {
            _sInclined_1.push(this.squares.find(function (s) { return s.line == 1 && s.column == 1 && !s.isEmpty; }));
        }
        if (this.squares.find(function (s) { return s.line == 2 && s.column == 2 && !s.isEmpty; }) != undefined) {
            _sInclined_1.push(this.squares.find(function (s) { return s.line == 2 && s.column == 2 && !s.isEmpty; }));
        }
        if (this.squares.find(function (s) { return s.line == 3 && s.column == 3 && !s.isEmpty; }) != undefined) {
            _sInclined_1.push(this.squares.find(function (s) { return s.line == 3 && s.column == 3 && !s.isEmpty; }));
        }
        if (_sInclined_1.length == 3) {
            _sInclined_1.forEach(function (element) {
                if (element.isX != isX) {
                    continueTheGame = true;
                }
            });
        }
        else {
            continueTheGame = true;
        }
        if (!continueTheGame) {
            this.setWinSquares(_sInclined_1);
        }
        return continueTheGame;
    };
    HashComponent.prototype.checkColumn = function (column, isX) {
        var _sColumn;
        _sColumn = this.squares.filter(function (s) { return s.column == column && !s.isEmpty; });
        var continueTheGame = false;
        if (_sColumn.length == 3) {
            _sColumn.forEach(function (element) {
                if (element.isX != isX) {
                    continueTheGame = true;
                }
            });
        }
        else {
            continueTheGame = true;
        }
        if (!continueTheGame) {
            this.setWinSquares(_sColumn);
        }
        return continueTheGame;
    };
    HashComponent.prototype.checkLine = function (line, isX) {
        var _sLine;
        _sLine = this.squares.filter(function (s) { return s.line == line && !s.isEmpty; });
        var continueTheGame = false;
        if (_sLine.length == 3) {
            _sLine.forEach(function (element) {
                if (element.isX != isX) {
                    continueTheGame = true;
                }
            });
        }
        else {
            continueTheGame = true;
        }
        if (!continueTheGame) {
            this.setWinSquares(_sLine);
        }
        return continueTheGame;
    };
    HashComponent.prototype.setWinSquares = function (squares_win) {
        var _this = this;
        squares_win.forEach(function (element) {
            _this.squares.find(function (s) { return s.id == element.id; }).isWin = true;
        });
    };
    HashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hash',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/hash/hash.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hash.component.scss */ "./src/app/components/hash/hash/hash.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HashComponent);
    return HashComponent;
}());



/***/ }),

/***/ "./src/app/components/hash/square/square.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/hash/square/square.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".square {\n  width: 90px;\n  height: 87px;\n  /* background: red; */\n  position: relative;\n  display: inline-block;\n  margin: 2px;\n  border: solid 3px black;\n}\n\n.o {\n  background-image: url('red_o.png');\n  background-size: cover;\n}\n\n.x {\n  background-image: url('blue_x.jpg');\n  background-size: cover;\n}\n\n.square-win {\n  border-color: yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXNoL3NxdWFyZS9DOlxcVXNlcnNcXG1vaXNlXFxEZXNrdG9wXFxBbmd1bGFyXFxBbmd1bGFyIEVzdHVkb3NcXEFuZ3VsYXIgRXN0dWRvc1xcVGVhbU1hbmFnZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhc2hcXHNxdWFyZVxcc3F1YXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hhc2gvc3F1YXJlL3NxdWFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYXNoL3NxdWFyZS9zcXVhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJle1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4ub3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVkX28ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuLnh7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsdWVfeC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc3F1YXJlLXdpbntcclxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XHJcbn0iLCIuc3F1YXJlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogODdweDtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xufVxuXG4ubyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVkX28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ueCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmx1ZV94LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNxdWFyZS13aW4ge1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/hash/square/square.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/hash/square/square.component.ts ***!
  \************************************************************/
/*! exports provided: SquareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareComponent", function() { return SquareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_squareModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/squareModel */ "./src/app/Models/squareModel.ts");



var SquareComponent = /** @class */ (function () {
    function SquareComponent() {
        this.changeTurn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateSquare = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notEmptyX = false;
        this.notEmptyO = false;
    }
    SquareComponent.prototype.ngOnInit = function () {
        //console.log(this.square);
    };
    SquareComponent.prototype.selectSquare = function () {
        if (!this.isFinished) {
            if (this.square.isEmpty) {
                this.square.isEmpty = false;
                if (this.isXTurn) {
                    this.square.isX = true;
                    this.notEmptyX = true;
                }
                else {
                    this.square.isX = false;
                    this.notEmptyO = true;
                }
            }
            this.changeTurn.emit('');
            this.updateSquare.emit(this.square);
        }
        else {
            alert('END');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Models_squareModel__WEBPACK_IMPORTED_MODULE_2__["squareModel"])
    ], SquareComponent.prototype, "square", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SquareComponent.prototype, "changeTurn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SquareComponent.prototype, "isXTurn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SquareComponent.prototype, "updateSquare", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SquareComponent.prototype, "isFinished", void 0);
    SquareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-square',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./square.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hash/square/square.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./square.component.scss */ "./src/app/components/hash/square/square.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SquareComponent);
    return SquareComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  height: 81px;\n  line-height: 72px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 50px;\n  background-color: #f6cd90;\n}\n\n.wraper-title-page {\n  background-color: #deb881;\n}\n\n.title-page {\n  text-align: center;\n  width: 275px;\n  margin: auto;\n  color: #deb881;\n  background-color: #efe9cc;\n}\n\n.menu-btn {\n  background-color: #fcea83;\n  margin: 0 20px;\n}\n\n.menu-btn-text {\n  color: #a23131;\n}\n\n.reset-btn {\n  background-color: #a23131;\n  color: #fcea83;\n}\n\n@media only screen and (max-width: 480px) {\n  .menu-btn {\n    margin: 0 1%;\n    padding: 0 1%;\n  }\n}\n\n@media (max-width: 1199px) and (min-width: 481px) {\n  .menu-btn {\n    margin: 0 1%;\n    padding: 0 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFHQSx5QkFBQTtBQ0ZKOztBREtFO0VBR0UseUJBQUE7QUNKSjs7QURPRTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFNQSxjQUFBO0VBQ0EseUJBQUE7QUNWSjs7QURhRTtFQUlFLHlCQUFBO0VBQ0EsY0FBQTtBQ2JKOztBRGdCRTtFQUVFLGNBQUE7QUNkSjs7QURrQkU7RUFHRSx5QkFBQTtFQUNBLGNBQUE7QUNqQko7O0FEcUJFO0VBRUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ25CSjtBQUNGOztBRHVCRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNyQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBoZWlnaHQ6IDgxcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjU2NzY3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWFjNTAzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q5MDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBlci10aXRsZS1wYWdle1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2QyNjU2NTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwZDgzODk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGViODgxO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtcGFnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gY29sb3I6ICNmNTY3Njc7XHJcblxyXG4gICAgLy8gY29sb3I6ICNhMjMxMzE7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmVkODFhO1xyXG5cclxuICAgIGNvbG9yOiAjZGViODgxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTljYztcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtYnRuIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNiYTc4ZjE7XHJcbiAgICAvLyBtYXJnaW46IDAgMjBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWRiMjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlYTgzO1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWJ0bi10ZXh0e1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICNhMjMxMzE7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlc2V0LWJ0bntcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNhMjMxMzE7XHJcbiAgICAvLyBjb2xvcjogI2Y5ZGIyNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjMxMzE7XHJcbiAgICBjb2xvcjogI2ZjZWE4MztcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLm1lbnUtYnRuIHtcclxuICAgICAgbWFyZ2luOiAwIDElO1xyXG4gICAgICBwYWRkaW5nOiAwIDElO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjExOTlweCkgYW5kIChtaW4td2lkdGg6NDgxcHgpIHtcclxuICAgIC5tZW51LWJ0biB7XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgICAgcGFkZGluZzogMCAxJTtcclxuICAgIH1cclxuICB9IiwiLm5hdmJhciB7XG4gIGhlaWdodDogODFweDtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q5MDtcbn1cblxuLndyYXBlci10aXRsZS1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlYjg4MTtcbn1cblxuLnRpdGxlLXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNzVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2RlYjg4MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTljYztcbn1cblxuLm1lbnUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZWE4MztcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5tZW51LWJ0bi10ZXh0IHtcbiAgY29sb3I6ICNhMjMxMzE7XG59XG5cbi5yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIzMTMxO1xuICBjb2xvcjogI2ZjZWE4Mztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWVudS1idG4ge1xuICAgIG1hcmdpbjogMCAxJTtcbiAgICBwYWRkaW5nOiAwIDElO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgLm1lbnUtYnRuIHtcbiAgICBtYXJnaW46IDAgMSU7XG4gICAgcGFkZGluZzogMCAxJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(teamSrvc) {
        this.teamSrvc = teamSrvc;
        this.title = 'Teams Manager';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.resetApp = function () {
        try {
            this.teamSrvc.getTeams().subscribe(function (ts) {
                localStorage.setItem('teams', JSON.stringify(ts));
                window.location.reload();
            });
        }
        catch (_a) {
            console.log('file: header.component.ts; Method: resetApp');
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-content {\n  margin: 2% 6%;\n}\n\n.inner-text {\n  margin: 1%;\n}\n\n.inner-text p {\n  margin: 3% 0;\n}\n\n.enjoy {\n  text-align: right;\n  padding: 0% 2% 2% 0;\n  position: relative;\n}\n\n.enjoy h3 {\n  display: inline-block;\n  position: absolute;\n  bottom: 13px;\n  right: 56px;\n}\n\n@media only screen and (max-width: 480px) {\n  .enjoy {\n    padding-top: 8%;\n  }\n}\n\n@media (max-width: 1199px) and (min-width: 481px) {\n  .enjoy {\n    padding-top: 8%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcbW9pc2VcXERlc2t0b3BcXEFuZ3VsYXJcXEFuZ3VsYXIgRXN0dWRvc1xcQW5ndWxhciBFc3R1ZG9zXFxUZWFtTWFuYWdlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FERUk7RUFDSSxZQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RSOztBRE1BO0VBRUk7SUFDSSxlQUFBO0VDSk47QUFDRjs7QURRRTtFQUNFO0lBQ0ksZUFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnR7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgbWFyZ2luOiAyJSA2JTtcclxufVxyXG5cclxuLmlubmVyLXRleHR7XHJcbiAgICBtYXJnaW46IDElO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW5qb3l7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAlIDIlIDIlIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDU2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLmVuam95IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6MTE5OXB4KSBhbmQgKG1pbi13aWR0aDo0ODFweCkge1xyXG4gICAgLmVuam95IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICB9XHJcbiAgfSIsIi5ob21lLWNvbnRlbnQge1xuICBtYXJnaW46IDIlIDYlO1xufVxuXG4uaW5uZXItdGV4dCB7XG4gIG1hcmdpbjogMSU7XG59XG4uaW5uZXItdGV4dCBwIHtcbiAgbWFyZ2luOiAzJSAwO1xufVxuXG4uZW5qb3kge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCUgMiUgMiUgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVuam95IGgzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTNweDtcbiAgcmlnaHQ6IDU2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmVuam95IHtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAuZW5qb3kge1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/json-home/json-home.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/json-home/json-home.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".json-types-wrapers {\n  margin: auto;\n  width: 80%;\n  margin-top: 3%;\n}\n.json-types-wrapers .list-wraper {\n  display: flex;\n  justify-content: center;\n}\n.json-types-wrapers .list-wraper .json-home-wrap-list-item {\n  width: 25%;\n  padding: 2% 0;\n  font-size: 1.5em;\n  margin: 3% 5%;\n  border-width: 3px;\n  border-style: solid;\n  -o-border-image: linear-gradient(to bottom, #d79b45, rgba(0, 0, 0, 0)) 1 100%;\n     border-image: linear-gradient(to bottom, #d79b45, rgba(0, 0, 0, 0)) 1 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qc29uLWhvbWUvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxqc29uLWhvbWVcXGpzb24taG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qc29uLWhvbWUvanNvbi1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQ1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUdBLGlCQUFBO0VBQ1YsbUJBQUE7RUFDQSw2RUFDRTtLQURGLDBFQUNFO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pzb24taG9tZS9qc29uLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanNvbi10eXBlcy13cmFwZXJze1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG5cclxuICAgIC5saXN0LXdyYXBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuanNvbi1ob21lLXdyYXAtbGlzdC1pdGVte1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMlIDUlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWltYWdlOiBcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLCBcclxuICAgICAgI2Q3OWI0NSwgXHJcbiAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICkgMSAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLmpzb24tdHlwZXMtd3JhcGVycyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4uanNvbi10eXBlcy13cmFwZXJzIC5saXN0LXdyYXBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmpzb24tdHlwZXMtd3JhcGVycyAubGlzdC13cmFwZXIgLmpzb24taG9tZS13cmFwLWxpc3QtaXRlbSB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDIlIDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMyUgNSU7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkNzliNDUsIHJnYmEoMCwgMCwgMCwgMCkpIDEgMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/json-home/json-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/json-home/json-home.component.ts ***!
  \*************************************************************/
/*! exports provided: JsonHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHomeComponent", function() { return JsonHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dialogs_display_json_dialog_display_json_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/display-json-dialog/display-json-dialog.component */ "./src/app/dialogs/display-json-dialog/display-json-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");
/* harmony import */ var src_app_Models_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/utils */ "./src/app/Models/utils.ts");






var JsonHomeComponent = /** @class */ (function () {
    function JsonHomeComponent(teamSrvc, dialog) {
        this.teamSrvc = teamSrvc;
        this.dialog = dialog;
    }
    JsonHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamSrvc.getTeams().subscribe(function (t) {
            _this.teams = t;
        });
    };
    JsonHomeComponent.prototype.openJson = function (type) {
        try {
            var _data = void 0;
            switch (type) {
                case 1:
                    _data = {
                        displayJsonType: src_app_Models_utils__WEBPACK_IMPORTED_MODULE_5__["displayJsonType"].SimpleJson,
                        teams: this.teams,
                    };
                    break;
                case 2:
                    _data = {
                        displayJsonType: src_app_Models_utils__WEBPACK_IMPORTED_MODULE_5__["displayJsonType"].BeautyJson,
                        teams: this.teams,
                    };
                    break;
                case 3:
                    _data = {
                        displayJsonType: src_app_Models_utils__WEBPACK_IMPORTED_MODULE_5__["displayJsonType"].ObjectFormatJson,
                        teams: this.teams,
                    };
                    break;
                default:
                    break;
            }
            var dialogRef = this.dialog.open(src_app_dialogs_display_json_dialog_display_json_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DisplayJsonDialogComponent"], {
                height: '650px',
                width: '600px',
                data: _data
            });
        }
        catch (e) {
            console.log('file: json-home.component.ts; Method: openJson ' + e);
        }
    };
    JsonHomeComponent.ctorParameters = function () { return [
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    JsonHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-json-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./json-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/json-home/json-home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./json-home.component.scss */ "./src/app/components/json-home/json-home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], JsonHomeComponent);
    return JsonHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/teams/teams.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/teams/teams.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-teams-wrapers {\n  margin: auto;\n  width: 80%;\n}\n.table-teams-wrapers .teams-toobar-left {\n  display: inline-table;\n  margin: 10px 0;\n}\n.table-teams-wrapers .teams-toobar-left .btn-add {\n  vertical-align: middle;\n  width: 50px;\n  height: auto;\n  margin: 10px 28px 10px 0;\n}\n.table-teams-wrapers .teams-toobar-left .btn-add:hover {\n  width: 60px;\n  cursor: pointer;\n}\n.table-teams-wrapers .divisions-arrow-text {\n  float: right;\n  text-align: center;\n  margin: 10px 0;\n}\n.table-teams-wrapers .divisions-arrow-text .divisions-text {\n  color: #a5680d;\n  font-family: \"Droid serif\", serif;\n  font-size: 25px;\n  font-style: italic;\n}\n.table-teams-wrapers .divisions-arrow-text .arrow-divisions {\n  vertical-align: middle;\n  width: 100px;\n  height: auto;\n  float: right;\n  transform: scaleX(-1);\n}\n.table-teams-wrapers .divisions-arrow-text .arrow-divisions:hover {\n  width: 120px;\n  cursor: pointer;\n}\n.table-teams-wrapers .table-teams {\n  width: 100%;\n}\n.table-teams-wrapers .table-teams .mat-header-row {\n  background-color: #d4a35e;\n}\n.table-teams-wrapers .table-teams .mat-row {\n  background-color: #faf4d1;\n}\n.table-teams-wrapers ::ng-deep .mat-paginator {\n  background-color: #fcf9e8;\n}\n.table-teams-wrapers .team-name a {\n  text-decoration: none;\n  color: inherit;\n  font-weight: bold;\n}\n.table-teams-wrapers .team-name:hover {\n  font-size: 18px;\n  cursor: pointer;\n}\n@media only screen and (max-width: 480px) {\n  .table-teams-wrapers {\n    width: 90%;\n  }\n}\n@media (max-width: 1199px) and (min-width: 481px) {\n  .enjoy {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtcy9DOlxcVXNlcnNcXG1vaXNlXFxEZXNrdG9wXFxBbmd1bGFyXFxBbmd1bGFyIEVzdHVkb3NcXEFuZ3VsYXIgRXN0dWRvc1xcVGVhbU1hbmFnZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYW1zXFx0ZWFtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFtcy90ZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEQ1E7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNDWjtBREVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNBWjtBRElJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FESVE7RUFFSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRE1RO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFNQSxxQkFBQTtBQ1BaO0FEVVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1JaO0FEY0k7RUFDSSxXQUFBO0FDWlI7QURjUTtFQUVJLHlCQUFBO0FDYlo7QURnQlE7RUFFSSx5QkFBQTtBQ2ZaO0FEbUJJO0VBRUkseUJBQUE7QUNsQlI7QURzQkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3BCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDckJSO0FEMEJBO0VBRUk7SUFDSSxVQUFBO0VDeEJOO0FBQ0Y7QUQ0QkU7RUFDRTtJQUNJLFVBQUE7RUMxQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbXMvdGVhbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtdGVhbXMtd3JhcGVyc3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgLnRlYW1zLXRvb2Jhci1sZWZ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIFxyXG4gICAgICAgIC5idG4tYWRkIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4OyBcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMjhweCAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWFkZDpob3ZlcntcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdmlzaW9ucy1hcnJvdy10ZXh0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIC5kaXZpc2lvbnMtdGV4dHtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICNiNDg2MDg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTU2ODBkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJEcm9pZCBzZXJpZlwiLCBzZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3ctZGl2aXNpb25ze1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4OyAvLyBibHVlXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiA2MHB4OyAvLyByZWQgXHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gaW52ZXJ0ZXJcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvdy1kaXZpc2lvbnM6aG92ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXRlYW1ze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAubWF0LWhlYWRlci1yb3d7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6I2ZhZGEyNDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YTM1ZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubWF0LXJvd3tcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjojZjVlOWEzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWY0ZDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LXBhZ2luYXRvciB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NkZjRhOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOWU4O1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICAudGVhbS1uYW1lIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudGVhbS1uYW1lOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLnRhYmxlLXRlYW1zLXdyYXBlcnN7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDoxMTk5cHgpIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XHJcbiAgICAuZW5qb3kge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIudGFibGUtdGVhbXMtd3JhcGVycyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cbi50YWJsZS10ZWFtcy13cmFwZXJzIC50ZWFtcy10b29iYXItbGVmdCB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAudGVhbXMtdG9vYmFyLWxlZnQgLmJ0bi1hZGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggMjhweCAxMHB4IDA7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAudGVhbXMtdG9vYmFyLWxlZnQgLmJ0bi1hZGQ6aG92ZXIge1xuICB3aWR0aDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYmxlLXRlYW1zLXdyYXBlcnMgLmRpdmlzaW9ucy1hcnJvdy10ZXh0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnRhYmxlLXRlYW1zLXdyYXBlcnMgLmRpdmlzaW9ucy1hcnJvdy10ZXh0IC5kaXZpc2lvbnMtdGV4dCB7XG4gIGNvbG9yOiAjYTU2ODBkO1xuICBmb250LWZhbWlseTogXCJEcm9pZCBzZXJpZlwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAuZGl2aXNpb25zLWFycm93LXRleHQgLmFycm93LWRpdmlzaW9ucyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAuZGl2aXNpb25zLWFycm93LXRleHQgLmFycm93LWRpdmlzaW9uczpob3ZlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYmxlLXRlYW1zLXdyYXBlcnMgLnRhYmxlLXRlYW1zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAudGFibGUtdGVhbXMgLm1hdC1oZWFkZXItcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YTM1ZTtcbn1cbi50YWJsZS10ZWFtcy13cmFwZXJzIC50YWJsZS10ZWFtcyAubWF0LXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZDE7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyA6Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOWU4O1xufVxuLnRhYmxlLXRlYW1zLXdyYXBlcnMgLnRlYW0tbmFtZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGFibGUtdGVhbXMtd3JhcGVycyAudGVhbS1uYW1lOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRhYmxlLXRlYW1zLXdyYXBlcnMge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAuZW5qb3kge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/teams/teams.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/teams/teams.component.ts ***!
  \*****************************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialogs_update_team_dialog_update_team_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialogs/update-team-dialog/update-team-dialog.component */ "./src/app/dialogs/update-team-dialog/update-team-dialog.component.ts");









var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(_messagesService, teamSrvc, matDialog) {
        this._messagesService = _messagesService;
        this.teamSrvc = teamSrvc;
        this.matDialog = matDialog;
        this.displayedColumns = ['name', 'country', 'money', 'titles', 'division', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            if (localStorage.getItem('teams') != null) {
                var t = JSON.parse(localStorage.getItem('teams'));
                this.teams = t;
                this.refreshDataSource();
            }
            else {
                this.teamSrvc.getTeams().subscribe(function (t) {
                    localStorage.setItem('teams', JSON.stringify(t));
                    _this.teams = t;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.teams);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                });
            }
        }
        catch (_a) {
            console.log('file: teams.component.ts; Method: ngOnInit');
        }
    };
    TeamsComponent.prototype.refreshDataSource = function () {
        try {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.teams);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        catch (_a) {
            console.log('file: teams.component.ts; Method: refreshDataSource');
        }
    };
    TeamsComponent.prototype.applyFilter = function (filterValue) {
        try {
            this.dataSource.filter = filterValue.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
        catch (_a) {
            console.log('file: teams.component.ts; Method: applyFilter');
        }
    };
    TeamsComponent.prototype.delete = function (_id) {
        try {
            var _name = this.teams.find(function (t) { return t.id == _id; }).name;
            this.teams = this.teamSrvc.deleteTeam(_id, this.teams);
            this.refreshDataSource();
            this._messagesService.confirmMessage(_name + " was Deleted");
        }
        catch (e) {
            console.log('file: teams.component.ts; Method: delete ' + e);
        }
    };
    TeamsComponent.prototype.openDialogAddOrUpdate = function (team) {
        var _this = this;
        try {
            var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
            dialogConfig.disableClose = false;
            dialogConfig.height = "500px";
            dialogConfig.width = "540px";
            dialogConfig.panelClass = 'team-detail-dialog';
            if (team != null) {
                dialogConfig.data = team;
            }
            var dialogRef = this.matDialog.open(src_app_dialogs_update_team_dialog_update_team_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UpdateTeamDialogComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe(function (result) {
                if (localStorage.getItem('teams') != null) {
                    var t = JSON.parse(localStorage.getItem('teams'));
                    _this.teams = t;
                    _this.refreshDataSource();
                }
            });
        }
        catch (error) {
            console.log('file: teams.component.ts; Method: openDialogUpdate' + error);
        }
    };
    TeamsComponent.ctorParameters = function () { return [
        { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] },
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TeamsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], TeamsComponent.prototype, "sort", void 0);
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teams/teams.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teams.component.scss */ "./src/app/components/teams/teams.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"],
            src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/display-json-dialog/display-json-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/display-json-dialog/display-json-dialog.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-dialog {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 6%;\n  font-size: 26px;\n  background: #bd770f;\n  color: #fbead0;\n}\n\n.dialog-wrapers {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kaXNwbGF5LWpzb24tZGlhbG9nL0M6XFxVc2Vyc1xcbW9pc2VcXERlc2t0b3BcXEFuZ3VsYXJcXEFuZ3VsYXIgRXN0dWRvc1xcQW5ndWxhciBFc3R1ZG9zXFxUZWFtTWFuYWdlci9zcmNcXGFwcFxcZGlhbG9nc1xcZGlzcGxheS1qc29uLWRpYWxvZ1xcZGlzcGxheS1qc29uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9ncy9kaXNwbGF5LWpzb24tZGlhbG9nL2Rpc3BsYXktanNvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZGlzcGxheS1qc29uLWRpYWxvZy9kaXNwbGF5LWpzb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWRpYWxvZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNiZDc3MGY7XHJcbiAgICBjb2xvcjogI2ZiZWFkMDtcclxufVxyXG5cclxuLmRpYWxvZy13cmFwZXJze1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG4iLCIudGl0bGUtZGlhbG9nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNiZDc3MGY7XG4gIGNvbG9yOiAjZmJlYWQwO1xufVxuXG4uZGlhbG9nLXdyYXBlcnMge1xuICBtYXJnaW46IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dialogs/display-json-dialog/display-json-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/display-json-dialog/display-json-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: DisplayJsonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayJsonDialogComponent", function() { return DisplayJsonDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-formatter-js */ "./node_modules/json-formatter-js/dist/json-formatter.js");
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_formatter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");





var DisplayJsonDialogComponent = /** @class */ (function () {
    function DisplayJsonDialogComponent(dialogRef, element, teamSrvc, data) {
        this.dialogRef = dialogRef;
        this.element = element;
        this.teamSrvc = teamSrvc;
        this.data = data;
        this.showSimpleJson = false;
        this.showBeautyJson = false;
        this.showJsonAsObject = false;
    }
    DisplayJsonDialogComponent.prototype.ngOnInit = function () {
        this.teams = this.data.teams;
        switch (this.data.displayJsonType) {
            case 1:
                this.dialogTitle = 'Json Pipe';
                this.showSimpleJson = true;
                break;
            case 2:
                this.dialogTitle = 'Beauty Json';
                this.showBeautyJson = true;
                this.formatBeautyJson();
                break;
            case 3:
                this.dialogTitle = 'Json in Object Format';
                this.showJsonAsObject = true;
                this.formatObjectJson();
                break;
            default:
                break;
        }
    };
    DisplayJsonDialogComponent.prototype.formatBeautyJson = function () {
        var _this = this;
        try {
            this.teamSrvc.getTeams().subscribe(function (t) {
                _this.teams = t;
                var teams_formatted = JSON.stringify(t, undefined, 4);
                _this.output(_this.syntaxHighlight(teams_formatted));
            });
        }
        catch (e) {
            console.log('file: display-json-dialog.component.ts; Method: formatBeautyJson ' + e);
        }
    };
    DisplayJsonDialogComponent.prototype.formatObjectJson = function () {
        try {
            var formatterType3 = new json_formatter_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.teams, Infinity);
            this.element.nativeElement.appendChild(formatterType3.render());
        }
        catch (e) {
            console.log('file: display-json-dialog.component.ts; Method: formatObjectJson ' + e);
        }
    };
    DisplayJsonDialogComponent.prototype.syntaxHighlight = function (json) {
        try {
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number';
                var _color = '#7abfb9';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                        _color = '#827f7f';
                    }
                    else {
                        cls = 'string';
                        _color = '#3f793f';
                    }
                }
                else if (/true|false/.test(match)) {
                    cls = 'boolean';
                    _color = '#a7a936';
                }
                else if (/null/.test(match)) {
                    cls = 'null';
                    _color = '#af6774';
                }
                // return '<span class="' + cls + '">' + match + '</span>';
                // caso funcione o css, usar a linha acima.
                return '<span ' + 'style="color: ' + _color + ';"' + 'class="' + cls + '">' + match + '</span>';
            });
        }
        catch (e) {
            console.log('file: display-json-dialog.component.ts; Method: syntaxHighlight ' + e);
        }
    };
    //http://jsfiddle.net/KJQ9K/554/
    DisplayJsonDialogComponent.prototype.output = function (inp) {
        try {
            var _elem = document.createElement("PRE");
            _elem.innerHTML = inp;
            document.getElementById('beauty-json-id').appendChild(_elem);
        }
        catch (e) {
            console.log('file: display-json-dialog.component.ts; Method: output ' + e);
        }
    };
    DisplayJsonDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DisplayJsonDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-json-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/display-json-dialog/display-json-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-json-dialog.component.scss */ "./src/app/dialogs/display-json-dialog/display-json-dialog.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"], Object])
    ], DisplayJsonDialogComponent);
    return DisplayJsonDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/update-team-dialog/update-team-dialog.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/update-team-dialog/update-team-dialog.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-dialog {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 6%;\n  font-size: 26px;\n  background: #bd770f;\n  color: #fbead0;\n}\n\n.update-team-wrapers {\n  margin: 5%;\n}\n\n.form-field {\n  width: 100%;\n}\n\n.buttons {\n  text-align: center;\n}\n\n.buttons button {\n  color: #fdf4e7;\n  background: #bd770f;\n}\n\n.flag-icon {\n  position: relative;\n  display: inline;\n  top: 10px;\n}\n\n.country {\n  display: inline;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy91cGRhdGUtdGVhbS1kaWFsb2cvQzpcXFVzZXJzXFxtb2lzZVxcRGVza3RvcFxcQW5ndWxhclxcQW5ndWxhciBFc3R1ZG9zXFxBbmd1bGFyIEVzdHVkb3NcXFRlYW1NYW5hZ2VyL3NyY1xcYXBwXFxkaWFsb2dzXFx1cGRhdGUtdGVhbS1kaWFsb2dcXHVwZGF0ZS10ZWFtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9ncy91cGRhdGUtdGVhbS1kaWFsb2cvdXBkYXRlLXRlYW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBREdJO0VBRUksY0FBQTtFQUNBLG1CQUFBO0FDRlI7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvdXBkYXRlLXRlYW0tZGlhbG9nL3VwZGF0ZS10ZWFtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1kaWFsb2d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWFjNTAzO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2JkNzcwZjtcclxuICAgIGNvbG9yOiAjZmJlYWQwO1xyXG59XHJcblxyXG4udXBkYXRlLXRlYW0td3JhcGVyc3tcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgLy8gY29sb3I6ICNhMjMxMzE7XHJcbiAgICAgICAgY29sb3I6ICNmZGY0ZTc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2JkNzcwZjtcclxuICAgIH1cclxufVxyXG5cclxuLmZsYWctaWNvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcblxyXG4uY291bnRyeXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9IiwiLnRpdGxlLWRpYWxvZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBiYWNrZ3JvdW5kOiAjYmQ3NzBmO1xuICBjb2xvcjogI2ZiZWFkMDtcbn1cblxuLnVwZGF0ZS10ZWFtLXdyYXBlcnMge1xuICBtYXJnaW46IDUlO1xufVxuXG4uZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idXR0b25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjZmRmNGU3O1xuICBiYWNrZ3JvdW5kOiAjYmQ3NzBmO1xufVxuXG4uZmxhZy1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRvcDogMTBweDtcbn1cblxuLmNvdW50cnkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dialogs/update-team-dialog/update-team-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/update-team-dialog/update-team-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateTeamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTeamDialogComponent", function() { return UpdateTeamDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Models_TeamModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/TeamModels */ "./src/app/Models/TeamModels.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/messages.service */ "./src/app/services/messages.service.ts");







var UpdateTeamDialogComponent = /** @class */ (function () {
    function UpdateTeamDialogComponent(_messagesService, teamSrvc, dialogRef, data) {
        this._messagesService = _messagesService;
        this.teamSrvc = teamSrvc;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = '';
        this.countries = [
            { value: 1, viewValue: 'Brazil', flagUrl: '../../../assets/images/flag-brazil.png' },
            { value: 2, viewValue: 'Spain', flagUrl: '../../../assets/images/flag-spain.png' },
            { value: 3, viewValue: 'Italy', flagUrl: '../../../assets/images/flag-italy.png' },
            { value: 4, viewValue: 'Portugal', flagUrl: '../../../assets/images/flag-portugal.png' },
            { value: 5, viewValue: 'England', flagUrl: '../../../assets/images/flag-england.png' },
            { value: 6, viewValue: 'Israel', flagUrl: '../../../assets/images/flag-israel.png' },
            { value: 7, viewValue: 'France', flagUrl: '../../../assets/images/flag-france.png' },
            { value: 8, viewValue: 'Germany', flagUrl: '../../../assets/images/flag-germany.png' }
        ];
    }
    UpdateTeamDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.dialogTitle = 'Add Team';
            var nameDefaultValue = '';
            var countryDefaultValue = 0;
            var titlesDefaultValue = '';
            var moneyDefaultValue = '';
            var divisionDefaultValue = '';
            if (this.data != null) {
                this.dialogTitle = 'Update Team';
                nameDefaultValue = this.data.name;
                countryDefaultValue = this.countries.find(function (c) { return c.viewValue == _this.data.country; }).value;
                titlesDefaultValue = this.data.titles.toString();
                moneyDefaultValue = this.data.money.toString();
                divisionDefaultValue = this.data.division.toString();
            }
            this.addTeamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](nameDefaultValue, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)
                ]),
                'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](countryDefaultValue, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                'titles': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](titlesDefaultValue, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                'money': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moneyDefaultValue, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                'division': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](divisionDefaultValue, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
            });
        }
        catch (_a) {
            console.log('file: update-teams.component.ts; Method: ngOnInit');
        }
    };
    UpdateTeamDialogComponent.prototype.onCountrySelection = function (data) {
        try {
            this.country = this.countries.find(function (d) { return d.value == data; }).viewValue;
        }
        catch (error) {
            console.log('file: update-teams.component.ts; Method: onCountrySelection ' + error);
        }
    };
    UpdateTeamDialogComponent.prototype.setTeamProperties = function (_name, _country, _money, _titles, _division) {
        try {
            this.name = _name;
            if (_country != undefined && _country != null && _country > 0) {
                this.country = this.countries.find(function (d) { return d.value == _country; }).viewValue;
            }
            this.money = _money;
            this.titles = _titles;
            this.division = _division;
        }
        catch (_a) {
            console.log('file: update-teams.component.ts; Method: setTeamProperties');
        }
    };
    UpdateTeamDialogComponent.prototype.onSubmit = function (formValue) {
        try {
            var _countryName = this.countries.find(function (c) { return c.value == formValue.country; }).viewValue;
            if (this.data != null) {
                if (this.teamSrvc.updateTeam(this.data.id, formValue.name, _countryName, formValue.money, formValue.titles, formValue.division)) {
                    this._messagesService.confirmMessage("Team updated successfully!");
                    this.dialogRef.close();
                }
                else {
                    this._messagesService.errorMessage("Error on updating!");
                }
            }
            else {
                if (this.teamSrvc.addTeam(formValue.name, _countryName, formValue.money, formValue.titles, formValue.division)) {
                    this._messagesService.confirmMessage("Team added successfully!");
                    this.dialogRef.close();
                }
                else {
                    this._messagesService.errorMessage("Error on adding!");
                }
            }
        }
        catch (error) {
            console.log('file: update-teams.component.ts; Method: onSubmit ' + error);
        }
    };
    UpdateTeamDialogComponent.prototype.resetPropreties = function () {
        try {
            this.name = "";
            this.country = "";
            this.money = 0;
            this.titles = 0;
            this.division = 0;
        }
        catch (_a) {
            console.log('file: update-teams.component.ts; Method: resetPropreties');
        }
    };
    UpdateTeamDialogComponent.ctorParameters = function () { return [
        { type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] },
        { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_5__["TeamsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_Models_TeamModels__WEBPACK_IMPORTED_MODULE_3__["Team"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateTeamDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-team-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-team-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/update-team-dialog/update-team-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-team-dialog.component.scss */ "./src/app/dialogs/update-team-dialog/update-team-dialog.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"],
            src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_5__["TeamsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_Models_TeamModels__WEBPACK_IMPORTED_MODULE_3__["Team"]])
    ], UpdateTeamDialogComponent);
    return UpdateTeamDialogComponent;
}());



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base/messages-snack-bar/messages-snack-bar.component */ "./src/app/components/base/messages-snack-bar/messages-snack-bar.component.ts");




var MessagesService = /** @class */ (function () {
    function MessagesService(_snackBar) {
        this._snackBar = _snackBar;
    }
    MessagesService.prototype.confirmMessage = function (_message) {
        this._snackBar.openFromComponent(_components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MessagesSnackBarComponent"], {
            data: _message,
            duration: 3000,
            panelClass: 'confirm-message',
        });
    };
    MessagesService.prototype.errorMessage = function (_message) {
        this._snackBar.openFromComponent(_components_base_messages_snack_bar_messages_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MessagesSnackBarComponent"], {
            data: _message,
            duration: 3000,
            panelClass: 'error-message',
        });
    };
    MessagesService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_TeamModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/TeamModels */ "./src/app/Models/TeamModels.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TeamsService = /** @class */ (function () {
    function TeamsService(http) {
        this.http = http;
        this.teams = [];
    }
    TeamsService.prototype.getTeams = function () {
        try {
            return this.http.get('../../../assets/teams-mockup.json');
        }
        catch (_a) {
            console.log('file: teams.service.ts; Method: getTeams');
        }
    };
    // getTeamById(id: number) : Team {
    //   return this.teams.find(t => t.id == id);
    // }
    TeamsService.prototype.deleteTeam = function (id, teams) {
        try {
            this.teams = teams.filter(function (t) { return t.id != id; });
            localStorage.setItem('teams', JSON.stringify(this.teams));
            return this.teams;
        }
        catch (_a) {
            console.log('file: teams.service.ts; Method: deleteTeam');
        }
    };
    TeamsService.prototype.addTeam = function (_name, _country, _money, _titles, _division) {
        try {
            var newId = this.getNewId();
            var t = new _Models_TeamModels__WEBPACK_IMPORTED_MODULE_2__["Team"](newId, _name, _country, _money, _titles, _division);
            if (localStorage.getItem('teams') != null) {
                this.teams = JSON.parse(localStorage.getItem('teams'));
            }
            this.teams.push(t);
            localStorage.setItem('teams', JSON.stringify(this.teams));
            return this.teams;
        }
        catch (_a) {
            console.log('file: teams.service.ts; Method: addTeam');
        }
    };
    TeamsService.prototype.updateTeam = function (_id, _name, _country, _money, _titles, _division) {
        try {
            if (localStorage.getItem('teams') != null) {
                this.teams = JSON.parse(localStorage.getItem('teams'));
            }
            this.teams.find(function (t) { return t.id == _id; }).name = _name;
            this.teams.find(function (t) { return t.id == _id; }).country = _country;
            this.teams.find(function (t) { return t.id == _id; }).money = _money;
            this.teams.find(function (t) { return t.id == _id; }).titles = _titles;
            this.teams.find(function (t) { return t.id == _id; }).division = _division;
            localStorage.setItem('teams', JSON.stringify(this.teams));
            return true;
        }
        catch (error) {
            console.log('file: teams.service.ts; Method: updateTeam ' + error);
            return false;
        }
    };
    // getNewId() : number{
    //   try{
    //     if(localStorage.getItem('teams_new') != null){
    //       let t : Teams = JSON.parse(localStorage.getItem('teams_new'));
    //       this.teams_new = t;
    //       return this.teams[this.teams.length-1].id + 1;
    //     } else{
    //       this.getTeams().subscribe(ts => {
    //         localStorage.setItem('teams_new', JSON.stringify(ts));
    //         this.teams = ts;
    //         return this.teams[this.teams.length-1].id + 1;
    //       });
    //     }
    //   } catch {
    //     console.log('file: teams.service.ts; Method: getNewId');
    //   }
    // }
    TeamsService.prototype.getNewId = function () {
        var _this = this;
        try {
            if (localStorage.getItem('teams') != null) {
                var t = JSON.parse(localStorage.getItem('teams'));
                this.teams = t;
                return this.teams[this.teams.length - 1].id + 1;
            }
            else {
                this.getTeams().subscribe(function (ts) {
                    localStorage.setItem('teams', JSON.stringify(ts));
                    _this.teams = ts;
                    return _this.teams[_this.teams.length - 1].id + 1;
                });
            }
        }
        catch (_a) {
            console.log('file: teams.service.ts; Method: getNewId');
        }
    };
    TeamsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TeamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TeamsService);
    return TeamsService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\moise\Desktop\Angular\Angular Estudos\Angular Estudos\TeamManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map