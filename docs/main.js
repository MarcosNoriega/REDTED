(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_teorico_teorico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/teorico/teorico.component */ "./src/app/components/teorico/teorico.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");






var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'teorico/:id', component: _components_teorico_teorico_component__WEBPACK_IMPORTED_MODULE_4__["TeoricoComponent"] },
    { path: 'info', component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'pagina-ted';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_teorico_teorico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/teorico/teorico.component */ "./src/app/components/teorico/teorico.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_teorico_teorico_component__WEBPACK_IMPORTED_MODULE_7__["TeoricoComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  card works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 animated fadeIn\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-10\">\n      <embed src=\"https://marcosnoriega.github.io/TED/\" height=\"700px\" width=\"1000px\">\n\n    </div>\n  </div>\n</div>"

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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"jumbotron bg-dark\">\n\n        <h1>\n          Sobre el software\n        </h1>\n\n        <hr>\n\n\n        <h4>\n          Destinatario del Software:\n        </h4>\n\n        <p> El software educativo está destinado a la captación laboras determinada en esto se realiza la distinta\n          capacitación y posterior empleo en periodo de prueba.</p>\n\n        <p>También es necesario tener cierto nivel de conocimiento en redes de información para el uso de este software</p>\n\n        <h4>Tecnologías usadas en el software:</h4>\n\n        <p>Este software está construido con el motor grafico de videojuegos Unity 3d junto con el lenguaje de\n          programación c#.</p>\n          <p>Gracias a unity pudimos realizar un software con características lúdicas permitiendo al usuario tener mayor interacción con el mismo a través de actividades prácticas.</p>\n\n\n          <h4>\n              Equipo de desarrollo:\n            </h4>\n\n            <p>El equipo de desarrollo que hizo posible la creación de este proyecto esta conformado por: </p>\n            <ul>\n              <li>Blanco Leonardo</li>\n              <li>Noriega Marcos</li>\n            </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/info/info.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">REDTEC</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n      </li>\n      <li class=\"nav-item dropdown\" activeRouterLink=\"active\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Contenidos Téorico\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/1']\">CONFIGURACIÓN DE LA NORMA T568 A y T568 B</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/3']\">Topologías de redes</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/7']\">Topología de bus</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/5']\">Topología de estrella</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/8']\">Topología en anillo</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/6']\">Topología de árbol</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['teorico/4']\">Topología de malla</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['info']\">Info</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/teorico/teorico.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/teorico/teorico.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 animated fadeIn\">\n  <div [ngSwitch]=\"teorico\">\n    <div *ngSwitchCase=\"1\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card bg-dark\">\n                <div class=\"card-header\">\n                  <h1>CONFIGURACIÓN DE LA NORMA T568 A y T568 B</h1>\n        \n                </div>\n        \n                <div class=\"card-body\">\n                  <p>La norma principal, TIA/EIA-568-B.1 define los requisitos generales, mientras que-568-B.2 se centra en los\n                    componentes de los sistemas de cable balanceado de par trenzado y-568-B.3 aborda componentes de los\n                    sistemas de cable de fibra óptica.</p>\n                  <p>La norma EIA/TIA 568¬A específica los requerimientos mínimos para el cableado de establecimientos\n                    comerciales de oficinas. Se hacen recomendaciones para:\n                    <ul>\n                      <li>Las topología</li>\n                      <li>La distancia máxima de los cables</li>\n                      <li>El rendimiento de los componentes</li>\n                      <li>Las tomas y los conectores de telecomunicaciones</li>\n                    </ul>\n        \n        \n                    <p>El cableado estructurado para redes de computadores nombran dos tipos de normas o configuraciones a\n                      seguir, estas son: La EIA/TIA-568A (T568A) y la EIA/TIA-568B (T568B).</p>\n        \n                    <p>La diferencia entre ellas\n                      es el orden de los colores\n                      de los pares a seguir para\n                      el conector RJ45.\n                      Las redes de computadores no utilizan los 4 pares (8 cables) en su totalidad, utilizan solamente 4\n                      cables: 2 para transmitir y 2 para recibir.</p>\n\n                      <iframe width=\"853\" height=\"480\" src=\"https://www.youtube.com/embed/glPc_yB9-I0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div *ngSwitchCase=\"3\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card bg-dark\">\n                <div class=\"card-header\">\n                  <h1>Topologías de redes</h1>\n        \n                </div>\n        \n                <div class=\"card-body\">\n                  <p>El término topología se refiere a la forma en que está diseñada la red, bien físicamente (rigiéndose de\n                    algunas características en su hardware) o bien lógicamente (basándose en las características internas de su\n                    software). La topología de red es la representación geométrica de la relación entre todos los enlaces y los\n                    dispositivos que los enlazan entre sí (habitualmente denominados nodos).</p>\n                  <p>Una red informática está compuesta por equipos que están conectados entre sí mediante líneas de\n                    comunicación (cables de red, etc.) y elementos de hardware (adaptadores de red y otros equipos que\n                    garantizan que los datos viajen correctamente). La configuración física, es decir la configuración espacial\n                    de la red, se denomina topología física. Los diferentes tipos de topología son:</p>\n                  <ul>\n                    <li>Topología de bus</li>\n                    <li>Topoligía de estrella</li>\n                    <li>Topoligía en anillo</li>\n                    <li>Topoligía de árbol</li>\n                    <li>Topoligía de malla</li>\n                  </ul>\n        \n                  <p>La topología lógica, a diferencia de la topología física, es la manera en que los datos viajan por las\n                    líneas de comunicación. Las topologías lógicas más comunes son Ethernet, Red en anillo y FDDI.</p>\n\n                    <iframe width=\"853\" height=\"480\" src=\"https://www.youtube.com/embed/awLJkNHBoms\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div *ngSwitchCase=\"4\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card bg-dark\">\n                <div class=\"card-header\">\n                  <h1>Topología en Malla</h1>\n        \n                </div>\n        \n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <p>En una topología en malla, cada dispositivo tiene un enlace punto a punto y dedicado con cualquier otro\n                            dispositivo. El término dedicado significa que el enlace conduce el tráfico únicaniente entre los dos\n                            dispositivos que conecta.</p>\n                          <p>Por tanto, una red en malla completamente conectada necesita n(n-1)/2 canales fisicos para enlazar n\n                            dispositivos. Para acomodar tantos enlaces, cada dispositivo de la red debe tener sus puertos de\n                            entrada/salida (E/S).</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <img src=\"assets/img/red-malla.jpg\" alt=\"\">\n                    </div>\n                  </div>\n                  \n                  <p>Una malla ofrece varias ventajas sobre otras topologías de red. En primer lugar, el uso de los enlaces\n                    dedicados garantiza que cada conexión sólo debe transportar la carga de datos propia de los dispositivos\n                    conectados, eliminando el problema que surge cuando los enlaces son compartidos por varios dispositivos. En\n                    segundo lugar, una topología en malla es robusta. Si un enlace falla, no inhabilita todo el sistema.</p>\n                  <p>Otra ventaja es la privacidad o la seguridad. Cuando un mensaje viaja a través de una línea dedicada,\n                    solamente lo ve el receptor adecuado. Las fronteras fisicas evitan que otros usuarios puedan tener acceso a\n                    los mensajes.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div *ngSwitchCase=\"5\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card bg-dark\">\n                <div class=\"card-header\">\n                  <h1>Topología en Estrella</h1>\n        \n                </div>\n        \n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <p>En la topología en estrella cada dispositivo solamente tiene un enlace punto a punto dedicado con el\n                            controlador central, habitualmente llamado concentrador. Los dispositivos no están directamente enlazados\n                            entre sí</p>\n                          <p>A diferencia de la topología en malla, la topología en estrella no permite el tráfico directo de\n                            dispositivos. El controlador actúa como un intercambiador: si un dispositivo quiere enviar datos a otro,\n                            envía los datos al controlador, que los retransmite al dispositivo final.</p>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <img src=\"assets/img/Red-Estrella.png\" alt=\"\">\n                    </div>\n                  </div>\n                  <p>Una topología en estrella es más barata que una topología en malla. En una red de estrella, cada\n                    dispositivo necesita solamente un enlace y un puerto de entrada/salida para conectarse a cualquier número\n                    de dispositivos.</p>\n                  <p>Este factor hace que también sea más fácil de instalar y reconfigurar. Además, es necesario instalar menos\n                    cables, y la conexión, desconexión y traslado de dispositivos afecta solamente a una conexión: la que\n                    existe entre el dispositivo y el concentrador.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div *ngSwitchCase=\"6\">\n        <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card bg-dark\">\n                <div class=\"card-header\">\n                  <h1>Topología en Árbol</h1>\n        \n                </div>\n        \n                <div class=\"card-body\">\n                  <p>La topología en árbol es una variante de la de estrella. Como en la estrella, los nodos del árbol están\n                    conectados a un concentrador central que controla el tráfico de la red. Sin embargo, no todos los\n                    dispositivos se conectan directamente al concentrador central. La mayoría de los dispositivos se conectan a\n                    un concentrador secundario que, a su vez, se conecta al concentrador central.</p>\n                  <p>El controlador central del árbol es un concentrador activo. Un concentrador activo contiene un repetidor,\n                    es decir, un dispositivo hardware que regenera los patrones de bits recibidos antes de retransmitidos.</p>\n                  <p>Retransmitir las señales de esta forma amplifica su potencia e incrementa la distancia a la que puede\n                    viajar la señal. Los concentradores secundarios pueden ser activos o pasivos. Un concentrador pasivo\n                    proporciona solamente una conexión fisica entre los dispositivos conectados.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div *ngSwitchCase=\"7\"><div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card bg-dark\">\n            <div class=\"card-header\">\n              <h1>Topología en Bus</h1>\n    \n            </div>\n    \n            <div class=\"card-body\">\n              <p>Una topología de bus es multipunto. Un cable largo actúa como una red troncal que conecta todos los\n                dispositivos en la red.</p>\n              <p>Los nodos se conectan al bus mediante cables de conexión (latiguillos) y sondas. Un cable de conexión es\n                una conexión que va desde el dispositivo al cable principal. Una sonda es un conector que, o bien se\n                conecta al cable principal, o se pincha en el cable para crear un contacto con el núcleo metálico.</p>\n              <p>Entre las ventajas de la topología de bus se incluye la sencillez de instalación. El cable troncal puede\n                tenderse por el camino más eficiente y, después, los nodos se pueden conectar al mismo mediante líneas de\n                conexión de longitud variable. De esta forma se puede conseguir que un bus use menos cable que una malla,\n                una estrella o una topología en árbol.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"8\"> <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card bg-dark\">\n            <div class=\"card-header\">\n              <h1>Topología en Anillo</h1>\n    \n            </div>\n    \n            <div class=\"card-body\">\n              <p>En una topología en anillo cada dispositivo tiene una línea de conexión dedicada y punto a punto solamente\n                con los dos dispositivos que están a sus lados. La señal pasa a lo largo del anillo en una dirección, o de\n                dispositivo a dispositivo, hasta que alcanza su destino. Cada dispositivo del anillo incorpora un\n                repetidor.</p>\n              <p>Un anillo es relativamente fácil de instalar y reconfigurar. Cada dispositivo está enlazado solamente a\n                sus vecinos inmediatos (bien fisicos o lógicos). Para añadir o quitar dispositivos, solamente hay que mover\n                dos conexiones.</p>\n              <p>Las únicas restricciones están relacionadas con aspectos del medio fisico y el tráfico (máxima longitud\n                del anillo y número de dispositivos). Además, los fallos se pueden aislar de forma sencilla. Generalmente,\n                en un anillo hay una señal en circulación continuamente.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n \n</div>"

/***/ }),

/***/ "./src/app/components/teorico/teorico.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/teorico/teorico.component.ts ***!
  \*********************************************************/
/*! exports provided: TeoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeoricoComponent", function() { return TeoricoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TeoricoComponent = /** @class */ (function () {
    function TeoricoComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        activatedRoute.params.subscribe(function (params) {
            _this.teorico = params['id'];
        });
    }
    TeoricoComponent.prototype.ngOnInit = function () {
    };
    TeoricoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teorico',
            template: __webpack_require__(/*! ./teorico.component.html */ "./src/app/components/teorico/teorico.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TeoricoComponent);
    return TeoricoComponent;
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

module.exports = __webpack_require__(/*! E:\Users\Marcos\Documents\Pagina TED\pagina-ted\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map