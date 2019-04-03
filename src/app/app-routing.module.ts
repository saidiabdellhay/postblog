import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOnFourComponent } from './four-on-four/four-on-four.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const appRoutes: Routes = [
  { path: 'appareils',canActivate: [AuthGuardGuard], component: AppareilViewComponent },
  { path: 'appareils/:id',canActivate: [AuthGuardGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuardGuard], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: AddUserComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOnFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
