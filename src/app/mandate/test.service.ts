import { Injectable } from '@angular/core';
import { searchItems } from 'src/data/test-data';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getSearchBarItems() {
    return Array.from(searchItems);
    
  }
}
