import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsResumeComponent } from './instructors-resume.component';

describe('InstructorsResumeComponent', () => {
  let component: InstructorsResumeComponent;
  let fixture: ComponentFixture<InstructorsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
