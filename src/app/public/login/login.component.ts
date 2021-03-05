import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

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
      client_id: 2,
      client_secret: 'YDpFROmO5bYeVLIFxLexOY44H0c8iDTqn4Z3hcwG',
      scope: '*'
    };
    this.http.post('http://demo-api.test/oauth/token', data).subscribe(
      result => {
        console.log('success');
        console.log(result);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
