import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from '../register/register/register.component';
import { HomeComponent } from '../home/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent},
            { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
            { path: 'register', component: RegisterComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ]
})
export class AppRoutingModule { }