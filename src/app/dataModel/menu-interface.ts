export interface MenuInterface {
  tabId: number;
  tabLabel: string;
  subMenu:subMenuInterface[];
}

interface subMenuInterface{
  subMenuId: number;
  subMenuIcon:string;
  subMenuLabel:string;
}
