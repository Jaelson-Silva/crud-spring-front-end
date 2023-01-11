import { ToastModule } from 'primeng/toast';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './pages/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng-lts/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

import { httpInterceptorProviders } from './account/shared/http-interceptors/index';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    MainComponent,
    AuthenticationComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    SharedModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
