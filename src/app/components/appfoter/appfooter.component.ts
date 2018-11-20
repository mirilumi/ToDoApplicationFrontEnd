import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

@Component({
  selector: 'app-appfooter',
  templateUrl: './appfooter.component.html',
  styleUrls: ['./appfooter.component.css']
})
export class AppfooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    this.router.navigate(['login']);
  }
}
