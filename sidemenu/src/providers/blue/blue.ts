import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Injectable()
export class PrintProvider {

  constructor(private btSerial:BluetoothSerial,private alertCtrl:AlertController) {
    
  }

  searchBt()
  {
    return this.btSerial.list();
  }

  connectBT(address)
  {
    return this.btSerial.connect(address);

  }

  testPrint(address)
  {
  let printData="\u00018"+"\u0040"+"\u001B"+"\u002D"+"\u0001"+"Hola"+"\n"+"\u001D"+"\u0021\u0001"+"Hola\n";

    
    let xyz=this.connectBT(address).subscribe(data=>{
      this.btSerial.write(printData).then(dataz=>{
        console.log("WRITE SUCCESS",dataz);

        let mno=this.alertCtrl.create({
          title:"Se Imprimio!!",
          buttons:['Aceptar']
        });
        mno.present();

        xyz.unsubscribe();
      },errx=>{
        console.log("Error",errx);
        let mno=this.alertCtrl.create({
          title:"Error "+errx,
          buttons:['OK']
        });
        mno.present();
      });
      },err=>{
        console.log("No hay Conexión",err);
        let mno=this.alertCtrl.create({
          title:"Error "+err,
          buttons:['Ok']
        });
        mno.present();
      });

  }

}
