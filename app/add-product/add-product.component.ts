import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';
import{Product} from'../product.model'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct: Product = new Product('', '', ' ');

  Products: Product[] = [];


  constructor(private cartService:CartService){

  }
  ngOnInit(): void {

    
   

     }

 
     addProduct() {
      this.Products.push(this.newProduct);
  
      this.newProduct = new Product('', '', ' ');
    }

  

}
