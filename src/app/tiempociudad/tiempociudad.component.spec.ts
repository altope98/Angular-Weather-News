import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempociudadComponent } from './tiempociudad.component';

describe('TiempociudadComponent', () => {
  let component: TiempociudadComponent;
  let fixture: ComponentFixture<TiempociudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempociudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempociudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
