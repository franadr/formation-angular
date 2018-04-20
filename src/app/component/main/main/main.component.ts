import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SuperheroFormComponent} from '../../superhero/superhero-form/superhero-form.component';
import {AuthenticationService} from '../../../core/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _dialog: MatDialog,
              private _authenticationService: AuthenticationService,
              private _router: Router){}

  openCreatModal(): void {

    // openn Modal
    const dialogRef = this._dialog.open(SuperheroFormComponent, {
      width: '30%'
    });

    dialogRef.beforeClose().subscribe(result => {
      console.log('closed');
    });
  }

  ngOnInit() {
  }

  logout() {
    this._authenticationService.logout();
    this._router.navigate(['/login']);
  }

}
