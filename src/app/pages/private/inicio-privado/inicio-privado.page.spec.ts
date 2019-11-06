import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPrivadoPage } from './inicio-privado.page';

describe('InicioPrivadoPage', () => {
  let component: InicioPrivadoPage;
  let fixture: ComponentFixture<InicioPrivadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPrivadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPrivadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
