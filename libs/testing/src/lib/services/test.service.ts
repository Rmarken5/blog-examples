import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  constructor() {}

  public getClassValue(): Promise<string> {
    return Promise.resolve('pink');
  }
}
