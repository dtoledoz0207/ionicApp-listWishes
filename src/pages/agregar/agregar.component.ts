import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {DeseosService} from '../../services/deseos.service';
import {Lista, ListaItem} from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage{

    lista:Lista;
    nombreItem:string = '';

    constructor(private deseosService: DeseosService, public navParams:NavParams){
       const titulo:string = this.navParams.get('titulo');
       this.lista = new Lista(titulo);
    }


    agregarItem(){
       if(this.nombreItem.length === 0){
           return;
       }else{
            const nuevoItem = new ListaItem(this.nombreItem);
            this.lista.items.push(nuevoItem);

            this.nombreItem = '';
       }
    }


    actualizarTarea(item:ListaItem){
        item.completado = !item.completado;
    }

}