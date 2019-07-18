import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  submitted = false;
  model = new Contact('test', 'test', 'test@test.test', '');
  pows = []
  constructor() { }
  onSubmit() {
    console.log('form is submitted.');
    this.submitted = true;
  }
  ngOnInit() {
  }

}
