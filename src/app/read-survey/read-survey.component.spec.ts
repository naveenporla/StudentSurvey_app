import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSurveyComponent } from './read-survey.component';

describe('ReadSurveyComponent', () => {
  let component: ReadSurveyComponent;
  let fixture: ComponentFixture<ReadSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
