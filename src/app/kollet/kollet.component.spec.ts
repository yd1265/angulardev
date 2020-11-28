import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolletComponent } from './kollet.component';

describe('KolletComponent', () => {
  let component: KolletComponent;
  let fixture: ComponentFixture<KolletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
