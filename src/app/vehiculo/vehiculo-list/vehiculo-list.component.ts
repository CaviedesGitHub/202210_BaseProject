import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo>=[];
  mapaTotal:Map<string,number>=new Map();
  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos)=>{
      this.vehiculos=vehiculos;
      this.totalizaDatos();
    })
  }

  ngOnInit() {
    this.getVehiculos();
  }

  totalizaDatos():void{
    this.mapaTotal.clear();
    this.vehiculos.forEach((veh)=>{
      if (this.mapaTotal.has(veh.marca)){
        let conteo=this.mapaTotal.get(veh.marca)!;
        this.mapaTotal.set(veh.marca, conteo+1);
      }
      else{
        this.mapaTotal.set(veh.marca, 1);
      }
    });
  };

  asIsOrder(a:any, b:any){
    return 1;
  }

}
