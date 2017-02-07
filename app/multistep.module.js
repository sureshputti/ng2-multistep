"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var multistep_component_1 = require("./multistep.component");
var multistep_base_component_1 = require("./multistep.base-component");
var multistep_service_1 = require("./multistep.service");
var multistep_step1_component_1 = require("./multistep.step1.component");
var multistep_step2_component_1 = require("./multistep.step2.component");
var multistep_step3_component_1 = require("./multistep.step3.component");
var multistep_routing_1 = require("./multistep.routing");
var MultistepModule = (function () {
    function MultistepModule() {
    }
    return MultistepModule;
}());
MultistepModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            multistep_routing_1.multistepRouting
        ],
        declarations: [
            app_component_1.AppComponent,
            multistep_component_1.MultistepComponent,
            multistep_base_component_1.MultistepBaseComponent,
            multistep_step1_component_1.MultistepStep1Component,
            multistep_step2_component_1.MultistepStep2Component,
            multistep_step3_component_1.MultistepStep3Component
        ],
        providers: [multistep_service_1.MultistepService],
        bootstrap: [app_component_1.AppComponent]
    })
], MultistepModule);
exports.MultistepModule = MultistepModule;
//# sourceMappingURL=multistep.module.js.map