import { ConstantsService } from './../services/constants.service';
import { HttpService } from './../services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  addHorseForm:FormGroup;


  constructor(private http:HttpService,private constants:ConstantsService,private router:Router) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.addHorseForm=new FormGroup({
      horse_name:new FormControl(),
      horse_number:new FormControl(),
      aqha_number:new FormControl(),
      color:new FormControl()
    });
  }
// Add horse details
  addHorse(){
    console.log(this.addHorseForm);
    this.http.postData(this.constants.horseUrl,this.addHorseForm.value)
    .subscribe((response:any) =>{
      console.log(response);
     if(response.status>=200 && response.status<300){
       let horseData=response.body.data;
      this.router.navigateByUrl('/horses');
     }
    });
    }
  }
      