import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'
console.log(DataService)
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private data: DataService) { }
  users: Object;

  ngOnInit() {
    console.log("=data=", this.data);
    this.data.getUsers().subscribe(
      data => this.users = data 
    );
    console.log("======users===", this.users);
  }

}
