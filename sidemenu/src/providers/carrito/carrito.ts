import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CarritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarritoProvider {
public  total=0;
public carrito =[];
public detalle=[];
public articulos=0;
  constructor(public http: HttpClient) {
    console.log('Hello CarritoProvider Provider');
  }

  addProduct(p){

    let item1 =this.carrito.find(i => i.codigo === p.codigo);
    if(item1==undefined){
    this.detalle.push(p);
    }else{    
      
      p.cantidad++;
      
      
    }
    this.carrito.push(p);

  }
  cuenta(code):number{
   
  
    return 0; 
  }
  redondea(precio):number{


    var result = 1;
    result = (precio).toFixed(2);

    return result; 
  }
}
