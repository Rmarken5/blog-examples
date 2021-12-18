import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './feature/testing/testing.component';
import { RouterModule, Routes } from '@angular/router';
import { TestService } from './services/test.service';

const routes: Routes = [
  {
    path: '',
    component: TestingComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TestingComponent],
  providers: [TestService],
})
export class TestingModule {}
