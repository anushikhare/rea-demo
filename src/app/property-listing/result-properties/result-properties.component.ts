import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rea-result-properties',
  templateUrl: './result-properties.component.html',
  styleUrls: ['./result-properties.component.scss']
})
export class ResultPropertiesComponent implements OnInit {
  property = {
    price: '$726500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
    logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif&quot'
    },
    id: 1,
    mainImage: 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg&quot'
  };
  constructor() { }

  ngOnInit() {
  }

  addProperty(id: number) {
    console.log('Property Id: ', id);
  }
}
