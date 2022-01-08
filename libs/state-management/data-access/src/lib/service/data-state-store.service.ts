import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DisplayData {
  loadingStatus: LOADING_STATUS;
  url: string;
}

export enum LOADING_STATUS {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class DataStateStoreService {
  private displayDataBehaviorSubject: BehaviorSubject<DisplayData>;
  public displayData$: Observable<DisplayData>;
  private initialDisplayData: DisplayData = {
    url: '',
    loadingStatus: LOADING_STATUS.LOADING,
  };

  constructor() {
    this.displayDataBehaviorSubject = new BehaviorSubject<DisplayData>(
      this.initialDisplayData
    );
    this.displayData$ = this.displayDataBehaviorSubject.asObservable();
  }

  public updateLoadingStatus(loadingStatus: LOADING_STATUS): void {
    this.displayDataBehaviorSubject.next({
      ...this.getCurrentState(),
      loadingStatus,
    });
  }

  public updateUrl(url: string): void {
    this.displayDataBehaviorSubject.next({
      ...this.getCurrentState(),
      url,
    });
  }

  private getCurrentState(): DisplayData {
    return this.displayDataBehaviorSubject.getValue();
  }
}
