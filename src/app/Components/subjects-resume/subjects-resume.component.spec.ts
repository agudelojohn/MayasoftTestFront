import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsResumeComponent } from './subjects-resume.component';

describe('SubjectsResumeComponent', () => {
  let component: SubjectsResumeComponent;
  let fixture: ComponentFixture<SubjectsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
