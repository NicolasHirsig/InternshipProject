import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { MessageService } from '../services/message.service';
import { HttpClient } from '@angular/common/http'
import { fetchData, loadingData } from '../api.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-apireq',
  templateUrl: './apireq.component.html'
})

export class ApireqComponent implements OnInit {

  raw: any;
  data: any;
  dataArray = [];

  constructor(private apiService: ApiService, private messageService: MessageService, private store: Store<{ employees: any }>, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // this.raw = this.apiService.getData();
    this.store.dispatch(fetchData());
    this.store.select(loadingData).subscribe(Response => { this.data = Response; console.log(Response)});
  }

  onClick() {
    this.dataArray = this.data.list;
    this.messageService.add('APIRequestComponent: fetched data from API');

    // new selector (api.selector.ts)
  }
}
