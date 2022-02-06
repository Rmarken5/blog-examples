import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ApiService } from './service/api.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent],
  providers: [ApiService],
})
export class DepTestingModule {}
