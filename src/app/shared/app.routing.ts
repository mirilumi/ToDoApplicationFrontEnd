import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },

        ]),
        NgxMyDatePickerModule.forRoot()
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ]
})
export class AppRoutingModule { }