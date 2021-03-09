import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
