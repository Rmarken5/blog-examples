import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-apps-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  public toggleClass: string = '';

  constructor() {}

  ngOnInit(): void {}
}