import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  private UserObj:object = {};
  constructor(private auth:AuthenticationService,private router:Router){}
  ngOnInit(){
   // this.UserObj = this.auth.verify_user();
  }
  userList(){
    this.router.navigate(['leaderboard']);
  }
  sponsorList(){
    this.router.navigate(['sponsor']);
  }
  analiticList(){
    this.router.navigate(['analitic']);
  }
  quizList(){
    this.router.navigate(['quiz/newVersion']);
  }
  client_list(){
    this.router.navigate(['clients']);
  }
  questionList(){
    this.router.navigate(['questions']);
  }
  home(){
    this.router.navigate(['']);
  }
}
