import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  regisObj: any = {
    "name":"",
    "email":"",
    "password":""
  };

  constructor(private http: HttpClient){

  }

  save(){

  }

}
