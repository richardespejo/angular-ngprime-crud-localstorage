import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: any[] = [];
  tablaTh: any [] = ['Titulo', 'URL de Acceso' , 'Descripcion', 'Acciones']; 

  constructor( private _router: Router ) { }

  ngOnInit() {
    this.getLocalData();
  }

  getLocalData(): void {
    const items = JSON.parse(localStorage.getItem('data'));
    if (items) {
      this.data = items;
    } 
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
    this.getLocalData();    
  }


}
