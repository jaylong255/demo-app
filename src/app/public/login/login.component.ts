import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router,  RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  // token;
  // response = {
  //   token: 'no yet token'
  // };
  // response.token = 'no token yet';
  // token = 'no yet token';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit(){
    console.log(this.form.getRawValue());

    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      scope: '*'
    };
    this.http.post(environment.appUrl + 'oauth/token', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/secure']);
      },
      //   console.log('success');
      //   console.log(result);
      //   // this.response.token = result;
      // },
      // error => {
      //   console.log('error');
      //   console.log(error);
      // }
      // result => this.token = JSON.stringify(result)
    );
  }

}
