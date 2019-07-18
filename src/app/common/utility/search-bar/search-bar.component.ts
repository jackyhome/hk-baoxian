import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue = {};
  opDate = [
    {label: 'Before', value: '<'},
    {label: 'After', value: '>'},
    {label: 'Between', value: 'between'}
  ];
  @Input() searchObj: any;

  constructor() { }

  ngOnInit() {
    this.initSearch();
  }
  initSearch() {
    if (this.searchObj) {
      this.searchObj.forEach(item => {
        this.searchValue[item.id] = {};
      });
  
    }
  }
  isSearchUsed() {
    for (let key in this.searchValue) {
      if (this.searchValue[key].isUsed) {
        return true;
      }
    }
    return false;
  }
  clearSearchValue(keyVal) {
    let item = this.searchValue[keyVal];
    if (item.value && item.op!= 'between') {
      if (item.value instanceof Array) {
        item.value= item.value[0];
      }
    }
  }

}
