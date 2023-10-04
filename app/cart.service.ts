import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartIteamList:any=[]
public productList=new BehaviorSubject<any>([]);
  constructor() { }
  getProduct(){
    return this.productList.asObservable();   
  }
  setProduct(product:any){
    this.cartIteamList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartIteamList.push(product);
    this.productList.next(this.cartIteamList);
    this.getTotalPrice();
    console.log(this)
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartIteamList.map((a:any)=>{
      grandTotal +=a.total;
    })
return grandTotal;
  }
  removeCartItem(product:any){
    this.cartIteamList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartIteamList.splice(index,1);
      }

    })

  }
  removeAllCart(){
    this.cartIteamList=[]
    this.productList.next(this.cartIteamList);

  }
}
