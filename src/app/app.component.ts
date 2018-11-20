import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Project Test';
    private UserObj:object = {};
    constructor(private auth:AuthenticationService){

    }
    ngOnInit(){}
}
