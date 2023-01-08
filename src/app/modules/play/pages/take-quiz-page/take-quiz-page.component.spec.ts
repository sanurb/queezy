import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeQuizPageComponent } from './take-quiz-page.component';

describe('TakeQuizPageComponent', () => {
  let component: TakeQuizPageComponent;
  let fixture: ComponentFixture<TakeQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeQuizPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
