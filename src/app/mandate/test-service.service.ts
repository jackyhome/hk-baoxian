import { Injectable } from '@angular/core';
import { searchItems } from 'src/data/test-data';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  getSearchBarItems() {
    let newItems = Array.from(searchItems);
    newItems.push({
      id: 'Test Name',
      label: 'Test Field Label',
      type: 'text'
    })
    newItems.push({
      id: 'Test2',
      label: 'Test Label',
      type: 'text'
    });
    return newItems;
  }
}
