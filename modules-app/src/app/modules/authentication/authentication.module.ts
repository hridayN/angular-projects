import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { HelpComponent } from 'src/app/components/help/help.component';
import { routing } from './authentication.routing';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HelpComponent
  ]
})
export class AuthenticationModule { }
