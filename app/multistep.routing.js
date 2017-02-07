"use strict";
var router_1 = require("@angular/router");
var multistep_component_1 = require("./multistep.component");
var multistep_step1_component_1 = require("./multistep.step1.component");
var multistep_step2_component_1 = require("./multistep.step2.component");
var multistep_step3_component_1 = require("./multistep.step3.component");
var multistep_base_component_1 = require("./multistep.base-component");
var multistepRoutes = [
    {
        path: '',
        redirectTo: '/multistep',
        pathMatch: 'full',
    },
    {
        path: 'multistep',
        component: multistep_component_1.MultistepComponent,
        children: [
            {
                path: '',
                component: multistep_base_component_1.MultistepBaseComponent,
            },
            {
                path: 'step1',
                component: multistep_step1_component_1.MultistepStep1Component
            },
            {
                path: 'step2',
                component: multistep_step2_component_1.MultistepStep2Component
            },
            {
                path: 'step3',
                component: multistep_step3_component_1.MultistepStep3Component
            }
        ]
    }
];
exports.multistepRoutingProviders = [];
exports.multistepRouting = router_1.RouterModule.forRoot(multistepRoutes);
//# sourceMappingURL=multistep.routing.js.map