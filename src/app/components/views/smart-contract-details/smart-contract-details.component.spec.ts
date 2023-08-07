import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContractDetailsComponent } from './smart-contract-details.component';

describe('SmartContractDetailsComponent', () => {
  let component: SmartContractDetailsComponent;
  let fixture: ComponentFixture<SmartContractDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartContractDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
