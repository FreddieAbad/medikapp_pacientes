import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularComponent } from './calcular.component';

describe('CalcularComponent', () => {
  let component: CalcularComponent;
  let fixture: ComponentFixture<CalcularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
