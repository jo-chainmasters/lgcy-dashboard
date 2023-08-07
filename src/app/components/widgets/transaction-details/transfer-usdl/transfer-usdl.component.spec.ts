import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferUsdlComponent } from './transfer-usdl.component';

describe('TransferUsdlComponent', () => {
  let component: TransferUsdlComponent;
  let fixture: ComponentFixture<TransferUsdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferUsdlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferUsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
