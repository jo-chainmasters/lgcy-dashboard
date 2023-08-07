import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUsdlComponent } from './freeze-usdl.component';

describe('FreezeUsdlComponent', () => {
  let component: FreezeUsdlComponent;
  let fixture: ComponentFixture<FreezeUsdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezeUsdlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreezeUsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
