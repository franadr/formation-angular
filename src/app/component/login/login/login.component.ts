import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../core/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  error = '' ;
  loginForm: FormGroup;
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    // Reset login status
    this._authenticationService.logout();
  }

  login() {
    if(this.loginForm.valid) {
      this._authenticationService.login(this.loginForm)
        .subscribe((result: boolean) => {
            if (result) { this._router.navigate(['/heroes']); } else { this.error = 'Bad credentials'; }

          },
          (error) => {
            console.log(error);
            this.error = 'Unexpected Error';
          });
    }
  }

}
