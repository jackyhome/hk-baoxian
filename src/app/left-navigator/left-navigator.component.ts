import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigator',
  templateUrl: './left-navigator.component.html',
  styleUrls: ['./left-navigator.component.css']
})
export class LeftNavigatorComponent implements OnInit {
  menuGroup = [
    {
      id: "Mandates",
      items: [
        {
          label: "Create",
          action: "createMandate"
        },
        {
          label: "Re-route",
          action: "searchMandate/reRouteMandate"
        },
        {
          label: "Update",
          action: "searchMandate/updateMandate"
        }
      ]
    },
    {
      id: "Search",
      items: [
        {
          label: "My Mandates",
          action: "searchMandate/active"
        },
        {
          label: "In Progress",
          action: "searchMandate/pending"
        }
      ]
    },
    {
      id: "Test",
      items: [
        {
          label: "Product",
          action: "product"
        },
        {
          label: "Contact",
          action: "contact"
        }
      ]
    }
  ];
  constructor() { }

  doAction(actionUrl : String) {
    console.log(actionUrl);
  }
  ngOnInit() {
  }

}
