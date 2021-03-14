import { Injectable } from '@angular/core';
import { MenuInterface } from "../dataModel/menu-interface";
import { HttpClient } from "@angular/common/http";
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private menusUrl = `/assets/menu.json`;

  constructor(private http: HttpClient) {

  }

  getMenu(): Observable<MenuInterface[]>{
      return this.http.get<MenuInterface[]>(this.menusUrl);
  }
}
