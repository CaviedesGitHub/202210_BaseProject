/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';

import { Vehiculo } from '../vehiculo';
import { VehiculoService} from '../vehiculo.service';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(1, "Chevrolet", "Onix", "LT", 2022, 4839, "Gris Satin", ""),
      new Vehiculo(2, "Renault", "Kangoo", "VU Express", 2017, 93272, "Blanco", ""),
      new Vehiculo(3, "Chevrolet", "Spark", "Life", 2018, 55926, "Plata", "")
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia Tener Tabla con 3 filas y un encabezado.', () => {
    expect(fixture.debugElement.queryAll(By.css('tbody > tr')).length).toEqual(component.vehiculos.length);
    expect(fixture.debugElement.queryAll(By.css('thead > tr')).length).toEqual(1);
  });

});
