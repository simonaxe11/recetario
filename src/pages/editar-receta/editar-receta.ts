import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecetaItem } from '../../models/receta-item/receta-item.interface';
import { ListaRecetasProvider } from '../../providers/lista-recetas/lista-recetas';


@IonicPage()
@Component({
  selector: 'page-editar-receta',
  templateUrl: 'editar-receta.html',
})
export class EditarRecetaPage {

  item : RecetaItem;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private servicioListaRecetas: ListaRecetasProvider,
              private toast: ToastController) {
    console.log(navParams.get("item"));            

    this.item = navParams.get("item");
  }

  guardarReceta(item:RecetaItem){
    this.servicioListaRecetas.editarReceta(item)
      .then(()=>{
        this.navCtrl.setRoot("HomePage");
        this.mensaje("Receta Modificada");
      }
      )
  }
  borrarReceta(item:RecetaItem){
    this.servicioListaRecetas.borrarReceta(item)
        .then (()=>{
          this.mensaje("Receta Eliminada");
          this.navCtrl.setRoot("HomePage");
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
