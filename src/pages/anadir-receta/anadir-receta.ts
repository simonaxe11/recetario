import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaItem } from '../../models/receta-item/receta-item.interface';
import { ListaRecetasProvider } from '../../providers/lista-recetas/lista-recetas';


@IonicPage()
@Component({
  selector: 'page-anadir-receta',
  templateUrl: 'anadir-receta.html',
})
export class AnadirRecetaPage {

  item:RecetaItem = {
    nombre: "",
    ingredientes: "",
    pasoapaso: ""
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private servicioListaRecetas: ListaRecetasProvider
              ) {
  }

  anadirReceta(item:RecetaItem){
    this.servicioListaRecetas.anadirReceta(item).then ( ref =>{
      console.log(ref.key);
      this.navCtrl.setRoot("HomePage");
    })
  }

}
