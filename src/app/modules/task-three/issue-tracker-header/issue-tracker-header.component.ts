import { Component, EventEmitter, Output } from '@angular/core';
import { IssueTrackerSidebarComponent } from '../issue-tracker-sidebar/issue-tracker-sidebar.component';
import { IssueTrackerComponent } from '../issue-tracker/issue-tracker.component';

@Component({
  selector: 'app-issue-tracker-header',
  templateUrl: './issue-tracker-header.component.html',
  styleUrls: ['./issue-tracker-header.component.scss']
})
export class IssueTrackerHeaderComponent {
  @Output() sidebarEventEmitter = new EventEmitter<string>();

  openSidebar() {


    if (IssueTrackerComponent?.sidebarOpen) {

      console.log("workingggggggggggggggggg");
      this.sidebarEventEmitter.emit('close')
    } else {

      this.sidebarEventEmitter.emit('open')
    }
  }
}
