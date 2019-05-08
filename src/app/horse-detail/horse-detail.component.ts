import { HttpService } from './../services/http.service';
import { Component, OnInit,Input } from '@angular/core';
import { Horse } from '../model/horse';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
})
export class HorseDetailComponent implements OnInit {
  horses:Horse;

  constructor(
  private route: ActivatedRoute,
  private httpService: HttpService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getHorse(this.horses.id);
  } 
  getHorse(horseId:string): void {
    this.httpService.getHorse(horseId).subscribe((response:any) => this.horses = response);
  }
  goBack(): void {
    this.location.back();
  }
}
