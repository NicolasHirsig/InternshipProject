import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { MessageService } from '../services/message.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-apireq',
  templateUrl: './apireq.component.html'
})

export class ApireqComponent implements OnInit {

  data: any;
  dataArray = [];

  constructor(private apiService: ApiService, private httpClient: HttpClient, private messageService: MessageService) {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.data = this.apiService.data;
    this.dataArray = this.data.list;
    this.messageService.add('APIRequestComponent: fetched data from API');
  }
}
