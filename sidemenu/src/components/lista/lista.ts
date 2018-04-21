import { Component } from '@angular/core';
import {CarritoProvider} from '../../providers/carrito/carrito';
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio'
/**
 * Generated class for the ListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lista',
  templateUrl: 'lista.html'
})
export class ListaComponent {
productos=[];
  text: string;

  constructor(public carrito:CarritoProvider, public servicioArticulo:ArticulosProvider) {
    this.productos= this.servicioArticulo.productos;
    
  
  }
  suma(p){

    this.carrito.total+=p.precio_unitario;
    this.carrito.addProduct(p);
  }

}
