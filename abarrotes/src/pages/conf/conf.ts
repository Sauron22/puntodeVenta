import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePage} from '../home/home'
import {GlobalProvider} from '../../providers/global/global';
import {CarritoProvider} from '../../providers/carrito/carrito';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ConfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conf',
  templateUrl: 'conf.html',
})
export class ConfPage {
  id:any;
  ip:any;
  nombre:any; 
  pass:any;
  formulario: FormGroup;

  constructor( public carrito:CarritoProvider,public global:GlobalProvider, public navCtrl: NavController, public navParams: NavParams,
    private uniqueDeviceID: UniqueDeviceID, public builder:FormBuilder,public storage:Storage) {
   
  this.formulario =  this.builder.group({
    nombre:['',[Validators.required]],
    ip:['',[Validators.required]],
    pass:['',[Validators.required]]
  });
  
  }

  ionViewDidLoad() {
    this.uniqueDeviceID.get()
    .then((uuid: any) =>   this.id=uuid)
    .catch((error: any) => console.log(error));

 


  }
  guardar(){
  this.storage.set('datos',this.formulario.value);
    this.navCtrl.setRoot(HomePage);
  }

}
