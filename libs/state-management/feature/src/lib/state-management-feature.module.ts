import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StateFeatureComponent} from './state-feature/state-feature.component';
import {StateManagementUiModule} from "@blog-examples/state-management/ui";
import {StateManagementDataAccessModule} from "@blog-examples/state-management/data-access";

const routes: Routes = [
  {
    path: '',
    component: StateFeatureComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StateManagementUiModule,
    StateManagementDataAccessModule,
  ],
  declarations: [StateFeatureComponent],
})
export class StateManagementFeatureModule {
}
