import { Component } from '@angular/core';
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {ImprimirPage} from '../../pages/imprimir/imprimir';
import { getLocaleEraNames } from '@angular/common';
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
productos:any=[];
  text: string;
  public detalle=[];
  public tickets=[];
  public venta:any;
  texto:string="";
  T="0.0";
  prueba=[
    "00001",
    "00002",
    "00003",
    "00004",
    "00005",
    "00006",
    "00007",
    "00008",
    "00008",
    "00009",
    "00010",
    "00011",
    "00012",
    "00012",
    "00012",
    "00012",
    "00012",
    "00020",
    "00021",
    "00022",
    "00025",
    "00026",
    "00026",
    "00027",
    "00028",
    "00029",
    "00030",
    "00031"
  ];
  public activo=false;

  constructor( public servicioArticulo:ArticulosProvider,
    public loadingCtrl: LoadingController, public nav:NavController) {
     

  this.tickets= servicioArticulo.tickets;
this.venta=servicioArticulo.productos;
    this.productos=Object.keys(this.servicioArticulo.productos);
    console.log(this.productos);
 

   
    
  
  
  }
  

  imprime(){
     this.nav.push(ImprimirPage,{total:this.T})
  }
  activa(){
    this.activo=!this.activo
  }
  llena(){
for(let index = 0; index < this.prueba.length; index++) {
  
      const element = this.prueba[index];
      this.servicioArticulo.add(element);
      
    }
       }
  hacerVenta(event:any){
    var valor= event.target.value;
    

   
    {if(event.keyCode==13){

      this.texto='';   
    }
    this.servicioArticulo.add(valor);
  }    
      
      }
  
detalleProducto(){
  
}
  buscar(id:any){
    this.productos= Object.keys(this.servicioArticulo.productos);
    let val = id.target.value;
    if (val && val.trim() != '') {
   this.productos= this.productos.filter((item)=>{
    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    
   })
    
    }
  
    
  }
  suma():string {
 var t=0; 
 for (let index = 0; index < this.servicioArticulo.tickets.length; index++) {
   t+=(this.servicioArticulo.tickets[index].precio*this.servicioArticulo.tickets[index].cantidad);
   
 }
 this.T=t.toFixed(2);
   
 return t.toFixed(2);
   
    
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
return  0;
 }
}

