
import { Component} from '@angular/core';
import {SuperheroFormComponent} from './component/superhero/superhero-form/superhero-form.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dialog: MatDialog){}

  openCreatModal(): void {

    // openn Modal
    const dialogRef = this._dialog.open(SuperheroFormComponent, {
      width: '30%'
    });

    dialogRef.beforeClose().subscribe(result => {
      console.log('closed');
    });
  }
}
