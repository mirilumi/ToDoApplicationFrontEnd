import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { HelperFunctions } from 'src/app/shared/functions';
import { UserToken } from 'src/app/model/user-token';
import { TokenWithUser } from 'src/app/model/TokenWithUser';
//import { NotificationService } from 'ng2-notify-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router:Router) { }
  tokenWithUser:TokenWithUser;
  loginResponse:UserToken;
  ngOnInit() {
          // this.notify.show("Register Success. You Have to wait for admin confirmation");

  }
   register_user(register: NgForm){
    this.auth.register(register.value)
    .subscribe(data => {
      this.tokenWithUser = data;
      localStorage.setItem('token', this.loginResponse.access_token.toString());
      localStorage.setItem('token', this.tokenWithUser.userTokenState.access_token.toString());
      localStorage.setItem('firstName', this.tokenWithUser.userGetDto.firstName.toString());
      localStorage.setItem('lastName', this.tokenWithUser.userGetDto.lastName.toString());
      this.router.navigate(['']);
      HelperFunctions.DisplayToastMessageSuccess(' User register succesfully');
    }, error => {
      HelperFunctions.DisplayToastMessageError("Somathing went wrong","Register failed"); 
    });
  }
  cancel(){
    this.router.navigate(['']);
  }
} 
