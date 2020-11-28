import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products:Product[];

  @Output()
  productSelectioner = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.products = [
      new Product(1, 'Bananas', 'very sweet', 'assets/image/banana.jpg', 12.5),
      new Product(2, 'Avocados', 'sweet', 'assets/image/avocado.jpg', 2.5)
    ]
  }

  selectedProduct(message){
    this.productSelectioner.emit(message);

  }


}
