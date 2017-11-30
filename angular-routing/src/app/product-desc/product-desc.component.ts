import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {

  private productDescId : number;
  constructor(private routeInfo : ActivatedRoute) { }

  ngOnInit() {
    this.productDescId = this.routeInfo.snapshot.queryParams["id"];
  }

}
