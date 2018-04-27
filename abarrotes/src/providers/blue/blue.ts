import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import {CarritoProvider} from '../carrito/carrito';

@Injectable()
export class PrintProvider {

  constructor(private btSerial:BluetoothSerial,private alertCtrl:AlertController,public carrito:CarritoProvider) {
    
  }

  searchBt()
  {
    return this.btSerial.list();
  }
  total(precio,cantidad):number{

    return this.carrito.redondea((precio*cantidad));
  }

  connectBT(address)
  {
    return this.btSerial.connect(address);

  }

  testPrint(address)
  {

    
  
    let printData="\u001b\u0061\u0001\u001d\u0021\u0011 Abarrotes\n";
    //printData= "\u001b\u0024"+"\u0000"+"\u0000 hola"
        //   printData= printData+"\u001b\u0024"+"\u0000"+"\u0028 hola";
          // printData= printData+printData+ "\u001b\u0024"+"\u0000"+"\u0000 hola\n";
 // let printData="\u00018"+"\u0040"+"\u001B"+"\u002D"+"\u0001"+"Hola"+"\n"+"\u001D"+"\u0021\u0001"+"Hola\n";
///let printData="\u001B\u0040\u001B\u0061\u0001\u000A"+"Abarrotes\u000A";

    this.carrito.detalle.forEach(function(producto){
           printData=printData+""+"\u001d\u0021\u0000\u001b\u0061\u0000 "+producto.nombre_corto+"x"+producto.cantidad+"\u001b\u0024\u00ff\u0000"+"\u001b\u0061"+"\u0002"+((producto.precio_unitario*producto.cantidad).toFixed(2))+"\n"
    });
    

    
 
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
