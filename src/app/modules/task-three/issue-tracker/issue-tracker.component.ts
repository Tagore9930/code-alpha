import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-tracker',
  templateUrl: './issue-tracker.component.html',
  styleUrls: ['./issue-tracker.component.scss']
})
export class IssueTrackerComponent {
  screenWidth: number = window?.innerWidth;
  static sidebarOpen: boolean = (575 < window?.innerWidth) ? true : false;

  changeSidebar(value: any) {
    let sidebar = document.querySelector('.sidebar');
    console.log(sidebar);

    if (value == "open") {
      console.log("opened");
      sidebar?.setAttribute('class', 'sidebar p-0 open')
      IssueTrackerComponent?.changeVariableValue(true)
    } else {
      console.log("closed");
      sidebar?.setAttribute('class', 'sidebar p-0 close')
      IssueTrackerComponent?.changeVariableValue(false)

    }
  }

  static changeVariableValue(value: boolean) {
    this.sidebarOpen = value;
  }
}
