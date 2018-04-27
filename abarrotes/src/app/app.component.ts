import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { App, AlertController} from 'ionic-angular';
import {ConfPage} from '../pages/conf/conf';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(  public storage: Storage,public alertCtrl:AlertController,public app: App,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
   
   
   this.storage.get('datos')
   .then((data)=>{
if(data){
  this.initializeApp();
}else{
  
  this.nav.setRoot(ConfPage);

}
   });
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ventas', component: HomePage },
      
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.registerBackButtonAction(() => {
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
        if(activeView.name === "HomePage") {
          if (nav.canGoBack()){ //Can we go back?
            nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'Salir de la aplicación',
                            message: 'Quieres Salir de la aplicación?',
                            buttons: [{
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Application exit prevented!');
                                }
                            },{
                                text: 'Cerrar Aplicación',
                                handler: () => {
                                    this.platform.exitApp(); // Close this application
                                }
                            }]
                        });
                        alert.present();

        }
        }    

      });


      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }
  abrirconf(){
    this.nav.push(ConfPage);
  }
  
}
