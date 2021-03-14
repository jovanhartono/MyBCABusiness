import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MenuInterface } from "../../dataModel/menu-interface";
import { MenuServiceService } from "../../service/menu-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  constructor(private menuService : MenuServiceService) { }

  menus:MenuInterface[];

  getMenus():void{
    this.menuService.getMenu().subscribe( menu => this.menus =  menu);
  }

  ngOnInit(): void {
    this.getMenus();
  }

}
