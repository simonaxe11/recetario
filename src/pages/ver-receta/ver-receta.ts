import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaItem } from '../../models/receta-item/receta-item.interface';
import { ListaRecetasProvider } from '../../providers/lista-recetas/lista-recetas';

@IonicPage()
@Component({
  selector: 'page-ver-receta',
  templateUrl: 'ver-receta.html',
})
export class VerRecetaPage {

  item : RecetaItem;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private servicioListaRecetas: ListaRecetasProvider) {
      
                console.log(navParams.get("item"));            

                this.item = navParams.get("item");
  }

  verReceta(item:RecetaItem){
    this.servicioListaRecetas.verReceta(item)
  }
}
