import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { ListaRecetasProvider } from '../providers/lista-recetas/lista-recetas';
//import { ListaCompraProvider } from '../providers/lista-compra/lista-compra';

export const firebaseConfig = {
  apiKey: "AIzaSyB75X0KCHMuAC72nsPHQlURkW33JuJBZEM",
    authDomain: "recetarionamnam-4170e.firebaseapp.com",
    databaseURL: "https://recetarionamnam-4170e.firebaseio.com",
    projectId: "recetarionamnam-4170e",
    storageBucket: "recetarionamnam-4170e.appspot.com",
    messagingSenderId: "341473113923"
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaRecetasProvider
  ]
})
export class AppModule {}
