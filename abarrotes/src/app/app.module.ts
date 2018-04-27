import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import {ListaComponent} from '../components/lista/lista';
import {ArticulosProvider} from '../providers/articulos-servicio/articulos-servicio';
import {CarritoProvider} from '../providers/carrito/carrito';
import { App, AlertController} from 'ionic-angular';
import {ConfPage} from '../pages/conf/conf';
import {ImprimirPage} from '../pages/imprimir/imprimir';
import {PrintProvider} from '../providers/blue/blue';
import { IonicStorageModule } from '@ionic/storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfPage,
    ImprimirPage,
    ListPage,ListaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListaComponent,ConfPage,
    ImprimirPage
  ],
  providers: [
    
    StatusBar,
    UniqueDeviceID,
    SplashScreen,PrintProvider,
    BluetoothSerial,ArticulosProvider,CarritoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
