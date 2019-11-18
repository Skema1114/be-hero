import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHeroiPage } from './listar-heroi.page';

describe('ListarHeroiPage', () => {
  let component: ListarHeroiPage;
  let fixture: ComponentFixture<ListarHeroiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHeroiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHeroiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
