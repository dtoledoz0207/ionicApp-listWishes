import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models';

import {AgregarPage} from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{

    constructor(private deseosService: DeseosService, public navCtrl:NavController){
        
    }


    listaSeleccionada(lista:Lista){
        console.log(lista);
    }

    agregarLista(){
        this.navCtrl.push(AgregarPage);
    }

}