import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeroiPage } from './lista-heroi.page';

describe('ListaHeroiPage', () => {
  let component: ListaHeroiPage;
  let fixture: ComponentFixture<ListaHeroiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHeroiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHeroiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
