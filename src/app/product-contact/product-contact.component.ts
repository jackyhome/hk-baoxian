import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DbService } from '../db.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-product-contact',
  templateUrl: './product-contact.component.html',
  styleUrls: ['./product-contact.component.css']
})
export class ProductContactComponent implements OnInit, AfterViewInit {

  submitted = false;
  model = new Contact('', '', '', '');
  pows = ['少于5000', '5000到10000', '10000到50000', '50000到100000',' 100000以上'];
  constructor(private dbServie : DbService) { }

  ngOnInit() {
    console.log('on init....');
    this.dbServie.list().once('value').then(snapshop => {
    snapshop.forEach(usr => {
        this.model = new Contact(usr.key, usr.val().username, usr.val().email, usr.val().budget, usr.val().description)
      });
      console.log('get model value: ' + this.model);
    })
  }
  ngAfterViewInit() {
      console.log('after view init.....');
  }
  onSubmit() {
    console.log('submitting...... ');
    this.submitted = true;
    this.model.id = this.model.username;
    this.dbServie.add(this.model);
    console.log('submitted.');
  }
}
