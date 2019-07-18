import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hk-baoxian';
  contactList = '';
  constructor(private dbService : DbService) {
  }


  ngOnInit() {
    this.dbService.list().on('value', snapshot =>  {
       var data = snapshot.val();
       this.contactList = JSON.stringify(data);
    })
  }
}
