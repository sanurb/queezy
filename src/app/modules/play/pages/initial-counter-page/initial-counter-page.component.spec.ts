import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialCounterPageComponent } from './initial-counter-page.component';

describe('InitialCounterPageComponent', () => {
  let component: InitialCounterPageComponent;
  let fixture: ComponentFixture<InitialCounterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialCounterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialCounterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
