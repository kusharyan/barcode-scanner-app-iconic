import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  scanOutline,
  listOutline,
  checkmarkCircle,
  bagOutline,
  logoPaypal,
  barcodeOutline,
  closeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.addAllIcons();
  }

  addAllIcons() {
    addIcons({
      cartOutline,
      scanOutline,
      listOutline,
      checkmarkCircle,
      bagOutline,
      logoPaypal,
      barcodeOutline,
      closeOutline,
    });
  }
}
