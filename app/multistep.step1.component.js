"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var multistep_service_1 = require("./multistep.service");
var multistep_form_class_1 = require("./multistep.form-class");
var MultistepStep1Component = (function (_super) {
    __extends(MultistepStep1Component, _super);
    function MultistepStep1Component(multistepService) {
        var _this = _super.call(this, multistepService) || this;
        _this.multistepService = multistepService;
        return _this;
    }
    MultistepStep1Component.prototype.ngOnInit = function () {
        this.model = this.multistepService.model;
    };
    return MultistepStep1Component;
}(multistep_form_class_1.MultistepFormClass));
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", forms_1.NgForm)
], MultistepStep1Component.prototype, "latestForm", void 0);
MultistepStep1Component = __decorate([
    core_1.Component({
        templateUrl: '/app/templates/multistep.step1.html',
    }),
    __param(0, core_1.Inject(multistep_service_1.MultistepService)),
    __metadata("design:paramtypes", [multistep_service_1.MultistepService])
], MultistepStep1Component);
exports.MultistepStep1Component = MultistepStep1Component;
//# sourceMappingURL=multistep.step1.component.js.map