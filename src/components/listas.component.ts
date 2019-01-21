import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DeseosService} from '../services/deseos.service';

import {AgregarPage} from '../pages/agregar/agregar.component';
import {Lista} from '../models';


@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent{

    @Input() terminada:boolean = false;

    constructor(private deseosService:DeseosService, public navCtrl:NavController){

    }


    listaSeleccionada(lista:Lista){
        //console.log(lista);
        this.navCtrl.push(AgregarPage, {titulo: lista.titulo, lista: lista});
    }


    borrarLista(lista: Lista){
        this.deseosService.borrarLista(lista);
    }

}