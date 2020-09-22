import { LoginComponent } from './login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [ LoginComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
