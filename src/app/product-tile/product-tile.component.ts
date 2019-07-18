import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  title = 'Test Product';
  contacts = {};
  description = 'This is the new product for your reference.';
  constructor(private dbService : DbService) { }

  ngOnInit() {
    this.contacts = this.dbService.list();
    console.log(this.contacts);
  }

}
