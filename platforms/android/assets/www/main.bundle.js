webpackJsonp([1,4],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalsService = (function () {
    function GlobalsService(showpopup, _ngZone) {
        this.showpopup = showpopup;
        this._ngZone = _ngZone;
        this.pipetype = "";
        this.mainwalls = true;
        this.downloadedwalls = false;
        this.showFeatured = true;
        this.showNavbar = true;
        this.popshow = false;
        this.home = true;
        this.filterApplied = false;
        this.downloadOverlayShow = false;
        this.downloadsCount = 0;
        this.favoritesCount = 0;
    }
    /*home button to reset the wallpaper filter and return home*/
    GlobalsService.prototype.resetPipe = function () {
        var _this = this;
        this._ngZone.run(function () {
            _this.downloadedwalls = false;
            _this.filterApplied = false;
            _this.home = true;
            _this.pipetype = "";
            _this.showFeatured = true;
            _this.mainwalls = true;
            _this.showNavbar = true;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()("img.lazy").hide();
        setTimeout(function () { _this.lazyLoadStart(); __WEBPACK_IMPORTED_MODULE_2_jquery___default()("img.lazy").show(); }, 500);
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()(".homeBtn").removeClass("animateShow").addClass("animateHide");
        }, 100);
        this.showpopup.showLoader();
        setTimeout(function () { _this.showpopup.hideLoader(); }, 1000);
    };
    GlobalsService.prototype.lazyLoadStart = function () {
        (function ($) {
            $("img.lazy").lazyload({
                effect: "fadeIn",
                threshold: 200
            });
        })(jQuery);
    };
    GlobalsService.prototype.cancelDownload = function () {
        var _this = this;
        this._ngZone.run(function () {
            _this.downloadOverlayShow == false;
        });
        this.wallDownloadMethod.abort();
        setTimeout(function () { __WEBPACK_IMPORTED_MODULE_2_jquery___default()("#downProShow").hide(); }, 200);
        window['plugins'].toast.showShortBottom('Download canceled.');
        setTimeout(function () { console.log("Download overlay flag is: " + _this.downloadOverlayShow); }, 100);
    };
    GlobalsService.prototype.resetDownPerc = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()("#downProShow .digits").html(0);
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()(".progressBar span").width(0);
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()("#downProShow .text").html("Starting download");
    };
    /*refresh count of downloads and favorites*/
    GlobalsService.prototype.refreshDownAndFavCount = function () {
        this.downloadsCount = JSON.parse(localStorage.getItem("downloads")).length;
        this.favoritesCount = JSON.parse(localStorage.getItem("favorites")).length;
    };
    /*check write permission*/
    GlobalsService.prototype.checkWritePerm = function () {
        console.log("Checking write permission.");
        var permissions = cordova.plugins.permissions;
        permissions.hasPermission(permissions.WRITE_EXTERNAL_STORAGE, function (status) {
            function error() {
                console.warn('Write permission is not turned on');
            }
            function success(status) {
                if (!status.hasPermission)
                    error();
            }
            if (status.hasPermission) {
                return true;
            }
            else {
                permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, success, error);
            }
        });
    };
    return GlobalsService;
}());
GlobalsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__["a" /* ShowpopupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _b || Object])
], GlobalsService);

var _a, _b;
//# sourceMappingURL=globals.service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowpopupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowpopupService = (function () {
    function ShowpopupService() {
    }
    ShowpopupService.prototype.showNoInternetPopup = function () {
        var header = "No internet!";
        var message = "Please check internet connection.";
        var button = "Try again";
        if (!this.popupVisible) {
            this.showPopup(header, message, button);
        }
    };
    ShowpopupService.prototype.showConnErrorPopup = function () {
        var header = "Error!";
        var message = "Error occured while connecting to server.";
        var button = "Try again";
        if (!this.popupVisible) {
            this.showPopup(header, message, button);
        }
    };
    ShowpopupService.prototype.showPopup = function (head, msg, btn) {
        var _this = this;
        this.popupVisible = true;
        setTimeout(function () {
            _this.popupHeader = head;
            _this.popupMessage = msg;
            _this.popupButton = btn;
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".popup").addClass("animfadeTopIn");
        }, 100);
    };
    ShowpopupService.prototype.hidePopup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".popup").removeClass("animfadeTopIn");
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(".popup").addClass("animfadeTopOut");
        setTimeout(function () {
            _this.popupVisible = false;
            _this.popupHeader = " ";
            _this.popupMessage = " ";
            _this.popupButton = " ";
        }, 400);
        location.reload();
    };
    /**show generic loading indicator**/
    ShowpopupService.prototype.showLoader = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#loading").fadeIn("fast");
    };
    ShowpopupService.prototype.hideLoader = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#loading").fadeOut("fast");
    };
    return ShowpopupService;
}());
ShowpopupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShowpopupService);

//# sourceMappingURL=showpopup.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".downProgressWrapper{\n    position: absolute;\n    width: 100%;\n    top:42%\n}\n.progress{\n    color: #fff;\n    font-size: 3em;\n    font-family: 'open_sans_condensedlight', sans-serif;\n    text-align: center\n}\n.text{\n    color: #fff;\n    font-size: 1em;\n    text-align: center;\n    font-family: 'open_sans_condensedlight', sans-serif;\n}\n.progressBar{\n    height: 1px;\n    margin:10px 0\n}\n.progressBar span{\n    height: 1px;\n    display: block;\n    background-color: #0098db;\n}\n.close{\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    right: 10px;\n    top: 8px;\n    font-size: 1.5em;\n    color: #fff\n}\n.close::after{\n\tcontent:\"\\F00D\";\n\tdisplay:inline-block;\n\tmargin:4px 0 0 5px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "#loading{\n    position:fixed;\n    left:0;\n    right:0;\n    bottom:0;\n    top:0;\n    z-index: 99;\n    background-color:rgba(0,0,0,0.6);;\n    display: none\n}\n#loading img{\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-24px;\n    margin-top:-24px;\n    width: 48px;\n    height: 48px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "header{\n\tpadding:5px 3%;\n\tposition:fixed;\n\ttop:0;\n\twidth:100%;\n\theight:58px;\n\tbox-sizing: border-box;\n\tz-index:8;\n}\nheader img.logo{\n\twidth:45%;\n    max-width: 110px\n}\nspan.menu{\n\tdisplay:block;\n\twidth:30px;\n\theight:30px;\n\ttext-decoration:none;\n\tfont-size:1.5em\n}\nspan.menu::after{\t\n\tcontent:\"\\F0C9\";\n\tdisplay:inline-block;\n\tmargin:9px 0 0 6px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "#popup{\n    display: block\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "nav{\n\tposition:fixed;\n\ttop:0;\n\tbottom:0;\n\tleft:0;\n\twidth:260px;\n\tz-index:9;\n    -webkit-transform: translate3d(-260px, 0px, 0px);\n            transform: translate3d(-260px, 0px, 0px);\n\ttransition:-webkit-transform 300ms ease 0s;\n\ttransition:transform 300ms ease 0s;\n\ttransition: transform 300ms ease 0s, -webkit-transform 300ms ease 0s;\n}\nnav .close{\n\tdisplay:block;\n\twidth:30px;\n\theight:30px;\n\tposition:absolute;\n\tright:-40px;\n\ttop:8px;\n\tfont-size:1.5em;\n\tdisplay:none\n}\nnav .close::after{\n\tcontent:\"\\F00D\";\n\tdisplay:inline-block;\n\tmargin:4px 0 0 5px\n}\nnav li span{\n\tpadding:12px 20px;\n\tfont-size:1em;\n\tfont-family: \"Quicksand\",sans-serif;\n\tdisplay:block;\n\ttext-decoration:none\n}\nnav div.logo{\n\tposition:absolute;\n\tbottom:5px;\n\tright:5px;\n\twidth:115px;\n}\nnav div.logo img{\n\twidth:100%;\n\tdisplay:block\n}\nnav li span.icon{\n\tpadding-right:20px;\t\t\n\tposition: relative \n}\nnav li span.fav::after{\n\tcontent:'\\F004';\n\tcolor:#999;\n\tposition: absolute;\n\tright:20px;\n\tfont-family: 'fontAwesome';\n\tdisplay: inline-block;\n\tfont-size: 0.875em;\n\ttop:17px\n}\nnav li span.down::after{\n\tcontent:'\\F063';\n\tcolor:#999;\n\tposition: absolute;\n\tright:20px;\n\tfont-family: 'fontAwesome';\n\tdisplay: inline-block;\n\tfont-size: 0.875em;\n\ttop: 17px\n}\n.verNum{\n\tcolor: #fff;\n\tposition: absolute;\n\tright:10px;\n\tbottom:10px;\n\tfont-size: 0.915em\n}\nnav .categories{\n\tmax-height: 70vh;\n\toverflow-y: scroll;\n\tbackground-color: #f1f1f1;\n\tpadding-top:10px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".featuredWall{\n\tbackground-size:100% auto;\n\tbackground-repeat:no-repeat;\n\tbackground-position:center;\n\tz-index:3;\n\tposition:relative\n}\n.featuredWall img{\n\twidth:100%;\n\tdisplay:block\n}\n.wallList .grid-wrapper span{\n\twidth:100%;\n\tdisplay:block;\t\n\tmin-height:53px\n}\n.wallList .grid-wrapper span img{\n\twidth:100%;\n\tdisplay:block\n}\n.wallList .grid-wrapper span:active{\n\tbox-shadow: inset 0 0 12px 8px rgba(0,0,0,0.7);\n}\n#wallpopup{\n\tposition:fixed;\n\ttop:0;\n\tbottom:0;\n\twidth:100%;\n\tbackground-color:rgba(0,0,0,0.7);\n\tz-index:97;\n}\n#wallpopup .btns{\n\tposition:absolute;\n\tbottom:0;\n\twidth:100%;\n\tz-index:99;\n\tbackground-color:rgba(0,0,0,0.3);\n\ttransition: all 250ms linear\n}\n#wallpopup .btns span{\n\tcolor:#fff;\n\ttext-decoration:none;\n\ttext-align:center;\n\tdisplay:block;\n\tpadding:13px 0;\t\n\tfont-size:0.875em;\n\ttext-transform:uppercase;\n\t/*border-top:1px solid #999*/\n}\n#wallpopup.hideAll .btns{\n\tbottom:-46px\n}\n#wallpopup.hideAll .infoheader{\n\ttop:-46px\n}\n#imgscroller{\n\toverflow-x: scroll;\n}\n#imgwrapper img{\n\tdisplay:block;\n\twidth:200vw;\n\tmin-height:100vh\n}\n.infoheader{\n\tpadding: 10px 0;\n\tposition: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 99;;\n\ttransition: all 250ms linear\n}\n.infoheader .grid-wrapper{\n\tpadding: 0 4% 10px\n}\n.infotext{\n\tfont-size:0.65em;\n\tcolor:#fff;\n}\n.favIcon{\n\twidth: 35px;\n\theight: 35px;\n\tdisplay: inline-block;\n\tbackground: url(" + __webpack_require__(197) + ")no-repeat center;\n\tbackground-size:23px auto;\n\tposition: relative;\n\tright: -4px;\n\ttop:-2px\n}\n.backIcon{\n\twidth: 35px;\n\theight: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n\tleft: -2px;\n\ttop:0;\t\n\tfont-size: 1.4em;\n\tcolor: #fff\n}\n.backIcon::before{\n\tcontent: \"\\F060\";\n\tdisplay: inline-block;\n\tposition: relative;\n\tleft: 5px;\n\tfont-family: \"fontAwesome\";\n}\n.favIcon.on{\n\tbackground: url(" + __webpack_require__(198) + ")no-repeat center;\n\tbackground-size:23px auto;\n}\n.infoIcon{\n\twidth: 35px;\n\theight: 35px;\n\tdisplay: inline-block;\n\tbackground: url(" + __webpack_require__(199) + ")no-repeat center;\n\tbackground-size:22px auto;\n\tposition: relative;\n\ttop:-2px;\n\tmargin-right:6px\n}\n/********home button*********/\n.homeBtn{\n\tposition: fixed;\n\twidth: 55px;\n\theight: 55px;\n\tborder-radius: 50%;\n\tbackground-color: #0098db;\n\tbottom: -90px;\n\tleft: 50%;\n\tmargin-left: -25px;\n\tfont-family: 'fontAwesome';\n\tbox-shadow: 2px 1px 3px rgba(0,0,0,0.3);\n\ttransition: all 100ms linear\n}\n.homeBtn::after{\n\tcontent:\"\\F015\";\n\tfont-size: 30px;\n\tposition: relative;\n\tleft: 14px;\n\ttop: 12px;\n\tcolor: #fff\n}\n.homeBtn.animateHide{\n\t-webkit-animation-name: homeBtnAnimHide;\n\t        animation-name: homeBtnAnimHide;\n    -webkit-animation-duration: 600ms;\n            animation-duration: 600ms;\n\tbottom: -90px\n}\n\n@-webkit-keyframes homeBtnAnimHide {\n    0%   {bottom: 30px;}\n    35%  {bottom: 40px;}\n    100% {bottom: -90px;}\n}\n\n@keyframes homeBtnAnimHide {\n    0%   {bottom: 30px;}\n    35%  {bottom: 40px;}\n    100% {bottom: -90px;}\n}\n.homeBtn.animateShow{\n\t-webkit-animation-name: homeBtnAnimShow;\n\t        animation-name: homeBtnAnimShow;\n    -webkit-animation-duration: 600ms;\n            animation-duration: 600ms;\n\tbottom: 30px\n}\n@-webkit-keyframes homeBtnAnimShow {\n    0%   {bottom: -90px}\n    65%  {bottom: 40px}\n    100% {bottom: 30px}\n}\n@keyframes homeBtnAnimShow {\n    0%   {bottom: -90px}\n    65%  {bottom: 40px}\n    100% {bottom: 30px}\n}\n/*.homeBtn:active{\n\ttransform: scale(1.1, 1.1)\n}*/\n.wallInfo{\n\tbackground: rgba(0,0,0,0.3);\n\tcolor:#fff;\n\tfont-size:0.815em;\n\tpadding: 10px 4%;\n\tborder-radius: 3px;\n\tmargin:0 4%;\n\tdisplay:none\n}\n.wallInfo p{\n\tmargin-bottom:3px;\n\ttext-shadow:1px 1px 1px #333\n}\n@media only screen and (min-width: 320px) and (max-width:359px) {\n    .wallList .grid-wrapper a{\n\t\tmin-height:71px\n\t}\n}\n@media only screen and (min-width: 360px) and (max-width:400px){\n    .wallList .grid-wrapper a{\n\t\tmin-height:80px\n\t}\n}\n@media only screen and (min-width: 400px) {\n    .wallList .grid-wrapper a{\n\t\tmin-height:92px\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<app-sidemenu></app-sidemenu>\n<app-navbar></app-navbar>\n<app-wallpaperlist></app-wallpaperlist>\n<app-popup></app-popup>\n<app-loader-popup></app-loader-popup>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div id=\"downProShow\" class=\"overlayScreen\" *ngIf=\"globals.downloadOverlayShow\">\n    <div class=\"downProgressWrapper\">\n      <p class=\"progress\"><span class=\"digits\">0</span></p>\n      <div class=\"progressBar\"><span></span></div>\n      <p class=\"text\">Starting download</p>\n    </div>\n    <span class=\"close icon\" (click)=\"globals.cancelDownload()\"></span>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\">\n  <img src=\"assets/images/mac-loader.svg\" alt=\"Loading...\">\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<header class=\"main\" *ngIf=\"globals.showNavbar\">\n  <div class=\"grid-wrapper\">\n    <div class=\"cell1\"><span class=\"menu icon\" (click)=\"opmsrve.openMenu()\"></span></div>\n    <div class=\"cell4 center\"><img class=\"logo\" src=\"assets/images/wallpic-logo-white.png\" alt=\"Wallpic\"></div>\n    <div class=\"cell1 right\"></div>\n  </div>\n</header>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div id=\"popup\" *ngIf=\"showpopup.popupVisible\" class=\"overlayScreen\">\n  <div class=\"popup simple hide\">\n    <h1>{{showpopup.popupHeader}}</h1>\n    <p>{{showpopup.popupMessage}}</p>\n    <div>\n      <span class=\"btn topMar\" (click)=\"showpopup.hidePopup()\">{{showpopup.popupButton}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<nav>\n\t\t<span class=\"close icon\" (click)=\"clmsrve.closeMenu()\"></span>\t\t\t\t\n\t\t<ul class=\"categories\">\n\t\t\t<li><span (click)=\"setPipeFilter('abstract')\">Abstract</span></li>\n\t\t\t<li><span>Bikes</span></li>\n\t\t\t<li><span>Cars</span></li>\n\t\t\t<li><span>Movies</span></li>\n\t\t\t<li><span (click)=\"setPipeFilter('nature')\">Nature</span></li>\n\t\t\t<li><span (click)=\"setPipeFilter('people')\">People</span></li>\n\t\t\t<li><span (click)=\"setPipeFilter('places')\">Places</span></li>\n\t\t\t<li><span>Religious</span></li>\n\t\t\t<li><span>Space</span></li>\n\t\t\t<li><span (click)=\"setPipeFilter('misc')\">Miscellaneous</span></li>\t\t\t\t\t\n\t\t</ul>\t\n\t\t<ul>\n\t\t\t<li><span class=\"icon fav\" (click)=\"setPipeFilter('fav')\">Favorites ({{globals.favoritesCount}})</span></li>\n\t\t\t<li><span class=\"icon down\" (click)=\"showDownloadedWalls()\">Downloads ({{globals.downloadsCount}})</span></li>\n\t\t</ul>\t\t\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"assets/images/wallpic-logo-blue.png\" alt=\"Wallpic\">\n\t\t</div>\n</nav>\n<div class=\"fadeScreen\" (click)=\"clmsrve.closeMenu()\"><span class=\"verNum\">v1.0</span></div>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div id=\"mainWalls\" *ngIf=\"globals.mainwalls\" class=\"wallList\" #container>\n  <div *ngIf=\"globals.showFeatured\">\n    <div class=\"featuredWall\" *ngFor=\"let wallpaper of walllist | main:globals.pipetype | featured | slice:0:1\"  data-id=\"{{wallpaper.category + wallpaper.id}}\" >\n      <img src=\"{{wallpath.featpath + wallpaper.category}}{{wallpaper.id}}.jpg\" alt=\"{{wallpaper.category + wallpaper.id}}\" (click)=\"loadWallpaperSrc(wallpaper)\">\n      <div class=\"description\"></div>\n    </div>\n  </div>\n  <div class=\"grid-wrapper\">\n    <div class=\"cell2\" *ngFor=\"let wallpaper of walllist | main:globals.pipetype\">\n      <span data-id=\"{{wallpaper.category + wallpaper.id}}\" (click)=\"loadWallpaperSrc(wallpaper)\">\n        <img class=\"lazy\" attr.data-original=\"{{wallpath.thumbpath + wallpaper.category + wallpaper.id}}.jpg\" alt=\"\">\n      </span>\t\t\t\t\t\n    </div>\n    <div style=\"clear:both\"></div>\n  </div>\n</div>\n<div id=\"wallpopup\" *ngIf=\"globals.popshow\">\n  <div id=\"imgwrapper\">\n    <div id=\"imgscroller\">\n      <img src=\"{{globals.Imgpath}}\" alt=\"\">\n    </div>\n  </div>    \n  <div class=\"infoheader\">\n    <div class=\"grid-wrapper\">\n      <div class=\"cell3\"><!--p class=\"infotext\">Wallpaper size: {{wfolder}} <strong>199</strong> Downloads {{downloadPerc}}</p--><span class=\"backIcon\" (click)=\"closeWallPopup()\"></span></div>\n      <div class=\"cell3 right\"><span class=\"infoIcon\" (click)=\"showWallInfo()\"></span><span class=\"favIcon\" (click)=\"setFavorite()\"></span></div>\n    </div>\n    <div class=\"wallInfo\">\n      <p><strong>{{localwallpaperId}}</strong></p>\n      <p>Source/Author: John Doe</p>\n      <p>Downloads: 137</p>\n      <p>Favorites: 89</p>\n      <p>Tags: #nature #green</p>\n    </div>\n  </div>\n  <div class=\"btns\">\t\t\t\n    <div class=\"grid-wrapper\">\n      <div class=\"cell3\"><span *ngIf=\"!wallisDownload\" (click)=\"downloadWallpaper()\">Download</span><span *ngIf=\"wallisDownload\" (click)=\"deleteWallpaper()\">Delete</span></div>\n      <div class=\"cell3\"><span (click)=\"setWallpaper()\">Set Wallpaper</span></div>\n    </div>\n  </div>\n</div>\n<div id=\"downloadedWalls\" *ngIf=\"globals.downloadedwalls\" class=\"wallList\">\n  <div class=\"grid-wrapper\">\n    <div class=\"cell2\" *ngFor=\"let wallpaper of downloadedIds\">\n      <span data-id=\"{{wallpaper}}\" (click)=\"loadWallpaperSrc(wallpaper)\">\n        <img src=\"/storage/emulated/0/wallpic/thumbs/{{wallpaper}}.jpg\" alt=\"\">\n      </span>\t\t\t\t\t\n    </div>\n    <div style=\"clear:both\"></div>\n  </div>\n</div>\n<div class=\"homeBtn\" (click)=\"globals.resetPipe()\"></div>\n<app-download-overlay></app-download-overlay>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjUwNTlCMDM1NzE1MTFFN0E5ODE5OEQ4RkQ5MzY1RUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjUwNTlCMDQ1NzE1MTFFN0E5ODE5OEQ4RkQ5MzY1RUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTA1OUIwMTU3MTUxMUU3QTk4MTk4RDhGRDkzNjVFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTA1OUIwMjU3MTUxMUU3QTk4MTk4RDhGRDkzNjVFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjezM0gAAAJGSURBVHja7NjPSxRhHMdxJ9qCAiGwFYxFlkDzULAmePLkIQoTz5066KFjf0IRXkyqQ7foVkdZ8tch8tKlZLWDh1pCV1kQ9JB18BCh2/uJj7HszOw8szM7u1APvBh053m+H8dnn32edSqVSkc7tVMdbdbaLtBpy/suoxc/UMa+Zb9uZNCJHWwG9jBzqI5plLCJFaxhHwWM1ul3C5+wp3tXNEZJY/rW9HshjXW8Qtbj9SG8wxzOVf2+S8WXkPPol9WY66phFcjcuI3BgKdnPMYyUupnnspDi36DquEK5Xi87d/gha427Rm2kMU2nlr2G8ekrr5zaAJ5i7+w9okeYQtnQvbNq6bvv+w9RkIOGsWIanoGyqCcYJgTZdX+83P1wjiEQgvWwoJqu1ZqMylLLQhUUm1XoF9ItSBQSrVdgXb08ZB061VtV6Ai+lsQqF+1PQM56EswTJ9qFv22H3lMJRhoSjX/ttqPjvM40LbhoMlhLmBP10O/J2RemMFsAk9nVrUObfZDCxhr4uo8phqh9kOfMdCEMFfwJcx+qDpUEcMxhjFjffULExToJNRHPIohzLTGSte7L+jUYTbzN3EdTyJM4Oe4hhtBBwSbY9A3TGgpeBkyyFm81nJyG9/jOpf9xB1d51QgqHVhXmvNXfOGbsZB8Z7OVou4WOe+NN7iA+6HqtDgBH2ADZ8JmtZ5LNfI2FHeNVexWxPqEo7R3ei4TsRvP3q048too7WKXIijtqs5MXwdY+bLriZvpDBxBfr//dC/Hei3AAMAUy+EDk2KqN4AAAAASUVORK5CYII="

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkY1NEI3RjY1NzE1MTFFNzkwOUZFRjI0RkNGMkM3REYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkY1NEI3Rjc1NzE1MTFFNzkwOUZFRjI0RkNGMkM3REYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU0QjdGNDU3MTUxMUU3OTA5RkVGMjRGQ0YyQzdERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU0QjdGNTU3MTUxMUU3OTA5RkVGMjRGQ0YyQzdERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpuSt2cAAALcSURBVHja7Ji9SxtxGMeflJi0idSmxFgroYSijUMHJeDkP1BE+jd0yla3ziUIlg4WjC04lC5Ch6JDJxGHULAgpEsHK2glhNRqjJc7TcjL5Z4+T05p1EvuLi9HBg++y/F7ns/njssvz50NEaGbjlvQZUfXCdkNrntMeUQRKUnKkcG6AYqfcpeSoOy1JlQqvYFi8QXk87chmZShr88Gg4MOKJdT4PGEacVGncpnIAhRsNsfwMFBCSQJwe+3g8tVAKfzIzgcr+oy+aHWiA9PTvZwZUXCQIAf+8sJhRC3tgRMpzdoraumzkvnfmAslsWxset13It7cm9maLC1ZSTpGMfHrze8mvn5Eh4dfaeanvOL+I2RiKJbx72ZoSF1XSidjuH0tL7MRRYXC1T3Ek9PP+DMjPE6ZjBLR+g5rq9nDTfl+OgiFUXBw8NTdDjQVC2zmFlX6Pj4J05OmmvaSpjFzDpCfsxkziyTuQgzmX3uUbsxhiAely3fCVVmSGunDsD29h3LhVRmQEuoTJuWYrmQyixrCSVgeLhouZDKTGgJ7UAwaP2frcrc0Rbq7c3ByIh1MsxiZh0hgJ6ezxAOly0TYhYzG/y5urFSkdHj6fz+wwxmMbPG4eozkwNFeQvRaK7jd4cZzGKm7viRTn/DqanO3R3uzQyD44c6gghCCkdH2y8TDCKKYsrMPPRfShT/4MRE+2S4lyj+rSejJ6RKZTK/cHa20rLM3Jxc7dVAxogQ5351KlxYKDQts7SUP39m7unxjAhxnDS3fMXlZXPjidOJuLoq0Z35Qj1sRlhGhdSI4idcW8ui260v4/Uibm4KNNq+N8MwJ8TJ599hPC5gf3/jsXZ3N0sbX8Rsf/NCal7j/r5YBWvJSFKe1ow107tZIc5T2qtyl6SGhug0KpSBZvu2IsR5iLIsV6VY5uxM0PtZ68XWhs8xPup0QK/bErjdT0y892setpvvQzdCLR7/BBgA3JTwVwwedLMAAAAASUVORK5CYII="

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyMTY2RkE2OTMwMTFFNzg2QzZFNENERjdDM0E3REQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyMTY2Rjk2OTMwMTFFNzg2QzZFNENERjdDM0E3REQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTA1OUIwMzU3MTUxMUU3QTk4MTk4RDhGRDkzNjVFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTA1OUIwNDU3MTUxMUU3QTk4MTk4RDhGRDkzNjVFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqsVmQ4AAAI5SURBVHja5Ni9TxRBGMdxzuALxgskcEunUe5aY84YKGyIgQKoiIX/AgKtUGErf4CV9lgoDVCAITZamQBHqMCXgDHGI5DzpZHm+I75bXK3e7A3e97uGib5NLc78zw7e7PzkiqXyy1JKudaElZaQ9S5gmH04xauo13XfuAzNvAGS/ht03jK4pVlMYX7eIvXeI9PKOmeDtzAHQzgLl5iFh/qimISCnAJT/Adj5Gpo46rS3VM3Vm1dWqdoAZ7sI45dFsk4tWtNkxb2bAJ5fEVYw0k4jWmNvO2CZmn+IbRf5iMa1RtZ+tNqA0bmGhCMq5xFBSr6lqtUWZGxDU8aPIn5wV2NXJPHGXmT1yEY/nEbrGp4yhW1avzfqmn8RTFCD7KRcWaPqmH0ji0/M40KqOY6Vo9NIR32I9w6tpXzKFak+s9rIRsuCxhyrJi+xK6ibUYJvg1xfYl1IPtGBLaUWzfbP8HaRyFfGV/2wtR9wJ+4WIiF2iVCf2sWGhFWdoV25fQR+RiSCin2L6ENnE7hoTyiu1LaBWDMSQ0qNi+UZbW7Gu68CCiUZbRp+aqRlpVD5kf5jERYe88xCs3mVrLj2yEy4+MYuWSskCbwxc8CtoGtWl5OR7BEvbyf7nIT+Q2qLKnCtrkOQ0k4qiNQtBGMWhyNfvxXuxhCzPotPjjdqrOltroDdzjWzylGZ7PUMICJtGnpz8vjn6b1D3m3ufeoX2aVIgDK3McM+I5junQtZLnOGaxmccxZ/ME7ViAAQDeFgD1tR/0dQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackbuttonService = (function () {
    //cancelDownload()
    function BackbuttonService(globals, _ngZone) {
        this.globals = globals;
        this._ngZone = _ngZone;
        this.homeBackcount = 0;
    }
    BackbuttonService.prototype.onBackButtonPress = function () {
        var _this = this;
        //console.log("inside function");
        if (this.globals.home == true && this.homeBackcount == 0) {
            //console.log("1st condition fullfilled.");
            window['plugins'].toast.showShortBottom("Press again to exit.");
            this.homeBackcount = 1;
            setTimeout(function () { _this.homeBackcount = 0; }, 3000);
        }
        else if (this.globals.home == true && this.homeBackcount == 1) {
            //console.log("2nd condition fullfilled.");
            navigator['app'].exitApp();
        }
        else if (this.globals.home == false && this.globals.popshow == true && this.globals.filterApplied == false && this.globals.downloadOverlayShow == false) {
            //console.log("3rd condition fullfilled.");
            this._ngZone.run(function () {
                _this.globals.popshow = false;
                _this.globals.home = true;
            });
        }
        else if (this.globals.home == false && this.globals.popshow == true && this.globals.filterApplied == true && this.globals.downloadOverlayShow == false) {
            //console.log("4th condition fullfilled.");
            this._ngZone.run(function () {
                _this.globals.popshow = false;
                _this.globals.home = false;
            });
        }
        else if (this.globals.home == false && this.globals.filterApplied == true && this.globals.popshow == false) {
            //console.log("5th condition fullfilled.");
            this._ngZone.run(function () {
                _this.globals.resetPipe();
                _this.globals.home = true;
                _this.globals.filterApplied = false;
            });
            //setTimeout(()=>{this.globals.resetPipe()},300);
        }
        else if (this.globals.downloadOverlayShow == true) {
            this._ngZone.run(function () {
                _this.globals.cancelDownload();
                _this.globals.downloadOverlayShow == false;
            });
        }
    };
    return BackbuttonService;
}());
BackbuttonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _b || Object])
], BackbuttonService);

var _a, _b;
//# sourceMappingURL=backbutton.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinternetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckinternetService = (function () {
    function CheckinternetService() {
    }
    CheckinternetService.prototype.checkInternet = function () {
        var networkState = navigator['connection'].type;
        console.log(networkState);
        if (networkState == "none") {
            return false;
        }
        else {
            return true;
        }
    };
    return CheckinternetService;
}());
CheckinternetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CheckinternetService);

//# sourceMappingURL=checkinternet.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosemenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClosemenuService = (function () {
    function ClosemenuService() {
    }
    ClosemenuService.prototype.closeMenu = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("nav").css("transform", "translate3d(-260px, 0px, 0px)");
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("nav .close, .fadeScreen").fadeOut("fast");
    };
    return ClosemenuService;
}());
ClosemenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClosemenuService);

//# sourceMappingURL=closemenu.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenmenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenmenuService = (function () {
    function OpenmenuService() {
    }
    OpenmenuService.prototype.openMenu = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("nav").css("transform", "translate3d(0px, 0px, 0px)");
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("nav .close, .fadeScreen").fadeIn();
    };
    return OpenmenuService;
}());
OpenmenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OpenmenuService);

//# sourceMappingURL=openmenu.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalllistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WalllistService = (function () {
    function WalllistService(http, showpopup) {
        this.http = http;
        this.showpopup = showpopup;
    }
    WalllistService.prototype.getWalllist = function () {
        return this.http.get('http://ssgmkharda.in/wallpic/fetchwall.php').map(function (response) { return response.json(); }).catch(this.handleError);
        //return this.http.get('http://ssgmkharda.in/wallpic/fetchwall.php').subscribe((response: Response)=> response.json()).catch(this.handleError);
        // return this.http.get('http://ssgmkharda.in/wallpic/fetchwall.php').subscribe(
        //     (response: Response)=> response.json(),err => {
        //     console.log('Something went wrong!');
        //     }
        // );
    };
    WalllistService.prototype.handleError = function (error) {
        var head = "Error!";
        var msg = "Connection error. Please check the internet connection and relaunch the application.";
        var btn = "Ok";
        console.error("Error is:" + error);
        //this.showpopup.showPopup(head,msg,btn);
        //this.showpopup.showNoInternetPopup();
        var message = "Error status code " + error.status + " at " + error.url;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(message);
    };
    return WalllistService;
}());
WalllistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__showpopup_service__["a" /* ShowpopupService */]) === "function" && _b || Object])
], WalllistService);

var _a, _b;
/*import { WALLLIST } from './mocks';
import { Injectable } from '@angular/core';


@Injectable()
export class WalllistService {
    getWalllist(){
        return WALLLIST;
    }
}*/ 
//# sourceMappingURL=wallpaperlist.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallpathService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WallpathService = (function () {
    function WallpathService() {
        this.thumbpath = "wallpapers/thumbs/small/";
        this.featpath = "";
        this.os = "android";
        this.path = "http://ssgmkharda.in/wallpic/";
        this.wallfolder = "";
        this.imgpath = "value1";
        /*get windows width*/
        var winWidth = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).width();
        /*get OS of the device
        var iOS = MobileEsp.DetectIos();
        if(iOS == true){
          this.os = "android";
        }
        else{
          this.os = "android";
        }*/
        /*set path for thumbnail according to device width*/
        if (winWidth < 310) {
            this.thumbpath = this.path + "wallpapers/thumbs/small/";
        }
        else if (winWidth > 310 && winWidth < 361) {
            this.thumbpath = this.path + "wallpapers/thumbs/medium/";
        }
        else {
            this.thumbpath = this.path + "wallpapers/thumbs/large/";
        }
        ;
        this.featpath = this.path + "wallpapers/thumbs/large/";
        //alert(this.thumbpath);
        /*set path for wallpaper in popup*/
        var screenres = window.screen.width * window.devicePixelRatio;
        if (screenres < 480) {
            this.wallfolder = "small";
        }
        else if (screenres > 479 && screenres < 720) {
            this.wallfolder = "medium";
        }
        else if (screenres > 719 && screenres < 1080) {
            this.wallfolder = "large";
        }
        else if (screenres > 1079 && screenres < 1440) {
            this.wallfolder = "xlarge";
        }
        else {
            this.wallfolder = "xxlarge";
        }
        //alert(wallfolder);
    }
    return WallpathService;
}());
WallpathService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WallpathService);

//# sourceMappingURL=wallpath.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 80;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_checkinternet_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_backbutton_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globals_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(checkinter, showpopup, bckbtn, globals) {
        this.checkinter = checkinter;
        this.showpopup = showpopup;
        this.bckbtn = bckbtn;
        this.globals = globals;
        this.pipetyp = 'fav';
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showpopup.showLoader();
        if (this.checkinter.checkInternet() == true) {
            console.log("Internet is available!");
        }
        else {
            console.log("No internet available");
            this.showpopup.showNoInternetPopup();
        }
        // setTimeout(()=>{          
        // },3000);    
        document.addEventListener("backbutton", onBackKeyDown.bind(this), false);
        function onBackKeyDown() {
            //console.log("back key pressed.");
            this.bckbtn.onBackButtonPress();
        }
        //this.globals.noInternetTimeout = setTimeout(()=>{this.showpopup.showNoInternetPopup()},10000);    
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(160),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_checkinternet_service__["a" /* CheckinternetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_checkinternet_service__["a" /* CheckinternetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_showpopup_service__["a" /* ShowpopupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_backbutton_service__["a" /* BackbuttonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_backbutton_service__["a" /* BackbuttonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_globals_service__["a" /* GlobalsService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallpaperlist_wallpaperlist_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__download_overlay_download_overlay_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popup_popup_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loader_popup_loader_popup_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_wall_featured_filter_pipe__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_limit_to_pipe__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_main_pipe__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_wallpaperlist_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidemenu_sidemenu_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_openmenu_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_closemenu_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_wallpath_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_globals_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_checkinternet_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_backbutton_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import { WallpopupComponent } from './wallpopup/wallpopup.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__wallpaperlist_wallpaperlist_component__["a" /* WallpaperlistComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_wall_featured_filter_pipe__["a" /* FeaturedPipe */],
            __WEBPACK_IMPORTED_MODULE_11__shared_limit_to_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_14__sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_main_pipe__["a" /* MainPipe */],
            __WEBPACK_IMPORTED_MODULE_7__download_overlay_download_overlay_component__["a" /* DownloadOverlayComponent */],
            __WEBPACK_IMPORTED_MODULE_8__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__loader_popup_loader_popup_component__["a" /* LoaderPopupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_wallpaperlist_service__["a" /* WalllistService */], __WEBPACK_IMPORTED_MODULE_15__services_openmenu_service__["a" /* OpenmenuService */], __WEBPACK_IMPORTED_MODULE_16__services_closemenu_service__["a" /* ClosemenuService */], __WEBPACK_IMPORTED_MODULE_17__services_wallpath_service__["a" /* WallpathService */], __WEBPACK_IMPORTED_MODULE_18__services_globals_service__["a" /* GlobalsService */], __WEBPACK_IMPORTED_MODULE_19__services_checkinternet_service__["a" /* CheckinternetService */], __WEBPACK_IMPORTED_MODULE_20__services_showpopup_service__["a" /* ShowpopupService */], __WEBPACK_IMPORTED_MODULE_21__services_backbutton_service__["a" /* BackbuttonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadOverlayComponent = (function () {
    function DownloadOverlayComponent(globals) {
        this.globals = globals;
    }
    DownloadOverlayComponent.prototype.ngOnInit = function () {
    };
    return DownloadOverlayComponent;
}());
DownloadOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-download-overlay',
        template: __webpack_require__(161),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_globals_service__["a" /* GlobalsService */]) === "function" && _a || Object])
], DownloadOverlayComponent);

var _a;
//# sourceMappingURL=download-overlay.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderPopupComponent = (function () {
    function LoaderPopupComponent() {
    }
    LoaderPopupComponent.prototype.ngOnInit = function () {
    };
    return LoaderPopupComponent;
}());
LoaderPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-loader-popup',
        template: __webpack_require__(162),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [])
], LoaderPopupComponent);

//# sourceMappingURL=loader-popup.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_openmenu_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globals_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    // setWall(){
    //   console.log("SetWall");
    //   window['plugins'].wallpaper.setImage("PLA153.jpg");
    // }
    function NavbarComponent(opmsrve, globals) {
        this.opmsrve = opmsrve;
        this.globals = globals;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(163),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_openmenu_service__["a" /* OpenmenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_openmenu_service__["a" /* OpenmenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupComponent = (function () {
    function PopupComponent(showpopup) {
        this.showpopup = showpopup;
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    return PopupComponent;
}());
PopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-popup',
        template: __webpack_require__(164),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_showpopup_service__["a" /* ShowpopupService */]) === "function" && _a || Object])
], PopupComponent);

var _a;
//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'limitTo'
    })
], TruncatePipe);

//# sourceMappingURL=limit-to.pipe.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainPipe = (function () {
    function MainPipe() {
    }
    MainPipe.prototype.transform = function (items, pipetype, item) {
        //alert(pipetype);
        switch (pipetype) {
            case "fav":
                item = items.filter(checkFav);
                return item;
            case "nature":
                item = items.filter(function (item) { return item.category === "NAT"; });
                return item;
            case "abstract":
                item = items.filter(function (item) { return item.category === "ABS"; });
                return item;
            case "people":
                item = items.filter(function (item) { return item.category === "PEO"; });
                return item;
            case "places":
                item = items.filter(function (item) { return item.category === "PLA"; });
                return item;
            case "misc":
                item = items.filter(function (item) { return item.category === "MIS"; });
                return item;
            default:
                return items;
        }
        /*favorites*/
        function checkFav(wallpaper) {
            var storedId = JSON.parse(localStorage.getItem("favorites"));
            if (storedId.indexOf(wallpaper.category + wallpaper.id) > -1) {
                return wallpaper;
            }
        }
    };
    return MainPipe;
}());
MainPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'main',
        pure: true
    })
], MainPipe);

//# sourceMappingURL=main.pipe.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeaturedPipe = (function () {
    function FeaturedPipe() {
    }
    FeaturedPipe.prototype.transform = function (items, featured, item) {
        //return items.filter(item => item.featured === 1);
        //if (!featured) return items;
        item = items.filter(function (item) { return item.featured === 1; });
        item = shuffle(item);
        return item;
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
    };
    return FeaturedPipe;
}());
FeaturedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'featured',
        pure: true
    })
], FeaturedPipe);

//# sourceMappingURL=wall-featured-filter.pipe.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_closemenu_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globals_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidemenuComponent = (function () {
    function SidemenuComponent(clmsrve, globals, showpopup, _ngZone) {
        this.clmsrve = clmsrve;
        this.globals = globals;
        this.showpopup = showpopup;
        this._ngZone = _ngZone;
    }
    SidemenuComponent.prototype.setPipeFilter = function (pipe) {
        var _this = this;
        this.globals.filterApplied = true;
        this.globals.home = false;
        this._ngZone.run(function () {
            _this.globals.pipetype = pipe;
        });
        this.clmsrve.closeMenu();
        this.showHomeBtn();
        //this.globals.showNavbar = false;
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()("img.lazy").hide();
        setTimeout(function () { _this.globals.lazyLoadStart(); __WEBPACK_IMPORTED_MODULE_4_jquery___default()("img.lazy").show(); }, 500);
        this.showpopup.showLoader();
        setTimeout(function () { _this.showpopup.hideLoader(); }, 700);
    };
    SidemenuComponent.prototype.showHomeBtn = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery___default()(".homeBtn").addClass("animateShow");
        }, 100);
    };
    SidemenuComponent.prototype.showDownloadedWalls = function () {
        var _this = this;
        this.globals.filterApplied = true;
        this.globals.home = false;
        this.globals.showFeatured = false;
        this.clmsrve.closeMenu();
        this.globals.mainwalls = false;
        this.globals.downloadedwalls = true;
        this.showHomeBtn();
        this.globals.showNavbar = false;
        this.showpopup.showLoader();
        setTimeout(function () { _this.showpopup.hideLoader(); }, 700);
    };
    SidemenuComponent.prototype.ngOnInit = function () {
        this.globals.refreshDownAndFavCount();
    };
    return SidemenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], SidemenuComponent.prototype, "pipetype", void 0);
SidemenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-sidemenu',
        template: __webpack_require__(165),
        styles: [__webpack_require__(157)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_closemenu_service__["a" /* ClosemenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_closemenu_service__["a" /* ClosemenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_globals_service__["a" /* GlobalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_showpopup_service__["a" /* ShowpopupService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _d || Object])
], SidemenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_wallpaperlist_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallpath_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globals_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_showpopup_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallpaperlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WallpaperlistComponent = (function () {
    function WallpaperlistComponent(walllistService, wallpath, globals, showpopup, _ngZone) {
        var _this = this;
        this.walllistService = walllistService;
        this.wallpath = wallpath;
        this.globals = globals;
        this.showpopup = showpopup;
        this._ngZone = _ngZone;
        this.wfolder = this.wallpath.wallfolder;
        this.favoriteList = [];
        this.downloadList = [];
        this.testFile = '/storage/emulated/0/wallpic/thumbs/' + 139 + '.jpg';
        this.downloadedIds = JSON.parse(localStorage.getItem("downloads")) || "null";
        this.downAndSet = false;
        this.wallisDownload = false;
        // initiateWallpaperDownload(){
        //    if(this.checkWritePerm()){
        //      this.downloadWallpaper();
        //    }else{
        //     window['plugins'].toast.showShortBottom("App doesn't have write access");
        //    }
        // }
        /*delete wallpaper*/
        this.deleteWallpaper = function () {
            var _this = this;
            var wallName = this.localwallpaperId;
            var storedIds = JSON.parse(localStorage.getItem("downloads"));
            var index = storedIds.indexOf(wallName);
            storedIds.splice(index, 1);
            localStorage.setItem("downloads", JSON.stringify(storedIds));
            this.downloadedIds = JSON.parse(localStorage.getItem("downloads")) || "null";
            var filePath = 'file:///storage/emulated/0/wallpic';
            var thumbPath = 'file:///storage/emulated/0/wallpic/thumbs';
            this.deleteFile(wallName + '.jpg', filePath);
            this.deleteFile(wallName + '.jpg', thumbPath);
            this.globals.popshow = false;
            setTimeout(function () { _this.globals.refreshDownAndFavCount(); }, 100);
        };
        /*download wallpaper*/
        this.downloadWallpaper = function () {
            console.log("Inside download wall.");
            _this.globals.wallDownloadMethod = new FileTransfer();
            var thumbDownload = new FileTransfer();
            var uri = encodeURI(_this.globals.Imgpath);
            var uri2 = encodeURI(_this.globals.thumbpath);
            //var fileURL =  cordova.file.externalApplicationStorageDirectory+'downloads/'+this.wallId+'.jpg';
            var fileURL = cordova.file.externalRootDirectory + 'wallpic/' + _this.localwallpaperId + '.jpg';
            var fileURL2 = cordova.file.externalRootDirectory + 'wallpic/thumbs/' + _this.localwallpaperId + '.jpg';
            _this.globals.downloadOverlayShow = true;
            //console.log("downFlag = "+this.globals.downloadOverlayShow);
            //$("#downProShow").show();
            _this.globals.resetDownPerc();
            _this.globals.wallDownloadMethod.download(uri, fileURL, function (entry) {
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow .digits,#downProShow .text").html("");
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".progressBar span").width(0);
                setTimeout(function () { __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow").hide(); }, 200);
                _this.globals.downloadOverlayShow = false;
                window['plugins'].toast.showShortBottom('Wallpaper downloaded!');
                _this.updateDownloadList(_this.localwallpaperId);
                console.log("download complete: " + entry.toURL());
                _this._ngZone.run(function () {
                    _this.wallisDownload = true;
                });
                if (_this.downAndSet) {
                    _this.setWallpaper();
                }
            }, function (error) {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("download error code" + error.code);
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow .digits,#downProShow .text").html("");
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".progressBar span").width(0);
                setTimeout(function () { __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow").hide(); }, 200);
                _this.globals.downloadOverlayShow = false;
                window['plugins'].toast.showShortBottom('Download error. Try again later.');
            }, false, {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            });
            thumbDownload.download(uri2, fileURL2, function (entry) {
                console.log("Thumbnail download complete: " + entry.toURL());
                //copy .nomedia file to thumbs folder
                _this.setNomedia();
            }, function (error) {
                console.log("Thumb download error source " + error.source);
                console.log("Thumb download error target " + error.target);
                console.log("Thumb download error code" + error.code);
            }, false, {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            });
            _this.globals.wallDownloadMethod.onprogress = function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    //this.downloadPerc = Math.floor(progressEvent.loaded / progressEvent.total * 100);          
                    var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                    __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow .digits").html(perc);
                    __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".progressBar span").width(perc + "%");
                    __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#downProShow .text").html("Downloading");
                }
            };
        };
    }
    //testFile = "cdvfile://localhost/persistent/wallpic/thumbs/139.jpg";
    //downloadPerc: number = 0;
    /*load wallpaper into the popup*/
    WallpaperlistComponent.prototype.loadWallpaperSrc = function (wallpaper) {
        var _this = this;
        this.globals.popshow = true;
        this.globals.home = false;
        //check if wallpaper needs to be loaded from the server or device     
        if (this.globals.mainwalls) {
            this.localwallpaperId = wallpaper.category + wallpaper.id;
            this.wallId = wallpaper.id;
            this.globals.Imgpath = this.wallpath.path + "wallpapers/" + this.wallpath.os + "/" + this.wallpath.wallfolder + "/" + this.localwallpaperId + ".jpg";
            this.globals.thumbpath = this.wallpath.thumbpath + wallpaper.category + wallpaper.id + ".jpg";
        }
        ;
        if (this.globals.downloadedwalls) {
            this.localwallpaperId = wallpaper;
            this.wallId = wallpaper;
            this.globals.Imgpath = '/storage/emulated/0/wallpic/' + this.localwallpaperId + ".jpg";
            this.globals.thumbpath = '/storage/emulated/0/wallpic/thumbs' + this.localwallpaperId + ".jpg";
        }
        ;
        //check if the wallaper is already downloaded           
        if (this.checkDownloadList()) {
            this.wallisDownload = true;
            //console.log("Wallpaper is already downloaded!");
        }
        else {
            this.wallisDownload = false;
            //console.log("Wallpaper is not downloaded!");
        }
        ;
        //console.log(this.thumbpath);
        switch (this.wallpath.wallfolder) {
            case "large":
                this.wallpaperWidth = "1440";
                break;
            case "medium":
                this.wallpaperWidth = "960";
                break;
            case "xlarge":
                this.wallpaperWidth = "2160";
                break;
            case "xxlarge":
                this.wallpaperWidth = "2880";
                break;
            case "small":
                this.wallpaperWidth = "480";
                break;
        }
        setTimeout(function () {
            //console.log("hhhh");
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#imgscroller").animate({ scrollLeft: __WEBPACK_IMPORTED_MODULE_5_jquery___default()(window).width() / 2 }, 800);
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#imgwrapper").click(function () {
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()("#wallpopup").toggleClass("hideAll");
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".wallInfo").fadeOut("fast");
                //window['navigationbar'].hide();
            });
            var storedIds = JSON.parse(localStorage.getItem("favorites"));
            if (storedIds.indexOf(_this.localwallpaperId) > -1) {
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".favIcon").addClass("on");
            }
        }, 100);
    };
    WallpaperlistComponent.prototype.closeWallPopup = function () {
        this.globals.popshow = false;
        if (this.globals.filterApplied == false && this.globals.downloadedwalls == false) {
            this.globals.home = true;
        }
    };
    /*set wallpaper as favorite*/
    WallpaperlistComponent.prototype.setFavorite = function () {
        if (localStorage.getItem("favorites") === null) {
            this.favoriteList.push(this.localwallpaperId);
            localStorage.setItem("favorites", JSON.stringify(this.favoriteList));
            __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".favIcon").addClass("on");
            //alert(localStorage.getItem("favorites")+"first");
        }
        else {
            //alert(localStorage.getItem("favorites")+"set");        
            var storedIds = JSON.parse(localStorage.getItem("favorites"));
            if (storedIds.indexOf(this.localwallpaperId) > -1) {
                var index = storedIds.indexOf(this.localwallpaperId);
                storedIds.splice(index, 1);
                localStorage.setItem("favorites", JSON.stringify(storedIds));
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".favIcon").removeClass("on");
                console.log("removed " + this.localwallpaperId);
                //alert("Removed from favorites");
            }
            else {
                console.log("Added " + this.localwallpaperId);
                storedIds.push(this.localwallpaperId);
                localStorage.setItem("favorites", JSON.stringify(storedIds));
                __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".favIcon").addClass("on");
                //alert("Added to the favorites!");
            }
        }
        this.globals.refreshDownAndFavCount();
    };
    WallpaperlistComponent.prototype.showWallInfo = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()(".wallInfo").fadeToggle("fast");
    };
    /*update the downloads list*/
    WallpaperlistComponent.prototype.updateDownloadList = function (filename) {
        var _this = this;
        setTimeout(function () { _this.globals.refreshDownAndFavCount(); }, 300);
        if (localStorage.getItem("downloads") === null) {
            this.downloadList.push(filename);
            localStorage.setItem("downloads", JSON.stringify(this.downloadList));
            console.log("Create list and added to downloads!");
            return true;
        }
        else {
            //var downIds = JSON.parse(localStorage.getItem("downloads"));
            //console.log(this.downloadList);
            this.downloadedIds = JSON.parse(localStorage.getItem("downloads"));
            if (this.downloadedIds.indexOf(filename) > -1) {
                console.log("Already downloaded");
                return false;
            }
            else {
                this.downloadedIds.push(filename);
                localStorage.setItem("downloads", JSON.stringify(this.downloadedIds));
                console.log("Added to downloads!");
                return true;
            }
        }
    };
    WallpaperlistComponent.prototype.deleteFile = function (fileName, path) {
        //console.log("File deleted : "+fileName +" - "+path);
        window['resolveLocalFileSystemURL'](path, function (dir) {
            dir.getFile(fileName, { create: false }, function (fileEntry) {
                fileEntry.remove(function () {
                    window['plugins'].toast.showShortBottom("Wallpaper deleted.");
                    console.log(fileName + ": The file has been removed succesfully");
                }, function (error) {
                    console.log("Error deleting the file");
                }, function () {
                    console.log("The file doesn't exist");
                });
            });
        });
    };
    /**set no media file in thumbs folder**/
    WallpaperlistComponent.prototype.setNomedia = function () {
        var nomediaSet = localStorage.getItem("nomedia");
        if (!nomediaSet) {
            var nomediaWrite = new FileTransfer();
            var uri3 = "http://ssgmkharda.in/wallpic/.nomedia";
            var fileURL3 = cordova.file.externalRootDirectory + 'wallpic/thumbs/.nomedia';
            localStorage.setItem("nomedia", "1");
            nomediaWrite.download(uri3, fileURL3, function (entry) {
                console.log("Nomedia file is set: " + entry.toURL());
            }, function (error) {
                console.log("Nomedia error source " + error.source);
                console.log("Nomedia error target " + error.target);
                console.log("Nomedia error code" + error.code);
            }, false, {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            });
        }
        else {
            console.log("Nomedia already exists!");
            return;
        }
    };
    /*set wallpaper*/
    WallpaperlistComponent.prototype.setWallpaper = function () {
        var _this = this;
        //console.log("entry done");
        //window['plugins'].wallpaper.setImage("Wallpaper set!");
        if (this.checkDownloadList()) {
            this.showpopup.showLoader();
            setTimeout(function () {
                window['plugins'].wallpaper.setImage(_this.localwallpaperId + ".jpg");
                window['plugins'].toast.showShortBottom("Wallpaper set!");
            }, 300);
            //window['plugins'].wallpaper.setImage(this.localwallpaperId+".jpg");
            setTimeout(function () { _this.showpopup.hideLoader(); }, 2500);
            this.downAndSet = false;
            //console.log("Set - wall entry present");
        }
        else {
            this.downloadWallpaper();
            this.downAndSet = true;
            //console.log("Set - wall entry not found");
        }
    };
    /*check if wallpaper is already downloaded*/
    WallpaperlistComponent.prototype.checkDownloadList = function () {
        var storedIds = JSON.parse(localStorage.getItem("downloads"));
        if (storedIds === null) {
            return false;
        }
        else {
            if (storedIds.indexOf(this.localwallpaperId) > -1) {
                //console.log("Check - wall entry present");
                return true;
            }
            else {
                //console.log("Check - wall entry not present");
                return false;
            }
        }
    };
    WallpaperlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.walllistService.getWalllist().subscribe(function (response) {
            //console.log("Images"+JSON.stringify(response.records));
            _this.walllist = shuffle(response.records);
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            }
            _this.showpopup.hideLoader();
            setTimeout(function () { _this.globals.lazyLoadStart(); }, 500);
            setTimeout(function () { _this.globals.checkWritePerm(); }, 2000);
            //clearTimeout(this.globals.noInternetTimeout);
            //walllist => this.walllist = walllist.records
        }, function (error) { return _this.showpopup.showConnErrorPopup(); });
    };
    return WallpaperlistComponent;
}());
WallpaperlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-wallpaperlist',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)],
        inputs: ['pipetype']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_wallpaperlist_service__["a" /* WalllistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_wallpaperlist_service__["a" /* WalllistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_wallpath_service__["a" /* WallpathService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wallpath_service__["a" /* WallpathService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_globals_service__["a" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_globals_service__["a" /* GlobalsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_showpopup_service__["a" /* ShowpopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_showpopup_service__["a" /* ShowpopupService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _e || Object])
], WallpaperlistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=wallpaperlist.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map