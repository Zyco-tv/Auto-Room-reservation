import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HousCardComponent } from './hous-card/hous-card.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HousDetailComponent } from './hous-detail/hous-detail.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HousCardComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HousDetailComponent,
    SplashscreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
