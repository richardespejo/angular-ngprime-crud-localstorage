import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Uris } from '../constants/uris';
import { InterfaceBodyItems } from '../interfaces/interface-body-items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getDataFromApi(): Observable<InterfaceBodyItems.response>{
    return this.http.get<InterfaceBodyItems.response>(Uris.URI_data_distribution)
      .pipe(
         map( (recData : InterfaceBodyItems.response) => recData )
      );
  }
 
  mapDataFromApi(){
    return this.getDataFromApi().subscribe( data => {
        localStorage.setItem('data', JSON.stringify(data.result.items));
    }) ;
  }

}
