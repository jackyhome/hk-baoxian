import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMandateComponent } from './search-mandate.component';

describe('SearchMandateComponent', () => {
  let component: SearchMandateComponent;
  let fixture: ComponentFixture<SearchMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
