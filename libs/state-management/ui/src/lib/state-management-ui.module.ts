import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImageDisplayComponent
  ],
  exports:[ImageDisplayComponent],
})
export class StateManagementUiModule {}
