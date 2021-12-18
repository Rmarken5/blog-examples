import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestingComponent} from './feature/testing/testing.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: TestingComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TestingComponent,
  ],
})
export class TestingModule {
}
