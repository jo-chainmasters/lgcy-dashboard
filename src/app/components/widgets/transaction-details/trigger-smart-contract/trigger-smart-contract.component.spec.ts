import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerSmartContractComponent } from './trigger-smart-contract.component';

describe('TriggerSmartContractComponent', () => {
  let component: TriggerSmartContractComponent;
  let fixture: ComponentFixture<TriggerSmartContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerSmartContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerSmartContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
