"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function Auditlog(obj) {
    console.log(JSON.stringify(obj));
    return function (target) {
        console.log("Class Decorator Called !!");
    };
}
var Rate = /** @class */ (function () {
    function Rate() {
        this.originalValue = 199;
        console.log("Class Constructor Called !!");
        console.log(this.getRate());
    }
    Rate.prototype.getRate = function () {
        return 0.5 * 0.1 * this.originalValue;
    };
    Rate = __decorate([
        Auditlog({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], Rate);
    return Rate;
}());
exports.Rate = Rate;
new Rate();
