import { ConstantsService } from './../services/constants.service';
import { HttpService } from './../services/http.service';
import { Horse } from './../model/horse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

horses:Horse[];
  constructor(private httpService:HttpService,private constants:ConstantsService) { }

  ngOnInit() {
    this.getHorses();
  }

  // To get horse list details
getHorses():void {

  this.httpService.getData(this.constants.horseUrl).subscribe((response :any)=>this.horses = response.body.data);
}

// to delete data by id
deleteHorse(horseId:string) {
  if(confirm('Are you sure you want to delete' )){
  this.httpService.deleteData(horseId).subscribe((response:any)=>{
    // console.log(response);
  console.log(`horse with id = ${horseId} is deleted`);
  });
  
}
}
}
