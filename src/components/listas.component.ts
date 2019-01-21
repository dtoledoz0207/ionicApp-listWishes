import {Component, Input} from '@angular/core';
import {NavController, AlertController, ItemSliding} from 'ionic-angular';
import {DeseosService} from '../services/deseos.service';

import {AgregarPage} from '../pages/agregar/agregar.component';
import {Lista} from '../models';


@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent{

    @Input() terminada:boolean = false;

    constructor(private deseosService:DeseosService, public navCtrl:NavController, public alertCtrl:AlertController){

    }


    listaSeleccionada(lista:Lista){
        //console.log(lista);
        this.navCtrl.push(AgregarPage, {titulo: lista.titulo, lista: lista});
    }


    borrarLista(lista: Lista){
        this.deseosService.borrarLista(lista);
    }


    editarLista(lista:Lista, slidingItem:ItemSliding){

        slidingItem.close();

        const alerta = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista:',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre la lista',
                value: lista.titulo
            }],
            buttons:[
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Guardar',
                    handler: data => {
                        if(data.titulo.lenght === 0){
                            return;
                        }

                        lista.titulo = data.titulo;
                        this.deseosService.guardarStorage();
                    }
                }
            ]
        });

        alerta.present();
    }

}