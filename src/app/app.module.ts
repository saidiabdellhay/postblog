import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOnFourComponent } from './four-on-four/four-on-four.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOnFourComponent,
    EditAppareilComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardGuard,
    AppareilService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
