import {Component, OnInit} from '@angular/core';
import {DataStateStoreService, LOADING_STATUS} from "../../../../data-access/src/lib/service/data-state-store.service";
import {MockHttpService} from "../../../../data-access/src/lib/service/mock-http.service";

@Component({
  selector: 'blog-examples-state-feature',
  templateUrl: './state-feature.component.html',
  styleUrls: ['./state-feature.component.scss']
})
export class StateFeatureComponent implements OnInit {
  LOADING_STATUS = LOADING_STATUS

  constructor(public stateSvc: DataStateStoreService,
              private mockSvc: MockHttpService) {
  }

  ngOnInit(): void {
  }

  public async callService(event: MouseEvent): Promise<void> {
    try {
      this.stateSvc.updateLoadingStatus(LOADING_STATUS.LOADING);
      const url = await this.mockSvc.callFakeAPI(); // this could also be set from the service if you want all business logic in a service.
      this.stateSvc.updateUrl(url);
      this.stateSvc.updateLoadingStatus(LOADING_STATUS.SUCCESS);
    } catch (err) {
      this.stateSvc.updateLoadingStatus(LOADING_STATUS.ERROR);
    }
  }

}
