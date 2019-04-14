webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_player_add_player_component__ = __webpack_require__("../../../../../src/app/components/add-player/add-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_players_players_component__ = __webpack_require__("../../../../../src/app/components/players/players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_tournament_add_tournament_component__ = __webpack_require__("../../../../../src/app/components/add-tournament/add-tournament.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_tournaments_list_tournaments_list_component__ = __webpack_require__("../../../../../src/app/components/tournaments-list/tournaments-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_tournaments_service__ = __webpack_require__("../../../../../src/app/services/tournaments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_players_service__ = __webpack_require__("../../../../../src/app/services/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_edit_player_edit_player_component__ = __webpack_require__("../../../../../src/app/components/edit-player/edit-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tournament_tournament_component__ = __webpack_require__("../../../../../src/app/components/tournament/tournament.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var dashboardRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__components_add_tournament_add_tournament_component__["a" /* AddTournamentComponent */] },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_17__components_players_players_component__["a" /* PlayersComponent */] },
    { path: 'add-player', component: __WEBPACK_IMPORTED_MODULE_16__components_add_player_add_player_component__["a" /* AddPlayerComponent */] }
];
var tournamentRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_23__components_tournament_tournament_component__["a" /* TournamentComponent */] },
];
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'tournament', component: __WEBPACK_IMPORTED_MODULE_23__components_tournament_tournament_component__["a" /* TournamentComponent */], children: tournamentRoutes },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]], children: dashboardRoutes },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_add_player_add_player_component__["a" /* AddPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_players_players_component__["a" /* PlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_add_tournament_add_tournament_component__["a" /* AddTournamentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_tournaments_list_tournaments_list_component__["a" /* TournamentsListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_edit_player_edit_player_component__["a" /* EditPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_tournament_tournament_component__["a" /* TournamentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__services_tournaments_service__["a" /* TournamentsService */], __WEBPACK_IMPORTED_MODULE_21__services_players_service__["a" /* PlayersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-player/add-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 class=\"page-header\">Добавить игрока</h2>\n    <form (submit)=\"onAddPlayerSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"firstName\">Имя</label>\n          <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"Имя\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Фамилия</label>\n          <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Фамилия\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"elo\">Рейнтиг</label>\n          <input type=\"text\" [(ngModel)]=\"elo\" name=\"elo\" class=\"form-control\" id=\"elo\" placeholder=\"Рейнтиг\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Добавить\">\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-player/add-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPlayerComponent = (function () {
    function AddPlayerComponent(validateService, flashMessage, http) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponent.prototype.onAddPlayerSubmit = function () {
        var _this = this;
        var player = {
            firstName: this.firstName,
            lastName: this.lastName,
            elo: this.elo
        };
        if (!this.validateService.validatePlayer(player)) {
            this.flashMessage.show('Не все поля заполнены!', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // this.authService.registerUser(user).subscribe(data => {
        //   if(data.success) {
        //     this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //     this.router.navigate(['/login']);
        //   } else {
        //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //     this.router.navigate(['/register']);
        //   }
        // });
        this.addPlayer(player).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(player.firstName + " " + player.lastName + " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0431\u0430\u0437\u0443", { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Произошла ошибка', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    AddPlayerComponent.prototype.addPlayer = function (player) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('players/add', player, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AddPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-player',
            template: __webpack_require__("../../../../../src/app/components/add-player/add-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-tournament/add-tournament.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-tournament/add-tournament.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-6 mx-md-auto\">\n    <h2 class=\"page-header text-center mx-5\">Создать турнир</h2>\n    <form (submit)=\"onAddTournamentSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"name\">Название турнира</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Название турнира\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"type\">Тип турнира</label>\n        <select [(ngModel)]=\"type\" name=\"type\" class=\"custom-select\" id=\"type\">\n          <option value='1'>Круговой</option>\n          <option value='2'>Швейцарская система</option>\n          <option value='3'>Олимпийская система</option>\n        </select>\n      </div>\n      <div *ngIf='type == 1'>\n        <div class=\"form-group\">\n          <label for=\"rounds\">Количество туров</label>\n          <input type=\"text\" [(ngModel)]=\"opt\" name=\"opt\" class=\"form-control\" id=\"opt\" placeholder=\"Количество туров\">\n        </div>\n      </div>\n\n      <div *ngIf='type == 2'>\n        <div class=\"form-group\">\n          <label for=\"rounds\">Количество раундов</label>\n          <input type=\"text\" class=\"form-control\" id=\"as\" placeholder=\"Количество туров\">\n        </div>\n      </div>\n\n      <div *ngIf='type == 3'>\n          <p>asdasd</p>\n          <p>asdasd</p>\n          <p>asdasd</p>\n          <p>asdasd</p>\n      </div>\n\n  <button type=\"button\" class=\"btn btn-primary my-3\" data-toggle=\"modal\" data-target=\"#addPlayersModal\">\n    Добавить участников\n  </button>\n\n  <!-- Модальное окно для добавления участников турнира -->\n  <div class=\"modal fade\" id=\"addPlayersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addPlayersModalTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"addPlayersModalTitle\">Выберите участников турнира</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <table class=\"table table-sm table-hover\">\n            <tbody>\n              <tr *ngFor=\"let item of playersList\" (click)=\"togglePlayer(item)\">\n                <td>{{item.firstName}} {{item.lastName}}</td>\n                <td>{{item.elo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Готово</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <table class=\"table table-sm col-8 mx-auto\" *ngIf='participants.length'>\n    <thead>\n      <tr>\n        <th scope=\"col\">Участник</th>\n        <th scope=\"col\">Рейтинг</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of participants\">\n        <td>{{item.firstName}} {{item.lastName}}</td>\n        <td>{{item.elo}}</td>\n        <td (click)=\"removeFromParticipants(item)\"><i class=\"fas fa-minus-square text-danger\"></i></td>\n      </tr>\n    </tbody>\n  </table>\n\n      <br>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Создать\">\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-tournament/add-tournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_players_service__ = __webpack_require__("../../../../../src/app/services/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTournamentComponent = (function () {
    function AddTournamentComponent(validateService, flashMessage, http, playersService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.playersService = playersService;
        this.participants = [];
    }
    AddTournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersService.getPlayersList().subscribe(function (x) {
            _this.playersList = x;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddTournamentComponent.prototype.onAddTournamentSubmit = function () {
        var _this = this;
        var tournament = {
            name: this.name,
            type: this.type,
            options: this.opt,
            participants: this.participants
        };
        if (!this.validateService.validateTournament(tournament)) {
            this.flashMessage.show('Не все поля заполнены!', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.addTournament(tournament).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(tournament.name + " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0431\u0430\u0437\u0443", { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Произошла ошибка', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        console.log(this.participants);
    };
    AddTournamentComponent.prototype.addTournament = function (tournament) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('tournaments/add ', tournament, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AddTournamentComponent.prototype.removeFromParticipants = function (player) {
        this.participants.splice(this.participants.indexOf(player), 1);
    };
    AddTournamentComponent.prototype.togglePlayer = function (player) {
        var index = this.participants.indexOf(player);
        if (index == -1) {
            this.participants.push(player);
        }
        // else {
        //   this.participants.splice(index, 1);
        // }
    };
    AddTournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-tournament',
            template: __webpack_require__("../../../../../src/app/components/add-tournament/add-tournament.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-tournament/add-tournament.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__services_players_service__["a" /* PlayersService */]])
    ], AddTournamentComponent);
    return AddTournamentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light rounded\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample10\" aria-controls=\"navbarsExample10\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsExample10\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <!-- <a class=\"nav-link\" href=\"#\">Dashboard <span class=\"sr-only\">(current)</span></a> -->\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Создать турнир</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard/players']\">Игроки</a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard/add-player']\">Добавить игрока</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-player/edit-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-player/edit-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form (submit)=\"onAddPlayerSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"firstName\">Имя</label>\n          <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"Имя\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Фамилия</label>\n          <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Фамилия\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"elo\">Рейнтиг</label>\n          <input type=\"text\" [(ngModel)]=\"elo\" name=\"elo\" class=\"form-control\" id=\"elo\" placeholder=\"Рейнтиг\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Обновить\">\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-player/edit-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPlayerComponent = (function () {
    function EditPlayerComponent(validateService, flashMessage, http) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    EditPlayerComponent.prototype.ngOnInit = function () {
    };
    // this.firstName = this.playerToEdit.firstName;
    // this.lastName = this.playerToEdit.lastName;
    // this.elo = this.playerToEdit.elo;
    // console.log('123');
    // console.log(this.firstName);
    EditPlayerComponent.prototype.onAddPlayerSubmit = function () {
        this.firstName = this.player.firstName;
        this.lastName = this.player.lastName;
        this.elo = this.player.elo;
        console.log(this.player);
        var player = {
            firstName: this.firstName,
            lastName: this.lastName,
            elo: this.elo
        };
        console.log(this.player);
        if (!this.validateService.validatePlayer(player)) {
            this.flashMessage.show('Не все поля заполнены!', { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // this.updatePlayer(player).subscribe(data => {
        //   if (data.success) {
        //     this.flashMessage.show(`${player.firstName} ${player.lastName} обновлен`, {cssClass: 'alert-success', timeout: 5000});
        //   } else {
        //     this.flashMessage.show('Произошла ошибка', {cssClass: 'alert-danger', timeout: 5000});
        //   }
        // }); 
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditPlayerComponent.prototype, "player", void 0);
    EditPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-player',
            template: __webpack_require__("../../../../../src/app/components/edit-player/edit-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-player/edit-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
    ], EditPlayerComponent);
    return EditPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div> -->\n\n\n<!-- <nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Company name</a>\n  <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"#\">Sign out</a>\n    </li>\n  </ul>\n</nav> -->\n\n<!-- <div class=\"mb-4\">\n    <app-add-tournament></app-add-tournament>\n</div> -->\n\n<div class=\"col-md-9 mx-sm-auto\">\n  <app-tournaments-list></app-tournaments-list>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Вход</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"Username\">Имя пользователя</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Введите имя пользоателя\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Password\">Пароль</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Введите пароль\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Запомнить меня\n    </label>\n  </div>\n  <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Войти\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, " + user.username + "!", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Название</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">На главную <span></span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Панель управления</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Профиль</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Войти</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Регистрация</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Выйти</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/players/players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/players/players.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">  \n  <div class=\"row\">\n    <main role=\"main\" class=\"col-md-9 col-lg-10 pt-3 px-4\">\n      <h2>Игроки в базе</h2>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-hover table-sm\">\n          <thead>\n            <tr>\n              <th>Имя</th>\n              <th>Фамилия</th>\n              <th>Пол</th>\n              <th>Год рождения</th>\n              <th>Рейтинг</th>\n              <th></th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of playersList\">\n              <td>{{item.firstName}}</td>\n              <td>{{item.lastName}}</td>\n              <td></td>\n              <td></td>\n              <td>{{item.elo}}</td>\n              <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#editFrom\" (click)=\"editPlayer(item)\">Редактировать</button></td>\n              <td><button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deletePlayer(item._id)\">Удалить</button></td>\n            </tr>\n        </table>\n      </div>\n    </main>\n  </div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"editFrom\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editFromTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog .modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"editFromTitle\">Изменение данных об игроке</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"firstName\">Имя</label>\n              <input type=\"text\" [(ngModel)]=\"playerToEdit.firstName\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastName\">Фамилия</label>\n              <input type=\"text\" [(ngModel)]=\"playerToEdit.lastName\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"elo\">Рейнтиг</label>\n              <input type=\"text\" [(ngModel)]=\"playerToEdit.elo\" name=\"elo\" class=\"form-control\" id=\"elo\">\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Отмена</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onEditPlayerSubmit()\">Обновить</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/players/players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_players_service__ = __webpack_require__("../../../../../src/app/services/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayersComponent = (function () {
    function PlayersComponent(playersService, validateService, flashMessage) {
        this.playersService = playersService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.playerToEdit = {
            firstName: '',
            lastName: '',
            elo: 0,
        };
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersService.getPlayersList().subscribe(function (x) {
            _this.playersList = x;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PlayersComponent.prototype.editPlayer = function (player) {
        this.playerToEdit._id = player._id;
        this.playerToEdit.firstName = player.firstName;
        this.playerToEdit.lastName = player.lastName;
        this.playerToEdit.elo = player.elo;
    };
    PlayersComponent.prototype.deletePlayer = function (id) {
        this.playersService.deletePlayer(id).subscribe(function (err) {
            console.log(err);
            return false;
        });
    };
    PlayersComponent.prototype.onEditPlayerSubmit = function () {
        var _this = this;
        if (!this.validateService.validatePlayer(this.playerToEdit)) {
            this.flashMessage.show('Не все поля заполнены!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.playersService.updatePlayer(this.playerToEdit).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(_this.playerToEdit.firstName + " " + _this.playerToEdit.lastName + " \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Произошла ошибка', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.ngOnInit();
        });
    };
    PlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-players',
            template: __webpack_require__("../../../../../src/app/components/players/players.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_players_service__["a" /* PlayersService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Регистрация</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Имя</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Введите Ваше имя\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Имя пользователя</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Введите имя пользователя\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Введите Email\">\n    <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">Информация</small> -->\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Пароль</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Введите пароль\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Продолжить\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light rounded\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsTournament\" aria-controls=\"navbarsTournament\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsTournament\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/tournament']\">Стартовый список участников</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/tournament/players']\">Игроки</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/tournament/add-player']\">Добавить игрока</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- <router-outlet></router-outlet> -->\n<div>\n    {{tournament._id}}\n    {{tournament.name}}\n    {{tournament.type}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tournaments_service__ = __webpack_require__("../../../../../src/app/services/tournaments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TournamentComponent = (function () {
    function TournamentComponent(tournamentsService) {
        this.tournamentsService = tournamentsService;
    }
    TournamentComponent.prototype.ngOnInit = function () {
        this.tournament = this.tournamentsService.tournamentToDisplay;
    };
    TournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tournament',
            template: __webpack_require__("../../../../../src/app/components/tournament/tournament.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tournament/tournament.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tournaments_service__["a" /* TournamentsService */]])
    ], TournamentComponent);
    return TournamentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tournaments-list/tournaments-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tournaments-list/tournaments-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" *ngFor=\"let item of list\">  \n  <a class=\"list-group-item list-group-item-action\" [routerLink]=\"['/tournament']\" (click)='setTournamentToDisplay(item)'>\n    {{item.name}}\n  </a>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tournaments-list/tournaments-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tournaments_service__ = __webpack_require__("../../../../../src/app/services/tournaments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TournamentsListComponent = (function () {
    function TournamentsListComponent(tournamentsService) {
        this.tournamentsService = tournamentsService;
        this.id = 0;
    }
    TournamentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournamentsService.getList().subscribe(function (x) {
            _this.list = x;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TournamentsListComponent.prototype.setId = function (tournament) {
        console.log(tournament);
        this.tournamentsService.tournamentToDisplay = tournament;
        // console.log(this.id);
    };
    TournamentsListComponent.prototype.setTournamentToDisplay = function (tournament) {
        console.log(tournament);
        this.tournamentsService.tournamentToDisplay = tournament;
    };
    TournamentsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tournaments-list',
            template: __webpack_require__("../../../../../src/app/components/tournaments-list/tournaments-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tournaments-list/tournaments-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tournaments_service__["a" /* TournamentsService */]])
    ], TournamentsListComponent);
    return TournamentsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/players.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersService = (function () {
    function PlayersService(http) {
        this.http = http;
    }
    PlayersService.prototype.getPlayersList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('players/list', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlayersService.prototype.deletePlayer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("players/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlayersService.prototype.updatePlayer = function (player) {
        console.log('upPlayer', player);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("players/edit/" + player.id, player, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlayersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PlayersService);
    return PlayersService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tournaments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TournamentsService = (function () {
    function TournamentsService(http) {
        this.http = http;
        this.tournamentToDisplayId = 0;
        this.tournamentToDisplay = {};
    }
    TournamentsService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('tournaments/list', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TournamentsService.prototype.getTournamentById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("tournaments/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TournamentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TournamentsService);
    return TournamentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePlayer = function (player) {
        if (player.firstName == undefined || player.lastName == undefined || player.elo == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateTournament = function (tournament) {
        if (tournament.name == undefined || tournament.type == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map