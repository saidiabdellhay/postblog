import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOnFourComponent } from './four-on-four/four-on-four.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const appRoutes: Routes = [
  { path: 'appareils',canActivate: [AuthGuardGuard], component: AppareilViewComponent },
  { path: 'appareils/:id',canActivate: [AuthGuardGuard], component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOnFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
