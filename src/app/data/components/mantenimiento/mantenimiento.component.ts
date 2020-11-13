import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  id : string; 
  data : any[] = [];
  item : any = {};
  public itemForm: FormGroup;


  constructor( private router: Router , private paramUri : ActivatedRoute ) { 
    this.itemForm = this.itemCreateForm();
  }

  ngOnInit() {
    this.id = this.paramUri.snapshot.paramMap.get('id');
    this.data = JSON.parse(localStorage.getItem('data')); 
    this.getItem();         
  }

  get title() { return this.itemForm.get('title'); }
  get accessURL() { return this.itemForm.get('accessURL'); }
  get _about() { return this.itemForm.get('_about'); }

  itemCreateForm(){
    return new FormGroup({
      title: new FormControl(' ' , [Validators.required , Validators.minLength(5)]),
      accessURL: new FormControl(' ' , [Validators.required , Validators.minLength(10)]),
      _about: new FormControl(' ' , [Validators.required, Validators.minLength(10)])
    });
  }

  getItem(): void {    
    if(this.id!=="n"){
      this.item = this.data[this.id];
    } 
  }

  onSubmit(): void {
         
    
    if(this.itemForm.valid){
      if(this.id!=="n"){
        this.data.splice(Number(this.id),1,this.item);
      }else{
        this.data.push(this.item);
      }
      localStorage.setItem('data', JSON.stringify(this.data));
      this.router.navigate(['/data/listado']);
    }   
  }

}
