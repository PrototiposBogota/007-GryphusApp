webpackJsonp([13],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseUsersDispPageModule", function() { return CourseUsersDispPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_usersdisp__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CourseUsersDispPageModule = /** @class */ (function () {
    function CourseUsersDispPageModule() {
    }
    CourseUsersDispPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__course_usersdisp__["a" /* CourseUsersDispPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__course_usersdisp__["a" /* CourseUsersDispPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__course_usersdisp__["a" /* CourseUsersDispPage */]
            ]
        })
    ], CourseUsersDispPageModule);
    return CourseUsersDispPageModule;
}());

//# sourceMappingURL=course_usersdisp.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseUsersDispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseUsersDispPage = /** @class */ (function () {
    function CourseUsersDispPage(navCtrl, navParams, CourseUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CourseUsers = CourseUsers;
        this.cursos = [];
        this.usuarioActual = navParams.get("user");
    }
    CourseUsersDispPage_1 = CourseUsersDispPage;
    CourseUsersDispPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.CourseUsers.getDisp({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.cursos = data['cursos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(CourseUsersDispPage_1);
            console.error(err);
        });
    };
    CourseUsersDispPage = CourseUsersDispPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course_usersdisp',template:/*ion-inline-start:"D:\DocFam\Descargas\Fedsoft\pruebas\GryphusApp\src\pages\course_usersdisp\course_usersdisp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cursos Disponibles    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Disponibles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n  \n  <ion-list>\n    <ion-item *ngFor="let curso of cursos">\n      <p>IDCurso: {{curso.id}}, NombreCurso: {{curso.nombre}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\DocFam\Descargas\Fedsoft\pruebas\GryphusApp\src\pages\course_usersdisp\course_usersdisp.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* CourseUsers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* CourseUsers */]) === "function" && _c || Object])
    ], CourseUsersDispPage);
    return CourseUsersDispPage;
    var CourseUsersDispPage_1, _a, _b, _c;
}());

//# sourceMappingURL=course_usersdisp.js.map

/***/ })

});
//# sourceMappingURL=13.js.map