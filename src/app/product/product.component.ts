import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  desc: string;
  @Output() productAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.productAdded.emit({product: this});
  }

}