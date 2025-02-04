import { inject, Injectable } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { products } from 'src/app/data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  model: any = null;
  cartStoreName = 'barcode_cart';
  products: any[] = [...products];

  private cart$ = new BehaviorSubject<any>(null);

  get cart() {
    return this.cart$.asObservable();
  }

  private storageService = inject(StorageService);
  constructor() { }

  async startScan(val?: number) {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1,
      });
      console.log(result);
      return result.ScanResult;
    } catch (e) {
      throw e;
    }
  }

  addItemByBarcode(barcode: string) {
    // const item = this.products.find((item) => item.barcode == barcode );
    // if(!item) {
    //   throw 'No Such item found'
    // }
    // this.addQuantity(item);
  }


  // addQuantity(item:any) {
  //   console.log(item)

  //   if (this.model) {
  //     cosnt index = this.model.items.findIndex(
  //       (data:any) => data.item_id == item.id
  //     );

  //     if (index>= 0) {
  //       this.model.items[index].quantity +=1;
  //     }
  //   }
  // }

}

