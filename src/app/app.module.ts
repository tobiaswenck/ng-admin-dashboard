import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardTrafficComponent } from './card-traffic/card-traffic.component';
import { CardReportComponent } from './card-report/card-report.component';
import { CardRateComponent } from './card-rate/card-rate.component';
import { CardRoiComponent } from './card-roi/card-roi.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardCustomerComponent } from './card-customer/card-customer.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardTrafficComponent,
    CardReportComponent,
    CardRateComponent,
    CardRoiComponent,
    CardImageComponent,
    CardCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
 }
