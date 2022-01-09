import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-examples-image-display',
  template: `
    <section *ngIf="imageUrl">
      <img [src]="imageUrl">
    </section>
  `,
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  @Input() imageUrl: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
