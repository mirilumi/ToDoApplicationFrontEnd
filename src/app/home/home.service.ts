import { Injectable } from "@angular/core";
import { AuthenticationService } from "../shared/authentication.service";
import { environment } from "../environments/conf";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Item } from "../model/Item";
import { ItemPostDto } from "../model/ItemPostDto";

@Injectable()
export class HomeService{
    clientUrl = environment.serverUrl+"/api/item";
    constructor(private auth:AuthenticationService, private http : HttpClient){}
    getAllItems():Observable<Item[]>{
        return this.http.get<Item[]>(this.clientUrl)
    }
    addItem(item:ItemPostDto):Observable<Item>{
        return this.http.post<Item>(this.clientUrl,item);
    }
    removeItem(id:Number){
        return this.http.delete(this.clientUrl+'/'+id);
    }
    editItem(item:Item){
        return this.http.patch(this.clientUrl+'/'+item.id,item);
    }
}