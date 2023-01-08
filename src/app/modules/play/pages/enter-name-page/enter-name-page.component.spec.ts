import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNamePageComponent } from './enter-name-page.component';

describe('EnterNamePageComponent', () => {
  let component: EnterNamePageComponent;
  let fixture: ComponentFixture<EnterNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterNamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
