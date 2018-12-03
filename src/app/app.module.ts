import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './core/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {CustomMaterialModule} from './core/material.module';
import {FormsModule} from '@angular/forms';
import {AuthServiceConfig, SocialLoginModule} from 'angular5-social-login';
import {getAuthServiceConfigs} from './core/socialloginConfig';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
