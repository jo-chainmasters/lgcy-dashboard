import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContractOverviewComponent } from './smart-contract-overview.component';

describe('SmartContractOverviewComponent', () => {
  let component: SmartContractOverviewComponent;
  let fixture: ComponentFixture<SmartContractOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartContractOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartContractOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
