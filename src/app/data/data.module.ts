import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { ReactiveFormsModule } from '@angular/forms';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [ListadoComponent, MantenimientoComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    TableModule,
    ToastModule,
    ButtonModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule
  ]
})
export class DataModule { }
