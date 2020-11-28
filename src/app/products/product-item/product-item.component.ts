import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product

  
  @Output()
  selectedProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {

  }
  selected(){
    this.selectedProduct.emit(this.product);
  }

}
