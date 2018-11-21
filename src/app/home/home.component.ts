import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from "@angular/router";
import { HomeService } from './home.service';
import { HelperFunctions } from '../shared/functions';
import { Item, Status } from '../model/Item';
import { NgForm } from '@angular/forms';
import { ItemPostDto } from '../model/ItemPostDto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService, private homeService: HomeService) { }
  private UserObj: object = {};
  private firstName: String;
  private lastName: String;
  items: Item[];
  item: Item;
  toEdit: Boolean = false;
  itemToAddd: ItemPostDto = new ItemPostDto("");
  private userLogin = false;
  ngOnInit() {

    this.homeService.getAllItems().subscribe(
      data => {
        this.items = data;
        this.itemToAddd.name = "";
      }, error => {
        HelperFunctions.DisplayToastMessageError(' An error occurred');
      });
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');

  }
  addItem(item: NgForm) {
    this.homeService.addItem(item.value).subscribe(data => {
      this.item = data;
      HelperFunctions.DisplayToastMessageSuccessDeleted('Item Added Sucesfully');
      this.ngOnInit();
    }, error => {
      HelperFunctions.DisplayToastMessageError('An error has been occured');
    });
  }
  onEdit(item: Item) {
    this.toEdit = true;
    this.item = item;
    console.log(this.item.name);
    console.log(this.item.status);
  }
  onRemove(item: Item) {
    this.homeService.removeItem(item.id).subscribe(data => {
      HelperFunctions.DisplayToastMessageSuccessDeleted('Item deleted Sucesfully');
      this.ngOnInit();
    }, error => {
      HelperFunctions.DisplayToastMessageError('An error has been occured');
    });
  }
  getColor(item: Item): string {
    if (item.status.toString().toUpperCase() == "NEW".toUpperCase()) {
      return 'red';
    } else if (item.status.toString().toUpperCase() == "PROGRESS") {
      return 'orange';
    } else if (item.status.toString().toUpperCase() == "COMPLETED") {
      return 'green'
    }
  }
  editItem(item:NgForm){
    this.homeService.editItem(item.value).subscribe(data => {
      HelperFunctions.DisplayToastMessageSuccessDeleted('Item edited Sucesfully');
      this.toEdit = false;
      this.ngOnInit();
    }, error => {
      HelperFunctions.DisplayToastMessageError('An error has been occured');
    });
  }
  back(){
    this.toEdit = false;
  }
}
