import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {


  registerObj: Register;

  constructor(private http: HttpClient){
    this.registerObj=new Register();
  }

  save(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestBody = {
      name: this.registerObj.Name,
      email: this.registerObj.Email,
      password: this.registerObj.Password
    };

    
    this.http.post('http://localhost:8080/Scope/api/v1/user/signup',requestBody,{headers}).subscribe((res:any)=>{
      console.log('Response:', res.token);
      localStorage.setItem('token', res.token);
    
    if (res !== null) {
      this.registerObj = new Register();
      alert("User saved (:");
    } else {
      const errorMessage = res && res.message ? res.message : 'An error occurred while registering.';
      console.log('Error:', errorMessage);
      alert(errorMessage);
    }
    });
  }

}

export class Register{
  Name: string;
  Email:string;
  Password:string;

  constructor(){
    this.Name='';
    this.Email='';
    this.Password='';
  }
}