import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from 'src/app/common/utility/search-bar/search-bar.component';
import { TestService } from '../test.service';
import { searchItems } from 'src/data/test-data';

@Component({
  selector: 'app-search-mandate',
  templateUrl: './search-mandate.component.html',
  styleUrls: ['./search-mandate.component.css']
})

export class SearchMandateComponent implements OnInit, AfterViewInit {
  searchType = 'Default';
  searchObj : {};
  opDate = [];
  searchItems : Array<any>;


  @ViewChild(SearchBarComponent)
  private searchBar : SearchBarComponent;

  constructor(private route : ActivatedRoute, private ts : TestService) {
    this.opDate = [
      {label: 'Before', value: '<'},
      {label: 'After', value: '>'},
      {label: 'Between', value: 'between'}
    ];
  
   }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchType = params.searchType;
      this.searchItems = this.ts.getSearchBarItems();
      this.searchBar.initSearch();
    })
    console.log(JSON.stringify(this.searchObj));
  }
  clearSearchValue(keyVal) {
    console.log(this.searchObj);
    if (this.searchObj[keyVal + 'Op'] && this.searchObj[keyVal + 'Op'] != 'between') {
      if (this.searchObj[keyVal] && this.searchObj[keyVal] instanceof Array) {
        this.searchObj[keyVal] = this.searchObj[keyVal][0];
      }
    }
  }
  ngAfterViewInit() {
    console.log('test');
  }
  performSearch() {
    console.log(this.searchBar.searchValue);
    for (let key in this.searchBar.searchValue) {
      console.log('key', key);
      let _item = this.searchBar.searchValue[key];
      console.log('_item', _item, _item.isUsed, _item.value instanceof Date);
      if (_item.isUsed && _item.value instanceof Date) {
        let dt = _item.value;
        console.log(_item.value, dt, dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours());
      }
    }
  }
  
}
