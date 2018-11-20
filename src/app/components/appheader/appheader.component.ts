import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  private UserObj:any;
  private notification = [];
  constructor(private auth:AuthenticationService){}
  ngOnInit(){
    // console.log(this.userContext)
  }
  logout(){
    this.auth.logout();
  }
}
