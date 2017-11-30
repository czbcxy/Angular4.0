import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public  products: Array<Products>;
  private imgURL = 'http://placehold.it/350x150';

  constructor() { }

  ngOnInit() {
    this.products=[
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"]), 
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"]),
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"]),
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"]),
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"]),
      new Products(1,"第一个商品",1.99,3.5 ,"这是第一个商品,是我在学习angular入门实战的demo",["电子产品","硬件设备"])
    ]
  }

}

export class Products {
      constructor(
        public id : number,
        public title: string,
        public  price : number,
        public rating: number,
        public desc: string,
        public  caregories:Array<string>
      ){}

}