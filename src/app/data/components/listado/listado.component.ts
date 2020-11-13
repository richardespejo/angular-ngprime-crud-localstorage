import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [DialogService, MessageService]
})
export class ListadoComponent implements OnInit {

  data: any[] = [];
  tablaTh: any [] = ['Titulo', 'URL de Acceso' , 'Descripcion', 'Acciones']; 
  cargando: boolean = false;
  registrosTotales: number;
  columnas: any[];

  constructor(  private _router: Router,
                private primengConfig: PrimeNGConfig ,
                public dialogService: DialogService, 
                public messageService: MessageService
              ) { }
  referencias: DynamicDialogRef;
  ngOnInit() {
  }

  getLocalData(event :LazyLoadEvent): void {
    this.cargando = true;
    const items = JSON.parse(localStorage.getItem('data'));
    this.primengConfig.ripple = true;
    

    setTimeout(() => {
      if (items) {
        this.data = items.slice(event.first, (event.first + event.rows));
        this.registrosTotales = this.data.length;
        this.cargando = false;
        
      } 
    }, 1500);
  }

  new(){
    this._router.navigate(['/data/mantenimiento/','n']);
  }

  edit(id): void {
    this._router.navigate(['/data/mantenimiento/',id]);
  }

  delete(id): void{
    this.data.splice(id,1);
    localStorage.setItem('data', JSON.stringify(this.data));    
    this.cargando = false;

    //this.getLocalData(null);    
  }


}
