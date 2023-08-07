import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGbComponent } from './create-gb.component';

describe('CreateGbComponent', () => {
  let component: CreateGbComponent;
  let fixture: ComponentFixture<CreateGbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
