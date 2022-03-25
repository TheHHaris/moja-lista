import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokaziPjesmuComponent } from './pokazi-pjesmu.component';

describe('PokaziPjesmuComponent', () => {
  let component: PokaziPjesmuComponent;
  let fixture: ComponentFixture<PokaziPjesmuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokaziPjesmuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokaziPjesmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
