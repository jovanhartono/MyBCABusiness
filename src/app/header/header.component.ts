import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  time = new Date(); 
  timer;

  constructor(private snackBar : MatSnackBar, private dialog : MatDialog) { }

  openSnackBar(message){
    this.snackBar.open(message);
  }

  openDialog(){
    let dialogReference = this.dialog.open(DialogExampleComponent, {panelClass : 'custom-dialog-container'});

    dialogReference.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.timer = setInterval(()=>{
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
