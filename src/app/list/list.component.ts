import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tab = [];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private  ServiceService: ServiceService) { }
  ngOnInit() {
    this.tab = this.ServiceService.table;
  }
  DELETE(i) {
    const index = i;
    this.ServiceService.remove(index);
    // this.tab.splice(i , 1);
    // this.ServiceService.table = this.tab;
  }

}
