import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage{

    lista:Lista;

    constructor(private deseosService: DeseosService, public navParams:NavParams){
       const titulo:string = this.navParams.get('titulo');
       this.lista = new Lista(titulo);
    }

}