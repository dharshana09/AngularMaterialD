import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Of Horses';
  constructor(private router:Router ){}
  get navBarDisplay():string{
    return ["/login"].indexOf(this.router.url)>=0?'none':'block';
  }
}
