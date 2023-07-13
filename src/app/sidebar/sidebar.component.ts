import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isDarkMode = true;
  container = document.getElementById("sidebar-container");
  container2 = document.getElementsByClassName("div");

  changeLightMode() {
    if (this.isDarkMode == true) {
      this.container!.style.backgroundColor = "#DCDCDC";
      this.container!.style.color = "#242529";
      this.isDarkMode = false;
      return this.container!.style.backgroundColor = "#DCDCDC"
    } else if (this.isDarkMode == false) {
      this.container!.style.backgroundColor = "#242529";
      this.isDarkMode = true;
      return this.container!.style.backgroundColor = "#242529";
    } else {
      return console.log("error");
    }
  }
}
