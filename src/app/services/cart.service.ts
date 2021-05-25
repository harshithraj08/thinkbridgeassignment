import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface product {
  id :number;
  name : string;
  price : number;
  amount : number;

}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data : product[] =  [
    { id: 0, name : 'pizza salami', price : 8.99, amount : 1 },
    { id: 1, name : 'pizza classic', price : 10.99, amount : 1 },
    { id: 2, name : 'sliced bread', price : 12.99, amount : 1 },
    { id: 3, name : 'salad', price : 22.99, amount : 1 },
    { id: 4, name : 'ice cream', price : 15.99, amount : 1 },
  ];
  private cart =[];
  private cartItemCount =new BehaviorSubject(0);

  constructor() { }
  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product){
    let added =false;
    for(let p of this.cart){
      if(p.id == product.id){
        p.amount += 1;
        added =true;
        break ;
      }
    }
    if(!added){
      this.cart.push(product);

    }
    this.cartItemCount.next(this.cartItemCount.value +1);

  }
  decreseProduct(product){
    for(let [index ,p] of this.cart.entries()){
      if(p.id === product.id){
        p.amount -= 1;
        if(p.amount == 0){
          this.cart.splice(index , 1);
        }
      }
    }
this.cartItemCount.next(this.cartItemCount.value -1);
  }
  removeProduct(product) {

    for(let [index ,p] of this.cart.entries()){
      if(p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value -p.amount);
        
          this.cart.splice(index , 1);
        }
      }
  }

}