import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/*
  Generated class for the ArticulosServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class  ArticulosProvider {
  public  productos=[
{codigo:'00750105590414',
nombre:"Leche Alpura deslactosada light 1 lt",
nombre_corto:"Leche Alpura deslactosada",
categoria:'Lacteos',
marca:'Alpura',
a_granel:'N',
unidad:'Pza',
precio_unitario:19.9999,
descuento_tasa:0,
iva_tasa:0, 
descripcion:"Que la intolerancia a la lactosa no te detenga para disfrutar de tus productos lácteos favoritos como la leche, es por eso que Alpura tiene para ti la Leche Alpura deslactosada light en su presentación de 1 litro. Con todas las propiedades de la leche",
estaus:'A',
cantidad:1

},
{
  codigo:'00750102053780',
nombre:"Leche Lala deslactosada baja en grasa caja 6 pzas 1 lt c/u",
nombre_corto:"Leche Lala deslactosada b",
categoria:'Lacteos',
marca:'Lala',
a_granel:'N',
unidad:'Pza',
precio_unitario:113.99999,
descuento_tasa:0,
iva_tasa:0, 
descripcion:"Cuida tu aparato digestivo con una alimentación balanceada y olvídate de la intolerancia a la lactosa, con la leche deslactosada baja en grasa, adicionada con vitaminas y de fácil digestión. Con esta presentación de seis empaques de 1 litro puedes te",
estaus:'A',
cantidad:1




},
{
  codigo:'00000000004961',
  nombre:"Mango ataulfo por kilo",
  nombre_corto:"Mango ataulfo por kilo",
  categoria:'Frutas y Verduras',
  marca:'',
  a_granel:'S',
  unidad:'Kg',
  precio_unitario:18.999999,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Rico en fibra, vitaminas A, C y B6. Puede ayudar a fortalecer el sistema inmunológico y a prevenir el cáncer. Consúmelo fresco, en ensaladas, aguas y licuados.",
  estaus:'A',
  cantidad:1

},
{
  codigo:'00000000004961',
  nombre:"Mango ataulfo por kilo",
  nombre_corto:"Mango ataulfo por kilo",
  categoria:'Frutas y Verduras',
  marca:'',
  a_granel:'S',
  unidad:'Kg',
  precio_unitario:18.999999,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Rico en fibra, vitaminas A, C y B6. Puede ayudar a fortalecer el sistema inmunológico y a prevenir el cáncer. Consúmelo fresco, en ensaladas, aguas y licuados.",
  estaus:'',
  cantidad:1


},
{
  codigo:'00750151848530',
  nombre:"Jamón de pavo Bafar 400 g",
  nombre_corto:"Jamón de pavo Bafar",
  categoria:'Carnes Frías',
  marca:'Bafar',
  a_granel:'N',
  unidad:'Pza',
  precio_unitario:30.0000,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Dale a tu familia la nutrición que necesita con la variedad de productos de salchichonería que tu tienda en línea Walmart tiene para ti. Uno de ellos es el jamón de pavo Bafar que viene en presentación de 400 g, 25 rebanadas ideales para usar en cualquier momento. Prepara el sándwich del día o si lo prefieres lleva a cabo tus recetas de cocina favoritas y consiente el paladar de tus seres queridos con la frescura de este jamón. No lo pienses más y comienza a realizar tus compras en línea desde la comodidad de tu hogar y aprovecha el servicio a domicilio que tenemos para tu comodida",
  estaus:'A',
  cantidad:1

},
{
  codigo:'00750151848530',
  nombre:"Jamón de pierna San Rafael Bernina americano por kg",
  nombre_corto:"Jamón de Pierna San Rafael",
  categoria:'Carnes Frías',
  marca:'San Rafael',
  a_granel:'S',
  unidad:'Kg',
  precio_unitario:308.0000,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Por su delicioso sabor, el jamón de pierna Bernina de San Rafael extra fino es una de las opciones más saludables para preparar un delicioso desayuno o servirlo como botana en tus reuniones",
  estaus:'A',
  cantidad:1



},
{
  codigo:'00750106165936',
  nombre:"Cerveza clara Tecate light 12 latas de 355 ml c/u",
  nombre_corto:"Cerveza clara Tecate light 12 latas",
  categoria:'Cervezas',
  marca:'Tecate',
  a_granel:'N',
  unidad:'Pza',
  precio_unitario:144.0000,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"La cerveza es una de las bebidas alcohólicas más habituales en las fiestas ya que tiene un bajo porcentaje de alcohol y hay para muchos gustos. Con el 12 pack de cerveza Tecate light, podrás amenizar tus celebraciones en la compañía de tus seres queridos y pasar grandes momentos",
  estaus:'A',
  cantidad:1

},
{
  codigo:'00750106419000',
  nombre:"Cerveza Oscura Modelo Negra Modelo 6 Botellas de 355 ml ",
  nombre_corto:"Cerveza clara Tecate light 12 latas",
  categoria:'Cervezas',
  marca:'Modelo',
  a_granel:'N',
  unidad:'Pza',
  precio_unitario:87.50000,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Cerveza Negra Modelo en presentación botella 6 pack 355ml, un pack perfecto para guardar en tu refri y disfrutar cuando más quieras. Es una cerveza tipo lager de estilo Munich y color oscuro. Con 5.3% de nivel de alcohol, tiene un sabor más intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo. Modelo es la marca de cervezas mexicanas premium líder en el país. La línea de cervezas Modelo son ideales para acompañar tus platillos favoritos con una cerveza de alta calidad, para Negra Modelo te recomendamos acompañar con platillos dulces.",
  estaus:'A',
  cantidad:1




},

{
  codigo:'999999',
  nombre:"Cerveza Oscura Modelo Negra Modelo 24 Botellas de 355 ml ",
  nombre_corto:"Cerveza Modelo Negra Modelo 24 ",
  categoria:'Cervezas',
  marca:'Modelo',
  a_granel:'N',
  unidad:'Pza',
  precio_unitario:304.66699,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Cerveza Negra Modelo en presentación botella 6 pack 355ml, un pack perfecto para guardar en tu refri y disfrutar cuando más quieras. Es una cerveza tipo lager de estilo Munich y color oscuro. Con 5.3% de nivel de alcohol, tiene un sabor más intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo. Modelo es la marca de cervezas mexicanas premium líder en el país. La línea de cervezas Modelo son ideales para acompañar tus platillos favoritos con una cerveza de alta calidad, para Negra Modelo te recomendamos acompañar con platillos dulces.",
  estaus:'A',
  cantidad:1




},
{
  codigo:'32738239897239',
  nombre:"Cerveza Oscura Modelo Negra Modelo 12 Botellas de 355 ml ",
  nombre_corto:"Negra Modelo 12 Botellas",
  categoria:'Cervezas',
  marca:'Modelo',
  a_granel:'N',
  unidad:'Pza',
  precio_unitario:250.509999,
  descuento_tasa:0,
  iva_tasa:0, 
  descripcion:"Cerveza Negra Modelo en presentación botella 6 pack 355ml, un pack perfecto para guardar en tu refri y disfrutar cuando más quieras. Es una cerveza tipo lager de estilo Munich y color oscuro. Con 5.3% de nivel de alcohol, tiene un sabor más intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo. Modelo es la marca de cervezas mexicanas premium líder en el país. La línea de cervezas Modelo son ideales para acompañar tus platillos favoritos con una cerveza de alta calidad, para Negra Modelo te recomendamos acompañar con platillos dulces.",
  estaus:'A',
  cantidad:1},
  {
    codigo:'012072077210',
    nombre:"Alitas de pollo Tyson estilo buffalo wings 700 g",
    nombre_corto:"Alitas Tyson",
    categoria:'Comida Facil',
    marca:'Tyson',
    a_granel:'N',
    unidad:'Pza',
    precio_unitario:161,
    descuento_tasa:0,
    iva_tasa:0, 
    descripcion:"Que en tu reunión no falta las alitas de pollo Tyson estilo buffalo wings, las cuales se encuentran totalmente cocinadas, sin hormonas, ni esteroides, sin grasos trans, sin conservadores.",
    estaus:'A',
    cantidad:1},
    {
      codigo:'32738239897239',
      nombre:"Cerveza Oscura Modelo Negra Modelo 12 Botellas de 355 ml ",
      nombre_corto:"Negra Modelo 12 Botellas",
      categoria:'Cervezas',
      marca:'Modelo',
      a_granel:'N',
      unidad:'Pza',
      precio_unitario:250.509999,
      descuento_tasa:0,
      iva_tasa:0, 
      descripcion:"Cerveza Negra Modelo en presentación botella 6 pack 355ml, un pack perfecto para guardar en tu refri y disfrutar cuando más quieras. Es una cerveza tipo lager de estilo Munich y color oscuro. Con 5.3% de nivel de alcohol, tiene un sabor más intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo. Modelo es la marca de cervezas mexicanas premium líder en el país. La línea de cervezas Modelo son ideales para acompañar tus platillos favoritos con una cerveza de alta calidad, para Negra Modelo te recomendamos acompañar con platillos dulces.",
      estaus:'A',
      cantidad:1},
      {
        codigo:'00750110154633',
        nombre:"Nuggets de pollo Bachoco 500 g",
        nombre_corto:"Nuggets Bachoco",
        categoria:'Comida Facil',
        marca:'Bachoco',
        a_granel:'N',
        unidad:'Pza',
        precio_unitario:57.50,
        descuento_tasa:0,
        iva_tasa:0, 
        descripcion:"Nuggets Bachoco de pechuga de pollo 500 g, fáciles de preparar.",
        estaus:'A',
        cantidad:1},
        {
          codigo:'32738239897239',
          nombre:"Cerveza Oscura Modelo Negra Modelo 12 Botellas de 355 ml ",
          nombre_corto:"Negra Modelo 12 Botellas",
          categoria:'Cervezas',
          marca:'Modelo',
          a_granel:'N',
          unidad:'Pza',
          precio_unitario:250.509999,
          descuento_tasa:0,
          iva_tasa:0, 
          descripcion:"Cerveza Negra Modelo en presentación botella 6 pack 355ml, un pack perfecto para guardar en tu refri y disfrutar cuando más quieras. Es una cerveza tipo lager de estilo Munich y color oscuro. Con 5.3% de nivel de alcohol, tiene un sabor más intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo. Modelo es la marca de cervezas mexicanas premium líder en el país. La línea de cervezas Modelo son ideales para acompañar tus platillos favoritos con una cerveza de alta calidad, para Negra Modelo te recomendamos acompañar con platillos dulces.",
          estaus:'A',
          cantidad:1},
          {
           
            codigo:'7501003340115',
            nombre:"Mayonesaa",
            nombre_corto:"Mayonesa",
            categoria:'Embotellado',
            marca:'McCornik',
            a_granel:'N',
            unidad:'Pza',
            precio_unitario:1,
            descuento_tasa:0,
            iva_tasa:0, 
            descripcion:"Mayonesa ella me bate como haciendo mayonesa",
            cantidad:1},
            {
           
              codigo:'11620012',
              nombre:"Memoria USB",
              nombre_corto:"USB",
              categoria:'Electronica',
              marca:'ADATA',
              a_granel:'N',
              unidad:'Pza',
              precio_unitario:160,
              descuento_tasa:0,
              iva_tasa:0, 
              descripcion:"Memeoria USB de 16 gb marca ADATA muy buena y barata",
              cantidad:1}





  ];

public base="http://192.168.1.29/abarrotes/api/v1/api.php";
  constructor(public http: HttpClient) {
    console.log('Hello ArticulosServicioProvider Provider');
  }


}