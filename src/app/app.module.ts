import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatButtonModule } from '@angular/material/button';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import { LoginModule } from './login/login.module';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    LoginModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
