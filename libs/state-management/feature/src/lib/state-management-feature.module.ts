import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateFeatureComponentComponent } from './state-feature-component/state-feature-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StateFeatureComponentComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [StateFeatureComponentComponent],
})
export class StateManagementFeatureModule {}
