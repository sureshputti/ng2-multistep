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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var MultistepService = (function () {
    function MultistepService(router) {
        this.router = router;
        this.model = {};
        this.baseRoute = '/multistep';
        this.stateUpdateStream = new Rx_1.Subject();
        this.stateUpdates = new Rx_1.Subject();
        this.requestOutstanding = false;
        this.steps = [
            'step1',
            'step2',
            'step3'
        ];
        this.state = this.stateUpdates.scan(function (state, update) { return Object.assign({}, state, update); }, {}).cache();
        this.stateUpdateStream.subscribe(this.stateUpdates);
    }
    ;
    MultistepService.prototype.getInitialStep = function () {
        this.router.navigate([this.baseRoute + '/' + this.steps[0]]);
    };
    ;
    MultistepService.prototype.isStepFirstOrLast = function (direction) {
        if ((direction === 'backward' && this.router.url.split('/')[2] === this.steps[0]) ||
            (direction === 'forward' && this.router.url.split('/')[2] === this.steps[this.steps.length - 1]))
            return true;
        return false;
    };
    ;
    MultistepService.prototype.setState = function (state) {
        this.stateUpdateStream.next(state);
    };
    MultistepService.prototype.goToNextStep = function (direction) {
        var stepIndex = this.steps.indexOf(this.router.url.split('/')[2]);
        if (stepIndex === -1 || stepIndex === this.steps.length)
            return;
        this.router.navigate([this.baseRoute + '/' + this.steps[stepIndex + (direction === ('continue') ? 1 : -1)]]);
    };
    ;
    return MultistepService;
}());
MultistepService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(router_1.Router)),
    __metadata("design:paramtypes", [router_1.Router])
], MultistepService);
exports.MultistepService = MultistepService;
;
//# sourceMappingURL=multistep.service.js.map