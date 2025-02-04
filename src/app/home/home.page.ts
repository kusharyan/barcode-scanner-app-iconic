import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonThumbnail,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonContent,
  IonLabel,
  IonText,
  IonItem,
  IonListHeader,
  IonCol,
  IonRow,
  IonCard, IonToast, IonBadge } from '@ionic/angular/standalone';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonBadge, IonToast, 
    IonCard,
    IonRow,
    IonCol,
    IonListHeader,
    IonThumbnail,
    IonItem,
    IonText,
    IonLabel,
    IonButton,
    IonButtons,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonContent,
    RouterLink
  ],
})
export class HomePage {
  isToast = true;
  toastData:any = [];
  totalItems: number = 0;
  cartSub!: Subscription;

  private cartService = inject(CartService);
  constructor() {}

  ngOnInIt () {
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItems : 0;
      }
    })
  }

  async startScanBarcode(){
    try{
      const code = this.cartService.startScan();
      if (!code){
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'No Such Barcode Available',
        };
        return;
      }
      console.log(code)
    }catch(e){
      console.log(e);
    }
  }


  async scanAndPay(){
    try{
      const code = this.cartService.startScan(0);
      if (!code){
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'No Such Barcode Available',
        };
        return;
      }
      this.isToast = true;
      this.toastData = {
        color: 'success',
        message: 'Payment Successful'
      }
      console.log(code)
    }catch(e){
      console.log(e);
    }
  }
}

