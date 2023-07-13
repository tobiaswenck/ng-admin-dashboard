import { Component } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-card-roi',
  templateUrl: './card-roi.component.html',
  styleUrls: ['./card-roi.component.scss']
})
export class CardRoiComponent {

  saleData = [
    { name: "2016", value: 190 },
    { name: "2017", value: 203 },
    { name: "2018", value: 220 },
    { name: "2019", value: 248 },
    { name: "2020", value: 250 },
    { name: "2021", value: 260 },
    { name: "2022", value: 283 },
  ];

 customColors = [
  { name: "2016", value: "#A3A3A4" },
  { name: "2017", value: "#A3A3A4" },
  { name: "2018", value: "#A3A3A4" },
  { name: "2019", value: "#A3A3A4" },
  { name: "2020", value: "#A3A3A4" },
  { name: "2021", value: "#A3A3A4" },
  { name: "2022", value: "#FCF28A" },
];

}


