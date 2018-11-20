import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './shared/app.routing';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthenticationService } from './shared/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfoter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { JwtInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    RegisterComponent,
    AppsettingsComponent,
    RegisterComponent,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [AuthGuardService,AuthenticationService,HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
