import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Producto} from  '../../app/entities/productos.entity';

import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
test:any;
tiempo1;
tiempo2;
productos=[];
  constructor(public http: Http) {

this.getProductos();
         
  }
  ngOnInit(){
 
  }

prueba(){
var variable;
  this.http.get('http://192.168.1.31/abarrotes/api/v3/ping')
  .subscribe(
    data=>{
                // this.productos=data;
    // console.log(data)
              });
         

}

getProductoByCodigo():Observable<Producto>{
  return this.http.get('http://192.168.1.31/abarrotes/api/v3/productos/0004')
  .map((res:Response)=>{
             return res.json();
  })
    .catch((error:any)=>{
           return Observable.throw(new Error(error.status));
    });

}
getProductos():Observable<Producto[]>{
  
  return this.http.get('http://192.168.1.31/abarrotes/api/v3/productos')
  .map((res:Response)=>{
       return res.json();
  })
  .catch((error:any)=>{
        return Observable.throw(new Error(error.status));
     
  });



 

 





}
pruebaPost(id){
  var datos = JSON.stringify({idDispositivo:id});
  this.http.post('http://192.168.1.31/abarrotes/api/v3/echo',datos)
  .subscribe(data=>{
    
  },error=>{
    console.log("Oops hay un error aqui !");
  })
 

}
}