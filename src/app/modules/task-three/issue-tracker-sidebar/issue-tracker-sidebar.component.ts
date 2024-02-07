import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IssueTrackerComponent } from '../issue-tracker/issue-tracker.component';

@Component({
  selector: 'app-issue-tracker-sidebar',
  templateUrl: './issue-tracker-sidebar.component.html',
  styleUrls: ['./issue-tracker-sidebar.component.scss']
})
export class IssueTrackerSidebarComponent {
  @Output() sidebarEventEmitter = new EventEmitter<string>();

  screenWidth: number = window?.innerWidth;



  openSidebar() {
    let menubtn = document.querySelector('.menu');
    if (IssueTrackerComponent?.sidebarOpen) {
      this.sidebarEventEmitter.emit('close')
    } else {
      this.sidebarEventEmitter.emit('open')
    }
  }

}
