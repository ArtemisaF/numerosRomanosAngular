import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRomanosComponent } from './my-romanos.component';




describe('test',() =>{
  it('test convertir MCMXCV romanos a 1995',()=>{
    const prueba = new MyRomanosComponent();
    const res =prueba.convertirRD("MCMXCV");
    expect(res).toBe(1995);
  })

  it('test convertir XLVIII romanos a 48',()=>{
    const prueba = new MyRomanosComponent();
    const res =prueba.convertirRD("XLVIII");
    expect(res).toBe(48);
  })

  it('test convertir MDCCCLXXXIII romanos a 1883',()=>{
    const prueba = new MyRomanosComponent();
    const res =prueba.convertirRD("MDCCCLXXXIII");
    expect(res).toBe(1883);
  })
});