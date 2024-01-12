import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookWebsiteComponent } from './recipe-book-website/recipe-book-website.component';
import { RecipeBookWebsiteHeaderComponent } from './recipe-book-website-header/recipe-book-website-header.component';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: RecipeBookWebsiteComponent
  }
]

@NgModule({
  declarations: [
    RecipeBookWebsiteComponent,
    RecipeBookWebsiteHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class TaskOneModule { }
