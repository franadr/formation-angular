import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  error = '' ;
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService) {}

  ngOnInit() {
    // Reset login status
    this._authenticationService.logout();
  }

  login() {
    this._authenticationService.login(this.model.username, this.model.password)
      .subscribe((result: boolean) => {
        if (result) { this._router.navigate(['/heroes']); } else { this.error = 'Bad credentials'; }

      },
        (error) => {
        console.log(error);
        this.error = 'Unexpected Error';
        });
  }

}
