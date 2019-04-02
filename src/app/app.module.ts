import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOnFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardGuard,
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
