import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockHttpService } from './service/mock-http.service';

@NgModule({
  imports: [CommonModule],
  providers: [MockHttpService],
})
export class StateManagementDataAccessModule {}
