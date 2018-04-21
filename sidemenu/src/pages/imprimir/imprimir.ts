import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController } from 'ionic-angular';
import {PrintProvider} from '../../providers/blue/blue';
import {PrinterListModalPage} from '../printer-list-modal/printer-list-modal';

/**
 * Generated class for the ImprimirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprimir',
  templateUrl: 'imprimir.html',
})
export class ImprimirPage {
  selectedPrinter:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,
    private printProvider:PrintProvider,
    private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprimirPage');
  }
  listBTDevice()
  {
    this.printProvider.searchBt().then(datalist=>{
      
      //1. Open printer select modal
      let abc=this.modalCtrl.create(PrinterListModalPage,{data:datalist});
      
      //2. Printer selected, save into this.selectedPrinter
      abc.onDidDismiss(data=>{
        this.selectedPrinter=data;

        let xyz=this.alertCtrl.create({
          title: "Se selecciono "+data.name,
          buttons:['Ok']
        });
        xyz.present();

      });
      
      //0. Present Modal
      abc.present();

    },err=>{
      console.log("Error",err);
      let mno=this.alertCtrl.create({
        title:"Error "+err,
        buttons:['Ok']
      });
      mno.present();
    })

  }

  testConnectPrinter()
  {
    var id=this.selectedPrinter.id;
    if(id==null||id==""||id==undefined)
    {
      //nothing happens, you can put an alert here saying no printer selected
    }
    else
    {
      let foo=this.printProvider.connectBT(id).subscribe(data=>{
        console.log("Conexión Existosa!!",data);

        let mno=this.alertCtrl.create({
          title:"Estas Conectado a la Impresora",
          buttons:['Ok']
        });
        mno.present();

      },err=>{
        console.log("No se puede conectar  ó se Esta Conctando",err);
        let mno=this.alertCtrl.create({
          title:"Advertencia "+err,
          buttons:['Ok']
        });
        mno.present();
      });
    }
  }

  testPrinter()
  {
    var id=this.selectedPrinter.id;
    if(id==null||id==""||id==undefined)
    {
      //nothing happens, you can put an alert here saying no printer selected
    }
    else
    {
      let foo=this.printProvider.testPrint(id);
    }
  }

}
