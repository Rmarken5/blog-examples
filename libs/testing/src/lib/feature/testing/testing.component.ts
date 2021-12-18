import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'blog-examples-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  public toggleClass: string = '';

  constructor(private readonly testSvc: TestService) {}

  async ngOnInit(): Promise<void> {
    this.toggleClass = await this.testSvc.getClassValue();
  }
}
