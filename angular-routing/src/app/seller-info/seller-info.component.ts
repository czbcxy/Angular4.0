import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  private sellerInfoId : number;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.sellerInfoId = this.routeInfo.snapshot.queryParams["id"];
  }

}
