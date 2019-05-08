import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { LoginInterface, LoginResponse } from './../model/login.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[HttpService]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginRequest:LoginInterface;
  constructor(private loginService:LoginService,private httpService:HttpService ,private router:Router) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.loginForm=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    });
  }
  authorizeLogin(){
    this.loginRequest=this.loginForm.value;
this.loginRequest.password=this.loginService.generateHash(this.loginRequest.password);
   this.httpService.login(this.loginRequest).subscribe((response:any) => {
     console.log(response);
    if(response.status>=200 && response.status<300){
      let loginData=response.body.data;
      this.httpService.token=loginData.access_token;
      this.router.navigateByUrl('/horses');
     }
     

    //  console.log(response);
   });
console.log(this.loginRequest);

  }
}
