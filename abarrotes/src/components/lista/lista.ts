import { Component } from '@angular/core';
import {CarritoProvider} from '../../providers/carrito/carrito';
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import {GlobalProvider} from '../../providers/global/global'
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
  public detalle=[];
  public tickets=[];

  constructor(public carrito:CarritoProvider, public servicioArticulo:ArticulosProvider) {
    this.productos= this.servicioArticulo.productos;
    this.detalle=this.carrito.detalle;
    this.tickets=carrito.carrito;
    
  
  }
  suma(p){

    this.carrito.total+=p;
  
  }
  trunca(cad):string{
    var str = ""+cad;;
    if(cad.length>=18){       }
    return  str.substr(0,18)+"..";
  }

  getCantidad(a):number{
    let item1 =this.tickets.find(i => i.codigo === a.codigo);
   
if(item1==undefined){return ;}
    return    item1.cantidad;
  }
  calculaTotal(p):number{
    let resultado = this.getCantidad(p)*p.precio_unitario;
   

    
  
return  this.carrito.redondea(resultado);
                         }
}

