webpackJsonp([12],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseUsersHistPageModule", function() { return CourseUsersHistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_usershist__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CourseUsersHistPageModule = /** @class */ (function () {
    function CourseUsersHistPageModule() {
    }
    CourseUsersHistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__course_usershist__["a" /* CourseUsersHistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__course_usershist__["a" /* CourseUsersHistPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__course_usershist__["a" /* CourseUsersHistPage */]
            ]
        })
    ], CourseUsersHistPageModule);
    return CourseUsersHistPageModule;
}());

//# sourceMappingURL=course_usershist.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseUsersHistPage; });
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



var CourseUsersHistPage = /** @class */ (function () {
    function CourseUsersHistPage(navCtrl, navParams, CourseUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CourseUsers = CourseUsers;
        this.cursos = [];
        this.usuarioActual = navParams.get("user");
    }
    CourseUsersHistPage_1 = CourseUsersHistPage;
    CourseUsersHistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.CourseUsers.getHist({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.cursos = data['cursos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(CourseUsersHistPage_1);
            console.error(err);
        });
    };
    CourseUsersHistPage = CourseUsersHistPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course_usershist',template:/*ion-inline-start:"D:\DocFam\Descargas\Fedsoft\pruebas\GryphusApp\src\pages\course_usershist\course_usershist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Historial de Cursos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Historial_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let curso of cursos">\n      <p>IdRegistro: {{curso.id}}, IDCurso: {{curso.course.nombre}}, NombreCurso: {{curso.course.nombre}}, FechaInicio: {{curso.fechainicio}}, FechaFin: {{curso.fechafin}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\DocFam\Descargas\Fedsoft\pruebas\GryphusApp\src\pages\course_usershist\course_usershist.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* CourseUsers */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* CourseUsers */]) === "function" && _c || Object])
    ], CourseUsersHistPage);
    return CourseUsersHistPage;
    var CourseUsersHistPage_1, _a, _b, _c;
}());

//# sourceMappingURL=course_usershist.js.map

/***/ })

});
//# sourceMappingURL=12.js.map