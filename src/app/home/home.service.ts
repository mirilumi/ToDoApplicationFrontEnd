import { Injectable } from "@angular/core";
import { AuthenticationService } from "../shared/authentication.service";
import { environment } from "../environments/conf";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Item } from "../model/Item";
import { ItemPostDto } from "../model/ItemPostDto";

@Injectable()
export class HomeService{
    clientUrl = environment.serverUrl+"/api/client";
    constructor(private auth:AuthenticationService, private http : HttpClient){}
    getAllItems():Observable<Item[]>{
        return this.http.get<Item[]>(environment.serverUrl+"/api/item")
    }
    addItem(item:ItemPostDto):Observable<Item>{
        return this.http.post<Item>(environment.serverUrl+"/api/item",item);
    }
}