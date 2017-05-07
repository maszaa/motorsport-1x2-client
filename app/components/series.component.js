"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var series_service_1 = require("./../services/series.service");
var Seriess = (function () {
    function Seriess(seriesService) {
        this.seriesService = seriesService;
        this.title = 'Series';
    }
    Seriess.prototype.getSeries = function () {
        var _this = this;
        this.seriesService.getSeries().then(function (series) { return _this.series = series; });
    };
    Seriess.prototype.ngOnInit = function () {
        this.getSeries();
    };
    return Seriess;
}());
Seriess = __decorate([
    core_1.Component({
        selector: 'series',
        templateUrl: './../templates/series.html',
        providers: [series_service_1.SeriesService]
    }),
    __metadata("design:paramtypes", [series_service_1.SeriesService])
], Seriess);
exports.Seriess = Seriess;
//# sourceMappingURL=series.component.js.map