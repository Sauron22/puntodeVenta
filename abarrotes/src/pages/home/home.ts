import { Component,Input, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import {CarritoProvider} from '../../providers/carrito/carrito';
import {ListaComponent} from '../../components/lista/lista';
import {HeaderComponent} from '../../components/header/header';
import {DetalleReciboPage} from  '../detalle-recibo/detalle-recibo';
import {ImprimirPage} from '../imprimir/imprimir';
import {GlobalProvider} from '../../providers/global/global';
import {Producto} from '../../app/entities/productos.entity';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
print=true;
  productos:Producto[];
  texto="";

  constructor(
    public g:GlobalProvider,
    public navCtrl: NavController,
              public servicioProductos:ArticulosProvider,
              public  carrito:CarritoProvider
  
  ) {

}
ngOnInit(){
  var start = new Date().getTime();

  
  this.caragarProductos();
  this.g.tiempo1=(new Date().getTime() - start)/1000;
  console.log(this.productos);
}
caragarProductos():void{
  this.g.getProductos().subscribe(
    res=>{
      this.productos=res;
    },
        error=>{
             console.log(error);
       }
  )

}
 
  
cobra(){
this.print=false;
}
goToDetalleRecibo(){
  
this.navCtrl.push(DetalleReciboPage);

}
imprime(){
this.navCtrl.push(ImprimirPage);


}
funcion(event){if(event.keyCode==13){
  var sin_salto = this.texto.split("\n").join("");
this.carrito.addProductByCode(sin_salto);


this.texto='';       

let item1 =this.carrito.articulos.find(i => i.codigo === sin_salto);
this.carrito.total+=item1.precio_unitario;
}
 
}


}
