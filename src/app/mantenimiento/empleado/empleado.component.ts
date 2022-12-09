import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/api/models';
import { EmpleadoControllerService } from '../../api/services/empleado-controller.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  empleado:Empleado[]=[];
  visible:boolean=false;

  constructor(
    private empleadoService:EmpleadoControllerService,
    private messageService:NzMessageService
  ){}

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data=>this.empleado=data)
  }

  eliminar(id:string):void{
    this.empleadoService.deleteById({id}).subscribe(()=>{
      this.empleado=this.empleado.filter(x => x.id !== id);
      this.messageService.info('Registro eliminado')
    })
    
  }

  cancel():void{
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar():void{
    this.visible=false
  }
  mostrar(data?:Empleado):void{
    this.visible=true
  }
  guardar():void{

  }
}
