import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from "@angular/router";
import { HomeService } from './home.service';
import { HelperFunctions } from '../shared/functions';
import { Item } from '../model/Item';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private auth:AuthenticationService,private homeService:HomeService) { }
  private UserObj:object = {};
  private firstName:String;
  private lastName:String;
  items:Item[];
  item:Item;
  private userLogin = false;
  ngOnInit() {

    this.homeService.getAllItems().subscribe(
    data=>{
      this.items= data;
    }, error => { 
      HelperFunctions.DisplayToastMessageError(' An error occurred');
    });
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    
  }
  addItem(item:NgForm){
     this.homeService.addItem(item.value).subscribe(data => {
       this.item = data;
       HelperFunctions.DisplayToastMessageSuccessDeleted('Item Added Sucesfully');
       }, error => {
         HelperFunctions.DisplayToastMessageError('An error has been occured');
     });
   }
}
