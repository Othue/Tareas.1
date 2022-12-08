import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CargoComponent } from './cargo/cargo.component';
import { CodigoTrabajoComponent } from './codigo-trabajo/codigo-trabajo.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    CargoComponent,
    CodigoTrabajoComponent,
    VacacionesComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
