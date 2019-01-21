import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models';

import {AgregarPage} from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{

    constructor(private deseosService: DeseosService, public navCtrl:NavController, public alertCtrl: AlertController){
        
    }


    


    agregarLista(){
        //this.navCtrl.push(AgregarPage);

        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea:',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre la lista'
            }],
            buttons:[
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Agregar',
                    handler: data => {
                        if(data.titulo.lenght === 0){
                            return;
                        }else{
                            this.navCtrl.push(AgregarPage, {titulo:data.titulo});
                        }
                    }
                }
            ]
        });

        alerta.present();
    }

}