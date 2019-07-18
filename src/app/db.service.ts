import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DbService implements OnInit {
  database : any;
  constructor() { }

  add(model : any) {
    this.checkInit();
    console.log('continue...');
    this.database.ref('contacts/' + model.id).set({
      model
    });
    console.log('Added record to db succesfully....');
  }
  list() {
    this.checkInit();
    return firebase.database().ref('contacts');
    //return this.database.ref('contacts').limitToLast(100);
  }
  checkInit() {
    if (!this.database) {
      console.log('not init yet... ');
      this.ngOnInit();
    }
  }
  ngOnInit() {
    var firebaseConfig = {
        apiKey: "AIzaSyDwIGT7S5-7nuSDwaGVbel4WvE7aZ-DVsk",
        authDomain: "hk-baoxian.firebaseapp.com",
        databaseURL: "https://hk-baoxian.firebaseio.com",
        projectId: "hk-baoxian",
        storageBucket: "hk-baoxian.appspot.com",
        messagingSenderId: "928412692060",
        appId: "1:928412692060:web:33cb51a50dfdb9e5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log('init firebase......' + firebase);
      this.database = firebase.database();
      console.log('init database......' + this.database);
  }
}
