import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductComponent[];

  constructor() { }

  ngOnInit() {
  }

  public onMudouValor(evento) {
    console.log("Valor obtido no componente pai: " + evento.novoValor);
  }

}