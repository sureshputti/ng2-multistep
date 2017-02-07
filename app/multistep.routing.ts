import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MultistepComponent } from './multistep.component';
import { MultistepStep1Component } from './multistep.step1.component';
import { MultistepStep2Component } from './multistep.step2.component';
import { MultistepStep3Component } from './multistep.step3.component';
import { MultistepBaseComponent }   from './multistep.base-component';

const multistepRoutes: Routes = [
  {
    path: '',
    redirectTo: '/multistep',
    pathMatch: 'full',
  },
  {
    path: 'multistep',
    component: MultistepComponent,
    children: [
      {
        path: '',
        component: MultistepBaseComponent,
      },
      {
        path: 'step1',
        component: MultistepStep1Component
      },
      {
        path: 'step2',
        component: MultistepStep2Component
      },
      {
        path: 'step3',
        component: MultistepStep3Component
      }
    ]
  }
];


export const multistepRoutingProviders: any[] = [ ];

export const multistepRouting: ModuleWithProviders = RouterModule.forRoot(multistepRoutes);
