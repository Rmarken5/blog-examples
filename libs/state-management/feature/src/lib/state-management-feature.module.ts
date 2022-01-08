import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StateFeatureComponent } from './state-feature/state-feature.component';

const routes: Routes = [
  {
    path: '',
    component: StateFeatureComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [StateFeatureComponent],
})
export class StateManagementFeatureModule {}
