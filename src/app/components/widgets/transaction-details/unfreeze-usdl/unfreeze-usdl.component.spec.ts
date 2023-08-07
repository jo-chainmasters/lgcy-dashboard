import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfreezeUsdlComponent } from './unfreeze-usdl.component';

describe('UnfreezeUsdlComponent', () => {
  let component: UnfreezeUsdlComponent;
  let fixture: ComponentFixture<UnfreezeUsdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfreezeUsdlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfreezeUsdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
