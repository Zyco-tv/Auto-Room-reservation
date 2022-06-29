import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousDetailComponent } from './hous-detail/hous-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

const routes: Routes = [
  { path: 'home', component: SplashscreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'house-detail', component: HousDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
