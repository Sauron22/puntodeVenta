import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import {CarritoProvider} from '../../providers/carrito/carrito';
import {ListaComponent} from '../../components/lista/lista';
import {DetalleReciboPage} from  '../detalle-recibo/detalle-recibo'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productos =[];

  constructor(public navCtrl: NavController,
              public servicioProductos:ArticulosProvider,
              public  carrito:CarritoProvider
  
  ) {

    this.productos=this.servicioProductos.productos;

  }
  

goToDetalleRecibo(){
  
this.navCtrl.push(DetalleReciboPage);

}


}
