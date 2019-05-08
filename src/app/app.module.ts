
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorsesComponent } from './horses/horses.component';
import {FormsModule} from '@angular/forms';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './services/http.service';
import { ConstantsService } from './services/constants.service';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { TokenInterceptor } from './services/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HorsesComponent,
    HorseDetailComponent,
    LoginComponent,
    NavComponent,
    AddDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    ConstantsService,
    HttpService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
