import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, product } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

cart: product []=[];

  constructor(private cartService: CartService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart=this.cartService.getCart();

  } 

  decreaseCartItem(product){
    this.cartService.decreseProduct(product);
  }

  increaseCartItem(product){
    this.cartService.addProduct(product);
  }
  removeCartItem(product){
    this.cartService.removeProduct(product);
  }
  getTotal(){
    [{price : 5, amount:2}]
    return this.cart.reduce((i,j) =>i+j.price*j.amount,0);
  }
  close(){
    this.modalCtrl.dismiss();
  }
checkout(){
  
}
}
