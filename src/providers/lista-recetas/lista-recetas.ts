import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { RecetaItem } from '../../models/receta-item/receta-item.interface';


@Injectable()
export class ListaRecetasProvider {

  private refListaRecetas = this.db.list<RecetaItem>('listaRecetas');

  constructor(private db:AngularFireDatabase) {

  }

  anadirReceta(item:RecetaItem){
    return this.refListaRecetas.push(item);
  }

  getRecetasList(){
    return this.refListaRecetas;
  }

  editarReceta(item:RecetaItem){
    return this.refListaRecetas.update(item.key, item);
  }
  borrarReceta(item:RecetaItem){
    return this.refListaRecetas.remove (item.key);
  }
  verReceta(item:RecetaItem){
    return this.refListaRecetas.set (item.key, item);
  }
}
