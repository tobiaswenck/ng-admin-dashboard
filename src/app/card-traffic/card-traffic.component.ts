import { Component } from '@angular/core';

@Component({
  selector: 'app-card-traffic',
  templateUrl: './card-traffic.component.html',
  styleUrls: ['./card-traffic.component.scss']
})
export class CardTrafficComponent {
  saleData = [
    { name: "Social Media", value: 78 },
    { name: "Organic Search", value: 22 }
  ];

 customColors = [
   { name: "Social Media", value: "#37373C" },
   { name: "Organic Search", value: "#DCDCDC" }
 ];
}
