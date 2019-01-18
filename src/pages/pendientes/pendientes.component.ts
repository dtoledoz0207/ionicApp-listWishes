import {Component} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{

    constructor(private deseosService: DeseosService){
        
    }


    listaSeleccionada(lista:Lista){
        console.log(lista);
    }

}