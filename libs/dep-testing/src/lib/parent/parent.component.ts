import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'blog-examples-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  uniqueUrls: Set<string> = new Set<string>();

  constructor(private apiSrc: ApiService) {}

  public async fetchUrls($event: Event): Promise<void> {
    const urls = await this.apiSrc.fetchURLs();
    this.uniqueUrls = new Set<string>(urls);
  }
}
