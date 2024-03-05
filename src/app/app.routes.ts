import { Routes } from '@angular/router';
import { Step1Component } from './configurator/components/step1/step1.component';
import { Step2Component } from './configurator/components/step2/step2.component';
import { Step3Component } from './configurator/components/step3/step3.component';
import { AuthGuard } from './configurator/core/auth.guard';

export const routes: Routes = [
    { path: "step1", component: Step1Component },
    { path: "step2", component: Step2Component, canActivate: [AuthGuard] },
    { path: "step3", component: Step3Component, canActivate: [AuthGuard] },
    { path: "**", redirectTo: 'step1' }
];
