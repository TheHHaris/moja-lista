import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjesmaComponent } from './pjesma.component';

describe('PjesmaComponent', () => {
  let component: PjesmaComponent;
  let fixture: ComponentFixture<PjesmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjesmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjesmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
