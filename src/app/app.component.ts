import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Rocket{
  name: String;
  description: String;
  flickr_images: String;
  engine: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-5B';
  data:  Rocket[] = [];
  capsule : any [] = [];
  company : any [] = [];


  constructor(
    private http: HttpClient
  ){}

  ngOnInit() {
    this.http.get<Rocket[]>('https://api.spacexdata.com/v4/rockets').subscribe((data: any)  => {
      this.data = data;
    })
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((capsule: any)  => {
      this.capsule = capsule;
    })
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((company: any)  => {
      this.company = company;
    })
    
  }
}