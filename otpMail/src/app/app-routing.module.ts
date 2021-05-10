import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpPageComponent } from './otp-page/otp-page.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'otpPage',
    component:OtpPageComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
