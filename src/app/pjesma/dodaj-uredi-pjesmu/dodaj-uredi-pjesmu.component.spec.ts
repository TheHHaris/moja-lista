import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajUrediPjesmuComponent } from './dodaj-uredi-pjesmu.component';

describe('DodajUrediPjesmuComponent', () => {
  let component: DodajUrediPjesmuComponent;
  let fixture: ComponentFixture<DodajUrediPjesmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajUrediPjesmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajUrediPjesmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
