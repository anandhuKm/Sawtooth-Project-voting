(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voters_voters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voters/voters.component */ "./src/app/voters/voters.component.ts");
/* harmony import */ var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidates/candidates.component */ "./src/app/candidates/candidates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: 'voters', component: _voters_voters_component__WEBPACK_IMPORTED_MODULE_2__["VotersComponent"] },
    { path: 'candidates', component: _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_3__["CandidatesComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<html>\n<head>\n    <meta charset='utf-8'>\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   <!--  <link rel=\"stylesheet\" href=\"styles.css\"> -->\n   \n   <link href=\"../assets/css/bootstrap.css\" rel='stylesheet' type='text/css' />\n   <link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/style.css\">\n \n\n   <script type=\"text/javascript\" src=\"../assets/js/jquery-1.11.1.min.js\"></script>\n   <script src=\"http://code.jquery.com/jquery-latest.min.js\" type=\"text/javascript\"></script>\n    <title>Voters</title>\n  </head>\n  <body>\n  \n      <div class=\"header_bg\" style=\"background-color:black;\" >\n              <nav class=\"navbar navbar-default\">\n                <div class=\"collapse navbar-collapse nav-wil\" id=\"cssmenu\">\n                  <ul class=\"nav navbar-nav\" style=\"margin-left: 35%; width: 100%; background-color: black;\">\n                      <li><a routerLink=\"/voters\">Voters</a></li>\n              \n                      <li><a routerLink=\"/candidates\">Candidates</a></li>\n                  </ul>\n                </div>\n              </nav>\n        </div>  \n          <br><br><br>\n          <div class=\"col-sm-8\">\n          <router-outlet></router-outlet>\n        </div>\n          <div class=\"col-sm-4\" style=\"float:right\">\n            <app-events-sidebar></app-events-sidebar>\n          </div>\n        \n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Raleway);\n#cssmenu,\n#cssmenu ul,\n#cssmenu ul li,\n#cssmenu ul li a,\n#cssmenu #menu-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  list-style: none;\n  line-height: 1;\n  display: block;\n  position: relative;\n  box-sizing: border-box; }\n#cssmenu:after,\n#cssmenu > ul:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n#cssmenu #menu-button {\n  display: none; }\n#cssmenu {\n  width: auto;\n  font-family: Raleway, sans-serif;\n  line-height: 1; }\n#cssmenu > ul {\n  background: #3db2e1;\n  margin-left: auto; }\n#cssmenu > ul > li {\n  float: left;\n  -webkit-perspective: 1000px;\n  perspective: 1000px; }\n#cssmenu.align-center > ul {\n  font-size: 0;\n  text-align: center; }\n#cssmenu.align-center > ul > li {\n  display: inline-block;\n  float: none; }\n#cssmenu.align-right > ul > li {\n  float: right; }\n#cssmenu > ul > li > a {\n  padding: 16px 20px;\n  font-size: 14px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: #3db2e1;\n  transition: all .3s;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n#cssmenu > ul > li.active > a {\n  color: #dff2fa; }\n#cssmenu > ul > li:hover > a,\n#cssmenu > ul > li > a:hover {\n  color: #dff2fa;\n  -webkit-transform: rotateX(90deg) translateY(-23px);\n  transform: rotateX(90deg) translateY(-23px);\n  -ms-transform: none; }\n#cssmenu > ul > li > a::before {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: -1;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 16px 20px;\n  color: #dff2fa;\n  background: #19799f;\n  content: attr(data-title);\n  transition: background 0.3s;\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -ms-transform: translateY(18px); }\n#cssmenu > ul > li:hover > a::before,\n#cssmenu > ul > li > a:hover::before {\n  background: #3db2e1; }\n#cssmenu.small-screen {\n  width: auto; }\n#cssmenu.small-screen > ul,\n#cssmenu.small-screen.align-center > ul {\n  width: 100%;\n  text-align: left; }\n#cssmenu.small-screen > ul > li,\n#cssmenu.small-screen.align-center {\n  float: none;\n  display: block;\n  border-top: 1px solid rgba(100, 100, 100, 0.1); }\n#cssmenu.small-screen > ul > li:hover > a,\n#cssmenu.small-screen > ul > li > a:hover {\n  color: #dff2fa;\n  -webkit-transform: none;\n  transform: none;\n  -ms-transform: none; }\n#cssmenu.small-screen > ul > li > a::before {\n  display: none; }\n#cssmenu.small-screen #menu-button {\n  display: block;\n  padding: 16px 20px;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: none;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: #3db2e1; }\n#cssmenu.small-screen #menu-button:after {\n  content: \"\";\n  position: absolute;\n  right: 20px;\n  top: 17px;\n  display: block;\n  box-sizing: content-box;\n  border-top: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  width: 22px;\n  height: 3px; }\n#cssmenu.small-screen #menu-button.menu-opened:after {\n  border-top: 2px solid #dff2fa;\n  border-bottom: 2px solid #dff2fa; }\n#cssmenu.small-screen #menu-button:before {\n  content: \"\";\n  position: absolute;\n  right: 20px;\n  top: 27px;\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: #ffffff; }\n#cssmenu.small-screen #menu-button.menu-opened:before {\n  background: #dff2fa; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(routerModule) {
        this.routerModule = routerModule;
        this.title = 'voting';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _voters_voters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voters/voters.component */ "./src/app/voters/voters.component.ts");
/* harmony import */ var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidates/candidates.component */ "./src/app/candidates/candidates.component.ts");
/* harmony import */ var _events_sidebar_events_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-sidebar/events-sidebar.component */ "./src/app/events-sidebar/events-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _voters_voters_component__WEBPACK_IMPORTED_MODULE_4__["VotersComponent"],
                _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_5__["CandidatesComponent"],
                _events_sidebar_events_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["EventsSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/candidates/candidates.component.css":
/*!*****************************************************!*\
  !*** ./src/app/candidates/candidates.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.form-style-5{\n\tmax-width: 500px;\n\tpadding: 10px 20px;\n\tbackground: #ffffff;\n\tmargin: 10px auto;\n\tpadding: 20px;\n\tbackground: #ffffff;\n\tborder: 1px solid rgb(182, 177, 177);\n\tborder-radius: 0px;\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.form-style-5 fieldset{\n\tborder: none;\n}\n.form-style-5 legend {\n\tfont-size: 1.4em;\n\tmargin-bottom: 10px;\n}\n.form-style-5 label {\n\tdisplay: block;\n\tmargin-bottom: 8px;\n}\n.form-style-5 input[type=\"text\"],\n.form-style-5 input[type=\"password\"],\n.form-style-5 input[type=\"datetime\"],\n.form-style-5 input[type=\"email\"],\n.form-style-5 input[type=\"number\"],\n.form-style-5 input[type=\"search\"],\n.form-style-5 input[type=\"time\"],\n.form-style-5 input[type=\"url\"],\n.form-style-5 textarea,\n.form-style-5 select {\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\n\tbackground: rgb(255, 255, 255);\n\tborder: none;\n\tborder-bottom: 1px solid gray;\n\tfont-size: 15px;\n\tmargin: 0;\n\toutline: 0;\n\tpadding: 10px;\n\twidth: 100%;\n\tbox-sizing: border-box; \n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box; \n\tbackground-color: #ffffff;\n\tcolor:#000000;\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n\tmargin-bottom: 30px;\n}\n.form-style-5 input[type=\"text\"]:focus,\n.form-style-5 input[type=\"date\"]:focus,\n.form-style-5 input[type=\"datetime\"]:focus,\n.form-style-5 input[type=\"email\"]:focus,\n.form-style-5 input[type=\"number\"]:focus,\n.form-style-5 input[type=\"search\"]:focus,\n.form-style-5 input[type=\"time\"]:focus,\n.form-style-5 input[type=\"url\"]:focus,\n.form-style-5 textarea:focus,\n.form-style-5 select:focus{\n\tbackground: #ffffff;\n}\n.form-style-5 select{\n\t-webkit-appearance: menulist-button;\n\theight:35px;\n}\n.form-style-5 .number {\n\tbackground: #000000;\n\tcolor: #fff;\n\theight: 30px;\n\twidth: 30px;\n\tdisplay: inline-block;\n\tfont-size: 0.8em;\n\tmargin-right: 4px;\n\tline-height: 30px;\n\ttext-align: center;\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\n\tborder-radius: 15px;\n}\n.form-style-5 input[type=\"submit\"],\n.form-style-5 input[type=\"button\"]\n{\n\tposition: relative;\n\tdisplay: block;\n\tpadding: 5px 25px;\n\tcolor: rgb(0, 0, 0);\n\tmargin: 0 auto;\n\tbackground: #ffffff;\n\tcursor: pointer;\n\tfont-size: 14px;\n\ttext-transform: capitalize;\n\ttext-align: center;\n\tfont-style: normal;\n\tborder: 1px solid #000000;\n\tborder-radius: 20px;\n\tmargin-bottom: 10px;\n}\n.form-style-5 input[type=\"submit\"]:hover,\n.form-style-5 input[type=\"button\"]:hover\n{\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tborder-radius: 20px;\n\n}\n"

/***/ }),

/***/ "./src/app/candidates/candidates.component.html":
/*!******************************************************!*\
  !*** ./src/app/candidates/candidates.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-style-5\">\n  <form (submit)=\"CandidateUploader($event)\">\n  <fieldset>\n  <legend><span class=\"number\">1</span> Candidate Details</legend>\n  <input type=\"text\" id=\"ca_name\" placeholder=\"Candidate Name *\">\n  <input type=\"text\" id=\"ca_id\" placeholder=\"Representational sign\">\n  <select id=\"station\" name='LAC's>\n    <option value=\"ATTINGAL01\">ATTINGAL </option>\n    <option value=\"CHIRAYINKEEZHU02\">CHIRAYINKEEZHU </option>\n    <option value=\"NEDUMANGAD03\">NEDUMANGAD </option>\n    <option value=\"VAMANAPURAM04\">VAMANAPURAM </option>\n  </select>\n  </fieldset>\n  <input type=\"submit\" value=\"SUBMIT\" />\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/candidates/candidates.component.ts":
/*!****************************************************!*\
  !*** ./src/app/candidates/candidates.component.ts ***!
  \****************************************************/
/*! exports provided: CandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function() { return CandidatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uploader.service */ "./src/app/uploader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var CandidatesComponent = /** @class */ (function () {
    function CandidatesComponent(Data) {
        this.Data = Data;
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent.prototype.CandidateUploader = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var target, caName, caId, station, uploadResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        target = event.target;
                        caName = target.querySelector('#ca_name').value;
                        caId = target.querySelector('#ca_id').value;
                        station = target.querySelector('#station').value;
                        console.log("values:", caName, caId, station);
                        return [4 /*yield*/, this.Data.sendData("candidate-upload", [caName, caId, station])]; //;.subscribe({});
                    case 1:
                        uploadResult = _a.sent() //;.subscribe({});
                        ;
                        console.log("upload Result:", uploadResult);
                        //resetting the fields
                        target.querySelector('#ca_name').value = '';
                        target.querySelector('#ca_id').value = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    CandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates',
            template: __webpack_require__(/*! ./candidates.component.html */ "./src/app/candidates/candidates.component.html"),
            styles: [__webpack_require__(/*! ./candidates.component.css */ "./src/app/candidates/candidates.component.css")]
        }),
        __metadata("design:paramtypes", [_uploader_service__WEBPACK_IMPORTED_MODULE_1__["UploaderService"]])
    ], CandidatesComponent);
    return CandidatesComponent;
}());



/***/ }),

/***/ "./src/app/events-sidebar/events-sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/events-sidebar/events-sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let blockinfo of blockInfoChain.slice().reverse()\">\n  <div class=\"card\" (click)=\"openFullScreen($event, blockinfo.blockId)\">\n    <div class=\"container\">\n      <h4><b>Block Number : {{blockinfo.blockNum}}</b></h4>\n      <p *ngIf=\"blockinfo.action != null\">Performed Action : {{blockinfo.action}} </p>\n      <p *ngIf=\"blockinfo.action != null\">Message : {{blockinfo.actionText}}</p>\n      <p *ngIf=\"blockinfo.action != null\">{{blockinfo.cookieCount}}</p>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" *ngIf=\"showDetails\" [ngClass]=\"{'modal-hide': !showDetail, 'modal-show': showDetails}\">\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <span class=\"close\" (click)=\"showDetails=false\">&times;</span>\n      <h2>Block Details</h2>\n    </div>\n    <div class=\"modal-body\">\n      <pre>{{blockContents.batches | json}}</pre>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/events-sidebar/events-sidebar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/events-sidebar/events-sidebar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  color: black;\n  background-color: white;\n  border-color: black;\n  border-width: 1px;\n  border-style: solid; }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n.container {\n  padding: 2px 16px; }\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: white; }\n\n/* Modal Content */\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 80%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  color: white; }\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #000000;\n  color: white; }\n\n.modal-body {\n  padding: 2px 16px;\n  color: black; }\n\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #000000;\n  color: white; }\n\n.modal-hide {\n  display: none; }\n\n.modal-show {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/events-sidebar/events-sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/events-sidebar/events-sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: EventsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsSidebarComponent", function() { return EventsSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subscriber_subscriptions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subscriber/subscriptions.service */ "./src/app/subscriber/subscriptions.service.ts");
/* harmony import */ var _rest_apis_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-apis/rest-apis.service */ "./src/app/rest-apis/rest-apis.service.ts");
/* harmony import */ var _uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uploader.service */ "./src/app/uploader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsSidebarComponent = /** @class */ (function () {
    function EventsSidebarComponent(subscriptions, restapi, loginService) {
        var _this = this;
        this.subscriptions = subscriptions;
        this.restapi = restapi;
        this.loginService = loginService;
        this.blockInfo = {
            blockId: String,
            blockNum: Number,
            blockRoot: String,
            StateRoot: String,
            action: String,
            actionText: String,
            cookieCount: String
        };
        this.blockDetail = {
            batches: Array,
            header: Object,
            signature: String
        };
        this.cookiejarAction = {
            action: String,
            cookieCount: String
        };
        this.voteruploadAction = {
            action: String,
            cookieCount: String
        };
        this.showDetails = false;
        this.blockInfoChain = [this.blockInfo];
        this.cookiejarActionHistory = [this.cookiejarAction];
        this.voteruploadActionHistory = [this.voteruploadAction];
        this.subscriptions.GetBlockCommitSubscription()
            .subscribe(function (data) { return _this.processBlockCommitEvent(data); });
        this.subscriptions.GetCookiejarActionSubscription()
            .subscribe(function (data) { return _this.processCookiejarActionEvent(data); });
        this.subscriptions.GetVoteruploadActionSubscription()
            .subscribe(function (data) { return _this.processVoteruploadActionEvent(data); });
    }
    EventsSidebarComponent.prototype.ngOnInit = function () {
    };
    EventsSidebarComponent.prototype.openFullScreen = function (event, blockId) {
        var _this = this;
        this.restapi.Block(undefined, undefined, blockId)
            .then(function (data) { return data.json(); })
            .then(function (blockData) {
            console.log('block data', blockData);
            _this.blockContents = Object.assign({}, _this.blockDetail);
            _this.blockContents.batches = blockData.data.batches;
            console.log('batches', _this.blockContents);
            _this.showDetails = true;
        });
    };
    EventsSidebarComponent.prototype.processBlockCommitEvent = function (data) {
        console.log('observed event', data);
        if (data && data.blockId) {
            var newBlockInfo = Object.assign({}, this.blockInfo);
            newBlockInfo.blockId = data.blockId;
            newBlockInfo.blockNum = data.blockNum;
            newBlockInfo.action = null;
            newBlockInfo.cookieCount = null;
            this.blockInfoChain[data.blockNum] = newBlockInfo;
        }
    };
    EventsSidebarComponent.prototype.processCookiejarActionEvent = function (data) {
        console.log('observed event', data);
        console.log("this.blockInfoChain[data.blockNum] before", this.blockInfoChain[data.blockNum]);
        if (data && data.action && (data.PK === this.loginService.publicKey)) {
            var newBlockInfo = Object.assign(this.blockInfoChain[data.blockNum]);
            newBlockInfo.action = data.action;
            newBlockInfo.actionText = data.actionText;
            newBlockInfo.cookieCount = data.message;
        }
    };
    EventsSidebarComponent.prototype.processVoteruploadActionEvent = function (data) {
        console.log('observed event', data);
        console.log("this.blockInfoChain[data.blockNum] before", this.blockInfoChain[data.blockNum]);
        if (data && data.action && (data.PK === this.loginService.publicKey)) {
            var newBlockInfo = Object.assign(this.blockInfoChain[data.blockNum]);
            newBlockInfo.action = data.action;
            newBlockInfo.actionText = data.actionText;
            newBlockInfo.cookieCount = data.message;
            console.log("processing voter-upload event");
        }
    };
    EventsSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-sidebar',
            template: __webpack_require__(/*! ./events-sidebar.component.html */ "./src/app/events-sidebar/events-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./events-sidebar.component.scss */ "./src/app/events-sidebar/events-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_subscriber_subscriptions_service__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsService"],
            _rest_apis_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestApisService"],
            _uploader_service__WEBPACK_IMPORTED_MODULE_3__["UploaderService"]])
    ], EventsSidebarComponent);
    return EventsSidebarComponent;
}());



/***/ }),

/***/ "./src/app/rest-apis/rest-apis.service.ts":
/*!************************************************!*\
  !*** ./src/app/rest-apis/rest-apis.service.ts ***!
  \************************************************/
/*! exports provided: RestApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApisService", function() { return RestApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestApisService = /** @class */ (function () {
    function RestApisService() {
        this.URL = 'http://localhost:4200/api/';
        this.endpoints = {
            'batch': 'batches',
            'state': 'state',
            'block': 'blocks'
        };
    }
    RestApisService.prototype.Block = function (type, queryString, blockId) {
        if (type === void 0) { type = 'GET'; }
        // Creates the end point URL
        var apiURL = this.URL + this.endpoints['block'];
        // Adds the blockId if present
        apiURL = apiURL + (blockId ? ('/' + blockId) : '');
        // Adds the query parameters if present
        apiURL = apiURL + (queryString ? ('?' + queryString) : '');
        // Makes rest api call
        return window.fetch(apiURL);
    };
    RestApisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RestApisService);
    return RestApisService;
}());



/***/ }),

/***/ "./src/app/subscriber/subscriptions.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/subscriber/subscriptions.service.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsService", function() { return SubscriptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscriptionsService = /** @class */ (function () {
    function SubscriptionsService() {
        this.SOCKET_URL = 'http://localhost:3000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.SOCKET_URL);
        this.blockCommitsObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socket, 'block-commit');
        this.cookiejarActionObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socket, 'voting-action');
        this.voteruploadActionObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.socket, 'voter-upload');
    }
    SubscriptionsService.prototype.GetBlockCommitSubscription = function () {
        return this.blockCommitsObserver;
    };
    SubscriptionsService.prototype.GetCookiejarActionSubscription = function () {
        return this.cookiejarActionObserver;
    };
    SubscriptionsService.prototype.GetVoteruploadActionSubscription = function () {
        return this.voteruploadActionObserver;
    };
    SubscriptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionsService);
    return SubscriptionsService;
}());



/***/ }),

/***/ "./src/app/uploader.service.ts":
/*!*************************************!*\
  !*** ./src/app/uploader.service.ts ***!
  \*************************************/
/*! exports provided: UploaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderService", function() { return UploaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sawtooth-sdk/signing */ "./node_modules/sawtooth-sdk/signing/index.js");
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sawtooth-sdk/protobuf */ "./node_modules/sawtooth-sdk/protobuf/index.js");
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-encoding/lib/encoding */ "./node_modules/text-encoding/lib/encoding.js");
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sawtooth-sdk/signing/secp256k1 */ "./node_modules/sawtooth-sdk/signing/secp256k1.js");
/* harmony import */ var sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var UploaderService = /** @class */ (function () {
    function UploaderService() {
        this.FAMILY_NAME = 'voting';
        this.FAMILY_VERSION = '1.0';
        this.REST_API_BASE_URL = 'http://localhost:4200/api';
        var context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__["createContext"])('secp256k1');
        // Creating a random private key - In LIVE, we will be using our own private keys
        var privateKey = context.newRandomPrivateKey();
        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__["CryptoFactory"](context).newSigner(privateKey);
        this.publicKey = this.signer.getPublicKey().asHex();
        // Creating address
    }
    UploaderService.prototype.createAddress = function (item) {
        this.address = this.hash('voting').substr(0, 6) + this.hash(item).substr(0, 64);
    };
    UploaderService.prototype.clearLogin = function () {
        this.signer = null;
        this.publicKey = null;
        this.address = null;
        return true;
    };
    UploaderService.prototype.hash = function (v) {
        return Object(crypto_browserify__WEBPACK_IMPORTED_MODULE_1__["createHash"])('sha512').update(v).digest('hex');
    };
    UploaderService.prototype.sendData = function (action, values) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionsList, batchList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = this.getEncodedData(action, values);
                        if (action == 'voter-upload')
                            this.createAddress(values[1]);
                        else if (action == 'candidate-upload')
                            this.createAddress(values[2]);
                        transactionsList = this.getTransactionsList(payload);
                        batchList = this.getBatchList(transactionsList);
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("response here", resp); // response from the rest api after sending data to validator
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 1:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    UploaderService.prototype.sendToRestAPI = function (batchListBytes) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (batchListBytes == null) {
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (response) {
                            return response.json();
                        })
                            .then(function (responseJson) {
                            return _this.getDecodedData(responseJson);
                        })
                            .catch(function (error) {
                            console.error("error", error);
                        })];
                }
                else {
                    return [2 /*return*/, this.postBatchList(batchListBytes)];
                }
                return [2 /*return*/];
            });
        });
    };
    // Get state of address from rest api
    UploaderService.prototype.getState = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var getStateURL, fetchOptions;
            return __generator(this, function (_a) {
                getStateURL = this.REST_API_BASE_URL + '/state/' + address;
                fetchOptions = { method: 'GET' };
                return [2 /*return*/, window.fetch(getStateURL, fetchOptions)];
            });
        });
    };
    // Post batch list to rest api
    UploaderService.prototype.postBatchList = function (batchListBytes) {
        var postBatchListURL = this.REST_API_BASE_URL + '/batches';
        var fetchOptions = {
            method: 'POST',
            body: batchListBytes,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        };
        return window.fetch(postBatchListURL, fetchOptions);
    };
    UploaderService.prototype.getEncodedData = function (action, values) {
        var data;
        if (action == 'voter-upload')
            data = action + "," + values[0] + "," + values[1] + "," + values[2] + "," + values[3];
        else
            data = action + "," + values[0] + "," + values[1] + "," + values[2];
        return new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_4__["TextEncoder"]('utf8').encode(data);
    };
    UploaderService.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_5__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    /*---Signing & Addressing-------------------------*/
    UploaderService.prototype.setCurrentTransactor = function (pkInput) {
        try {
            var context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__["createContext"])('secp256k1');
            var secp256k1pk = this.getSecp256k1pk(pkInput);
            this.signer = this.getSignerInstanceForPrivateKey(context, secp256k1pk);
            this.publicKey = this.getPublicKeyAsHex(this.signer);
            this.address = this.getAddressOfCurrentUser(this.FAMILY_NAME, this.publicKey);
        }
        catch (e) {
            console.log("Error in reading the key details", e);
            return false;
        }
        return true;
    };
    UploaderService.prototype.getSecp256k1pk = function (pkInput) {
        var secp256k1pk;
        if (typeof (pkInput) == typeof (ArrayBuffer)) {
            secp256k1pk = new sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_6__(buffer___WEBPACK_IMPORTED_MODULE_5__["Buffer"].from(pkInput, 0, 32));
        }
        else if (typeof (pkInput) == typeof (String)) {
            secp256k1pk = new sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_6__().fromHex(pkInput);
        }
        return secp256k1pk;
    };
    UploaderService.prototype.getSignerInstanceForPrivateKey = function (context, secp256k1pk) {
        return new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_2__["CryptoFactory"](context).newSigner(secp256k1pk);
    };
    UploaderService.prototype.getPublicKeyAsHex = function (signer) {
        return signer.getPublicKey().asHex();
    };
    UploaderService.prototype.getAddressOfCurrentUser = function (familyName, publicKey) {
        var nameSpace = this.hash(familyName).substr(0, 6);
        var publicKeySpace = this.hash(publicKey).substr(0, 64);
        return (nameSpace + publicKeySpace);
    };
    /*------------------------------------*/
    /*-------------Creating transactions & batches--------------------*/
    UploaderService.prototype.getTransactionsList = function (payload) {
        // Create transaction header
        var transactionHeader = this.getTransactionHeaderBytes([this.address], [this.address], payload);
        // Create transaction
        var transaction = this.getTransaction(transactionHeader, payload);
        // Transaction list
        var transactionsList = [transaction];
        return transactionsList;
    };
    UploaderService.prototype.getBatchList = function (transactionsList) {
        // List of transaction signatures
        var transactionSignatureList = transactionsList.map(function (tx) { return tx.headerSignature; });
        // Create batch header
        var batchHeader = this.getBatchHeaderBytes(transactionSignatureList);
        // Create the batch
        var batch = this.getBatch(batchHeader, transactionsList);
        // Batch List
        var batchList = this.getBatchListBytes([batch]);
        return batchList;
    };
    UploaderService.prototype.getTransactionHeaderBytes = function (inputAddressList, outputAddressList, payload) {
        var transactionHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["TransactionHeader"].encode({
            familyName: this.FAMILY_NAME,
            familyVersion: this.FAMILY_VERSION,
            inputs: inputAddressList,
            outputs: outputAddressList,
            signerPublicKey: this.publicKey,
            batcherPublicKey: this.publicKey,
            dependencies: [],
            payloadSha512: this.hash(payload),
            nonce: (Math.random() * 1000).toString()
        }).finish();
        return transactionHeaderBytes;
    };
    UploaderService.prototype.getTransaction = function (transactionHeaderBytes, payloadBytes) {
        var transaction = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Transaction"].create({
            header: transactionHeaderBytes,
            headerSignature: this.signer.sign(transactionHeaderBytes),
            payload: payloadBytes
        });
        return transaction;
    };
    UploaderService.prototype.getBatchHeaderBytes = function (transactionSignaturesList) {
        var batchHeader = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchHeader"].encode({
            signerPublicKey: this.publicKey,
            transactionIds: transactionSignaturesList
        }).finish();
        return batchHeader;
    };
    UploaderService.prototype.getBatch = function (batchHeaderBytes, transactionsList) {
        var batch = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Batch"].create({
            header: batchHeaderBytes,
            headerSignature: this.signer.sign(batchHeaderBytes),
            transactions: transactionsList
        });
        return batch;
    };
    UploaderService.prototype.getBatchListBytes = function (batchesList) {
        var batchListBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchList"].encode({
            batches: batchesList
        }).finish();
        return batchListBytes;
    };
    UploaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UploaderService);
    return UploaderService;
}());



/***/ }),

/***/ "./src/app/voters/voters.component.css":
/*!*********************************************!*\
  !*** ./src/app/voters/voters.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.form-style-5{\n\tmax-width: 500px;\n\tpadding: 10px 20px;\n\tbackground: #ffffff;\n\tmargin: 10px auto;\n\tpadding: 20px;\n\tbackground: #ffffff;\n\tborder: 1px solid rgb(182, 177, 177);\n\tborder-radius: 0px;\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.form-style-5 fieldset{\n\tborder: none;\n}\n.form-style-5 legend {\n\tfont-size: 1.4em;\n\tmargin-bottom: 10px;\n}\n.form-style-5 label {\n\tdisplay: block;\n\tmargin-bottom: 8px;\n}\n.form-style-5 input[type=\"text\"],\n.form-style-5 input[type=\"password\"],\n.form-style-5 input[type=\"datetime\"],\n.form-style-5 input[type=\"email\"],\n.form-style-5 input[type=\"number\"],\n.form-style-5 input[type=\"search\"],\n.form-style-5 input[type=\"time\"],\n.form-style-5 input[type=\"url\"],\n.form-style-5 textarea,\n.form-style-5 select {\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\n\tbackground: rgb(255, 255, 255);\n\tborder: none;\n\tborder-bottom: 1px solid gray;\n\tfont-size: 15px;\n\tmargin: 0;\n\toutline: 0;\n\tpadding: 10px;\n\twidth: 100%;\n\tbox-sizing: border-box; \n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box; \n\tbackground-color: #ffffff;\n\tcolor:#000000;\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n\tmargin-bottom: 30px;\n}\n.form-style-5 input[type=\"text\"]:focus,\n.form-style-5 input[type=\"date\"]:focus,\n.form-style-5 input[type=\"datetime\"]:focus,\n.form-style-5 input[type=\"email\"]:focus,\n.form-style-5 input[type=\"number\"]:focus,\n.form-style-5 input[type=\"search\"]:focus,\n.form-style-5 input[type=\"time\"]:focus,\n.form-style-5 input[type=\"url\"]:focus,\n.form-style-5 textarea:focus,\n.form-style-5 select:focus{\n\tbackground: #ffffff;\n}\n.form-style-5 select{\n\t-webkit-appearance: menulist-button;\n\theight:35px;\n}\n.form-style-5 .number {\n\tbackground: #000000;\n\tcolor: #fff;\n\theight: 30px;\n\twidth: 30px;\n\tdisplay: inline-block;\n\tfont-size: 0.8em;\n\tmargin-right: 4px;\n\tline-height: 30px;\n\ttext-align: center;\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\n\tborder-radius: 15px;\n}\n.form-style-5 input[type=\"submit\"],\n.form-style-5 input[type=\"button\"]\n{\n\tposition: relative;\n\tdisplay: block;\n\tpadding: 5px 25px;\n\tcolor: rgb(0, 0, 0);\n\tmargin: 0 auto;\n\tbackground: #ffffff;\n\ttext-transform: capitalize;\n\tfont-size: 14px;\n\tcursor: pointer;\n\ttext-align: center;\n\tfont-style: normal;\n\tborder: 1px solid #000000;\n\tborder-radius: 20px;\n\tmargin-bottom: 10px;\n}\n.form-style-5 input[type=\"submit\"]:hover,\n.form-style-5 input[type=\"button\"]:hover\n{\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tborder-radius: 20px;\n\n}\n"

/***/ }),

/***/ "./src/app/voters/voters.component.html":
/*!**********************************************!*\
  !*** ./src/app/voters/voters.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-style-5\">\n  <form (submit)=\"voterUploader($event)\">\n  <fieldset>\n  <legend><span class=\"number\">1</span> Voter Details</legend>\n  <input type=\"text\" id=\"vo_name\" placeholder=\"voter Name *\">\n  </fieldset>\n  <fieldset>\n  <legend><span class=\"number\">2</span> Voters ID</legend>\n  <input type=\"text\" id=\"vo_id\" placeholder=\"ID\">\n  <select id=\"vo_station\" name='LAC's>\n    <option value=\"ATTINGAL01\">ATTINGAL </option>\n    <option value=\"CHIRAYINKEEZHU02\">CHIRAYINKEEZHU </option>\n    <option value=\"NEDUMANGAD03\">NEDUMANGAD </option>\n    <option value=\"VAMANAPURAM04\">VAMANAPURAM </option>\n  </select>\n  <input type=\"password\" id=\"vo_password\" placeholder=\"Password\">\n  </fieldset>\n  <input type=\"submit\" value=\"SUBMIT\" />\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/voters/voters.component.ts":
/*!********************************************!*\
  !*** ./src/app/voters/voters.component.ts ***!
  \********************************************/
/*! exports provided: VotersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotersComponent", function() { return VotersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uploader.service */ "./src/app/uploader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var VotersComponent = /** @class */ (function () {
    function VotersComponent(Data) {
        this.Data = Data;
    }
    VotersComponent.prototype.ngOnInit = function () {
    };
    VotersComponent.prototype.voterUploader = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var target, voName, voId, voPassword, voStation, uploadResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        target = event.target;
                        voName = target.querySelector('#vo_name').value;
                        voId = target.querySelector('#vo_id').value;
                        voPassword = target.querySelector('#vo_password').value;
                        voStation = target.querySelector('#vo_station').value;
                        console.log("values:", voId, voName, voPassword, voStation);
                        return [4 /*yield*/, this.Data.sendData("voter-upload", [voName, voId, voPassword, voStation])]; //;.subscribe({});
                    case 1:
                        uploadResult = _a.sent() //;.subscribe({});
                        ;
                        console.log("upload Result:", uploadResult);
                        //resetting the fields
                        target.querySelector('#vo_name').value = '';
                        target.querySelector('#vo_id').value = '';
                        target.querySelector('#vo_password').value = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    VotersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates',
            template: __webpack_require__(/*! ./voters.component.html */ "./src/app/voters/voters.component.html"),
            styles: [__webpack_require__(/*! ./voters.component.css */ "./src/app/voters/voters.component.css")]
        }),
        __metadata("design:paramtypes", [_uploader_service__WEBPACK_IMPORTED_MODULE_1__["UploaderService"]])
    ], VotersComponent);
    return VotersComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/j/onlineVoting/uploader-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map