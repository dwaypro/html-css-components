import { Component, OnInit } from '@angular/core';
import {DummyDataService} from '../dummy-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  posters = []
  test = "I am here";
  constructor(
    private dummyService: DummyDataService
  ) { }

  ngOnInit() {
    this.fetchDummyData();
  }

fetchDummyData(){
  // this.datas = data.results
 this.dummyService.getDummyData().subscribe(data =>  this.posters = data.results)
}

}
