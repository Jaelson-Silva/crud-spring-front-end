import { SharedModule } from './shared/shared.module';
import { MainComponent } from './pages/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

import { httpInterceptorProviders } from './account/shared/http-interceptors/index';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginFormComponent } from './account/login/login-form/login-form.component';
import { CreateAccountFormComponent } from './account/create-account/create-account-form/create-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    MainComponent,
    AuthenticationComponent,
    TopbarComponent,
    LoginFormComponent,
    CreateAccountFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
