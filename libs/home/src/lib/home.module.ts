import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './feature/home/home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path:'',
  component: HomeComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule {}
