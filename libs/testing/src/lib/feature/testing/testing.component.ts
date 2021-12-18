import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

export enum Operation {
  add = 'add',
  subtract = 'subtract',
  multiply = 'multiply',
  divide = 'divide',
}

@Component({
  selector: 'blog-examples-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  public toggleClass: string = '';
  @Output() classNameEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly testSvc: TestService) {}

  async ngOnInit(): Promise<void> {
    this.toggleClass = await this.testSvc.getClassValue();
  }

  public calculate(
    operation: Operation,
    operandOne: number,
    operandTwo: number
  ): number {
    switch (operation) {
      case Operation.add:
        return operandOne + operandTwo;
      case Operation.subtract:
        return operandOne - operandTwo;
      case Operation.multiply:
        return operandOne * operandTwo;
      case Operation.divide:
        return operandOne / operandTwo;
    }
  }
}
