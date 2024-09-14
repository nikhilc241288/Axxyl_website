import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesTaxesComponent } from './fees-taxes.component';

describe('FeesTaxesComponent', () => {
  let component: FeesTaxesComponent;
  let fixture: ComponentFixture<FeesTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
