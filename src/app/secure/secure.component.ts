import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.sass']
})
export class SecureComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

}
