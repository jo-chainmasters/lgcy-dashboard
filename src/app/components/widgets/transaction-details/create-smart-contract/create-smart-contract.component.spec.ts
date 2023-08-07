import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSmartContractComponent } from './create-smart-contract.component';

describe('CreateSmartContractComponent', () => {
  let component: CreateSmartContractComponent;
  let fixture: ComponentFixture<CreateSmartContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSmartContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSmartContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
