import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public async fetchURLs(): Promise<string[]> {
    return await firstValueFrom(this.httpClient.get<string[]>('someFakeApi'));
  }
}
