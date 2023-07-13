import { Component } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.scss']
})
export class CardCustomerComponent {
  saleData = [
    { name: "50-100", value: 5 },
    { name: "100-250", value: 12 },
    { name: "250-500", value: 8 },
    { name: "500+", value: 5 }
  ];

 customColors = [
   { name: "50-100", value: "#A3A3A4" },
   { name: "100-250", value: "#FCF28A" },
   { name: "250-500", value: "#A3A3A4" },
   { name: "500+", value: "#A3A3A4" }
 ];
}
