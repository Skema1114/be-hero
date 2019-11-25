import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFavoritoPage } from './listar-favorito.page';

describe('ListarFavoritoPage', () => {
  let component: ListarFavoritoPage;
  let fixture: ComponentFixture<ListarFavoritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFavoritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFavoritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
