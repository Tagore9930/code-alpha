import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueTrackerHeaderComponent } from './issue-tracker-header/issue-tracker-header.component';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';
import { IssueTrackerSidebarComponent } from './issue-tracker-sidebar/issue-tracker-sidebar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IssueTrackerComponent
  }
]

@NgModule({
  declarations: [
    IssueTrackerHeaderComponent,
    IssueTrackerComponent,
    IssueTrackerSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskThreeModule { }
