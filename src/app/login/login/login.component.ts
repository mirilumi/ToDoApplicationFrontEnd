import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserToken } from 'src/app/model/user-token';
import { UserGetDto } from 'src/app/model/UserGetDto';
import { HelperFunctions } from 'src/app/shared/functions';
import { TokenWithUser } from 'src/app/model/TokenWithUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {};
  constructor(private auth:AuthenticationService,private router:Router) { }
  tokenWithUser:TokenWithUser;
  loginResponse:UserToken;
  userGetDto:UserGetDto;
  ngOnInit() {
  }
  
  login_user(login: NgForm){
    this.auth.login(login.value).subscribe(data => {
      this.tokenWithUser = data;
      localStorage.setItem('token', this.tokenWithUser.userTokenState.access_token.toString());
      localStorage.setItem('firstName', this.tokenWithUser.userGetDto.firstName.toString());
      localStorage.setItem('lastName', this.tokenWithUser.userGetDto.lastName.toString());
      this.router.navigate(['']);
      HelperFunctions.DisplayToastMessageSuccess("You are succesfully loged in");
    }, error => { 
      HelperFunctions.DisplayToastMessageError(' An error occurred');
    });
  }
  cancel(){
    this.router.navigate(['']);
  }
  register(){
    this.router.navigate(['register']);
  }
}
