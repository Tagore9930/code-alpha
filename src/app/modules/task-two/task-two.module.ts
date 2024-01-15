import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SocialMediaHeaderComponent } from './social-media-header/social-media-header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SocialMediaComponent
  }
]

@NgModule({
  declarations: [
    SocialMediaComponent,
    SocialMediaHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskTwoModule { }
