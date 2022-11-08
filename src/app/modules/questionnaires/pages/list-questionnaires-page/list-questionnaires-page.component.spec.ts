import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionnairesPageComponent } from './list-questionnaires-page.component';

describe('ListQuestionnairesPageComponent', () => {
  let component: ListQuestionnairesPageComponent;
  let fixture: ComponentFixture<ListQuestionnairesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionnairesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuestionnairesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
