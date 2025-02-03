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
  IonCard, IonToast } from '@ionic/angular/standalone';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonToast, 
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

  private cartService = inject(CartService);
  constructor() {}


  async startScanBarcode(){
    try{
      const code = this.cartService.startScan();
      console.log(code)
    }catch(e){
      console.log(e);
    }
  }


  async scanAndPay(){
    try{
      const code = this.cartService.startScan(0);
      console.log(code)
    }catch(e){
      console.log(e);
    }
  }
}

