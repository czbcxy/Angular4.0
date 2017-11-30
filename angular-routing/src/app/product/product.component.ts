import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    private productId: number;

    //ActivatedRoute是全局参数容器
    constructor(private routinfo: ActivatedRoute) {

    }

    ngOnInit() {
        // 从商品传递拿到参数
        // this.productId = this.routinfo.snapshot.queryParams["id"];
        // 从url拿到参数
        // this.productId = this.routinfo.snapshot.params["id"]; //参数快照
        this.routinfo.params.subscribe((params: Params) => this.productId = params["id"]); //参数的订阅
    }

}
