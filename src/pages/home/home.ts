import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { ListaRecetasProvider } from '../../providers/lista-recetas/lista-recetas';

import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { RecetaItem } from '../../models/receta-item/receta-item.interface';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  item : RecetaItem;
  listaRecetas : Observable<RecetaItem[]>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private receta: ListaRecetasProvider,
              private servicioListaRecetas: ListaRecetasProvider,
              private toast: ToastController) {

      console.log(navParams.get("item"));            

      this.item = navParams.get("item");
  
      this.listaRecetas = this.receta
          .getRecetasList()
          .snapshotChanges()
          .pipe (map (changes =>{
            return changes.map( c=>(
              {
                key: c.payload.key,
                ...c.payload.val(),
              }
            )
            )
          }
          )
          )
  }

  selectRecetaItem(recetaItem:RecetaItem){
    this.navCtrl.push("VerRecetaPage", {"item": recetaItem});
  }

  modificarRecetaItem(recetaItem:RecetaItem){
    this.navCtrl.push("EditarRecetaPage", {"item": recetaItem});
  }

  borrarReceta(item:RecetaItem){
    this.servicioListaRecetas.borrarReceta(item)
        .then (()=>{
          this.mensaje("Receta Eliminada");
        }
        )
  }

  mensaje (texto:string){
    const toast = this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
