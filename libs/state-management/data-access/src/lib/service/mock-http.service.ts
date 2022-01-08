import { Injectable } from '@angular/core';
import {delay, firstValueFrom, of} from 'rxjs';

@Injectable()
export class MockHttpService {
  data: {[key:number]: string} = {
    1: 'https://runescape.wiki/images/5/56/Frog_%28NPC%29.png?e9771',
    2: 'https://gamepedia.cursecdn.com/diablo_gamepedia/6/6d/Amazon_Sprite_(Diablo_II).gif?version=a2c43ef34a03447a4d936a5af0d312e9',
    3: 'https://media.boingboing.net/wp-content/uploads/2015/11/150611A-Sagan.jpg',
  };
  constructor() {}

  public async callFakeAPI(): Promise<string> {
    const random = Math.floor(Math.random() * 3) + 1;
    const url = this.data[random];
   return await firstValueFrom(of(url)
      .pipe(
        delay(1500)));
}
