import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonThumbnail,
  IonBackButton,
  IonItem,
  IonList,
  IonLabel,
  IonText,
  IonButton,
  IonIcon, IonImg, IonModal } from '@ionic/angular/standalone';
  import JsBarcode, * as Jsbarcode from 'jsbarcode';
import { products } from 'src/app/data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonModal, IonImg, 
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonList,
    IonItem,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonThumbnail,
  ],
})
export class ProductsPage implements OnInit {
  items: any[] = [];
  itemModel: any = {};
  showBarcode = false;
  currency = '₹';

  constructor() {}

  ngOnInit() {
    this.items = [ ...products ];
  }

  getBarcodeData(item: any){
    this.itemModel = {...item};
    this.showBarcode = true;    

    setTimeout(() => {
      this.getBarcode(item.barcode);
    }, 500);
  }

  getBarcode(barcode: string){
    JsBarcode('#barcode', barcode, 
      {
        // format: "pharmacode",
        lineColor: "#0aa",
        width:4,
        height:200,
        displayValue: false
      }
    );
  }
}
