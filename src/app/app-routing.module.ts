import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './auth/intro/intro.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
