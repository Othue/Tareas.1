import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CargoComponent } from './cargo/cargo.component';
import { CodigoTrabajoComponent } from './codigo-trabajo/codigo-trabajo.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';

//Importaciones de NG Zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    CargoComponent,
    CodigoTrabajoComponent,
    VacacionesComponent,
    
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    NzDatePickerModule,
    NzSelectModule,
    NzRadioModule,
    NzFormModule

  ]
})
export class MantenimientoModule { }
